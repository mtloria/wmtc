"use strict";(self.webpackChunkwmtc=self.webpackChunkwmtc||[]).push([[680],{2242:function(e,t,a){a.r(t),a.d(t,{default:function(){return B}});var n=a(6540),r=a(7225),i=a(2532),o=a(7164),s=a(1641),l=a(7636),d=a(6929),c=a(9799),m=a(4164),h=a(5659);var u=function(e){return"string"==typeof e},p=a(1848),g=a(9077),y=a(5607);var A=function(e,t){return n.isValidElement(e)&&-1!==t.indexOf(e.type.muiName??e.type?._payload?.value?.muiName)},f=a(6852),b=a(2850),v=a(8413),w=a(1609);function x(e){return(0,w.Ay)("MuiListItem",e)}(0,v.A)("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"]);var C=a(2927);function k(e){return(0,w.Ay)("MuiListItemSecondaryAction",e)}(0,v.A)("MuiListItemSecondaryAction",["root","disableGutters"]);var I=a(4848);const S=(0,p.Ay)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.disableGutters&&t.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:e})=>e.disableGutters,style:{right:0}}]}),M=n.forwardRef((function(e,t){const a=(0,y.b)({props:e,name:"MuiListItemSecondaryAction"}),{className:r,...i}=a,o=n.useContext(b.A),s={...a,disableGutters:o.disableGutters},l=(e=>{const{disableGutters:t,classes:a}=e,n={root:["root",t&&"disableGutters"]};return(0,h.A)(n,k,a)})(s);return(0,I.jsx)(S,{className:(0,m.A)(l.root,r),ownerState:s,ref:t,...i})}));M.muiName="ListItemSecondaryAction";var E=M;const P=(0,p.Ay)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters,!a.disablePadding&&t.padding,a.hasSecondaryAction&&t.secondaryAction]}})((0,g.A)((({theme:e})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>!e.disablePadding&&e.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:e})=>!e.disablePadding&&!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>!e.disablePadding&&!!e.secondaryAction,style:{paddingRight:48}},{props:({ownerState:e})=>!!e.secondaryAction,style:{[`& > .${C.A.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:e})=>e.button,style:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:e})=>e.hasSecondaryAction,style:{paddingRight:48}}]})))),N=(0,p.Ay)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"});var R=n.forwardRef((function(e,t){const a=(0,y.b)({props:e,name:"MuiListItem"}),{alignItems:r="center",children:i,className:o,component:s,components:l={},componentsProps:d={},ContainerComponent:c="li",ContainerProps:{className:p,...g}={},dense:v=!1,disableGutters:w=!1,disablePadding:C=!1,divider:k=!1,secondaryAction:S,slotProps:M={},slots:R={},...T}=a,K=n.useContext(b.A),L=n.useMemo((()=>({dense:v||K.dense||!1,alignItems:r,disableGutters:w})),[r,K.dense,v,w]),H=n.useRef(null),D=n.Children.toArray(i),G=D.length&&A(D[D.length-1],["ListItemSecondaryAction"]),j={...a,alignItems:r,dense:L.dense,disableGutters:w,disablePadding:C,divider:k,hasSecondaryAction:G},B=(e=>{const{alignItems:t,classes:a,dense:n,disableGutters:r,disablePadding:i,divider:o,hasSecondaryAction:s}=e,l={root:["root",n&&"dense",!r&&"gutters",!i&&"padding",o&&"divider","flex-start"===t&&"alignItemsFlexStart",s&&"secondaryAction"],container:["container"]};return(0,h.A)(l,x,a)})(j),O=(0,f.A)(H,t),F=R.root||l.Root||P,U=M.root||d.root||{},W={className:(0,m.A)(B.root,U.className,o),...T};let _=s||"li";return G?(_=W.component||s?_:"div","li"===c&&("li"===_?_="div":"li"===W.component&&(W.component="div")),(0,I.jsx)(b.A.Provider,{value:L,children:(0,I.jsxs)(N,{as:c,className:(0,m.A)(B.container,p),ref:O,ownerState:j,...g,children:[(0,I.jsx)(F,{...U,...!u(F)&&{as:_,ownerState:{...j,...U.ownerState}},...W,children:D}),D.pop()]})})):(0,I.jsx)(b.A.Provider,{value:L,children:(0,I.jsxs)(F,{...U,as:_,ref:O,...!u(F)&&{ownerState:{...j,...U.ownerState}},...W,children:[D,S&&(0,I.jsx)(E,{children:S})]})})})),T=(0,a(5003).A)((0,I.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");const K={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"90%",maxWidth:"600px",maxHeight:"90%",overflowY:"auto",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,borderRadius:"10px",outline:"none"};var L=e=>{let{leader:t,onClose:a}=e;return n.createElement(o.A,{sx:K},n.createElement(s.A,{onClick:a,sx:{position:"absolute",top:8,right:8}},n.createElement(T,null)),n.createElement(l.A,null,n.createElement(d.A,{variant:"h4",component:"h2",gutterBottom:!0},t.name),n.createElement(i.G,{image:t.image,alt:t.name,imgStyle:{borderRadius:"50%"},style:{width:"200px",height:"200px",marginBottom:"20px"}}),n.createElement(d.A,{variant:"body1",paragraph:!0},t.description),n.createElement(d.A,{variant:"h5",component:"h3"},"PRs:"),n.createElement(c.A,{sx:{padding:0}},t.prs.map(((e,t)=>n.createElement(R,{key:t,sx:{paddingTop:0,paddingBottom:0,paddingLeft:0}},n.createElement(d.A,{variant:"body1"},n.createElement("span",{role:"img","aria-label":"check"},"✅")," ",e))))),n.createElement(o.A,{sx:{marginBottom:"20px"}}),n.createElement(d.A,{variant:"h5",component:"h3",gutterBottom:!0},"Other Accomplishments:"),n.createElement(c.A,{sx:{padding:0}},t.accomplishments.map(((e,t)=>n.createElement(R,{key:t,sx:{paddingTop:0,paddingBottom:0,paddingLeft:0}},n.createElement(d.A,{variant:"body1"},n.createElement("span",{role:"img","aria-label":"star"},"⭐")," ",e)))))))},H=a(4977),D=a(7616),G=a(4794);var j=[{name:"Caleb Kerr - Co-Founder, Director, and Athlete",image:"caleb_kerr",description:"Caleb is from Evansville, IN and ran for Purdue University from 2012 - 2016. He currently works as an Associate Director for Eli Lilly in Indianapolis. During his time at Purdue, specifically his Senior year, Caleb battled through severe achilles pain that progressively slowed him down until he graduated. After graduation, several months away from running, and two achilles surgeries, Caleb rejuvenated his running career while training in Indianapolis around his work hours. Caleb now lives in Zionsville, IN with his wife (and Purdue school record-holder in the mile) Katie Kerr.",prs:["5K: 14:16","10K: 29:04","Half Marathon: 1:04:36","Marathon: 2:14:50"],accomplishments:["2x Olympic Marathon Trials Qualifier (2020 & 2024)","USATF Indiana Long Distance Athlete of the Year (2018)","Has only been dropped by his wife in a workout once"]},{name:"David Evans - President, Coach, and Athlete",image:"david_evans",description:"David is from Westfield, IN and ran for the Club Cross Country & Track teams at Purdue University. David then coached said club teams from 2017 - 2020 until he moved to Michigan in support of his superstar wife, who is now a resident at the University of Michigan. He now works remotely as a Project Manager at Southwire Company.",prs:["5K: 14:57","8K: 24:42","Half Marathon: 1:08:46"],accomplishments:["3 x NIRCA All American (2 x Track, 1 x XC) from 2015 - 2016","Coached Purdue to 2nd place at NIRCA XC National Championships for men (2019) and women (2018)","Married so high up he had to take the elevator"]},{name:"Jordan Kyle - Co-Founder, Director, and Athlete",image:"jordan_kyle",description:"Jordan grew up in Fishers, Indiana and ran for Hamilton Southeastern High School. He humbly maintains that it was his class that started the excellent distance running the state has seen from the Fishers / Hamilton Southern school districts. Jordan started college at Indiana University and then transferred to the University of Colorado for his last two years. After graduating, he lived and worked in Boulder, CO until 2013, when he moved back to Indiana for law school. He now works for Listrak, a digital marketing technology company based out of Lititz, PA. While he doesn't practice law, Jordan maintains his law license. When he's not working, training, or maintaining his house, Jordan serves as an executive board member for the Joseph Maley Foundation. Jordan lives in Carmel, IN. with his wife Audrey and daughter Lillian.",prs:["3K: 8:08","5K: 13:54","10K: 28:56","Half Marathon: 1:04:07","Marathon: 2:16:51"],accomplishments:["2 time Olympic Trials Marathon Qualifier (2016 & 2020)","3 time NCAA Division I All-American","Finished within 1 minute of Tom Anderson at the 2017 Drumstick Dash"]},{name:"Conner Sandt - Content Creator and Athlete",image:"conner_sandt",description:"Conner is from Middlebury, IN and ran for the Club Cross Country & Track teams at Purdue University. Conner graduated in 2020 and now works as an Electrical Engineer in Royal Oak, MI. Outside of running, Conner has an obvious passion and talent for photography and art. He even designed the WMTC logo!",prs:["5K: 15:14","8K: 25:12 (XC)","Half Marathon: 1:10:13"],accomplishments:["2 x NIRCA All-American (All XC) from 2018 - 2019","Only complained about every other workout last year"]},{name:"Abbey Warth - Social Media Coordinator and Athlete",image:"abby_warth",description:"Abbey is from Massillon, OH and was part of the track and cross country teams at Ohio Wesleyan University, graduating in 2016. In 2018, Abbey moved to Florida where she attended PA school, briefly worked as a PA in Physical Medicine, and sweated more than she ever has in her entire life. Abbey relocated to Indianapolis in 2021 where she currently works as an Internal Medicine PA at St Vincent Hospital.",prs:["800m: 2:12","1500m: 4:29","5K: 17:58","10K: 36:16","Half Marathon: 1:22:40"],accomplishments:["5x NCAA Division 3 qualifier in the 1500m and mile indoor/outdoor track (2014-2016)","Division 3 All-American in the 1500m (2015)"]},{name:"Max Runningen - Social Media Coordinator and Athlete",image:"max_runningen",description:"Max is from Noblesville, IN and ran for the Club Cross Country & Track teams at Purdue University. Max graduated in 2020 and now works as civil engineer at Christopher B. Burke Engineering in Indianapolis. Outside of running on the roads, Max enjoys twisting his ankle while trail running.",prs:["5K: 15:27","10K: 33:11","Half Marathon: 1:10:56","Marathon: 2:34:12"],accomplishments:["2018 NIRCA All-American (Track)","The Indiana Pacers went undefeated (1-0) while Max was their team captain in 2019"]},{name:"Lucy Dobbs - Team Captain and Athlete",image:"lucy_dobbs",description:"Lucy lives in Indianapolis, Indiana and works as an associate Actuary with OneAmerica. She ran for the club Cross Country and Track teams at Purdue University, where she was an All-American as well as a National Champion in the 5K on the track.",prs:["5K: 17:02","10K: 34:48","Half Marathon: 1:16:56","Marathon: 2:36:33"],accomplishments:["2019 NIRCA National Champion (Track 5K)","2024 Olympic Marathon Trials Qualifier"]}];var B=()=>{const[e,t]=n.useState(null),a=()=>{t(null)};n.useEffect((()=>{document.body.style.margin="0",document.body.style.padding="0",document.title="Meet the Team | WMTC"}),[]);const s=(0,G.useStaticQuery)("2858333112"),d=e=>{const t=s.allFile.edges.find((t=>{let{node:a}=t;return a.name===e}));return t?(0,i.c)(t.node.childImageSharp.gatsbyImageData):null},c=j.map((e=>({...e,image:d(e.image)})));return n.createElement(o.A,{sx:{backgroundColor:"background.default"}},n.createElement(r.A,null),n.createElement(o.A,{sx:{maxWidth:"1200px",margin:"0 auto",textAlign:"center",flexGrow:1}},n.createElement("h1",{style:{fontSize:"2.5rem",marginBottom:"20px"}},"Meet the Team"),n.createElement(o.A,{sx:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"20px"}},c.map((e=>n.createElement(H.A,{key:e.name,onClick:()=>(e=>{t(e)})(e),sx:{cursor:"pointer",boxShadow:3,transition:"transform 0.3s","&:hover":{transform:"scale(1.05)"}}},n.createElement(l.A,null,n.createElement(i.G,{image:e.image,alt:e.name,style:{width:"100%",height:"auto",borderRadius:"10px"}}),n.createElement("p",{style:{fontSize:"1.2rem",marginTop:"10px",fontWeight:"bold"}},e.name)))))),n.createElement(D.A,{open:!!e,onClose:a},n.createElement(o.A,null,e&&n.createElement(L,{leader:e,onClose:a})))))}}}]);
//# sourceMappingURL=component---src-pages-meet-the-team-js-a41899a01dca4cbf65a0.js.map