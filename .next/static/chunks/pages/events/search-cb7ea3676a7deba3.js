(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[540],{3615:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events/search",function(){return t(3421)}])},3662:function(e,n,t){"use strict";var s=t(5893),r=t(4045),i=t.n(r),c=t(5675),a=t.n(c),o=t(4135),h=t.n(o);n.Z=function(e){var n=e.evt;return(0,s.jsxs)("div",{className:h().event,children:[(0,s.jsx)("div",{className:h().img,children:(0,s.jsx)(a(),{src:n.image.data?n.image.data.attributes.url:"/images/event-default.png",width:170,height:100})}),(0,s.jsxs)("div",{className:h().info,children:[(0,s.jsxs)("span",{children:[new Date(n.date).toLocaleDateString("en-US")," at ",n.time]}),(0,s.jsx)("h3",{children:n.name})]}),(0,s.jsx)("div",{className:h().link,children:(0,s.jsx)(i(),{href:"/events/".concat(n.slug),children:(0,s.jsx)("a",{className:"btn",children:"Details"})})})]})}},6490:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var s=t(5893),r=t(9008),i=t.n(r),c=t(1163),a=t(9583),o=t(7294),h=t(4045),l=t.n(h),d=t(554),u=t.n(d);var x=function(){var e=(0,o.useState)(""),n=e[0],t=e[1],r=(0,c.useRouter)();return(0,s.jsx)("div",{className:u().search,children:(0,s.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.push("/events/search?term=".concat(n)),t("")},children:(0,s.jsx)("input",{type:"text",value:n,onChange:function(e){return t(e.target.value)},placeholder:"Search Events"})})})},j=t(4642),v=t(3695),f=t.n(v);var _=function(){var e=(0,o.useContext)(j.Z),n=e.user,t=e.logout;return(0,s.jsxs)("header",{className:f().header,children:[(0,s.jsx)("div",{className:f().logo,children:(0,s.jsx)(l(),{href:"/",children:(0,s.jsx)("a",{children:"DJ Events"})})}),(0,s.jsx)(x,{}),(0,s.jsx)("nav",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(l(),{href:"/events",children:(0,s.jsx)("a",{children:"Events"})})}),n?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("li",{children:(0,s.jsx)(l(),{href:"/events/add",children:(0,s.jsx)("a",{children:"Add Event"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(l(),{href:"/account/dashboard",children:(0,s.jsx)("a",{children:"Dashboard"})})}),(0,s.jsx)("li",{children:(0,s.jsxs)("button",{onClick:function(){return t()},className:"btn-secondary btn-icon",children:[(0,s.jsx)(a.fHX,{})," Logout"]})})]}):(0,s.jsx)("li",{children:(0,s.jsx)(l(),{href:"/account/login",children:(0,s.jsxs)("a",{className:"btn-secondary btn-icon",children:[(0,s.jsx)(a.IPB,{}),"Login"]})})})]})})]})},m=t(7246),p=t.n(m);var g=function(){return(0,s.jsxs)("footer",{className:p().footer,children:[(0,s.jsx)("p",{children:"Copywright \xa9 DJ Events 2022"}),(0,s.jsx)("p",{children:(0,s.jsx)(l(),{href:"/about",children:"About This Project"})})]})},N=t(253),w=t.n(N);var E=function(){return(0,s.jsxs)("div",{className:w().showcase,children:[(0,s.jsx)("h1",{children:"Welcome To The Party!"}),(0,s.jsx)("h2",{children:"Find the hottest DJ Events"})]})},b=t(9134),y=t.n(b);function S(e){var n=e.title,t=e.keywords,r=e.description,a=e.children,o=(0,c.useRouter)();return(0,s.jsxs)("div",{children:[(0,s.jsxs)(i(),{children:[(0,s.jsx)("title",{children:n}),(0,s.jsx)("meta",{name:"description",content:r}),(0,s.jsx)("meta",{name:"keywords",content:t})]}),(0,s.jsx)(_,{}),"/"===o.pathname&&(0,s.jsx)(E,{}),(0,s.jsx)("div",{className:y().container,children:a}),(0,s.jsx)(g,{})]})}S.defaultProps={title:"DJ Events",description:"The coolest events around town",keywords:"DJ, cool, Events"};var k=S},3421:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return h},default:function(){return l}});var s=t(5893),r=t(1163),i=t(4045),c=t.n(i),a=t(6490),o=t(3662),h=!0;function l(e){var n=e.events,t=(0,r.useRouter)();return(0,s.jsxs)(a.Z,{title:"Search Results",children:[(0,s.jsx)(c(),{href:"/events",children:"Go Back"}),(0,s.jsxs)("h1",{children:["Search Results for ",t.query.term]}),0===n.length&&(0,s.jsx)("h3",{children:"No events to show"}),n.map((function(e){return(0,s.jsx)(o.Z,{evt:e.attributes},e.id)}))]})}},4135:function(e){e.exports={event:"Eventitem_event__ByyhZ",img:"Eventitem_img__X47RX",info:"Eventitem_info__xCGkQ"}},7246:function(e){e.exports={footer:"Footer_footer__Tl1eP"}},3695:function(e){e.exports={header:"Header_header__VYZ3G",logo:"Header_logo__6vBZG"}},9134:function(e){e.exports={container:"Layout_container__S4aNf"}},554:function(e){e.exports={search:"Search_search__t4jaQ"}},253:function(e){e.exports={showcase:"Showcase_showcase__VZOKI"}}},function(e){e.O(0,[445,51,675,774,888,179],(function(){return n=3615,e(e.s=n);var n}));var n=e.O();_N_E=n}]);