(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],Array(26).concat([function(e,t,c){},,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,,function(e,t,c){},,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(40),i=c.n(n),r=(c(45),c(7)),o=c(4),l=(c(46),c(5)),d=c(8),u=c.n(d),j=(c(47),c(36),c(0)),b=function(e){var t=e.to,c=e.title,s=e.setIsMenuOpened;return Object(j.jsx)("li",{className:"nav__item nav__item--active",children:Object(j.jsx)(r.c,{to:t,className:function(e){var t=e.isActive;return u()("nav__link",{"nav__link--active":t})},onClick:function(){return s(!1)},children:c})})},m=a.a.memo((function(e){var t=e.setIsMenuOpened;return Object(j.jsx)("nav",{className:"nav",children:Object(j.jsxs)("ul",{className:"nav__list",children:[Object(j.jsx)(b,{setIsMenuOpened:t,title:"home",to:"/"}),Object(j.jsx)(b,{setIsMenuOpened:t,title:"Phones",to:"phones"}),Object(j.jsx)(b,{setIsMenuOpened:t,title:"Tablets",to:"tablets"}),Object(j.jsx)(b,{setIsMenuOpened:t,title:"Accessories",to:"accessories"})]})})})),p=(c(49),a.a.memo((function(e){var t=e.iconName,c=e.to,s=e.setIsMenuOpened,a=e.counter;return Object(j.jsx)("div",{className:"icon-block",children:Object(j.jsx)(r.c,{title:t,"aria-label":t,to:c,className:function(e){var t=e.isActive;return u()("icon-block__link",{"icon-block__link--active":t})},onClick:function(){return s(!1)},children:Object(j.jsx)("div",{className:"icon-block__icon icon-block__icon--".concat(t),children:a>0&&Object(j.jsx)("div",{className:"icon-block__counter",children:Object(j.jsx)("div",{className:"icon-block__number",children:a})})})})})}))),_=(c(50),c.p+"static/media/Logo.3c6bd188.svg"),h=Object(s.memo)((function(e){var t=e.setIsMenuOpened;return t?Object(j.jsx)(r.b,{title:"Nice Gadgets - Home Page",className:"logo",to:"/",onClick:function(){return t(!1)},children:Object(j.jsx)("img",{src:_,className:"logo__image",alt:"NiceGadgets logo"})}):Object(j.jsx)(r.b,{title:"Nice Gadgets - Home Page",className:"logo",to:"/",children:Object(j.jsx)("img",{src:_,className:"logo__image",alt:"NiceGadgets logo"})})})),O=(c(51),a.a.createContext({cart:[],setCart:function(){},updateCart:function(){},cartLength:0,favourites:[],setFavourites:function(){},updateFavourites:function(){},favouritesLength:0})),x=function(e){var t=e.children,c=Object(s.useState)(JSON.parse(localStorage.getItem("cart")||"[]")),a=Object(l.a)(c,2),n=a[0],i=a[1],r=Object(s.useState)(JSON.parse(localStorage.getItem("favourites")||"[]")),o=Object(l.a)(r,2),d=o[0],u=o[1],b=Object(s.useCallback)((function(e){i(e),localStorage.setItem("cart",JSON.stringify(e))}),[]),m=Object(s.useCallback)((function(e){u(e),localStorage.setItem("favourites",JSON.stringify(e))}),[]),p=n.length,_=d.length,h=Object(s.useMemo)((function(){return{cart:n,setCart:i,updateCart:b,cartLength:p,favourites:d,setFavourites:u,updateFavourites:m,favouritesLength:_}}),[n,d]);return Object(j.jsx)(O.Provider,{value:h,children:t})},f=Object(s.memo)((function(e){var t=e.isMenuOpen,c=e.setIsMenuOpened,a=Object(s.useContext)(O),n=a.cartLength,i=a.favouritesLength;return Object(j.jsxs)("div",{className:u()("burger-menu",{"burger-menu--active":t}),children:[Object(j.jsx)(m,{setIsMenuOpened:c}),Object(j.jsxs)("div",{className:"burger-menu__icons",children:[Object(j.jsx)(p,{iconName:"Favourites",to:"/favourites",setIsMenuOpened:c,counter:i}),Object(j.jsx)(p,{iconName:"Cart",to:"/cart",setIsMenuOpened:c,counter:n})]})]})})),v=a.a.memo((function(){var e=Object(s.useContext)(O),t=e.cartLength,c=e.favouritesLength,a=Object(s.useState)(!1),n=Object(l.a)(a,2),i=n[0],r=n[1],o=Object(s.useCallback)((function(e){e.preventDefault(),r((function(e){return!e}))}),[]);return Object(s.useEffect)((function(){return i?document.body.classList.add("page--with-menu"):document.body.classList.remove("page--with-menu")}),[i]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("header",{className:"header page__header",children:[Object(j.jsxs)("div",{className:"header__links",children:[Object(j.jsx)("div",{className:"header__logo",children:Object(j.jsx)(h,{setIsMenuOpened:r})}),Object(j.jsx)("div",{className:"header__nav",children:Object(j.jsx)(m,{setIsMenuOpened:r})})]}),Object(j.jsx)("div",{className:"header__menu",children:Object(j.jsx)("button",{title:"Menu","aria-label":"menu button",type:"button",className:"header__menu-opener",onClick:function(e){return o(e)},children:Object(j.jsx)("div",{className:u()("header__menu-icon",{"header__menu-icon--opened":i,"header__menu-icon--closed":!i})})})}),Object(j.jsxs)("div",{className:"header__icons",children:[Object(j.jsx)(p,{iconName:"Favourites",to:"/favourites",setIsMenuOpened:r,counter:c}),Object(j.jsx)(p,{iconName:"Cart",to:"/cart",setIsMenuOpened:r,counter:t})]})]}),Object(j.jsx)(f,{isMenuOpen:i,setIsMenuOpened:r})]})})),g=(c(26),Object(s.memo)((function(){return Object(j.jsxs)("button",{type:"button",className:"footer__btn",onClick:function(){setTimeout((function(){return window.scrollTo({top:0,behavior:"smooth"})}),200)},children:[Object(j.jsx)("span",{className:"footer__back-to-top",children:"Back to top"}),Object(j.jsx)("div",{className:"footer__arrow-up"})]})}))),N=Object(s.memo)((function(e){var t=e.to,c=e.text;return Object(j.jsx)("a",{href:t,className:"footer__nav-link",children:c})})),y=Object(s.memo)((function(){return Object(j.jsxs)("div",{className:"footer__nav",children:[Object(j.jsx)(N,{to:"https://github.com/fe-oct22-senior-html-developers/product_catalog",text:"github"}),Object(j.jsx)(N,{to:"#",text:"contacts"}),Object(j.jsx)(N,{to:"#",text:"rights"})]})})),k=Object(s.memo)((function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsxs)("div",{className:"footer__content container",children:[Object(j.jsx)(h,{}),Object(j.jsx)(y,{}),Object(j.jsx)(g,{})]})})})),C=(c(52),c(53),Object(s.memo)((function(e){var t=e.mixClass,c=e.children;return Object(j.jsx)("h2",{className:"page-title ".concat(t),children:c})}))),w=(c(54),c(55),a.a.memo((function(){return Object(j.jsx)("div",{className:"modal",children:Object(j.jsxs)("div",{className:"modal__content",children:[Object(j.jsx)("div",{className:"modal__header"}),Object(j.jsx)("p",{className:"modal__text",children:"Thank you for purchase!"})]})})}))),S=(c(56),function(e){var t=e.total,c=void 0===t?0:t,a=e.itemsNum,n=void 0===a?0:a,i=Object(s.useContext)(O).updateCart,r=Object(s.useState)(!1),d=Object(l.a)(r,2),u=d[0],b=d[1],m=Object(o.m)();return Object(j.jsxs)("div",{className:" cart-total grid__item--tablet_1-12 grid__item--desktop_17-24",children:[Object(j.jsx)("div",{className:"cart-total__price",children:"$".concat(c)}),Object(j.jsx)("div",{className:"cart-total__items",children:"Total for ".concat(n," items")}),Object(j.jsx)("button",{type:"button",className:"cart-total__btn","aria-label":"Checkout button",onClick:function(){return b(!0),void setTimeout((function(){b(!1),i([]),m("/")}),2e3)},children:"Checkout"}),u&&Object(j.jsx)(w,{})]})}),I=function(e){var t=e.children;return Object(j.jsx)("ul",{className:" cart__list grid__item--tablet_1-12 grid__item--desktop_1-16",children:t})},T=c(13),M=(c(57),function(e){var t=e.cartItem,c=t.quantity,a=t.product,n=a.id,i=a.name,o=a.price,d=a.image,u=a.phoneId,b=Object(s.useContext)(O),m=b.cart,p=b.updateCart,_=Object(s.useState)(!1),h=Object(l.a)(_,2),x=h[0],f=h[1],v=Object(s.useState)(!1),g=Object(l.a)(v,2),N=g[0],y=g[1];Object(s.useEffect)((function(){1===c&&f(!0),c>1&&f(!1)}),[c]),Object(s.useEffect)((function(){10===c&&y(!0),c<10&&y(!1)}),[c]);return Object(j.jsxs)("article",{className:"cart-item",children:[Object(j.jsxs)("div",{className:"cart-item__container",children:[Object(j.jsx)("button",{type:"button",className:"cart-item__close-button","aria-label":"click to remove ".concat(i," from cart"),onClick:function(){return function(){var e=m.filter((function(e){return e.product.id!==n}));p(e)}()}}),Object(j.jsx)("img",{src:d,alt:i,className:"cart-item__img"}),Object(j.jsx)(r.b,{to:"/product/".concat(u),className:"cart-item__title",children:"".concat(i)})]}),Object(j.jsxs)("div",{className:"cart-item__container cart-item__container__bottom ",children:[Object(j.jsxs)("div",{className:"cart-item__counter",children:[Object(j.jsx)("button",{type:"button",className:"cart-item__counter-button-minus","aria-label":"decrease quantity by 1",onClick:function(){return function(){var e=m.map((function(e){return e.product.id===n?Object(T.a)(Object(T.a)({},e),{},{quantity:e.quantity-1}):e}));p(e)}()},disabled:x}),Object(j.jsx)("p",{className:"cart-item__counter-number",children:c}),Object(j.jsx)("button",{type:"button",className:"cart-item__counter-button-plus","aria-label":"increase quantity by 1",onClick:function(){return function(){var e=m.map((function(e){return e.product.id===n?Object(T.a)(Object(T.a)({},e),{},{quantity:e.quantity+1}):e}));p(e)}()},disabled:N})]}),Object(j.jsx)("p",{className:"cart-item__price",children:"$".concat(c*o)})]})]})}),P=(c(58),Object(s.memo)((function(e){var t=e.mixClass,c=e.image,s=e.btnText;return Object(j.jsxs)("section",{className:"container empty-message ".concat(t),children:[Object(j.jsxs)("div",{className:"empty-message__inner",children:[Object(j.jsx)("img",{src:c,alt:"EmptySpace",className:"empty-message__img"}),Object(j.jsx)("p",{className:"text",children:"Oopps... It is empty in here."})]}),Object(j.jsx)(r.b,{to:"/phones",className:"empty-message__btn",children:s})]})}))),A=c.p+"static/media/emptyCart.1a79597b.jpg",F=function(){var e=Object(s.useContext)(O).cart,t=e.reduce((function(e,t){return e+t.quantity*t.product.price}),0),c=e.reduce((function(e,t){return e+t.quantity}),0);return Object(j.jsx)(j.Fragment,{children:c?Object(j.jsxs)("section",{className:"cart page__cart container grid",children:[Object(j.jsx)(I,{children:e.map((function(e){return Object(j.jsx)("li",{className:"cart__list-item",children:Object(j.jsx)(M,{cartItem:e})},e.product.itemId)}))}),Object(j.jsx)(S,{total:t,itemsNum:c})]}):Object(j.jsx)(P,{image:A,btnText:"Buy"})})},L=(c(59),c(60),Object(s.memo)((function(e){var t=e.isAlone,c=Object(o.m)();return Object(j.jsxs)("button",{type:"button","aria-label":"click to go back",className:u()("back-button",{"page__alone-back-button":t,"page__back-button":!t}),onClick:function(){return c(-1)},children:[Object(j.jsx)("div",{className:"back-button__icon"}),"Back"]})}))),E=function(e){var t=e.pageTitle;return Object(j.jsxs)("div",{className:"cart-page",children:[Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(L,{isAlone:!0}),Object(j.jsx)(C,{mixClass:"cart-page__title",children:t})]}),Object(j.jsx)(F,{})]})},B=(c(61),c(62),Object(s.memo)((function(){var e=Object(o.k)(),t="",c=e.pathname.split("/").filter((function(e){return""!==e})).map((function(e){var c=e[0].toUpperCase()+e.slice(1);return t+="/".concat(e),Object(j.jsxs)(s.Fragment,{children:[Object(j.jsx)("div",{className:"breadcrumbs__icon breadcrumbs__icon--arrow"}),Object(j.jsx)(r.b,{"aria-label":"click to go to the ".concat(e," page"),className:"breadcrumbs__link",to:t,children:c})]},e)}));return Object(j.jsxs)("div",{className:"breadcrumbs page__breadcrumbs",children:[Object(j.jsx)(r.b,{"aria-label":"click to go to the home page",title:"Home page",to:"/",className:"breadcrumbs__link",children:Object(j.jsx)("div",{className:"breadcrumbs__icon--home breadcrumbs__icon"})}),Object(j.jsx)(j.Fragment,{children:c})]})}))),q=c(10),D=(c(63),Object(s.memo)((function(e){var t=e.phone,c=e.mixClass,a=t.image,n=t.name,i=t.price,o=t.fullPrice,d=t.screen,u=t.capacity,b=t.ram,m=t.phoneId,p=Object(s.useContext)(O),_=p.cart,h=p.updateCart,x=p.favourites,f=p.updateFavourites,v=Object(s.useState)(!1),g=Object(l.a)(v,2),N=g[0],y=g[1],k=Object(s.useState)(!1),C=Object(l.a)(k,2),w=C[0],S=C[1],I=Object(q.a)(_),T=Object(q.a)(x),M=_.some((function(e){return e.product.itemId===t.itemId})),P=x.find((function(e){return e.itemId===t.itemId}));Object(s.useEffect)((function(){M&&y(!0),P&&S(!0)}),[N,w]);return Object(j.jsxs)("article",{className:"card ".concat(c),children:[Object(j.jsx)("div",{children:Object(j.jsxs)(r.b,{to:"/product/".concat(m),children:[Object(j.jsx)("img",{className:"card__img",src:a,alt:n}),Object(j.jsx)("h4",{className:"card__title",children:n})]})}),Object(j.jsxs)("div",{className:"block",children:[Object(j.jsx)("div",{className:"card__prices",children:i===o?Object(j.jsx)("span",{className:"card__prices--price",children:"$".concat(o)}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{className:"card__prices--price",children:"$".concat(i)}),Object(j.jsx)("span",{className:"card__prices--old-price",children:"$".concat(o)})]})}),Object(j.jsxs)("div",{className:"card__specifications",children:[Object(j.jsxs)("div",{className:"card__specifications--feature",children:[Object(j.jsx)("span",{children:"Screen"}),Object(j.jsx)("span",{children:"Capacity"}),Object(j.jsx)("span",{children:"RAM"})]}),Object(j.jsxs)("div",{className:"card__specifications--feature",children:[Object(j.jsx)("span",{children:d}),Object(j.jsx)("span",{children:u}),Object(j.jsx)("span",{children:b})]})]}),Object(j.jsxs)("div",{className:"card__footer",children:[N?Object(j.jsx)("button",{type:"button",className:"card__button card__button--active",onClick:function(){var e=I.filter((function(e){return e.product.itemId!==t.itemId}));h(e),y(!1)},children:"Added to cart"}):Object(j.jsx)("button",{type:"button",className:"card__button",onClick:function(){var e;I.push({id:(e=I,e.length>0?Math.max.apply(Math,Object(q.a)(e.map((function(e){return e.id}))))+1:0),quantity:1,product:t}),h(I),y(!0)},children:"Add to cart"}),w?Object(j.jsx)("button",{type:"button",onClick:function(){return function(){var e=T.filter((function(e){return e.itemId!==t.itemId}));f(e),S(!1)}()},className:"card__fav-button",children:Object(j.jsx)("div",{className:"card__fav-icon card__fav-icon--active"})}):Object(j.jsx)("button",{type:"button",onClick:function(){return T.push(t),f(T),void S(!0)},className:"card__fav-button",children:Object(j.jsx)("div",{className:"card__fav-icon card__fav-icon--pasive"})})]})]})]})}))),J=function(e){var t=e.favouritesItem;return Object(j.jsx)(D,{phone:t,mixClass:""})},G=function(e){var t=e.children;return Object(j.jsx)("ul",{className:"favourites__list",children:t})},$=(c(64),c.p+"static/media/empty-box.158a7fdc.png"),H=function(){var e=Object(s.useContext)(O),t=e.favourites,c=e.favouritesLength;return Object(j.jsx)(j.Fragment,{children:0!==c?Object(j.jsxs)("section",{className:"favourites",children:[Object(j.jsx)("div",{className:"favourites__amount",children:"".concat(c," items")}),Object(j.jsx)(G,{children:t.map((function(e){return Object(j.jsx)("li",{className:"favourites__list-item",children:Object(j.jsx)(J,{favouritesItem:e})},e.itemId)}))})]}):Object(j.jsx)(P,{mixClass:"favourites__empty-message",image:$,btnText:"Add"})})},R=function(e){var t=e.pageTitle;return Object(j.jsx)("div",{className:"favourites-page",children:Object(j.jsxs)("div",{className:"container page__favourites",children:[Object(j.jsx)(B,{}),Object(j.jsx)(C,{mixClass:"favourites-page__title",children:t}),Object(j.jsx)(H,{})]})})},z=(c(65),c(66),c(67),function(e){var t=e.children;return Object(j.jsx)("h3",{className:"section-title",children:t})}),Z=(c(68),function(e){var t=e.link,c=e.gridClasses,s=e.image,a=e.title,n=e.amount;return Object(j.jsx)("article",{className:"category-card ".concat(c),children:Object(j.jsxs)(r.b,{to:t,className:"category-card__link",children:[Object(j.jsx)("img",{className:"category-card__image",src:s,alt:"banner of ".concat(a," category")}),Object(j.jsx)("h4",{className:"category-card__title",children:a}),Object(j.jsx)("p",{className:"category-card__models-amount",children:"".concat(n," models")})]})})}),U=c.p+"static/media/category__phones.5745f0cd.jpg",W=c.p+"static/media/category__tablets.05b3d251.jpg",Y=c.p+"static/media/category__accessories.3b9d45fd.jpg",K=c(108),Q=function(e){return K.a.get("".concat("https://guarded-waters-77447.herokuapp.com").concat(e))},V=function(e){return Q("/phones/".concat(e))},X=function(e){return Q("/phones/".concat(e,"/recommended"))},ee=function(){var e=Object(s.useState)(0),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){Q("/phones/amount").then((function(e){return e.data})).then(a)}),[]),Object(j.jsxs)("section",{className:"shop-by-category container",children:[Object(j.jsx)(z,{children:"Shop by category"}),Object(j.jsxs)("div",{className:"shop-by-category__categories grid",children:[Object(j.jsx)(Z,{link:"/phones",gridClasses:"grid__item--tablet_1-4 grid__item--desktop_1-8",image:U,title:"Mobile phones",amount:+c}),Object(j.jsx)(Z,{link:"/tablets",gridClasses:"grid__item--tablet_5-8 grid__item--desktop_9-16",image:W,title:"Tablets",amount:24}),Object(j.jsx)(Z,{link:"/accessories",gridClasses:"grid__item--tablet_9-12 grid__item--desktop_17-24",image:Y,title:"Accessories",amount:100})]})]})},te=(c(73),function(){return Object(j.jsx)("h1",{className:"website-title",children:"Product Catalog"})}),ce=c(19),se=c.n(ce),ae=(c(89),function(e){var t=e.children,c={dots:!0,dotsClass:"slick-dots slick-thumb",infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:0,arrows:!0,autoplay:!0,draggable:!0,autoplaySpeed:3e3,customPaging:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{style:{visibility:"hidden"},children:"\u2022"})})},responsive:[{breakpoint:640,settings:{arrows:!1,slidesToShow:1,slidesToScroll:1,initialSlide:1}}]};return Object(j.jsx)(se.a,Object(T.a)(Object(T.a)({},c),{},{className:"grid__item grid__item--tablet_2-11 grid__item--desktop_2-23",children:t}))}),ne=(c(90),c.p+"static/media/banner.330ccefb.jpeg"),ie=function(){return Object(j.jsx)("section",{className:"banner grid",children:Object(j.jsxs)(ae,{children:[Object(j.jsx)("img",{className:"banner__image",src:ne,alt:"BannerImg"}),Object(j.jsx)("img",{className:"banner__image",src:ne,alt:"BannerImg"}),Object(j.jsx)("img",{className:"banner__image",src:ne,alt:"BannerImg"})]})})};c(91);var re=function(e){var t=function(e){return"undefined"!==typeof window&&window.matchMedia(e).matches},c=Object(s.useState)(t(e)),a=Object(l.a)(c,2),n=a[0],i=a[1];function r(){i(t(e))}return Object(s.useEffect)((function(){var t=window.matchMedia(e);return r(),t.addListener?t.addListener(r):t.addEventListener("change",r),function(){t.removeListener?t.removeListener(r):t.removeEventListener("change",r)}}),[e]),n};function oe(e){var t=e.onClick,c=e.isDisabled,s=u()("arrow arrow-left",{disabled:c});return Object(j.jsx)("div",{onClick:c?void 0:t,className:s})}function le(e){var t=e.onClick,c=e.isDisabled,s=u()("arrow arrow-right",{disabled:c});return Object(j.jsx)("div",{onClick:c?void 0:t,className:s})}var de=function(e){var t=e.children,c=Object(s.useState)(0),n=Object(l.a)(c,2),i=n[0],r=n[1],o=a.a.Children.count(t),d=re("(max-width: 1024px)"),u=re("(max-width: 740px)"),b=0;b=re("(max-width: 480px)")?1.5:u?2:d?2.5:4;var m={dots:!1,infinite:!1,speed:500,slidesToShow:4,slidesToScroll:1,initialSlide:0,nextArrow:Object(j.jsx)(le,{isDisabled:i===o-b,onClick:function(){return r(i+1)}}),prevArrow:Object(j.jsx)(oe,{isDisabled:0===i,onClick:function(){return r(i-1)}}),responsive:[{breakpoint:1024,settings:{slidesToShow:2.5,slidesToScroll:1}},{breakpoint:740,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1.5,slidesToScroll:1}}],beforeChange:function(e,t){r(t)}};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(se.a,Object(T.a)(Object(T.a)({},m),{},{className:"smartphone-slider",children:t}))})};oe.defaultProps={onClick:function(){}},le.defaultProps={onClick:function(){}};c(92);var ue=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){Q("/phones/new").then((function(e){return e.data})).then(a).catch((function(e){return window.console.log(e)}))}),[]),Object(j.jsxs)("section",{className:"brand-new-models container",children:[Object(j.jsx)(z,{children:"Brand new models"}),Object(j.jsx)(de,{children:c.map((function(e){return Object(j.jsx)(D,{mixClass:"card--slider",phone:e},e.id)}))})]})},je=(c(93),function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){Q("/phones/discount").then((function(e){return e.data})).then(a).catch((function(e){return window.console.log(e)}))}),[]),Object(j.jsxs)("section",{className:"hot-prices container",children:[Object(j.jsx)(z,{children:"Hot prices"}),Object(j.jsx)(de,{children:c.map((function(e){return Object(j.jsx)(D,{mixClass:"card--slider",phone:e},e.id)}))})]})}),be=function(e){var t=e.pageTitle;return Object(j.jsxs)("div",{className:"home-page",children:[Object(j.jsx)(te,{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(C,{mixClass:"home-page__title",children:t})}),Object(j.jsx)(ie,{}),Object(j.jsx)(ue,{}),Object(j.jsx)(ee,{}),Object(j.jsx)(je,{})]})},me=(c(94),c.p+"static/media/404.748a45b2.svg"),pe=function(){return Object(j.jsxs)("div",{className:"container not-found-page",children:[Object(j.jsx)(L,{isAlone:!0}),Object(j.jsxs)("section",{className:"not-found-page__content",children:[Object(j.jsxs)("div",{className:"not-found-page__text",children:[Object(j.jsx)("h1",{className:"not-found-page__title",children:"Sorry, this page could not be found"}),Object(j.jsxs)("p",{className:"not-found-page__description",children:["The link is broken or the page no longer exists. ",Object(j.jsx)("br",{className:"not-found-page__break"}),"Go to the ",Object(j.jsx)(r.b,{className:"not-found-page__link",to:"/",children:"homepage"}),"."]})]}),Object(j.jsx)("img",{src:me,alt:"404 error",className:"not-found-page__image"})]})]})},_e=(c(95),function(e){var t=e.description;return Object(j.jsx)("div",{className:"grid__item--tablet_1-12 grid__item--desktop_1-12",children:Object(j.jsxs)("div",{className:"product__about",children:[Object(j.jsx)("h3",{className:"product__about--header",children:"About"}),t.map((function(e){return Object(j.jsxs)(s.Fragment,{children:[Object(j.jsx)("h4",{className:"product__about--title",children:e.title}),Object(j.jsx)("p",{className:"product__about--content",children:e.text.map((function(e){return Object(j.jsx)("span",{className:"product__about--text",children:e},e)}))})]},e.title)}))]})})}),he=(c(38),Object(s.memo)((function(e){var t=e.capacity,c=e.productCapacity,s=e.handleProductChange,a=function(e){return e.split("GB").join("")}(t),n=Object(o.o)().productId,i="",l=t.toLowerCase();if(n){var d=n.split("-");i=d.slice(0,-2).concat(["".concat(l),d[d.length-1]]).join("-")}return Object(j.jsx)(r.b,{to:"/product/".concat(i),"aria-label":"click to choose ".concat(t," capacity"),onClick:function(){return s(i)},className:u()("product-capacity__button",{"product-capacity__button--active":t===c}),children:"".concat(a," GB")})}))),Oe=Object(s.memo)((function(e){var t=e.currentCapacity,c=e.capacityAvailable,s=e.handleProductChange;return Object(j.jsx)("div",{className:"product-capacity product-sidebar__product-capacity",children:Object(j.jsxs)("div",{className:"product-capacity__content",children:[Object(j.jsx)("p",{className:"product-capacity__title",children:"Select capacity"}),Object(j.jsx)("div",{className:"product-capacity__selector",children:c.map((function(e){return Object(j.jsx)(he,{capacity:e,productCapacity:t,handleProductChange:s},e)}))})]})})})),xe=(c(39),Object(s.memo)((function(e){var t=e.color,c=e.productColor,s=e.handleProductChange,a=Object(o.o)().productId,n="";return a&&(n=a.split("-").slice(0,-1).concat("".concat(t)).join("-")),Object(j.jsx)(r.b,{to:"/product/".concat(n),"aria-label":"click to choose ".concat(t," color"),title:t,onClick:function(){return s(n)},className:u()("product-colors__circle",{"product-colors__circle--active":t===c}),children:Object(j.jsx)("div",{className:"product-colors__color product-colors__color--".concat(t)})})}))),fe=Object(s.memo)((function(e){var t=e.colorsAvailable,c=e.currentColor,s=e.handleProductChange;return Object(j.jsxs)("div",{className:"product-colors product-sidebar__product-colors",children:[Object(j.jsxs)("div",{className:"product-colors__text",children:[Object(j.jsx)("p",{className:"product-colors__title",children:"Available colors"}),Object(j.jsx)("p",{className:"product-colors__id",children:"ID: 802390"})]}),Object(j.jsx)("div",{className:"product-colors__info",children:null===t||void 0===t?void 0:t.map((function(e){return Object(j.jsx)(xe,{productColor:c,color:e,handleProductChange:s},e)}))})]})})),ve=(c(96),Object(s.memo)((function(e){var t=e.phone,c=t.fullPrice,a=t.price,n=Object(s.useContext)(O),i=n.cart,r=n.updateCart,o=n.favourites,d=n.updateFavourites,u=Object(s.useState)(!1),b=Object(l.a)(u,2),m=b[0],p=b[1],_=Object(s.useState)(!1),h=Object(l.a)(_,2),x=h[0],f=h[1],v=Object(q.a)(i),g=Object(q.a)(o),N=v.some((function(e){return e.product.itemId===t.itemId})),y=g.find((function(e){return e.itemId===t.itemId}));Object(s.useEffect)((function(){p(!1),f(!1),N&&p(!0),y&&f(!0)}),[m,x,t]);return Object(j.jsxs)("article",{className:"product-purchase product-sidebar__product-purchase",children:[Object(j.jsx)("div",{className:"card__prices",children:a===c?Object(j.jsx)("span",{className:"card__prices--price",children:"$".concat(c)}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{className:"card__prices--price",children:"$".concat(a)}),Object(j.jsx)("span",{className:"card__prices--old-price",children:"$".concat(c)})]})}),Object(j.jsxs)("div",{className:"product-purchase__footer",children:[m?Object(j.jsx)("button",{type:"button",className:"product-purchase__button product-purchase__button--active",onClick:function(){var e=v.filter((function(e){return e.product.itemId!==t.itemId}));r(e),p(!1)},children:"Added to cart"}):Object(j.jsx)("button",{type:"button",className:"product-purchase__button",onClick:function(){var e;v.push({id:(e=v,e.length>0?Math.max.apply(Math,Object(q.a)(e.map((function(e){return e.id}))))+1:0),quantity:1,product:t}),r(v),p(!0)},children:"Add to cart"}),x?Object(j.jsx)("button",{type:"button",onClick:function(){return function(){var e=g.filter((function(e){return e.itemId!==t.itemId}));d(e),f(!1)}()},className:"product-purchase__fav-button",children:Object(j.jsx)("div",{className:"product-purchase__fav-icon product-purchase__fav-icon--active"})}):Object(j.jsx)("button",{type:"button",onClick:function(){return g.push(t),d(g),void f(!0)},className:"product-purchase__fav-button",children:Object(j.jsx)("div",{className:"product-purchase__fav-icon product-purchase__fav-icon--pasive"})})]})]})}))),ge=(c(97),Object(s.memo)((function(e){var t=e.productDetails,c=e.product,s=e.handleProductChange,a=t.screen,n=t.resolution,i=t.processor,r=t.ram,o=t.color,l=t.colorsAvailable,d=t.capacity,u=t.capacityAvailable;return Object(j.jsx)("div",{className:" page__product-sidebar grid__item--tablet_8-12 grid__item--desktop_14-24 ",children:Object(j.jsxs)("div",{className:"product-sidebar",children:[Object(j.jsx)(fe,{colorsAvailable:l,currentColor:o,handleProductChange:s}),Object(j.jsxs)("div",{className:"product-sidebar__tech-info",children:[Object(j.jsx)(Oe,{capacityAvailable:u,currentCapacity:d,handleProductChange:s}),Object(j.jsx)(ve,{phone:c}),Object(j.jsxs)("div",{className:"product-sidebar__info",children:[Object(j.jsxs)("div",{className:"product-sidebar__characteristic",children:[Object(j.jsx)("p",{className:"product-sidebar__property",children:"Screen"}),Object(j.jsx)("p",{className:"product-sidebar__value",children:a})]}),Object(j.jsxs)("div",{className:"product-sidebar__characteristic",children:[Object(j.jsx)("p",{className:"product-sidebar__property",children:"Resolution"}),Object(j.jsx)("p",{className:"product-sidebar__value",children:n})]}),Object(j.jsxs)("div",{className:"product-sidebar__characteristic",children:[Object(j.jsx)("p",{className:"product-sidebar__property",children:"Processor"}),Object(j.jsx)("p",{className:"product-sidebar__value",children:i})]}),Object(j.jsxs)("div",{className:"product-sidebar__characteristic",children:[Object(j.jsx)("p",{className:"product-sidebar__property",children:"RAM"}),Object(j.jsx)("p",{className:"product-sidebar__value",children:r})]})]})]})]})})}))),Ne=(c(98),function(e){var t=e.images,c=e.name,s=t[0].split("/");s.pop();var a=s.join("/"),n={customPaging:function(e){return Object(j.jsx)("div",{className:"product-slider__dots-block",children:Object(j.jsx)("img",{className:"product-slider__dots-img",src:"".concat(a,"/0").concat(e,".jpg"),alt:"phone"})})},dots:!0,dotsClass:"slick-dots1 slick-thumb1",infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!1,adaptiveHeight:!0};return Object(j.jsx)("div",{className:" page__product-slider grid__item--tablet_1-7 grid__item--desktop_1-12 ",children:Object(j.jsx)("div",{className:"product-slider",children:Object(j.jsx)(se.a,Object(T.a)(Object(T.a)({},n),{},{className:"product-slider__item",children:t.map((function(e){return Object(j.jsx)("div",{className:"product-slider__wrapper",children:Object(j.jsx)("img",{className:"product-slider__img",src:e,alt:c})},e)}))}))})})}),ye=(c(99),function(e){var t=e.screen,c=e.resolution,s=e.processor,a=e.ram,n=e.capacity,i=e.camera,r=e.zoom,o=e.cell;return Object(j.jsx)("div",{className:"grid__item--tablet_1-12 grid__item--desktop_14-24",children:Object(j.jsxs)("div",{className:"product__tech-specs",children:[Object(j.jsx)("h3",{className:"product__tech-specs--title",children:"Tech specs"}),Object(j.jsxs)("div",{className:"product__tech-specs--details",children:[Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--key",children:"Screen"}),Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--value",children:t})]}),Object(j.jsxs)("div",{className:"product__tech-specs--details",children:[Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--key",children:"Resolution"}),Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--value",children:c})]}),Object(j.jsxs)("div",{className:"product__tech-specs--details",children:[Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--key",children:"Processor"}),Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--value",children:s})]}),Object(j.jsxs)("div",{className:"product__tech-specs--details",children:[Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--key",children:"RAM"}),Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--value",children:a})]}),Object(j.jsxs)("div",{className:"product__tech-specs--details",children:[Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--key",children:"Built in memory"}),Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--value",children:n})]}),Object(j.jsxs)("div",{className:"product__tech-specs--details",children:[Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--key",children:"Camera"}),Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--value",children:i})]}),Object(j.jsxs)("div",{className:"product__tech-specs--details",children:[Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--key",children:"Zoom"}),Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--value",children:r})]}),Object(j.jsxs)("div",{className:"product__tech-specs--details",children:[Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--key",children:"Cell"}),Object(j.jsx)("p",{className:"product__tech-specs--detail product__tech-specs--value",children:o.join(", ")})]})]})})}),ke=(c(100),function(e){var t=e.products;return Object(j.jsxs)("section",{className:"product-recommended-slider",children:[Object(j.jsx)(z,{children:"You may also like"}),Object(j.jsx)(de,{children:t.map((function(e){return Object(j.jsx)(D,{mixClass:"card--slider",phone:e},e.id)}))})]})}),Ce=(c(101),Object(s.memo)((function(){var e=Object(s.useState)(),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(),i=Object(l.a)(n,2),r=i[0],d=i[1],u=Object(s.useState)(),b=Object(l.a)(u,2),m=b[0],p=b[1],_=Object(o.o)().productId;Object(s.useEffect)((function(){V(_||"").then((function(e){var t=e.data,c=t.phone,s=t.phoneDetails;a(JSON.parse(c)),d(JSON.parse(s))})).catch((function(e){return window.console.log(e)})),X(_||"").then((function(e){return p(e.data)})).catch((function(e){return window.console.log(e)}))}),[]);var h=Object(s.useCallback)((function(e){V(e||"").then((function(e){var t=e.data,c=t.phone,s=t.phoneDetails;a(JSON.parse(c)),d(JSON.parse(s))})).catch((function(e){return window.console.log(e)})),X(e||"").then((function(e){return p(e.data)})).catch((function(e){return window.console.log(e)}))}),[]);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(B,{}),Object(j.jsx)(L,{}),c&&r&&Object(j.jsx)(z,{children:r.name}),Object(j.jsx)("div",{className:"product-details__demo grid",children:c&&r&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(Ne,{images:r.images,name:r.name}),Object(j.jsx)(ge,{productDetails:r,product:c,handleProductChange:h})]})}),c&&r&&Object(j.jsxs)("div",{className:"grid",children:[Object(j.jsx)(_e,{description:r.description}),Object(j.jsx)(ye,{screen:r.screen,resolution:r.resolution,processor:r.processor,ram:r.ram,capacity:r.capacity,camera:r.camera,zoom:r.zoom,cell:r.cell})]}),m&&Object(j.jsx)(ke,{products:m})]})}))),we=(c(102),c.p+"static/media/dropdown.6f403b12.svg"),Se=(c(103),function(e){var t=e.title,c=e.list,a=e.current,n=e.mixClass,i=e.updater,r=Object(s.useState)(!1),o=Object(l.a)(r,2),d=o[0],b=o[1];return Object(j.jsxs)("div",{className:"custom-select ".concat(n),children:[Object(j.jsx)("p",{className:"custom-select__title",children:t}),Object(j.jsxs)("button",{type:"button",className:u()("custom-select__header",{"custom-select__header--active":d}),"aria-label":"".concat(t," dropdown menu"),onClick:function(){return b((function(e){return!e}))},children:[Object(j.jsx)("p",{className:"custom-select__current",children:a}),Object(j.jsx)("img",{className:u()("custom-select__dropdown",{"custom-select__dropdown--active":d}),src:we,alt:"click to ","aria-hidden":"true"})]}),Object(j.jsx)("ul",{className:u()("custom-select__list",{"custom-select__list--hidden":!d}),children:c.map((function(e){return Object(j.jsx)("li",{className:"custom-select__list-item",children:Object(j.jsx)("button",{type:"button",className:u()("custom-select__list-btn",{"custom-select__list-btn--active":a===e}),onClick:function(){return i(e),void b(!1)},children:e})},e)}))})]})}),Ie=function(e){var t=e.catalogItem;return Object(j.jsx)(D,{phone:t,mixClass:""})},Te=function(e){var t=e.children;return Object(j.jsx)("ul",{className:"catalog__list",children:t})},Me=(c(104),Object(s.memo)((function(e){var t=e.phones;return Object(j.jsx)("section",{className:"catalog page__catalog",children:Object(j.jsx)(Te,{children:t.map((function(e){return Object(j.jsx)("li",{className:"catalog__list-item",children:Object(j.jsx)(Ie,{catalogItem:e})},e.itemId)}))})})}))),Pe=(c(105),Object(s.memo)((function(e){for(var t=e.currentPage,c=e.itemsNum,s=e.setPage,a=Math.ceil(95/c),n=[],i=1;i<a;i++)n.push(i);return Object(j.jsxs)("div",{className:"pagination page__pagination",children:[Object(j.jsx)("button",{"aria-label":"click to go to previous page",type:"button",className:"pagination__button",children:Object(j.jsx)("div",{className:"pagination__arrow pagination__arrow--left"})}),Object(j.jsx)("ul",{className:"pagination__list",children:n.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)("button",{"aria-label":"click to go to the page ".concat(e," of the catalog"),type:"button",className:u()("pagination__item",{"pagination__item--active":t===e}),onClick:function(){s("".concat(e)),setTimeout((function(){return window.scrollTo({top:0,behavior:"smooth"})}),200)},children:e})},e)}))}),Object(j.jsx)("button",{"aria-label":"click to go to the next page",type:"button",className:"pagination__button",children:Object(j.jsx)("div",{className:"pagination__arrow pagination__arrow--right"})})]})}))),Ae=["Name: A - Z","Newest","Oldest","Price: Lowest first","Price: Highest first"],Fe=["8","16","32","64"],Le=function(e){var t=e.pageTitle,c=Object(s.useState)("Name: A - Z"),a=Object(l.a)(c,2),n=a[0],i=a[1],r=Object(s.useState)("16"),o=Object(l.a)(r,2),d=o[0],u=o[1],b=Object(s.useState)("1"),m=Object(l.a)(b,2),p=m[0],_=m[1],h=Object(s.useState)([]),O=Object(l.a)(h,2),x=O[0],f=O[1];return Object(s.useEffect)((function(){(function(e,t,c){return Q("/phones?sortBy=".concat(e,"&itemsNum=").concat(t,"&page=").concat(c))})(n,d,p).then((function(e){return e.data})).then(f)}),[n,d,p]),Object(j.jsxs)("div",{className:"product-page",children:[Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(B,{}),Object(j.jsx)(C,{mixClass:"product-page__title",children:t}),Object(j.jsx)("p",{className:"product-page__amount",children:"".concat(95," models")}),Object(j.jsxs)("div",{className:"product-page__filters",children:[Object(j.jsx)(Se,{title:"Sort by",list:Ae,current:n,mixClass:"custom-select--sort-by",updater:i}),Object(j.jsx)(Se,{title:"Items on page",list:Fe,current:d,mixClass:"custom-select--items-num",updater:u})]}),Object(j.jsx)(Me,{phones:x})]}),Object(j.jsx)(Pe,{setPage:_,currentPage:+p,itemsNum:+d})]})},Ee=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(v,{}),Object(j.jsx)("main",{className:"page__main",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",element:Object(j.jsx)(be,{pageTitle:"Welcome to Nice Gadgets store!"})}),Object(j.jsx)(o.a,{path:"phones",element:Object(j.jsx)(Le,{pageTitle:"Mobile Phones"})}),Object(j.jsx)(o.a,{path:"tablets",element:Object(j.jsx)(Le,{pageTitle:"Tablets"})}),Object(j.jsx)(o.a,{path:"accessories",element:Object(j.jsx)(Le,{pageTitle:"Accessories"})}),Object(j.jsx)(o.a,{path:"/cart",element:Object(j.jsx)(E,{pageTitle:"Cart"})}),Object(j.jsx)(o.a,{path:"/favourites",element:Object(j.jsx)(R,{pageTitle:"Favourites"})}),Object(j.jsx)(o.a,{path:"product/:productId",element:Object(j.jsx)(Ce,{})}),Object(j.jsx)(o.a,{path:"*",element:Object(j.jsx)(pe,{})})]})}),Object(j.jsx)(k,{})]})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(x,{children:Object(j.jsx)(r.a,{children:Object(j.jsx)(Ee,{})})})}),document.getElementById("root"))}]),[[106,1,2]]]);
//# sourceMappingURL=main.f49d01a2.chunk.js.map