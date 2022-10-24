"use strict";(self.webpackChunksmooth=self.webpackChunksmooth||[]).push([[859],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(t),d=i,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||o;return t?n.createElement(m,a(a({ref:r},c),{},{components:t})):n.createElement(m,a({ref:r},c))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7409:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(7462),i=(t(7294),t(3905));const o={},a="After",l={unversionedId:"design/infra/rasterizer-queue/after",id:"design/infra/rasterizer-queue/after",title:"After",description:"I will firstly present the modified animator logic here. In the next sections, I will then discuss why these are necessary and what problems it solves.",source:"@site/docs/design/infra/rasterizer-queue/after.md",sourceDirName:"design/infra/rasterizer-queue",slug:"/design/infra/rasterizer-queue/after",permalink:"/flutter_smooth/design/infra/rasterizer-queue/after",draft:!1,editUrl:"https://github.com/fzyzcjy/flutter_smooth/tree/master/website/docs/design/infra/rasterizer-queue/after.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Before",permalink:"/flutter_smooth/design/infra/rasterizer-queue/before"},next:{title:"Multi-render",permalink:"/flutter_smooth/design/infra/rasterizer-queue/multi-render"}},u={},s=[{value:"Code",id:"code",level:2},{value:"Summary",id:"summary",level:2}],c={toc:s};function p(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"after"},"After"),(0,i.kt)("p",null,"I will firstly present the modified animator logic here. In the next sections, I will then discuss why these are necessary and what problems it solves."),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("p",null,"The changes are marked as ",(0,i.kt)("inlineCode",{parentName:"p"},"// CHANGE: ...")," below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'Animator::Animator()\n    : layer_tree_pipeline_(std::make_shared<LayerTreePipeline>(2)) {}\n\nvoid Animator::BeginFrame() {\n  if (!producer_continuation_) {\n    producer_continuation_ = layer_tree_pipeline_->Produce();\n\n    if (!producer_continuation_) {\n      TRACE_EVENT0("flutter", "PipelineFull");\n      // CHANGE: do not return even if pipeline full\n      // RequestFrame(); return;\n    }\n  }\n  \n  // CHANGE: remove this (since we do not early return if pipeline full)\n  // FML_DCHECK(producer_continuation_);\n\n  delegate_.OnAnimatorBeginFrame();\n}\n\nvoid Animator::Render(std::shared_ptr<flutter::LayerTree> layer_tree) {\n  // CHANGE: add these several lines (if no continuation, trigger creating one if possible)\n  if (!producer_continuation_) {\n    producer_continuation_ = layer_tree_pipeline_->Produce();\n  }\n  \n  // Commit the pending continuation.\n  PipelineProduceResult result = producer_continuation_.Complete(layer_tree);\n\n  if (!result.success) {\n    FML_DLOG(INFO) << "No pending continuation to commit";\n    return;\n  }\n\n  ... notify rasterizer ...\n}\n')),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"To summarize, there are two changes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"Render"),", originally we early-return if there is no occupied seat (the continuation). However, we now produce one. (Notice the ",(0,i.kt)("inlineCode",{parentName:"li"},"Produce")," may fail if there is really no room in pipeline.)"),(0,i.kt)("li",{parentName:"ol"},"When ",(0,i.kt)("inlineCode",{parentName:"li"},"BeginFrame"),", originally we early-return as long as the pipeline is full at that time. However, we are more optimistic and continue computing a frame even if it is full now.")))}p.isMDXComponent=!0}}]);