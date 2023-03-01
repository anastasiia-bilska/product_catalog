(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{23:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(24),a=c.n(i),r=(c(29),c(7)),j=c(3),l=(c(30),c(5)),o=c(11),d=c.n(o),b=(c(31),c(23),c(1)),O=function(e){var t=e.to,c=e.title,n=e.setIsOpen;return Object(b.jsx)("li",{className:"nav__item nav__item--active",children:Object(b.jsx)(r.c,{to:t,className:function(e){var t=e.isActive;return d()("nav__link",{"nav__link--active":t})},onClick:function(){return n(!1)},children:c})})},h=s.a.memo((function(e){var t=e.setIsOpen;return Object(b.jsx)("nav",{className:"nav",children:Object(b.jsxs)("ul",{className:"nav__list",children:[Object(b.jsx)(O,{setIsOpen:t,title:"home",to:"/"}),Object(b.jsx)(O,{setIsOpen:t,title:"Phones",to:"phones"}),Object(b.jsx)(O,{setIsOpen:t,title:"Tablets",to:"tablets"}),Object(b.jsx)(O,{setIsOpen:t,title:"Accessories",to:"accessories"})]})})})),x=(c(34),s.a.memo((function(e){var t=e.iconName,c=e.to;return Object(b.jsx)("div",{className:"iconBlock",children:Object(b.jsx)(r.c,{to:c,className:function(e){var t=e.isActive;return d()("iconBlock__link",{"iconBlock__link--active":t})},children:Object(b.jsx)("div",{className:"iconBlock__icon iconBlock__icon--".concat(t)})})})}))),u=(c(35),c.p+"static/media/Logo.3c6bd188.svg"),m=Object(n.memo)((function(e){var t=e.setIsOpen;return t?Object(b.jsx)(r.b,{className:"logo",to:"/",onClick:function(){return t(!1)},children:Object(b.jsx)("img",{src:u,className:"logo_image",alt:"NiceGadgets logo"})}):Object(b.jsx)(r.b,{className:"logo",to:"/",children:Object(b.jsx)("img",{src:u,className:"logo_image",alt:"NiceGadgets logo"})})})),v=s.a.memo((function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("header",{className:"header page__header",children:[Object(b.jsxs)("div",{className:"header__links",children:[Object(b.jsx)("div",{className:"header__logo",children:Object(b.jsx)(m,{setIsOpen:s})}),Object(b.jsx)("div",{className:"header__nav",children:Object(b.jsx)(h,{setIsOpen:s})})]}),Object(b.jsx)("div",{className:"header__menu",children:Object(b.jsx)("a",{href:"#menu",className:"header__menu-opener",onClick:function(e){return function(e){return e.preventDefault(),s(!c)}(e)},children:Object(b.jsx)("div",{className:d()("header__menu-icon",{"header__menu-icon--opened":c,"header__menu-icon--closed":!c})})})}),Object(b.jsxs)("div",{className:"header__icons",children:[Object(b.jsx)(x,{iconName:"favourites",to:"/favourites"}),Object(b.jsx)(x,{iconName:"cart",to:"/cart"})]})]})})})),p=(c(36),function(e){var t=e.children;return Object(b.jsx)("h1",{className:"page-title",children:t})}),_=function(e){var t=e.pageTitle;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:"Breadcrumbs"}),Object(b.jsx)(p,{children:t}),Object(b.jsx)("div",{children:"Products"})]})},g=function(e){var t=e.pageTitle;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:"Breadcrumbs"}),Object(b.jsx)(p,{children:t}),Object(b.jsx)("div",{children:"Amount"}),Object(b.jsx)("div",{children:"Favourites cards"})]})},f=function(e){var t=e.pageTitle;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{children:t}),Object(b.jsx)("div",{children:"Carousel 1"}),Object(b.jsx)("div",{children:"Carousel 2"}),Object(b.jsx)("div",{children:"Shop by category"}),Object(b.jsx)("div",{children:"Carousel 3"})]})},N=function(){return Object(b.jsx)("div",{children:"NotFoundPage"})},k=function(){var e=Object(j.o)().productId;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{children:"Section title component ".concat(e)})})},I=function(e){var t=e.pageTitle;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:"Breadcrumbs"}),Object(b.jsx)(p,{children:t}),Object(b.jsx)("div",{children:"Data amount"}),Object(b.jsx)("div",{children:"Sorting"}),Object(b.jsx)("div",{children:"Datalist"}),Object(b.jsx)("div",{children:"Pagination"})]})},T=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(v,{}),Object(b.jsx)("main",{className:"page__main",children:Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/",element:Object(b.jsx)(f,{pageTitle:"Welcome to Nice Gadgets store!"})}),Object(b.jsx)(j.a,{path:"phones",element:Object(b.jsx)(I,{pageTitle:"Mobile Phones"})}),Object(b.jsx)(j.a,{path:"tablets",element:Object(b.jsx)(I,{pageTitle:"Tablets"})}),Object(b.jsx)(j.a,{path:"accessories",element:Object(b.jsx)(I,{pageTitle:"Accessories"})}),Object(b.jsx)(j.a,{path:"/cart",element:Object(b.jsx)(_,{pageTitle:"Cart"})}),Object(b.jsx)(j.a,{path:"/favourites",element:Object(b.jsx)(g,{pageTitle:"Favourites"})}),Object(b.jsx)(j.a,{path:"product/:productId",element:Object(b.jsx)(k,{})}),Object(b.jsx)(j.a,{path:"*",element:Object(b.jsx)(N,{})})]})}),Object(b.jsx)("footer",{style:{fontSize:"24px"},children:"Footer"})]})};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(r.a,{children:Object(b.jsx)(T,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.7d830e48.chunk.js.map