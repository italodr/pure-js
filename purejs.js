!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("purejs",[],e):"object"==typeof exports?exports.purejs=e():t.purejs=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=12)}([function(t,e,n){"use strict";n.r(e);e.default=function(t){return Number(t)===t}},function(t,e,n){"use strict";n.r(e);var r=n(0);e.default=function(t){if(!Object(r.default)(t)){var e=document.querySelector(t.toString());if(e)return e.offsetTop}return t||0}},function(t,e,n){"use strict";n.r(e);e.default=function(t){return"number"==typeof t&&isNaN(t)}},function(t,e,n){"use strict";function r(){return void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop}n.r(e),n.d(e,"default",(function(){return r}))},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(0),u=n(2),i=function(t,e,n,r){return new(n||(n=Promise))((function(o,u){function i(t){try{a(r.next(t))}catch(t){u(t)}}function c(t){try{a(r.throw(t))}catch(t){u(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}a((r=r.apply(t,e||[])).next())}))},c=function(t,e){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(u){return function(c){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=e.call(t,i)}catch(t){u=[6,t],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}};e.default=function(t,e){return i(this,void 0,void 0,(function(){var n,i,a,f;return c(this,(function(c){switch(c.label){case 0:n=t.offset||0,c.label=1;case 1:if(c.trys.push([1,3,,4]),i=Object(r.default)(t.element),a=i-n,Object(u.default)(a))throw"The element doesn't exists or is not a number";return Object(o.default)(t.element)||window&&"location"in window&&"hash"in window.location&&(window.location.hash=t.element.toString()),[4,window.scrollTo(0,a)];case 2:return c.sent(),e&&e(null,a),[3,4];case 3:throw f=c.sent(),e&&e(f.message,null),f;case 4:return[2]}}))}))}},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(3),u=n(2),i=function(t,e,n,r){return new(n||(n=Promise))((function(o,u){function i(t){try{a(r.next(t))}catch(t){u(t)}}function c(t){try{a(r.throw(t))}catch(t){u(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}a((r=r.apply(t,e||[])).next())}))},c=function(t,e){var n,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(u){return function(c){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=e.call(t,i)}catch(t){u=[6,t],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}};e.default=function(t,e){return i(this,void 0,void 0,(function(){var n,i,a,f,l,s;return c(this,(function(c){n=t.speed||500,i=t.offset||0,a=Object(o.default)(),f=Object(r.default)(t.element),l=f-a-i,20,s=0;try{if(Object(u.default)(l))throw"The element doesn't exists or is not a number";!function t(){var r=function(t,e,n,r){var o=t/(r/2);return o<1?n/2*o*o+e:-n/2*((o-=1)*(o-2)-1)+e}(s+=20,a,l,n);window.scroll(0,r),s<n?setTimeout(t,20):e&&e(null,r)}()}catch(t){throw t}return[2]}))}))}},function(t,e,n){"use strict";n.r(e),e.default=function(t,e,n){var r;return void 0===e&&(e=50),function(){for(var o=[],u=0;u<arguments.length;u++)o[u]=arguments[u];var i=this,c=function(){r=void 0,n||t.apply(i,o)},a=n&&void 0===r;void 0!==r&&clearTimeout(r),r=setTimeout(c,e),a&&t.apply(i,o)}}},function(t,e,n){"use strict";n.r(e),e.default={onDocumentReady:function(t){var e=document.readyState;if("complete"===e||"interactive"===e)return t();document.addEventListener("DOMContentLoaded",(function(){t()}))},onResizeWidth:function(t){var e,n=window.innerWidth;window.addEventListener("resize",(function(){n!==window.innerWidth&&(n=window.innerWidth,e&&clearTimeout(e),e=setTimeout((function(){t(n)}),100))}))}}},function(t,e,n){"use strict";n.r(e),e.default=function(t,e,n){if("[object Object]"===Object.prototype.toString.call(t))for(var r=Object.keys(t),o=0,u=r.length;o<u;o+=1)Object.prototype.hasOwnProperty.call(r,o)&&e.call(n,t[r[o]],r[o],t);else for(o=0,u=t.length;o<u;o+=1)e.call(n,t[o],o,t)}},function(t,e,n){"use strict";n.r(e);e.default=function(){return!!window.MSInputMethodContext&&!!document.documentMode}},function(t,e,n){"use strict";n.r(e);var r=n(3),o=0,u=0;e.default=function(t,e){void 0===t&&(t=10),void 0===e&&(e=10);var n=Object(r.default)()||0;return n<=0?(o=n,u=0):n>o?Math.abs(o-n)>=e&&(o=n,u=1):Math.abs(o-n)>=t&&(o=n,u=-1),u}},function(t,e,n){"use strict";n.r(e),e.default=function(){return!!("ontouchstart"in window||window.navigator.maxTouchPoints>0||window.navigator.msMaxTouchPoints>0)}},function(t,e,n){"use strict";n.r(e);var r=n(4),o=n(5),u=n(6),i=n(1),c=n(7),a=n(8),f=n(9),l=n(0),s=n(2),d=n(3),p=n(10),b=n(11),h={anchorTo:r.default,animateTo:o.default,debounce:u.default,elementOffsetTop:i.default,events:c.default,forEach:a.default,isExplorer:f.default,isInt:l.default,isNan:s.default,safeScrollTop:d.default,scrollDirection:p.default,touchable:b.default};e.default=h}])}));
//# sourceMappingURL=purejs.js.map