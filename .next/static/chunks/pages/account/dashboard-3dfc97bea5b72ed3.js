(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[17],{44:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/dashboard",function(){return t(9962)}])},3662:function(e,n,t){"use strict";var r=t(5893),s=t(4045),a=t.n(s),c=t(5675),i=t.n(c),o=t(4135),d=t.n(o);n.Z=function(e){var n=e.evt;return(0,r.jsxs)("div",{className:d().event,children:[(0,r.jsx)("div",{className:d().img,children:(0,r.jsx)(i(),{src:n.image.data?n.image.data.attributes.url:"/images/event-default.png",width:170,height:100})}),(0,r.jsxs)("div",{className:d().info,children:[(0,r.jsxs)("span",{children:[new Date(n.date).toLocaleDateString("en-US")," at ",n.time]}),(0,r.jsx)("h3",{children:n.name})]}),(0,r.jsx)("div",{className:d().link,children:(0,r.jsx)(a(),{href:"/events/".concat(n.slug),children:(0,r.jsx)("a",{className:"btn",children:"Details"})})})]})}},6490:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var r=t(5893),s=t(9008),a=t.n(s),c=t(1163),i=t(9583),o=t(7294),d=t(4045),h=t.n(d),l=t(554),u=t.n(l);var x=function(){var e=(0,o.useState)(""),n=e[0],t=e[1],s=(0,c.useRouter)();return(0,r.jsx)("div",{className:u().search,children:(0,r.jsx)("form",{onSubmit:function(e){e.preventDefault(),s.push("/events/search?term=".concat(n)),t("")},children:(0,r.jsx)("input",{type:"text",value:n,onChange:function(e){return t(e.target.value)},placeholder:"Search Events"})})})},v=t(4642),j=t(3695),f=t.n(j);var _=function(){var e=(0,o.useContext)(v.Z),n=e.user,t=e.logout;return(0,r.jsxs)("header",{className:f().header,children:[(0,r.jsx)("div",{className:f().logo,children:(0,r.jsx)(h(),{href:"/",children:(0,r.jsx)("a",{children:"DJ Events"})})}),(0,r.jsx)(x,{}),(0,r.jsx)("nav",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"/events",children:(0,r.jsx)("a",{children:"Events"})})}),n?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"/events/add",children:(0,r.jsx)("a",{children:"Add Event"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"/account/dashboard",children:(0,r.jsx)("a",{children:"Dashboard"})})}),(0,r.jsx)("li",{children:(0,r.jsxs)("button",{onClick:function(){return t()},className:"btn-secondary btn-icon",children:[(0,r.jsx)(i.fHX,{})," Logout"]})})]}):(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:"/account/login",children:(0,r.jsxs)("a",{className:"btn-secondary btn-icon",children:[(0,r.jsx)(i.IPB,{}),"Login"]})})})]})})]})},m=t(7246),p=t.n(m);var g=function(){return(0,r.jsxs)("footer",{className:p().footer,children:[(0,r.jsx)("p",{children:"Copywright \xa9 DJ Events 2022"}),(0,r.jsx)("p",{children:(0,r.jsx)(h(),{href:"/about",children:"About This Project"})})]})},N=t(253),b=t.n(N);var E=function(){return(0,r.jsxs)("div",{className:b().showcase,children:[(0,r.jsx)("h1",{children:"Welcome To The Party!"}),(0,r.jsx)("h2",{children:"Find the hottest DJ Events"})]})},w=t(9134),D=t.n(w);function y(e){var n=e.title,t=e.keywords,s=e.description,i=e.children,o=(0,c.useRouter)();return(0,r.jsxs)("div",{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"description",content:s}),(0,r.jsx)("meta",{name:"keywords",content:t})]}),(0,r.jsx)(_,{}),"/"===o.pathname&&(0,r.jsx)(E,{}),(0,r.jsx)("div",{className:D().container,children:i}),(0,r.jsx)(g,{})]})}y.defaultProps={title:"DJ Events",description:"The coolest events around town",keywords:"DJ, cool, Events"};var k=y},9962:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return m},default:function(){return p}});var r=t(4051),s=t.n(r),a=t(5893),c=t(6490),i=t(1163),o=t(4045),d=t.n(o),h=t(9583),l=t(9293),u=t.n(l);var x=function(e){var n=e.evt,t=e.handleDelete;return(0,a.jsxs)("div",{className:u().event,children:[(0,a.jsx)("h4",{children:(0,a.jsx)(d(),{href:"/events/".concat(n.attributes.slug),children:(0,a.jsx)("a",{children:n.attributes.name})})}),(0,a.jsx)(d(),{href:"/events/edit/".concat(n.id),children:(0,a.jsxs)("a",{className:u().edit,children:[(0,a.jsx)(h.KHI,{})," ",(0,a.jsx)("span",{children:"Edit Event"})]})}),(0,a.jsxs)("a",{href:"#",className:u().delete,onClick:function(){return t(n.id)},children:[(0,a.jsx)(h.aHS,{})," ",(0,a.jsx)("span",{children:"Delete"})]})]})},v=t(1645),j=t(6939),f=t.n(j);t(4893);function _(e,n,t,r,s,a,c){try{var i=e[a](c),o=i.value}catch(d){return void t(d)}i.done?n(o):Promise.resolve(o).then(r,s)}var m=!0,p=function(e){var n=e.events,t=e.token,r=(0,i.useRouter)(),o=function(){var e,n=(e=s().mark((function e(n){var a,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!confirm("Are you sure")){e.next=8;break}return e.next=3,fetch("".concat(v.T,"/events/").concat(n),{method:"DELETE",headers:{Authorization:"Bearer ".concat(t)}});case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,a.ok?r.push("/events"):toast.error(c.message);case 8:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,s){var a=e.apply(n,t);function c(e){_(a,r,s,c,i,"next",e)}function i(e){_(a,r,s,c,i,"throw",e)}c(void 0)}))});return function(e){return n.apply(this,arguments)}}();return(0,a.jsx)(c.Z,{title:"User Dashboard",children:(0,a.jsxs)("div",{className:f().dash,children:[(0,a.jsx)("h1",{children:"Dashboard"}),(0,a.jsx)("h3",{children:"My Events"}),n.map((function(e){return(0,a.jsx)(x,{evt:e,handleDelete:o},e.id)}))]})})}},4893:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return d},default:function(){return h}});var r=t(5893),s=t(4045),a=t.n(s),c=t(6490),i=t(3662);var o=function(e){var n=e.page,t=e.total;return(0,r.jsxs)(r.Fragment,{children:[n>1&&(0,r.jsx)(a(),{href:"/events?page=".concat(n-1),children:(0,r.jsx)("a",{className:"btn-secondary",children:"Prev"})}),n<t&&(0,r.jsx)(a(),{href:"/events?page=".concat(n+1),children:(0,r.jsx)("a",{className:"btn-secondary",children:"Next"})})]})},d=!0;function h(e){var n=e.events,t=e.page,s=e.total;return(0,r.jsxs)(c.Z,{children:[(0,r.jsx)("h1",{children:"Events"}),0===n.length&&(0,r.jsx)("h3",{children:"No events to show"}),n.map((function(e){return(0,r.jsx)(i.Z,{evt:e.attributes},e.id)})),(0,r.jsx)(o,{page:t,total:s})]})}},6939:function(e){e.exports={dash:"Dashboard_dash__zAbkP"}},9293:function(e){e.exports={event:"DashboardEvent_event__TF5ng",edit:"DashboardEvent_edit__idiHa",delete:"DashboardEvent_delete__3XuWC"}},4135:function(e){e.exports={event:"Eventitem_event__ByyhZ",img:"Eventitem_img__X47RX",info:"Eventitem_info__xCGkQ"}},7246:function(e){e.exports={footer:"Footer_footer__Tl1eP"}},3695:function(e){e.exports={header:"Header_header__VYZ3G",logo:"Header_logo__6vBZG"}},9134:function(e){e.exports={container:"Layout_container__S4aNf"}},554:function(e){e.exports={search:"Search_search__t4jaQ"}},253:function(e){e.exports={showcase:"Showcase_showcase__VZOKI"}}},function(e){e.O(0,[445,51,675,774,888,179],(function(){return n=44,e(e.s=n);var n}));var n=e.O();_N_E=n}]);