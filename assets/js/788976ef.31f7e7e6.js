"use strict";(self.webpackChunksmooth=self.webpackChunksmooth||[]).push([[6514],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,f=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6224:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},o="Analysis",s={unversionedId:"design/infra/brake/analysis",id:"design/infra/brake/analysis",title:"Analysis",description:"Comparison",source:"@site/docs/design/infra/brake/analysis.md",sourceDirName:"design/infra/brake",slug:"/design/infra/brake/analysis",permalink:"/flutter_smooth/design/infra/brake/analysis",draft:!1,editUrl:"https://github.com/fzyzcjy/flutter_smooth/tree/master/website/docs/design/infra/brake/analysis.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Idea",permalink:"/flutter_smooth/design/infra/brake/idea"},next:{title:"Rasterizer queue",permalink:"/flutter_smooth/design/infra/rasterizer-queue/"}},l={},c=[{value:"Comparison",id:"comparison",level:2},{value:"Cost",id:"cost",level:2},{value:"Amortized cost",id:"amortized-cost",level:3},{value:"Single-frame worst cost",id:"single-frame-worst-cost",level:3}],m={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"analysis"},"Analysis"),(0,a.kt)("h2",{id:"comparison"},"Comparison"),(0,a.kt)("p",null,'At a first glance, it looks a bit familiar with the "split heavy work into multi frames and early return in each frame" prior work. To fully understand this design, we need to notice their differences, mainly in the occasion when to trigger an early return:'),(0,a.kt)("p",null,"In prior work, it is triggered unconditionally, after a portion of heavy work has been done (as long as we are discussing heavy-work frames). In brake, it is never triggered, unless preempt notices there are some events that it cannot handle within preempt render."),(0,a.kt)("h2",{id:"cost"},"Cost"),(0,a.kt)("h3",{id:"amortized-cost"},"Amortized cost"),(0,a.kt)("p",null,"Firstly, the amortized cost is very small. With the comparison above, we now clearly see why ths cost is minor, even though the prior work has many shortcomings. It is mainly because the frequency of triggering the mechanism. In prior work, the early return mechanism with all the cost are triggered on each and every 16.67ms (again assuming we are discussing heavy-work frames). However, in the brake, it is triggerred very sparsely. For the ListView scrolling example, only the pointer down and pointer up (the latter can be overcome indeed) needs to trigger brake. Suppose a scroll takes 2 second, then only <2% of the  scenarios trigger brake, so the amortized cost is very tiny if not neglitable."),(0,a.kt)("h3",{id:"single-frame-worst-cost"},"Single-frame worst cost"),(0,a.kt)("p",null,"Secondly, consider the frame that has the worst cost, it is still no problem. If the brake is alone, we do face the risk of jank. For example, just like prior work, if we ",(0,a.kt)("em",{parentName:"p"},"end the work")," after the deadline by even 0.01ms, then we will face one jank, and as discussed earlier, such probablity is inevitable. However, the brake is not alone, but accompanied with the preempt. Thus, it has much looser timing requirements - as long as we ",(0,a.kt)("em",{parentName:"p"},"start")," (not end, but start) a new frame a few milliseconds before the deadline, we are safe and no jank will happen. For a concrete example, in the third row of the figure, even if the second frame starts at (e.g.) time 2.8, there is still no jank."))}p.isMDXComponent=!0}}]);