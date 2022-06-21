(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{7423:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events/add",function(){return t(6915)}])},6490:function(e,n,t){"use strict";t.d(n,{Z:function(){return P}});var r=t(5893),s=t(9008),i=t.n(s),a=t(1163),o=t(9583),c=t(7294),l=t(4045),d=t.n(l),u=t(554),h=t.n(u);var x=function(){var e=(0,c.useState)(""),n=e[0],t=e[1],s=(0,a.useRouter)();return(0,r.jsx)("div",{className:h().search,children:(0,r.jsx)("form",{onSubmit:function(e){e.preventDefault(),s.push("/events/search?term=".concat(n)),t("")},children:(0,r.jsx)("input",{type:"text",value:n,onChange:function(e){return t(e.target.value)},placeholder:"Search Events"})})})},f=t(4642),v=t(3695),j=t.n(v);var m=function(){var e=(0,c.useContext)(f.Z),n=e.user,t=e.logout;return(0,r.jsxs)("header",{className:j().header,children:[(0,r.jsx)("div",{className:j().logo,children:(0,r.jsx)(d(),{href:"/",children:(0,r.jsx)("a",{children:"DJ Events"})})}),(0,r.jsx)(x,{}),(0,r.jsx)("nav",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/events",children:(0,r.jsx)("a",{children:"Events"})})}),n?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/events/add",children:(0,r.jsx)("a",{children:"Add Event"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/account/dashboard",children:(0,r.jsx)("a",{children:"Dashboard"})})}),(0,r.jsx)("li",{children:(0,r.jsxs)("button",{onClick:function(){return t()},className:"btn-secondary btn-icon",children:[(0,r.jsx)(o.fHX,{})," Logout"]})})]}):(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/account/login",children:(0,r.jsxs)("a",{className:"btn-secondary btn-icon",children:[(0,r.jsx)(o.IPB,{}),"Login"]})})})]})})]})},p=t(7246),_=t.n(p);var b=function(){return(0,r.jsxs)("footer",{className:_().footer,children:[(0,r.jsx)("p",{children:"Copywright \xa9 DJ Events 2022"}),(0,r.jsx)("p",{children:(0,r.jsx)(d(),{href:"/about",children:"About This Project"})})]})},g=t(253),y=t.n(g);var w=function(){return(0,r.jsxs)("div",{className:y().showcase,children:[(0,r.jsx)("h1",{children:"Welcome To The Party!"}),(0,r.jsx)("h2",{children:"Find the hottest DJ Events"})]})},N=t(9134),E=t.n(N);function k(e){var n=e.title,t=e.keywords,s=e.description,o=e.children,c=(0,a.useRouter)();return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"description",content:s}),(0,r.jsx)("meta",{name:"keywords",content:t})]}),(0,r.jsx)(m,{}),"/"===c.pathname&&(0,r.jsx)(w,{}),(0,r.jsx)("div",{className:E().container,children:o}),(0,r.jsx)(b,{})]})}k.defaultProps={title:"DJ Events",description:"The coolest events around town",keywords:"DJ, cool, Events"};var P=k},6915:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return _}});var r=t(4051),s=t.n(r),i=t(5893),a=t(7294),o=t(1163),c=t(782),l=(t(4213),t(4045)),d=t.n(l),u=t(6490),h=t(1645),x=t(7913),f=t.n(x),v=t(4642);function j(e,n,t,r,s,i,a){try{var o=e[i](a),c=o.value}catch(l){return void t(l)}o.done?n(c):Promise.resolve(c).then(r,s)}function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var p=t(1304);var _=!0;n.default=function(e){var n=e.token,t=(0,a.useContext)(v.Z).user,r=t?t.id:"",l=(0,a.useState)({name:"",slug:"",performers:"",venue:"",address:"",date:"",time:"",description:"",user:r}),x=l[0],_=l[1],b=(0,o.useRouter)(),g=function(){var e,t=(e=s().mark((function e(t){var r,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),x.slug=p(x.name.toLowerCase()),Object.values(x).some((function(e){return""===e}))&&c.Am.error("Please fill in all fields"),e.next=6,fetch("".concat(h.T,"/events"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({data:x})});case 6:if((r=e.sent).ok){e.next=14;break}if(403!==r.status&&401!==r.status){e.next=11;break}return c.Am.error("No token included"),e.abrupt("return");case 11:c.Am.error("Something went wrong"),e.next=18;break;case 14:return e.next=16,r.json();case 16:i=e.sent,b.push("/events/".concat(i.data.attributes.slug));case 18:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,s){var i=e.apply(n,t);function a(e){j(i,r,s,a,o,"next",e)}function o(e){j(i,r,s,a,o,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}(),y=function(e){var n=e.target,t=n.name,r=n.value;_(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){m(e,n,t[n])}))}return e}({},x,m({},t,r)))};return(0,i.jsxs)(u.Z,{title:"Add New Event",children:[(0,i.jsx)(d(),{href:"/events",children:"Go Back"}),(0,i.jsx)("h1",{children:"Add Event"}),(0,i.jsx)(c.Ix,{}),(0,i.jsxs)("form",{onSubmit:g,className:f().form,children:[(0,i.jsxs)("div",{className:f().grid,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"name",children:"Event Name"}),(0,i.jsx)("input",{type:"text",id:"name",name:"name",value:x.name,onChange:y})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"performers",children:"Performers"}),(0,i.jsx)("input",{type:"text",name:"performers",id:"performers",value:x.performers,onChange:y})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"venue",children:"Venue"}),(0,i.jsx)("input",{type:"text",name:"venue",id:"venue",value:x.venue,onChange:y})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"address",children:"Address"}),(0,i.jsx)("input",{type:"text",name:"address",id:"address",value:x.address,onChange:y})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"date",children:"Date"}),(0,i.jsx)("input",{type:"date",name:"date",id:"date",value:x.date,onChange:y})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"time",children:"Time"}),(0,i.jsx)("input",{type:"text",name:"time",id:"time",value:x.time,onChange:y})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"description",children:"Event Description"}),(0,i.jsx)("textarea",{type:"text",name:"description",id:"description",value:x.description,onChange:y})]}),(0,i.jsx)("input",{type:"submit",value:"Add Event",className:"btn"})]})]})}},7246:function(e){e.exports={footer:"Footer_footer__Tl1eP"}},7913:function(e){e.exports={form:"Form_form__mh4_m",file:"Form_file__ZNyJL",grid:"Form_grid___DuXT"}},3695:function(e){e.exports={header:"Header_header__VYZ3G",logo:"Header_logo__6vBZG"}},9134:function(e){e.exports={container:"Layout_container__S4aNf"}},554:function(e){e.exports={search:"Search_search__t4jaQ"}},253:function(e){e.exports={showcase:"Showcase_showcase__VZOKI"}}},function(e){e.O(0,[445,51,353,53,774,888,179],(function(){return n=7423,e(e.s=n);var n}));var n=e.O();_N_E=n}]);