"use strict";(self.webpackChunksmooth=self.webpackChunksmooth||[]).push([[8274],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>p});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=i.createContext({}),u=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=u(e.components);return i.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(a),p=r,h=c["".concat(o,".").concat(p)]||c[p]||d[p]||n;return a?i.createElement(h,s(s({ref:t},m),{},{components:a})):i.createElement(h,s({ref:t},m))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<n;u++)s[u]=a[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5635:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var i=a(7462),r=(a(7294),a(3905));const n={},s="Summary",l={unversionedId:"design/review/summary",id:"design/review/summary",title:"Summary",description:'Many people have discussed and worked on the main problem that flutter_smooth aims to solve - the jank caused by slow build/layout. Here is a brief summary after I digged into the history, for completeness, just like the "literature review" that everyone needs to do when writing a paper. This list may be incomplete. Feel free to create an issue if you find something is missing, or something needs to be added for deeper understanding of the topic.',source:"@site/docs/design/review/summary.md",sourceDirName:"design/review",slug:"/design/review/summary",permalink:"/flutter_smooth/design/review/summary",draft:!1,editUrl:"https://github.com/fzyzcjy/flutter_smooth/tree/master/website/docs/design/review/summary.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Literature review",permalink:"/flutter_smooth/design/review/"},next:{title:"Comparison",permalink:"/flutter_smooth/design/review/comparison"}},o={},u=[{value:"@fzyzcjy",id:"fzyzcjy",level:2},{value:"Source",id:"source",level:3},{value:"Main idea",id:"main-idea",level:3},{value:"@Hixie, @dnfield, ...",id:"hixie-dnfield-",level:2},{value:"Source",id:"source-1",level:3},{value:"Main idea",id:"main-idea-1",level:3},{value:"@gaaclarke",id:"gaaclarke",level:2},{value:"Source",id:"source-2",level:3},{value:"Main idea",id:"main-idea-2",level:3},{value:"@Nayuta403 and Alibaba",id:"nayuta403-and-alibaba",level:2},{value:"Source",id:"source-3",level:3},{value:"Main idea",id:"main-idea-3",level:3},{value:"React Fiber",id:"react-fiber",level:2},{value:"Source",id:"source-4",level:3},{value:"Main idea",id:"main-idea-4",level:3},{value:"@xanahopper, ...",id:"xanahopper-",level:2},{value:"Sources",id:"sources",level:2},{value:"Main idea",id:"main-idea-5",level:3}],m={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Many people have discussed and worked on the main problem that ",(0,r.kt)("inlineCode",{parentName:"p"},"flutter_smooth")," aims to solve - the jank caused by slow build/layout. Here is a brief summary after I ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flutter/flutter/issues/101227#issuecomment-1249961627"},"digged into"),' the history, for completeness, just like the "literature review" that everyone needs to do when writing a paper. This list may be incomplete. Feel free to create an issue if you find something is missing, or something needs to be added for deeper understanding of the topic.'),(0,r.kt)("h2",{id:"fzyzcjy"},"@fzyzcjy"),(0,r.kt)("p",null,"Put myself first since I fail the most times :)"),(0,r.kt)("h3",{id:"source"},"Source"),(0,r.kt)("p",null,"Mainly ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flutter/flutter/issues/101227"},"this issue"),"."),(0,r.kt)("h3",{id:"main-idea"},"Main idea"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/flutter/flutter/issues/101227#issue-1190511582"},"link"),") Directly migrate the Fiber from React (JavaScript) into Flutter - failed"),(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/flutter/flutter/issues/101227#issuecomment-1087243414"},"link")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/fzyzcjy/flutter_smooth_experiment_2022_april"},"prototype"),") Hack the build and layout phase in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/fzyzcjy/flutter_smooth_experiment_2022_april"},"this prototype repo")," - failed"),(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/flutter/flutter/issues/101227#issuecomment-1247541808"},"link"),") Let animation be in a new subtree, and run its layout/paint firstly, with other low-priority subtree pauseable - failed"),(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/flutter/flutter/issues/101227#issuecomment-1247625317"},"link")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/flutter/flutter/issues/101227#issuecomment-1247871402"},"link"),") Based on the idea above, and allow children to be half-baked, and use ",(0,r.kt)("inlineCode",{parentName:"li"},"toPictureSync")," to avoid problem of half-done children - failed"),(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/flutter/flutter/issues/101227#issuecomment-1247631508"},"link"),") Use ",(0,r.kt)("inlineCode",{parentName:"li"},"yield")," to make it suspendable, like Redux Saga - failed"),(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/flutter/flutter/issues/101227#issuecomment-1247849735"},"link")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/flutter/flutter/issues/101227#issuecomment-1248894781"},"prototype"),") Use a new RenderObject which early returns when timeout - failed"),(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/flutter/flutter/issues/101227#issuecomment-1249005541"},"link"),") Dual isolates, using a second isolate to compute animation widgets - failed"),(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/flutter/flutter/issues/101227#issuecomment-1249961627"},"link"),") Experiment to use stackful coroutine or thread mutex to implement it - failed"),(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/flutter/flutter/issues/101227#issuecomment-1250056634"},"link"),") Enhance keframe by running as much as possible before deadline - failed"),(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/flutter/flutter/issues/101227#issuecomment-1252379787"},"link"),') The "preemption" proposal, which later becomes one of the main ideas of this package')),(0,r.kt)("h2",{id:"hixie-dnfield-"},"@Hixie, @dnfield, ..."),(0,r.kt)("p",null,"... and @goderbauer, @chunhtai, @gspencergoog (who spoke in the discussions)."),(0,r.kt)("h3",{id:"source-1"},"Source"),(0,r.kt)("p",null,"Some discussions starting from ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/channels/608014603317936148/608021234516754444/930241489374683157"},"here")," and ending ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/channels/608014603317936148/608021234516754444/931276162058031145"},"here"),". Hixie is also said to have tried ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/channels/608014603317936148/613398126367211520/977090864813846548"},"an experiment")," (I have not found the details though)."),(0,r.kt)("h3",{id:"main-idea-1"},"Main idea"),(0,r.kt)("p",null,'Interruptible layout. "Do as much work as you can but yield after X ms, and resume when I call you back from where you left off" (quoted from ',(0,r.kt)("a",{parentName:"p",href:"https://discord.com/channels/608014603317936148/608021234516754444/930882722849771590"},"here"),")."),(0,r.kt)("h2",{id:"gaaclarke"},"@gaaclarke"),(0,r.kt)("h3",{id:"source-2"},"Source"),(0,r.kt)("p",null,"Messages near ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/channels/608014603317936148/608021234516754444/1022292715221831680"},"here"),", when discussing my proposal."),(0,r.kt)("h3",{id:"main-idea-2"},"Main idea"),(0,r.kt)("p",null,"Slowness of build/layout may be caused by memory locality which will be hard to fix."),(0,r.kt)("h2",{id:"nayuta403-and-alibaba"},"@Nayuta403 and Alibaba"),(0,r.kt)("h3",{id:"source-3"},"Source"),(0,r.kt)("p",null,"A few sources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The blogs (",(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6940134891606507534"},"this")," and ",(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6979781997568884766"},"this"),") from @Nayuta403."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6888887439922987022"},"This")," blog from Alibaba (also quoted by @Nayuta403 in the blogs above)."),(0,r.kt)("li",{parentName:"ul"},"Also having some discussions ",(0,r.kt)("a",{parentName:"li",href:"https://discord.com/channels/608014603317936148/608014603317936150/977074969542553600"},"here")," and ",(0,r.kt)("a",{parentName:"li",href:"https://discord.com/channels/608014603317936148/613398126367211520/977109431408009317"},"here")," among @Nayuta403 and Flutter team.")),(0,r.kt)("h3",{id:"main-idea-3"},"Main idea"),(0,r.kt)("p",null,"Separate frame. The heavy job is separated into multiple smaller jobs, and each frame only process one (by @Nayuta403) or a predetermined number (by Alibaba) of the jobs."),(0,r.kt)("h2",{id:"react-fiber"},"React Fiber"),(0,r.kt)("h3",{id:"source-4"},"Source"),(0,r.kt)("p",null,"N/A (It is an official release, not a discussion or experiment)"),(0,r.kt)("h3",{id:"main-idea-4"},"Main idea"),(0,r.kt)("p",null,"When the browser needs to do rendering work, JS suspends the current work to let the JavaScript thread be idle, and continue later."),(0,r.kt)("h2",{id:"xanahopper-"},"@xanahopper, ..."),(0,r.kt)("p",null,"... and probably @Nayuta403, @JsouLiang, @wangying3426 since they seem to be the same team."),(0,r.kt)("h2",{id:"sources"},"Sources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Discussions such as ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/flutter/flutter/issues/101227#issuecomment-1249137253"},"this")," and a few after it.")),(0,r.kt)("h3",{id:"main-idea-5"},"Main idea"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use multiple isolates instead of one"),(0,r.kt)("li",{parentName:"ul"},"Use structure like React Fiber such as threaded tree, and convert a tree of widgets to a chain list, so that it can be suspended at any iteration of traversal (similar to React Fiber spirit).")))}d.isMDXComponent=!0}}]);