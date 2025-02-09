# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

import tempfile
import urllib
import zipfile
from pathlib import Path

import torch
import torchaudio
import torchvision
from torch import Tensor
from torch.utils.mobile_optimizer import optimize_for_mobile
from torchaudio.models.wav2vec2.utils.import_huggingface import import_huggingface_model
from transformers import (
    DistilBertTokenizer,
    DistilBertForQuestionAnswering,
    Wav2Vec2ForCTC,
)

print(f"torch version {torch.__version__}")

MODEL_EXTENSION = "ptl"


def bundle_live_spec_and_export_model(name: str, model):
    optimized_model = optimize_for_mobile(model)
    spec = Path(f"{name}.{MODEL_EXTENSION}.live.spec.json").read_text()
    extra_files = {}
    extra_files["model/live.spec.json"] = spec
    optimized_model._save_for_lite_interpreter(
        f"{name}.{MODEL_EXTENSION}", _extra_files=extra_files
    )
    print(f"Model {name} successfully exported")


def export_image_classification_models():
    models = {
        "resnet18": torchvision.models.resnet18(pretrained=True),
        "mobilenet_v3_large": torchvision.models.mobilenet_v3_large(pretrained=True),
        "mobilenet_v3_small": torchvision.models.mobilenet_v3_small(pretrained=True),
    }

    print("Exporting image classification models")

    for name, model in models.items():
        print(f"Exporting model {name}")
        model.eval()
        script_model = torch.jit.script(model)
        bundle_live_spec_and_export_model(name, script_model)


def export_image_segmentation_models():
    print("Exporting image segmentation models")

    name = "detr_resnet50"

    model = torch.hub.load("facebookresearch/detr", name, pretrained=True)
    model.eval()

    example = torch.rand(1, 3, 800, 1066)
    traced_script_module = torch.jit.trace(model, example, strict=False)
    spec = Path(f"{name}.{MODEL_EXTENSION}.live.spec.json").read_text()
    extra_files = {"model/live.spec.json": spec}
    optimized_model = optimize_for_mobile(traced_script_module)
    optimized_model._save_for_lite_interpreter(
        f"{name}.{MODEL_EXTENSION}", _extra_files=extra_files
    )


def export_mnist_model():
    print("Exporting MNIST model")

    filehandle, _ = urllib.request.urlretrieve(
        "https://torchserve.pytorch.org/mar_files/mnist_scripted_v2.mar"
    )

    with tempfile.TemporaryDirectory() as tempdir:
        zip_file_object = zipfile.ZipFile(filehandle, "r")
        zip_file_object.extract("mnist_script.pt", tempdir)
        model = torch.jit.load(f"{tempdir}/mnist_script.pt")
        script_model = torch.jit.script(model)
        bundle_live_spec_and_export_model("mnist", script_model)


def export_nlp_models():
    print("Exporting NLP models")

    tokenizer = DistilBertTokenizer.from_pretrained(
        "distilbert-base-uncased-distilled-squad"
    )
    model = DistilBertForQuestionAnswering.from_pretrained(
        "distilbert-base-uncased-distilled-squad"
    )
    model.eval()

    question, text = (
        "When will support for GPU be available?!",
        "There is a growing need to execute ML models on edge devices to reduce latency, preserve privacy and enable new interactive use cases. In the past, engineers used to train models separately. They would then go through a multi-step, error prone and often complex process to transform the models for execution on a mobile device. The mobile runtime was often significantly different from the operations available during training leading to inconsistent developer and eventually user experience. PyTorch Mobile removes these friction surfaces by allowing a seamless process to go from training to deployment by staying entirely within the PyTorch ecosystem. It provides an end-to-end workflow that simplifies the research to production environment for mobile devices. In addition, it paves the way for privacy-preserving features via Federated Learning techniques. PyTorch Mobile is in beta stage right now and in wide scale production use. It will soon be available as a stable release once the APIs are locked down. Key features of PyTorch Mobile: Available for iOS, Android and Linux; Provides APIs that cover common preprocessing and integration tasks needed for incorporating ML in mobile applications; Support for tracing and scripting via TorchScript IR; Support for XNNPACK floating point kernel libraries for Arm CPUs; Integration of QNNPACK for 8-bit quantized kernels. Includes support for per-channel quantization, dynamic quantization and more; Build level optimization and selective compilation depending on the operators needed for user applications, i.e., the final binary size of the app is determined by the actual operators the app needs; Support for hardware backends like GPU, DSP, NPU will be available soon.",
    )
    # inputs['input_ids'].size() is 360, the maximum size of the input tokens generated from the user question and text
    # on mobile apps, if the size of the input tokens of the text and question is less than 360, padding will be needed to make the model work correctly.

    inputs = tokenizer(question, text, return_tensors="pt")
    model_dynamic_quantized = torch.quantization.quantize_dynamic(
        model, qconfig_spec={torch.nn.Linear}, dtype=torch.qint8
    )
    traced_model = torch.jit.trace(
        model_dynamic_quantized, inputs["input_ids"], strict=False
    )

    bundle_live_spec_and_export_model("bert_qa", traced_model)


def export_audio_models():
    print("Exporting Audio models")

    class SpeechRecognizer(torch.nn.Module):
        def __init__(self, model):
            super().__init__()
            self.model = model
            self.labels = [
                "<s>",
                "<pad>",
                "</s>",
                "<unk>",
                "|",
                "E",
                "T",
                "A",
                "O",
                "N",
                "I",
                "H",
                "S",
                "R",
                "D",
                "L",
                "U",
                "M",
                "W",
                "C",
                "F",
                "G",
                "Y",
                "P",
                "B",
                "V",
                "K",
                "'",
                "X",
                "J",
                "Q",
                "Z",
            ]

        def forward(self, waveforms: Tensor) -> str:
            """Given a single channel speech data, return transcription.
            Args:
                waveforms (Tensor): Speech tensor. Shape `[1, num_frames]`.
            Returns:
                str: The resulting transcript
            """
            logits, _ = self.model(waveforms)  # [batch, num_seq, num_label]
            best_path = torch.argmax(logits[0], dim=-1)  # [num_seq,]
            prev = ""
            hypothesis = ""
            for i in best_path:
                char = self.labels[i]
                if char == prev:
                    continue
                if char == "<s>":
                    prev = ""
                    continue
                hypothesis += char
                prev = char
            return hypothesis.replace("|", " ")

    # Load Wav2Vec2 pretrained model from Hugging Face Hub
    model = Wav2Vec2ForCTC.from_pretrained("facebook/wav2vec2-base-960h")
    # Convert the model to torchaudio format, which supports TorchScript.
    model = import_huggingface_model(model)
    # Remove weight normalization which is not supported by quantization.
    model.encoder.transformer.pos_conv_embed.__prepare_scriptable__()
    model = model.eval()
    # Attach decoder
    model = SpeechRecognizer(model)

    # Apply quantization / script / optimize for motbile
    quantized_model = torch.quantization.quantize_dynamic(
        model, qconfig_spec={torch.nn.Linear}, dtype=torch.qint8
    )
    scripted_model = torch.jit.script(quantized_model)
    optimized_model = optimize_for_mobile(scripted_model)

    # Sanity check
    waveform, _ = torchaudio.load("scent_of_a_woman_future.wav")
    print("Result:", optimized_model(waveform))

    name = "wav2vec2"

    spec = Path(f"{name}.pt.live.spec.json").read_text()
    extra_files = {}
    extra_files["model/live.spec.json"] = spec
    optimized_model._save_for_lite_interpreter(f"{name}.ptl", _extra_files=extra_files)
    print(f"Model {name} successfully exported")


def main():
    export_image_classification_models()
    export_image_segmentation_models()
    export_mnist_model()
    export_nlp_models()
    export_audio_models()


if __name__ == "__main__":
    main()
