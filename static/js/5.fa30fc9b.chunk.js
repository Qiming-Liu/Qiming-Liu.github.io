/*! For license information please see 5.fa30fc9b.chunk.js.LICENSE.txt */
(this["webpackJsonpqiming-liu.github.io"]=this["webpackJsonpqiming-liu.github.io"]||[]).push([[5,19],{102:function(e,t,r){},30:function(e,t,r){"use strict";r.r(t);r(68);var n=r(0),a=r(32),c=r(80),i=r(4),o=r(8),s=r(6),l=r.n(s),u=(r(91),r(24)),h=(r(12),r(72)),d=r(82),f=r(2),j=r(75),p=r(77),v=(r(102),r(1)),b=["className"],m=["className","light","first","fullHeight","backgroundOverlayOpacity","backgroundElement","children"],g=["className","width"],y=["className","level","as"],O=["className"],w=["center","stretch","justify","width","noMargin","className","centerMobile"];function x(e){var t=e.title,r=e.description,n=e.linkLabel,a=void 0===n?"Visit website":n,c=e.url,i=e.columns,o=e.className;return Object(v.jsx)(d.a,{className:l()("project__header",o),children:Object(v.jsxs)("div",{className:"project__header-content",style:{"--initDelay":Object(f.c)(300)},children:[Object(v.jsxs)("div",{className:"project__details",children:[Object(v.jsx)(j.a,{className:l()("project__title",{"project__title--entered":!h.a}),level:2,as:"h1",children:t}),Object(v.jsx)(p.a,{className:l()("project__description",{"project__description--entered":!h.a}),size:"xl",children:r}),!!c&&Object(v.jsx)(u.a,{secondary:!0,iconHoverShift:!0,className:l()("project__link-button",{"project__link-button--entered":!h.a}),icon:"chevronRight",href:c,children:a})]}),!(null===i||void 0===i||!i.length)&&Object(v.jsx)("ul",{className:"project__meta",children:null===i||void 0===i?void 0:i.map((function(e,t){return Object(v.jsx)("li",{className:l()("project__meta-item",{"project__meta-item--entered":!h.a}),style:{"--delay":Object(f.c)(600+140*t)},children:Object(v.jsx)(p.a,{secondary:!0,as:"span",children:e})},e)}))})]})})}var _=function(e){var t=e.className,r=Object(o.a)(e,b);return Object(v.jsx)("article",Object(i.a)({className:l()("project",t)},r))},N=Object(n.forwardRef)((function(e,t){var r=e.className,n=e.light,a=e.first,c=e.fullHeight,s=e.backgroundOverlayOpacity,u=void 0===s?.9:s,h=e.backgroundElement,f=e.children,j=Object(o.a)(e,m);return Object(v.jsxs)("section",Object(i.a)(Object(i.a)({className:l()("project__section",r,{"project__section--light":n,"project__section--full-height":c}),ref:t},j),{},{children:[!!h&&Object(v.jsx)("div",{className:"project__section-background",style:{"--opacity":u},children:h}),Object(v.jsx)(d.a,{className:l()("project__section-inner",{"project__section-inner--first":a}),children:f})]}))})),L=function(e){var t=e.className,r=e.width,n=void 0===r?"l":r,a=Object(o.a)(e,g);return Object(v.jsx)("div",Object(i.a)({className:l()("project__section-content","project__section-content--width-".concat(n),t)},a))},E=function(e){var t=e.className,r=e.level,n=void 0===r?3:r,a=e.as,c=void 0===a?"h2":a,s=Object(o.a)(e,y);return Object(v.jsx)(j.a,Object(i.a)({className:l()("project__section-heading",t),as:c,level:n,align:"auto"},s))},S=function(e){var t=e.className,r=Object(o.a)(e,O);return Object(v.jsx)(p.a,Object(i.a)({className:l()("project__section-text",t),size:"l"},r))},k=function(e){var t=e.center,r=e.stretch,n=e.justify,a=void 0===n?"center":n,c=e.width,s=void 0===c?"m":c,u=e.noMargin,h=e.className,d=e.centerMobile,f=Object(o.a)(e,w);return Object(v.jsx)("div",Object(i.a)({className:l()("project__text-row","project__text-row--justify-".concat(a),"project__text-row--width-".concat(s),h,{"project__text-row--center":t,"project__text-row--stretch":r,"project__text-row--center-mobile":d,"project__text-row--no-margin":u})},f))},P=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(13)]).then(r.bind(null,43))})),M=["React","Axios","WeatherAPI"];t.default=function(){return Object(v.jsxs)(n.Fragment,{children:[Object(v.jsx)(a.a,{children:Object(v.jsx)("title",{children:"Weather | Qiming Liu"})}),Object(v.jsx)(n.Suspense,{fallback:null,children:Object(v.jsx)(P,{})}),Object(v.jsxs)(_,{className:"weathera",children:[Object(v.jsx)(x,{title:"Weather Web Application",description:"You can input a city name to show the current weather in that city area and the forecast for the upcoming 3 days. I use www.weatherapi.com, which provides a free API to query weather data.",columns:M}),Object(v.jsx)(N,{first:!0}),Object(v.jsx)(N,{children:Object(v.jsx)(L,{children:Object(v.jsxs)(k,{center:!0,centerMobile:!0,noMargin:!0,children:[Object(v.jsx)(E,{children:"Review"}),Object(v.jsx)(S,{children:"What I learned from this project."})]})})})]}),Object(v.jsx)(c.a,{})]})}},68:function(e,t,r){},72:function(e,t,r){"use strict";var n="ReactSnap"===navigator.userAgent;t.a=n},73:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(76);function a(){a=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,c="function"==typeof Symbol?Symbol:{},i=c.iterator||"@@iterator",o=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,c=Object.create(a.prototype),i=new N(n||[]);return c._invoke=function(e,t,r){var n="suspendedStart";return function(a,c){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw c;return E()}for(r.method=a,r.arg=c;;){var i=r.delegate;if(i){var o=w(i,r);if(o){if(o===d)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=h(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,i),c}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var d={};function f(){}function j(){}function p(){}var v={};l(v,i,(function(){return this}));var b=Object.getPrototypeOf,m=b&&b(b(L([])));m&&m!==t&&r.call(m,i)&&(v=m);var g=p.prototype=f.prototype=Object.create(v);function y(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function a(c,i,o,s){var l=h(e[c],e,i);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==Object(n.a)(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){a("next",e,o,s)}),(function(e){a("throw",e,o,s)})):t.resolve(d).then((function(e){u.value=e,o(u)}),(function(e){return a("throw",e,o,s)}))}s(l.arg)}var c;this._invoke=function(e,r){function n(){return new t((function(t,n){a(e,r,t,n)}))}return c=c?c.then(n,n):n()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=h(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,d;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function L(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:E}}function E(){return{value:void 0,done:!0}}return j.prototype=p,l(g,"constructor",p),l(p,"constructor",j),j.displayName=l(p,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,s,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(O.prototype),l(O.prototype,o,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,a,c){void 0===c&&(c=Promise);var i=new O(u(t,r,n,a),c);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(g),l(g,s,"Generator"),l(g,i,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],i=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var o=r.call(c,"catchLoc"),s=r.call(c,"finallyLoc");if(o&&s){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(o){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var c=a;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var i=c?c.completion:{};return i.type=e,i.arg=t,c?(this.method="next",this.next=c.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;_(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}},74:function(e,t,r){"use strict";function n(e,t,r,n,a,c,i){try{var o=e[c](i),s=o.value}catch(l){return void r(l)}o.done?t(s):Promise.resolve(s).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,c){var i=e.apply(t,r);function o(e){n(i,a,c,o,s,"next",e)}function s(e){n(i,a,c,o,s,"throw",e)}o(void 0)}))}}r.d(t,"a",(function(){return a}))},75:function(e,t,r){"use strict";var n=r(4),a=r(8),c=r(0),i=r(6),o=r.n(i),s=r(32),l=r.p+"static/media/gotham-bold.73ce573b.woff2",u=(r(83),r(1)),h=["children","level","as","align","weight","className"];t.a=function(e){var t=e.children,r=e.level,i=void 0===r?1:r,d=e.as,f=e.align,j=void 0===f?"auto":f,p=e.weight,v=void 0===p?"medium":p,b=e.className,m=Object(a.a)(e,h),g=Math.min(Math.max(i,0),4),y=d||"h".concat(Math.max(g,1));return Object(u.jsxs)(c.Fragment,{children:["bold"===v&&Object(u.jsxs)(s.a,{children:[Object(u.jsx)("link",{rel:"preload",href:l,as:"font",crossorigin:""}),Object(u.jsx)("style",{children:"\n              @font-face {\n                font-family: 'Gotham';\n                font-weight: 700;\n                src: url(".concat(l,") format('woff2');\n                font-display: swap;\n              }\n            ")})]}),Object(u.jsx)(y,Object(n.a)(Object(n.a)({className:o()(b,"heading","heading--align-".concat(j),"heading--level-".concat(g),"heading--weight-".concat(v))},m),{},{children:t}))]})}},76:function(e,t,r){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}r.d(t,"a",(function(){return n}))},77:function(e,t,r){"use strict";var n=r(4),a=r(8),c=r(6),i=r.n(c),o=(r(84),r(1)),s=["children","size","as","align","weight","secondary","className"];t.a=function(e){var t=e.children,r=e.size,c=void 0===r?"m":r,l=e.as,u=void 0===l?"p":l,h=e.align,d=void 0===h?"auto":h,f=e.weight,j=void 0===f?"auto":f,p=e.secondary,v=e.className,b=Object(a.a)(e,s);return Object(o.jsx)(u,Object(n.a)(Object(n.a)({className:i()(v,"text","text--align-".concat(d),"text--size-".concat(c),"text--weight-".concat(j),{"text--secondary":p})},b),{},{children:t}))}},80:function(e,t,r){"use strict";r(81);var n=r(1);t.a=function(){return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsx)("span",{className:"footer__date",children:"\xa9 ".concat((new Date).getFullYear()," Qiming Liu")})})}},81:function(e,t,r){},82:function(e,t,r){"use strict";var n=r(4),a=r(8),c=r(0),i=r(6),o=r.n(i),s=(r(93),r(1)),l=["as","children","className"],u=Object(c.forwardRef)((function(e,t){var r=e.as,c=void 0===r?"div":r,i=e.children,u=e.className,h=Object(a.a)(e,l);return Object(s.jsx)(c,Object(n.a)(Object(n.a)({className:o()("section",u),ref:t},h),{},{children:i}))}));t.a=u},83:function(e,t,r){},84:function(e,t,r){},88:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return l}));var n=r(5),a=r(73),c=r(74);function i(e){return o.apply(this,arguments)}function o(){return(o=Object(c.a)(Object(a.a)().mark((function e(t){var r,n,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.src,n=t.srcSet,c=t.sizes,e.abrupt("return",new Promise((function(e,t){try{if(!r&&!n)throw new Error("No image src or srcSet provided");var a=new Image;r&&(a.src=r),n&&(a.srcset=n),c&&(a.sizes=c);a.addEventListener("load",(function t(){a.removeEventListener("load",t);var r=a.currentSrc;e(r)}))}catch(i){t("Error loading ".concat(n,": ").concat(i))}})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=document.createElement("canvas"),n=r.getContext("2d");r.width=e,r.height=t,n.fillStyle="rgba(0, 0, 0, 0)",n.fillRect(0,0,e,t);var a=r.toDataURL("image/png","");return r.remove(),a}function l(e){return u.apply(this,arguments)}function u(){return(u=Object(c.a)(Object(a.a)().mark((function e(t){var r,c,o,l;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.split(", ").map((function(e){var t=e.split(" "),r=Object(n.a)(t,2),a=r[0],c=r[1];return{src:a,image:s(Number(c.replace("w",""))),width:c}})),c=r.map((function(e){var t=e.image,r=e.width;return"".concat(t," ").concat(r)})).join(", "),e.next=4,i({srcSet:c});case 4:return o=e.sent,l=r.find((function(e){return e.image===o})),e.abrupt("return",l.src);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},91:function(e,t,r){"use strict";var n=r(73),a=r(74),c=r(4),i=r(5),o=r(8),s=r(0),l=r(6),u=r.n(l),h=r(12),d=r(24),f=r(15),j=r(70),p=r(22),v=r(72),b=r(10),m=r(2),g=r(88),y=r(33),O=r(23),w=(r(92),r(1)),x=["className","style","reveal","delay","raised","src"],_=["onLoad","loaded","inViewport","srcSet","placeholder","delay","src","alt","play","reveal"],N=function(e){var t=e.onLoad,r=e.loaded,l=e.inViewport,y=e.srcSet,x=e.placeholder,N=e.delay,L=e.src,E=e.alt,S=e.play,k=void 0===S||S,P=e.reveal,M=Object(o.a)(e,_),R=Object(h.g)(),F=Object(s.useState)(!0),I=Object(i.a)(F,2),G=I[0],z=I[1],A=Object(s.useState)(!R),W=Object(i.a)(A,2),T=W[0],D=W[1],V=Object(s.useState)(!1),Y=Object(i.a)(V,2),q=Y[0],C=Y[1],H=Object(s.useState)(!1),J=Object(i.a)(H,2),Q=J[0],B=J[1],U=Object(s.useState)(!1),K=Object(i.a)(U,2),X=K[0],Z=K[1],$=Object(s.useState)(),ee=Object(i.a)($,2),te=ee[0],re=ee[1],ne=Object(s.useState)(),ae=Object(i.a)(ne,2),ce=ae[0],ie=ae[1],oe=Object(s.useRef)(),se=Object(s.useRef)(),le=null===L||void 0===L?void 0:L.endsWith(".mp4"),ue=L||(null===y||void 0===y?void 0:y.split(" ")[0]),he=!v.a&&l;Object(s.useEffect)((function(){var e=function(){z(!1)},t=oe.current;return t.addEventListener("transitionend",e),function(){t&&t.removeEventListener("transitionend",e)}}),[]),Object(s.useEffect)((function(){var e=function(){var e=Object(a.a)(Object(n.a)().mark((function e(){var t;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.b)(y);case 2:t=e.sent,ie(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();le&&y?e():le&&ie(L)}),[le,L,y]),Object(s.useEffect)((function(){var e=oe.current,t=e.width,r=e.height;t&&r&&re({width:t,height:r})}),[]),Object(s.useEffect)((function(){se.current&&ce&&(k&&l?!l||R||v.a||(D(!0),se.current.play()):(D(!1),se.current.pause()))}),[l,k,R,ce]);var de=function(e){e.preventDefault(),se.current.paused?(D(!0),se.current.play()):(D(!1),se.current.pause())},fe=function(){C(!0),Z(!0)};return Object(w.jsxs)("div",{className:u()("image__element-wrapper",{"image__element-wrapper--reveal":P,"image__element-wrapper--in-viewport":l}),onMouseOver:le?function(){C(!0),B(!0)}:void 0,onMouseOut:le?function(){return B(!1)}:void 0,style:{"--delay":Object(m.c)(N+1e3)},children:[le&&Object(w.jsxs)(s.Fragment,{children:[Object(w.jsx)("video",Object(c.a)({muted:!0,loop:!0,playsInline:!0,className:u()("image__element",{"image__element--loaded":r}),autoPlay:!R,role:"img",onLoadStart:t,src:ce,"aria-label":E,ref:se},M)),Object(w.jsx)(j.a,{in:Q||X,onExit:p.b,onExited:function(){return C(!1)},timeout:{enter:0,exit:Object(m.b)(b.b.base.durationS)},children:function(e){return Object(w.jsx)(O.a,{visible:q,children:Object(w.jsxs)(d.a,{className:u()("image__button","image__button--".concat(e)),onFocus:fe,onBlur:function(){return Z(!1)},onClick:de,children:[Object(w.jsx)(f.a,{icon:T?"pause":"play"}),T?"Pause":"Play"]})})}})]}),!le&&Object(w.jsx)("img",Object(c.a)({className:u()("image__element",{"image__element--loaded":r}),onLoad:t,decoding:"async",src:he?ue:void 0,srcSet:he?y:void 0,width:null===te||void 0===te?void 0:te.width,height:null===te||void 0===te?void 0:te.height,alt:E},M)),G&&Object(w.jsx)("img",{"aria-hidden":!0,className:u()("image__placeholder",{"image__placeholder--loaded":r}),style:{"--delay":Object(m.c)(N)},ref:oe,src:x,onLoad:function(e){var t=e.target,r=t.width,n=t.height;re({width:r,height:n})},width:null===te||void 0===te?void 0:te.width,height:null===te||void 0===te?void 0:te.height,decoding:"async",alt:"",role:"presentation"})]})};t.a=function(e){var t=e.className,r=e.style,n=e.reveal,a=e.delay,l=void 0===a?0:a,d=e.raised,f=e.src,j=Object(o.a)(e,x),p=Object(s.useState)(!1),v=Object(i.a)(p,2),b=v[0],g=v[1],O=Object(y.c)().themeId,_=Object(s.useRef)(),L=Object(h.c)(_,!(null!==f&&void 0!==f&&f.endsWith(".mp4"))),E=Object(s.useCallback)((function(){g(!0)}),[]);return Object(w.jsx)("div",{className:u()("image",t,"image--".concat(O),{"image--in-viewport":L,"image--reveal":n,"image--raised":d}),style:Object(c.a)(Object(c.a)({},r),{},{"--delay":Object(m.c)(l)}),ref:_,children:Object(w.jsx)(N,Object(c.a)({delay:l,onLoad:E,loaded:b,inViewport:L,reveal:n,src:f},j))})}},92:function(e,t,r){},93:function(e,t,r){}}]);
//# sourceMappingURL=5.fa30fc9b.chunk.js.map