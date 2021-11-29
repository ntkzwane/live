(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8568],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return s}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),d=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),s=n,f=u["".concat(m,".").concat(s)]||u[s]||c[s]||i;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2267:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d},default:function(){return c}});var r=a(2122),n=a(9756),i=(a(7294),a(3905)),o=["components"],l={id:"imagemodule",title:"Module: ImageModule",sidebar_label:"ImageModule",sidebar_position:0,custom_edit_url:null},m={unversionedId:"api/core/modules/imagemodule",id:"api/core/modules/imagemodule",isDocsHomePage:!1,title:"Module: ImageModule",description:"Interfaces",source:"@site/docs/api/core/modules/imagemodule.md",sourceDirName:"api/core/modules",slug:"/api/core/modules/imagemodule",permalink:"/docs/api/core/modules/imagemodule",editUrl:null,version:"current",sidebar_label:"ImageModule",sidebarPosition:0,frontMatter:{id:"imagemodule",title:"Module: ImageModule",sidebar_label:"ImageModule",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"Module: expo-plugin/withPyTorchCore",permalink:"/docs/api/core/modules/expo_plugin_withpytorchcore"},next:{title:"Module: MobileModelModule",permalink:"/docs/api/core/modules/mobilemodelmodule"}},d=[{value:"Interfaces",id:"interfaces",children:[]},{value:"Variables",id:"variables",children:[{value:"ImageUtil",id:"imageutil",children:[]}]},{value:"Functions",id:"functions",children:[{value:"wrapRef",id:"wrapref",children:[]}]}],p={toc:d};function c(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/core/interfaces/imagemodule.image"},"Image"))),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"imageutil"},"ImageUtil"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"ImageUtil"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core/modules/imagemodule#imageutil"},"ImageUtil")," object provides functions to load an ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core/interfaces/imagemodule.image"},"Image")," either from\na URL or load an image that is bundled with the React Native app bundle. The\nreturned Image object can the then be used to run model inference or it can\nbe drawn on a canvas."),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fromBundle")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"imagePath"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core/interfaces/imagemodule.image"},"Image"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fromFile")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"path"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core/interfaces/imagemodule.image"},"Image"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fromImageData")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"imageData"),": ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core/interfaces/canvasview.imagedata"},"ImageData"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core/interfaces/imagemodule.image"},"Image"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fromURL")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"url"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core/interfaces/imagemodule.image"},"Image"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"release")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"image"),": ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core/interfaces/imagemodule.image"},"Image"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise"),"<void",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"toFile")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"image"),": ",(0,i.kt)("a",{parentName:"td",href:"/docs/api/core/interfaces/imagemodule.image"},"Image"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise"),"<string",">")))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/7f7488f/react-native-pytorch-core/src/ImageModule.ts#L143"},"ImageModule.ts:143")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"wrapref"},"wrapRef"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"wrapRef"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"ref"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/core/interfaces/imagemodule.image"},"Image")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ref")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/core/interfaces/nativejsref.nativejsref-1"},"NativeJSRef"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/core/interfaces/imagemodule.image"},"Image")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/7f7488f/react-native-pytorch-core/src/ImageModule.ts#L98"},"ImageModule.ts:98")))}c.isMDXComponent=!0}}]);