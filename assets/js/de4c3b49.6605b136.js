"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7479],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(a),h=n,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||r;return a?o.createElement(m,i(i({ref:t},d),{},{components:a})):o.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},298:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var o=a(7462),n=a(3366),r=(a(7294),a(3905)),i=["components"],s={slug:"datastore",title:"On the way to datastore",authors:["tomlebl"],tags:["NOMAD","datastore","video tutorials","NMRium"]},l=void 0,u={permalink:"/website/blog/datastore",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2022-02-04-datastore/index.md",source:"@site/blog/2022-02-04-datastore/index.md",title:"On the way to datastore",description:"I made quite decent progress in January and have some good news to share. So, here is another blog post. Let's see if I can keep up the pace and make one post every month. Although, at the moment it seems that February might play the other way round.",date:"2022-02-04T00:00:00.000Z",formattedDate:"February 4, 2022",tags:[{label:"NOMAD",permalink:"/website/blog/tags/nomad"},{label:"datastore",permalink:"/website/blog/tags/datastore"},{label:"video tutorials",permalink:"/website/blog/tags/video-tutorials"},{label:"NMRium",permalink:"/website/blog/tags/nm-rium"}],readingTime:3.53,truncated:!0,authors:[{name:"Tomas Lebl",title:"Creator of NOMAD",url:"https://github.com/tomlebl",imageURL:"https://github.com/tomlebl.png",key:"tomlebl"}],frontMatter:{slug:"datastore",title:"On the way to datastore",authors:["tomlebl"],tags:["NOMAD","datastore","video tutorials","NMRium"]},prevItem:{title:"NMR data - from inception to visualization",permalink:"/website/blog/visualization"},nextItem:{title:"NOMAD 3 - Third time lucky?",permalink:"/website/blog/welcome"}},d={authorsImageUrls:[void 0]},p=[{value:"Datastore sneak preview",id:"datastore-sneak-preview",level:2},{value:"Video tutorials",id:"video-tutorials",level:2},{value:"NMRium integration",id:"nmrium-integration",level:2}],c={toc:p};function h(e){var t=e.components,s=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I made quite decent progress in January and have some good news to share. So, here is another blog post. Let's see if I can keep up the pace and make one post every month. Although, at the moment it seems that February might play the other way round."),(0,r.kt)("h2",{id:"datastore-sneak-preview"},"Datastore sneak preview"),(0,r.kt)("p",null,"I have put together backend code for uploading data from instrument to the server and tested on one instrument and its quite nice to see that what I have planed actually works quite smoothly. So, here are some key features."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Upload is carried over HTTP/HTTPS using an additional data upload endpoint in the existing REST-API. Thus, there won't be any additional complexity of the system networking except a very small tweak of NginX configuration which will be covered in documentation once the feature is released.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Individual experiments are uploaded and stored as single files in compressed .zip format which should make download of data a bit faster. Further advantage could be faster indexing which make any potential transfer of the whole datatore into a new volume significantly less time consuming.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The times for uploading single experiment that I have seen so far were all shorter than 300 ms. Thus, the data should appear in datastore as soon as the acquisition is finished and data is stored locally on the spectrometer without any significant delays that you can experience if you synchronize network drives as we have used to do with the older prototypes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Since the data upload is handled by the NOMAD spectrometer client, that will take data directly from your primary IconNMR data folder, there should be no interference with your existing NMR data storage. In another words, you should be able to run NOMAD in parallel with your existing data archiving solution if you will want to."))),(0,r.kt)("h2",{id:"video-tutorials"},"Video tutorials"),(0,r.kt)("p",null,"However, I hope that seeing NOMAD in action can help some people to understand better how the whole system actually works. Therefore, I started to record short video tutorials that demonstrate certain functions of NOMAD system. The first one shows how to connect spectrometer client to the newly installed NOMAD and monitoring a run of few experiments while feeding meta data into the database using AUTO-FEED function. You can watch it ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"../docs/video-tutorials"},"here"))),(0,r.kt)("h2",{id:"nmrium-integration"},"NMRium integration"),(0,r.kt)("p",null,"Ultimate goal for NOMAD is to create a seamless workflow that would take NMR data from inception to publication. In order to achieve this goal, there is a need for a tool that would allow to view, analyse and process NMR data in the web browser. It does not need to offer full spectrum of functions that typical desktop NMR processing does nowadays but it should fulfil let's say 90% of needs of everyday liquid NMR user/chemist. In another words, the tool should provide enough utility that NOMAD users don't need to download the data to their desktop computer but do all the processing and analysis on the platform where all the work can be easily stored, shared and archived."),(0,r.kt)("p",null,"We have done some work on such tool and partially implemented in version 2 prototype. While working on the datastore I started to think about NMR processing and viewing tool as the one that we already developed would be cumbersome to integrate with the new React frontend. Developing a new tool with all these requirements would be a gargantuan task but I was ready to tackle it slowly even though it would probably take years to get something that would tick all the boxes. Luckily, to my huge surprise I stumbled upon a project called ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.nmrium.org/"},"NMRium"))," which seems to be absolutely perfect fit for NOMAD needs. Moreover, the project is open source on ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/cheminfo/nmrium"},"GitHub"))," under MIT license and also available as React component on ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.npmjs.com/package/nmrium"},"NPM")),". All that makes integration with NOMAD very feasible and if successful it could help NOMAD to make massive leap on its road map."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"NMRium Screenshot",src:a(7754).Z,width:"1920",height:"900"})),(0,r.kt)("p",null,"To conclude, I would say that I can look at NMRium from perspective of NMR spectroscopist and Javascript developer as well and either way I am truly impressed. Im my opinion NMRium, could easily be a game changer not only for NOMAD but also for quite few niches of NMR spectroscopy."))}h.isMDXComponent=!0},7754:function(e,t,a){t.Z=a.p+"assets/images/NMRium-b2aed9f2985f549d603690b9eb39023e.PNG"}}]);