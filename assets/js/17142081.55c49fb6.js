"use strict";(self.webpackChunksmooth=self.webpackChunksmooth||[]).push([[3043],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={},a="Animation",l={unversionedId:"design/infra/animation",id:"design/infra/animation",title:"Animation",description:"What happens when we put animations, such as AnimatedBuilder or CircularProgressIndicator, into the PreemptBuilder's builder argument (let's name it \"smooth region\")? This section will tell you. No worries - it will be quite simple :)",source:"@site/docs/design/infra/animation.md",sourceDirName:"design/infra",slug:"/design/infra/animation",permalink:"/flutter_smooth/design/infra/animation",draft:!1,editUrl:"https://github.com/fzyzcjy/flutter_smooth/tree/master/website/docs/design/infra/animation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Remove (3N-1) uncomfort",permalink:"/flutter_smooth/design/infra/rasterizer-queue/remove-jank"},next:{title:"Gesture",permalink:"/flutter_smooth/design/infra/gesture/"}},s={},u=[{value:"Background",id:"background",level:2},{value:"Solution",id:"solution",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"animation"},"Animation"),(0,i.kt)("p",null,"What happens when we put animations, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimatedBuilder")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"CircularProgressIndicator"),", into the ",(0,i.kt)("inlineCode",{parentName:"p"},"PreemptBuilder"),"'s builder argument (let's name it \"smooth region\")? This section will tell you. No worries - it will be quite simple :)"),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"The animations are indeed driven by ",(0,i.kt)("inlineCode",{parentName:"p"},"Ticker"),"s under the hood. An animation may look to be driven by a ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimationController"),", but under the hood that controller utilizes ticker. Luckily, ",(0,i.kt)("inlineCode",{parentName:"p"},"Ticker")," has a minimalist API: It triggers ",(0,i.kt)("inlineCode",{parentName:"p"},"onTick")," callback in each and every frame (this is the story without flutter_smooth)."),(0,i.kt)("p",null,"If we only implement the infra layer using ideas before this section, animations inside smooth region will not animate at all. This is because, even though the smooth region has build/layout/paint/etc called per 16.67ms via preempt, the ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimationController")," does not see any ",(0,i.kt)("inlineCode",{parentName:"p"},"onTick")," and thus never change the animating value, so the output UI is unchanged, thus user faces jank even though it is literally 60FPS."),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("p",null,"Just make extra calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"onTick"),". More specifically, one extra onTick per extra render."),(0,i.kt)("p",null,"Notice that we need to provide the correct time stamp to ",(0,i.kt)("inlineCode",{parentName:"p"},"onTick"),"'s argument. For example, if the first preempt render provides 1000ms, the second preempt should provide 1016.67ms, etc. By doing so, ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimationController")," will change its animation value according to the time stamp, and we see animations on screen at full smooth."))}p.isMDXComponent=!0}}]);