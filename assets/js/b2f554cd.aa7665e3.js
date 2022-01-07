"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2022-01-06-welcome.md","source":"@site/blog/2022-01-06-welcome.md","title":"NOMAD 3 - Third time lucky?","description":"I plan to use this blog to announce new features, releases or just to post about my ideas for future development. Since this is my first post here I will try to explain little bit of the background of this project and outline where I would like to take it in near and also distant future.","date":"2022-01-06T00:00:00.000Z","formattedDate":"January 6, 2022","tags":[{"label":"NOMAD","permalink":"/blog/tags/nomad"},{"label":"background","permalink":"/blog/tags/background"},{"label":"future","permalink":"/blog/tags/future"}],"readingTime":5.205,"truncated":true,"authors":[{"name":"Tomas Lebl","title":"Creator of NOMAD","url":"https://github.com/tomlebl","imageURL":"https://github.com/tomlebl.png","key":"tomlebl"}]},"content":"I plan to use this blog to announce new features, releases or just to post about my ideas for future development. Since this is my first post here I will try to explain little bit of the background of this project and outline where I would like to take it in near and also distant future.\\n\\n\x3c!--truncate--\x3e\\n\\n## Background\\n\\nI have be playing with ideas about NOMAD since 2012 and over the years a team of students from the **[School of Computer Science](https://www.st-andrews.ac.uk/computer-science/)** built two prototypes of the system that have been utilised in the liquid state **[NMR facility](https://nmr.wp.st-andrews.ac.uk/)** at the University of St Andrews. The development of those prototypes was initiated and supported by funding provided by **[EPSRC](https://epsrc.ukri.org/)** (Strategic Partners Project, Impact Accelaration Account). Although the project has sparked quite considerable interest in the NMR community we have never managed to get it off the ground and install NOMAD in another NMR lab. About 3 years ago we run out of funding and students who built the prototypes have left St Andrews and I struggled to find new developers who would carry on the project with me. I assumed that the only way forward would be to find some substantial funding that would allow me to hire a developer who would be able to take over. I also thought that the project would be more sustainable if I would cross the the border and get better understanding of how web applications work and are built. Therefore, in January 2019 I started my self-taught developer journey. As soon as I started it became quite apparent that the best would be to start building NOMAD again from scratch using completely new stack. Eventually, I decided to focus on learning technologies that form so called **[MERN stack](https://www.educative.io/edpresso/what-is-mern-stack)**. In last three years, I put together plethora of small Javascript applications. At some point I got enough knowledge and confidence and started to work on a project that end up being my first take on a new NOMAD frond-end which is actually still quite close to what NOMAD v3 currently looks like and you can check it **[here](https://nmr-control.netlify.app/dashboard)**. After that I continued the journey by learning the back-end technologies and my effort culminated in May last year when the front-end was connected to a brand new back-end which allowed me to shut down the first prototype of NOMAD that has been still in production as submission portal running on nearly 10 years old server that was on a verge of collapse. Then I carried on over the summer and added batch submission function that allows users in remote labs to submit samples in batches/racks which was essential for using NOMAD in our teaching labs. The end of last year was about bug fixing, adding some minor features and building this documentation website.\\n\\n:::tip Current _Status Quo_ Summary\\n\\n- The third prototype of NOMAD system is built using completely different tech stack and the overall concept and idea is the only thing that it has in common with its predecessors.\\n\\n- NOMAD v3 has been successfully working for about 6 months connected to 6 Bruker NMR instruments of various generations ranging from AV to AV-III-HD. Thus, it seems that the prototype is ready to use MVP but currently fulfils only small subset of functions (lab monitoring and submission portal).\\n\\n- Last but not least, NOMAD v3 source code is publicly available on **[GitHub](https://github.com/nomad-nmr)** under **[AGPL-3.0 license](https://www.gnu.org/licenses/agpl-3.0.en.html)**.\\n\\n:::\\n\\n## Future Outlook\\n\\nThe next major milestone on the road map is the data storage function and experimental time accounting for monitoring dashboard. This will complement the trio of core NOMAD features and will allow to decommission ageing and stale v2 prototype. I challenge myself to reach this goal by summer this year although making any plans like that it\'s quite hard in the current environment. However, for couple of reasons the development of v3 is significantly faster than it was ever before and thus I try to keep the optimistic outlook. Another improvement that I plan for this year is implementing **[Docker](https://www.docker.com/)** technology which should significantly improve server infrastructure and streamline installation process. I also plan to carry on and add some more content on this documentation website. So far, I have tried to describe the current installation procedure as detailed as possible which could allow other NMR lab managers to possibly trial the system in their labs. Next, I want to add more information in **[features section](../docs/features/intro)** that it becomes more clear how the system operates and what benefits it brings.\\n\\n**NMR Lab Notebook** and **Decentralised Data Repository** can be seen as advanced features and it will very likely take a while until we get there. The former should facilitate collaborative interpretation of NMR data and preserving work that has been done for future use and publication. We have done a bit of work on that in v2 prototype but it is very far from ideal, quite cumbersome to use and thus usually neglected by users. However, I believe that a bit of human-computer interaction research could cut it through to success. The latter should ultimately allow to do the same on global level but there is no point to talk about this in details yet as without any adoption of NOMAD system in multiple NMR labs this feature only remains in the realm of my dreams.\\n\\n## Conclusion\\n\\nNOMAD has been developed using direct feedback from everyday users in the NMR lab and the most important thing for further development is getting such feedback from wider NMR community. If you are NMR lab manager and have a feeling that you could benefit from using NOMAD in your lab check the **[installation instructions](../docs/getting-started/system-overview)**. If that looks too daunting for you there might be somebody in IT-services who could understand and give you hand. Likely, you will need help from IT services anyway to spin up a VM for the server. Although you can run NOMAD from Linux box sitting under your office desk, using properly maintained web hosting VM will improve resilience of your system. Last but not least, get back to me with any questions that you might possibly have. I will always appreciate any kind of feedback from active or potential users of the system."}]}')}}]);