"use strict";(self.webpackChunkwmtc=self.webpackChunkwmtc||[]).push([[680],{7862:function(e,t,o){o.r(t),o.d(t,{default:function(){return Ee}});var r=o(6540),n=o(4411),a=o(2532),l=o(7164),i=o(1641),s=o(7636),c=o(9326),d=o(9799),p=o(3428),m=o(5003),u=o(4848),h=(0,m.A)((0,u.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");const b={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"90%",maxWidth:"600px",maxHeight:"90%",overflowY:"auto",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,borderRadius:"10px",outline:"none"};var f=e=>{let{leader:t,onClose:o}=e;return r.createElement(l.A,{sx:b},r.createElement(i.A,{onClick:o,sx:{position:"absolute",top:8,right:8}},r.createElement(h,null)),r.createElement(s.A,null,r.createElement(c.A,{variant:"h4",component:"h2",gutterBottom:!0},t.name),r.createElement(a.G,{image:t.image,alt:t.name,imgStyle:{borderRadius:"50%"},style:{width:"200px",height:"200px",marginBottom:"20px"}}),r.createElement(c.A,{variant:"body1",paragraph:!0},t.description),r.createElement(c.A,{variant:"h5",component:"h3"},"PRs:"),r.createElement(d.A,{sx:{padding:0}},t.prs.map(((e,t)=>r.createElement(p.Ay,{key:t,sx:{paddingTop:0,paddingBottom:0,paddingLeft:0}},r.createElement(c.A,{variant:"body1"},r.createElement("span",{role:"img","aria-label":"check"},"✅")," ",e))))),r.createElement(l.A,{sx:{marginBottom:"20px"}}),r.createElement(c.A,{variant:"h5",component:"h3",gutterBottom:!0},"Other Accomplishments:"),r.createElement(d.A,{sx:{padding:0}},t.accomplishments.map(((e,t)=>r.createElement(p.Ay,{key:t,sx:{paddingTop:0,paddingBottom:0,paddingLeft:0}},r.createElement(c.A,{variant:"body1"},r.createElement("span",{role:"img","aria-label":"star"},"⭐")," ",e)))))))},y=o(4164),g=o(5659),v=o(3788),w=o(1523),A=o(999),x=o(2505),S=o(6677);var C=function(e){const{elementType:t,externalSlotProps:o,ownerState:r,skipResolvingSlotProps:n=!1,...a}=e,l=n?{}:(0,S.A)(o,r),{props:i,internalRef:s}=(0,x.A)({...a,externalSlotProps:l}),c=(0,w.A)(s,l?.ref,e.additionalProps?.ref);return(0,A.A)(t,{...i,ref:c},r)},M=o(1848),E=o(4675),I=o(9077),T=o(5607),k=o(3608);function B(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var P=o(2778),R=o(3749);const N={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};var H=(0,m.A)((0,u.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),W=(0,m.A)((0,u.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight"),K=o(6699),L=o(8413),j=o(1609);function F(e){return(0,j.Ay)("MuiTabScrollButton",e)}var D=(0,L.A)("MuiTabScrollButton",["root","vertical","horizontal","disabled"]);const $=(0,M.Ay)(K.A,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.orientation&&t[o.orientation]]}})({width:40,flexShrink:0,opacity:.8,[`&.${D.disabled}`]:{opacity:0},variants:[{props:{orientation:"vertical"},style:{width:"100%",height:40,"& svg":{transform:"var(--TabScrollButton-svgRotate)"}}}]});var O=r.forwardRef((function(e,t){const o=(0,T.b)({props:e,name:"MuiTabScrollButton"}),{className:r,slots:n={},slotProps:a={},direction:l,orientation:i,disabled:s,...c}=o,d=(0,v.I)(),p={isRtl:d,...o},m=(e=>{const{classes:t,orientation:o,disabled:r}=e,n={root:["root",o,r&&"disabled"]};return(0,g.A)(n,F,t)})(p),h=n.StartScrollButtonIcon??H,b=n.EndScrollButtonIcon??W,f=C({elementType:h,externalSlotProps:a.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:p}),w=C({elementType:b,externalSlotProps:a.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:p});return(0,u.jsx)($,{component:"div",className:(0,y.A)(m.root,r),ref:t,role:null,ownerState:p,tabIndex:null,...c,style:{...c.style,..."vertical"===i&&{"--TabScrollButton-svgRotate":`rotate(${d?-90:90}deg)`}},children:"left"===l?(0,u.jsx)(h,{...f}):(0,u.jsx)(b,{...w})})})),z=o(3034);function X(e){return(0,j.Ay)("MuiTabs",e)}var _=(0,L.A)("MuiTabs",["root","vertical","list","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),U=o(2325).A,Y=o(6025);const G=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,J=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,Q=(e,t,o)=>{let r=!1,n=o(e,t);for(;n;){if(n===e.firstChild){if(r)return;r=!0}const t=n.disabled||"true"===n.getAttribute("aria-disabled");if(n.hasAttribute("tabindex")&&!t)return void n.focus();n=o(e,n)}},V=(0,M.Ay)("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${_.scrollButtons}`]:t.scrollButtons},{[`& .${_.scrollButtons}`]:o.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,o.vertical&&t.vertical]}})((0,I.A)((({theme:e})=>({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex",variants:[{props:({ownerState:e})=>e.vertical,style:{flexDirection:"column"}},{props:({ownerState:e})=>e.scrollButtonsHideMobile,style:{[`& .${_.scrollButtons}`]:{[e.breakpoints.down("sm")]:{display:"none"}}}}]})))),q=(0,M.Ay)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.scroller,o.fixed&&t.fixed,o.hideScrollbar&&t.hideScrollbar,o.scrollableX&&t.scrollableX,o.scrollableY&&t.scrollableY]}})({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap",variants:[{props:({ownerState:e})=>e.fixed,style:{overflowX:"hidden",width:"100%"}},{props:({ownerState:e})=>e.hideScrollbar,style:{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}},{props:({ownerState:e})=>e.scrollableX,style:{overflowX:"auto",overflowY:"hidden"}},{props:({ownerState:e})=>e.scrollableY,style:{overflowY:"auto",overflowX:"hidden"}}]}),Z=(0,M.Ay)("div",{name:"MuiTabs",slot:"List",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.list,t.flexContainer,o.vertical&&t.flexContainerVertical,o.centered&&t.centered]}})({display:"flex",variants:[{props:({ownerState:e})=>e.vertical,style:{flexDirection:"column"}},{props:({ownerState:e})=>e.centered,style:{justifyContent:"center"}}]}),ee=(0,M.Ay)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})((0,I.A)((({theme:e})=>({position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create(),variants:[{props:{indicatorColor:"primary"},style:{backgroundColor:(e.vars||e).palette.primary.main}},{props:{indicatorColor:"secondary"},style:{backgroundColor:(e.vars||e).palette.secondary.main}},{props:({ownerState:e})=>e.vertical,style:{height:"100%",width:2,right:0}}]})))),te=(0,M.Ay)((function(e){const{onChange:t,...o}=e,n=r.useRef(),a=r.useRef(null),l=()=>{n.current=a.current.offsetHeight-a.current.clientHeight};return(0,P.A)((()=>{const e=(0,k.A)((()=>{const e=n.current;l(),e!==n.current&&t(n.current)})),o=(0,R.A)(a.current);return o.addEventListener("resize",e),()=>{e.clear(),o.removeEventListener("resize",e)}}),[t]),r.useEffect((()=>{l(),t(n.current)}),[t]),(0,u.jsx)("div",{style:N,...o,ref:a})}))({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),oe={};var re=r.forwardRef((function(e,t){const o=(0,T.b)({props:e,name:"MuiTabs"}),n=(0,E.A)(),a=(0,v.I)(),{"aria-label":l,"aria-labelledby":i,action:s,centered:c=!1,children:d,className:p,component:m="div",allowScrollButtonsMobile:h=!1,indicatorColor:b="primary",onChange:f,orientation:w="horizontal",ScrollButtonComponent:A,scrollButtons:x="auto",selectionFollowsFocus:S,slots:M={},slotProps:I={},TabIndicatorProps:P={},TabScrollButtonProps:N={},textColor:H="primary",value:W,variant:K="standard",visibleScrollbar:L=!1,...j}=o,F="scrollable"===K,D="vertical"===w,$=D?"scrollTop":"scrollLeft",_=D?"top":"left",re=D?"bottom":"right",ne=D?"clientHeight":"clientWidth",ae=D?"height":"width",le={...o,component:m,allowScrollButtonsMobile:h,indicatorColor:b,orientation:w,vertical:D,scrollButtons:x,textColor:H,variant:K,visibleScrollbar:L,fixed:!F,hideScrollbar:F&&!L,scrollableX:F&&!D,scrollableY:F&&D,centered:c&&!F,scrollButtonsHideMobile:!h},ie=(e=>{const{vertical:t,fixed:o,hideScrollbar:r,scrollableX:n,scrollableY:a,centered:l,scrollButtonsHideMobile:i,classes:s}=e,c={root:["root",t&&"vertical"],scroller:["scroller",o&&"fixed",r&&"hideScrollbar",n&&"scrollableX",a&&"scrollableY"],list:["list","flexContainer",t&&"flexContainerVertical",t&&"vertical",l&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",i&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[r&&"hideScrollbar"]};return(0,g.A)(c,X,s)})(le),se=C({elementType:M.StartScrollButtonIcon,externalSlotProps:I.startScrollButtonIcon,ownerState:le}),ce=C({elementType:M.EndScrollButtonIcon,externalSlotProps:I.endScrollButtonIcon,ownerState:le});const[de,pe]=r.useState(!1),[me,ue]=r.useState(oe),[he,be]=r.useState(!1),[fe,ye]=r.useState(!1),[ge,ve]=r.useState(!1),[we,Ae]=r.useState({overflow:"hidden",scrollbarWidth:0}),xe=new Map,Se=r.useRef(null),Ce=r.useRef(null),Me={slots:M,slotProps:{indicator:P,scrollButton:N,...I}},Ee=()=>{const e=Se.current;let t,o;if(e){const o=e.getBoundingClientRect();t={clientWidth:e.clientWidth,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,scrollWidth:e.scrollWidth,top:o.top,bottom:o.bottom,left:o.left,right:o.right}}if(e&&!1!==W){const e=Ce.current.children;if(e.length>0){const t=e[xe.get(W)];0,o=t?t.getBoundingClientRect():null}}return{tabsMeta:t,tabMeta:o}},Ie=(0,z.A)((()=>{const{tabsMeta:e,tabMeta:t}=Ee();let o,r=0;D?(o="top",t&&e&&(r=t.top-e.top+e.scrollTop)):(o=a?"right":"left",t&&e&&(r=(a?-1:1)*(t[o]-e[o]+e.scrollLeft)));const n={[o]:r,[ae]:t?t[ae]:0};if("number"!=typeof me[o]||"number"!=typeof me[ae])ue(n);else{const e=Math.abs(me[o]-n[o]),t=Math.abs(me[ae]-n[ae]);(e>=1||t>=1)&&ue(n)}})),Te=(e,{animation:t=!0}={})=>{t?function(e,t,o,r={},n=()=>{}){const{ease:a=B,duration:l=300}=r;let i=null;const s=t[e];let c=!1;const d=()=>{c=!0},p=r=>{if(c)return void n(new Error("Animation cancelled"));null===i&&(i=r);const d=Math.min(1,(r-i)/l);t[e]=a(d)*(o-s)+s,d>=1?requestAnimationFrame((()=>{n(null)})):requestAnimationFrame(p)};s===o?n(new Error("Element already at target position")):requestAnimationFrame(p)}($,Se.current,e,{duration:n.transitions.duration.standard}):Se.current[$]=e},ke=e=>{let t=Se.current[$];t+=D?e:e*(a?-1:1),Te(t)},Be=()=>{const e=Se.current[ne];let t=0;const o=Array.from(Ce.current.children);for(let r=0;r<o.length;r+=1){const n=o[r];if(t+n[ne]>e){0===r&&(t=e);break}t+=n[ne]}return t},Pe=()=>{ke(-1*Be())},Re=()=>{ke(Be())},[Ne,{onChange:He,...We}]=(0,Y.A)("scrollbar",{className:(0,y.A)(ie.scrollableX,ie.hideScrollbar),elementType:te,shouldForwardComponentProp:!0,externalForwardedProps:Me,ownerState:le}),Ke=r.useCallback((e=>{He?.(e),Ae({overflow:null,scrollbarWidth:e})}),[He]),[Le,je]=(0,Y.A)("scrollButtons",{className:(0,y.A)(ie.scrollButtons,N.className),elementType:O,externalForwardedProps:Me,ownerState:le,additionalProps:{orientation:w,slots:{StartScrollButtonIcon:M.startScrollButtonIcon||M.StartScrollButtonIcon,EndScrollButtonIcon:M.endScrollButtonIcon||M.EndScrollButtonIcon},slotProps:{startScrollButtonIcon:se,endScrollButtonIcon:ce}}}),Fe=(0,z.A)((e=>{const{tabsMeta:t,tabMeta:o}=Ee();if(o&&t)if(o[_]<t[_]){const r=t[$]+(o[_]-t[_]);Te(r,{animation:e})}else if(o[re]>t[re]){const r=t[$]+(o[re]-t[re]);Te(r,{animation:e})}})),De=(0,z.A)((()=>{F&&!1!==x&&ve(!ge)}));r.useEffect((()=>{const e=(0,k.A)((()=>{Se.current&&Ie()}));let t;const o=o=>{o.forEach((e=>{e.removedNodes.forEach((e=>{t?.unobserve(e)})),e.addedNodes.forEach((e=>{t?.observe(e)}))})),e(),De()},r=(0,R.A)(Se.current);let n;return r.addEventListener("resize",e),"undefined"!=typeof ResizeObserver&&(t=new ResizeObserver(e),Array.from(Ce.current.children).forEach((e=>{t.observe(e)}))),"undefined"!=typeof MutationObserver&&(n=new MutationObserver(o),n.observe(Ce.current,{childList:!0})),()=>{e.clear(),r.removeEventListener("resize",e),n?.disconnect(),t?.disconnect()}}),[Ie,De]),r.useEffect((()=>{const e=Array.from(Ce.current.children),t=e.length;if("undefined"!=typeof IntersectionObserver&&t>0&&F&&!1!==x){const o=e[0],r=e[t-1],n={root:Se.current,threshold:.99},a=new IntersectionObserver((e=>{be(!e[0].isIntersecting)}),n);a.observe(o);const l=new IntersectionObserver((e=>{ye(!e[0].isIntersecting)}),n);return l.observe(r),()=>{a.disconnect(),l.disconnect()}}}),[F,x,ge,d?.length]),r.useEffect((()=>{pe(!0)}),[]),r.useEffect((()=>{Ie()})),r.useEffect((()=>{Fe(oe!==me)}),[Fe,me]),r.useImperativeHandle(s,(()=>({updateIndicator:Ie,updateScrollButtons:De})),[Ie,De]);const[$e,Oe]=(0,Y.A)("indicator",{className:(0,y.A)(ie.indicator,P.className),elementType:ee,externalForwardedProps:Me,ownerState:le,additionalProps:{style:me}}),ze=(0,u.jsx)($e,{...Oe});let Xe=0;const _e=r.Children.map(d,(e=>{if(!r.isValidElement(e))return null;const t=void 0===e.props.value?Xe:e.props.value;xe.set(t,Xe);const o=t===W;return Xe+=1,r.cloneElement(e,{fullWidth:"fullWidth"===K,indicator:o&&!de&&ze,selected:o,selectionFollowsFocus:S,onChange:f,textColor:H,value:t,...1!==Xe||!1!==W||e.props.tabIndex?{}:{tabIndex:0}})})),Ue=(()=>{const e={};e.scrollbarSizeListener=F?(0,u.jsx)(Ne,{...We,onChange:Ke}):null;const t=F&&("auto"===x&&(he||fe)||!0===x);return e.scrollButtonStart=t?(0,u.jsx)(Le,{direction:a?"right":"left",onClick:Pe,disabled:!he,...je}):null,e.scrollButtonEnd=t?(0,u.jsx)(Le,{direction:a?"left":"right",onClick:Re,disabled:!fe,...je}):null,e})(),[Ye,Ge]=(0,Y.A)("root",{ref:t,className:(0,y.A)(ie.root,p),elementType:V,externalForwardedProps:{...Me,...j,component:m},ownerState:le}),[Je,Qe]=(0,Y.A)("scroller",{ref:Se,className:ie.scroller,elementType:q,externalForwardedProps:Me,ownerState:le,additionalProps:{style:{overflow:we.overflow,[D?"margin"+(a?"Left":"Right"):"marginBottom"]:L?void 0:-we.scrollbarWidth}}}),[Ve,qe]=(0,Y.A)("list",{ref:Ce,className:(0,y.A)(ie.list,ie.flexContainer),elementType:Z,externalForwardedProps:Me,ownerState:le,getSlotProps:e=>({...e,onKeyDown:t=>{(e=>{const t=Ce.current,o=U(t).activeElement;if("tab"!==o.getAttribute("role"))return;let r="horizontal"===w?"ArrowLeft":"ArrowUp",n="horizontal"===w?"ArrowRight":"ArrowDown";switch("horizontal"===w&&a&&(r="ArrowRight",n="ArrowLeft"),e.key){case r:e.preventDefault(),Q(t,o,J);break;case n:e.preventDefault(),Q(t,o,G);break;case"Home":e.preventDefault(),Q(t,null,G);break;case"End":e.preventDefault(),Q(t,null,J)}})(t),e.onKeyDown?.(t)}})});return(0,u.jsxs)(Ye,{...Ge,children:[Ue.scrollButtonStart,Ue.scrollbarSizeListener,(0,u.jsxs)(Je,{...Qe,children:[(0,u.jsx)(Ve,{"aria-label":l,"aria-labelledby":i,"aria-orientation":"vertical"===w?"vertical":null,role:"tablist",...qe,children:_e}),de&&ze]}),Ue.scrollButtonEnd]})})),ne=o(8466);function ae(e){return(0,j.Ay)("MuiTab",e)}var le=(0,L.A)("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper","icon"]);const ie=(0,M.Ay)(K.A,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.label&&o.icon&&t.labelIcon,t[`textColor${(0,ne.A)(o.textColor)}`],o.fullWidth&&t.fullWidth,o.wrapped&&t.wrapped,{[`& .${le.iconWrapper}`]:t.iconWrapper},{[`& .${le.icon}`]:t.icon}]}})((0,I.A)((({theme:e})=>({...e.typography.button,maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center",lineHeight:1.25,variants:[{props:({ownerState:e})=>e.label&&("top"===e.iconPosition||"bottom"===e.iconPosition),style:{flexDirection:"column"}},{props:({ownerState:e})=>e.label&&"top"!==e.iconPosition&&"bottom"!==e.iconPosition,style:{flexDirection:"row"}},{props:({ownerState:e})=>e.icon&&e.label,style:{minHeight:72,paddingTop:9,paddingBottom:9}},{props:({ownerState:e,iconPosition:t})=>e.icon&&e.label&&"top"===t,style:{[`& > .${le.icon}`]:{marginBottom:6}}},{props:({ownerState:e,iconPosition:t})=>e.icon&&e.label&&"bottom"===t,style:{[`& > .${le.icon}`]:{marginTop:6}}},{props:({ownerState:e,iconPosition:t})=>e.icon&&e.label&&"start"===t,style:{[`& > .${le.icon}`]:{marginRight:e.spacing(1)}}},{props:({ownerState:e,iconPosition:t})=>e.icon&&e.label&&"end"===t,style:{[`& > .${le.icon}`]:{marginLeft:e.spacing(1)}}},{props:{textColor:"inherit"},style:{color:"inherit",opacity:.6,[`&.${le.selected}`]:{opacity:1},[`&.${le.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}}},{props:{textColor:"primary"},style:{color:(e.vars||e).palette.text.secondary,[`&.${le.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${le.disabled}`]:{color:(e.vars||e).palette.text.disabled}}},{props:{textColor:"secondary"},style:{color:(e.vars||e).palette.text.secondary,[`&.${le.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${le.disabled}`]:{color:(e.vars||e).palette.text.disabled}}},{props:({ownerState:e})=>e.fullWidth,style:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"}},{props:({ownerState:e})=>e.wrapped,style:{fontSize:e.typography.pxToRem(12)}}]}))));var se=r.forwardRef((function(e,t){const o=(0,T.b)({props:e,name:"MuiTab"}),{className:n,disabled:a=!1,disableFocusRipple:l=!1,fullWidth:i,icon:s,iconPosition:c="top",indicator:d,label:p,onChange:m,onClick:h,onFocus:b,selected:f,selectionFollowsFocus:v,textColor:w="inherit",value:A,wrapped:x=!1,...S}=o,C={...o,disabled:a,disableFocusRipple:l,selected:f,icon:!!s,iconPosition:c,label:!!p,fullWidth:i,textColor:w,wrapped:x},M=(e=>{const{classes:t,textColor:o,fullWidth:r,wrapped:n,icon:a,label:l,selected:i,disabled:s}=e,c={root:["root",a&&l&&"labelIcon",`textColor${(0,ne.A)(o)}`,r&&"fullWidth",n&&"wrapped",i&&"selected",s&&"disabled"],icon:["iconWrapper","icon"]};return(0,g.A)(c,ae,t)})(C),E=s&&p&&r.isValidElement(s)?r.cloneElement(s,{className:(0,y.A)(M.icon,s.props.className)}):s;return(0,u.jsxs)(ie,{focusRipple:!l,className:(0,y.A)(M.root,n),ref:t,role:"tab","aria-selected":f,disabled:a,onClick:e=>{!f&&m&&m(e,A),h&&h(e)},onFocus:e=>{v&&!f&&m&&m(e,A),b&&b(e)},ownerState:C,tabIndex:f?0:-1,...S,children:["top"===c||"start"===c?(0,u.jsxs)(r.Fragment,{children:[E,p]}):(0,u.jsxs)(r.Fragment,{children:[p,E]}),d]})})),ce=o(4977),de=o(7616),pe=o(4794);var me=[{name:"Caleb Kerr - Co-Founder, Director, and Athlete",image:"caleb_kerr",description:"Caleb is from Evansville, IN and ran for Purdue University from 2012 - 2016. He currently works as an Associate Director for Eli Lilly in Indianapolis. During his time at Purdue, specifically his Senior year, Caleb battled through severe achilles pain that progressively slowed him down until he graduated. After graduation, several months away from running, and two achilles surgeries, Caleb rejuvenated his running career while training in Indianapolis around his work hours. Caleb now lives in Zionsville, IN with his wife (and Purdue school record-holder in the mile) Katie Kerr.",prs:["5K: 14:16","10K: 29:04","Half Marathon: 1:04:36","Marathon: 2:14:50"],accomplishments:["2x Olympic Marathon Trials Qualifier (2020 & 2024)","USATF Indiana Long Distance Athlete of the Year (2018)","Has only been dropped by his wife in a workout once"]},{name:"David Evans - President, Coach, and Athlete",image:"david_evans",description:"David is from Westfield, IN and ran for the Club Cross Country & Track teams at Purdue University. David then coached said club teams from 2017 - 2020 until he moved to Michigan in support of his superstar wife, who is now a resident at the University of Michigan. He now works remotely as a Project Manager at Southwire Company.",prs:["5K: 14:57","8K: 24:42","Half Marathon: 1:08:46"],accomplishments:["3 x NIRCA All American (2 x Track, 1 x XC) from 2015 - 2016","Coached Purdue to 2nd place at NIRCA XC National Championships for men (2019) and women (2018)","Married so high up he had to take the elevator"]},{name:"Jordan Kyle - Co-Founder, Director, and Athlete",image:"jordan_kyle",description:"Jordan grew up in Fishers, Indiana and ran for Hamilton Southeastern High School. He humbly maintains that it was his class that started the excellent distance running the state has seen from the Fishers / Hamilton Southern school districts. Jordan started college at Indiana University and then transferred to the University of Colorado for his last two years. After graduating, he lived and worked in Boulder, CO until 2013, when he moved back to Indiana for law school. He now works for Listrak, a digital marketing technology company based out of Lititz, PA. While he doesn't practice law, Jordan maintains his law license. When he's not working, training, or maintaining his house, Jordan serves as an executive board member for the Joseph Maley Foundation. Jordan lives in Carmel, IN. with his wife Audrey and daughter Lillian.",prs:["3K: 8:08","5K: 13:54","10K: 28:56","Half Marathon: 1:04:07","Marathon: 2:16:51"],accomplishments:["2 time Olympic Trials Marathon Qualifier (2016 & 2020)","3 time NCAA Division I All-American","Finished within 1 minute of Tom Anderson at the 2017 Drumstick Dash"]},{name:"Conner Sandt - Content Creator and Athlete",image:"conner_sandt",description:"Conner is from Middlebury, IN and ran for the Club Cross Country & Track teams at Purdue University. Conner graduated in 2020 and now works as an Electrical Engineer in Royal Oak, MI. Outside of running, Conner has an obvious passion and talent for photography and art. He even designed the WMTC logo!",prs:["5K: 15:14","8K: 25:12 (XC)","Half Marathon: 1:10:13"],accomplishments:["2 x NIRCA All-American (All XC) from 2018 - 2019","Only complained about every other workout last year"]},{name:"Abbey Warth - Social Media Coordinator and Athlete",image:"abby_warth",description:"Abbey is from Massillon, OH and was part of the track and cross country teams at Ohio Wesleyan University, graduating in 2016. In 2018, Abbey moved to Florida where she attended PA school, briefly worked as a PA in Physical Medicine, and sweated more than she ever has in her entire life. Abbey relocated to Indianapolis in 2021 where she currently works as an Internal Medicine PA at St Vincent Hospital.",prs:["800m: 2:12","1500m: 4:29","5K: 17:58","10K: 36:16","Half Marathon: 1:22:40"],accomplishments:["5x NCAA Division 3 qualifier in the 1500m and mile indoor/outdoor track (2014-2016)","Division 3 All-American in the 1500m (2015)"]},{name:"Max Runningen - Social Media Coordinator and Athlete",image:"max_runningen",description:"Max is from Noblesville, IN and ran for the Club Cross Country & Track teams at Purdue University. Max graduated in 2020 and now works as civil engineer at Christopher B. Burke Engineering in Indianapolis. Outside of running on the roads, Max enjoys twisting his ankle while trail running.",prs:["5K: 15:27","10K: 33:11","Half Marathon: 1:10:56","Marathon: 2:34:12"],accomplishments:["2018 NIRCA All-American (Track)","The Indiana Pacers went undefeated (1-0) while Max was their team captain in 2019"]},{name:"Lucy Dobbs - Team Captain and Athlete",image:"lucy_dobbs",description:"Lucy lives in Indianapolis, Indiana and works as an associate Actuary with OneAmerica. She ran for the club Cross Country and Track teams at Purdue University, where she was an All-American as well as a National Champion in the 5K on the track.",prs:["5K: 17:02","10K: 34:48","Half Marathon: 1:16:56","Marathon: 2:36:33"],accomplishments:["2019 NIRCA National Champion (Track 5K)","2024 Olympic Marathon Trials Qualifier"]}];var ue=[{name:"Lauren Bailey",image:"lauren_bailey",location:"Westfield, IN",jobTitle:"Home Site Coordinator: IN State Health Department",prs:["5K: 15:45","6K: 20:14 (XC)","10K: 33:53"]},{name:"Lucy Dobbs",image:"lucy_dobbs",location:"Indianapolis, IN",jobTitle:"Associate Actuary: OneAmerica",prs:["5K: 17:02","10K: 34:48","Half Marathon: 1:16:56","Marathon: 2:36:33"]},{name:"Curt Eckstein",image:"curt_eckstein",location:"Indianapolis, IN",jobTitle:"GDP Engineer: Rolls Royce",prs:["5K: 13:48","10K: 28:42","Half Marathon: 1:04:14"]},{name:"Quinn Gallagher",image:"quinn_gallagher",location:"Grand Rapids, MI",jobTitle:"Mechanical Engineer",prs:["8K (XC): 23:37","10K (XC): 30:33","Mile: 4:10"]},{name:"Johnnie Guy",image:"johnnie_guy",location:"Leopold, IN",jobTitle:"Mechanical Engineer",prs:["5K: 13:39","10K: 28:34","Half Marathon: 1:06:47"]},{name:"Caleb Kerr",image:"caleb_kerr",location:"Zionsville, IN",jobTitle:"Associate Director: Eli Lilly",prs:["5K: 14:16","10K: 29:04","Half Marathon: 1:04:36","Marathon: 2:14:50"]},{name:"Rob Mullett",image:"rob_mullett",location:"Indianapolis, IN",jobTitle:"Event & Operations Manager: Beyond Monumental",prs:["Mile: 3:59.37","5K: 13:41","Half Marathon: 1:04:33"]},{name:"Damon Pruett",image:"damon_pruett",location:"Indianapolis, IN",jobTitle:"Quality Assurance: Continental General",prs:["5K: 14:33","10K: 29:52","Half Marathon: 1:06:20","Marathon: 2:22:48"]},{name:"Hannah Stoffel",image:"hannah_stoffel",location:"Indianapolis, IN",jobTitle:"Occupational Therapy Doctoral Student",prs:["1500m: 4:15","Half Marathon: 1:15:28","Marathon: 2:46:42"]},{name:"Anthony Williams",image:"anthony_williams",location:"Indianapolis, IN",jobTitle:"Medical Resident: Univ. Utah",prs:["5K: 14:35","10K: 30:35","Half Marathon: 1:07:29","Marathon: 2:19:26"]}];const he=(e,t)=>{const o=e.allFile.edges.find((e=>{let{node:o}=e;return o.name===t}));return o?(0,a.c)(o.node.childImageSharp.gatsbyImageData):null};var be=o(7393);function fe(e){return(0,j.Ay)("MuiListItemIcon",e)}(0,L.A)("MuiListItemIcon",["root","alignItemsFlexStart"]);var ye=o(2850);const ge=(0,M.Ay)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,"flex-start"===o.alignItems&&t.alignItemsFlexStart]}})((0,I.A)((({theme:e})=>({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex",variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}))));var ve=r.forwardRef((function(e,t){const o=(0,T.b)({props:e,name:"MuiListItemIcon"}),{className:n,...a}=o,l=r.useContext(ye.A),i={...o,alignItems:l.alignItems},s=(e=>{const{alignItems:t,classes:o}=e,r={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,g.A)(r,fe,o)})(i);return(0,u.jsx)(ge,{className:(0,y.A)(s.root,n),ownerState:i,ref:t,...a})})),we=o(8651);function Ae(e){return(0,j.Ay)("MuiListItemText",e)}var xe=(0,L.A)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);const Se=(0,M.Ay)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${xe.primary}`]:t.primary},{[`& .${xe.secondary}`]:t.secondary},t.root,o.inset&&t.inset,o.primary&&o.secondary&&t.multiline,o.dense&&t.dense]}})({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4,[`.${we.A.root}:where(& .${xe.primary})`]:{display:"block"},[`.${we.A.root}:where(& .${xe.secondary})`]:{display:"block"},variants:[{props:({ownerState:e})=>e.primary&&e.secondary,style:{marginTop:6,marginBottom:6}},{props:({ownerState:e})=>e.inset,style:{paddingLeft:56}}]});var Ce=r.forwardRef((function(e,t){const o=(0,T.b)({props:e,name:"MuiListItemText"}),{children:n,className:a,disableTypography:l=!1,inset:i=!1,primary:s,primaryTypographyProps:d,secondary:p,secondaryTypographyProps:m,slots:h={},slotProps:b={},...f}=o,{dense:v}=r.useContext(ye.A);let w=null!=s?s:n,A=p;const x={...o,disableTypography:l,inset:i,primary:!!w,secondary:!!A,dense:v},S=(e=>{const{classes:t,inset:o,primary:r,secondary:n,dense:a}=e,l={root:["root",o&&"inset",a&&"dense",r&&n&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,g.A)(l,Ae,t)})(x),C={slots:h,slotProps:{primary:d,secondary:m,...b}},[M,E]=(0,Y.A)("primary",{className:S.primary,elementType:c.A,externalForwardedProps:C,ownerState:x}),[I,k]=(0,Y.A)("secondary",{className:S.secondary,elementType:c.A,externalForwardedProps:C,ownerState:x});return null==w||w.type===c.A||l||(w=(0,u.jsx)(M,{variant:v?"body2":"body1",component:E?.variant?void 0:"span",...E,children:w})),null==A||A.type===c.A||l||(A=(0,u.jsx)(I,{variant:"body2",color:"textSecondary",...k,children:A})),(0,u.jsxs)(Se,{className:(0,y.A)(S.root,a),ownerState:x,ref:t,...f,children:[w,A]})}));var Me=()=>{const e=(0,pe.useStaticQuery)("2329439770"),t=ue.map((t=>({...t,image:he(e,t.image)})));return r.createElement("div",null,r.createElement(l.A,{display:"flex",flexWrap:"wrap",justifyContent:"space-around"},t.map(((e,t)=>r.createElement(l.A,{key:t,m:2,width:300,height:525},r.createElement(ce.A,{style:{height:"100%",display:"flex",flexDirection:"column",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",border:"1px solid #ddd"}},r.createElement(be.A,{style:{flex:"1 0 auto"}},r.createElement(a.G,{image:e.image,alt:e.name,style:{height:"100%",objectFit:"contain"}})),r.createElement(s.A,{style:{flex:"0 1 auto"}},r.createElement(c.A,{gutterBottom:!0,variant:"h4",component:"div",color:"text.primary"},e.name),r.createElement(c.A,{variant:"h6",color:"text.secondary"},e.location),r.createElement(c.A,{variant:"subtitle1",color:"text.secondary"},e.jobTitle),r.createElement(l.A,{display:"flex",flexDirection:"column",alignItems:"flex-start",mt:2},r.createElement(c.A,{variant:"body1",color:"text.primary",style:{fontWeight:"bold"}},"PRs:"),r.createElement(d.A,{dense:!0,style:{padding:0}},e.prs.map(((e,t)=>r.createElement(p.Ay,{key:t,style:{paddingTop:0,paddingBottom:0,paddingLeft:5}},r.createElement(ve,{style:{minWidth:"30px"}},r.createElement("span",{role:"img","aria-label":"check"},"✅")),r.createElement(Ce,{primary:e,style:{textAlign:"left"}})))))))))))))};var Ee=()=>{const[e,t]=r.useState(null),[o,i]=r.useState(0),c=()=>{t(null)};r.useEffect((()=>{document.body.style.margin="0",document.body.style.padding="0",document.title="Meet the Team | WMTC"}),[]);const d=(0,pe.useStaticQuery)("2919179906"),p=me.map((e=>({...e,image:he(d,e.image)})));return r.createElement(l.A,{sx:{backgroundColor:"background.default"}},r.createElement(n.A,null),r.createElement(l.A,{sx:{maxWidth:"1200px",margin:"0 auto",textAlign:"center",flexGrow:1}},r.createElement("h1",{style:{fontSize:"2.5rem",marginBottom:"20px"}},"Meet the Team"),r.createElement(l.A,{sx:{display:"flex",justifyContent:"center",marginBottom:"20px"}},r.createElement(re,{value:o,onChange:(e,t)=>{i(t)},variant:"scrollable",scrollButtons:"auto",sx:{"& .MuiTab-root":{minWidth:"auto",padding:"0 12px"}}},r.createElement(se,{label:"Club Leaders"}),r.createElement(se,{label:"Elite Athletes"}),r.createElement(se,{label:"Club Members"}))),0===o&&r.createElement(l.A,{sx:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"20px"}},p.map((e=>r.createElement(ce.A,{key:e.name,onClick:()=>(e=>{t(e)})(e),sx:{cursor:"pointer",boxShadow:3,transition:"transform 0.3s","&:hover":{transform:"scale(1.05)"}}},r.createElement(s.A,null,r.createElement(a.G,{image:e.image,alt:e.name,style:{width:"100%",height:"auto",borderRadius:"10px"}}),r.createElement("p",{style:{fontSize:"1.2rem",marginTop:"10px",fontWeight:"bold"}},e.name)))))),1===o&&r.createElement(l.A,null,r.createElement(Me,null)),2===o&&r.createElement(l.A,null,r.createElement("p",null,"Club Members content goes here.")),r.createElement(de.A,{open:!!e,onClose:c},r.createElement(l.A,null,e&&r.createElement(f,{leader:e,onClose:c})))))}}}]);
//# sourceMappingURL=component---src-pages-meet-the-team-js-f5aaad492bf050efbeeb.js.map