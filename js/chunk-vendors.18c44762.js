(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(e,t,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},"01b4":function(e,t){var n=function(){this.head=null,this.tail=null};n.prototype={add:function(e){var t={item:e,next:null};this.head?this.tail.next=t:this.head=t,this.tail=t},get:function(){var e=this.head;if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}},e.exports=n},"0366":function(e,t,n){var r=n("e330"),i=n("59ed"),o=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:o?o(e,t):function(){return e.apply(t,arguments)}}},"06cf":function(e,t,n){var r=n("83ab"),i=n("c65b"),o=n("d1e7"),s=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),d=Object.getOwnPropertyDescriptor;t.f=r?d:function(e,t){if(e=a(e),t=c(t),l)try{return d(e,t)}catch(n){}if(u(e,t))return s(!i(o.f,e,t),e[t])}},"07fa":function(e,t,n){var r=n("50c4");e.exports=function(e){return r(e.length)}},"0cfb":function(e,t,n){var r=n("83ab"),i=n("d039"),o=n("cc12");e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t,n){var r=n("da84"),i=r.String;e.exports=function(e){try{return i(e)}catch(t){return"Object"}}},1626:function(e,t){e.exports=function(e){return"function"==typeof e}},"19aa":function(e,t,n){var r=n("da84"),i=n("3a9b"),o=r.TypeError;e.exports=function(e,t){if(i(t,e))return e;throw o("Incorrect invocation")}},"1a2d":function(e,t,n){var r=n("e330"),i=n("7b0b"),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c7e":function(e,t,n){var r=n("b622"),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(e,t,n){var r=n("da84"),i=r.TypeError;e.exports=function(e){if(void 0==e)throw i("Can't call method on "+e);return e}},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("d3b7");function r(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){r(s,i,o,a,c,"next",e)}function c(e){r(s,i,o,a,c,"throw",e)}a(void 0)}))}}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return j})),n.d(t,"f",(function(){return y})),n.d(t,"g",(function(){return I})),n.d(t,"h",(function(){return S})),n.d(t,"i",(function(){return c})),n.d(t,"j",(function(){return l})),n.d(t,"k",(function(){return b})),n.d(t,"l",(function(){return f})),n.d(t,"m",(function(){return u})),n.d(t,"n",(function(){return d})),n.d(t,"o",(function(){return w})),n.d(t,"p",(function(){return O}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let d=(15&s)<<2|c>>6,f=63&c;a||(f=64,o||(d=64)),r.push(n[u],n[l],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==c||null==l)throw Error();const d=t<<2|s>>4;if(r.push(d),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function u(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c())}function l(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function d(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function f(){const e=c();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const h="FirebaseError";class p extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=h,Object.setPrototypeOf(this,p.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,m.prototype.create)}}class m{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?v(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new p(r,s,n);return a}}function v(e,t){return e.replace(g,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const g=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function y(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(_(n)&&_(o)){if(!y(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function O(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function I(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){const n=new E(e,t);return n.subscribe.bind(n)}class E{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=k(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=T),void 0===r.error&&(r.error=T),void 0===r.complete&&(r.complete=T);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function k(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function T(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function S(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},2266:function(e,t,n){var r=n("da84"),i=n("0366"),o=n("c65b"),s=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),d=n("9a1f"),f=n("35a1"),h=n("2a62"),p=r.TypeError,m=function(e,t){this.stopped=e,this.result=t},v=m.prototype;e.exports=function(e,t,n){var r,g,b,y,_,w,O,I=n&&n.that,j=!(!n||!n.AS_ENTRIES),E=!(!n||!n.IS_ITERATOR),k=!(!n||!n.INTERRUPTED),T=i(t,I),S=function(e){return r&&h(r,"normal",e),new m(!0,e)},x=function(e){return j?(s(e),k?T(e[0],e[1],S):T(e[0],e[1])):k?T(e,S):T(e)};if(E)r=e;else{if(g=f(e),!g)throw p(a(e)+" is not iterable");if(c(g)){for(b=0,y=u(e);y>b;b++)if(_=x(e[b]),_&&l(v,_))return _;return new m(!1)}r=d(e,g)}w=r.next;while(!(O=o(w,r)).done){try{_=x(O.value)}catch(C){h(r,"throw",C)}if("object"==typeof _&&_&&l(v,_))return _}return new m(!1)}},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n("1fd5");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){var r=n("5926"),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},"23e7":function(e,t,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,d,f,h,p,m=e.target,v=e.global,g=e.stat;if(l=v?r:g?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(d in t){if(h=t[d],e.noTargetGet?(p=i(l,d),f=p&&p.value):f=l[d],n=u(v?d:m+(g?".":"#")+d,e.forced),!n&&void 0!==f){if(typeof h==typeof f)continue;c(h,f)}(e.sham||f&&f.sham)&&o(h,"sham",!0),s(l,d,h,e)}}},"241c":function(e,t,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},"260b":function(e,t,n){"use strict";var r=n("589b");n.d(t,"a",(function(){return r["e"]}));var i="firebase",o="9.6.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["f"])(i,o,"app")},2626:function(e,t,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),s=n("83ab"),a=o("species");e.exports=function(e){var t=r(e),n=i.f;s&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},"2a62":function(e,t,n){var r=n("c65b"),i=n("825a"),o=n("dc4a");e.exports=function(e,t,n){var s,a;i(e);try{if(s=o(e,"return"),!s){if("throw"===t)throw n;return n}s=r(s,e)}catch(c){a=!0,s=c}if("throw"===t)throw n;if(a)throw s;return i(s),n}},"2ba4":function(e,t){var n=Function.prototype,r=n.apply,i=n.bind,o=n.call;e.exports="object"==typeof Reflect&&Reflect.apply||(i?o.bind(r):function(){return o.apply(r,arguments)})},"2cf4":function(e,t,n){var r,i,o,s,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),d=n("1a2d"),f=n("d039"),h=n("1be4"),p=n("f36a"),m=n("cc12"),v=n("1cdc"),g=n("605d"),b=a.setImmediate,y=a.clearImmediate,_=a.process,w=a.Dispatch,O=a.Function,I=a.MessageChannel,j=a.String,E=0,k={},T="onreadystatechange";try{r=a.location}catch(R){}var S=function(e){if(d(k,e)){var t=k[e];delete k[e],t()}},x=function(e){return function(){S(e)}},C=function(e){S(e.data)},A=function(e){a.postMessage(j(e),r.protocol+"//"+r.host)};b&&y||(b=function(e){var t=p(arguments,1);return k[++E]=function(){c(l(e)?e:O(e),void 0,t)},i(E),E},y=function(e){delete k[e]},g?i=function(e){_.nextTick(x(e))}:w&&w.now?i=function(e){w.now(x(e))}:I&&!v?(o=new I,s=o.port2,o.port1.onmessage=C,i=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!f(A)?(i=A,a.addEventListener("message",C,!1)):i=T in m("script")?function(e){h.appendChild(m("script"))[T]=function(){h.removeChild(this),S(e)}}:function(e){setTimeout(x(e),0)}),e.exports={set:b,clear:y}},"2d00":function(e,t,n){var r,i,o=n("da84"),s=n("342f"),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},"35a1":function(e,t,n){var r=n("f5df"),i=n("dc4a"),o=n("3f8c"),s=n("b622"),a=s("iterator");e.exports=function(e){if(void 0!=e)return i(e,a)||i(e,"@@iterator")||o[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),i=n("aed9"),o=n("9bf2"),s=n("825a"),a=n("fc6a"),c=n("df75");t.f=r&&!i?Object.defineProperties:function(e,t){s(e);var n,r=a(t),i=c(t),u=i.length,l=0;while(u>l)o.f(e,n=i[l++],r[n]);return e}},"3a9b":function(e,t,n){var r=n("e330");e.exports=r({}.isPrototypeOf)},"3bbe":function(e,t,n){var r=n("da84"),i=n("1626"),o=r.String,s=r.TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw s("Can't set "+o(e)+" as a prototype")}},"3ca3":function(e,t,n){"use strict";var r=n("6547").charAt,i=n("577e"),o=n("69f3"),s=n("7dd0"),a="String Iterator",c=o.set,u=o.getterFor(a);s(String,"String",(function(e){c(this,{type:a,string:i(e),index:0})}),(function(){var e,t=u(this),n=t.string,i=t.index;return i>=n.length?{value:void 0,done:!0}:(e=r(n,i),t.index+=e.length,{value:e,done:!1})}))},"3f4e":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("abc5");const i="devtools-plugin:setup",o="plugin:settings:set";class s{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const o in e.settings){const t=e.settings[o];n[o]=t.defaultValue}const r="__vue-devtools-plugin-settings__"+e.id;let i=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(i,t)}catch(s){}this.fallbacks={getSettings(){return i},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(s){}i=e}},t&&t.on(o,(e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)}),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise(n=>{this.targetQueue.push({method:t,args:e,resolve:n})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function a(e,t){const n=Object(r["b"])(),o=Object(r["a"])(),a=r["c"]&&e.enableEarlyProxy;if(!o||!n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&a){const r=a?new s(e,o):null,i=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:e,setupFn:t,proxy:r}),r&&t(r.proxiedTarget)}else o.emit(i,e,t)}},"3f8c":function(e,t){e.exports={}},"44ad":function(e,t,n){var r=n("da84"),i=n("e330"),o=n("d039"),s=n("c6b6"),a=r.Object,c=i("".split);e.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?c(e,""):a(e)}:a},"44d2":function(e,t,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),e.exports=function(e){a[s][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1==arguments.length?n.error(e):n.error(e,t))}},4840:function(e,t,n){var r=n("825a"),i=n("5087"),o=n("b622"),s=o("species");e.exports=function(e,t){var n,o=r(e).constructor;return void 0===o||void 0==(n=r(o)[s])?t:i(n)}},"485a":function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("1626"),s=n("861d"),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&o(n=e.toString)&&!s(r=i(n,e)))return r;if(o(n=e.valueOf)&&!s(r=i(n,e)))return r;if("string"!==t&&o(n=e.toString)&&!s(r=i(n,e)))return r;throw a("Can't convert object to primitive value")}},4930:function(e,t,n){var r=n("2d00"),i=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(e,t,n){var r=n("fc6a"),i=n("23cb"),o=n("07fa"),s=function(e){return function(t,n,s){var a,c=r(t),u=o(c),l=i(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},5087:function(e,t,n){var r=n("da84"),i=n("68ee"),o=n("0d51"),s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not a constructor")}},"50c4":function(e,t,n){var r=n("5926"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},5502:function(e,t,n){"use strict";n.d(t,"a",(function(){return X})),n.d(t,"b",(function(){return s}));var r=n("7a23"),i=n("3f4e"),o="store";function s(e){return void 0===e&&(e=null),Object(r["l"])(null!==e?e:o)}function a(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function c(e){return null!==e&&"object"===typeof e}function u(e){return e&&"function"===typeof e.then}function l(e,t){if(!e)throw new Error("[vuex] "+t)}function d(e,t){return function(){return e(t)}}function f(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function h(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;m(e,n,[],e._modules.root,!0),p(e,n,t)}function p(e,t,n){var i=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var o=e._wrappedGetters,s={};a(o,(function(t,n){s[n]=d(t,e),Object.defineProperty(e.getters,n,{get:function(){return s[n]()},enumerable:!0})})),e._state=Object(r["t"])({data:t}),e.strict&&w(e),i&&n&&e._withCommit((function(){i.data=null}))}function m(e,t,n,r,i){var o=!n.length,s=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[s]&&console.error("[vuex] duplicate namespace "+s+" for the namespaced module "+n.join("/")),e._modulesNamespaceMap[s]=r),!o&&!i){var a=O(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=r.state}))}var u=r.context=v(e,s,n);r.forEachMutation((function(t,n){var r=s+n;b(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:s+n,i=t.handler||t;y(e,r,i,u)})),r.forEachGetter((function(t,n){var r=s+n;_(e,r,t,u)})),r.forEachChild((function(r,o){m(e,t,n.concat(o),r,i)}))}function v(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var o=I(n,r,i),s=o.payload,a=o.options,c=o.type;if(a&&a.root||(c=t+c,e._actions[c]))return e.dispatch(c,s);console.error("[vuex] unknown local action type: "+o.type+", global type: "+c)},commit:r?e.commit:function(n,r,i){var o=I(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=t+c,e._mutations[c])?e.commit(c,s,a):console.error("[vuex] unknown local mutation type: "+o.type+", global type: "+c)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return g(e,t)}},state:{get:function(){return O(e.state,n)}}}),i}function g(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function b(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function y(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return u(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function _(e,t,n,r){e._wrappedGetters[t]?console.error("[vuex] duplicate getter key: "+t):e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)}}function w(e){Object(r["z"])((function(){return e._state.data}),(function(){l(e._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function O(e,t){return t.reduce((function(e,t){return e[t]}),e)}function I(e,t,n){return c(e)&&e.type&&(n=t,t=e,e=e.type),l("string"===typeof e,"expects string as the type, but found "+typeof e+"."),{type:e,payload:t,options:n}}var j="vuex bindings",E="vuex:mutations",k="vuex:actions",T="vuex",S=0;function x(e,t){Object(i["a"])({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[j]},(function(n){n.addTimelineLayer({id:E,label:"Vuex Mutations",color:C}),n.addTimelineLayer({id:k,label:"Vuex Actions",color:C}),n.addInspector({id:T,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===T)if(n.filter){var r=[];M(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[N(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===T){var r=n.nodeId;g(t,r),n.state=D(F(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===T){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit((function(){n.set(t._state.data,i,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(T),n.sendInspectorState(T),n.addTimelineEvent({layerId:E,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=S++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:k,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},i=Date.now()-e._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:k,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var C=8702998,A=6710886,R=16777215,P={label:"namespaced",textColor:R,backgroundColor:A};function L(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function N(e,t){return{id:t||"root",label:L(t),tags:e.namespaced?[P]:[],children:Object.keys(e._children).map((function(n){return N(e._children[n],t+n+"/")}))}}function M(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[P]:[]}),Object.keys(t._children).forEach((function(i){M(e,t._children[i],n,r+i+"/")}))}function D(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var o=U(t);i.getters=Object.keys(o).map((function(e){return{key:e.endsWith("/")?L(e):e,editable:!1,value:V((function(){return o[e]}))}}))}return i}function U(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var i=t,o=r.pop();r.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[o]=V((function(){return e[n]}))}else t[n]=V((function(){return e[n]}))})),t}function F(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,i){var o=e[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+t+'".');return i===n.length-1?o:o._children}),"root"===t?e:e.root._children)}function V(e){try{return e()}catch(t){return t}}var $=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},B={namespaced:{configurable:!0}};B.namespaced.get=function(){return!!this._rawModule.namespaced},$.prototype.addChild=function(e,t){this._children[e]=t},$.prototype.removeChild=function(e){delete this._children[e]},$.prototype.getChild=function(e){return this._children[e]},$.prototype.hasChild=function(e){return e in this._children},$.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},$.prototype.forEachChild=function(e){a(this._children,e)},$.prototype.forEachGetter=function(e){this._rawModule.getters&&a(this._rawModule.getters,e)},$.prototype.forEachAction=function(e){this._rawModule.actions&&a(this._rawModule.actions,e)},$.prototype.forEachMutation=function(e){this._rawModule.mutations&&a(this._rawModule.mutations,e)},Object.defineProperties($.prototype,B);var z=function(e){this.register([],e,!1)};function G(e,t,n){if(K(e,n),t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");G(e.concat(r),t.getChild(r),n.modules[r])}}z.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},z.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},z.prototype.update=function(e){G([],this.root,e)},z.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0),K(e,t);var i=new $(t,n);if(0===e.length)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}t.modules&&a(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},z.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r?r.runtime&&t.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},z.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var H={assert:function(e){return"function"===typeof e},expected:"function"},W={assert:function(e){return"function"===typeof e||"object"===typeof e&&"function"===typeof e.handler},expected:'function or object with "handler" function'},q={getters:H,mutations:H,actions:W};function K(e,t){Object.keys(q).forEach((function(n){if(t[n]){var r=q[n];a(t[n],(function(t,i){l(r.assert(t),J(e,n,i,t,r.expected))}))}}))}function J(e,t,n,r,i){var o=t+" should be "+i+' but "'+t+"."+n+'"';return e.length>0&&(o+=' in module "'+e.join(".")+'"'),o+=" is "+JSON.stringify(r)+".",o}function X(e){return new Y(e)}var Y=function e(t){var n=this;void 0===t&&(t={}),l("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),l(this instanceof e,"store must be called with the new operator.");var r=t.plugins;void 0===r&&(r=[]);var i=t.strict;void 0===i&&(i=!1);var o=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new z(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=o;var s=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(e,t){return c.call(s,e,t)},this.commit=function(e,t,n){return u.call(s,e,t,n)},this.strict=i;var d=this._modules.root.state;m(this,d,[],this._modules.root),p(this,d),r.forEach((function(e){return e(n)}))},Q={state:{configurable:!0}};Y.prototype.install=function(e,t){e.provide(t||o,this),e.config.globalProperties.$store=this;var n=void 0===this._devtools||this._devtools;n&&x(e,this)},Q.state.get=function(){return this._state.data},Q.state.set=function(e){l(!1,"use store.replaceState() to explicit replace store state.")},Y.prototype.commit=function(e,t,n){var r=this,i=I(e,t,n),o=i.type,s=i.payload,a=i.options,c={type:o,payload:s},u=this._mutations[o];u?(this._withCommit((function(){u.forEach((function(e){e(s)}))})),this._subscribers.slice().forEach((function(e){return e(c,r.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+o+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+o)},Y.prototype.dispatch=function(e,t){var n=this,r=I(e,t),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(s,n.state)}))}catch(u){console.warn("[vuex] error in before action subscribers: "),console.error(u)}var c=a.length>1?Promise.all(a.map((function(e){return e(o)}))):a[0](o);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(s,n.state)}))}catch(u){console.warn("[vuex] error in after action subscribers: "),console.error(u)}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(s,n.state,e)}))}catch(u){console.warn("[vuex] error in error action subscribers: "),console.error(u)}t(e)}))}))}console.error("[vuex] unknown action type: "+i)},Y.prototype.subscribe=function(e,t){return f(e,this._subscribers,t)},Y.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return f(n,this._actionSubscribers,t)},Y.prototype.watch=function(e,t,n){var i=this;return l("function"===typeof e,"store.watch only accepts a function."),Object(r["z"])((function(){return e(i.state,i.getters)}),t,Object.assign({},n))},Y.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},Y.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),l(e.length>0,"cannot register the root module by using registerModule."),this._modules.register(e,t),m(this,this.state,e,this._modules.get(e),n.preserveState),p(this,this.state)},Y.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),this._modules.unregister(e),this._withCommit((function(){var n=O(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),h(this)},Y.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),l(Array.isArray(e),"module path must be a string or an Array."),this._modules.isRegistered(e)},Y.prototype.hotUpdate=function(e){this._modules.update(e),h(this,!0)},Y.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(Y.prototype,Q);te((function(e,t){var n={};return ee(t)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),Z(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=ne(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),te((function(e,t){var n={};return ee(t)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),Z(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var o=ne(this.$store,"mapMutations",e);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),te((function(e,t){var n={};return ee(t)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),Z(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||ne(this.$store,"mapGetters",e)){if(i in this.$store.getters)return this.$store.getters[i];console.error("[vuex] unknown getter: "+i)}},n[r].vuex=!0})),n})),te((function(e,t){var n={};return ee(t)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),Z(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var o=ne(this.$store,"mapActions",e);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n}));function Z(e){return ee(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function ee(e){return Array.isArray(e)||c(e)}function te(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function ne(e,t,n){var r=e._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+t+"(): "+n),r}},5692:function(e,t,n){var r=n("c430"),i=n("c6cd");(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.20.2",mode:r?"pure":"global",copyright:"© 2022 Denis Pushkarev (zloirock.ru)"})},"56ef":function(e,t,n){var r=n("d066"),i=n("e330"),o=n("241c"),s=n("7418"),a=n("825a"),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},"577e":function(e,t,n){var r=n("da84"),i=n("f5df"),o=r.String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},"589b":function(e,t,n){"use strict";n.d(t,"a",(function(){return W})),n.d(t,"b",(function(){return B})),n.d(t,"c",(function(){return $})),n.d(t,"d",(function(){return K})),n.d(t,"e",(function(){return q})),n.d(t,"f",(function(){return J}));var r=n("22e5"),i=n("e691"),o=n("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.13",l=new i["b"]("@firebase/app"),d="@firebase/app-compat",f="@firebase/analytics-compat",h="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",v="@firebase/auth",g="@firebase/auth-compat",b="@firebase/database",y="@firebase/database-compat",_="@firebase/functions",w="@firebase/functions-compat",O="@firebase/installations",I="@firebase/installations-compat",j="@firebase/messaging",E="@firebase/messaging-compat",k="@firebase/performance",T="@firebase/performance-compat",S="@firebase/remote-config",x="@firebase/remote-config-compat",C="@firebase/storage",A="@firebase/storage-compat",R="@firebase/firestore",P="@firebase/firestore-compat",L="firebase",N="9.6.3",M="[DEFAULT]",D={[c]:"fire-core",[d]:"fire-core-compat",[h]:"fire-analytics",[f]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[v]:"fire-auth",[g]:"fire-auth-compat",[b]:"fire-rtdb",[y]:"fire-rtdb-compat",[_]:"fire-fn",[w]:"fire-fn-compat",[O]:"fire-iid",[I]:"fire-iid-compat",[j]:"fire-fcm",[E]:"fire-fcm-compat",[k]:"fire-perf",[T]:"fire-perf-compat",[S]:"fire-rc",[x]:"fire-rc-compat",[C]:"fire-gcs",[A]:"fire-gcs-compat",[R]:"fire-fst",[P]:"fire-fst-compat","fire-js":"fire-js",[L]:"fire-js-all"},U=new Map,F=new Map;function V(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function $(e){const t=e.name;if(F.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;F.set(t,e);for(const n of U.values())V(n,e);return!0}function B(e,t){return e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const z={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},G=new o["b"]("app","Firebase",z);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=N;function q(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw G.create("bad-app-name",{appName:String(i)});const s=U.get(i);if(s){if(Object(o["f"])(e,s.options)&&Object(o["f"])(n,s.config))return s;throw G.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of F.values())a.addComponent(r);const c=new H(e,n,a);return U.set(i,c),c}function K(e=M){const t=U.get(e);if(!t)throw G.create("no-app",{appName:e});return t}function J(e,t,n){var i;let o=null!==(i=D[e])&&void 0!==i?i:e;n&&(o+="-"+n);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}$(new r["a"](o+"-version",()=>({library:o,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(e){$(new r["a"]("platform-logger",e=>new s(e),"PRIVATE")),J(c,u,e),J(c,u,"esm2017"),J("fire-js","")}X("")},5926:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?r:n)(t)}},"59ed":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("0d51"),s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not a function")}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){var r=n("83ab"),i=n("1a2d"),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(e,t,n){var r=n("c6b6"),i=n("da84");e.exports="process"==r(i.process)},6069:function(e,t){e.exports="object"==typeof window},"60da":function(e,t,n){"use strict";var r=n("83ab"),i=n("e330"),o=n("c65b"),s=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),d=n("44ad"),f=Object.assign,h=Object.defineProperty,p=i([].concat);e.exports=!f||s((function(){if(r&&1!==f({b:1},f(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=f({},e)[n]||a(f({},t)).join("")!=i}))?function(e,t){var n=l(e),i=arguments.length,s=1,f=c.f,h=u.f;while(i>s){var m,v=d(arguments[s++]),g=f?p(a(v),f(v)):a(v),b=g.length,y=0;while(b>y)m=g[y++],r&&!o(h,v,m)||(n[m]=v[m])}return n}:f},6547:function(e,t,n){var r=n("e330"),i=n("5926"),o=n("577e"),s=n("1d80"),a=r("".charAt),c=r("".charCodeAt),u=r("".slice),l=function(e){return function(t,n){var r,l,d=o(s(t)),f=i(n),h=d.length;return f<0||f>=h?e?"":void 0:(r=c(d,f),r<55296||r>56319||f+1===h||(l=c(d,f+1))<56320||l>57343?e?a(d,f):r:e?u(d,f,f+2):l-56320+(r-55296<<10)+65536)}};e.exports={codeAt:l(!1),charAt:l(!0)}},"68ee":function(e,t,n){var r=n("e330"),i=n("d039"),o=n("1626"),s=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],d=a("Reflect","construct"),f=/^\s*(?:class|function)\b/,h=r(f.exec),p=!f.exec(u),m=function(e){if(!o(e))return!1;try{return d(u,l,e),!0}catch(t){return!1}},v=function(e){if(!o(e))return!1;switch(s(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!h(f,c(e))}catch(t){return!0}};v.sham=!0,e.exports=!d||i((function(){var e;return m(m.call)||!m(Object)||!m((function(){e=!0}))||e}))?v:m},"69f3":function(e,t,n){var r,i,o,s=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),d=n("1a2d"),f=n("c6cd"),h=n("f772"),p=n("d012"),m="Object already initialized",v=a.TypeError,g=a.WeakMap,b=function(e){return o(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!u(t)||(n=i(t)).type!==e)throw v("Incompatible receiver, "+e+" required");return n}};if(s||f.state){var _=f.state||(f.state=new g),w=c(_.get),O=c(_.has),I=c(_.set);r=function(e,t){if(O(_,e))throw new v(m);return t.facade=e,I(_,e,t),t},i=function(e){return w(_,e)||{}},o=function(e){return O(_,e)}}else{var j=h("state");p[j]=!0,r=function(e,t){if(d(e,j))throw new v(m);return t.facade=e,l(e,j,t),t},i=function(e){return d(e,j)?e[j]:{}},o=function(e){return d(e,j)}}e.exports={set:r,get:i,has:o,enforce:b,getterFor:y}},"6c02":function(e,t,n){"use strict";n.d(t,"a",(function(){return Ze})),n.d(t,"b",(function(){return G}));var r=n("7a23");n("3f4e");
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=e=>i?Symbol(e):"_vr_"+e,s=o("rvlm"),a=o("rvd"),c=o("r"),u=o("rl"),l=o("rvl"),d="undefined"!==typeof window;function f(e){return e.__esModule||i&&"Module"===e[Symbol.toStringTag]}const h=Object.assign;function p(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const m=()=>{};const v=/\/$/,g=e=>e.replace(v,"");function b(e,t,n="/"){let r,i={},o="",s="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),o=t.slice(a+1,c>-1?c:t.length),i=e(o)),c>-1&&(r=r||t.slice(0,c),s=t.slice(c,t.length)),r=k(null!=r?r:t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function y(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function w(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&O(t.matched[r],n.matched[i])&&I(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function O(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function I(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!j(e[n],t[n]))return!1;return!0}function j(e,t){return Array.isArray(e)?E(e,t):Array.isArray(t)?E(t,e):e===t}function E(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function k(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,o,s=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],1!==s&&"."!==o){if(".."!==o)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var T,S;(function(e){e["pop"]="pop",e["push"]="push"})(T||(T={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(S||(S={}));function x(e){if(!e)if(d){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),g(e)}const C=/^[^#]+#/;function A(e,t){return e.replace(C,"#")+t}function R(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const P=()=>({left:window.pageXOffset,top:window.pageYOffset});function L(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=R(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function N(e,t){const n=history.state?history.state.position-t:-1;return n+e}const M=new Map;function D(e,t){M.set(e,t)}function U(e){const t=M.get(e);return M.delete(e),t}let F=()=>location.protocol+"//"+location.host;function V(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let t=i.includes(e.slice(o))?e.slice(o).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),_(n,"")}const s=_(n,e);return s+r+i}function $(e,t,n,r){let i=[],o=[],s=null;const a=({state:o})=>{const a=V(e,location),c=n.value,u=t.value;let l=0;if(o){if(n.value=a,t.value=o,s&&s===c)return void(s=null);l=u?o.position-u.position:0}else r(a);i.forEach(e=>{e(n.value,c,{delta:l,type:T.pop,direction:l?l>0?S.forward:S.back:S.unknown})})};function c(){s=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return o.push(t),t}function l(){const{history:e}=window;e.state&&e.replaceState(h({},e.state,{scroll:P()}),"")}function d(){for(const e of o)e();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:d}}function B(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?P():null}}function z(e){const{history:t,location:n}=window,r={value:V(e,n)},i={value:t.state};function o(r,o,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:F()+e+r;try{t[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(e,n){const s=h({},t.state,B(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});o(e,s,!0),r.value=e}function a(e,n){const s=h({},i.value,t.state,{forward:e,scroll:P()});o(s.current,s,!0);const a=h({},B(r.value,e,null),{position:s.position+1},n);o(e,a,!1),r.value=e}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:s}}function G(e){e=x(e);const t=z(e),n=$(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=h({location:"",base:e,go:r,createHref:A.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function H(e){return"string"===typeof e||e&&"object"===typeof e}function W(e){return"string"===typeof e||"symbol"===typeof e}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},K=o("nf");var J;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(J||(J={}));function X(e,t){return h(new Error,{type:e,[K]:!0},t)}function Y(e,t){return e instanceof Error&&K in e&&(null==t||!!(e.type&t))}const Q="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},ee=/[.+*?^${}()[\]/\\]/g;function te(e,t){const n=h({},Z,t),r=[];let i=n.start?"^":"";const o=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let t=0;t<l.length;t++){const r=l[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ee,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;o.push({name:e,repeatable:n,optional:a});const d=c||Q;if(d!==Q){s+=10;try{new RegExp(`(${d})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${d}): `+u.message)}}let f=n?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;t||(f=a&&l.length<2?`(?:/${f})`:"/"+f),a&&(f+="?"),i+=f,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===d&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=o[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:s,optional:a}=e,c=o in t?t[o]:"";if(Array.isArray(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:s,score:r,keys:o,parse:a,stringify:c}}function ne(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function re(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=ne(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const ie={type:0,value:""},oe=/[a-zA-Z0-9_]/;function se(e){if(!e)return[[]];if("/"===e)return[[ie]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,u="",l="";function d(){u&&(0===n?o.push({type:0,value:u}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&d(),s()):":"===a?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:oe.test(a)?f():(d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),d(),s(),i}function ae(e,t,n){const r=te(se(e.path),n);const i=h(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ce(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function o(e,n,r){const i=!r,a=le(e);a.aliasOf=r&&r.record;const u=pe(t,e),l=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)l.push(h({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let d,f;for(const t of l){const{path:l}=t;if(n&&"/"!==l[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(l&&r+l)}if(d=ae(t,n,u),r?r.alias.push(d):(f=f||d,f!==d&&f.alias.push(d),i&&e.name&&!fe(d)&&s(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)o(e[t],d,r&&r.children[t])}r=r||d,c(d)}return f?()=>{s(f)}:m}function s(e){if(W(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function a(){return n}function c(e){let t=0;while(t<n.length&&re(e,n[t])>=0)t++;n.splice(t,0,e),e.record.name&&!fe(e)&&r.set(e.record.name,e)}function u(e,t){let i,o,s,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw X(1,{location:e});s=i.record.name,a=h(ue(t.params,i.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),o=i.stringify(a)}else if("path"in e)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw X(1,{location:e,currentLocation:t});s=i.record.name,a=h({},t.params,e.params),o=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:s,path:o,params:a,matched:c,meta:he(c)}}return t=pe({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>o(e)),{addRoute:o,resolve:u,removeRoute:s,getRoutes:a,getRecordMatcher:i}}function ue(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function le(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:de(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function de(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function fe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function he(e){return e.reduce((e,t)=>h(e,t.meta),{})}function pe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const me=/#/g,ve=/&/g,ge=/\//g,be=/=/g,ye=/\?/g,_e=/\+/g,we=/%5B/g,Oe=/%5D/g,Ie=/%5E/g,je=/%60/g,Ee=/%7B/g,ke=/%7C/g,Te=/%7D/g,Se=/%20/g;function xe(e){return encodeURI(""+e).replace(ke,"|").replace(we,"[").replace(Oe,"]")}function Ce(e){return xe(e).replace(Ee,"{").replace(Te,"}").replace(Ie,"^")}function Ae(e){return xe(e).replace(_e,"%2B").replace(Se,"+").replace(me,"%23").replace(ve,"%26").replace(je,"`").replace(Ee,"{").replace(Te,"}").replace(Ie,"^")}function Re(e){return Ae(e).replace(be,"%3D")}function Pe(e){return xe(e).replace(me,"%23").replace(ye,"%3F")}function Le(e){return null==e?"":Pe(e).replace(ge,"%2F")}function Ne(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Me(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(_e," "),n=e.indexOf("="),o=Ne(n<0?e:e.slice(0,n)),s=n<0?null:Ne(e.slice(n+1));if(o in t){let e=t[o];Array.isArray(e)||(e=t[o]=[e]),e.push(s)}else t[o]=s}return t}function De(e){let t="";for(let n in e){const r=e[n];if(n=Re(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map(e=>e&&Ae(e)):[r&&Ae(r)];i.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function Ue(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}function Fe(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ve(e,t,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,a)=>{const c=e=>{!1===e?a(X(4,{from:n,to:t})):e instanceof Error?a(e):H(e)?a(X(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),s())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch(e=>a(e))})}function $e(e,t,n,r){const i=[];for(const o of e)for(const e in o.components){let s=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if(Be(s)){const a=s.__vccOpts||s,c=a[t];c&&i.push(Ve(c,n,r,o,e))}else{let a=s();0,i.push(()=>a.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const s=f(i)?i.default:i;o.components[e]=s;const a=s.__vccOpts||s,c=a[t];return c&&Ve(c,n,r,o,e)()}))}}return i}function Be(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function ze(e){const t=Object(r["l"])(c),n=Object(r["l"])(u),i=Object(r["b"])(()=>t.resolve(Object(r["x"])(e.to))),o=Object(r["b"])(()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],o=n.matched;if(!r||!o.length)return-1;const s=o.findIndex(O.bind(null,r));if(s>-1)return s;const a=Ke(e[t-2]);return t>1&&Ke(r)===a&&o[o.length-1].path!==a?o.findIndex(O.bind(null,e[t-2])):s}),s=Object(r["b"])(()=>o.value>-1&&qe(n.params,i.value.params)),a=Object(r["b"])(()=>o.value>-1&&o.value===n.matched.length-1&&I(n.params,i.value.params));function l(n={}){return We(n)?t[Object(r["x"])(e.replace)?"replace":"push"](Object(r["x"])(e.to)).catch(m):Promise.resolve()}return{route:i,href:Object(r["b"])(()=>i.value.href),isActive:s,isExactActive:a,navigate:l}}const Ge=Object(r["i"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ze,setup(e,{slots:t}){const n=Object(r["t"])(ze(e)),{options:i}=Object(r["l"])(c),o=Object(r["b"])(()=>({[Je(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Je(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Object(r["k"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),He=Ge;function We(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function qe(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((e,t)=>e!==i[t]))return!1}return!0}function Ke(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Je=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=Object(r["i"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const i=Object(r["l"])(l),o=Object(r["b"])(()=>e.route||i.value),c=Object(r["l"])(a,0),u=Object(r["b"])(()=>o.value.matched[c]);Object(r["s"])(a,c+1),Object(r["s"])(s,u),Object(r["s"])(l,o);const d=Object(r["u"])();return Object(r["z"])(()=>[d.value,u.value,e.name],([e,t,n],[r,i,o])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&O(t,i)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const i=o.value,s=u.value,a=s&&s.components[e.name],c=e.name;if(!a)return Ye(n.default,{Component:a,route:i});const l=s.props[e.name],f=l?!0===l?i.params:"function"===typeof l?l(i):l:null,p=e=>{e.component.isUnmounted&&(s.instances[c]=null)},m=Object(r["k"])(a,h({},f,t,{onVnodeUnmounted:p,ref:d}));return Ye(n.default,{Component:m,route:i})||m}}});function Ye(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Qe=Xe;function Ze(e){const t=ce(e.routes,e),n=e.parseQuery||Me,i=e.stringifyQuery||De,o=e.history;const s=Fe(),a=Fe(),f=Fe(),v=Object(r["w"])(q);let g=q;d&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=p.bind(null,e=>""+e),O=p.bind(null,Le),I=p.bind(null,Ne);function j(e,n){let r,i;return W(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function E(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function k(){return t.getRoutes().map(e=>e.record)}function S(e){return!!t.getRecordMatcher(e)}function x(e,r){if(r=h({},r||v.value),"string"===typeof e){const i=b(n,e,r.path),s=t.resolve({path:i.path},r),a=o.createHref(i.fullPath);return h(i,s,{params:I(s.params),hash:Ne(i.hash),redirectedFrom:void 0,href:a})}let s;if("path"in e)s=h({},e,{path:b(n,e.path,r.path).path});else{const t=h({},e.params);for(const e in t)null==t[e]&&delete t[e];s=h({},e,{params:O(e.params)}),r.params=O(r.params)}const a=t.resolve(s,r),c=e.hash||"";a.params=_(I(a.params));const u=y(i,h({},e,{hash:Ce(c),path:a.path})),l=o.createHref(u);return h({fullPath:u,hash:c,query:i===De?Ue(e.query):e.query||{}},a,{redirectedFrom:void 0,href:l})}function C(e){return"string"===typeof e?b(n,e,v.value.path):h({},e)}function A(e,t){if(g!==e)return X(8,{from:t,to:e})}function R(e){return V(e)}function M(e){return R(h(C(e),{replace:!0}))}function F(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=C(r):{path:r},r.params={}),h({query:e.query,hash:e.hash,params:e.params},r)}}function V(e,t){const n=g=x(e),r=v.value,o=e.state,s=e.force,a=!0===e.replace,c=F(n);if(c)return V(h(C(c),{state:o,force:s,replace:a}),t||n);const u=n;let l;return u.redirectedFrom=t,!s&&w(i,r,n)&&(l=X(16,{to:u,from:r}),re(r,r,!0,!1)),(l?Promise.resolve(l):B(u,r)).catch(e=>Y(e)?e:ee(e,u,r)).then(e=>{if(e){if(Y(e,2))return V(h(C(e.to),{state:o,force:s,replace:a}),t||u)}else e=G(u,r,!0,a,o);return z(u,r,e),e})}function $(e,t){const n=A(e,t);return n?Promise.reject(n):Promise.resolve()}function B(e,t){let n;const[r,i,o]=tt(e,t);n=$e(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach(r=>{n.push(Ve(r,e,t))});const c=$.bind(null,e,t);return n.push(c),et(n).then(()=>{n=[];for(const r of s.list())n.push(Ve(r,e,t));return n.push(c),et(n)}).then(()=>{n=$e(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach(r=>{n.push(Ve(r,e,t))});return n.push(c),et(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Ve(i,e,t));else n.push(Ve(r.beforeEnter,e,t));return n.push(c),et(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=$e(o,"beforeRouteEnter",e,t),n.push(c),et(n))).then(()=>{n=[];for(const r of a.list())n.push(Ve(r,e,t));return n.push(c),et(n)}).catch(e=>Y(e,8)?e:Promise.reject(e))}function z(e,t,n){for(const r of f.list())r(e,t,n)}function G(e,t,n,r,i){const s=A(e,t);if(s)return s;const a=t===q,c=d?history.state:{};n&&(r||a?o.replace(e.fullPath,h({scroll:a&&c&&c.scroll},i)):o.push(e.fullPath,i)),v.value=e,re(e,t,n,a),ne()}let H;function K(){H=o.listen((e,t,n)=>{const r=x(e),i=F(r);if(i)return void V(h(i,{replace:!0}),r).catch(m);g=r;const s=v.value;d&&D(N(s.fullPath,n.delta),P()),B(r,s).catch(e=>Y(e,12)?e:Y(e,2)?(V(e.to,r).then(e=>{Y(e,20)&&!n.delta&&n.type===T.pop&&o.go(-1,!1)}).catch(m),Promise.reject()):(n.delta&&o.go(-n.delta,!1),ee(e,r,s))).then(e=>{e=e||G(r,s,!1),e&&(n.delta?o.go(-n.delta,!1):n.type===T.pop&&Y(e,20)&&o.go(-1,!1)),z(r,s,e)}).catch(m)})}let J,Q=Fe(),Z=Fe();function ee(e,t,n){ne(e);const r=Z.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function te(){return J&&v.value!==q?Promise.resolve():new Promise((e,t)=>{Q.add([e,t])})}function ne(e){J||(J=!0,K(),Q.list().forEach(([t,n])=>e?n(e):t()),Q.reset())}function re(t,n,i,o){const{scrollBehavior:s}=e;if(!d||!s)return Promise.resolve();const a=!i&&U(N(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return Object(r["m"])().then(()=>s(t,n,a)).then(e=>e&&L(e)).catch(e=>ee(e,t,n))}const ie=e=>o.go(e);let oe;const se=new Set,ae={currentRoute:v,addRoute:j,removeRoute:E,hasRoute:S,getRoutes:k,resolve:x,options:e,push:R,replace:M,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:s.add,beforeResolve:a.add,afterEach:f.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",He),e.component("RouterView",Qe),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["x"])(v)}),d&&!oe&&v.value===q&&(oe=!0,R(o.location).catch(e=>{0}));const n={};for(const o in q)n[o]=Object(r["b"])(()=>v.value[o]);e.provide(c,t),e.provide(u,Object(r["t"])(n)),e.provide(l,v);const i=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(g=q,H&&H(),v.value=q,oe=!1,J=!1),i()}}};return ae}function et(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function tt(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const o=t.matched[s];o&&(e.matched.find(e=>O(e,o))?r.push(o):n.push(o));const a=e.matched[s];a&&(t.matched.find(e=>O(e,a))||i.push(a))}return[n,r,i]}},"6eeb":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("1a2d"),s=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,d=u.get,f=u.enforce,h=String(String).split("String");(e.exports=function(e,t,n,c){var u,d=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,v=c&&void 0!==c.name?c.name:t;i(n)&&("Symbol("===String(v).slice(0,7)&&(v="["+String(v).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||l&&n.name!==v)&&s(n,"name",v),u=f(n),u.source||(u.source=h.join("string"==typeof v?v:""))),e!==r?(d?!m&&e[t]&&(p=!0):delete e[t],p?e[t]=n:s(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return i(this)&&d(this).source||c(this)}))},7418:function(e,t){t.f=Object.getOwnPropertySymbols},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(e,t,n){var r=n("cc12"),i=r("span").classList,o=i&&i.constructor&&i.constructor.prototype;e.exports=o===Object.prototype?void 0:o},"7a23":function(e,t,n){"use strict";n.d(t,"b",(function(){return He})),n.d(t,"t",(function(){return Ie})),n.d(t,"u",(function(){return De})),n.d(t,"w",(function(){return Ue})),n.d(t,"x",(function(){return $e})),n.d(t,"a",(function(){return Dn})),n.d(t,"d",(function(){return ar})),n.d(t,"e",(function(){return Kn})),n.d(t,"f",(function(){return tr})),n.d(t,"g",(function(){return sr})),n.d(t,"h",(function(){return nr})),n.d(t,"i",(function(){return yt})),n.d(t,"j",(function(){return _r})),n.d(t,"k",(function(){return gi})),n.d(t,"l",(function(){return ct})),n.d(t,"m",(function(){return Zr})),n.d(t,"n",(function(){return It})),n.d(t,"o",(function(){return At})),n.d(t,"p",(function(){return jt})),n.d(t,"q",(function(){return Mt})),n.d(t,"r",(function(){return zn})),n.d(t,"s",(function(){return at})),n.d(t,"v",(function(){return Pn})),n.d(t,"z",(function(){return fi})),n.d(t,"A",(function(){return Qe})),n.d(t,"B",(function(){return bn})),n.d(t,"c",(function(){return Eo})),n.d(t,"y",(function(){return bo})),n.d(t,"C",(function(){return wo}));var r=n("9ff4");let i;const o=[];class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}else 0}on(){this.active&&(o.push(this),i=this)}off(){this.active&&(o.pop(),i=o[o.length-1])}stop(e){if(this.active){if(this.effects.forEach(e=>e.stop()),this.cleanups.forEach(e=>e()),this.scopes&&this.scopes.forEach(e=>e.stop(!0)),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function a(e,t){t=t||i,t&&t.active&&t.effects.push(e)}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},u=e=>(e.w&m)>0,l=e=>(e.n&m)>0,d=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=m},f=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];u(i)&&!l(i)?i.delete(e):t[n++]=i,i.w&=~m,i.n&=~m}t.length=n}},h=new WeakMap;let p=0,m=1;const v=30,g=[];let b;const y=Symbol(""),_=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!g.includes(this))try{return g.push(b=this),k(),m=1<<++p,p<=v?d(this):O(this),this.fn()}finally{p<=v&&f(this),m=1<<--p,T(),g.pop();const e=g.length;b=e>0?g[e-1]:void 0}}stop(){this.active&&(O(this),this.onStop&&this.onStop(),this.active=!1)}}function O(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let I=!0;const j=[];function E(){j.push(I),I=!1}function k(){j.push(I),I=!0}function T(){const e=j.pop();I=void 0===e||e}function S(e,t,n){if(!x())return;let r=h.get(e);r||h.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=c());const o=void 0;C(i,o)}function x(){return I&&void 0!==b}function C(e,t){let n=!1;p<=v?l(e)||(e.n|=m,n=!u(e)):n=!e.has(b),n&&(e.add(b),b.deps.push(e))}function A(e,t,n,i,o,s){const a=h.get(e);if(!a)return;let u=[];if("clear"===t)u=[...a.values()];else if("length"===n&&Object(r["o"])(e))a.forEach((e,t)=>{("length"===t||t>=i)&&u.push(e)});else switch(void 0!==n&&u.push(a.get(n)),t){case"add":Object(r["o"])(e)?Object(r["s"])(n)&&u.push(a.get("length")):(u.push(a.get(y)),Object(r["t"])(e)&&u.push(a.get(_)));break;case"delete":Object(r["o"])(e)||(u.push(a.get(y)),Object(r["t"])(e)&&u.push(a.get(_)));break;case"set":Object(r["t"])(e)&&u.push(a.get(y));break}if(1===u.length)u[0]&&R(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);R(c(e))}}function R(e,t){for(const n of Object(r["o"])(e)?e:[...e])(n!==b||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const P=Object(r["H"])("__proto__,__v_isRef,__isVue"),L=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(r["E"])),N=V(),M=V(!1,!0),D=V(!0),U=F();function F(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=Ce(this);for(let t=0,i=this.length;t<i;t++)S(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ce)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){E();const n=Ce(this)[t].apply(this,e);return T(),n}}),e}function V(e=!1,t=!1){return function(n,i,o){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_raw"===i&&o===(e?t?_e:ye:t?be:ge).get(n))return n;const s=Object(r["o"])(n);if(!e&&s&&Object(r["k"])(U,i))return Reflect.get(U,i,o);const a=Reflect.get(n,i,o);if(Object(r["E"])(i)?L.has(i):P(i))return a;if(e||S(n,"get",i),t)return a;if(Me(a)){const e=!s||!Object(r["s"])(i);return e?a.value:a}return Object(r["v"])(a)?e?Ee(a):Ie(a):a}}const $=z(),B=z(!0);function z(e=!1){return function(t,n,i,o){let s=t[n];if(!e&&!Se(i)&&(i=Ce(i),s=Ce(s),!Object(r["o"])(t)&&Me(s)&&!Me(i)))return s.value=i,!0;const a=Object(r["o"])(t)&&Object(r["s"])(n)?Number(n)<t.length:Object(r["k"])(t,n),c=Reflect.set(t,n,i,o);return t===Ce(o)&&(a?Object(r["j"])(i,s)&&A(t,"set",n,i,s):A(t,"add",n,i)),c}}function G(e,t){const n=Object(r["k"])(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&A(e,"delete",t,void 0,i),o}function H(e,t){const n=Reflect.has(e,t);return Object(r["E"])(t)&&L.has(t)||S(e,"has",t),n}function W(e){return S(e,"iterate",Object(r["o"])(e)?"length":y),Reflect.ownKeys(e)}const q={get:N,set:$,deleteProperty:G,has:H,ownKeys:W},K={get:D,set(e,t){return!0},deleteProperty(e,t){return!0}},J=Object(r["h"])({},q,{get:M,set:B}),X=e=>e,Y=e=>Reflect.getPrototypeOf(e);function Q(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ce(e),o=Ce(t);t!==o&&!n&&S(i,"get",t),!n&&S(i,"get",o);const{has:s}=Y(i),a=r?X:n?Pe:Re;return s.call(i,t)?a(e.get(t)):s.call(i,o)?a(e.get(o)):void(e!==i&&e.get(t))}function Z(e,t=!1){const n=this["__v_raw"],r=Ce(n),i=Ce(e);return e!==i&&!t&&S(r,"has",e),!t&&S(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function ee(e,t=!1){return e=e["__v_raw"],!t&&S(Ce(e),"iterate",y),Reflect.get(e,"size",e)}function te(e){e=Ce(e);const t=Ce(this),n=Y(t),r=n.has.call(t,e);return r||(t.add(e),A(t,"add",e,e)),this}function ne(e,t){t=Ce(t);const n=Ce(this),{has:i,get:o}=Y(n);let s=i.call(n,e);s||(e=Ce(e),s=i.call(n,e));const a=o.call(n,e);return n.set(e,t),s?Object(r["j"])(t,a)&&A(n,"set",e,t,a):A(n,"add",e,t),this}function re(e){const t=Ce(this),{has:n,get:r}=Y(t);let i=n.call(t,e);i||(e=Ce(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&A(t,"delete",e,void 0,o),s}function ie(){const e=Ce(this),t=0!==e.size,n=void 0,r=e.clear();return t&&A(e,"clear",void 0,void 0,n),r}function oe(e,t){return function(n,r){const i=this,o=i["__v_raw"],s=Ce(o),a=t?X:e?Pe:Re;return!e&&S(s,"iterate",y),o.forEach((e,t)=>n.call(r,a(e),a(t),i))}}function se(e,t,n){return function(...i){const o=this["__v_raw"],s=Ce(o),a=Object(r["t"])(s),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=o[e](...i),d=n?X:t?Pe:Re;return!t&&S(s,"iterate",u?_:y),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}},[Symbol.iterator](){return this}}}}function ae(e){return function(...t){return"delete"!==e&&this}}function ce(){const e={get(e){return Q(this,e)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:ie,forEach:oe(!1,!1)},t={get(e){return Q(this,e,!1,!0)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:ie,forEach:oe(!1,!0)},n={get(e){return Q(this,e,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:oe(!0,!1)},r={get(e){return Q(this,e,!0,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:oe(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{e[i]=se(i,!1,!1),n[i]=se(i,!0,!1),t[i]=se(i,!1,!0),r[i]=se(i,!0,!0)}),[e,n,t,r]}const[ue,le,de,fe]=ce();function he(e,t){const n=t?e?fe:de:e?le:ue;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get(Object(r["k"])(n,i)&&i in t?n:t,i,o)}const pe={get:he(!1,!1)},me={get:he(!1,!0)},ve={get:he(!0,!1)};const ge=new WeakMap,be=new WeakMap,ye=new WeakMap,_e=new WeakMap;function we(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Oe(e){return e["__v_skip"]||!Object.isExtensible(e)?0:we(Object(r["N"])(e))}function Ie(e){return e&&e["__v_isReadonly"]?e:ke(e,!1,q,pe,ge)}function je(e){return ke(e,!1,J,me,be)}function Ee(e){return ke(e,!0,K,ve,ye)}function ke(e,t,n,i,o){if(!Object(r["v"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=Oe(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return o.set(e,c),c}function Te(e){return Se(e)?Te(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Se(e){return!(!e||!e["__v_isReadonly"])}function xe(e){return Te(e)||Se(e)}function Ce(e){const t=e&&e["__v_raw"];return t?Ce(t):e}function Ae(e){return Object(r["g"])(e,"__v_skip",!0),e}const Re=e=>Object(r["v"])(e)?Ie(e):e,Pe=e=>Object(r["v"])(e)?Ee(e):e;function Le(e){x()&&(e=Ce(e),e.dep||(e.dep=c()),C(e.dep))}function Ne(e,t){e=Ce(e),e.dep&&R(e.dep)}function Me(e){return Boolean(e&&!0===e.__v_isRef)}function De(e){return Fe(e,!1)}function Ue(e){return Fe(e,!0)}function Fe(e,t){return Me(e)?e:new Ve(e,t)}class Ve{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ce(e),this._value=t?e:Re(e)}get value(){return Le(this),this._value}set value(e){e=this._shallow?e:Ce(e),Object(r["j"])(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Re(e),Ne(this,e))}}function $e(e){return Me(e)?e.value:e}const Be={get:(e,t,n)=>$e(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Me(i)&&!Me(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function ze(e){return Te(e)?e:new Proxy(e,Be)}class Ge{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new w(e,()=>{this._dirty||(this._dirty=!0,Ne(this))}),this["__v_isReadonly"]=n}get value(){const e=Ce(this);return Le(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function He(e,t){let n,i;const o=Object(r["p"])(e);o?(n=e,i=r["d"]):(n=e.get,i=e.set);const s=new Ge(n,i,o||!i);return s}Promise.resolve();new Set;new Map;function We(e,t,...n){const i=e.vnode.props||r["b"];let o=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in i){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:s}=i[e]||r["b"];s?o=n.map(e=>e.trim()):t&&(o=n.map(r["M"]))}let c;let u=i[c=Object(r["L"])(t)]||i[c=Object(r["L"])(Object(r["e"])(t))];!u&&s&&(u=i[c=Object(r["L"])(Object(r["l"])(t))]),u&&Dr(u,e,6,o);const l=i[c+"Once"];if(l){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,Dr(l,e,6,o)}}function qe(e,t,n=!1){const i=t.emitsCache,o=i.get(e);if(void 0!==o)return o;const s=e.emits;let a={},c=!1;if(!Object(r["p"])(e)){const i=e=>{const n=qe(e,t,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return s||c?(Object(r["o"])(s)?s.forEach(e=>a[e]=null):Object(r["h"])(a,s),i.set(e,a),a):(i.set(e,null),null)}function Ke(e,t){return!(!e||!Object(r["w"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(r["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(r["k"])(e,Object(r["l"])(t))||Object(r["k"])(e,t))}let Je=null,Xe=null;function Ye(e){const t=Je;return Je=e,Xe=e&&e.type.__scopeId||null,t}function Qe(e,t=Je,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Wn(-1);const i=Ye(t),o=e(...n);return Ye(i),r._d&&Wn(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Ze(e){const{type:t,vnode:n,proxy:i,withProxy:o,props:s,propsOptions:[a],slots:c,attrs:u,emit:l,render:d,renderCache:f,data:h,setupState:p,ctx:m,inheritAttrs:v}=e;let g,b;const y=Ye(e);try{if(4&n.shapeFlag){const e=o||i;g=cr(d.call(e,e,f,s,p,h,m)),b=u}else{const e=t;0,g=cr(e.length>1?e(s,{attrs:u,slots:c,emit:l}):e(s,null)),b=t.props?u:et(u)}}catch(w){$n.length=0,Ur(w,e,1),g=nr(Fn)}let _=g;if(b&&!1!==v){const e=Object.keys(b),{shapeFlag:t}=_;e.length&&7&t&&(a&&e.some(r["u"])&&(b=tt(b,a)),_=or(_,b))}return n.dirs&&(_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),g=_,Ye(y),g}const et=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(r["w"])(n))&&((t||(t={}))[n]=e[n]);return t},tt=(e,t)=>{const n={};for(const i in e)Object(r["u"])(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function nt(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:c}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||rt(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?rt(r,s,u):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!Ke(u,n))return!0}}return!1}function rt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!Ke(n,o))return!0}return!1}function it({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const ot=e=>e.__isSuspense;function st(e,t){t&&t.pendingBranch?Object(r["o"])(e)?t.effects.push(...e):t.effects.push(e):si(e)}function at(e,t){if(yr){let n=yr.provides;const r=yr.parent&&yr.parent.provides;r===n&&(n=yr.provides=Object.create(r)),n[e]=t}else 0}function ct(e,t,n=!1){const i=yr||Je;if(i){const o=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Object(r["p"])(t)?t.call(i.proxy):t}else 0}function ut(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Rt(()=>{e.isMounted=!0}),Nt(()=>{e.isUnmounting=!0}),e}const lt=[Function,Array],dt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:lt,onEnter:lt,onAfterEnter:lt,onEnterCancelled:lt,onBeforeLeave:lt,onLeave:lt,onAfterLeave:lt,onLeaveCancelled:lt,onBeforeAppear:lt,onAppear:lt,onAfterAppear:lt,onAppearCancelled:lt},setup(e,{slots:t}){const n=_r(),r=ut();let i;return()=>{const o=t.default&&bt(t.default(),!0);if(!o||!o.length)return;const s=Ce(e),{mode:a}=s;const c=o[0];if(r.isLeaving)return mt(c);const u=vt(c);if(!u)return mt(c);const l=pt(u,s,r,n);gt(u,l);const d=n.subTree,f=d&&vt(d);let h=!1;const{getTransitionKey:p}=u.type;if(p){const e=p();void 0===i?i=e:e!==i&&(i=e,h=!0)}if(f&&f.type!==Fn&&(!Yn(u,f)||h)){const e=pt(f,s,r,n);if(gt(f,e),"out-in"===a)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},mt(c);"in-out"===a&&u.type!==Fn&&(e.delayLeave=(e,t,n)=>{const i=ht(r,f);i[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return c}}},ft=dt;function ht(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function pt(e,t,n,r){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:d,onLeave:f,onAfterLeave:h,onLeaveCancelled:p,onBeforeAppear:m,onAppear:v,onAfterAppear:g,onAppearCancelled:b}=t,y=String(e.key),_=ht(n,e),w=(e,t)=>{e&&Dr(e,r,9,t)},O={mode:o,persisted:s,beforeEnter(t){let r=a;if(!n.isMounted){if(!i)return;r=m||a}t._leaveCb&&t._leaveCb(!0);const o=_[y];o&&Yn(e,o)&&o.el._leaveCb&&o.el._leaveCb(),w(r,[t])},enter(e){let t=c,r=u,o=l;if(!n.isMounted){if(!i)return;t=v||c,r=g||u,o=b||l}let s=!1;const a=e._enterCb=t=>{s||(s=!0,w(t?o:r,[e]),O.delayedLeave&&O.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();w(d,[t]);let o=!1;const s=t._leaveCb=n=>{o||(o=!0,r(),w(n?p:h,[t]),t._leaveCb=void 0,_[i]===e&&delete _[i])};_[i]=e,f?(f(t,s),f.length<=1&&s()):s()},clone(e){return pt(e,t,n,r)}};return O}function mt(e){if(wt(e))return e=or(e),e.children=null,e}function vt(e){return wt(e)?e.children?e.children[0]:void 0:e}function gt(e,t){6&e.shapeFlag&&e.component?gt(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function bt(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const o=e[i];o.type===Dn?(128&o.patchFlag&&r++,n=n.concat(bt(o.children,t))):(t||o.type!==Fn)&&n.push(o)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function yt(e){return Object(r["p"])(e)?{setup:e,name:e.name}:e}const _t=e=>!!e.type.__asyncLoader;const wt=e=>e.type.__isKeepAlive;RegExp,RegExp;function Ot(e,t){return Object(r["o"])(e)?e.some(e=>Ot(e,t)):Object(r["D"])(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function It(e,t){Et(e,"a",t)}function jt(e,t){Et(e,"da",t)}function Et(e,t,n=yr){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(xt(t,r,n),n){let e=n.parent;while(e&&e.parent)wt(e.parent.vnode)&&kt(r,t,n,e),e=e.parent}}function kt(e,t,n,i){const o=xt(t,e,i,!0);Mt(()=>{Object(r["K"])(i[t],o)},n)}function Tt(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function St(e){return 128&e.shapeFlag?e.ssContent:e}function xt(e,t,n=yr,r=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;E(),wr(n);const i=Dr(t,n,e,r);return Or(),T(),i});return r?i.unshift(o):i.push(o),o}}const Ct=e=>(t,n=yr)=>(!kr||"sp"===e)&&xt(e,t,n),At=Ct("bm"),Rt=Ct("m"),Pt=Ct("bu"),Lt=Ct("u"),Nt=Ct("bum"),Mt=Ct("um"),Dt=Ct("sp"),Ut=Ct("rtg"),Ft=Ct("rtc");function Vt(e,t=yr){xt("ec",e,t)}let $t=!0;function Bt(e){const t=Wt(e),n=e.proxy,i=e.ctx;$t=!1,t.beforeCreate&&Gt(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:a,watch:c,provide:u,inject:l,created:d,beforeMount:f,mounted:h,beforeUpdate:p,updated:m,activated:v,deactivated:g,beforeDestroy:b,beforeUnmount:y,destroyed:_,unmounted:w,render:O,renderTracked:I,renderTriggered:j,errorCaptured:E,serverPrefetch:k,expose:T,inheritAttrs:S,components:x,directives:C,filters:A}=t,R=null;if(l&&zt(l,i,R,e.appContext.config.unwrapInjectedRef),a)for(const L in a){const e=a[L];Object(r["p"])(e)&&(i[L]=e.bind(n))}if(o){0;const t=o.call(n,n);0,Object(r["v"])(t)&&(e.data=Ie(t))}if($t=!0,s)for(const L in s){const e=s[L],t=Object(r["p"])(e)?e.bind(n,n):Object(r["p"])(e.get)?e.get.bind(n,n):r["d"];0;const o=!Object(r["p"])(e)&&Object(r["p"])(e.set)?e.set.bind(n):r["d"],a=He({get:t,set:o});Object.defineProperty(i,L,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(const r in c)Ht(c[r],i,n,r);if(u){const e=Object(r["p"])(u)?u.call(n):u;Reflect.ownKeys(e).forEach(t=>{at(t,e[t])})}function P(e,t){Object(r["o"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(d&&Gt(d,e,"c"),P(At,f),P(Rt,h),P(Pt,p),P(Lt,m),P(It,v),P(jt,g),P(Vt,E),P(Ft,I),P(Ut,j),P(Nt,y),P(Mt,w),P(Dt,k),Object(r["o"])(T))if(T.length){const t=e.exposed||(e.exposed={});T.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});O&&e.render===r["d"]&&(e.render=O),null!=S&&(e.inheritAttrs=S),x&&(e.components=x),C&&(e.directives=C)}function zt(e,t,n=r["d"],i=!1){Object(r["o"])(e)&&(e=Yt(e));for(const o in e){const n=e[o];let s;s=Object(r["v"])(n)?"default"in n?ct(n.from||o,n.default,!0):ct(n.from||o):ct(n),Me(s)&&i?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[o]=s}}function Gt(e,t,n){Dr(Object(r["o"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ht(e,t,n,i){const o=i.includes(".")?mi(n,i):()=>n[i];if(Object(r["D"])(e)){const n=t[e];Object(r["p"])(n)&&fi(o,n)}else if(Object(r["p"])(e))fi(o,e.bind(n));else if(Object(r["v"])(e))if(Object(r["o"])(e))e.forEach(e=>Ht(e,t,n,i));else{const i=Object(r["p"])(e.handler)?e.handler.bind(n):t[e.handler];Object(r["p"])(i)&&fi(o,i,e)}else 0}function Wt(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=e.appContext,a=o.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(e=>qt(c,e,s,!0)),qt(c,t,s)):c=t,o.set(t,c),c}function qt(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&qt(e,o,n,!0),i&&i.forEach(t=>qt(e,t,n,!0));for(const s in t)if(r&&"expose"===s);else{const r=Kt[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Kt={data:Jt,props:Zt,emits:Zt,methods:Zt,computed:Zt,beforeCreate:Qt,created:Qt,beforeMount:Qt,mounted:Qt,beforeUpdate:Qt,updated:Qt,beforeDestroy:Qt,beforeUnmount:Qt,destroyed:Qt,unmounted:Qt,activated:Qt,deactivated:Qt,errorCaptured:Qt,serverPrefetch:Qt,components:Zt,directives:Zt,watch:en,provide:Jt,inject:Xt};function Jt(e,t){return t?e?function(){return Object(r["h"])(Object(r["p"])(e)?e.call(this,this):e,Object(r["p"])(t)?t.call(this,this):t)}:t:e}function Xt(e,t){return Zt(Yt(e),Yt(t))}function Yt(e){if(Object(r["o"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Qt(e,t){return e?[...new Set([].concat(e,t))]:t}function Zt(e,t){return e?Object(r["h"])(Object(r["h"])(Object.create(null),e),t):t}function en(e,t){if(!e)return t;if(!t)return e;const n=Object(r["h"])(Object.create(null),e);for(const r in t)n[r]=Qt(e[r],t[r]);return n}function tn(e,t,n,i=!1){const o={},s={};Object(r["g"])(s,Qn,1),e.propsDefaults=Object.create(null),rn(e,t,o,s);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:je(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function nn(e,t,n,i){const{props:o,attrs:s,vnode:{patchFlag:a}}=e,c=Ce(o),[u]=e.propsOptions;let l=!1;if(!(i||a>0)||16&a){let i;rn(e,t,o,s)&&(l=!0);for(const s in c)t&&(Object(r["k"])(t,s)||(i=Object(r["l"])(s))!==s&&Object(r["k"])(t,i))||(u?!n||void 0===n[s]&&void 0===n[i]||(o[s]=on(u,c,s,void 0,e,!0)):delete o[s]);if(s!==c)for(const e in s)t&&Object(r["k"])(t,e)||(delete s[e],l=!0)}else if(8&a){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let a=n[i];const d=t[a];if(u)if(Object(r["k"])(s,a))d!==s[a]&&(s[a]=d,l=!0);else{const t=Object(r["e"])(a);o[t]=on(u,c,t,d,e,!1)}else d!==s[a]&&(s[a]=d,l=!0)}}l&&A(e,"set","$attrs")}function rn(e,t,n,i){const[o,s]=e.propsOptions;let a,c=!1;if(t)for(let u in t){if(Object(r["z"])(u))continue;const l=t[u];let d;o&&Object(r["k"])(o,d=Object(r["e"])(u))?s&&s.includes(d)?(a||(a={}))[d]=l:n[d]=l:Ke(e.emitsOptions,u)||u in i&&l===i[u]||(i[u]=l,c=!0)}if(s){const t=Ce(n),i=a||r["b"];for(let a=0;a<s.length;a++){const c=s[a];n[c]=on(o,t,c,i[c],e,!Object(r["k"])(i,c))}}return c}function on(e,t,n,i,o,s){const a=e[n];if(null!=a){const e=Object(r["k"])(a,"default");if(e&&void 0===i){const e=a.default;if(a.type!==Function&&Object(r["p"])(e)){const{propsDefaults:r}=o;n in r?i=r[n]:(wr(o),i=r[n]=e.call(null,t),Or())}else i=e}a[0]&&(s&&!e?i=!1:!a[1]||""!==i&&i!==Object(r["l"])(n)||(i=!0))}return i}function sn(e,t,n=!1){const i=t.propsCache,o=i.get(e);if(o)return o;const s=e.props,a={},c=[];let u=!1;if(!Object(r["p"])(e)){const i=e=>{u=!0;const[n,i]=sn(e,t,!0);Object(r["h"])(a,n),i&&c.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!s&&!u)return i.set(e,r["a"]),r["a"];if(Object(r["o"])(s))for(let d=0;d<s.length;d++){0;const e=Object(r["e"])(s[d]);an(e)&&(a[e]=r["b"])}else if(s){0;for(const e in s){const t=Object(r["e"])(e);if(an(t)){const n=s[e],i=a[t]=Object(r["o"])(n)||Object(r["p"])(n)?{type:n}:n;if(i){const e=ln(Boolean,i.type),n=ln(String,i.type);i[0]=e>-1,i[1]=n<0||e<n,(e>-1||Object(r["k"])(i,"default"))&&c.push(t)}}}}const l=[a,c];return i.set(e,l),l}function an(e){return"$"!==e[0]}function cn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function un(e,t){return cn(e)===cn(t)}function ln(e,t){return Object(r["o"])(t)?t.findIndex(t=>un(t,e)):Object(r["p"])(t)&&un(t,e)?0:-1}const dn=e=>"_"===e[0]||"$stable"===e,fn=e=>Object(r["o"])(e)?e.map(cr):[cr(e)],hn=(e,t,n)=>{const r=Qe((...e)=>fn(t(...e)),n);return r._c=!1,r},pn=(e,t,n)=>{const i=e._ctx;for(const o in e){if(dn(o))continue;const n=e[o];if(Object(r["p"])(n))t[o]=hn(o,n,i);else if(null!=n){0;const e=fn(n);t[o]=()=>e}}},mn=(e,t)=>{const n=fn(t);e.slots.default=()=>n},vn=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=Ce(t),Object(r["g"])(t,"_",n)):pn(t,e.slots={})}else e.slots={},t&&mn(e,t);Object(r["g"])(e.slots,Qn,1)},gn=(e,t,n)=>{const{vnode:i,slots:o}=e;let s=!0,a=r["b"];if(32&i.shapeFlag){const e=t._;e?n&&1===e?s=!1:(Object(r["h"])(o,t),n||1!==e||delete o._):(s=!t.$stable,pn(t,o)),a=t}else t&&(mn(e,t),a={default:1});if(s)for(const r in o)dn(r)||r in a||delete o[r]};function bn(e,t){const n=Je;if(null===n)return e;const i=n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,c=r["b"]]=t[s];Object(r["p"])(e)&&(e={mounted:e,updated:e}),e.deep&&vi(n),o.push({dir:e,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function yn(e,t,n,r){const i=e.dirs,o=t&&t.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let c=a.dir[r];c&&(E(),Dr(c,n,8,[e.el,a,e,t]),T())}}function _n(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wn=0;function On(e,t){return function(n,i=null){null==i||Object(r["v"])(i)||(i=null);const o=_n(),s=new Set;let a=!1;const c=o.app={_uid:wn++,_component:n,_props:i,_container:null,_context:o,_instance:null,version:bi,get config(){return o.config},set config(e){0},use(e,...t){return s.has(e)||(e&&Object(r["p"])(e.install)?(s.add(e),e.install(c,...t)):Object(r["p"])(e)&&(s.add(e),e(c,...t))),c},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),c},component(e,t){return t?(o.components[e]=t,c):o.components[e]},directive(e,t){return t?(o.directives[e]=t,c):o.directives[e]},mount(r,s,u){if(!a){const l=nr(n,i);return l.appContext=o,s&&t?t(l,r):e(l,r,u),a=!0,c._container=r,r.__vue_app__=c,Pr(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return o.provides[e]=t,c}};return c}}function In(e,t,n,i,o=!1){if(Object(r["o"])(e))return void e.forEach((e,s)=>In(e,t&&(Object(r["o"])(t)?t[s]:t),n,i,o));if(_t(i)&&!o)return;const s=4&i.shapeFlag?Pr(i.component)||i.component.proxy:i.el,a=o?null:s,{i:c,r:u}=e;const l=t&&t.r,d=c.refs===r["b"]?c.refs={}:c.refs,f=c.setupState;if(null!=l&&l!==u&&(Object(r["D"])(l)?(d[l]=null,Object(r["k"])(f,l)&&(f[l]=null)):Me(l)&&(l.value=null)),Object(r["p"])(u))Mr(u,c,12,[a,d]);else{const t=Object(r["D"])(u),i=Me(u);if(t||i){const i=()=>{if(e.f){const n=t?d[u]:u.value;o?Object(r["o"])(n)&&Object(r["K"])(n,s):Object(r["o"])(n)?n.includes(s)||n.push(s):t?d[u]=[s]:(u.value=[s],e.k&&(d[e.k]=u.value))}else t?(d[u]=a,Object(r["k"])(f,u)&&(f[u]=a)):Me(u)&&(u.value=a,e.k&&(d[e.k]=a))};a?(i.id=-1,En(i,n)):i()}else 0}}function jn(){}const En=st;function kn(e){return Tn(e)}function Tn(e,t){jn();const n=Object(r["i"])();n.__VUE__=!0;const{insert:i,remove:o,patchProp:s,createElement:a,createText:c,createComment:u,setText:l,setElementText:d,parentNode:f,nextSibling:h,setScopeId:p=r["d"],cloneNode:m,insertStaticContent:v}=e,g=(e,t,n,r=null,i=null,o=null,s=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Yn(e,t)&&(r=K(e),z(e,i,o,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:d}=t;switch(u){case Un:b(e,t,n,r);break;case Fn:y(e,t,n,r);break;case Vn:null==e&&_(t,n,r,s);break;case Dn:P(e,t,n,r,i,o,s,a,c);break;default:1&d?j(e,t,n,r,i,o,s,a,c):6&d?L(e,t,n,r,i,o,s,a,c):(64&d||128&d)&&u.process(e,t,n,r,i,o,s,a,c,X)}null!=l&&i&&In(l,e&&e.ref,o,t||e,!t)},b=(e,t,n,r)=>{if(null==e)i(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},y=(e,t,n,r)=>{null==e?i(t.el=u(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=v(e.children,t,n,r)},O=({el:e,anchor:t},n,r)=>{let o;while(e&&e!==t)o=h(e),i(e,n,r),e=o;i(t,n,r)},I=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=h(e),o(e),e=n;o(t)},j=(e,t,n,r,i,o,s,a,c)=>{s=s||"svg"===t.type,null==e?k(t,n,r,i,o,s,a,c):C(e,t,i,o,s,a,c)},k=(e,t,n,o,c,u,l,f)=>{let h,p;const{type:v,props:g,shapeFlag:b,transition:y,patchFlag:_,dirs:w}=e;if(e.el&&void 0!==m&&-1===_)h=e.el=m(e.el);else{if(h=e.el=a(e.type,u,g&&g.is,g),8&b?d(h,e.children):16&b&&x(e.children,h,null,o,c,u&&"foreignObject"!==v,l,f),w&&yn(e,null,o,"created"),g){for(const t in g)"value"===t||Object(r["z"])(t)||s(h,t,null,g[t],u,e.children,o,c,q);"value"in g&&s(h,"value",null,g.value),(p=g.onVnodeBeforeMount)&&fr(p,o,e)}S(h,e,e.scopeId,l,o)}w&&yn(e,null,o,"beforeMount");const O=(!c||c&&!c.pendingBranch)&&y&&!y.persisted;O&&y.beforeEnter(h),i(h,t,n),((p=g&&g.onVnodeMounted)||O||w)&&En(()=>{p&&fr(p,o,e),O&&y.enter(h),w&&yn(e,null,o,"mounted")},c)},S=(e,t,n,r,i)=>{if(n&&p(e,n),r)for(let o=0;o<r.length;o++)p(e,r[o]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;S(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},x=(e,t,n,r,i,o,s,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?ur(e[u]):cr(e[u]);g(null,c,t,n,r,i,o,s,a)}},C=(e,t,n,i,o,a,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:f,dirs:h}=t;l|=16&e.patchFlag;const p=e.props||r["b"],m=t.props||r["b"];let v;n&&Sn(n,!1),(v=m.onVnodeBeforeUpdate)&&fr(v,n,t,e),h&&yn(t,e,n,"beforeUpdate"),n&&Sn(n,!0);const g=o&&"foreignObject"!==t.type;if(f?A(e.dynamicChildren,f,u,n,i,g,a):c||F(e,t,u,null,n,i,g,a,!1),l>0){if(16&l)R(u,t,p,m,n,i,o);else if(2&l&&p.class!==m.class&&s(u,"class",null,m.class,o),4&l&&s(u,"style",p.style,m.style,o),8&l){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const a=r[t],c=p[a],l=m[a];l===c&&"value"!==a||s(u,a,c,l,o,e.children,n,i,q)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=f||R(u,t,p,m,n,i,o);((v=m.onVnodeUpdated)||h)&&En(()=>{v&&fr(v,n,t,e),h&&yn(t,e,n,"updated")},i)},A=(e,t,n,r,i,o,s)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Dn||!Yn(c,u)||70&c.shapeFlag)?f(c.el):n;g(c,u,l,null,r,i,o,s,!0)}},R=(e,t,n,i,o,a,c)=>{if(n!==i){for(const u in i){if(Object(r["z"])(u))continue;const l=i[u],d=n[u];l!==d&&"value"!==u&&s(e,u,d,l,c,t.children,o,a,q)}if(n!==r["b"])for(const u in n)Object(r["z"])(u)||u in i||s(e,u,n[u],null,c,t.children,o,a,q);"value"in i&&s(e,"value",n.value,i.value)}},P=(e,t,n,r,o,s,a,u,l)=>{const d=t.el=e?e.el:c(""),f=t.anchor=e?e.anchor:c("");let{patchFlag:h,dynamicChildren:p,slotScopeIds:m}=t;m&&(u=u?u.concat(m):m),null==e?(i(d,n,r),i(f,n,r),x(t.children,n,f,o,s,a,u,l)):h>0&&64&h&&p&&e.dynamicChildren?(A(e.dynamicChildren,p,n,o,s,a,u),(null!=t.key||o&&t===o.subTree)&&xn(e,t,!0)):F(e,t,n,f,o,s,a,u,l)},L=(e,t,n,r,i,o,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,c):N(t,n,r,i,o,s,c):M(e,t,c)},N=(e,t,n,r,i,o,s)=>{const a=e.component=br(e,r,i);if(wt(e)&&(a.ctx.renderer=X),Tr(a),a.asyncDep){if(i&&i.registerDep(a,D),!e.el){const e=a.subTree=nr(Fn);y(null,e,t,n)}}else D(a,e,t,n,i,o,s)},M=(e,t,n)=>{const r=t.component=e.component;if(nt(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void U(r,t,n);r.next=t,ri(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},D=(e,t,n,i,o,s,a)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:i,u:c,parent:u,vnode:l}=e,d=n;0,Sn(e,!1),n?(n.el=l.el,U(e,n,a)):n=l,i&&Object(r["n"])(i),(t=n.props&&n.props.onVnodeBeforeUpdate)&&fr(t,u,n,l),Sn(e,!0);const h=Ze(e);0;const p=e.subTree;e.subTree=h,g(p,h,f(p.el),K(p),e,o,s),n.el=h.el,null===d&&it(e,h.el),c&&En(c,o),(t=n.props&&n.props.onVnodeUpdated)&&En(()=>fr(t,u,n,l),o)}else{let a;const{el:c,props:u}=t,{bm:l,m:d,parent:f}=e,h=_t(t);if(Sn(e,!1),l&&Object(r["n"])(l),!h&&(a=u&&u.onVnodeBeforeMount)&&fr(a,f,t),Sn(e,!0),c&&Q){const n=()=>{e.subTree=Ze(e),Q(c,e.subTree,e,o,null)};h?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const r=e.subTree=Ze(e);0,g(null,r,n,i,e,o,s),t.el=r.el}if(d&&En(d,o),!h&&(a=u&&u.onVnodeMounted)){const e=t;En(()=>fr(a,f,e),o)}256&t.shapeFlag&&e.a&&En(e.a,o),e.isMounted=!0,t=n=i=null}},u=e.effect=new w(c,()=>ti(e.update),e.scope),l=e.update=u.run.bind(u);l.id=e.uid,Sn(e,!0),l()},U=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,nn(e,t.props,r,n),gn(e,t.children,n),E(),ai(void 0,e.update),T()},F=(e,t,n,r,i,o,s,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,f=t.children,{patchFlag:h,shapeFlag:p}=t;if(h>0){if(128&h)return void $(u,f,n,r,i,o,s,a,c);if(256&h)return void V(u,f,n,r,i,o,s,a,c)}8&p?(16&l&&q(u,i,o),f!==u&&d(n,f)):16&l?16&p?$(u,f,n,r,i,o,s,a,c):q(u,i,o,!0):(8&l&&d(n,""),16&p&&x(f,n,r,i,o,s,a,c))},V=(e,t,n,i,o,s,a,c,u)=>{e=e||r["a"],t=t||r["a"];const l=e.length,d=t.length,f=Math.min(l,d);let h;for(h=0;h<f;h++){const r=t[h]=u?ur(t[h]):cr(t[h]);g(e[h],r,n,null,o,s,a,c,u)}l>d?q(e,o,s,!0,!1,f):x(t,n,i,o,s,a,c,u,f)},$=(e,t,n,i,o,s,a,c,u)=>{let l=0;const d=t.length;let f=e.length-1,h=d-1;while(l<=f&&l<=h){const r=e[l],i=t[l]=u?ur(t[l]):cr(t[l]);if(!Yn(r,i))break;g(r,i,n,null,o,s,a,c,u),l++}while(l<=f&&l<=h){const r=e[f],i=t[h]=u?ur(t[h]):cr(t[h]);if(!Yn(r,i))break;g(r,i,n,null,o,s,a,c,u),f--,h--}if(l>f){if(l<=h){const e=h+1,r=e<d?t[e].el:i;while(l<=h)g(null,t[l]=u?ur(t[l]):cr(t[l]),n,r,o,s,a,c,u),l++}}else if(l>h)while(l<=f)z(e[l],o,s,!0),l++;else{const p=l,m=l,v=new Map;for(l=m;l<=h;l++){const e=t[l]=u?ur(t[l]):cr(t[l]);null!=e.key&&v.set(e.key,l)}let b,y=0;const _=h-m+1;let w=!1,O=0;const I=new Array(_);for(l=0;l<_;l++)I[l]=0;for(l=p;l<=f;l++){const r=e[l];if(y>=_){z(r,o,s,!0);continue}let i;if(null!=r.key)i=v.get(r.key);else for(b=m;b<=h;b++)if(0===I[b-m]&&Yn(r,t[b])){i=b;break}void 0===i?z(r,o,s,!0):(I[i-m]=l+1,i>=O?O=i:w=!0,g(r,t[i],n,null,o,s,a,c,u),y++)}const j=w?Cn(I):r["a"];for(b=j.length-1,l=_-1;l>=0;l--){const e=m+l,r=t[e],f=e+1<d?t[e+1].el:i;0===I[l]?g(null,r,n,f,o,s,a,c,u):w&&(b<0||l!==j[b]?B(r,n,f,2):b--)}}},B=(e,t,n,r,o=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void B(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,X);if(a===Dn){i(s,t,n);for(let e=0;e<u.length;e++)B(u[e],t,n,r);return void i(e.anchor,t,n)}if(a===Vn)return void O(e,t,n);const d=2!==r&&1&l&&c;if(d)if(0===r)c.beforeEnter(s),i(s,t,n),En(()=>c.enter(s),o);else{const{leave:e,delayLeave:r,afterLeave:o}=c,a=()=>i(s,t,n),u=()=>{e(s,()=>{a(),o&&o()})};r?r(s,a,u):u()}else i(s,t,n)},z=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:d,dirs:f}=e;if(null!=a&&In(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const h=1&l&&f,p=!_t(e);let m;if(p&&(m=s&&s.onVnodeBeforeUnmount)&&fr(m,t,e),6&l)W(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);h&&yn(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,X,r):u&&(o!==Dn||d>0&&64&d)?q(u,t,n,!1,!0):(o===Dn&&384&d||!i&&16&l)&&q(c,t,n),r&&G(e)}(p&&(m=s&&s.onVnodeUnmounted)||h)&&En(()=>{m&&fr(m,t,e),h&&yn(e,null,t,"unmounted")},n)},G=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Dn)return void H(n,r);if(t===Vn)return void I(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},H=(e,t)=>{let n;while(e!==t)n=h(e),o(e),e=n;o(t)},W=(e,t,n)=>{const{bum:i,scope:o,update:s,subTree:a,um:c}=e;i&&Object(r["n"])(i),o.stop(),s&&(s.active=!1,z(a,e,t,n)),c&&En(c,t),En(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},q=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)z(e[s],t,n,r,i)},K=e=>6&e.shapeFlag?K(e.component.subTree):128&e.shapeFlag?e.suspense.next():h(e.anchor||e.el),J=(e,t,n)=>{null==e?t._vnode&&z(t._vnode,null,null,!0):g(t._vnode||null,e,t,null,null,null,n),ci(),t._vnode=e},X={p:g,um:z,m:B,r:G,mt:N,mc:x,pc:F,pbc:A,n:K,o:e};let Y,Q;return t&&([Y,Q]=t(X)),{render:J,hydrate:Y,createApp:On(J,Y)}}function Sn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function xn(e,t,n=!1){const i=e.children,o=t.children;if(Object(r["o"])(i)&&Object(r["o"])(o))for(let r=0;r<i.length;r++){const e=i[r];let t=o[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[r]=ur(o[r]),t.el=e.el),n||xn(e,t))}}function Cn(e){const t=e.slice(),n=[0];let r,i,o,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<c?o=a+1:s=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}const An=e=>e.__isTeleport;const Rn="components";function Pn(e,t){return Nn(Rn,e,!0,t)||e}const Ln=Symbol();function Nn(e,t,n=!0,i=!1){const o=Je||yr;if(o){const n=o.type;if(e===Rn){const e=Lr(n);if(e&&(e===t||e===Object(r["e"])(t)||e===Object(r["f"])(Object(r["e"])(t))))return n}const s=Mn(o[e]||n[e],t)||Mn(o.appContext[e],t);return!s&&i?n:s}}function Mn(e,t){return e&&(e[t]||e[Object(r["e"])(t)]||e[Object(r["f"])(Object(r["e"])(t))])}const Dn=Symbol(void 0),Un=Symbol(void 0),Fn=Symbol(void 0),Vn=Symbol(void 0),$n=[];let Bn=null;function zn(e=!1){$n.push(Bn=e?null:[])}function Gn(){$n.pop(),Bn=$n[$n.length-1]||null}let Hn=1;function Wn(e){Hn+=e}function qn(e){return e.dynamicChildren=Hn>0?Bn||r["a"]:null,Gn(),Hn>0&&Bn&&Bn.push(e),e}function Kn(e,t,n,r,i,o){return qn(tr(e,t,n,r,i,o,!0))}function Jn(e,t,n,r,i){return qn(nr(e,t,n,r,i,!0))}function Xn(e){return!!e&&!0===e.__v_isVNode}function Yn(e,t){return e.type===t.type&&e.key===t.key}const Qn="__vInternal",Zn=({key:e})=>null!=e?e:null,er=({ref:e,ref_key:t,ref_for:n})=>null!=e?Object(r["D"])(e)||Me(e)||Object(r["p"])(e)?{i:Je,r:e,k:t,f:!!n}:e:null;function tr(e,t=null,n=null,i=0,o=null,s=(e===Dn?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Zn(t),ref:t&&er(t),scopeId:Xe,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null};return c?(lr(u,n),128&s&&e.normalize(u)):n&&(u.shapeFlag|=Object(r["D"])(n)?8:16),Hn>0&&!a&&Bn&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&Bn.push(u),u}const nr=rr;function rr(e,t=null,n=null,i=0,o=null,s=!1){if(e&&e!==Ln||(e=Fn),Xn(e)){const r=or(e,t,!0);return n&&lr(r,n),r}if(Nr(e)&&(e=e.__vccOpts),t){t=ir(t);let{class:e,style:n}=t;e&&!Object(r["D"])(e)&&(t.class=Object(r["I"])(e)),Object(r["v"])(n)&&(xe(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),t.style=Object(r["J"])(n))}const a=Object(r["D"])(e)?1:ot(e)?128:An(e)?64:Object(r["v"])(e)?4:Object(r["p"])(e)?2:0;return tr(e,t,n,i,o,a,s,!0)}function ir(e){return e?xe(e)||Qn in e?Object(r["h"])({},e):e:null}function or(e,t,n=!1){const{props:i,ref:o,patchFlag:s,children:a}=e,c=t?dr(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Zn(c),ref:t&&t.ref?n&&o?Object(r["o"])(o)?o.concat(er(t)):[o,er(t)]:er(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Dn?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&or(e.ssContent),ssFallback:e.ssFallback&&or(e.ssFallback),el:e.el,anchor:e.anchor};return u}function sr(e=" ",t=0){return nr(Un,null,e,t)}function ar(e="",t=!1){return t?(zn(),Jn(Fn,null,e)):nr(Fn,null,e)}function cr(e){return null==e||"boolean"===typeof e?nr(Fn):Object(r["o"])(e)?nr(Dn,null,e.slice()):"object"===typeof e?ur(e):nr(Un,null,String(e))}function ur(e){return null===e.el||e.memo?e:or(e)}function lr(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if(Object(r["o"])(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),lr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Qn in t?3===r&&Je&&(1===Je.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Je}}else Object(r["p"])(t)?(t={default:t,_ctx:Je},n=32):(t=String(t),64&i?(n=16,t=[sr(t)]):n=8);e.children=t,e.shapeFlag|=n}function dr(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=Object(r["I"])([t.class,i.class]));else if("style"===e)t.style=Object(r["J"])([t.style,i.style]);else if(Object(r["w"])(e)){const n=t[e],o=i[e];n===o||Object(r["o"])(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=i[e])}return t}function fr(e,t,n,r=null){Dr(e,t,7,[n,r])}const hr=e=>e?Ir(e)?Pr(e)||e.proxy:hr(e.parent):null,pr=Object(r["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>hr(e.parent),$root:e=>hr(e.root),$emit:e=>e.emit,$options:e=>Wt(e),$forceUpdate:e=>()=>ti(e.update),$nextTick:e=>Zr.bind(e.proxy),$watch:e=>pi.bind(e)}),mr={get({_:e},t){const{ctx:n,setupState:i,data:o,props:s,accessCache:a,type:c,appContext:u}=e;let l;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 1:return i[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(i!==r["b"]&&Object(r["k"])(i,t))return a[t]=1,i[t];if(o!==r["b"]&&Object(r["k"])(o,t))return a[t]=2,o[t];if((l=e.propsOptions[0])&&Object(r["k"])(l,t))return a[t]=3,s[t];if(n!==r["b"]&&Object(r["k"])(n,t))return a[t]=4,n[t];$t&&(a[t]=0)}}const d=pr[t];let f,h;return d?("$attrs"===t&&S(e,"get",t),d(e)):(f=c.__cssModules)&&(f=f[t])?f:n!==r["b"]&&Object(r["k"])(n,t)?(a[t]=4,n[t]):(h=u.config.globalProperties,Object(r["k"])(h,t)?h[t]:void 0)},set({_:e},t,n){const{data:i,setupState:o,ctx:s}=e;if(o!==r["b"]&&Object(r["k"])(o,t))o[t]=n;else if(i!==r["b"]&&Object(r["k"])(i,t))i[t]=n;else if(Object(r["k"])(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:o,propsOptions:s}},a){let c;return!!n[a]||e!==r["b"]&&Object(r["k"])(e,a)||t!==r["b"]&&Object(r["k"])(t,a)||(c=s[0])&&Object(r["k"])(c,a)||Object(r["k"])(i,a)||Object(r["k"])(pr,a)||Object(r["k"])(o.config.globalProperties,a)}};const vr=_n();let gr=0;function br(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||vr,a={uid:gr++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sn(i,o),emitsOptions:qe(i,o),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:i.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=We.bind(null,a),e.ce&&e.ce(a),a}let yr=null;const _r=()=>yr||Je,wr=e=>{yr=e,e.scope.on()},Or=()=>{yr&&yr.scope.off(),yr=null};function Ir(e){return 4&e.vnode.shapeFlag}let jr,Er,kr=!1;function Tr(e,t=!1){kr=t;const{props:n,children:r}=e.vnode,i=Ir(e);tn(e,n,i,t),vn(e,r);const o=i?Sr(e,t):void 0;return kr=!1,o}function Sr(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ae(new Proxy(e.ctx,mr));const{setup:i}=n;if(i){const n=e.setupContext=i.length>1?Rr(e):null;wr(e),E();const o=Mr(i,e,0,[e.props,n]);if(T(),Or(),Object(r["y"])(o)){if(o.then(Or,Or),t)return o.then(n=>{xr(e,n,t)}).catch(t=>{Ur(t,e,0)});e.asyncDep=o}else xr(e,o,t)}else Cr(e,t)}function xr(e,t,n){Object(r["p"])(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Object(r["v"])(t)&&(e.setupState=ze(t)),Cr(e,n)}function Cr(e,t,n){const i=e.type;if(!e.render){if(!t&&jr&&!i.render){const t=i.template;if(t){0;const{isCustomElement:n,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:a}=i,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:s},o),a);i.render=jr(t,c)}}e.render=i.render||r["d"],Er&&Er(e)}wr(e),E(),Bt(e),T(),Or()}function Ar(e){return new Proxy(e.attrs,{get(t,n){return S(e,"get","$attrs"),t[n]}})}function Rr(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Ar(e))},slots:e.slots,emit:e.emit,expose:t}}function Pr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ze(Ae(e.exposed)),{get(t,n){return n in t?t[n]:n in pr?pr[n](e):void 0}}))}function Lr(e){return Object(r["p"])(e)&&e.displayName||e.name}function Nr(e){return Object(r["p"])(e)&&"__vccOpts"in e}function Mr(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){Ur(o,t,n)}return i}function Dr(e,t,n,i){if(Object(r["p"])(e)){const o=Mr(e,t,n,i);return o&&Object(r["y"])(o)&&o.catch(e=>{Ur(e,t,n)}),o}const o=[];for(let r=0;r<e.length;r++)o.push(Dr(e[r],t,n,i));return o}function Ur(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const s=t.appContext.config.errorHandler;if(s)return void Mr(s,null,10,[e,i,o])}Fr(e,n,i,r)}function Fr(e,t,n,r=!0){console.error(e)}let Vr=!1,$r=!1;const Br=[];let zr=0;const Gr=[];let Hr=null,Wr=0;const qr=[];let Kr=null,Jr=0;const Xr=Promise.resolve();let Yr=null,Qr=null;function Zr(e){const t=Yr||Xr;return e?t.then(this?e.bind(this):e):t}function ei(e){let t=zr+1,n=Br.length;while(t<n){const r=t+n>>>1,i=ui(Br[r]);i<e?t=r+1:n=r}return t}function ti(e){Br.length&&Br.includes(e,Vr&&e.allowRecurse?zr+1:zr)||e===Qr||(null==e.id?Br.push(e):Br.splice(ei(e.id),0,e),ni())}function ni(){Vr||$r||($r=!0,Yr=Xr.then(li))}function ri(e){const t=Br.indexOf(e);t>zr&&Br.splice(t,1)}function ii(e,t,n,i){Object(r["o"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?i+1:i)||n.push(e),ni()}function oi(e){ii(e,Hr,Gr,Wr)}function si(e){ii(e,Kr,qr,Jr)}function ai(e,t=null){if(Gr.length){for(Qr=t,Hr=[...new Set(Gr)],Gr.length=0,Wr=0;Wr<Hr.length;Wr++)Hr[Wr]();Hr=null,Wr=0,Qr=null,ai(e,t)}}function ci(e){if(qr.length){const e=[...new Set(qr)];if(qr.length=0,Kr)return void Kr.push(...e);for(Kr=e,Kr.sort((e,t)=>ui(e)-ui(t)),Jr=0;Jr<Kr.length;Jr++)Kr[Jr]();Kr=null,Jr=0}}const ui=e=>null==e.id?1/0:e.id;function li(e){$r=!1,Vr=!0,ai(e),Br.sort((e,t)=>ui(e)-ui(t));r["d"];try{for(zr=0;zr<Br.length;zr++){const e=Br[zr];e&&!1!==e.active&&Mr(e,null,14)}}finally{zr=0,Br.length=0,ci(e),Vr=!1,Yr=null,(Br.length||Gr.length||qr.length)&&li(e)}}const di={};function fi(e,t,n){return hi(e,t,n)}function hi(e,t,{immediate:n,deep:i,flush:o,onTrack:s,onTrigger:a}=r["b"]){const c=yr;let u,l,d=!1,f=!1;if(Me(e)?(u=()=>e.value,d=!!e._shallow):Te(e)?(u=()=>e,i=!0):Object(r["o"])(e)?(f=!0,d=e.some(Te),u=()=>e.map(e=>Me(e)?e.value:Te(e)?vi(e):Object(r["p"])(e)?Mr(e,c,2):void 0)):u=Object(r["p"])(e)?t?()=>Mr(e,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),Dr(e,c,3,[h])}:r["d"],t&&i){const e=u;u=()=>vi(e())}let h=e=>{l=g.onStop=()=>{Mr(e,c,4)}};if(kr)return h=r["d"],t?n&&Dr(t,c,3,[u(),f?[]:void 0,h]):u(),r["d"];let p=f?[]:di;const m=()=>{if(g.active)if(t){const e=g.run();(i||d||(f?e.some((e,t)=>Object(r["j"])(e,p[t])):Object(r["j"])(e,p)))&&(l&&l(),Dr(t,c,3,[e,p===di?void 0:p,h]),p=e)}else g.run()};let v;m.allowRecurse=!!t,v="sync"===o?m:"post"===o?()=>En(m,c&&c.suspense):()=>{!c||c.isMounted?oi(m):m()};const g=new w(u,v);return t?n?m():p=g.run():"post"===o?En(g.run.bind(g),c&&c.suspense):g.run(),()=>{g.stop(),c&&c.scope&&Object(r["K"])(c.scope.effects,g)}}function pi(e,t,n){const i=this.proxy,o=Object(r["D"])(e)?e.includes(".")?mi(i,e):()=>i[e]:e.bind(i,i);let s;Object(r["p"])(t)?s=t:(s=t.handler,n=t);const a=yr;wr(this);const c=hi(o,s.bind(i),n);return a?wr(a):Or(),c}function mi(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function vi(e,t){if(!Object(r["v"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),Me(e))vi(e.value,t);else if(Object(r["o"])(e))for(let n=0;n<e.length;n++)vi(e[n],t);else if(Object(r["B"])(e)||Object(r["t"])(e))e.forEach(e=>{vi(e,t)});else if(Object(r["x"])(e))for(const n in e)vi(e[n],t);return e}function gi(e,t,n){const i=arguments.length;return 2===i?Object(r["v"])(t)&&!Object(r["o"])(t)?Xn(t)?nr(e,null,[t]):nr(e,t):nr(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Xn(n)&&(n=[n]),nr(e,t,n))}Symbol("");const bi="3.2.26",yi="http://www.w3.org/2000/svg",_i="undefined"!==typeof document?document:null,wi=new Map,Oi={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?_i.createElementNS(yi,e):_i.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>_i.createTextNode(e),createComment:e=>_i.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>_i.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const i=n?n.previousSibling:t.lastChild;let o=wi.get(e);if(!o){const t=_i.createElement("template");if(t.innerHTML=r?`<svg>${e}</svg>`:e,o=t.content,r){const e=o.firstChild;while(e.firstChild)o.appendChild(e.firstChild);o.removeChild(e)}wi.set(e,o)}return t.insertBefore(o.cloneNode(!0),n),[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Ii(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function ji(e,t,n){const i=e.style,o=Object(r["D"])(n);if(n&&!o){for(const e in n)ki(i,e,n[e]);if(t&&!Object(r["D"])(t))for(const e in t)null==n[e]&&ki(i,e,"")}else{const r=i.display;o?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const Ei=/\s*!important$/;function ki(e,t,n){if(Object(r["o"])(n))n.forEach(n=>ki(e,t,n));else if(t.startsWith("--"))e.setProperty(t,n);else{const i=xi(e,t);Ei.test(n)?e.setProperty(Object(r["l"])(i),n.replace(Ei,""),"important"):e[i]=n}}const Ti=["Webkit","Moz","ms"],Si={};function xi(e,t){const n=Si[t];if(n)return n;let i=Object(r["e"])(t);if("filter"!==i&&i in e)return Si[t]=i;i=Object(r["f"])(i);for(let r=0;r<Ti.length;r++){const n=Ti[r]+i;if(n in e)return Si[t]=n}return t}const Ci="http://www.w3.org/1999/xlink";function Ai(e,t,n,i,o){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(Ci,t.slice(6,t.length)):e.setAttributeNS(Ci,t,n);else{const i=Object(r["C"])(t);null==n||i&&!Object(r["m"])(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Ri(e,t,n,i,o,s,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,o,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const i=typeof e[t];if("boolean"===i)return void(e[t]=Object(r["m"])(n));if(null==n&&"string"===i)return e[t]="",void e.removeAttribute(t);if("number"===i){try{e[t]=0}catch(c){}return void e.removeAttribute(t)}}try{e[t]=n}catch(u){0}}let Pi=Date.now,Li=!1;if("undefined"!==typeof window){Pi()>document.createEvent("Event").timeStamp&&(Pi=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Li=!!(e&&Number(e[1])<=53)}let Ni=0;const Mi=Promise.resolve(),Di=()=>{Ni=0},Ui=()=>Ni||(Mi.then(Di),Ni=Pi());function Fi(e,t,n,r){e.addEventListener(t,n,r)}function Vi(e,t,n,r){e.removeEventListener(t,n,r)}function $i(e,t,n,r,i=null){const o=e._vei||(e._vei={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=zi(t);if(r){const s=o[t]=Gi(r,i);Fi(e,n,s,a)}else s&&(Vi(e,n,s,a),o[t]=void 0)}}const Bi=/(?:Once|Passive|Capture)$/;function zi(e){let t;if(Bi.test(e)){let n;t={};while(n=e.match(Bi))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(r["l"])(e.slice(2)),t]}function Gi(e,t){const n=e=>{const r=e.timeStamp||Pi();(Li||r>=n.attached-1)&&Dr(Hi(e,n.value),t,5,[e])};return n.value=e,n.attached=Ui(),n}function Hi(e,t){if(Object(r["o"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e(t))}return t}const Wi=/^on[a-z]/,qi=(e,t,n,i,o=!1,s,a,c,u)=>{"class"===t?Ii(e,i,o):"style"===t?ji(e,n,i):Object(r["w"])(t)?Object(r["u"])(t)||$i(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):Ki(e,t,i,o))?Ri(e,t,i,s,a,c,u):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),Ai(e,t,i,o))};function Ki(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&Wi.test(t)&&Object(r["p"])(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!Wi.test(t)||!Object(r["D"])(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const Ji="transition",Xi="animation",Yi=(e,{slots:t})=>gi(ft,to(e),t);Yi.displayName="Transition";const Qi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Zi=(Yi.props=Object(r["h"])({},ft.props,Qi),(e,t=[])=>{Object(r["o"])(e)?e.forEach(e=>e(...t)):e&&e(...t)}),eo=e=>!!e&&(Object(r["o"])(e)?e.some(e=>e.length>1):e.length>1);function to(e){const t={};for(const r in e)r in Qi||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=s,appearActiveClass:l=a,appearToClass:d=c,leaveFromClass:f=n+"-leave-from",leaveActiveClass:h=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=e,m=no(o),v=m&&m[0],g=m&&m[1],{onBeforeEnter:b,onEnter:y,onEnterCancelled:_,onLeave:w,onLeaveCancelled:O,onBeforeAppear:I=b,onAppear:j=y,onAppearCancelled:E=_}=t,k=(e,t,n)=>{oo(e,t?d:c),oo(e,t?l:a),n&&n()},T=(e,t)=>{oo(e,p),oo(e,h),t&&t()},S=e=>(t,n)=>{const r=e?j:y,o=()=>k(t,e,n);Zi(r,[t,o]),so(()=>{oo(t,e?u:s),io(t,e?d:c),eo(r)||co(t,i,v,o)})};return Object(r["h"])(t,{onBeforeEnter(e){Zi(b,[e]),io(e,s),io(e,a)},onBeforeAppear(e){Zi(I,[e]),io(e,u),io(e,l)},onEnter:S(!1),onAppear:S(!0),onLeave(e,t){const n=()=>T(e,t);io(e,f),ho(),io(e,h),so(()=>{oo(e,f),io(e,p),eo(w)||co(e,i,g,n)}),Zi(w,[e,n])},onEnterCancelled(e){k(e,!1),Zi(_,[e])},onAppearCancelled(e){k(e,!0),Zi(E,[e])},onLeaveCancelled(e){T(e),Zi(O,[e])}})}function no(e){if(null==e)return null;if(Object(r["v"])(e))return[ro(e.enter),ro(e.leave)];{const t=ro(e);return[t,t]}}function ro(e){const t=Object(r["M"])(e);return t}function io(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function oo(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function so(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ao=0;function co(e,t,n,r){const i=e._endId=++ao,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=uo(e,t);if(!s)return r();const u=s+"end";let l=0;const d=()=>{e.removeEventListener(u,f),o()},f=t=>{t.target===e&&++l>=c&&d()};setTimeout(()=>{l<c&&d()},a+1),e.addEventListener(u,f)}function uo(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(Ji+"Delay"),o=r(Ji+"Duration"),s=lo(i,o),a=r(Xi+"Delay"),c=r(Xi+"Duration"),u=lo(a,c);let l=null,d=0,f=0;t===Ji?s>0&&(l=Ji,d=s,f=o.length):t===Xi?u>0&&(l=Xi,d=u,f=c.length):(d=Math.max(s,u),l=d>0?s>u?Ji:Xi:null,f=l?l===Ji?o.length:c.length:0);const h=l===Ji&&/\b(transform|all)(,|$)/.test(n[Ji+"Property"]);return{type:l,timeout:d,propCount:f,hasTransform:h}}function lo(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>fo(t)+fo(e[n])))}function fo(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ho(){return document.body.offsetHeight}new WeakMap,new WeakMap;const po=e=>{const t=e.props["onUpdate:modelValue"];return Object(r["o"])(t)?e=>Object(r["n"])(t,e):t};function mo(e){e.target.composing=!0}function vo(e){const t=e.target;t.composing&&(t.composing=!1,go(t,"input"))}function go(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const bo={created(e,{modifiers:{lazy:t,trim:n,number:i}},o){e._assign=po(o);const s=i||o.props&&"number"===o.props.type;Fi(e,t?"change":"input",t=>{if(t.target.composing)return;let i=e.value;n?i=i.trim():s&&(i=Object(r["M"])(i)),e._assign(i)}),n&&Fi(e,"change",()=>{e.value=e.value.trim()}),t||(Fi(e,"compositionstart",mo),Fi(e,"compositionend",vo),Fi(e,"change",vo))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:o}},s){if(e._assign=po(s),e.composing)return;if(document.activeElement===e){if(n)return;if(i&&e.value.trim()===t)return;if((o||"number"===e.type)&&Object(r["M"])(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const yo=["ctrl","shift","alt","meta"],_o={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>yo.some(n=>e[n+"Key"]&&!t.includes(n))},wo=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=_o[t[e]];if(r&&r(n,t))return}return e(n,...r)};const Oo=Object(r["h"])({patchProp:qi},Oi);let Io;function jo(){return Io||(Io=kn(Oo))}const Eo=(...e)=>{const t=jo().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=ko(e);if(!i)return;const o=t._component;Object(r["p"])(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function ko(e){if(Object(r["D"])(e)){const t=document.querySelector(e);return t}return e}},"7b0b":function(e,t,n){var r=n("da84"),i=n("1d80"),o=r.Object;e.exports=function(e){return o(i(e))}},"7c73":function(e,t,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),d=">",f="<",h="prototype",p="script",m=l("IE_PROTO"),v=function(){},g=function(e){return f+p+d+e+f+"/"+p+d},b=function(e){e.write(g("")),e.close();var t=e.parentWindow.Object;return e=null,t},y=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(g("document.F=Object")),e.close(),e.F},_=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}_="undefined"!=typeof document?document.domain&&r?b(r):y():b(r);var e=s.length;while(e--)delete _[h][s[e]];return _()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(v[h]=i(e),n=new v,v[h]=null,n[m]=e):n=_(),void 0===t?n:o.f(n,t)}},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),i=n("c65b"),o=n("c430"),s=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),d=n("d44e"),f=n("9112"),h=n("6eeb"),p=n("b622"),m=n("3f8c"),v=n("ae93"),g=s.PROPER,b=s.CONFIGURABLE,y=v.IteratorPrototype,_=v.BUGGY_SAFARI_ITERATORS,w=p("iterator"),O="keys",I="values",j="entries",E=function(){return this};e.exports=function(e,t,n,s,p,v,k){c(n,t,s);var T,S,x,C=function(e){if(e===p&&N)return N;if(!_&&e in P)return P[e];switch(e){case O:return function(){return new n(this,e)};case I:return function(){return new n(this,e)};case j:return function(){return new n(this,e)}}return function(){return new n(this)}},A=t+" Iterator",R=!1,P=e.prototype,L=P[w]||P["@@iterator"]||p&&P[p],N=!_&&L||C(p),M="Array"==t&&P.entries||L;if(M&&(T=u(M.call(new e)),T!==Object.prototype&&T.next&&(o||u(T)===y||(l?l(T,y):a(T[w])||h(T,w,E)),d(T,A,!0,!0),o&&(m[A]=E))),g&&p==I&&L&&L.name!==I&&(!o&&b?f(P,"name",I):(R=!0,N=function(){return i(L,this)})),p)if(S={values:C(I),keys:v?N:C(O),entries:C(j)},k)for(x in S)(_||R||!(x in P))&&h(P,x,S[x]);else r({target:t,proto:!0,forced:_||R},S);return o&&!k||P[w]===N||h(P,w,N,{name:p}),m[t]=N,S}},"7f9a":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("8925"),s=r.WeakMap;e.exports=i(s)&&/native code/.test(o(s))},"825a":function(e,t,n){var r=n("da84"),i=n("861d"),o=r.String,s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not an object")}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(e,t,n){var r=n("1626");e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},8925:function(e,t,n){var r=n("e330"),i=n("1626"),o=n("c6cd"),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},"90e3":function(e,t,n){var r=n("e330"),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},9112:function(e,t,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},"94ca":function(e,t,n){var r=n("d039"),i=n("1626"),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(R){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof v?t:v,o=Object.create(i.prototype),s=new x(r||[]);return o._invoke=E(e,n,s),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(R){return{type:"throw",arg:R}}}e.wrap=u;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",m={};function v(){}function g(){}function b(){}var y={};c(y,o,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(C([])));w&&w!==n&&r.call(w,o)&&(y=w);var O=b.prototype=v.prototype=Object.create(y);function I(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){function n(i,o,s,a){var c=l(e[i],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"===typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,s,a)}),(function(e){n("throw",e,s,a)})):t.resolve(d).then((function(e){u.value=e,s(u)}),(function(e){return n("throw",e,s,a)}))}a(c.arg)}var i;function o(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function E(e,t,n){var r=d;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return A()}n.method=i,n.arg=o;while(1){var s=n.delegate;if(s){var a=k(s,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function k(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function C(e){if(e){var n=e[o];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,s=function n(){while(++i<e.length)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return s.next=s}}return{next:A}}function A(){return{value:t,done:!0}}return g.prototype=b,c(O,"constructor",b),c(b,"constructor",g),g.displayName=c(b,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,c(e,a,"GeneratorFunction")),e.prototype=Object.create(O),e},e.awrap=function(e){return{__await:e}},I(j.prototype),c(j.prototype,s,(function(){return this})),e.AsyncIterator=j,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var s=new j(u(t,n,r,i),o);return e.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},I(O),c(O,a,"Generator"),c(O,o,(function(){return this})),c(O,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=C,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return a.type="throw",a.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:C(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"9a1f":function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("59ed"),s=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;e.exports=function(e,t){var n=arguments.length<2?c(e):t;if(o(n))return s(i(n,e));throw u(a(e)+" is not iterable")}},"9bf2":function(e,t,n){var r=n("da84"),i=n("83ab"),o=n("0cfb"),s=n("aed9"),a=n("825a"),c=n("a04b"),u=r.TypeError,l=Object.defineProperty,d=Object.getOwnPropertyDescriptor,f="enumerable",h="configurable",p="writable";t.f=i?s?function(e,t,n){if(a(e),t=c(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=d(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:h in n?n[h]:r[h],enumerable:f in n?n[f]:r[f],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(a(e),t=c(t),a(n),o)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n,u){var l=t+" Iterator";return e.prototype=i(r,{next:o(+!u,n)}),s(e,l,!1,!0),a[l]=c,e}},"9ff4":function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return w})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return I})),n.d(t,"e",(function(){return J})),n.d(t,"f",(function(){return Q})),n.d(t,"g",(function(){return ne})),n.d(t,"h",(function(){return S})),n.d(t,"i",(function(){return oe})),n.d(t,"j",(function(){return ee})),n.d(t,"k",(function(){return A})),n.d(t,"l",(function(){return Y})),n.d(t,"m",(function(){return c})),n.d(t,"n",(function(){return te})),n.d(t,"o",(function(){return R})),n.d(t,"p",(function(){return M})),n.d(t,"q",(function(){return o})),n.d(t,"r",(function(){return v})),n.d(t,"s",(function(){return H})),n.d(t,"t",(function(){return P})),n.d(t,"u",(function(){return T})),n.d(t,"v",(function(){return F})),n.d(t,"w",(function(){return k})),n.d(t,"x",(function(){return G})),n.d(t,"y",(function(){return V})),n.d(t,"z",(function(){return W})),n.d(t,"A",(function(){return g})),n.d(t,"B",(function(){return L})),n.d(t,"C",(function(){return a})),n.d(t,"D",(function(){return D})),n.d(t,"E",(function(){return U})),n.d(t,"F",(function(){return y})),n.d(t,"G",(function(){return _})),n.d(t,"H",(function(){return r})),n.d(t,"I",(function(){return h})),n.d(t,"J",(function(){return u})),n.d(t,"K",(function(){return x})),n.d(t,"L",(function(){return Z})),n.d(t,"M",(function(){return re})),n.d(t,"N",(function(){return z}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(s);function c(e){return!!e||""===e}function u(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=D(r)?f(r):u(r);if(i)for(const e in i)t[e]=i[e]}return t}return D(e)||F(e)?e:void 0}const l=/;(?![^(]*\))/g,d=/:(.+)/;function f(e){const t={};return e.split(l).forEach(e=>{if(e){const n=e.split(d);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function h(e){let t="";if(D(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=h(e[n]);r&&(t+=r+" ")}else if(F(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",m="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",v=r(p),g=r(m);function b(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=y(e[r],t[r]);return n}function y(e,t){if(e===t)return!0;let n=N(e),r=N(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=R(e),r=R(t),n||r)return!(!n||!r)&&b(e,t);if(n=F(e),r=F(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!y(e[n],t[n]))return!1}}return String(e)===String(t)}function _(e,t){return e.findIndex(e=>y(e,t))}const w={},O=[],I=()=>{},j=()=>!1,E=/^on[^a-z]/,k=e=>E.test(e),T=e=>e.startsWith("onUpdate:"),S=Object.assign,x=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},C=Object.prototype.hasOwnProperty,A=(e,t)=>C.call(e,t),R=Array.isArray,P=e=>"[object Map]"===B(e),L=e=>"[object Set]"===B(e),N=e=>e instanceof Date,M=e=>"function"===typeof e,D=e=>"string"===typeof e,U=e=>"symbol"===typeof e,F=e=>null!==e&&"object"===typeof e,V=e=>F(e)&&M(e.then)&&M(e.catch),$=Object.prototype.toString,B=e=>$.call(e),z=e=>B(e).slice(8,-1),G=e=>"[object Object]"===B(e),H=e=>D(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,W=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),q=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},K=/-(\w)/g,J=q(e=>e.replace(K,(e,t)=>t?t.toUpperCase():"")),X=/\B([A-Z])/g,Y=q(e=>e.replace(X,"-$1").toLowerCase()),Q=q(e=>e.charAt(0).toUpperCase()+e.slice(1)),Z=q(e=>e?"on"+Q(e):""),ee=(e,t)=>!Object.is(e,t),te=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ne=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},re=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ie;const oe=()=>ie||(ie="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},a04b:function(e,t,n){var r=n("c04e"),i=n("d9b5");e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a79d:function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("fea9"),s=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),d=n("6eeb"),f=!!o&&s((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:f},{finally:function(e){var t=u(this,a("Promise")),n=c(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!i&&c(o)){var h=a("Promise").prototype["finally"];o.prototype["finally"]!==h&&d(o.prototype,"finally",h,{unsafe:!0})}},abc5:function(e,t,n){"use strict";(function(e){function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o}));const o="function"===typeof Proxy}).call(this,n("c8ba"))},ae93:function(e,t,n){"use strict";var r,i,o,s=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),d=n("b622"),f=n("c430"),h=d("iterator"),p=!1;[].keys&&(o=[].keys(),"next"in o?(i=u(u(o)),i!==Object.prototype&&(r=i)):p=!0);var m=void 0==r||s((function(){var e={};return r[h].call(e)!==e}));m?r={}:f&&(r=c(r)),a(r[h])||l(r,h,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},aed9:function(e,t,n){var r=n("83ab"),i=n("d039");e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},b041:function(e,t,n){"use strict";var r=n("00ee"),i=n("f5df");e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b575:function(e,t,n){var r,i,o,s,a,c,u,l,d=n("da84"),f=n("0366"),h=n("06cf").f,p=n("2cf4").set,m=n("1cdc"),v=n("d4c3"),g=n("a4b4"),b=n("605d"),y=d.MutationObserver||d.WebKitMutationObserver,_=d.document,w=d.process,O=d.Promise,I=h(d,"queueMicrotask"),j=I&&I.value;j||(r=function(){var e,t;b&&(e=w.domain)&&e.exit();while(i){t=i.fn,i=i.next;try{t()}catch(n){throw i?s():o=void 0,n}}o=void 0,e&&e.enter()},m||b||g||!y||!_?!v&&O&&O.resolve?(u=O.resolve(void 0),u.constructor=O,l=f(u.then,u),s=function(){l(r)}):b?s=function(){w.nextTick(r)}:(p=f(p,d),s=function(){p(r)}):(a=!0,c=_.createTextNode(""),new y(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),e.exports=j||function(e){var t={fn:e,next:void 0};o&&(o.next=t),i||(i=t,s()),o=t}},b622:function(e,t,n){var r=n("da84"),i=n("5692"),o=n("1a2d"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,d=l&&l["for"],f=c?l:l&&l.withoutSetter||s;e.exports=function(e){if(!o(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&o(l,e)?u[e]=l[e]:u[e]=c&&d?d(t):f(t)}return u[e]}},c04e:function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("861d"),s=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,d=u("toPrimitive");e.exports=function(e,t){if(!o(e)||s(e))return e;var n,r=a(e,d);if(r){if(void 0===t&&(t="default"),n=i(r,e,t),!o(n)||s(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},c430:function(e,t){e.exports=!1},c65b:function(e,t){var n=Function.prototype.call;e.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},c6b6:function(e,t,n){var r=n("e330"),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},c6cd:function(e,t,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var r=n("e330"),i=n("1a2d"),o=n("fc6a"),s=n("4d64").indexOf,a=n("d012"),c=r([].push);e.exports=function(e,t){var n,r=o(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},cc12:function(e,t,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},cca6:function(e,t,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(e,t,n){var r=n("825a"),i=n("861d"),o=n("f069");e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=o.f(e),s=n.resolve;return s(t),n.promise}},ce4e:function(e,t,n){var r=n("da84"),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("da84"),i=n("1626"),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);t.f=o?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},d2bb:function(e,t,n){var r=n("e330"),i=n("825a"),o=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,i=n("1a2d"),o=n("b622"),s=o("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!i(e,s)&&r(e,s,{configurable:!0,value:t})}},d4c3:function(e,t,n){var r=n("342f"),i=n("da84");e.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d959:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},d9b5:function(e,t,n){var r=n("da84"),i=n("d066"),o=n("1626"),s=n("3a9b"),a=n("fdbf"),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return o(t)&&s(t.prototype,c(e))}},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc4a:function(e,t,n){var r=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},ddb0:function(e,t,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("e260"),a=n("9112"),c=n("b622"),u=c("iterator"),l=c("toStringTag"),d=s.values,f=function(e,t){if(e){if(e[u]!==d)try{a(e,u,d)}catch(r){e[u]=d}if(e[l]||a(e,l,t),i[t])for(var n in s)if(e[n]!==s[n])try{a(e,n,s[n])}catch(r){e[n]=s[n]}}};for(var h in i)f(r[h]&&r[h].prototype,h);f(o,"DOMTokenList")},df75:function(e,t,n){var r=n("ca84"),i=n("7839");e.exports=Object.keys||function(e){return r(e,i)}},e163:function(e,t,n){var r=n("da84"),i=n("1a2d"),o=n("1626"),s=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,d=l.prototype;e.exports=c?l.getPrototypeOf:function(e){var t=s(e);if(i(t,u))return t[u];var n=t.constructor;return o(n)&&t instanceof n?n.prototype:t instanceof l?d:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),s=n("69f3"),a=n("9bf2").f,c=n("7dd0"),u=n("c430"),l=n("83ab"),d="Array Iterator",f=s.set,h=s.getterFor(d);e.exports=c(Array,"Array",(function(e,t){f(this,{type:d,target:r(e),index:0,kind:t})}),(function(){var e=h(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values");var p=o.Arguments=o.Array;if(i("keys"),i("values"),i("entries"),!u&&l&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(m){}},e2cc:function(e,t,n){var r=n("6eeb");e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},e330:function(e,t){var n=Function.prototype,r=n.bind,i=n.call,o=r&&r.bind(i,i);e.exports=r?function(e){return e&&o(e)}:function(e){return e&&function(){return i.apply(e,arguments)}}},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return d}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function d(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const s=o.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}}}},e6cf:function(e,t,n){"use strict";var r,i,o,s,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),d=n("c65b"),f=n("fea9"),h=n("6eeb"),p=n("e2cc"),m=n("d2bb"),v=n("d44e"),g=n("2626"),b=n("59ed"),y=n("1626"),_=n("861d"),w=n("19aa"),O=n("8925"),I=n("2266"),j=n("1c7e"),E=n("4840"),k=n("2cf4").set,T=n("b575"),S=n("cdf9"),x=n("44de"),C=n("f069"),A=n("e667"),R=n("01b4"),P=n("69f3"),L=n("94ca"),N=n("b622"),M=n("6069"),D=n("605d"),U=n("2d00"),F=N("species"),V="Promise",$=P.getterFor(V),B=P.set,z=P.getterFor(V),G=f&&f.prototype,H=f,W=G,q=u.TypeError,K=u.document,J=u.process,X=C.f,Y=X,Q=!!(K&&K.createEvent&&u.dispatchEvent),Z=y(u.PromiseRejectionEvent),ee="unhandledrejection",te="rejectionhandled",ne=0,re=1,ie=2,oe=1,se=2,ae=!1,ce=L(V,(function(){var e=O(H),t=e!==String(H);if(!t&&66===U)return!0;if(c&&!W["finally"])return!0;if(U>=51&&/native code/.test(e))return!1;var n=new H((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},i=n.constructor={};return i[F]=r,ae=n.then((function(){}))instanceof r,!ae||!t&&M&&!Z})),ue=ce||!j((function(e){H.all(e)["catch"]((function(){}))})),le=function(e){var t;return!(!_(e)||!y(t=e.then))&&t},de=function(e,t){var n,r,i,o=t.value,s=t.state==re,a=s?e.ok:e.fail,c=e.resolve,u=e.reject,l=e.domain;try{a?(s||(t.rejection===se&&ve(t),t.rejection=oe),!0===a?n=o:(l&&l.enter(),n=a(o),l&&(l.exit(),i=!0)),n===e.promise?u(q("Promise-chain cycle")):(r=le(n))?d(r,n,c,u):c(n)):u(o)}catch(f){l&&!i&&l.exit(),u(f)}},fe=function(e,t){e.notified||(e.notified=!0,T((function(){var n,r=e.reactions;while(n=r.get())de(n,e);e.notified=!1,t&&!e.rejection&&pe(e)})))},he=function(e,t,n){var r,i;Q?(r=K.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),u.dispatchEvent(r)):r={promise:t,reason:n},!Z&&(i=u["on"+e])?i(r):e===ee&&x("Unhandled promise rejection",n)},pe=function(e){d(k,u,(function(){var t,n=e.facade,r=e.value,i=me(e);if(i&&(t=A((function(){D?J.emit("unhandledRejection",r,n):he(ee,n,r)})),e.rejection=D||me(e)?se:oe,t.error))throw t.value}))},me=function(e){return e.rejection!==oe&&!e.parent},ve=function(e){d(k,u,(function(){var t=e.facade;D?J.emit("rejectionHandled",t):he(te,t,e.value)}))},ge=function(e,t,n){return function(r){e(t,r,n)}},be=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=ie,fe(e,!0))},ye=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw q("Promise can't be resolved itself");var r=le(t);r?T((function(){var n={done:!1};try{d(r,t,ge(ye,n,e),ge(be,n,e))}catch(i){be(n,i,e)}})):(e.value=t,e.state=re,fe(e,!1))}catch(i){be({done:!1},i,e)}}};if(ce&&(H=function(e){w(this,W),b(e),d(r,this);var t=$(this);try{e(ge(ye,t),ge(be,t))}catch(n){be(t,n)}},W=H.prototype,r=function(e){B(this,{type:V,done:!1,notified:!1,parent:!1,reactions:new R,rejection:!1,state:ne,value:void 0})},r.prototype=p(W,{then:function(e,t){var n=z(this),r=X(E(this,H));return n.parent=!0,r.ok=!y(e)||e,r.fail=y(t)&&t,r.domain=D?J.domain:void 0,n.state==ne?n.reactions.add(r):T((function(){de(r,n)})),r.promise},catch:function(e){return this.then(void 0,e)}}),i=function(){var e=new r,t=$(e);this.promise=e,this.resolve=ge(ye,t),this.reject=ge(be,t)},C.f=X=function(e){return e===H||e===o?new i(e):Y(e)},!c&&y(f)&&G!==Object.prototype)){s=G.then,ae||(h(G,"then",(function(e,t){var n=this;return new H((function(e,t){d(s,n,e,t)})).then(e,t)}),{unsafe:!0}),h(G,"catch",W["catch"],{unsafe:!0}));try{delete G.constructor}catch(_e){}m&&m(G,W)}a({global:!0,wrap:!0,forced:ce},{Promise:H}),v(H,V,!1,!0),g(V),o=l(V),a({target:V,stat:!0,forced:ce},{reject:function(e){var t=X(this);return d(t.reject,void 0,e),t.promise}}),a({target:V,stat:!0,forced:c||ce},{resolve:function(e){return S(c&&this===o?H:this,e)}}),a({target:V,stat:!0,forced:ue},{all:function(e){var t=this,n=X(t),r=n.resolve,i=n.reject,o=A((function(){var n=b(t.resolve),o=[],s=0,a=1;I(e,(function(e){var c=s++,u=!1;a++,d(n,t,e).then((function(e){u||(u=!0,o[c]=e,--a||r(o))}),i)})),--a||r(o)}));return o.error&&i(o.value),n.promise},race:function(e){var t=this,n=X(t),r=n.reject,i=A((function(){var i=b(t.resolve);I(e,(function(e){d(i,t,e).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e893:function(e,t,n){var r=n("1a2d"),i=n("56ef"),o=n("06cf"),s=n("9bf2");e.exports=function(e,t,n){for(var a=i(t),c=s.f,u=o.f,l=0;l<a.length;l++){var d=a[l];r(e,d)||n&&r(n,d)||c(e,d,u(t,d))}}},e95a:function(e,t,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||s[o]===e)}},ea7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return at})),n.d(t,"b",(function(){return ar})),n.d(t,"c",(function(){return ct})),n.d(t,"d",(function(){return ut}));var r=n("1fd5"),i=n("589b");function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var s=n("e691"),a=n("22e5");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r["b"]("auth","Firebase",c()),d=new s["b"]("@firebase/auth");function f(e,...t){d.logLevel<=s["a"].ERROR&&d.error(`Auth (${i["a"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(e,...t){throw v(e,...t)}function p(e,...t){return v(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n}),o=new r["b"]("auth","Firebase",i);return o.create(t,{appName:e.name})}function v(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function g(e,t,...n){if(!e)throw v(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function y(e,t){e||b(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=new Map;function w(e){y(e instanceof Function,"Expected a class definition");let t=_.get(e);return t?(y(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){const n=Object(i["b"])(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if(Object(r["f"])(i,null!==t&&void 0!==t?t:{}))return e;h(e,"already-initialized")}const o=n.initialize({options:t});return o}function I(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function E(){return"http:"===k()||"https:"===k()}function k(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||Object(r["j"])()||"connection"in navigator))||navigator.onLine}function S(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e,t){this.shortDelay=e,this.longDelay=t,y(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["m"])()||Object(r["n"])()}get(){return T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){y(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},P=new x(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function N(e,t,n,i,o={}){return M(e,o,async()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=Object(r["o"])(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),A.fetch()(U(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))})}async function M(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},R),t);try{const t=new F(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw V(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw V(e,"email-already-in-use",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(e,a,s);h(e,a)}}catch(o){if(o instanceof r["c"])throw o;h(e,"network-request-failed")}}async function D(e,t,n,r,i={}){const o=await N(e,t,n,r,i);return"mfaPendingCredential"in o&&h(e,"multi-factor-auth-required",{_serverResponse:o}),o}function U(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?C(e.config,i):`${e.config.apiScheme}://${i}`}class F{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"timeout")),P.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t){return N(e,"POST","/v1/accounts:delete",t)}async function B(e,t){return N(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t=!1){const n=Object(r["h"])(e),i=await n.getIdToken(t),o=W(i);g(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:z(H(o.auth_time)),issuedAtTime:z(H(o.iat)),expirationTime:z(H(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function H(e){return 1e3*Number(e)}function W(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["d"])(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(o){return f("Caught error parsing JWT payload as JSON",o),null}}function q(e){const t=W(e);return g(t,"internal-error"),g("undefined"!==typeof t.exp,"internal-error"),g("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r["c"]&&J(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=z(this.lastLoginAt),this.creationTime=z(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){var t;const n=e.auth,r=await e.getIdToken(),i=await K(e,B(n,{idToken:r}));g(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?te(o.providerUserInfo):[],a=ee(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Y(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,d)}async function Z(e){const t=Object(r["h"])(e);await Q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function te(e){return e.map(e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await M(e,{},async()=>{const n=Object(r["o"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=U(e,i,"/v1/token","key="+o),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(s,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g("undefined"!==typeof e.idToken,"internal-error"),g("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):q(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return g(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new re;return n&&(g("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(g("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(g("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){g("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class oe{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new Y(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return G(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,h=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,v=null!==(c=t.createdAt)&&void 0!==c?c:void 0,b=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:_,isAnonymous:w,providerData:O,stsTokenManager:I}=t;g(y&&I,e,"internal-error");const j=re.fromJSON(this.name,I);g("string"===typeof y,e,"internal-error"),ie(l,e.name),ie(d,e.name),g("boolean"===typeof _,e,"internal-error"),g("boolean"===typeof w,e,"internal-error"),ie(f,e.name),ie(h,e.name),ie(p,e.name),ie(m,e.name),ie(v,e.name),ie(b,e.name);const E=new oe({uid:y,auth:e,email:d,emailVerified:_,displayName:l,isAnonymous:w,photoURL:h,phoneNumber:f,tenantId:p,stsTokenManager:j,createdAt:v,lastLoginAt:b});return O&&Array.isArray(O)&&(E.providerData=O.map(e=>Object.assign({},e))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new oe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Q(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const ae=se;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,i),this.fullPersistenceKey=ce("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(w(ae),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||w(ae);const o=ce(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){const n=oe._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(c){}})),new ue(i,e,n)):new ue(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(de(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ve(t))return"Blackberry";if(ge(t))return"Webos";if(fe(t))return"Safari";if((t.includes("chrome/")||he(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function de(e=Object(r["i"])()){return/firefox\//i.test(e)}function fe(e=Object(r["i"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function he(e=Object(r["i"])()){return/crios\//i.test(e)}function pe(e=Object(r["i"])()){return/iemobile/i.test(e)}function me(e=Object(r["i"])()){return/android/i.test(e)}function ve(e=Object(r["i"])()){return/blackberry/i.test(e)}function ge(e=Object(r["i"])()){return/webos/i.test(e)}function be(e=Object(r["i"])()){return/iphone|ipad|ipod/i.test(e)}function ye(e=Object(r["i"])()){var t;return be(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function _e(){return Object(r["l"])()&&10===document.documentMode}function we(e=Object(r["i"])()){return be(e)||me(e)||ge(e)||ve(e)||/windows phone/i.test(e)||pe(e)}function Oe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e,t=[]){let n;switch(e){case"Browser":n=le(Object(r["i"])());break;case"Worker":n=`${le(Object(r["i"])())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["a"]}/${o}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ke(this),this.idTokenSubscription=new ke(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Q(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=S()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["h"])(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(w(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return g(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ie(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Ee(e){return Object(r["h"])(e)}class ke{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["e"])(e=>this.observer=e)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Te{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Se(e,t){return N(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xe(e,t){return D(e,"POST","/v1/accounts:signInWithPassword",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ce(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}async function Ae(e,t){return D(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends Te{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Re(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Re(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return xe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ce(e,{email:this._email,oobCode:this._password});default:h(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Se(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ae(e,{idToken:t,email:this._email,oobCode:this._password});default:h(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(e,t){return D(e,"POST","/v1/accounts:signInWithIdp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="http://localhost";class Ne extends Te{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ne(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):h("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Ne(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Pe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Pe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Pe(e,t)}buildRequest(){const e={requestUri:Le,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["o"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(e,t){return N(e,"POST","/v1/accounts:sendVerificationCode",L(e,t))}async function De(e,t){return D(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t))}async function Ue(e,t){const n=await D(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t));if(n.temporaryProof)throw V(e,"account-exists-with-different-credential",n);return n}const Fe={["USER_NOT_FOUND"]:"user-not-found"};async function Ve(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return D(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,n),Fe)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends Te{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new $e({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new $e({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return De(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Ue(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ve(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new $e({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ze(e){const t=Object(r["p"])(Object(r["g"])(e))["link"],n=t?Object(r["p"])(Object(r["g"])(t))["deep_link_id"]:null,i=Object(r["p"])(Object(r["g"])(e))["deep_link_id"],o=i?Object(r["p"])(Object(r["g"])(i))["link"]:null;return o||i||n||t||e}class Ge{constructor(e){var t,n,i,o,s,a;const c=Object(r["p"])(Object(r["g"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,d=Be(null!==(i=c["mode"])&&void 0!==i?i:null);g(u&&l&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=ze(e);try{return new Ge(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class He{constructor(){this.providerId=He.PROVIDER_ID}static credential(e,t){return Re._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ge.parseLink(t);return g(n,"argument-error"),Re._fromEmailAndCode(e,n.code,n.tenantId)}}He.PROVIDER_ID="password",He.EMAIL_PASSWORD_SIGN_IN_METHOD="password",He.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends We{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke extends qe{constructor(){super("facebook.com")}static credential(e){return Ne._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ke.credential(e.oauthAccessToken)}catch(t){return null}}}Ke.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ke.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je extends qe{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ne._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Je.credential(t,n)}catch(r){return null}}}Je.GOOGLE_SIGN_IN_METHOD="google.com",Je.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe extends qe{constructor(){super("github.com")}static credential(e){return Ne._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Xe.credential(e.oauthAccessToken)}catch(t){return null}}}Xe.GITHUB_SIGN_IN_METHOD="github.com",Xe.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye extends qe{constructor(){super("twitter.com")}static credential(e,t){return Ne._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ye.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Qe(e,t){return D(e,"POST","/v1/accounts:signUp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye.TWITTER_SIGN_IN_METHOD="twitter.com",Ye.PROVIDER_ID="twitter.com";class Ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await oe._fromIdTokenResponse(e,n,r),o=et(n),s=new Ze({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=et(n);return new Ze({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends r["c"]{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,tt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new tt(e,t,n,r)}}function nt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw tt._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e,t,n=!1){const r=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ze._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function it(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await K(e,nt(r,i,t,e),n);g(o.idToken,r,"internal-error");const s=W(o.idToken);g(s,r,"internal-error");const{sub:a}=s;return g(e.uid===a,r,"user-mismatch"),Ze._forOperation(e,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&h(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(e,t,n=!1){const r="signIn",i=await nt(e,r,t),o=await Ze._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function st(e,t){return ot(Ee(e),t)}async function at(e,t,n){const r=Ee(e),i=await Qe(r,{returnSecureToken:!0,email:t,password:n}),o=await Ze._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function ct(e,t,n){return st(Object(r["h"])(e),He.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(e){return Object(r["h"])(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lt(e,t){return N(e,"POST","/v2/accounts/mfaEnrollment:start",L(e,t))}function dt(e,t){return N(e,"POST","/v2/accounts/mfaEnrollment:finalize",L(e,t))}new WeakMap;const ft="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ft,"1"),this.storage.removeItem(ft),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){const e=Object(r["i"])();return fe(e)||be(e)}const mt=1e3,vt=10;class gt extends ht{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pt()&&Oe(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);_e()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,vt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},mt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gt.type="LOCAL";const bt=gt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends ht{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yt.type="SESSION";const _t=yt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Ot(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async e=>e(t.origin,i)),a=await wt(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function It(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot.receivers=[];class jt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const c=It("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return window}function kt(e){Et().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return"undefined"!==typeof Et()["WorkerGlobalScope"]&&"function"===typeof Et()["importScripts"]}async function St(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function xt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Ct(){return Tt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="firebaseLocalStorageDb",Rt=1,Pt="firebaseLocalStorage",Lt="fbase_key";class Nt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Mt(e,t){return e.transaction([Pt],t?"readwrite":"readonly").objectStore(Pt)}function Dt(){const e=indexedDB.deleteDatabase(At);return new Nt(e).toPromise()}function Ut(){const e=indexedDB.open(At,Rt);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Pt,{keyPath:Lt})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Pt)?t(n):(n.close(),await Dt(),t(await Ut()))})})}async function Ft(e,t,n){const r=Mt(e,!0).put({[Lt]:t,value:n});return new Nt(r).toPromise()}async function Vt(e,t){const n=Mt(e,!1).get(t),r=await new Nt(n).toPromise();return void 0===r?null:r.value}function $t(e,t){const n=Mt(e,!0).delete(t);return new Nt(n).toPromise()}const Bt=800,zt=3;class Gt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Ut()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>zt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ot._getInstance(Ct()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await St(),!this.activeServiceWorker)return;this.sender=new jt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&xt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ut();return await Ft(e,ft,"1"),await $t(e,ft),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ft(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Vt(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$t(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Mt(e,!1).getAll();return new Nt(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Gt.type="LOCAL";const Ht=Gt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e,t){return N(e,"POST","/v2/accounts/mfaSignIn:start",L(e,t))}function qt(e,t){return N(e,"POST","/v2/accounts/mfaSignIn:finalize",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Jt(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Kt().appendChild(r)})}function Xt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Xt("rcb"),new x(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yt="recaptcha";async function Qt(e,t,n){var r;const i=await n.verify();try{let o;if(g("string"===typeof i,e,"argument-error"),g(n.type===Yt,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){g("enroll"===t.type,e,"internal-error");const n=await lt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{g("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;g(n,e,"missing-multi-factor-info");const s=await Wt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Me(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zt{constructor(e){this.providerId=Zt.PROVIDER_ID,this.auth=Ee(e)}verifyPhoneNumber(e,t){return Qt(this.auth,e,Object(r["h"])(t))}static credential(e,t){return $e._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Zt.credentialFromTaggedObject(t)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?$e._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function en(e,t){return t?w(t):(g(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt.PROVIDER_ID="phone",Zt.PHONE_SIGN_IN_METHOD="phone";class tn extends Te{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Pe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Pe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function nn(e){return ot(e.auth,new tn(e),e.bypassAuthState)}function rn(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),it(n,new tn(e),e.bypassAuthState)}async function on(e){const{auth:t,user:n}=e;return g(n,t,"internal-error"),rt(n,new tn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nn;case"linkViaPopup":case"linkViaRedirect":return on;case"reauthViaPopup":case"reauthViaRedirect":return rn;default:h(this.auth,"internal-error")}}resolve(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new x(2e3,1e4);class cn extends sn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");const e=It();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,an.get())};e()}}cn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const un="pendingRedirect",ln=new Map;class dn extends sn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ln.get(this.auth._key());if(!e){try{const t=await fn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ln.set(this.auth._key(),e)}return this.bypassAuthState||ln.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function fn(e,t){const n=pn(t),r=hn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function hn(e){return w(e._redirectPersistence)}function pn(e){return ce(un,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(e,t,n=!1){const r=Ee(e),i=en(r,t),o=new dn(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn=6e5;class gn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_n(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!yn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vn&&this.cachedEventUids.clear(),this.cachedEventUids.has(bn(e))}saveEventToCache(e){this.cachedEventUids.add(bn(e)),this.lastProcessedEventTime=Date.now()}}function bn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function yn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function _n(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn(e,t={}){return N(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,In=/^https?/;async function jn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await wn(e);for(const r of t)try{if(En(r))return}catch(n){}h(e,"unauthorized-domain")}function En(e){const t=j(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!In.test(n))return!1;if(On.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new x(3e4,6e4);function Tn(){const e=Et().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Sn(e){return new Promise((t,n)=>{var r,i,o;function s(){Tn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Tn(),n(p(e,"network-request-failed"))},timeout:kn.get()})}if(null===(i=null===(r=Et().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Et().gapi)||void 0===o?void 0:o.load)){const t=Xt("iframefcb");return Et()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},Jt("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}s()}}).catch(e=>{throw xn=null,e})}let xn=null;function Cn(e){return xn=xn||Sn(e),xn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new x(5e3,15e3),Rn="__/auth/iframe",Pn="emulator/auth/iframe",Ln={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Nn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mn(e){const t=e.config;g(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?C(t,Pn):`https://${e.config.authDomain}/${Rn}`,o={apiKey:t.apiKey,appName:e.name,v:i["a"]},s=Nn.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${Object(r["o"])(o).slice(1)}`}async function Dn(e){const t=await Cn(e),n=Et().gapi;return g(n,e,"internal-error"),t.open({where:document.body,url:Mn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ln,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),o=Et().setTimeout(()=>{r(i)},An.get());function s(){Et().clearTimeout(o),n(t)}t.ping(s).then(s,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fn=500,Vn=600,$n="_blank",Bn="http://localhost";class zn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Gn(e,t,n,i=Fn,o=Vn){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Un),{width:i.toString(),height:o.toString(),top:s,left:a}),l=Object(r["i"])().toLowerCase();n&&(c=he(l)?$n:n),de(l)&&(t=t||Bn,u.scrollbars="yes");const d=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(ye(l)&&"_self"!==c)return Hn(t||"",c),new zn(null);const f=window.open(t||"",c,d);g(f,e,"popup-blocked");try{f.focus()}catch(h){}return new zn(f)}function Hn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="__/auth/handler",qn="emulator/auth/handler";function Kn(e,t,n,o,s,a){g(e.config.authDomain,e,"auth-domain-config-required"),g(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i["a"],eventId:s};if(t instanceof We){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["k"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof qe){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Jn(e)}?${Object(r["o"])(u).slice(1)}`}function Jn({config:e}){return e.emulator?C(e,qn):`https://${e.authDomain}/${Wn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="webStorageSupport";class Yn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_t,this._completeRedirectFn=mn}async _openPopup(e,t,n,r){var i;y(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Kn(e,t,n,j(),r);return Gn(e,o,It())}async _openRedirect(e,t,n,r){return await this._originValidation(e),kt(Kn(e,t,n,j(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(y(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Dn(e),n=new gn(e);return t.register("authEvent",t=>{g(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Xn,{type:Xn},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Xn];void 0!==i&&t(!!i),h(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=jn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||fe()||be()}}const Qn=Yn;class Zn{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class er extends Zn{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new er(e)}_finalizeEnroll(e,t,n){return dt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return qt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class tr{constructor(){}static assertion(e){return er._fromCredential(e)}}tr.FACTOR_ID="phone";var nr="@firebase/auth",rr="0.19.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ir{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sr(e){Object(i["c"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:i,authDomain:o}=r.options;return(t=>{g(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),g(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ie(e)},s=new je(t,r);return I(s,n),s})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(i["c"])(new a["a"]("auth-internal",e=>{const t=Ee(e.getProvider("auth").getImmediate());return(e=>new ir(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["f"])(nr,rr,or(e)),Object(i["f"])(nr,rr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(e=Object(i["d"])()){const t=Object(i["b"])(e,"auth");return t.isInitialized()?t.getImmediate():O(e,{popupRedirectResolver:Qn,persistence:[Ht,bt,_t]})}sr("Browser")},f069:function(e,t,n){"use strict";var r=n("59ed"),i=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new i(e)}},f36a:function(e,t,n){var r=n("e330");e.exports=r([].slice)},f5df:function(e,t,n){var r=n("da84"),i=n("00ee"),o=n("1626"),s=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==s(function(){return arguments}()),d=function(e,t){try{return e[t]}catch(n){}};e.exports=i?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=d(t=u(e),c))?n:l?s(t):"Object"==(r=s(t))&&o(t.callee)?"Arguments":r}},f772:function(e,t,n){var r=n("5692"),i=n("90e3"),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},fc6a:function(e,t,n){var r=n("44ad"),i=n("1d80");e.exports=function(e){return r(i(e))}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,n){var r=n("da84");e.exports=r.Promise}}]);
//# sourceMappingURL=chunk-vendors.18c44762.js.map