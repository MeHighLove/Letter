!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.ecom=n():e.ecom=n()}(window,(function(){return function(e){function n(n){for(var r,u,i=n[0],a=n[1],l=n[2],d=0,s=[];d<i.length;d++)u=i[d],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&s.push(o[u][0]),o[u]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(f&&f(n);s.length;)s.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,i=1;i<t.length;i++){var a=t[i];0!==o[a]&&(r=!1)}r&&(c.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={13:0},c=[];function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="build/";var i=window.webpackJsonpecom=window.webpackJsonpecom||[],a=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var f=a;return c.push([163,0]),t()}({163:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),c=t(22),u=(t(41),t(11)),i=t.n(u),a=t(16),l=t.n(a),f=t(13),d=t.n(f),s=t(14),p=t.n(s),h=t(15),y=t.n(h),v=t(10),w=t.n(v),g=t(8),m=t.n(g),b=t(56),R=t.n(b);function P(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=w()(e);if(n){var o=w()(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return y()(this,t)}}var k=function(e){p()(t,e);var n=P(t);function t(e){var r;return i()(this,t),r=n.call(this,e),m()(d()(r),"successHandler",(function(e){console.log("success",e),r.successCallBack(e)})),m()(d()(r),"errorHandler",(function(e){console.log("error",e),r.errorCallBack(e)})),m()(d()(r),"closeHandler",(function(){"function"==typeof r.closeCallBack&&r.closeCallBack()})),r.child=o.a.createRef(),r}return l()(t,[{key:"checkAndOpen",value:function(e,n,t,r){this.successCallBack=n,this.errorCallBack=t,this.closeCallBack=r,R.a.checkAndOpen(e)}},{key:"openDiscountedRRPopup",value:function(e){this.successCallBack=e,R.a.openDiscountedRRPopup()}},{key:"showResumeGuranteeSection",value:function(){R.a.showResumeGuranteeSection()}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement(R.a,{onSuccess:this.successHandler,onError:this.errorHandler,onClose:this.closeHandler,ref:this.child})}}]),t}(r.Component),O=t(38),C=t.n(O),j={widgetContainer:"app",params:{}},B=null;n.default={config:function(e){B=e||j},payPerFeatureWidget:{new:function(e){var n=C()({prefix:"widget_ns_"}),t=B||e;return window.PPFWidgetRef=o.a.createRef(),{render:function(e){var r=document.createElement("div");if(r.id="payPerFeatureWidget",r.setAttribute("data-id",n),e)var u=0,i=setInterval((function(){document.getElementById(e)?(document.getElementById(e).appendChild(r),Object(c.render)(o.a.createElement(k,{ref:window.PPFWidgetRef,widgetConfig:t}),r),clearInterval(i)):u>=100?(document.body.appendChild(r),Object(c.render)(o.a.createElement(k,{ref:window.PPFWidgetRef,widgetConfig:t}),r),clearInterval(i)):u++}),100);else document.body.appendChild(r),Object(c.render)(o.a.createElement(k,{ref:window.PPFWidgetRef,widgetConfig:t}),r)}}},checkAndOpen:function(e,n,t){window.widgetRef.checkAndOpen(e,n,t)},openDiscountedRRPopup:function(e){window.widgetRef.openDiscountedRRPopup(e)}}}}})}));