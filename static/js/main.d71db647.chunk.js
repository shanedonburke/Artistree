(this.webpackJsonpartistree=this.webpackJsonpartistree||[]).push([[0],{105:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/birdarms.478c1e42.png"},186:function(e,t,s){},187:function(e,t,s){},188:function(e,t,s){},194:function(e,t,s){},195:function(e,t,s){var i={"./ArmBird.jpg":196,"./Goose.jpg":197,"./amogus.jpg":198,"./avocado.jpg":199,"./birdarms.png":105,"./birdgun.png":200,"./canvas_drawing.jpg":201,"./farq.jpeg":202,"./guac.png":203,"./monke.jpg":204,"./tpose.png":205,"./willie.jpg":206};function c(e){var t=n(e);return s(t)}function n(e){if(!s.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}c.keys=function(){return Object.keys(i)},c.resolve=n,e.exports=c,c.id=195},196:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/ArmBird.2ef0e194.jpg"},197:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/Goose.c9b2d905.jpg"},198:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/amogus.c1a423e2.jpg"},199:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/avocado.b752fb16.jpg"},200:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/birdgun.ebf97901.png"},201:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/canvas_drawing.6f09f3dc.jpg"},202:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/farq.b1b7bf3b.jpeg"},203:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/guac.1abce230.png"},204:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/monke.1b1e4907.jpg"},205:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/tpose.41094b30.png"},206:function(e,t,s){"use strict";s.r(t),t.default=s.p+"static/media/willie.7510fc77.jpg"},318:function(e,t,s){},319:function(e,t,s){},320:function(e,t,s){},321:function(e,t,s){},343:function(e,t,s){},344:function(e,t,s){},346:function(e,t,s){"use strict";s.r(t);var i=s(0),c=s.n(i),n=s(15),a=s.n(n),l=(s(186),s(22)),r=s(20),o=(s(187),s(26)),d=s(27),j=s(30),b=s(29),h=s(159),x=(s(188),s(2)),p=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(e){var i;return Object(o.a)(this,s),(i=t.call(this,e)).state={},i}return Object(d.a)(s,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"post",children:[Object(x.jsx)(l.b,{to:{pathname:"/leave-feedback",state:{image:this.props.image}},children:Object(x.jsx)("img",{className:"image",src:this.props.image,alt:"Galley Post"})}),Object(x.jsx)("div",{children:this.props.children})]})}}]),s}(c.a.Component),u=(s(194),[]),O=function(e){Object(j.a)(i,e);var t=Object(b.a)(i);function i(e){var s;return Object(o.a)(this,i),(s=t.call(this,e)).state={grid:[]},s}return Object(d.a)(i,[{key:"buildGrid",value:function(e){for(var t=[],s=0;s<e;s++)t.push(s);return t}},{key:"importAll",value:function(e){return e.keys().map(e)}},{key:"componentDidMount",value:function(){u=this.importAll(s(195)),console.log(u);var e=this.buildGrid(12);this.setState({grid:e})}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"gallery-root",children:[Object(x.jsxs)("div",{className:"title-bar gallery-title-bar",children:[Object(x.jsxs)("div",{className:"filter-sort title-bar-section-sm",children:[Object(x.jsxs)(h.a,{style:{marginLeft:"10px"},children:[Object(x.jsx)("span",{className:"material-icons title-bar-icon",children:"filter_list"}),"Filter"]}),Object(x.jsxs)(h.a,{style:{marginLeft:"10px"},children:[Object(x.jsx)("span",{className:"material-icons-outlined title-bar-icon",children:"arrow_upward"}),"Sort"]})]}),Object(x.jsx)("div",{className:"title-bar-section-lg",children:"Gallery"}),Object(x.jsx)("div",{className:"title-bar-section-sm new-submission-container",children:Object(x.jsx)(l.b,{to:"/canvas",children:Object(x.jsx)(h.a,{color:"primary",className:"new-submission-btn",children:Object(x.jsxs)("div",{className:"new-submission-elements",children:[Object(x.jsx)("span",{className:"material-icons-outlined title-bar-icon",children:"add"}),Object(x.jsx)("span",{className:"new-submission-text",children:"New Submission"})]})})})})]}),Object(x.jsx)("div",{className:"page-body",children:u.map((function(e,t){return Object(x.jsx)(p,{image:e.default,children:t},t)}))})]})}}]),i}(c.a.Component),g=s(113),m=s(174),f=s(5),y=s.n(f),v=s(173),w=s(44),N=s(65),A=s(167),C=(s(318),function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"tool-button",style:{backgroundColor:this.props.selectedIcon===this.props.toolName?"#918e8e":null},onClick:function(t){return e.props.onSelect(t,e.props.toolName)},children:[this.props.toolName,this.props.useFontAwesome?Object(x.jsx)(A.a,{icon:this.props.icon,style:{fontSize:"32px"}}):Object(x.jsx)("span",{style:{color:this.props.iconColor||"black"},className:this.props.iconClass,children:this.props.iconName})]})}}]),s}(c.a.Component)),k=(s(319),function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(e){var i;return Object(o.a)(this,s),(i=t.call(this,e)).state={selectedIcon:"Brush",displayColorPicker:!1,color:{r:"0",g:"0",b:"0",a:"0"}},w.b.add(N.a),w.b.add(N.b),i}return Object(d.a)(s,[{key:"render",value:function(){var e=this,t=y()({default:{popover:{position:"absolute",zIndex:"2"},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}}}),s=function(t,s){return e.setState(Object(g.a)(Object(g.a)({},e.state),{},{selectedIcon:s}))},i=function(t){e.setState({displayColorPicker:!e.state.displayColorPicker}),t.stopPropagation()};return Object(x.jsxs)("div",{className:"canvas-root",children:[Object(x.jsx)("div",{className:"title-bar",children:Object(x.jsx)("div",{children:"Canvas"})}),Object(x.jsxs)("div",{className:"page-body",children:[Object(x.jsxs)("div",{className:"zoom-controls",children:[Object(x.jsx)("span",{className:"material-icons",children:"zoom_in"}),Object(x.jsx)("span",{className:"material-icons",children:"zoom_out"})]}),Object(x.jsxs)("div",{className:"canvas-with-tools",onMouseDown:function(){return e.setState({displayColorPicker:!1})},children:[Object(x.jsx)(m.a,{className:"canvas",hideGrid:!0,brushColor:"Eraser"===this.state.selectedIcon?"white":"rgb(".concat(this.state.color.r,", ").concat(this.state.color.g,", ").concat(this.state.color.b,")")}),Object(x.jsxs)("div",{className:"canvas-sidebar",children:[Object(x.jsxs)("div",{className:"tools",children:[Object(x.jsx)(C,{selectedIcon:this.state.selectedIcon,onSelect:s,toolName:"Brush",iconName:"brush",iconClass:"material-icons-outlined"}),Object(x.jsx)(C,{selectedIcon:this.state.selectedIcon,onSelect:s,toolName:"Pencil",iconName:"create",iconClass:"material-icons-outlined"}),Object(x.jsx)(C,{selectedIcon:this.state.selectedIcon,onSelect:s,toolName:"Fill",useFontAwesome:"true",icon:N.b}),Object(x.jsx)(C,{selectedIcon:this.state.selectedIcon,onSelect:s,toolName:"Line",iconName:"arrow_right_alt",iconClass:"material-icons"}),Object(x.jsx)(C,{selectedIcon:this.state.selectedIcon,onSelect:s,toolName:"Ellipse",iconName:"circle",iconClass:"material-icons-outlined"}),Object(x.jsx)(C,{selectedIcon:this.state.selectedIcon,onSelect:s,toolName:"Rectangle",iconName:"crop_16_9",iconClass:"material-icons-outlined"}),Object(x.jsx)(C,{selectedIcon:this.state.selectedIcon,onSelect:s,toolName:"Layers",iconName:"layers",iconClass:"material-icons-outlined"}),Object(x.jsx)(C,{selectedIcon:this.state.selectedIcon,onSelect:s,toolName:"Eraser",useFontAwesome:"true",icon:N.a}),Object(x.jsx)(C,{selectedIcon:this.state.selectedIcon,onSelect:s,toolName:"Text",iconName:"title",iconClass:"material-icons"}),Object(x.jsx)(C,{selectedIcon:"false",onSelect:i,toolName:"Choose Color",iconName:"palette",iconClass:"material-icons",iconColor:"rgb(".concat(this.state.color.r,", ").concat(this.state.color.g,", ").concat(this.state.color.b,")")}),this.state.displayColorPicker?Object(x.jsxs)("div",{style:t.popover,onMouseDown:function(e){return e.stopPropagation()},children:[Object(x.jsx)("div",{style:t.cover,onMouseDown:i}),Object(x.jsx)(v.a,{color:this.state.color,onChange:function(t){return e.setState({color:t.rgb})}})]}):null,Object(x.jsx)(C,{selectedIcon:this.state.selectedIcon,onSelect:s,toolName:"Sample Color",iconName:"colorize",iconClass:"material-icons"})]}),Object(x.jsxs)("div",{className:"sidebar-btn-container",children:[Object(x.jsx)(l.b,{to:"/my-submissions",children:Object(x.jsx)("button",{className:"canvas-sidebar-btn post-to-canvas-btn",children:"Post to Gallery"})}),Object(x.jsx)(l.b,{to:"/Artistree",children:Object(x.jsx)("button",{className:"canvas-sidebar-btn discard-btn",children:"Discard"})})]})]})]})]})]})}}]),s}(c.a.Component)),S=s(112),L=s(395),I=s(397),M=s(400),E=s(394),z=s(393),D=s(384),P=s(383),W=s(401),_=s(385),R=s(379),F=(s(320),Object(R.a)((function(e){return{paper:{position:"absolute",width:"1000px",height:"600px",backgroundColor:"#f7e9d6",border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),top:"calc(50% - 300px)",left:"calc(50% - 500px)",borderRadius:"10px"}}})));function T(){var e=Object(r.f)().state,t=Object(i.useState)(!1),s=Object(S.a)(t,2),c=s[0],n=s[1],a=Object(i.useState)(!1),l=Object(S.a)(a,2),o=l[0],d=l[1],j=F();return Object(x.jsxs)("div",{className:"LeavingFeedback-root",children:[Object(x.jsx)(L.a,{open:c,children:Object(x.jsx)("div",{className:j.paper,children:Object(x.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(x.jsxs)("div",{style:{display:"flex"},children:[Object(x.jsxs)("div",{className:"report-col",children:[Object(x.jsx)("h4",{children:"Reason for reporting:"}),Object(x.jsxs)(I.a,{children:[Object(x.jsx)(M.a,{value:"nudity",control:Object(x.jsx)(E.a,{}),label:"Nudity"}),Object(x.jsx)(M.a,{value:"unoriginal",control:Object(x.jsx)(E.a,{}),label:"Unoriginal"}),Object(x.jsx)(M.a,{value:"offensive",control:Object(x.jsx)(E.a,{}),label:"Offensive/Derogatory"}),Object(x.jsx)(M.a,{value:"spam",control:Object(x.jsx)(E.a,{}),label:"Spam"}),Object(x.jsx)(M.a,{value:"illegal",control:Object(x.jsx)(E.a,{}),label:"Illegal content"}),Object(x.jsxs)("div",{style:{display:"flex"},children:[Object(x.jsx)(M.a,{value:"other",control:Object(x.jsx)(E.a,{}),label:"Other:"}),Object(x.jsx)(z.a,{variant:"outlined",size:"small",placeholder:"Reason"})]})]})]}),Object(x.jsxs)("div",{className:"report-col",children:[Object(x.jsx)("h4",{style:{marginBottom:"20px"},children:"Explain your reasoning:"}),Object(x.jsx)(z.a,{multiline:!0,rows:20,variant:"outlined",style:{width:"100%"},placeholder:"Write a few sentences explaining why you are reporting this submission"})]})]}),Object(x.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[Object(x.jsx)(h.a,{style:{width:"100px",backgroundColor:"#969696"},onClick:function(){return n(!1)},children:"Cancel"}),Object(x.jsx)(h.a,{style:{width:"100px",backgroundColor:"red"},onClick:function(){return n(!1)},children:"Report"})]})]})})}),Object(x.jsx)("div",{className:"title-bar",children:Object(x.jsx)("div",{children:"Critique"})}),Object(x.jsx)("div",{className:"LeavingFeedback-page-body",children:Object(x.jsx)("div",{style:{height:"100%",display:"flex"},children:Object(x.jsxs)(D.a,{container:!0,style:{display:"flex",flexDirection:"row",justifyContent:"space-between",flexWrap:"nowrap"},children:[Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",marginRight:"200px"},children:[Object(x.jsx)(P.a,{style:{width:"auto",height:"570px",textAlign:"left"},children:Object(x.jsx)("img",{src:e.image,alt:"dynamo",style:{width:"570px",height:"100%"}})}),Object(x.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(x.jsx)(h.a,{className:"heart-button",onClick:function(){return d(!o)},children:Object(x.jsx)("span",{className:"material-icons heart-icon",children:o?"favorite":"favorite_border"})}),Object(x.jsx)(h.a,{style:{width:"100px",backgroundColor:"red"},onClick:function(){return n(!c)},children:"Report"})]})]}),Object(x.jsx)("div",{style:{height:"100%",width:"100%",overflow:"hidden"},children:Object(x.jsxs)(P.a,{style:{padding:"10px 20px",width:"100%",height:"100%"},children:[Object(x.jsxs)("h4",{children:["Critique this artwork. Be sure to follow the Critiquing",Object(x.jsx)("a",{href:"/Artistree/eula",children:" Guidelines"}),"!"]}),Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[Object(x.jsxs)("div",{style:{margin:"20px 0"},children:[Object(x.jsx)(z.a,{id:"standard-basic",label:"Leave a Critique",multiline:!0,rows:4,variant:"outlined",fullWidth:!0}),Object(x.jsx)(h.a,{color:"primary",style:{marginTop:"10px",float:"right"},children:"Submit"})]}),Object(x.jsxs)("div",{style:{overflowY:"auto",height:"100%"},children:[Object(x.jsxs)(D.a,{container:!0,wrap:"nowrap",spacing:2,style:{textAlign:"right",height:"110px"},children:[Object(x.jsx)(D.a,{item:!0,children:Object(x.jsx)(W.a,{alt:"ELON",src:"https://cf-images.us-east-1.prod.boltdns.net/v1/static/854081161001/e7c0a8f2-4b0b-40e7-858f-47de21dc8dcb/794143eb-4285-434e-8a08-820dab64c65b/1280x720/match/image.jpg",style:{width:"50px",height:"50px"}})}),Object(x.jsxs)(D.a,{item:!0,xs:!0,zeroMinWidth:!0,children:[Object(x.jsx)("h4",{style:{margin:0,textAlign:"left",color:"red"},children:"He Buddy Man"}),Object(x.jsxs)("p",{style:{textAlign:"left"},children:["Wow great image! Reminds me of the time when I was drawing theoretical chicken art!"," "]}),Object(x.jsx)("p",{style:{textAlign:"left",color:"gray"},children:"posted 54 minutes ago"})]})]}),Object(x.jsx)(B,{}),Object(x.jsxs)(D.a,{container:!0,wrap:"nowrap",spacing:2,style:{textAlign:"right",height:"110px"},children:[Object(x.jsx)(D.a,{item:!0,children:Object(x.jsx)(W.a,{alt:"ELON",src:"https://preview.redd.it/cfd0qlpofcb01.jpg?auto=webp&s=b2b0b996ec334bcddc3088037130e9dba186ded0",style:{width:"50px",height:"50px"}})}),Object(x.jsxs)(D.a,{item:!0,xs:!0,zeroMinWidth:!0,children:[Object(x.jsx)("h4",{style:{margin:0,textAlign:"left",color:"red"},children:"R1TCH13R0CKS"}),Object(x.jsxs)("p",{style:{textAlign:"left"},children:["I support your artwork. Consider adding your signature to your artworks."," "]}),Object(x.jsx)("p",{style:{textAlign:"left",color:"gray"},children:"posted 6 hours ago"})]})]}),Object(x.jsx)(B,{}),Object(x.jsxs)(D.a,{container:!0,wrap:"nowrap",spacing:2,style:{textAlign:"right",height:"110px"},children:[Object(x.jsx)(D.a,{item:!0,children:Object(x.jsx)(W.a,{alt:"ELON",src:"https://i.redd.it/kc9sfn0jgnwz.jpg",style:{width:"50px",height:"50px"}})}),Object(x.jsxs)(D.a,{item:!0,xs:!0,zeroMinWidth:!0,children:[Object(x.jsx)("h4",{style:{margin:0,textAlign:"left",color:"red"},children:"BirdsArentReal42"}),Object(x.jsxs)("p",{style:{textAlign:"left"},children:["I believe if you added some lens flare this would be much better..."," "]}),Object(x.jsx)("p",{style:{textAlign:"left",color:"gray"},children:"posted 3 days ago"})]})]}),Object(x.jsx)(B,{}),Object(x.jsxs)(D.a,{container:!0,wrap:"nowrap",spacing:2,style:{textAlign:"right",height:"110px"},children:[Object(x.jsx)(D.a,{item:!0,children:Object(x.jsx)(W.a,{alt:"ELON",src:"https://cyberpunk2077.wiki.fextralife.com/file/Cyberpunk-2077/johnny-silverhand-npc-cyberpunk-2077-wiki-guide.png",style:{width:"50px",height:"50px"}})}),Object(x.jsxs)(D.a,{item:!0,xs:!0,zeroMinWidth:!0,children:[Object(x.jsx)("h4",{style:{margin:0,textAlign:"left",color:"red"},children:"SlamHammy"}),Object(x.jsxs)("p",{style:{textAlign:"left"},children:["THIS IMAGE SLAPS!!!!!"," "]}),Object(x.jsx)("p",{style:{textAlign:"left",color:"gray"},children:"posted 12 days ago"})]})]}),Object(x.jsx)(B,{}),Object(x.jsxs)(D.a,{container:!0,wrap:"nowrap",spacing:2,style:{textAlign:"right",height:"110px"},children:[Object(x.jsx)(D.a,{item:!0,children:Object(x.jsx)(W.a,{alt:"ELON",src:"https://i.redd.it/whgfzo54b62z.jpg",style:{width:"50px",height:"50px"}})}),Object(x.jsxs)(D.a,{item:!0,xs:!0,zeroMinWidth:!0,children:[Object(x.jsx)("h4",{style:{margin:0,textAlign:"left",color:"red"},children:"SHLOPJALOPPY"}),Object(x.jsxs)("p",{style:{textAlign:"left"},children:["I'm not particularly a fan of this... However, the shading is great. +1"," "]}),Object(x.jsx)("p",{style:{textAlign:"left",color:"gray"},children:"posted 12 days ago"})]})]})]})]})]})})]})})})]})}function B(){return Object(x.jsx)(_.a,{variant:"fullWidth",style:{margin:"10px 0 20px 0"}})}var G=s(396),q=s(386),U=s(387),H=s(388),J=s(389),Y=s(390),V=s(391),K=s(398),X=s(399),Q=s(392),Z=s.p+"static/media/artistree_logo.9a4023e1.png",$=(s(321),function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(e){var i;return Object(o.a)(this,s),(i=t.call(this,e)).loginLogout=function(){"Login"===i.state.loginLogoutText?i.setState({loginModalOpen:!0,loginLogoutText:"Logout"}):i.setState({loginLogoutText:"Login"})},i.state={hamburgerOpen:!1,loginModalOpen:!1,loginLogoutText:"Login"},i}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return Object(x.jsxs)("div",{className:"navbar",children:[Object(x.jsx)(l.b,{to:"/Artistree",children:Object(x.jsx)("img",{className:"logo",src:Z,alt:"Artistree Logo"})}),Object(x.jsxs)("div",{className:"navbar-links",children:[Object(x.jsx)(l.b,{to:"/Artistree",children:Object(x.jsx)("span",{className:"navbar-link",children:"Gallery"})}),Object(x.jsx)(l.b,{to:"/canvas",children:Object(x.jsx)("span",{className:"navbar-link",children:"Canvas"})}),Object(x.jsx)(l.b,{to:"/my-submissions",children:Object(x.jsx)("span",{className:"navbar-link",children:"My Submissions"})})]}),Object(x.jsx)("div",{children:Object(x.jsxs)(G.a,{isOpen:this.state.loginModalOpen,toggle:function(){return e.setState({loginModalOpen:!e.state.loginModalOpen})},children:[Object(x.jsx)(q.a,{toggle:function(){return e.setState({loginModalOpen:!1})},children:"Login to Artistree"}),Object(x.jsxs)(U.a,{children:[Object(x.jsx)(H.a,{children:"Username"}),Object(x.jsx)(J.a,{}),Object(x.jsx)(H.a,{children:"Password"}),Object(x.jsx)(J.a,{type:"password"})]}),Object(x.jsx)(Y.a,{children:Object(x.jsx)(h.a,{color:"success",onClick:function(){return e.setState({loginModalOpen:!1})},children:"Submit"})})]})}),Object(x.jsx)("div",{children:Object(x.jsxs)(V.a,{direction:"left",isOpen:this.state.hamburgerOpen,toggle:function(){return e.setState({hamburgerOpen:!e.state.hamburgerOpen})},children:[Object(x.jsx)(K.a,{tag:"span","data-toggle":"dropdown","aria-expanded":this.state.hamburgerOpen,children:Object(x.jsx)("span",{className:"material-icons hamburger-icon",children:"menu"})}),Object(x.jsxs)(X.a,{children:[Object(x.jsx)(Q.a,{onClick:this.loginLogout,children:this.state.loginLogoutText}),Object(x.jsx)(Q.a,{children:"Account"}),Object(x.jsx)(Q.a,{onClick:"/Artistree/eula",href:"/Artistree/eula",children:" EULA/Documentation "})]})]})})]})}}]),s}(c.a.Component)),ee=(s(343),function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(e){var i;return Object(o.a)(this,s),(i=t.call(this,e)).state={},i}return Object(d.a)(s,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:"EULA-root",children:[Object(x.jsx)("div",{className:"title-bar",children:Object(x.jsx)("div",{children:"EULA"})}),Object(x.jsxs)("div",{className:"EULA-page-body",style:{textAlign:"center"},children:[Object(x.jsx)("iframe",{title:"E",width:"600",height:"600",src:"https://www.youtube.com/embed/cGw-8FrRT1E",frameborder:"0",allowfullscreen:!0}),Object(x.jsx)("textarea",{className:"EULA-scrollabletextbox",name:"textbox",children:"Get coconut malled"})]})]})}}]),s}(c.a.Component)),te=(s(344),s(105));function se(){return Object(x.jsxs)("div",{className:"ViewingFeedback-root",children:[Object(x.jsx)("div",{className:"title-bar",children:Object(x.jsx)("div",{children:"Critique"})}),Object(x.jsx)("div",{className:"ViewingFeedback-page-body",children:Object(x.jsx)("div",{style:{height:"100%",display:"flex"},children:Object(x.jsxs)(D.a,{container:!0,style:{display:"flex",flexDirection:"row",justifyContent:"space-between",flexWrap:"nowrap"},children:[Object(x.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",marginRight:"200px"},children:Object(x.jsx)(P.a,{style:{width:"auto",height:"100%",textAlign:"left"},children:Object(x.jsx)("img",{src:te.default,alt:"dynamo",style:{width:"570px",height:"100%"}})})}),Object(x.jsx)("div",{style:{height:"100%",width:"100%",overflow:"hidden"},children:Object(x.jsx)(P.a,{style:{padding:"10px 20px",width:"100%",height:"100%",paddingTop:"20px"},children:Object(x.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Object(x.jsxs)("div",{style:{overflowY:"auto",height:"100%",overflowX:"hidden"},children:[Object(x.jsxs)(D.a,{container:!0,spacing:2,style:{textAlign:"right",height:"110px"},children:[Object(x.jsx)(D.a,{item:!0,children:Object(x.jsx)(W.a,{alt:"ELON",src:"https://cf-images.us-east-1.prod.boltdns.net/v1/static/854081161001/e7c0a8f2-4b0b-40e7-858f-47de21dc8dcb/794143eb-4285-434e-8a08-820dab64c65b/1280x720/match/image.jpg",style:{width:"50px",height:"50px"}})}),Object(x.jsxs)(D.a,{item:!0,xs:!0,zeroMinWidth:!0,children:[Object(x.jsx)("h4",{style:{margin:0,textAlign:"left",color:"red"},children:"He Buddy Man"}),Object(x.jsxs)("p",{style:{textAlign:"left"},children:["Wow great image! Reminds me of the time when I was drawing theoretical chicken art!"," "]}),Object(x.jsx)("p",{style:{textAlign:"left",color:"gray"},children:"posted 54 minutes ago"})]})]}),Object(x.jsx)(ie,{}),Object(x.jsxs)(D.a,{container:!0,spacing:2,style:{textAlign:"right",height:"110px"},children:[Object(x.jsx)(D.a,{item:!0,children:Object(x.jsx)(W.a,{alt:"ELON",src:"http://cdn.facilityexecutive.com/wp-content/uploads/bird-x-qb4-strobe.jpg",style:{width:"50px",height:"50px"}})}),Object(x.jsxs)(D.a,{item:!0,xs:!0,zeroMinWidth:!0,children:[Object(x.jsx)("h4",{style:{margin:0,textAlign:"left",color:"red"},children:"BIRDBLASTER"}),Object(x.jsxs)("p",{style:{textAlign:"left"},children:["I support your artwork. Consider adding your signature to your artworks."," "]}),Object(x.jsx)("p",{style:{textAlign:"left",color:"gray"},children:"posted 6 hours ago"})]})]}),Object(x.jsx)(ie,{}),Object(x.jsxs)(D.a,{container:!0,wrap:"unwrap",spacing:2,style:{textAlign:"right",height:"110px"},children:[Object(x.jsx)(D.a,{item:!0,children:Object(x.jsx)(W.a,{alt:"ELON",src:"https://upload.wikimedia.org/wikipedia/commons/f/fb/Maye_Musk_in_2015.jpg",style:{width:"50px",height:"50px"}})}),Object(x.jsxs)(D.a,{item:!0,xs:!0,zeroMinWidth:!0,children:[Object(x.jsx)("h4",{style:{margin:0,textAlign:"left",color:"red"},children:"SheBuddyWoman"}),Object(x.jsxs)("p",{style:{textAlign:"left"},children:["I believe if you added some lens flare this would be much better..."," "]}),Object(x.jsx)("p",{style:{textAlign:"left",color:"gray"},children:"posted 3 days ago"})]})]})]})})})})]})})})]})}function ie(){return Object(x.jsx)(_.a,{variant:"fullWidth",style:{margin:"10px 0 20px 0"}})}var ce=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(l.a,{children:[Object(x.jsx)($,{}),Object(x.jsxs)(r.c,{children:[Object(x.jsx)(r.a,{exact:!0,path:"/Artistree",children:Object(x.jsx)(O,{})}),Object(x.jsx)(r.a,{exact:!0,path:"/Artistree/canvas",children:Object(x.jsx)(k,{})}),Object(x.jsx)(r.a,{exact:!0,path:"/Artistree/my-submissions",children:Object(x.jsx)(se,{})}),Object(x.jsx)(r.a,{exact:!0,path:"/Artistree/leave-feedback",children:Object(x.jsx)(T,{})}),Object(x.jsx)(r.a,{exact:!0,path:"/Artistree/eula",children:Object(x.jsx)(ee,{})})]})]})})},ne=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,403)).then((function(t){var s=t.getCLS,i=t.getFID,c=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),i(e),c(e),n(e),a(e)}))};s(345);a.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(ce,{})}),document.getElementById("root")),ne()}},[[346,1,2]]]);
//# sourceMappingURL=main.d71db647.chunk.js.map