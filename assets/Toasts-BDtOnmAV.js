import{c as x,w as e,e as l,a as w,d as t,f as o,b as T,g as B,F as V,h as s,t as C}from"./index-BIOjzD5o.js";const k=s("strong",null,"Vue Toast",-1),H=s("small",null,"Basic",-1),I=s("p",{class:"text-body-secondary small"}," Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button. ",-1),j=s("svg",{class:"rounded me-2",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img"},[s("rect",{width:"100%",height:"100%",fill:"#007aff"})],-1),U=s("strong",{class:"me-auto"},"CoreUI for Vue.js",-1),M=s("small",null,"7 min ago",-1),A={class:"me-auto fw-bold"},R=s("small",null,"7 min ago",-1),Y=s("strong",null,"Vue Toast",-1),z=s("small",null,"Translucent",-1),D=s("p",{class:"text-body-secondary small"}," Toasts are slightly translucent to blend in with what's below them. ",-1),E=s("svg",{class:"rounded me-2",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img"},[s("rect",{width:"100%",height:"100%",fill:"#007aff"})],-1),F=s("strong",{class:"me-auto"},"CoreUI for Vue.js",-1),N=s("small",null,"7 min ago",-1),S=s("strong",null,"Vue Toast",-1),q=s("small",null,"Stacking",-1),L=s("p",{class:"text-body-secondary small"}," You can stack toasts by wrapping them in a toast container, which will vertically add some spacing. ",-1),G=s("svg",{class:"rounded me-2",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img"},[s("rect",{width:"100%",height:"100%",fill:"#007aff"})],-1),J=s("strong",{class:"me-auto"},"CoreUI for Vue.js",-1),K=s("small",null,"7 min ago",-1),O=s("svg",{class:"rounded me-2",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img"},[s("rect",{width:"100%",height:"100%",fill:"#007aff"})],-1),P=s("strong",{class:"me-auto"},"CoreUI for Vue.js",-1),Q=s("small",null,"7 min ago",-1),W=s("strong",null,"Vue Toast",-1),X=s("small",null,"Custom content",-1),Z=s("p",{class:"text-body-secondary small"},[o(" Customize your toasts by removing sub-components, tweaking them with "),s("a",{href:"https://coreui.io/docs/utilities/api"},"utilities"),o(", or by adding your own markup. Here we've created a simpler toast by removing the default "),s("code",null,"<CToastHeader>"),o(", adding a custom hide icon from "),s("a",{href:"https://coreui.io/icons/"},"CoreUI Icons"),o(", and using some "),s("a",{href:"https://coreui.io/docs/utilities/flex"},"flexbox utilities"),o(" to adjust the layout. ")],-1),$={class:"d-flex"},tt=s("p",{class:"text-body-secondary small"}," Alternatively, you can also add additional controls and components to toasts. ",-1),et={class:"mt-2 pt-2 border-top"},st=s("strong",null,"Vue Toast",-1),ot=s("small",null,"Custom content",-1),lt=s("p",{class:"text-body-secondary small"},[o(" Building on the above example, you can create different toast color schemes with our "),s("a",{href:"https://coreui.io/docs/utilities/colors"},"color"),o(" and "),s("a",{href:"https://coreui.io/docs/utilities/background"},"background"),o(" utilities. Here we've set "),s("code",null,'color="primary"'),o(" and added "),s("code",null,".text-white"),o(" class to the "),s("code",null,"<Ctoast>"),o(", and then set "),s("code",null,"white"),o(" property to our close button. For a crisp edge, we remove the default border with "),s("code",null,".border-0"),o(". ")],-1),at={class:"d-flex"},ut={__name:"Toasts",setup(nt){const h=[],b=()=>{h.push({title:"new toast",content:"Lorem ipsum dolor cet emit"})};return(it,dt)=>{const d=l("CCardHeader"),c=l("CToastHeader"),a=l("CToastBody"),n=l("CToast"),i=l("DocsExample"),f=l("CButton"),p=l("CToaster"),u=l("CCardBody"),r=l("CCard"),_=l("CCol"),m=l("CToastClose"),y=l("CRow");return w(),x(y,null,{default:e(()=>[t(_,{xs:12},{default:e(()=>[t(r,{class:"mb-4"},{default:e(()=>[t(d,null,{default:e(()=>[k,o(),H]),_:1}),t(u,null,{default:e(()=>[I,t(i,{href:"components/toast.html"},{default:e(()=>[t(n,{title:"CoreUI for Vue.js",autohide:!1,visible:!0},{default:e(()=>[t(c,{closeButton:""},{default:e(()=>[j,U,M]),_:1}),t(a,null,{default:e(()=>[o("Hello, world! This is a toast message.")]),_:1})]),_:1})]),_:1}),t(i,{href:"components/toast.html"},{default:e(()=>[t(f,{color:"primary",onClick:b},{default:e(()=>[o("Send a toast")]),_:1}),t(p,{placement:"top-end"},{default:e(()=>[(w(),T(V,null,B(h,(g,v)=>t(n,{visible:!0,key:v},{default:e(()=>[t(c,{closeButton:""},{default:e(()=>[s("span",A,C(g.title),1),R]),_:2},1024),t(a,null,{default:e(()=>[o(C(g.content),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(_,{xs:12},{default:e(()=>[t(r,{class:"mb-4"},{default:e(()=>[t(d,null,{default:e(()=>[Y,o(),z]),_:1}),t(u,null,{default:e(()=>[D,t(i,{href:"components/toast.html#translucent",tabContentClass:"bg-dark"},{default:e(()=>[t(n,{title:"CoreUI for Vue.js",autohide:!1,visible:!0},{default:e(()=>[t(c,{closeButton:""},{default:e(()=>[E,F,N]),_:1}),t(a,null,{default:e(()=>[o("Hello, world! This is a toast message.")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(_,{xs:12},{default:e(()=>[t(r,{class:"mb-4"},{default:e(()=>[t(d,null,{default:e(()=>[S,o(),q]),_:1}),t(u,null,{default:e(()=>[L,t(i,{href:"components/toast.html#stacking"},{default:e(()=>[t(p,{class:"position-static"},{default:e(()=>[t(n,{title:"CoreUI for Vue.js",autohide:!1,visible:!0},{default:e(()=>[t(c,{closeButton:""},{default:e(()=>[G,J,K]),_:1}),t(a,null,{default:e(()=>[o("Hello, world! This is a toast message.")]),_:1})]),_:1}),t(n,{title:"CoreUI for Vue.js",autohide:!1,visible:!0},{default:e(()=>[t(c,{closeButton:""},{default:e(()=>[O,P,Q]),_:1}),t(a,null,{default:e(()=>[o("Hello, world! This is a toast message.")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(_,{xs:12},{default:e(()=>[t(r,{class:"mb-4"},{default:e(()=>[t(d,null,{default:e(()=>[W,o(),X]),_:1}),t(u,null,{default:e(()=>[Z,t(i,{href:"components/toast.html#custom-content"},{default:e(()=>[t(n,{autohide:!1,class:"align-items-center",visible:!0},{default:e(()=>[s("div",$,[t(a,null,{default:e(()=>[o("Hello, world! This is a toast message.")]),_:1}),t(m,{class:"me-2 m-auto"})])]),_:1})]),_:1}),tt,t(i,{href:"components/toast.html#custom-content"},{default:e(()=>[t(n,{autohide:!1,class:"align-items-center",visible:""},{default:e(()=>[t(a,null,{default:e(()=>[o(" Hello, world! This is a toast message. "),s("div",et,[t(f,{type:"button",color:"primary",size:"sm"},{default:e(()=>[o(" Take action ")]),_:1}),t(m,{as:"CButton",color:"secondary",size:"sm",class:"ms-1"},{default:e(()=>[o("Close")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(_,{xs:12},{default:e(()=>[t(r,{class:"mb-4"},{default:e(()=>[t(d,null,{default:e(()=>[st,o(),ot]),_:1}),t(u,null,{default:e(()=>[lt,t(i,{href:"components/toast.html#color-schemes"},{default:e(()=>[t(n,{autohide:!1,color:"primary",class:"text-white align-items-center",visible:!0},{default:e(()=>[s("div",at,[t(a,null,{default:e(()=>[o("Hello, world! This is a toast message.")]),_:1}),t(m,{class:"me-2 m-auto",white:""})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};export{ut as default};
