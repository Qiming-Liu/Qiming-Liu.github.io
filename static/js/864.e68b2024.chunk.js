/*! For license information please see 864.e68b2024.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkqiming_liu_github_io=self.webpackChunkqiming_liu_github_io||[]).push([[864],{1864:(t,r,n)=>{n.d(r,{tS:()=>Ut,gw:()=>$t,ST:()=>Dt,S3:()=>Ct});var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])},e(t,r)};function u(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}var o=function(){return o=Object.assign||function(t){for(var r,n=1,e=arguments.length;n<e;n++)for(var u in r=arguments[n])Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u]);return t},o.apply(this,arguments)};function i(t,r){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var u=0;for(e=Object.getOwnPropertySymbols(t);u<e.length;u++)r.indexOf(e[u])<0&&Object.prototype.propertyIsEnumerable.call(t,e[u])&&(n[e[u]]=t[e[u]])}return n}function a(){for(var t=0,r=0,n=arguments.length;r<n;r++)t+=arguments[r].length;var e=Array(t),u=0;for(r=0;r<n;r++)for(var o=arguments[r],i=0,a=o.length;i<a;i++,u++)e[u]=o[i];return e}var c=function(t,r){return function(n){return Math.max(Math.min(n,r),t)}},s=function(t){return t%1?Number(t.toFixed(5)):t},f=/(-)?(\d[\d\.]*)/g,p=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,l=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i,h={test:function(t){return"number"===typeof t},parse:parseFloat,transform:function(t){return t}},d=o(o({},h),{transform:c(0,1)}),v=(o(o({},h),{default:1}),function(t){return{test:function(r){return"string"===typeof r&&r.endsWith(t)&&1===r.split(" ").length},parse:parseFloat,transform:function(r){return""+r+t}}}),m=v("deg"),y=v("%"),g=v("px"),b=v("vh"),O=v("vw"),w=(o(o({},y),{parse:function(t){return y.parse(t)/100},transform:function(t){return y.transform(100*t)}}),c(0,255)),M=function(t){return void 0!==t.red},A=function(t){return void 0!==t.hue};var C=function(t){return function(r){if("string"!==typeof r)return r;for(var n={},e=function(t){return function(t){return t.substring(t.indexOf("(")+1,t.lastIndexOf(")"))}(t).replace(/(,|\/)/g," ").split(/ \s*/)}(r),u=0;u<4;u++)n[t[u]]=void 0!==e[u]?parseFloat(e[u]):1;return n}},x=o(o({},h),{transform:function(t){return Math.round(w(t))}});function V(t,r){return t.startsWith(r)&&l.test(t)}var j={test:function(t){return"string"===typeof t?V(t,"rgb"):M(t)},parse:C(["red","green","blue","alpha"]),transform:function(t){var r=t.red,n=t.green,e=t.blue,u=t.alpha,o=void 0===u?1:u;return function(t){var r=t.red,n=t.green,e=t.blue,u=t.alpha;return"rgba("+r+", "+n+", "+e+", "+(void 0===u?1:u)+")"}({red:x.transform(r),green:x.transform(n),blue:x.transform(e),alpha:s(d.transform(o))})}},S={test:function(t){return"string"===typeof t?V(t,"hsl"):A(t)},parse:C(["hue","saturation","lightness","alpha"]),transform:function(t){var r=t.hue,n=t.saturation,e=t.lightness,u=t.alpha,o=void 0===u?1:u;return function(t){var r=t.hue,n=t.saturation,e=t.lightness,u=t.alpha;return"hsla("+r+", "+n+", "+e+", "+(void 0===u?1:u)+")"}({hue:Math.round(r),saturation:y.transform(s(n)),lightness:y.transform(s(e)),alpha:s(d.transform(o))})}},k=o(o({},j),{test:function(t){return"string"===typeof t&&V(t,"#")},parse:function(t){var r="",n="",e="";return t.length>4?(r=t.substr(1,2),n=t.substr(3,2),e=t.substr(5,2)):(r=t.substr(1,1),n=t.substr(2,1),e=t.substr(3,1),r+=r,n+=n,e+=e),{red:parseInt(r,16),green:parseInt(n,16),blue:parseInt(e,16),alpha:1}}}),P={test:function(t){return"string"===typeof t&&l.test(t)||M(t)||A(t)},parse:function(t){return j.test(t)?j.parse(t):S.test(t)?S.parse(t):k.test(t)?k.parse(t):t},transform:function(t){return M(t)?j.transform(t):A(t)?S.transform(t):t}},_="${c}",F="${n}",q=function(t){return"number"===typeof t?0:t},E={test:function(t){if("string"!==typeof t||!isNaN(t))return!1;var r=0,n=t.match(f),e=t.match(p);return n&&(r+=n.length),e&&(r+=e.length),r>0},parse:function(t){var r=t,n=[],e=r.match(p);e&&(r=r.replace(p,_),n.push.apply(n,e.map(P.parse)));var u=r.match(f);return u&&n.push.apply(n,u.map(h.parse)),n},createTransformer:function(t){var r=t,n=0,e=t.match(p),u=e?e.length:0;if(e)for(var o=0;o<u;o++)r=r.replace(e[o],_),n++;var i=r.match(f),a=i?i.length:0;if(i)for(o=0;o<a;o++)r=r.replace(i[o],F),n++;return function(t){for(var e=r,o=0;o<n;o++)e=e.replace(o<u?_:F,o<u?P.transform(t[o]):s(t[o]));return e}},getAnimatableNone:function(t){var r=E.parse(t);return E.createTransformer(t)(r.map(q))}};var X=0,Y="undefined"!==typeof window&&void 0!==window.requestAnimationFrame?function(t){return window.requestAnimationFrame(t)}:function(t){var r=Date.now(),n=Math.max(0,16.7-(r-X));X=r+n,setTimeout((function(){return t(X)}),n)},L=1/60*1e3,N=!0,R=!1,T=!1,D={delta:0,timestamp:0},I=["read","update","preRender","render","postRender"],B=function(t){return R=t},W=I.reduce((function(t,r){return t[r]=function(t){var r=[],n=[],e=0,u=!1,o=0,i=new WeakSet,a=new WeakSet,c={cancel:function(t){var r=n.indexOf(t);i.add(t),-1!==r&&n.splice(r,1)},process:function(s){var f,p;if(u=!0,r=(f=[n,r])[0],(n=f[1]).length=0,e=r.length)for(o=0;o<e;o++)(p=r[o])(s),!0!==a.has(p)||i.has(p)||(c.schedule(p),t(!0));u=!1},schedule:function(t,o,c){void 0===o&&(o=!1),void 0===c&&(c=!1);var s=c&&u,f=s?r:n;i.delete(t),o&&a.add(t),-1===f.indexOf(t)&&(f.push(t),s&&(e=r.length))}};return c}(B),t}),{}),G=I.reduce((function(t,r){var n=W[r];return t[r]=function(t,r,e){return void 0===r&&(r=!1),void 0===e&&(e=!1),R||K(),n.schedule(t,r,e),t},t}),{}),H=I.reduce((function(t,r){return t[r]=W[r].cancel,t}),{}),U=function(t){return W[t].process(D)},$=function(t){R=!1,D.delta=N?L:Math.max(Math.min(t-D.timestamp,40),1),N||(L=D.delta),D.timestamp=t,T=!0,I.forEach(U),T=!1,R&&(N=!1,Y($))},K=function(){R=!0,N=!0,T||Y($)},z=function(){return D};const J=G;var Q=function(t){return"number"===typeof t},Z=function(t){return function(r,n,e){return void 0!==e?t(r,n,e):function(e){return t(r,n,e)}}},tt=Z((function(t,r,n){return Math.min(Math.max(n,t),r)})),rt=function(t,r,n){return-n*t+n*r+t},nt=function(){return nt=Object.assign||function(t){for(var r,n=1,e=arguments.length;n<e;n++)for(var u in r=arguments[n])Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u]);return t},nt.apply(this,arguments)},et=function(t,r,n){var e=t*t,u=r*r;return Math.sqrt(Math.max(0,n*(u-e)+e))},ut=[k,j,S],ot=function(t){return ut.find((function(r){return r.test(t)}))},it=function(t){return"'"+t+"' is not an animatable color. Use the equivalent color code instead."},at=function(t,r){var n=ot(t),e=ot(r);it(t),it(r),n.transform,e.transform;var u=n.parse(t),o=e.parse(r),i=nt({},u),a=n===S?rt:et;return function(t){for(var r in i)"alpha"!==r&&(i[r]=a(u[r],o[r],t));return i.alpha=rt(u.alpha,o.alpha,t),n.transform(i)}},ct=function(t,r){return function(n){return r(t(n))}},st=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return t.reduce(ct)};function ft(t,r){return Q(t)?function(n){return rt(t,r,n)}:P.test(t)?at(t,r):ht(t,r)}var pt=function(t,r){var n=t.slice(),e=n.length,u=t.map((function(t,n){return ft(t,r[n])}));return function(t){for(var r=0;r<e;r++)n[r]=u[r](t);return n}};function lt(t){for(var r=E.parse(t),n=r.length,e=0,u=0,o=0,i=0;i<n;i++)e||"number"===typeof r[i]?e++:void 0!==r[i].hue?o++:u++;return{parsed:r,numNumbers:e,numRGB:u,numHSL:o}}var ht=function(t,r){var n=E.createTransformer(r),e=lt(t),u=lt(r);return e.numHSL===u.numHSL&&e.numRGB===u.numRGB&&(e.numNumbers,u.numNumbers),st(pt(e.parsed,u.parsed),n)};var dt=function(t){return t},vt=function(t){return void 0===t&&(t=dt),Z((function(r,n,e){var u=n-e,o=-(0-r+1)*(0-t(Math.abs(u)));return u<=0?n+o:n-o}))},mt=(vt(),vt(Math.sqrt),function(t,r){return r?t*(1e3/r):0});Z((function(t,r,n){var e=r-t;return((n-t)%e+e)%e+t})),tt(0,1);Math.round;var yt=function(){function t(t){void 0===t&&(t={}),this.props=t}return t.prototype.applyMiddleware=function(t){return this.create(o(o({},this.props),{middleware:this.props.middleware?a([t],this.props.middleware):[t]}))},t.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=1===t.length?t[0]:st.apply(void 0,t);return this.applyMiddleware((function(t){return function(r){return t(n(r))}}))},t.prototype.while=function(t){return this.applyMiddleware((function(r,n){return function(e){return t(e)?r(e):n()}}))},t.prototype.filter=function(t){return this.applyMiddleware((function(r){return function(n){return t(n)&&r(n)}}))},t}(),gt=function(){return function(t,r){var n=this,e=t.middleware,u=t.onComplete;this.isActive=!0,this.update=function(t){n.observer.update&&n.updateObserver(t)},this.complete=function(){n.observer.complete&&n.isActive&&n.observer.complete(),n.onComplete&&n.onComplete(),n.isActive=!1},this.error=function(t){n.observer.error&&n.isActive&&n.observer.error(t),n.isActive=!1},this.observer=r,this.updateObserver=function(t){return r.update(t)},this.onComplete=u,r.update&&e&&e.length&&e.forEach((function(t){return n.updateObserver=t(n.updateObserver,n.complete)}))}}(),bt=function(t,r,n){var e=r.middleware;return new gt({middleware:e,onComplete:n},"function"===typeof t?{update:t}:t)},Ot=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return u(r,t),r.prototype.create=function(t){return new r(t)},r.prototype.start=function(t){void 0===t&&(t={});var r=!1,n={stop:function(){}},e=this.props,u=e.init,a=i(e,["init"]),c=u(bt(t,a,(function(){r=!0,n.stop()})));return n=c?o(o({},n),c):n,t.registerParent&&t.registerParent(n),r&&n.stop(),n},r}(yt),wt=function(t){return new Ot({init:t})},Mt=function(t){function r(){var r=null!==t&&t.apply(this,arguments)||this;return r.subscribers=[],r}return u(r,t),r.prototype.complete=function(){this.subscribers.forEach((function(t){return t.complete()}))},r.prototype.error=function(t){this.subscribers.forEach((function(r){return r.error(t)}))},r.prototype.update=function(t){for(var r=0;r<this.subscribers.length;r++)this.subscribers[r].update(t)},r.prototype.subscribe=function(t){var r=this,n=bt(t,this.props);this.subscribers.push(n);var e={unsubscribe:function(){var t=r.subscribers.indexOf(n);-1!==t&&r.subscribers.splice(t,1)}};return e},r.prototype.stop=function(){this.parent&&this.parent.stop()},r.prototype.registerParent=function(t){this.stop(),this.parent=t},r}(yt),At=function(t){function r(r){var n,e=t.call(this,r)||this;return e.scheduleVelocityCheck=function(){return J.postRender(e.velocityCheck)},e.velocityCheck=function(t){t.timestamp!==e.lastUpdated&&(e.prev=e.current)},e.prev=e.current=r.value||0,!function(t){var r=typeof t;return"string"===r||"number"===r}(e.current)?(n=e.current,Array.isArray(n)?(e.updateCurrent=function(t){return e.current=a(t)},e.getVelocityOfCurrent=function(){return e.getListVelocity()}):(e.updateCurrent=function(t){for(var r in e.current={},t)t.hasOwnProperty(r)&&(e.current[r]=t[r])},e.getVelocityOfCurrent=function(){return e.getMapVelocity()})):(e.updateCurrent=function(t){return e.current=t},e.getVelocityOfCurrent=function(){return e.getSingleVelocity(e.current,e.prev)}),r.initialSubscription&&e.subscribe(r.initialSubscription),e}return u(r,t),r.prototype.create=function(t){return new r(t)},r.prototype.get=function(){return this.current},r.prototype.getVelocity=function(){return this.getVelocityOfCurrent()},r.prototype.update=function(r){t.prototype.update.call(this,r),this.prev=this.current,this.updateCurrent(r);var n=z(),e=n.delta,u=n.timestamp;this.timeDelta=e,this.lastUpdated=u,J.postRender(this.scheduleVelocityCheck)},r.prototype.subscribe=function(r){var n=t.prototype.subscribe.call(this,r);return this.subscribers[this.subscribers.length-1].update(this.current),n},r.prototype.getSingleVelocity=function(t,r){return"number"===typeof t&&"number"===typeof r?mt(t-r,this.timeDelta):mt(parseFloat(t)-parseFloat(r),this.timeDelta)||0},r.prototype.getListVelocity=function(){var t=this;return this.current.map((function(r,n){return t.getSingleVelocity(r,t.prev[n])}))},r.prototype.getMapVelocity=function(){var t={};for(var r in this.current)this.current.hasOwnProperty(r)&&(t[r]=this.getSingleVelocity(this.current[r],this.prev[r]));return t},r}(Mt),Ct=function(t,r){return new At({value:t,initialSubscription:r})},xt=function(t){var r=t.getCount,n=t.getFirst,e=t.getOutput,u=t.mapApi,o=t.setProp,i=t.startActions;return function(t){return wt((function(a){var c=a.update,s=a.complete,f=a.error,p=r(t),l=e(),h=function(){return c(l)},d=0,v=i(t,(function(t,r){var n=!1;return t.start({complete:function(){n||(n=!0,++d===p&&J.update(s))},error:f,update:function(t){o(l,r,t),J.update(h,!1,!0)}})}));return Object.keys(n(v)).reduce((function(t,r){return t[r]=u(v,r),t}),{})}))}},Vt=xt({getOutput:function(){return{}},getCount:function(t){return Object.keys(t).length},getFirst:function(t){return t[Object.keys(t)[0]]},mapApi:function(t,r){return function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return Object.keys(t).reduce((function(e,u){var o;return t[u][r]&&(n[0]&&void 0!==n[0][u]?e[u]=t[u][r](n[0][u]):e[u]=(o=t[u])[r].apply(o,n)),e}),{})}},setProp:function(t,r,n){return t[r]=n},startActions:function(t,r){return Object.keys(t).reduce((function(n,e){return n[e]=r(t[e],e),n}),{})}}),jt=xt({getOutput:function(){return[]},getCount:function(t){return t.length},getFirst:function(t){return t[0]},mapApi:function(t,r){return function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return t.map((function(t,e){if(t[r])return Array.isArray(n[0])?t[r](n[0][e]):t[r].apply(t,n)}))}},setProp:function(t,r,n){return t[r]=n},startActions:function(t,r){return t.map((function(t,n){return r(t,n)}))}}),St=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return jt(t)},kt=[g,y,m,b,O],Pt=function(t){return kt.find((function(r){return r.test(t)}))},_t=function(t,r){return t(r)},Ft=function(t,r,n){var e=n[0],u=r[e].map((function(e,u){var i=n.reduce(function(t){return function(r,n){return r[n]=r[n][t],r}}(u),o({},r));return Rt(e)(t,i)}));return St.apply(void 0,u)},qt=function(t,r,n){var e=n[0],u=Object.keys(r[e]).reduce((function(u,i){var a=n.reduce(function(t){return function(r,n){return r[n]=r[n][t],r}}(i),o({},r));return u[i]=Rt(r[e][i])(t,a),u}),{});return Vt(u)},Et=function(t,r){var n=r.from,e=r.to,u=i(r,["from","to"]),a=Pt(n)||Pt(e),c=a.transform,s=a.parse;return t(o(o({},u),{from:"string"===typeof n?s(n):n,to:"string"===typeof e?s(e):e})).pipe(c)},Xt=function(t){return function(r,n){var e=n.from,u=n.to,a=i(n,["from","to"]);return r(o(o({},a),{from:0,to:1})).pipe(t(e,u))}},Yt=Xt(at),Lt=Xt(ht),Nt=function(t,r){var n=function(t){var r=Object.keys(t),n=function(r,n){return void 0!==r&&!t[n](r)};return{getVectorKeys:function(t){return r.reduce((function(r,e){return n(t[e],e)&&r.push(e),r}),[])},testVectorProps:function(t){return t&&r.some((function(r){return n(t[r],r)}))}}}(r),e=n.testVectorProps,u=n.getVectorKeys;return function(r){if(!e(r))return t(r);var n=u(r),o=r[n[0]];return Rt(o)(t,r,n)}},Rt=function(t){return"number"===typeof t?_t:Array.isArray(t)?Ft:function(t){return Boolean(Pt(t))}(t)?Et:P.test(t)?Yt:E.test(t)?Lt:"object"===typeof t?qt:_t},Tt=function(t){return void 0===t&&(t={}),wt((function(r){var n=r.update,e=r.complete,u=t.velocity,o=void 0===u?0:u,i=t.from,a=void 0===i?0:i,c=t.to,s=void 0===c?0:c,f=t.stiffness,p=void 0===f?100:f,l=t.damping,h=void 0===l?10:l,d=t.mass,v=void 0===d?1:d,m=t.restSpeed,y=void 0===m?.01:m,g=t.restDelta,b=void 0===g?.01:g,O=o?-o/1e3:0,w=0,M=s-a,A=a,C=A,x=J.update((function(t){var r=t.delta;w+=r;var u=h/(2*Math.sqrt(p*v)),i=Math.sqrt(p/v)/1e3;if(C=A,u<1){var a=Math.exp(-u*i*w),c=i*Math.sqrt(1-u*u);A=s-a*((O+u*i*M)/c*Math.sin(c*w)+M*Math.cos(c*w))}else{a=Math.exp(-i*w);A=s-a*(M+(O+i*M)*w)}o=mt(A-C,r);var f=Math.abs(o)<=y,l=Math.abs(s-A)<=b;f&&l?(n(A=s),H.update(x),e()):n(A)}),!0);return{stop:function(){return H.update(x)}}}))},Dt=Nt(Tt,{from:h.test,to:h.test,stiffness:h.test,damping:h.test,mass:h.test,velocity:h.test}),It=function(t,r,n){return wt((function(e){var u=e.update,o=r.split(" ").map((function(r){return t.addEventListener(r,u,n),r}));return{stop:function(){return o.forEach((function(r){return t.removeEventListener(r,u,n)}))}}}))},Bt=function(){return{clientX:0,clientY:0,pageX:0,pageY:0,x:0,y:0}},Wt=function(t,r){return void 0===r&&(r={clientX:0,clientY:0,pageX:0,pageY:0,x:0,y:0}),r.clientX=r.x=t.clientX,r.clientY=r.y=t.clientY,r.pageX=t.pageX,r.pageY=t.pageY,r},Gt=[Bt()];if("undefined"!==typeof document){It(document,"touchstart touchmove",{passive:!0,capture:!0}).start((function(t){var r=t.touches;!0;var n=r.length;Gt.length=0;for(var e=0;e<n;e++){var u=r[e];Gt.push(Wt(u))}}))}var Ht=Bt();if("undefined"!==typeof document){It(document,"mousedown mousemove",!0).start((function(t){!0,Wt(t,Ht)}))}var Ut=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return wt((function(r){var n,e=r.update,u=r.complete,o=0,i=function(){n=t[o].start({complete:function(){++o>=t.length?u():i()},update:e})};return i(),{stop:function(){return n&&n.stop()}}}))},$t=function(t){return wt((function(r){var n=r.complete,e=setTimeout(n,t);return{stop:function(){return clearTimeout(e)}}}))}}}]);
//# sourceMappingURL=864.e68b2024.chunk.js.map