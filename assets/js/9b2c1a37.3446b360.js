(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2568],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=i,v=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(v,o(o({ref:t},p),{},{components:r})):n.createElement(v,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1016:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),o=["components"],c={id:"nativejsref.nativejsref-1",title:"Interface: NativeJSRef",sidebar_label:"NativeJSRef",custom_edit_url:null},l={unversionedId:"api/core/interfaces/nativejsref.nativejsref-1",id:"api/core/interfaces/nativejsref.nativejsref-1",isDocsHomePage:!1,title:"Interface: NativeJSRef",description:"NativeJSRef.NativeJSRef",source:"@site/docs/api/core/interfaces/nativejsref.nativejsref-1.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/nativejsref.nativejsref-1",permalink:"/docs/api/core/interfaces/nativejsref.nativejsref-1",editUrl:null,version:"current",sidebar_label:"NativeJSRef",frontMatter:{id:"nativejsref.nativejsref-1",title:"Interface: NativeJSRef",sidebar_label:"NativeJSRef",custom_edit_url:null},sidebar:"api",previous:{title:"Interface: ModelResultMetrics",permalink:"/docs/api/core/interfaces/mobilemodelmodule.modelresultmetrics"},next:{title:"CLI",permalink:"/docs/api/cli"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"ID",id:"id",children:[]}]}],p={toc:s};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/core/modules/nativejsref"},"NativeJSRef"),".NativeJSRef"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"NativeJSRef")),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/core/interfaces/canvasview.imagedata"},"ImageData")),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/core/interfaces/imagemodule.image"},"Image")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"id"},"ID"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"ID"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The internal ID for the object instance in native. Instead of serializing\nthe object in native and sending it via the React Native Bridge, each\nnative object will be assigned an ID which is sent to JavaScript instead.\nThe ID will be used to reference the native object instance when calling\nfunctions on the JavaScript object."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/7f7488f/react-native-pytorch-core/src/NativeJSRef.ts#L64"},"NativeJSRef.ts:64")))}f.isMDXComponent=!0}}]);