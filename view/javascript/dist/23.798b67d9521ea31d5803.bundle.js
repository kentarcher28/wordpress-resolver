(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{102:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i=n(13),o=n(0),r=n(1),c=n(3),a="__bv_modal_directive__",s={passive:!0},l=function(t){return t&&Object(o.q)(t,".dropdown-menu > li, li.nav-item")&&Object(o.x)("a, button",t)||t},u=function(t,e,n){var u,f,b,d,h,v=(f=(u=e).modifiers,b=void 0===f?{}:f,d=u.arg,h=u.value,Object(r.j)(h)?h:Object(r.j)(d)?d:Object(c.k)(b).reverse()[0]),g=l(t);if(v&&g){var O=function(t){var e=t.currentTarget;if(!Object(o.n)(e)){var r=t.type,c=t.keyCode;"click"!==r&&("keydown"!==r||c!==i.a.ENTER&&c!==i.a.SPACE)||n.context.$root.$emit("bv::show::modal",v,e)}};t[a]=O,function(t){t&&"BUTTON"!==t.tagName&&(Object(o.l)(t,"role")||Object(o.z)(t,"role","button"),"A"===t.tagName||Object(o.l)(t,"tabindex")||Object(o.z)(t,"tabindex","0"))}(g),Object(o.f)(g,"click",O,s),"BUTTON"!==g.tagName&&"button"===Object(o.g)(g,"role")&&Object(o.f)(g,"keydown",O,s)}},f=function(t){var e=l(t),n=t?t[a]:null;e&&n&&(Object(o.e)(e,"click",n,s),Object(o.e)(e,"keydown",n,s)),delete t[a]},b=function(t,e,n){f(t),u(t,e,n)},d={inserted:b,updated:function(){},componentUpdated:b,unbind:f}},132:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(171),o=n(7),r=Object(o.b)({directives:{VBPopover:i.a}})},133:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(178),o=n(7),r=Object(o.b)({directives:{VBTooltip:i.a}})},171:function(t,e,n){"use strict";n.d(e,"a",(function(){return k}));var i=n(44),o=n(20),r=n(5),c=n(4),a=n(11),s=n(1),l=n(3),u=n(280);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d="__BV_Popover__",h={focus:!0,hover:!0,click:!0,blur:!0,manual:!0},v=/^html$/i,g=/^nofade$/i,O=/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,p=/^(window|viewport|scrollParent)$/i,_=/^d\d+$/i,j=/^ds\d+$/i,m=/^dh\d+$/i,y=/^o-?\d+$/i,$=/^v-.+$/i,w=function(t,e){var n="BPopover",i={title:void 0,content:void 0,trigger:"",placement:"right",fallbackPlacement:"flip",container:!1,animation:!0,offset:0,disabled:!1,id:null,html:!1,delay:Object(c.c)(n,"delay"),boundary:String(Object(c.c)(n,"boundary")),boundaryPadding:parseInt(Object(c.c)(n,"boundaryPadding"),10)||0,variant:Object(c.c)(n,"variant"),customClass:Object(c.c)(n,"customClass")};if(Object(s.j)(t.value)||Object(s.g)(t.value)?i.content=t.value:Object(s.e)(t.value)?i.content=t.value:Object(l.j)(t.value)&&(i=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(n,!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},i,{},t.value)),t.arg&&(i.container="#".concat(t.arg)),Object(s.k)(i.title)){var o=e.data||{};i.title=o.attrs&&!Object(s.l)(o.attrs.title)?o.attrs.title:void 0}Object(l.j)(i.delay)||(i.delay={show:parseInt(i.delay,10)||0,hide:parseInt(i.delay,10)||0}),Object(l.k)(t.modifiers).forEach((function(t){if(v.test(t))i.html=!0;else if(g.test(t))i.animation=!1;else if(O.test(t))i.placement=t;else if(p.test(t))t="scrollparent"===t?"scrollParent":t,i.boundary=t;else if(_.test(t)){var e=parseInt(t.slice(1),10)||0;i.delay.show=e,i.delay.hide=e}else j.test(t)?i.delay.show=parseInt(t.slice(2),10)||0:m.test(t)?i.delay.hide=parseInt(t.slice(2),10)||0:y.test(t)?i.offset=parseInt(t.slice(1),10)||0:$.test(t)&&(i.variant=t.slice(2)||null)}));var a={};return Object(r.b)(i.trigger||"").filter(Boolean).join(" ").trim().toLowerCase().split(/\s+/).forEach((function(t){h[t]&&(a[t]=!0)})),Object(l.k)(t.modifiers).forEach((function(t){t=t.toLowerCase(),h[t]&&(a[t]=!0)})),i.trigger=Object(l.k)(a).join(" "),"blur"===i.trigger&&(i.trigger="focus"),i.trigger||(i.trigger="click"),i},T=function(t,e,n){if(a.j){var r=w(e,n);if(!t[d]){var c=n.context;t[d]=new u.a({parent:c,_scopeId:Object(i.a)(c,void 0)}),t[d].__bv_prev_data__={},t[d].$on("show",(function(){var e={};Object(s.e)(r.title)&&(e.title=r.title(t)),Object(s.e)(r.content)&&(e.content=r.content(t)),Object(l.k)(e).length>0&&t[d].updateData(e)}))}var f={title:r.title,content:r.content,triggers:r.trigger,placement:r.placement,fallbackPlacement:r.fallbackPlacement,variant:r.variant,customClass:r.customClass,container:r.container,boundary:r.boundary,delay:r.delay,offset:r.offset,noFade:!r.animation,id:r.id,disabled:r.disabled,html:r.html},b=t[d].__bv_prev_data__;if(t[d].__bv_prev_data__=f,!Object(o.a)(f,b)){var h={target:t};Object(l.k)(f).forEach((function(e){f[e]!==b[e]&&(h[e]="title"!==e&&"content"!==e||!Object(s.e)(f[e])?f[e]:f[e](t))})),t[d].updateData(h)}}},k={bind:function(t,e,n){T(t,e,n)},componentUpdated:function(t,e,n){n.context.$nextTick((function(){T(t,e,n)}))},unbind:function(t){!function(t){t[d]&&(t[d].$destroy(),t[d]=null),delete t[d]}(t)}}},178:function(t,e,n){"use strict";n.d(e,"a",(function(){return k}));var i=n(44),o=n(20),r=n(5),c=n(4),a=n(11),s=n(1),l=n(3),u=n(137);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d="__BV_Tooltip__",h={focus:!0,hover:!0,click:!0,blur:!0,manual:!0},v=/^html$/i,g=/^nofade$/i,O=/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,p=/^(window|viewport|scrollParent)$/i,_=/^d\d+$/i,j=/^ds\d+$/i,m=/^dh\d+$/i,y=/^o-?\d+$/i,$=/^v-.+$/i,w=function(t,e){var n="BTooltip",i={title:void 0,trigger:"",placement:"top",fallbackPlacement:"flip",container:!1,animation:!0,offset:0,id:null,html:!1,disabled:!1,delay:Object(c.c)(n,"delay"),boundary:String(Object(c.c)(n,"boundary")),boundaryPadding:parseInt(Object(c.c)(n,"boundaryPadding"),10)||0,variant:Object(c.c)(n,"variant"),customClass:Object(c.c)(n,"customClass")};if(Object(s.j)(t.value)||Object(s.g)(t.value)?i.title=t.value:Object(s.e)(t.value)?i.title=t.value:Object(l.j)(t.value)&&(i=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(n,!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},i,{},t.value)),Object(s.k)(i.title)){var o=e.data||{};i.title=o.attrs&&!Object(s.l)(o.attrs.title)?o.attrs.title:void 0}Object(l.j)(i.delay)||(i.delay={show:parseInt(i.delay,10)||0,hide:parseInt(i.delay,10)||0}),t.arg&&(i.container="#".concat(t.arg)),Object(l.k)(t.modifiers).forEach((function(t){if(v.test(t))i.html=!0;else if(g.test(t))i.animation=!1;else if(O.test(t))i.placement=t;else if(p.test(t))t="scrollparent"===t?"scrollParent":t,i.boundary=t;else if(_.test(t)){var e=parseInt(t.slice(1),10)||0;i.delay.show=e,i.delay.hide=e}else j.test(t)?i.delay.show=parseInt(t.slice(2),10)||0:m.test(t)?i.delay.hide=parseInt(t.slice(2),10)||0:y.test(t)?i.offset=parseInt(t.slice(1),10)||0:$.test(t)&&(i.variant=t.slice(2)||null)}));var a={};return Object(r.b)(i.trigger||"").filter(Boolean).join(" ").trim().toLowerCase().split(/\s+/).forEach((function(t){h[t]&&(a[t]=!0)})),Object(l.k)(t.modifiers).forEach((function(t){t=t.toLowerCase(),h[t]&&(a[t]=!0)})),i.trigger=Object(l.k)(a).join(" "),"blur"===i.trigger&&(i.trigger="focus"),i.trigger||(i.trigger="hover focus"),i},T=function(t,e,n){if(a.j){var r=w(e,n);if(!t[d]){var c=n.context;t[d]=new u.a({parent:c,_scopeId:Object(i.a)(c,void 0)}),t[d].__bv_prev_data__={},t[d].$on("show",(function(){Object(s.e)(r.title)&&t[d].updateData({title:r.title(t)})}))}var f={title:r.title,triggers:r.trigger,placement:r.placement,fallbackPlacement:r.fallbackPlacement,variant:r.variant,customClass:r.customClass,container:r.container,boundary:r.boundary,delay:r.delay,offset:r.offset,noFade:!r.animation,id:r.id,disabled:r.disabled,html:r.html},b=t[d].__bv_prev_data__;if(t[d].__bv_prev_data__=f,!Object(o.a)(f,b)){var h={target:t};Object(l.k)(f).forEach((function(e){f[e]!==b[e]&&(h[e]="title"===e&&Object(s.e)(f[e])?f[e](t):f[e])})),t[d].updateData(h)}}},k={bind:function(t,e,n){T(t,e,n)},componentUpdated:function(t,e,n){n.context.$nextTick((function(){T(t,e,n)}))},unbind:function(t){!function(t){t[d]&&(t[d].$destroy(),t[d]=null),delete t[d]}(t)}}},301:function(t,e,n){"use strict";var i=n(7),o=n(391),r=n(102),c=Object(i.b)({directives:{VBModal:r.a}}),a=n(132),s=n(69),l=n(17),u=n(0),f=n(1),b=n(3);function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var g={element:"body",offset:10,method:"auto",throttle:75},O={element:"(string|element|component)",offset:"number",method:"string",throttle:"number"},p="dropdown-item",_="active",j={ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown, .dropup",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},m="offset",y="position",$=/^.*(#[^#]+)$/,w=["webkitTransitionEnd","transitionend","otransitionend","oTransitionEnd"],T={passive:!0,capture:!1},k=function(){function t(e,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e,this.$scroller=null,this.$selector=[j.NAV_LINKS,j.LIST_ITEMS,j.DROPDOWN_ITEMS].join(","),this.$offsets=[],this.$targets=[],this.$activeTarget=null,this.$scrollHeight=0,this.$resizeTimeout=null,this.$obs_scroller=null,this.$obs_targets=null,this.$root=i||null,this.$config=null,this.updateConfig(n)}var e,n,i;return e=t,i=[{key:"Name",get:function(){return"v-b-scrollspy"}},{key:"Default",get:function(){return g}},{key:"DefaultType",get:function(){return O}}],(n=[{key:"updateConfig",value:function(t,e){this.$scroller&&(this.unlisten(),this.$scroller=null);var n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(n,!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},this.constructor.Default,{},t);if(e&&(this.$root=e),function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],c=r&&Object(u.o)(r)?"element":(a=r,Object(b.n)(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase());c=r&&r._isVue?"component":c,new RegExp(o).test(c)||Object(l.a)("".concat(t,': Option "').concat(i,'" provided type "').concat(c,'" but expected type "').concat(o,'"'))}var a}(this.constructor.Name,n,this.constructor.DefaultType),this.$config=n,this.$root){var i=this;this.$root.$nextTick((function(){i.listen()}))}else this.listen()}},{key:"dispose",value:function(){this.unlisten(),clearTimeout(this.$resizeTimeout),this.$resizeTimeout=null,this.$el=null,this.$config=null,this.$scroller=null,this.$selector=null,this.$offsets=null,this.$targets=null,this.$activeTarget=null,this.$scrollHeight=null}},{key:"listen",value:function(){var t=this,e=this.getScroller();e&&"BODY"!==e.tagName&&Object(u.f)(e,"scroll",this,T),Object(u.f)(window,"scroll",this,T),Object(u.f)(window,"resize",this,T),Object(u.f)(window,"orientationchange",this,T),w.forEach((function(e){Object(u.f)(window,e,t,T)})),this.setObservers(!0),this.handleEvent("refresh")}},{key:"unlisten",value:function(){var t=this,e=this.getScroller();this.setObservers(!1),e&&"BODY"!==e.tagName&&Object(u.e)(e,"scroll",this,T),Object(u.e)(window,"scroll",this,T),Object(u.e)(window,"resize",this,T),Object(u.e)(window,"orientationchange",this,T),w.forEach((function(e){Object(u.e)(window,e,t,T)}))}},{key:"setObservers",value:function(t){var e=this;this.$obs_scroller&&(this.$obs_scroller.disconnect(),this.$obs_scroller=null),this.$obs_targets&&(this.$obs_targets.disconnect(),this.$obs_targets=null),t&&(this.$obs_targets=Object(s.a)(this.$el,(function(){e.handleEvent("mutation")}),{subtree:!0,childList:!0,attributes:!0,attributeFilter:["href"]}),this.$obs_scroller=Object(s.a)(this.getScroller(),(function(){e.handleEvent("mutation")}),{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:["id","style","class"]}))}},{key:"handleEvent",value:function(t){var e=Object(f.j)(t)?t:t.type,n=this;"scroll"===e?(this.$obs_scroller||this.listen(),this.process()):/(resize|orientationchange|mutation|refresh)/.test(e)&&(n.$resizeTimeout||(n.$resizeTimeout=setTimeout((function(){n.refresh(),n.process(),n.$resizeTimeout=null}),n.$config.throttle)))}},{key:"refresh",value:function(){var t=this,e=this.getScroller();if(e){var n=e!==e.window?y:m,i="auto"===this.$config.method?n:this.$config.method,o=i===y?u.s:u.r,r=i===y?this.getScrollTop():0;return this.$offsets=[],this.$targets=[],this.$scrollHeight=this.getScrollHeight(),Object(u.y)(this.$selector,this.$el).map((function(t){return Object(u.g)(t,"href")})).filter((function(t){return t&&$.test(t||"")})).map((function(t){var n=t.replace($,"$1").trim();if(!n)return null;var i=Object(u.x)(n,e);return i&&Object(u.p)(i)?{offset:parseInt(o(i).top,10)+r,target:n}:null})).filter(Boolean).sort((function(t,e){return t.offset-e.offset})).reduce((function(e,n){return e[n.target]||(t.$offsets.push(n.offset),t.$targets.push(n.target),e[n.target]=!0),e}),{}),this}}},{key:"process",value:function(){var t=this.getScrollTop()+this.$config.offset,e=this.getScrollHeight(),n=this.$config.offset+e-this.getOffsetHeight();if(this.$scrollHeight!==e&&this.refresh(),t>=n){var i=this.$targets[this.$targets.length-1];this.$activeTarget!==i&&this.activate(i)}else{if(this.$activeTarget&&t<this.$offsets[0]&&this.$offsets[0]>0)return this.$activeTarget=null,void this.clear();for(var o=this.$offsets.length;o--;)this.$activeTarget!==this.$targets[o]&&t>=this.$offsets[o]&&(Object(f.k)(this.$offsets[o+1])||t<this.$offsets[o+1])&&this.activate(this.$targets[o])}}},{key:"getScroller",value:function(){if(this.$scroller)return this.$scroller;var t=this.$config.element;return t?(Object(u.o)(t.$el)?t=t.$el:Object(f.j)(t)&&(t=Object(u.x)(t)),t?(this.$scroller="BODY"===t.tagName?window:t,this.$scroller):null):null}},{key:"getScrollTop",value:function(){var t=this.getScroller();return t===window?t.pageYOffset:t.scrollTop}},{key:"getScrollHeight",value:function(){return this.getScroller().scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}},{key:"getOffsetHeight",value:function(){var t=this.getScroller();return t===window?window.innerHeight:Object(u.h)(t).height}},{key:"activate",value:function(t){var e=this;this.$activeTarget=t,this.clear();var n=Object(u.y)(this.$selector.split(",").map((function(e){return"".concat(e,'[href$="').concat(t,'"]')})).join(","),this.$el);n.forEach((function(t){if(Object(u.m)(t,p)){var n=Object(u.c)(j.DROPDOWN,t);n&&e.setActiveState(Object(u.x)(j.DROPDOWN_TOGGLE,n),!0),e.setActiveState(t,!0)}else{e.setActiveState(t,!0),Object(u.q)(t.parentElement,j.NAV_ITEMS)&&e.setActiveState(t.parentElement,!0);for(var i=t;i;){var o=(i=Object(u.c)(j.NAV_LIST_GROUP,i))?i.previousElementSibling:null;o&&Object(u.q)(o,"".concat(j.NAV_LINKS,", ").concat(j.LIST_ITEMS))&&e.setActiveState(o,!0),o&&Object(u.q)(o,j.NAV_ITEMS)&&(e.setActiveState(Object(u.x)(j.NAV_LINKS,o),!0),e.setActiveState(o,!0))}}})),n&&n.length>0&&this.$root&&this.$root.$emit("bv::scrollspy::activate",t,n)}},{key:"clear",value:function(){var t=this;Object(u.y)("".concat(this.$selector,", ").concat(j.NAV_ITEMS),this.$el).filter((function(t){return Object(u.m)(t,_)})).forEach((function(e){return t.setActiveState(e,!1)}))}},{key:"setActiveState",value:function(t,e){t&&(e?Object(u.b)(t,_):Object(u.v)(t,_))}}])&&v(e.prototype,n),i&&v(e,i),t}(),S=n(11),P="__BV_ScrollSpy__",E=function(t,e,n){if(S.j){var i=function(t){var e={};return t.arg&&(e.element="#".concat(t.arg)),Object(b.k)(t.modifiers).forEach((function(t){/^\d+$/.test(t)?e.offset=parseInt(t,10):/^(auto|position|offset)$/.test(t)&&(e.method=t)})),Object(f.j)(t.value)?e.element=t.value:Object(f.g)(t.value)?e.offset=Math.round(t.value):Object(b.i)(t.value)&&Object(b.k)(t.value).filter((function(t){return Boolean(k.DefaultType[t])})).forEach((function(n){e[n]=t.value[n]})),e}(e);t[P]?t[P].updateConfig(i,n.context.$root):t[P]=new k(t,i,n.context.$root)}},V={bind:function(t,e,n){E(t,e,n)},inserted:function(t,e,n){E(t,e,n)},update:function(t,e,n){e.value!==e.oldValue&&E(t,e,n)},componentUpdated:function(t,e,n){e.value!==e.oldValue&&E(t,e,n)},unbind:function(t){!function(t){t[P]&&(t[P].dispose(),t[P]=null,delete t[P])}(t)}},B=Object(i.b)({directives:{VBScrollspy:V}}),N=n(95),I=Object(i.b)({directives:{VBToggle:N.a}}),x=n(133),D=n(57),A=Object(i.b)({directives:{VBVisible:D.a}}),C=Object(i.b)({plugins:{VBModalPlugin:c,VBPopoverPlugin:a.a,VBScrollspyPlugin:B,VBTogglePlugin:I,VBTooltipPlugin:x.a,VBVisiblePlugin:A}}),L={install:Object(i.a)({plugins:{componentsPlugin:o.a,directivesPlugin:C}}),NAME:"BootstrapVue"};e.a=L},57:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var i=n(20),o=n(0),r=n(1),c=n(3);function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var s="__bv__visibility_observer",l=function(){function t(e,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=e,this.callback=n.callback,this.margin=n.margin||0,this.once=n.once||!1,this.observer=null,this.visible=void 0,this.doneOnce=!1,this.createObserver(i)}var e,n,i;return e=t,(n=[{key:"createObserver",value:function(t){var e=this;if(this.observer&&this.stop(),!this.doneOnce&&Object(r.e)(this.callback)){try{this.observer=new IntersectionObserver(this.handler.bind(this),{root:null,rootMargin:this.margin,threshold:0})}catch(t){return this.doneOnce=!0,this.observer=void 0,void this.callback(null)}t.context.$nextTick((function(){Object(o.w)((function(){e.observer&&e.observer.observe(e.el)}))}))}}},{key:"handler",value:function(t){var e=t?t[0]:{},n=Boolean(e.isIntersecting||e.intersectionRatio>0);n!==this.visible&&(this.visible=n,this.callback(n),this.once&&this.visible&&(this.doneOnce=!0,this.stop()))}},{key:"stop",value:function(){var t=this.observer;t&&t.disconnect&&t.disconnect(),this.observer=null}}])&&a(e.prototype,n),i&&a(e,i),t}(),u=function(t){var e=t[s];e&&e.stop&&e.stop(),delete t[s]},f=function(t,e,n){var i=e.value,o=e.modifiers,r={margin:"0px",once:!1,callback:i};Object(c.k)(o).forEach((function(t){/^\d+$/.test(t)?r.margin="".concat(t,"px"):"once"===t.toLowerCase()&&(r.once=!0)})),u(t),t[s]=new l(t,r,n),t[s]._prevModifiers=Object(c.b)(o)},b={bind:f,componentUpdated:function(t,e,n){var o=e.value,r=e.oldValue,a=e.modifiers;a=Object(c.b)(a),!t||o===r&&t[s]&&Object(i.a)(a,t[s]._prevModifiers)||f(t,{value:o,modifiers:a},n)},unbind:function(t){u(t)}}},95:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var i=n(20),o=n(0),r=n(11),c=n(141),a={click:!0},s="__BV_toggle__",l=function(t,e){t[e]=null,delete t[e]},u=function(t){var e=t.targets,n=t.vnode;e.forEach((function(t){n.context.$root.$emit("bv::toggle::collapse",t)}))},f=function(t,e,n){if(r.j){if(!Object(i.a)(Object(c.b)(e),t.__BV_toggle_TARGETS__)){Object(c.c)(n,e,a);var s=Object(c.a)(n,e,a,u);t.__BV_toggle_TARGETS__=s,t.__BV_toggle_CONTROLS__=s.join(" "),Object(o.z)(t,"aria-controls",t.__BV_toggle_CONTROLS__),s.forEach((function(t){n.context.$root.$emit("bv::request::collapse::state",t)}))}!0===t.__BV_toggle_STATE__?(Object(o.b)(t,"collapsed"),Object(o.z)(t,"aria-expanded","true")):!1===t.__BV_toggle_STATE__&&(Object(o.v)(t,"collapsed"),Object(o.z)(t,"aria-expanded","false")),Object(o.z)(t,"aria-controls",t.__BV_toggle_CONTROLS__)}},b={bind:function(t,e,n){var i=Object(c.a)(n,e,a,u);if(r.j&&n.context&&i.length>0){t.__BV_toggle_TARGETS__=i,t.__BV_toggle_CONTROLS__=i.join(" "),t.__BV_toggle_STATE__=!1,Object(o.z)(t,"aria-controls",t.__BV_toggle_CONTROLS__),Object(o.z)(t,"aria-expanded","false"),"BUTTON"===t.tagName||Object(o.l)(t,"role")||Object(o.z)(t,"role","button");t[s]=function(e,n){-1!==(t.__BV_toggle_TARGETS__||[]).indexOf(e)&&(Object(o.z)(t,"aria-expanded",n?"true":"false"),t.__BV_toggle_STATE__=n,n?Object(o.v)(t,"collapsed"):Object(o.b)(t,"collapsed"))},n.context.$root.$on("bv::collapse::state",t[s]),n.context.$root.$on("bv::collapse::sync::state",t[s])}},componentUpdated:f,updated:f,unbind:function(t,e,n){Object(c.c)(n,e,a),t[s]&&(n.context.$root.$off("bv::collapse::state",t[s]),n.context.$root.$off("bv::collapse::sync::state",t[s])),l(t,s),l(t,"__BV_toggle_STATE__"),l(t,"__BV_toggle_CONTROLS__"),l(t,"__BV_toggle_TARGETS__"),Object(o.v)(t,"collapsed"),Object(o.u)(t,"aria-expanded"),Object(o.u)(t,"aria-controls"),Object(o.u)(t,"role")}}}}]);