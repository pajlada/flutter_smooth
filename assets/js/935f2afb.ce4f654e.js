"use strict";(self.webpackChunksmooth=self.webpackChunksmooth||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/flutter_smooth/","docId":"index"},{"type":"link","label":"Installation","href":"/flutter_smooth/installation","docId":"installation"},{"type":"link","label":"Quickstart","href":"/flutter_smooth/quickstart","docId":"quickstart"},{"type":"category","label":"Example","collapsed":false,"items":[{"type":"link","label":"Enter page animation","href":"/flutter_smooth/example/enter-page","docId":"example/enter-page"},{"type":"link","label":"Scroll ListView","href":"/flutter_smooth/example/list-view","docId":"example/list-view"}],"collapsible":true,"href":"/flutter_smooth/example/"},{"type":"category","label":"Benchmark","collapsed":false,"items":[{"type":"link","label":"Setup","href":"/flutter_smooth/benchmark/setup","docId":"benchmark/setup"},{"type":"link","label":"Gather data","href":"/flutter_smooth/benchmark/gather-data","docId":"benchmark/gather-data"},{"type":"category","label":"Analyze","collapsed":false,"items":[{"type":"category","label":"FPS","collapsed":false,"items":[{"type":"link","label":"Result from video","href":"/flutter_smooth/benchmark/analyze/fps/video","docId":"benchmark/analyze/fps/video"},{"type":"link","label":"Result from tracing","href":"/flutter_smooth/benchmark/analyze/fps/tracing","docId":"benchmark/analyze/fps/tracing"},{"type":"link","label":"Devtool","href":"/flutter_smooth/benchmark/analyze/fps/devtool","docId":"benchmark/analyze/fps/devtool"}],"collapsible":true,"href":"/flutter_smooth/benchmark/analyze/fps/"},{"type":"category","label":"Linearity","collapsed":false,"items":[{"type":"link","label":"Definition","href":"/flutter_smooth/benchmark/analyze/linearity/definition","docId":"benchmark/analyze/linearity/definition"},{"type":"link","label":"Result from video","href":"/flutter_smooth/benchmark/analyze/linearity/video","docId":"benchmark/analyze/linearity/video"},{"type":"link","label":"Result from tracing","href":"/flutter_smooth/benchmark/analyze/linearity/tracing","docId":"benchmark/analyze/linearity/tracing"}],"collapsible":true,"href":"/flutter_smooth/benchmark/analyze/linearity/"},{"type":"category","label":"Jank statistics","collapsed":false,"items":[{"type":"link","label":"Definition","href":"/flutter_smooth/benchmark/analyze/jank-statistics/definition","docId":"benchmark/analyze/jank-statistics/definition"},{"type":"link","label":"Result","href":"/flutter_smooth/benchmark/analyze/jank-statistics/result","docId":"benchmark/analyze/jank-statistics/result"}],"collapsible":true,"href":"/flutter_smooth/benchmark/analyze/jank-statistics/"},{"type":"category","label":"Overhead","collapsed":false,"items":[{"type":"link","label":"Definition","href":"/flutter_smooth/benchmark/analyze/overhead/definition","docId":"benchmark/analyze/overhead/definition"},{"type":"link","label":"Result","href":"/flutter_smooth/benchmark/analyze/overhead/result","docId":"benchmark/analyze/overhead/result"}],"collapsible":true,"href":"/flutter_smooth/benchmark/analyze/overhead/"},{"type":"link","label":"Waste","href":"/flutter_smooth/benchmark/analyze/waste","docId":"benchmark/analyze/waste"}],"collapsible":true,"href":"/flutter_smooth/benchmark/analyze/"},{"type":"category","label":"Pitfalls","collapsed":false,"items":[{"type":"link","label":"FPS is 30 (not 59) when 16.67+0.01ms","href":"/flutter_smooth/benchmark/pitfall/half-fps","docId":"benchmark/pitfall/half-fps"},{"type":"link","label":"Undetected jank and \\"jump\\" when latency changes","href":"/flutter_smooth/benchmark/pitfall/latency-change","docId":"benchmark/pitfall/latency-change"}],"collapsible":true,"href":"/flutter_smooth/benchmark/pitfall/"}],"collapsible":true,"href":"/flutter_smooth/benchmark/"},{"type":"link","label":"Design","href":"/flutter_smooth/design","docId":"design"},{"type":"category","label":"Discussion","collapsed":false,"items":[{"type":"link","label":"Design doc","href":"/flutter_smooth/discussion/design-doc","docId":"discussion/design-doc"},{"type":"link","label":"Discussion","href":"/flutter_smooth/discussion/conversation","docId":"discussion/conversation"}],"collapsible":true,"href":"/flutter_smooth/discussion/"}]},"docs":{"benchmark/analyze/fps/devtool":{"id":"benchmark/analyze/fps/devtool","title":"Devtool","description":"We cannot view the (computed) metrics of devtool because of the following reasons.","sidebar":"tutorialSidebar"},"benchmark/analyze/fps/index":{"id":"benchmark/analyze/fps/index","title":"FPS","description":"","sidebar":"tutorialSidebar"},"benchmark/analyze/fps/tracing":{"id":"benchmark/analyze/fps/tracing","title":"Result from tracing","description":"Methods","sidebar":"tutorialSidebar"},"benchmark/analyze/fps/video":{"id":"benchmark/analyze/fps/video","title":"Result from video","description":"Methods","sidebar":"tutorialSidebar"},"benchmark/analyze/index":{"id":"benchmark/analyze/index","title":"Analyze","description":"","sidebar":"tutorialSidebar"},"benchmark/analyze/jank-statistics/definition":{"id":"benchmark/analyze/jank-statistics/definition","title":"Definition","description":"Not all janks are equivalent to user eyes. A one-frame jank may not be percepted, while freezing the UI for 3 or 5 frames may be very annoying. There are even some fancy methods to calculate user-percepted janks.","sidebar":"tutorialSidebar"},"benchmark/analyze/jank-statistics/index":{"id":"benchmark/analyze/jank-statistics/index","title":"Jank statistics","description":"","sidebar":"tutorialSidebar"},"benchmark/analyze/jank-statistics/result":{"id":"benchmark/analyze/jank-statistics/result","title":"Result","description":"From video","sidebar":"tutorialSidebar"},"benchmark/analyze/linearity/definition":{"id":"benchmark/analyze/linearity/definition","title":"Definition","description":"Consider the case of ListView scrolling by inertia. Even if it is 60FPS, it can still be uncomfortable for the users if the shifting amount changes abruptly instead of smoothly. For example, if in frame 1 it shifts 20px, but in frame 2 it shifts 5px and frame 3 for 35px, the user will feel a weird jump.","sidebar":"tutorialSidebar"},"benchmark/analyze/linearity/index":{"id":"benchmark/analyze/linearity/index","title":"Linearity","description":"","sidebar":"tutorialSidebar"},"benchmark/analyze/linearity/tracing":{"id":"benchmark/analyze/linearity/tracing","title":"Result from tracing","description":"By using the visualize_scroll.py script, we see the following figure. Shortly speaking, the blue curve is the time-vs-offset, and the orange curve is the time-vs-delta-offset, i.e. time-vs-velocity.","sidebar":"tutorialSidebar"},"benchmark/analyze/linearity/video":{"id":"benchmark/analyze/linearity/video","title":"Result from video","description":"By manually looking at each frame of the video, I feel it satisfy the linearlity definition, excluding those jank frames (since they have zero shift and the next frame has doubled shift).","sidebar":"tutorialSidebar"},"benchmark/analyze/overhead/definition":{"id":"benchmark/analyze/overhead/definition","title":"Definition","description":"The overhead is the wasted time compared to a perfect solution. More specifically, suppose there exists a perfect solution that can make your real-world app render at 60FPS. Then, we measure the time of that perfect solution (suppose it is 1.00s) as well as the time if using this package (suppose it is 1.01).  Then, we say the overhead is (1.01-1.00)/1.00 = 1%.","sidebar":"tutorialSidebar"},"benchmark/analyze/overhead/index":{"id":"benchmark/analyze/overhead/index","title":"Latency","description":"","sidebar":"tutorialSidebar"},"benchmark/analyze/overhead/result":{"id":"benchmark/analyze/overhead/result","title":"Result","description":"The MaybePreemptRender is slow (needs syscall) now, causing larger overhead. It can be (and should be) optimized//github.com/fzyzcjy/flutter_smooth/issues/110. The pipeline is also not optimized yet.","sidebar":"tutorialSidebar"},"benchmark/analyze/waste":{"id":"benchmark/analyze/waste","title":"Waste","description":"You may sometimes see synthesized events called Waste(MultiRasterEndInVsyncInterval) and Waste(NoPendingContinuation). They do not indicate any user-visible problems. Instead, they are purely hints that may be necessary and is the correct thing, while sometimes may reveal deeper bug. Feel free to ping me when you see it and feel like it reveals something is going wrong.","sidebar":"tutorialSidebar"},"benchmark/gather-data":{"id":"benchmark/gather-data","title":"Gather data","description":"Record video","sidebar":"tutorialSidebar"},"benchmark/index":{"id":"benchmark/index","title":"Benchmark","description":"In this chapter, I will show:","sidebar":"tutorialSidebar"},"benchmark/pitfall/half-fps":{"id":"benchmark/pitfall/half-fps","title":"FPS is 30 (not 59) when 16.67+0.01ms","description":"It will immediately drop to 30FPS even if the frame is only 0.01ms longer than 16.67ms. Indeed this problem is unrelated to this package, because the proposed method will not be affected by this and will be (e.g.) 59FPS. However, it may be helpful to discuss here to avoid wrongly understand the metrics of the classical Flutter and other optimization methods.","sidebar":"tutorialSidebar"},"benchmark/pitfall/index":{"id":"benchmark/pitfall/index","title":"Pitfalls","description":"","sidebar":"tutorialSidebar"},"benchmark/pitfall/latency-change":{"id":"benchmark/pitfall/latency-change","title":"Undetected jank and \\"jump\\" when latency changes","description":"What will happen, when the computation latency becomes lower temporarily? Looks like it is a good thing, since faster means better; many FPS monitors also do not think this is a problem. Spoiler: It is a bad thing - pay a jank.","sidebar":"tutorialSidebar"},"benchmark/setup":{"id":"benchmark/setup","title":"Setup","description":"In this chapter, I use the following experimental setup.","sidebar":"tutorialSidebar"},"design":{"id":"design","title":"Design","description":"TODO: overall and latest design of the package - how is it implemented?","sidebar":"tutorialSidebar"},"discussion/conversation":{"id":"discussion/conversation","title":"Discussion","description":"This page contains a (sorted) copy of discussions happened on various places. The original sources are:","sidebar":"tutorialSidebar"},"discussion/design-doc":{"id":"discussion/design-doc","title":"Design doc","description":"The design doc is at//flutter.dev/go/sixty-fps","sidebar":"tutorialSidebar"},"discussion/index":{"id":"discussion/index","title":"Discussion","description":"TODO: brief intro","sidebar":"tutorialSidebar"},"example/enter-page":{"id":"example/enter-page","title":"Enter page animation","description":"TODO core code","sidebar":"tutorialSidebar"},"example/index":{"id":"example/index","title":"Example","description":"TODO: brief intro","sidebar":"tutorialSidebar"},"example/list-view":{"id":"example/list-view","title":"Scroll ListView","description":"TODO core code","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"[flutter_smooth](https://github.com/fzyzcjy/flutter_smooth/tree/master) (WIP)","description":"logo","sidebar":"tutorialSidebar"},"installation":{"id":"installation","title":"Installation","description":"Add dependencies:","sidebar":"tutorialSidebar"},"quickstart":{"id":"quickstart","title":"Quickstart","description":"TODO: How to start using this package.","sidebar":"tutorialSidebar"}}}')}}]);