(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const xc=[{name:"Europa",image:"europe.png"},{name:"América",image:"america.png"},{name:"Asia",image:"asia.png"},{name:"África",image:"africa.png"},{name:"Oceanía",image:"oceania.png"}],Yr="geo_progress";function jn(){return new Date().toDateString()}function $o(){const n=localStorage.getItem(Yr),t={totalScore:0,totalHits:0,dailyScore:0,dailyHits:0,lastDate:jn()};if(!n)return t;const e=JSON.parse(n);return e.lastDate!==jn()&&(e.dailyScore=0,e.dailyHits=0,e.lastDate=jn(),localStorage.setItem(Yr,JSON.stringify(e))),e}function Dc(n,t){const e=$o(),r={totalScore:e.totalScore+n,totalHits:e.totalHits+t,dailyScore:e.dailyScore+n,dailyHits:e.dailyHits+t,lastDate:jn()};localStorage.setItem(Yr,JSON.stringify(r))}function Nc(){localStorage.removeItem("geo_progress")}function $n(n,t){n.innerHTML="";const e=document.createElement("div");e.className="app-header";const r=document.createElement("img");r.src="/logo.png",r.className="app-logo";const i=document.createElement("h1");i.textContent="Geo Capital 5",e.appendChild(r),e.appendChild(i),n.appendChild(e);let o=0,c;e.addEventListener("click",()=>{o++,clearTimeout(c),c=setTimeout(()=>{o=0},1e3),o===5&&(confirm("¿Resetear progreso?")&&(Nc(),location.reload()),o=0)});const u=$o(),h=document.createElement("div");h.className="global-stats",h.innerHTML=`
  <div> Hoy → Puntos ⭐ ${u.dailyScore}  /  Aciertos 🔥 ${u.dailyHits}</div>
  <div> Total → Puntos ⭐ ${u.totalScore}  /  Aciertos 🔥 ${u.totalHits}</div>
`,n.appendChild(h);const E=document.createElement("div");E.className="continent-grid",xc.forEach(({name:T,image:w})=>{const S=document.createElement("div");S.className="continent-card";const V=document.createElement("img");V.src=`continents/${w}`,V.alt=T;const N=document.createElement("span");N.textContent=T,S.appendChild(V),S.appendChild(N),S.addEventListener("click",()=>t(T)),E.appendChild(S)}),n.appendChild(E)}function ji(n){const t=new SpeechSynthesisUtterance(n);t.lang="es-ES",speechSynthesis.speak(t)}async function Oc(n,t,e,r){n.innerHTML="";const i=document.createElement("button");i.innerHTML="⬅ Volver",i.className="nav-btn",i.onclick=r;const o=document.createElement("h2");o.textContent=`🌍 ${e}`,n.appendChild(i),n.appendChild(o);const c=document.createElement("div");t.forEach(h=>{const E=document.createElement("div");E.className="country-card";const T=document.createElement("p");T.textContent=`${h.country} - ${h.capital}`;const w=document.createElement("button");w.textContent="🔊",w.onclick=()=>ji(`${h.country}, capital  ${h.capital}`);const S=document.createElement("img");S.src=`flags/${h.code}.png`,S.alt=h.country,S.className="flag",S.width=60,E.appendChild(S),E.appendChild(T),E.appendChild(w),c.appendChild(E)});const u=document.createElement("button");u.textContent="🔊 Escuchar todo",u.classList.add("audio-btn","audio-btn-large"),u.onclick=()=>{t.forEach((h,E)=>{setTimeout(()=>{ji(`${h.country}, capital  ${h.capital}`)},E*2e3)})},n.appendChild(c),n.appendChild(u)}function zo(n,t,e,r,i){n.innerHTML="";let o=0,c=0,u=0,h=[...t],E=0,T=0,w=t.length;h.length;const S=document.createElement("h2");S.textContent=` Quiz - ${e}`;const V=document.createElement("h3"),N=document.createElement("div"),U=document.createElement("p"),L=document.createElement("button");L.innerHTML="⬅ Salir",L.className="nav-btn",L.onclick=r;const X=document.createElement("div");X.style.display="flex",X.style.justifyContent="space-between",X.style.alignItems="center",X.style.marginBottom="10px",X.appendChild(L),n.appendChild(X),n.appendChild(S);const Z=document.createElement("div");Z.className="quiz-stats",n.appendChild(Z);const B=document.createElement("div");B.className="progress-bar";const it=document.createElement("div");it.className="progress-fill",B.appendChild(it),n.appendChild(B),n.appendChild(V),n.appendChild(N),n.appendChild(U);function Q(m,p){const y=[m.capital],g=i&&i.length>p.length?i:p;for(;y.length<4;){const v=g[Math.floor(Math.random()*g.length)];y.includes(v.capital)||y.push(v.capital)}return y.sort(()=>.5-Math.random())}function b(){const m=h[o];Z.innerHTML=`⭐ ${c} &nbsp;&nbsp; 🔥 ${E}`;const p=u/w*100;it.style.width=`${p}%`,V.textContent=`¿Cuál es la capital de ${m.country}?`,N.innerHTML="",U.textContent="",Q(m,h).forEach(g=>{const v=document.createElement("button");v.textContent=g,v.className="option-btn",v.onclick=()=>{g===m.capital?(U.textContent="✅ Correcto",T++,c+=10+T*2,u++,E++):(U.textContent=`❌ Incorrecto. Era ${m.capital}`,T=0),setTimeout(()=>{o++,o<h.length?b():_()},1300)},N.appendChild(v)})}function _(){Dc(c,u),n.innerHTML="";const m=document.createElement("h2"),p=Math.round(u/w*100);m.textContent=`Resultado: ${u} / ${w} -(${p}%) `;const y=document.createElement("button");y.textContent="🔁 Repetir",y.onclick=()=>{o=0,c=0,n.innerHTML="",zo(n,t,e,r,i)},n.appendChild(m),n.appendChild(y),n.appendChild(L)}b()}async function Fc(){return await(await fetch("./data/countries.json")).json()}function kc(){const n=new Date(2024,0,1),e=new Date-n;return Math.floor(e/(1e3*60*60*24))}function Mc(n,t){const e=n.filter(T=>T.continent===t);if(e.length===0)return[];const r=5,i=Math.ceil(e.length/r),u=kc()%i*r,h=u+r;let E=e.slice(u,h);if(E.length<5){const T=[...e].sort(()=>.5-Math.random());for(let w=0;w<T.length&&E.length<5;w++)E.includes(T[w])||E.push(T[w])}return E}const Lc=()=>{};var $i={};/**
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
 */const Ho=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Uc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],c=n[e++],u=n[e++],h=((i&7)<<18|(o&63)<<12|(c&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],c=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|c&63)}}return t.join("")},qo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],c=i+1<n.length,u=c?n[i+1]:0,h=i+2<n.length,E=h?n[i+2]:0,T=o>>2,w=(o&3)<<4|u>>4;let S=(u&15)<<2|E>>6,V=E&63;h||(V=64,c||(S=64)),r.push(e[T],e[w],e[S],e[V])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ho(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Uc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],u=i<n.length?e[n.charAt(i)]:0;++i;const E=i<n.length?e[n.charAt(i)]:64;++i;const w=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||u==null||E==null||w==null)throw new Bc;const S=o<<2|u>>4;if(r.push(S),E!==64){const V=u<<4&240|E>>2;if(r.push(V),w!==64){const N=E<<6&192|w;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Bc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jc=function(n){const t=Ho(n);return qo.encodeByteArray(t,!0)},Qn=function(n){return jc(n).replace(/\./g,"")},$c=function(n){try{return qo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function zc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Hc=()=>zc().__FIREBASE_DEFAULTS__,qc=()=>{if(typeof process>"u"||typeof $i>"u")return;const n=$i.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Gc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&$c(n[1]);return t&&JSON.parse(t)},gs=()=>{try{return Lc()||Hc()||qc()||Gc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Kc=n=>{var t,e;return(e=(t=gs())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},Qc=n=>{const t=Kc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Go=()=>{var n;return(n=gs())==null?void 0:n.config};/**
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
 */class Wc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Jc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Qn(JSON.stringify(e)),Qn(JSON.stringify(c)),""].join(".")}/**
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
 */function Xc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yc(){var t;const n=(t=gs())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zc(){return!Yc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tl(){try{return typeof indexedDB=="object"}catch{return!1}}function el(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const nl="FirebaseError";class Oe extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=nl,Object.setPrototypeOf(this,Oe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ko.prototype.create)}}class Ko{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],c=o?rl(o,r):"Error",u=`${this.serviceName}: ${c} (${i}).`;return new Oe(i,u,r)}}function rl(n,t){return n.replace(sl,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const sl=/\{\$([^}]+)}/g;function Wn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],c=t[i];if(zi(o)&&zi(c)){if(!Wn(o,c))return!1}else if(o!==c)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function zi(n){return n!==null&&typeof n=="object"}/**
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
 */function te(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Qo(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function il(n){return(await fetch(n,{credentials:"include"})).ok}class hn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const he="[DEFAULT]";/**
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
 */class ol{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Wc;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(cl(t))try{this.getOrInitializeService({instanceIdentifier:he})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=he){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=he){return this.instances.has(t)}getOptions(t=he){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,c]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&c.resolve(i)}return i}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:al(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=he){return this.component?this.component.multipleInstances?t:he:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function al(n){return n===he?void 0:n}function cl(n){return n.instantiationMode==="EAGER"}/**
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
 */class ll{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new ol(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const ul={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},hl=z.INFO,fl={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},dl=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=fl[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Wo{constructor(t){this.name=t,this._logLevel=hl,this._logHandler=dl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ul[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}}const pl=(n,t)=>t.some(e=>n instanceof e);let Hi,qi;function ml(){return Hi||(Hi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gl(){return qi||(qi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jo=new WeakMap,Zr=new WeakMap,Xo=new WeakMap,zr=new WeakMap,_s=new WeakMap;function _l(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",c)},o=()=>{e(Yt(n.result)),i()},c=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",c)});return t.then(e=>{e instanceof IDBCursor&&Jo.set(e,n)}).catch(()=>{}),_s.set(t,n),t}function yl(n){if(Zr.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",c),n.removeEventListener("abort",c)},o=()=>{e(),i()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",c),n.addEventListener("abort",c)});Zr.set(n,t)}let ts={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Zr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Xo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Yt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function El(n){ts=n(ts)}function vl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Hr(this),t,...e);return Xo.set(r,t.sort?t.sort():[t]),Yt(r)}:gl().includes(n)?function(...t){return n.apply(Hr(this),t),Yt(Jo.get(this))}:function(...t){return Yt(n.apply(Hr(this),t))}}function Tl(n){return typeof n=="function"?vl(n):(n instanceof IDBTransaction&&yl(n),pl(n,ml())?new Proxy(n,ts):n)}function Yt(n){if(n instanceof IDBRequest)return _l(n);if(zr.has(n))return zr.get(n);const t=Tl(n);return t!==n&&(zr.set(n,t),_s.set(t,n)),t}const Hr=n=>_s.get(n);function Al(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const c=indexedDB.open(n,t),u=Yt(c);return r&&c.addEventListener("upgradeneeded",h=>{r(Yt(c.result),h.oldVersion,h.newVersion,Yt(c.transaction),h)}),e&&c.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",E=>i(E.oldVersion,E.newVersion,E))}).catch(()=>{}),u}const wl=["get","getKey","getAll","getAllKeys","count"],Il=["put","add","delete","clear"],qr=new Map;function Gi(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(qr.get(t))return qr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Il.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wl.includes(e)))return;const o=async function(c,...u){const h=this.transaction(c,i?"readwrite":"readonly");let E=h.store;return r&&(E=E.index(u.shift())),(await Promise.all([E[e](...u),i&&h.done]))[0]};return qr.set(t,o),o}El(n=>({...n,get:(t,e,r)=>Gi(t,e)||n.get(t,e,r),has:(t,e)=>!!Gi(t,e)||n.has(t,e)}));/**
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
 */class bl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Sl(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Sl(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const es="@firebase/app",Ki="0.14.10";/**
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
 */const $t=new Wo("@firebase/app"),Rl="@firebase/app-compat",Cl="@firebase/analytics-compat",Pl="@firebase/analytics",Vl="@firebase/app-check-compat",xl="@firebase/app-check",Dl="@firebase/auth",Nl="@firebase/auth-compat",Ol="@firebase/database",Fl="@firebase/data-connect",kl="@firebase/database-compat",Ml="@firebase/functions",Ll="@firebase/functions-compat",Ul="@firebase/installations",Bl="@firebase/installations-compat",jl="@firebase/messaging",$l="@firebase/messaging-compat",zl="@firebase/performance",Hl="@firebase/performance-compat",ql="@firebase/remote-config",Gl="@firebase/remote-config-compat",Kl="@firebase/storage",Ql="@firebase/storage-compat",Wl="@firebase/firestore",Jl="@firebase/ai",Xl="@firebase/firestore-compat",Yl="firebase",Zl="12.11.0";/**
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
 */const ns="[DEFAULT]",tu={[es]:"fire-core",[Rl]:"fire-core-compat",[Pl]:"fire-analytics",[Cl]:"fire-analytics-compat",[xl]:"fire-app-check",[Vl]:"fire-app-check-compat",[Dl]:"fire-auth",[Nl]:"fire-auth-compat",[Ol]:"fire-rtdb",[Fl]:"fire-data-connect",[kl]:"fire-rtdb-compat",[Ml]:"fire-fn",[Ll]:"fire-fn-compat",[Ul]:"fire-iid",[Bl]:"fire-iid-compat",[jl]:"fire-fcm",[$l]:"fire-fcm-compat",[zl]:"fire-perf",[Hl]:"fire-perf-compat",[ql]:"fire-rc",[Gl]:"fire-rc-compat",[Kl]:"fire-gcs",[Ql]:"fire-gcs-compat",[Wl]:"fire-fst",[Xl]:"fire-fst-compat",[Jl]:"fire-vertex","fire-js":"fire-js",[Yl]:"fire-js-all"};/**
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
 */const Jn=new Map,eu=new Map,rs=new Map;function Qi(n,t){try{n.container.addComponent(t)}catch(e){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Xn(n){const t=n.name;if(rs.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;rs.set(t,n);for(const e of Jn.values())Qi(e,n);for(const e of eu.values())Qi(e,n);return!0}function nu(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function ru(n){return n==null?!1:n.settings!==void 0}/**
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
 */const su={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zt=new Ko("app","Firebase",su);/**
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
 */class iu{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
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
 */const ou=Zl;function Yo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:ns,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw Zt.create("bad-app-name",{appName:String(i)});if(e||(e=Go()),!e)throw Zt.create("no-options");const o=Jn.get(i);if(o){if(Wn(e,o.options)&&Wn(r,o.config))return o;throw Zt.create("duplicate-app",{appName:i})}const c=new ll(i);for(const h of rs.values())c.addComponent(h);const u=new iu(e,r,c);return Jn.set(i,u),u}function au(n=ns){const t=Jn.get(n);if(!t&&n===ns&&Go())return Yo();if(!t)throw Zt.create("no-app",{appName:n});return t}function Ce(n,t,e){let r=tu[n]??n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const c=[`Unable to register library "${r}" with version "${t}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$t.warn(c.join(" "));return}Xn(new hn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const cu="firebase-heartbeat-database",lu=1,fn="firebase-heartbeat-store";let Gr=null;function Zo(){return Gr||(Gr=Al(cu,lu,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(fn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Zt.create("idb-open",{originalErrorMessage:n.message})})),Gr}async function uu(n){try{const e=(await Zo()).transaction(fn),r=await e.objectStore(fn).get(ta(n));return await e.done,r}catch(t){if(t instanceof Oe)$t.warn(t.message);else{const e=Zt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$t.warn(e.message)}}}async function Wi(n,t){try{const r=(await Zo()).transaction(fn,"readwrite");await r.objectStore(fn).put(t,ta(n)),await r.done}catch(e){if(e instanceof Oe)$t.warn(e.message);else{const r=Zt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});$t.warn(r.message)}}}function ta(n){return`${n.name}!${n.options.appId}`}/**
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
 */const hu=1024,fu=30;class du{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new mu(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ji();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(c=>c.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>fu){const c=gu(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){$t.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ji(),{heartbeatsToSend:r,unsentEntries:i}=pu(this._heartbeatsCache.heartbeats),o=Qn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return $t.warn(e),""}}}function Ji(){return new Date().toISOString().substring(0,10)}function pu(n,t=hu){const e=[];let r=n.slice();for(const i of n){const o=e.find(c=>c.agent===i.agent);if(o){if(o.dates.push(i.date),Xi(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Xi(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class mu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tl()?el().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await uu(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Wi(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Wi(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Xi(n){return Qn(JSON.stringify({version:2,heartbeats:n})).length}function gu(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function _u(n){Xn(new hn("platform-logger",t=>new bl(t),"PRIVATE")),Xn(new hn("heartbeat",t=>new du(t),"PRIVATE")),Ce(es,Ki,n),Ce(es,Ki,"esm2020"),Ce("fire-js","")}_u("");var yu="firebase",Eu="12.11.0";/**
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
 */Ce(yu,Eu,"app");var Yi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ys;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(_,m){function p(){}p.prototype=m.prototype,_.F=m.prototype,_.prototype=new p,_.prototype.constructor=_,_.D=function(y,g,v){for(var d=Array(arguments.length-2),O=2;O<arguments.length;O++)d[O-2]=arguments[O];return m.prototype[g].apply(y,d)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,m,p){p||(p=0);const y=Array(16);if(typeof m=="string")for(var g=0;g<16;++g)y[g]=m.charCodeAt(p++)|m.charCodeAt(p++)<<8|m.charCodeAt(p++)<<16|m.charCodeAt(p++)<<24;else for(g=0;g<16;++g)y[g]=m[p++]|m[p++]<<8|m[p++]<<16|m[p++]<<24;m=_.g[0],p=_.g[1],g=_.g[2];let v=_.g[3],d;d=m+(v^p&(g^v))+y[0]+3614090360&4294967295,m=p+(d<<7&4294967295|d>>>25),d=v+(g^m&(p^g))+y[1]+3905402710&4294967295,v=m+(d<<12&4294967295|d>>>20),d=g+(p^v&(m^p))+y[2]+606105819&4294967295,g=v+(d<<17&4294967295|d>>>15),d=p+(m^g&(v^m))+y[3]+3250441966&4294967295,p=g+(d<<22&4294967295|d>>>10),d=m+(v^p&(g^v))+y[4]+4118548399&4294967295,m=p+(d<<7&4294967295|d>>>25),d=v+(g^m&(p^g))+y[5]+1200080426&4294967295,v=m+(d<<12&4294967295|d>>>20),d=g+(p^v&(m^p))+y[6]+2821735955&4294967295,g=v+(d<<17&4294967295|d>>>15),d=p+(m^g&(v^m))+y[7]+4249261313&4294967295,p=g+(d<<22&4294967295|d>>>10),d=m+(v^p&(g^v))+y[8]+1770035416&4294967295,m=p+(d<<7&4294967295|d>>>25),d=v+(g^m&(p^g))+y[9]+2336552879&4294967295,v=m+(d<<12&4294967295|d>>>20),d=g+(p^v&(m^p))+y[10]+4294925233&4294967295,g=v+(d<<17&4294967295|d>>>15),d=p+(m^g&(v^m))+y[11]+2304563134&4294967295,p=g+(d<<22&4294967295|d>>>10),d=m+(v^p&(g^v))+y[12]+1804603682&4294967295,m=p+(d<<7&4294967295|d>>>25),d=v+(g^m&(p^g))+y[13]+4254626195&4294967295,v=m+(d<<12&4294967295|d>>>20),d=g+(p^v&(m^p))+y[14]+2792965006&4294967295,g=v+(d<<17&4294967295|d>>>15),d=p+(m^g&(v^m))+y[15]+1236535329&4294967295,p=g+(d<<22&4294967295|d>>>10),d=m+(g^v&(p^g))+y[1]+4129170786&4294967295,m=p+(d<<5&4294967295|d>>>27),d=v+(p^g&(m^p))+y[6]+3225465664&4294967295,v=m+(d<<9&4294967295|d>>>23),d=g+(m^p&(v^m))+y[11]+643717713&4294967295,g=v+(d<<14&4294967295|d>>>18),d=p+(v^m&(g^v))+y[0]+3921069994&4294967295,p=g+(d<<20&4294967295|d>>>12),d=m+(g^v&(p^g))+y[5]+3593408605&4294967295,m=p+(d<<5&4294967295|d>>>27),d=v+(p^g&(m^p))+y[10]+38016083&4294967295,v=m+(d<<9&4294967295|d>>>23),d=g+(m^p&(v^m))+y[15]+3634488961&4294967295,g=v+(d<<14&4294967295|d>>>18),d=p+(v^m&(g^v))+y[4]+3889429448&4294967295,p=g+(d<<20&4294967295|d>>>12),d=m+(g^v&(p^g))+y[9]+568446438&4294967295,m=p+(d<<5&4294967295|d>>>27),d=v+(p^g&(m^p))+y[14]+3275163606&4294967295,v=m+(d<<9&4294967295|d>>>23),d=g+(m^p&(v^m))+y[3]+4107603335&4294967295,g=v+(d<<14&4294967295|d>>>18),d=p+(v^m&(g^v))+y[8]+1163531501&4294967295,p=g+(d<<20&4294967295|d>>>12),d=m+(g^v&(p^g))+y[13]+2850285829&4294967295,m=p+(d<<5&4294967295|d>>>27),d=v+(p^g&(m^p))+y[2]+4243563512&4294967295,v=m+(d<<9&4294967295|d>>>23),d=g+(m^p&(v^m))+y[7]+1735328473&4294967295,g=v+(d<<14&4294967295|d>>>18),d=p+(v^m&(g^v))+y[12]+2368359562&4294967295,p=g+(d<<20&4294967295|d>>>12),d=m+(p^g^v)+y[5]+4294588738&4294967295,m=p+(d<<4&4294967295|d>>>28),d=v+(m^p^g)+y[8]+2272392833&4294967295,v=m+(d<<11&4294967295|d>>>21),d=g+(v^m^p)+y[11]+1839030562&4294967295,g=v+(d<<16&4294967295|d>>>16),d=p+(g^v^m)+y[14]+4259657740&4294967295,p=g+(d<<23&4294967295|d>>>9),d=m+(p^g^v)+y[1]+2763975236&4294967295,m=p+(d<<4&4294967295|d>>>28),d=v+(m^p^g)+y[4]+1272893353&4294967295,v=m+(d<<11&4294967295|d>>>21),d=g+(v^m^p)+y[7]+4139469664&4294967295,g=v+(d<<16&4294967295|d>>>16),d=p+(g^v^m)+y[10]+3200236656&4294967295,p=g+(d<<23&4294967295|d>>>9),d=m+(p^g^v)+y[13]+681279174&4294967295,m=p+(d<<4&4294967295|d>>>28),d=v+(m^p^g)+y[0]+3936430074&4294967295,v=m+(d<<11&4294967295|d>>>21),d=g+(v^m^p)+y[3]+3572445317&4294967295,g=v+(d<<16&4294967295|d>>>16),d=p+(g^v^m)+y[6]+76029189&4294967295,p=g+(d<<23&4294967295|d>>>9),d=m+(p^g^v)+y[9]+3654602809&4294967295,m=p+(d<<4&4294967295|d>>>28),d=v+(m^p^g)+y[12]+3873151461&4294967295,v=m+(d<<11&4294967295|d>>>21),d=g+(v^m^p)+y[15]+530742520&4294967295,g=v+(d<<16&4294967295|d>>>16),d=p+(g^v^m)+y[2]+3299628645&4294967295,p=g+(d<<23&4294967295|d>>>9),d=m+(g^(p|~v))+y[0]+4096336452&4294967295,m=p+(d<<6&4294967295|d>>>26),d=v+(p^(m|~g))+y[7]+1126891415&4294967295,v=m+(d<<10&4294967295|d>>>22),d=g+(m^(v|~p))+y[14]+2878612391&4294967295,g=v+(d<<15&4294967295|d>>>17),d=p+(v^(g|~m))+y[5]+4237533241&4294967295,p=g+(d<<21&4294967295|d>>>11),d=m+(g^(p|~v))+y[12]+1700485571&4294967295,m=p+(d<<6&4294967295|d>>>26),d=v+(p^(m|~g))+y[3]+2399980690&4294967295,v=m+(d<<10&4294967295|d>>>22),d=g+(m^(v|~p))+y[10]+4293915773&4294967295,g=v+(d<<15&4294967295|d>>>17),d=p+(v^(g|~m))+y[1]+2240044497&4294967295,p=g+(d<<21&4294967295|d>>>11),d=m+(g^(p|~v))+y[8]+1873313359&4294967295,m=p+(d<<6&4294967295|d>>>26),d=v+(p^(m|~g))+y[15]+4264355552&4294967295,v=m+(d<<10&4294967295|d>>>22),d=g+(m^(v|~p))+y[6]+2734768916&4294967295,g=v+(d<<15&4294967295|d>>>17),d=p+(v^(g|~m))+y[13]+1309151649&4294967295,p=g+(d<<21&4294967295|d>>>11),d=m+(g^(p|~v))+y[4]+4149444226&4294967295,m=p+(d<<6&4294967295|d>>>26),d=v+(p^(m|~g))+y[11]+3174756917&4294967295,v=m+(d<<10&4294967295|d>>>22),d=g+(m^(v|~p))+y[2]+718787259&4294967295,g=v+(d<<15&4294967295|d>>>17),d=p+(v^(g|~m))+y[9]+3951481745&4294967295,_.g[0]=_.g[0]+m&4294967295,_.g[1]=_.g[1]+(g+(d<<21&4294967295|d>>>11))&4294967295,_.g[2]=_.g[2]+g&4294967295,_.g[3]=_.g[3]+v&4294967295}r.prototype.v=function(_,m){m===void 0&&(m=_.length);const p=m-this.blockSize,y=this.C;let g=this.h,v=0;for(;v<m;){if(g==0)for(;v<=p;)i(this,_,v),v+=this.blockSize;if(typeof _=="string"){for(;v<m;)if(y[g++]=_.charCodeAt(v++),g==this.blockSize){i(this,y),g=0;break}}else for(;v<m;)if(y[g++]=_[v++],g==this.blockSize){i(this,y),g=0;break}}this.h=g,this.o+=m},r.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var m=1;m<_.length-8;++m)_[m]=0;m=this.o*8;for(var p=_.length-8;p<_.length;++p)_[p]=m&255,m/=256;for(this.v(_),_=Array(16),m=0,p=0;p<4;++p)for(let y=0;y<32;y+=8)_[m++]=this.g[p]>>>y&255;return _};function o(_,m){var p=u;return Object.prototype.hasOwnProperty.call(p,_)?p[_]:p[_]=m(_)}function c(_,m){this.h=m;const p=[];let y=!0;for(let g=_.length-1;g>=0;g--){const v=_[g]|0;y&&v==m||(p[g]=v,y=!1)}this.g=p}var u={};function h(_){return-128<=_&&_<128?o(_,function(m){return new c([m|0],m<0?-1:0)}):new c([_|0],_<0?-1:0)}function E(_){if(isNaN(_)||!isFinite(_))return w;if(_<0)return L(E(-_));const m=[];let p=1;for(let y=0;_>=p;y++)m[y]=_/p|0,p*=4294967296;return new c(m,0)}function T(_,m){if(_.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(_.charAt(0)=="-")return L(T(_.substring(1),m));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const p=E(Math.pow(m,8));let y=w;for(let v=0;v<_.length;v+=8){var g=Math.min(8,_.length-v);const d=parseInt(_.substring(v,v+g),m);g<8?(g=E(Math.pow(m,g)),y=y.j(g).add(E(d))):(y=y.j(p),y=y.add(E(d)))}return y}var w=h(0),S=h(1),V=h(16777216);n=c.prototype,n.m=function(){if(U(this))return-L(this).m();let _=0,m=1;for(let p=0;p<this.g.length;p++){const y=this.i(p);_+=(y>=0?y:4294967296+y)*m,m*=4294967296}return _},n.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(N(this))return"0";if(U(this))return"-"+L(this).toString(_);const m=E(Math.pow(_,6));var p=this;let y="";for(;;){const g=it(p,m).g;p=X(p,g.j(m));let v=((p.g.length>0?p.g[0]:p.h)>>>0).toString(_);if(p=g,N(p))return v+y;for(;v.length<6;)v="0"+v;y=v+y}},n.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function N(_){if(_.h!=0)return!1;for(let m=0;m<_.g.length;m++)if(_.g[m]!=0)return!1;return!0}function U(_){return _.h==-1}n.l=function(_){return _=X(this,_),U(_)?-1:N(_)?0:1};function L(_){const m=_.g.length,p=[];for(let y=0;y<m;y++)p[y]=~_.g[y];return new c(p,~_.h).add(S)}n.abs=function(){return U(this)?L(this):this},n.add=function(_){const m=Math.max(this.g.length,_.g.length),p=[];let y=0;for(let g=0;g<=m;g++){let v=y+(this.i(g)&65535)+(_.i(g)&65535),d=(v>>>16)+(this.i(g)>>>16)+(_.i(g)>>>16);y=d>>>16,v&=65535,d&=65535,p[g]=d<<16|v}return new c(p,p[p.length-1]&-2147483648?-1:0)};function X(_,m){return _.add(L(m))}n.j=function(_){if(N(this)||N(_))return w;if(U(this))return U(_)?L(this).j(L(_)):L(L(this).j(_));if(U(_))return L(this.j(L(_)));if(this.l(V)<0&&_.l(V)<0)return E(this.m()*_.m());const m=this.g.length+_.g.length,p=[];for(var y=0;y<2*m;y++)p[y]=0;for(y=0;y<this.g.length;y++)for(let g=0;g<_.g.length;g++){const v=this.i(y)>>>16,d=this.i(y)&65535,O=_.i(g)>>>16,H=_.i(g)&65535;p[2*y+2*g]+=d*H,Z(p,2*y+2*g),p[2*y+2*g+1]+=v*H,Z(p,2*y+2*g+1),p[2*y+2*g+1]+=d*O,Z(p,2*y+2*g+1),p[2*y+2*g+2]+=v*O,Z(p,2*y+2*g+2)}for(_=0;_<m;_++)p[_]=p[2*_+1]<<16|p[2*_];for(_=m;_<2*m;_++)p[_]=0;return new c(p,0)};function Z(_,m){for(;(_[m]&65535)!=_[m];)_[m+1]+=_[m]>>>16,_[m]&=65535,m++}function B(_,m){this.g=_,this.h=m}function it(_,m){if(N(m))throw Error("division by zero");if(N(_))return new B(w,w);if(U(_))return m=it(L(_),m),new B(L(m.g),L(m.h));if(U(m))return m=it(_,L(m)),new B(L(m.g),m.h);if(_.g.length>30){if(U(_)||U(m))throw Error("slowDivide_ only works with positive integers.");for(var p=S,y=m;y.l(_)<=0;)p=Q(p),y=Q(y);var g=b(p,1),v=b(y,1);for(y=b(y,2),p=b(p,2);!N(y);){var d=v.add(y);d.l(_)<=0&&(g=g.add(p),v=d),y=b(y,1),p=b(p,1)}return m=X(_,g.j(m)),new B(g,m)}for(g=w;_.l(m)>=0;){for(p=Math.max(1,Math.floor(_.m()/m.m())),y=Math.ceil(Math.log(p)/Math.LN2),y=y<=48?1:Math.pow(2,y-48),v=E(p),d=v.j(m);U(d)||d.l(_)>0;)p-=y,v=E(p),d=v.j(m);N(v)&&(v=S),g=g.add(v),_=X(_,d)}return new B(g,_)}n.B=function(_){return it(this,_).h},n.and=function(_){const m=Math.max(this.g.length,_.g.length),p=[];for(let y=0;y<m;y++)p[y]=this.i(y)&_.i(y);return new c(p,this.h&_.h)},n.or=function(_){const m=Math.max(this.g.length,_.g.length),p=[];for(let y=0;y<m;y++)p[y]=this.i(y)|_.i(y);return new c(p,this.h|_.h)},n.xor=function(_){const m=Math.max(this.g.length,_.g.length),p=[];for(let y=0;y<m;y++)p[y]=this.i(y)^_.i(y);return new c(p,this.h^_.h)};function Q(_){const m=_.g.length+1,p=[];for(let y=0;y<m;y++)p[y]=_.i(y)<<1|_.i(y-1)>>>31;return new c(p,_.h)}function b(_,m){const p=m>>5;m%=32;const y=_.g.length-p,g=[];for(let v=0;v<y;v++)g[v]=m>0?_.i(v+p)>>>m|_.i(v+p+1)<<32-m:_.i(v+p);return new c(g,_.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=E,c.fromString=T,ys=c}).apply(typeof Yi<"u"?Yi:typeof self<"u"?self:typeof window<"u"?window:{});var kn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ea,en,na,zn,ss,ra,sa,ia;(function(){var n,t=Object.defineProperty;function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof kn=="object"&&kn];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var l=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var A=s[f];if(!(A in l))break t;l=l[A]}s=s[s.length-1],f=l[s],a=a(f),a!=f&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(a){var l=[],f;for(f in a)Object.prototype.hasOwnProperty.call(a,f)&&l.push([f,a[f]]);return l}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function u(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function h(s,a,l){return s.call.apply(s.bind,arguments)}function E(s,a,l){return E=h,E.apply(null,arguments)}function T(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function w(s,a){function l(){}l.prototype=a.prototype,s.Z=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Ob=function(f,A,I){for(var P=Array(arguments.length-2),M=2;M<arguments.length;M++)P[M-2]=arguments[M];return a.prototype[A].apply(f,P)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function V(s){const a=s.length;if(a>0){const l=Array(a);for(let f=0;f<a;f++)l[f]=s[f];return l}return[]}function N(s,a){for(let f=1;f<arguments.length;f++){const A=arguments[f];var l=typeof A;if(l=l!="object"?l:A?Array.isArray(A)?"array":l:"null",l=="array"||l=="object"&&typeof A.length=="number"){l=s.length||0;const I=A.length||0;s.length=l+I;for(let P=0;P<I;P++)s[l+P]=A[P]}else s.push(A)}}class U{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return this.h>0?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function L(s){c.setTimeout(()=>{throw s},0)}function X(){var s=_;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Z{constructor(){this.h=this.g=null}add(a,l){const f=B.get();f.set(a,l),this.h?this.h.next=f:this.g=f,this.h=f}}var B=new U(()=>new it,s=>s.reset());class it{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Q,b=!1,_=new Z,m=()=>{const s=Promise.resolve(void 0);Q=()=>{s.then(p)}};function p(){for(var s;s=X();){try{s.h.call(s.g)}catch(l){L(l)}var a=B;a.j(s),a.h<100&&(a.h++,s.next=a.g,a.g=s)}b=!1}function y(){this.u=this.u,this.C=this.C}y.prototype.u=!1,y.prototype.dispose=function(){this.u||(this.u=!0,this.N())},y.prototype[Symbol.dispose]=function(){this.dispose()},y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function g(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}g.prototype.h=function(){this.defaultPrevented=!0};var v=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return s}();function d(s){return/^[\s\xa0]*$/.test(s)}function O(s,a){g.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,a)}w(O,g),O.prototype.init=function(s,a){const l=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget,a||(l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement)),this.relatedTarget=a,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&O.Z.h.call(this)},O.prototype.h=function(){O.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var H="closure_listenable_"+(Math.random()*1e6|0),yt=0;function Et(s,a,l,f,A){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!f,this.ha=A,this.key=++yt,this.da=this.fa=!1}function wt(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function j(s,a,l){for(const f in s)a.call(l,s[f],f,s)}function Ft(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function Nt(s){const a={};for(const l in s)a[l]=s[l];return a}const zt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Te(s,a){let l,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(l in f)s[l]=f[l];for(let I=0;I<zt.length;I++)l=zt[I],Object.prototype.hasOwnProperty.call(f,l)&&(s[l]=f[l])}}function Ht(s){this.src=s,this.g={},this.h=0}Ht.prototype.add=function(s,a,l,f,A){const I=s.toString();s=this.g[I],s||(s=this.g[I]=[],this.h++);const P=vr(s,a,f,A);return P>-1?(a=s[P],l||(a.fa=!1)):(a=new Et(a,this.src,I,!!f,A),a.fa=l,s.push(a)),a};function qt(s,a){const l=a.type;if(l in s.g){var f=s.g[l],A=Array.prototype.indexOf.call(f,a,void 0),I;(I=A>=0)&&Array.prototype.splice.call(f,A,1),I&&(wt(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function vr(s,a,l,f){for(let A=0;A<s.length;++A){const I=s[A];if(!I.da&&I.listener==a&&I.capture==!!l&&I.ha==f)return A}return-1}var Tr="closure_lm_"+(Math.random()*1e6|0),Ar={};function zs(s,a,l,f,A){if(Array.isArray(a)){for(let I=0;I<a.length;I++)zs(s,a[I],l,f,A);return null}return l=Gs(l),s&&s[H]?s.J(a,l,u(f)?!!f.capture:!1,A):nc(s,a,l,!1,f,A)}function nc(s,a,l,f,A,I){if(!a)throw Error("Invalid event type");const P=u(A)?!!A.capture:!!A;let M=Ir(s);if(M||(s[Tr]=M=new Ht(s)),l=M.add(a,l,f,P,I),l.proxy)return l;if(f=rc(),l.proxy=f,f.src=s,f.listener=l,s.addEventListener)v||(A=P),A===void 0&&(A=!1),s.addEventListener(a.toString(),f,A);else if(s.attachEvent)s.attachEvent(qs(a.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function rc(){function s(l){return a.call(s.src,s.listener,l)}const a=sc;return s}function Hs(s,a,l,f,A){if(Array.isArray(a))for(var I=0;I<a.length;I++)Hs(s,a[I],l,f,A);else f=u(f)?!!f.capture:!!f,l=Gs(l),s&&s[H]?(s=s.i,I=String(a).toString(),I in s.g&&(a=s.g[I],l=vr(a,l,f,A),l>-1&&(wt(a[l]),Array.prototype.splice.call(a,l,1),a.length==0&&(delete s.g[I],s.h--)))):s&&(s=Ir(s))&&(a=s.g[a.toString()],s=-1,a&&(s=vr(a,l,f,A)),(l=s>-1?a[s]:null)&&wr(l))}function wr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[H])qt(a.i,s);else{var l=s.type,f=s.proxy;a.removeEventListener?a.removeEventListener(l,f,s.capture):a.detachEvent?a.detachEvent(qs(l),f):a.addListener&&a.removeListener&&a.removeListener(f),(l=Ir(a))?(qt(l,s),l.h==0&&(l.src=null,a[Tr]=null)):wt(s)}}}function qs(s){return s in Ar?Ar[s]:Ar[s]="on"+s}function sc(s,a){if(s.da)s=!0;else{a=new O(a,this);const l=s.listener,f=s.ha||s.src;s.fa&&wr(s),s=l.call(f,a)}return s}function Ir(s){return s=s[Tr],s instanceof Ht?s:null}var br="__closure_events_fn_"+(Math.random()*1e9>>>0);function Gs(s){return typeof s=="function"?s:(s[br]||(s[br]=function(a){return s.handleEvent(a)}),s[br])}function pt(){y.call(this),this.i=new Ht(this),this.M=this,this.G=null}w(pt,y),pt.prototype[H]=!0,pt.prototype.removeEventListener=function(s,a,l,f){Hs(this,s,a,l,f)};function vt(s,a){var l,f=s.G;if(f)for(l=[];f;f=f.G)l.push(f);if(s=s.M,f=a.type||a,typeof a=="string")a=new g(a,s);else if(a instanceof g)a.target=a.target||s;else{var A=a;a=new g(f,s),Te(a,A)}A=!0;let I,P;if(l)for(P=l.length-1;P>=0;P--)I=a.g=l[P],A=In(I,f,!0,a)&&A;if(I=a.g=s,A=In(I,f,!0,a)&&A,A=In(I,f,!1,a)&&A,l)for(P=0;P<l.length;P++)I=a.g=l[P],A=In(I,f,!1,a)&&A}pt.prototype.N=function(){if(pt.Z.N.call(this),this.i){var s=this.i;for(const a in s.g){const l=s.g[a];for(let f=0;f<l.length;f++)wt(l[f]);delete s.g[a],s.h--}}this.G=null},pt.prototype.J=function(s,a,l,f){return this.i.add(String(s),a,!1,l,f)},pt.prototype.K=function(s,a,l,f){return this.i.add(String(s),a,!0,l,f)};function In(s,a,l,f){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();let A=!0;for(let I=0;I<a.length;++I){const P=a[I];if(P&&!P.da&&P.capture==l){const M=P.listener,ot=P.ha||P.src;P.fa&&qt(s.i,P),A=M.call(ot,f)!==!1&&A}}return A&&!f.defaultPrevented}function ic(s,a){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=E(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(a)>2147483647?-1:c.setTimeout(s,a||0)}function Ks(s){s.g=ic(()=>{s.g=null,s.i&&(s.i=!1,Ks(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class oc extends y{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Ks(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Me(s){y.call(this),this.h=s,this.g={}}w(Me,y);var Qs=[];function Ws(s){j(s.g,function(a,l){this.g.hasOwnProperty(l)&&wr(a)},s),s.g={}}Me.prototype.N=function(){Me.Z.N.call(this),Ws(this)},Me.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Sr=c.JSON.stringify,ac=c.JSON.parse,cc=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function Js(){}function Xs(){}var Le={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Rr(){g.call(this,"d")}w(Rr,g);function Cr(){g.call(this,"c")}w(Cr,g);var oe={},Ys=null;function bn(){return Ys=Ys||new pt}oe.Ia="serverreachability";function Zs(s){g.call(this,oe.Ia,s)}w(Zs,g);function Ue(s){const a=bn();vt(a,new Zs(a))}oe.STAT_EVENT="statevent";function ti(s,a){g.call(this,oe.STAT_EVENT,s),this.stat=a}w(ti,g);function Tt(s){const a=bn();vt(a,new ti(a,s))}oe.Ja="timingevent";function ei(s,a){g.call(this,oe.Ja,s),this.size=a}w(ei,g);function Be(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function je(){this.g=!0}je.prototype.ua=function(){this.g=!1};function lc(s,a,l,f,A,I){s.info(function(){if(s.g)if(I){var P="",M=I.split("&");for(let G=0;G<M.length;G++){var ot=M[G].split("=");if(ot.length>1){const at=ot[0];ot=ot[1];const Mt=at.split("_");P=Mt.length>=2&&Mt[1]=="type"?P+(at+"="+ot+"&"):P+(at+"=redacted&")}}}else P=null;else P=I;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+a+`
`+l+`
`+P})}function uc(s,a,l,f,A,I,P){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+a+`
`+l+`
`+I+" "+P})}function Ae(s,a,l,f){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+fc(s,l)+(f?" "+f:"")})}function hc(s,a){s.info(function(){return"TIMEOUT: "+a})}je.prototype.info=function(){};function fc(s,a){if(!s.g)return a;if(!a)return null;try{const I=JSON.parse(a);if(I){for(s=0;s<I.length;s++)if(Array.isArray(I[s])){var l=I[s];if(!(l.length<2)){var f=l[1];if(Array.isArray(f)&&!(f.length<1)){var A=f[0];if(A!="noop"&&A!="stop"&&A!="close")for(let P=1;P<f.length;P++)f[P]=""}}}}return Sr(I)}catch{return a}}var Sn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ni={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ri;function Pr(){}w(Pr,Js),Pr.prototype.g=function(){return new XMLHttpRequest},ri=new Pr;function $e(s){return encodeURIComponent(String(s))}function dc(s){var a=1;s=s.split(":");const l=[];for(;a>0&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function Gt(s,a,l,f){this.j=s,this.i=a,this.l=l,this.S=f||1,this.V=new Me(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new si}function si(){this.i=null,this.g="",this.h=!1}var ii={},Vr={};function xr(s,a,l){s.M=1,s.A=Cn(kt(a)),s.u=l,s.R=!0,oi(s,null)}function oi(s,a){s.F=Date.now(),Rn(s),s.B=kt(s.A);var l=s.B,f=s.S;Array.isArray(f)||(f=[String(f)]),Ei(l.i,"t",f),s.C=0,l=s.j.L,s.h=new si,s.g=Mi(s.j,l?a:null,!s.u),s.P>0&&(s.O=new oc(E(s.Y,s,s.g),s.P)),a=s.V,l=s.g,f=s.ba;var A="readystatechange";Array.isArray(A)||(A&&(Qs[0]=A.toString()),A=Qs);for(let I=0;I<A.length;I++){const P=zs(l,A[I],f||a.handleEvent,!1,a.h||a);if(!P)break;a.g[P.key]=P}a=s.J?Nt(s.J):{},s.u?(s.v||(s.v="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,a)):(s.v="GET",s.g.ea(s.B,s.v,null,a)),Ue(),lc(s.i,s.v,s.B,s.l,s.S,s.u)}Gt.prototype.ba=function(s){s=s.target;const a=this.O;a&&Wt(s)==3?a.j():this.Y(s)},Gt.prototype.Y=function(s){try{if(s==this.g)t:{const M=Wt(this.g),ot=this.g.ya(),G=this.g.ca();if(!(M<3)&&(M!=3||this.g&&(this.h.h||this.g.la()||Si(this.g)))){this.K||M!=4||ot==7||(ot==8||G<=0?Ue(3):Ue(2)),Dr(this);var a=this.g.ca();this.X=a;var l=pc(this);if(this.o=a==200,uc(this.i,this.v,this.B,this.l,this.S,M,a),this.o){if(this.U&&!this.L){e:{if(this.g){var f,A=this.g;if((f=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!d(f)){var I=f;break e}}I=null}if(s=I)Ae(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Nr(this,s);else{this.o=!1,this.m=3,Tt(12),ae(this),ze(this);break t}}if(this.R){s=!0;let at;for(;!this.K&&this.C<l.length;)if(at=mc(this,l),at==Vr){M==4&&(this.m=4,Tt(14),s=!1),Ae(this.i,this.l,null,"[Incomplete Response]");break}else if(at==ii){this.m=4,Tt(15),Ae(this.i,this.l,l,"[Invalid Chunk]"),s=!1;break}else Ae(this.i,this.l,at,null),Nr(this,at);if(ai(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),M!=4||l.length!=0||this.h.h||(this.m=1,Tt(16),s=!1),this.o=this.o&&s,!s)Ae(this.i,this.l,l,"[Invalid Chunked Response]"),ae(this),ze(this);else if(l.length>0&&!this.W){this.W=!0;var P=this.j;P.g==this&&P.aa&&!P.P&&(P.j.info("Great, no buffering proxy detected. Bytes received: "+l.length),jr(P),P.P=!0,Tt(11))}}else Ae(this.i,this.l,l,null),Nr(this,l);M==4&&ae(this),this.o&&!this.K&&(M==4?Ni(this.j,this):(this.o=!1,Rn(this)))}else Pc(this.g),a==400&&l.indexOf("Unknown SID")>0?(this.m=3,Tt(12)):(this.m=0,Tt(13)),ae(this),ze(this)}}}catch{}finally{}};function pc(s){if(!ai(s))return s.g.la();const a=Si(s.g);if(a==="")return"";let l="";const f=a.length,A=Wt(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return ae(s),ze(s),"";s.h.i=new c.TextDecoder}for(let I=0;I<f;I++)s.h.h=!0,l+=s.h.i.decode(a[I],{stream:!(A&&I==f-1)});return a.length=0,s.h.g+=l,s.C=0,s.h.g}function ai(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function mc(s,a){var l=s.C,f=a.indexOf(`
`,l);return f==-1?Vr:(l=Number(a.substring(l,f)),isNaN(l)?ii:(f+=1,f+l>a.length?Vr:(a=a.slice(f,f+l),s.C=f+l,a)))}Gt.prototype.cancel=function(){this.K=!0,ae(this)};function Rn(s){s.T=Date.now()+s.H,ci(s,s.H)}function ci(s,a){if(s.D!=null)throw Error("WatchDog timer not null");s.D=Be(E(s.aa,s),a)}function Dr(s){s.D&&(c.clearTimeout(s.D),s.D=null)}Gt.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(hc(this.i,this.B),this.M!=2&&(Ue(),Tt(17)),ae(this),this.m=2,ze(this)):ci(this,this.T-s)};function ze(s){s.j.I==0||s.K||Ni(s.j,s)}function ae(s){Dr(s);var a=s.O;a&&typeof a.dispose=="function"&&a.dispose(),s.O=null,Ws(s.V),s.g&&(a=s.g,s.g=null,a.abort(),a.dispose())}function Nr(s,a){try{var l=s.j;if(l.I!=0&&(l.g==s||Or(l.h,s))){if(!s.L&&Or(l.h,s)&&l.I==3){try{var f=l.Ba.g.parse(a)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!l.v){if(l.g)if(l.g.F+3e3<s.F)Nn(l),xn(l);else break t;Br(l),Tt(18)}}else l.xa=A[1],0<l.xa-l.K&&A[2]<37500&&l.F&&l.A==0&&!l.C&&(l.C=Be(E(l.Va,l),6e3));hi(l.h)<=1&&l.ta&&(l.ta=void 0)}else le(l,11)}else if((s.L||l.g==s)&&Nn(l),!d(a))for(A=l.Ba.g.parse(a),a=0;a<A.length;a++){let G=A[a];const at=G[0];if(!(at<=l.K))if(l.K=at,G=G[1],l.I==2)if(G[0]=="c"){l.M=G[1],l.ba=G[2];const Mt=G[3];Mt!=null&&(l.ka=Mt,l.j.info("VER="+l.ka));const ue=G[4];ue!=null&&(l.za=ue,l.j.info("SVER="+l.za));const Jt=G[5];Jt!=null&&typeof Jt=="number"&&Jt>0&&(f=1.5*Jt,l.O=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const Xt=s.g;if(Xt){const Fn=Xt.g?Xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fn){var I=f.h;I.g||Fn.indexOf("spdy")==-1&&Fn.indexOf("quic")==-1&&Fn.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(Fr(I,I.h),I.h=null))}if(f.G){const $r=Xt.g?Xt.g.getResponseHeader("X-HTTP-Session-Id"):null;$r&&(f.wa=$r,W(f.J,f.G,$r))}}l.I=3,l.l&&l.l.ra(),l.aa&&(l.T=Date.now()-s.F,l.j.info("Handshake RTT: "+l.T+"ms")),f=l;var P=s;if(f.na=ki(f,f.L?f.ba:null,f.W),P.L){fi(f.h,P);var M=P,ot=f.O;ot&&(M.H=ot),M.D&&(Dr(M),Rn(M)),f.g=P}else xi(f);l.i.length>0&&Dn(l)}else G[0]!="stop"&&G[0]!="close"||le(l,7);else l.I==3&&(G[0]=="stop"||G[0]=="close"?G[0]=="stop"?le(l,7):Ur(l):G[0]!="noop"&&l.l&&l.l.qa(G),l.A=0)}}Ue(4)}catch{}}var gc=class{constructor(s,a){this.g=s,this.map=a}};function li(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ui(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function hi(s){return s.h?1:s.g?s.g.size:0}function Or(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Fr(s,a){s.g?s.g.add(a):s.h=a}function fi(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}li.prototype.cancel=function(){if(this.i=di(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function di(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.G);return a}return V(s.i)}var pi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _c(s,a){if(s){s=s.split("&");for(let l=0;l<s.length;l++){const f=s[l].indexOf("=");let A,I=null;f>=0?(A=s[l].substring(0,f),I=s[l].substring(f+1)):A=s[l],a(A,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function Kt(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let a;s instanceof Kt?(this.l=s.l,He(this,s.j),this.o=s.o,this.g=s.g,qe(this,s.u),this.h=s.h,kr(this,vi(s.i)),this.m=s.m):s&&(a=String(s).match(pi))?(this.l=!1,He(this,a[1]||"",!0),this.o=Ge(a[2]||""),this.g=Ge(a[3]||"",!0),qe(this,a[4]),this.h=Ge(a[5]||"",!0),kr(this,a[6]||"",!0),this.m=Ge(a[7]||"")):(this.l=!1,this.i=new Qe(null,this.l))}Kt.prototype.toString=function(){const s=[];var a=this.j;a&&s.push(Ke(a,mi,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Ke(a,mi,!0),"@"),s.push($e(l).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.u,l!=null&&s.push(":",String(l))),(l=this.h)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Ke(l,l.charAt(0)=="/"?vc:Ec,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Ke(l,Ac)),s.join("")},Kt.prototype.resolve=function(s){const a=kt(this);let l=!!s.j;l?He(a,s.j):l=!!s.o,l?a.o=s.o:l=!!s.g,l?a.g=s.g:l=s.u!=null;var f=s.h;if(l)qe(a,s.u);else if(l=!!s.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var A=a.h.lastIndexOf("/");A!=-1&&(f=a.h.slice(0,A+1)+f)}if(A=f,A==".."||A==".")f="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){f=A.lastIndexOf("/",0)==0,A=A.split("/");const I=[];for(let P=0;P<A.length;){const M=A[P++];M=="."?f&&P==A.length&&I.push(""):M==".."?((I.length>1||I.length==1&&I[0]!="")&&I.pop(),f&&P==A.length&&I.push("")):(I.push(M),f=!0)}f=I.join("/")}else f=A}return l?a.h=f:l=s.i.toString()!=="",l?kr(a,vi(s.i)):l=!!s.m,l&&(a.m=s.m),a};function kt(s){return new Kt(s)}function He(s,a,l){s.j=l?Ge(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function qe(s,a){if(a){if(a=Number(a),isNaN(a)||a<0)throw Error("Bad port number "+a);s.u=a}else s.u=null}function kr(s,a,l){a instanceof Qe?(s.i=a,wc(s.i,s.l)):(l||(a=Ke(a,Tc)),s.i=new Qe(a,s.l))}function W(s,a,l){s.i.set(a,l)}function Cn(s){return W(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function Ge(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Ke(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,yc),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function yc(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var mi=/[#\/\?@]/g,Ec=/[#\?:]/g,vc=/[#\?]/g,Tc=/[#\?@]/g,Ac=/#/g;function Qe(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function ce(s){s.g||(s.g=new Map,s.h=0,s.i&&_c(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=Qe.prototype,n.add=function(s,a){ce(this),this.i=null,s=we(this,s);let l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function gi(s,a){ce(s),a=we(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function _i(s,a){return ce(s),a=we(s,a),s.g.has(a)}n.forEach=function(s,a){ce(this),this.g.forEach(function(l,f){l.forEach(function(A){s.call(a,A,f,this)},this)},this)};function yi(s,a){ce(s);let l=[];if(typeof a=="string")_i(s,a)&&(l=l.concat(s.g.get(we(s,a))));else for(s=Array.from(s.g.values()),a=0;a<s.length;a++)l=l.concat(s[a]);return l}n.set=function(s,a){return ce(this),this.i=null,s=we(this,s),_i(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=yi(this,s),s.length>0?String(s[0]):a):a};function Ei(s,a,l){gi(s,a),l.length>0&&(s.i=null,s.g.set(we(s,a),V(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(let f=0;f<a.length;f++){var l=a[f];const A=$e(l);l=yi(this,l);for(let I=0;I<l.length;I++){let P=A;l[I]!==""&&(P+="="+$e(l[I])),s.push(P)}}return this.i=s.join("&")};function vi(s){const a=new Qe;return a.i=s.i,s.g&&(a.g=new Map(s.g),a.h=s.h),a}function we(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function wc(s,a){a&&!s.j&&(ce(s),s.i=null,s.g.forEach(function(l,f){const A=f.toLowerCase();f!=A&&(gi(this,f),Ei(this,A,l))},s)),s.j=a}function Ic(s,a){const l=new je;if(c.Image){const f=new Image;f.onload=T(Qt,l,"TestLoadImage: loaded",!0,a,f),f.onerror=T(Qt,l,"TestLoadImage: error",!1,a,f),f.onabort=T(Qt,l,"TestLoadImage: abort",!1,a,f),f.ontimeout=T(Qt,l,"TestLoadImage: timeout",!1,a,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else a(!1)}function bc(s,a){const l=new je,f=new AbortController,A=setTimeout(()=>{f.abort(),Qt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:f.signal}).then(I=>{clearTimeout(A),I.ok?Qt(l,"TestPingServer: ok",!0,a):Qt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(A),Qt(l,"TestPingServer: error",!1,a)})}function Qt(s,a,l,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(l)}catch{}}function Sc(){this.g=new cc}function Mr(s){this.i=s.Sb||null,this.h=s.ab||!1}w(Mr,Js),Mr.prototype.g=function(){return new Pn(this.i,this.h)};function Pn(s,a){pt.call(this),this.H=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(Pn,pt),n=Pn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=a,this.readyState=1,Je(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const a={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(a.body=s),(this.H||c).fetch(new Request(this.D,a)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,We(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Je(this)),this.g&&(this.readyState=3,Je(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ti(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ti(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.B.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?We(this):Je(this),this.readyState==3&&Ti(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,We(this))},n.Na=function(s){this.g&&(this.response=s,We(this))},n.ga=function(){this.g&&We(this)};function We(s){s.readyState=4,s.l=null,s.j=null,s.B=null,Je(s)}n.setRequestHeader=function(s,a){this.A.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function Je(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Pn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Ai(s){let a="";return j(s,function(l,f){a+=f,a+=":",a+=l,a+=`\r
`}),a}function Lr(s,a,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=Ai(l),typeof s=="string"?l!=null&&$e(l):W(s,a,l))}function tt(s){pt.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(tt,pt);var Rc=/^https?$/i,Cc=["POST","PUT"];n=tt.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,a,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ri.g(),this.g.onreadystatechange=S(E(this.Ca,this));try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(I){wi(this,I);return}if(s=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)l.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const I of f.keys())l.set(I,f.get(I));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(I=>I.toLowerCase()=="content-type"),A=c.FormData&&s instanceof c.FormData,!(Array.prototype.indexOf.call(Cc,a,void 0)>=0)||f||A||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,P]of l)this.g.setRequestHeader(I,P);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(I){wi(this,I)}};function wi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.o=5,Ii(s),Vn(s)}function Ii(s){s.A||(s.A=!0,vt(s,"complete"),vt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,vt(this,"complete"),vt(this,"abort"),Vn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vn(this,!0)),tt.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?bi(this):this.Xa())},n.Xa=function(){bi(this)};function bi(s){if(s.h&&typeof o<"u"){if(s.v&&Wt(s)==4)setTimeout(s.Ca.bind(s),0);else if(vt(s,"readystatechange"),Wt(s)==4){s.h=!1;try{const I=s.ca();t:switch(I){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var f;if(f=I===0){let P=String(s.D).match(pi)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),f=!Rc.test(P?P.toLowerCase():"")}l=f}if(l)vt(s,"complete"),vt(s,"success");else{s.o=6;try{var A=Wt(s)>2?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.ca()+"]",Ii(s)}}finally{Vn(s)}}}}function Vn(s,a){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const l=s.g;s.g=null,a||vt(s,"ready");try{l.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Wt(s){return s.g?s.g.readyState:0}n.ca=function(){try{return Wt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),ac(a)}};function Si(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Pc(s){const a={};s=(s.g&&Wt(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(d(s[f]))continue;var l=dc(s[f]);const A=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const I=a[A]||[];a[A]=I,I.push(l)}Ft(a,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xe(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function Ri(s){this.za=0,this.i=[],this.j=new je,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Xe("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Xe("baseRetryDelayMs",5e3,s),this.Za=Xe("retryDelaySeedMs",1e4,s),this.Ta=Xe("forwardChannelMaxRetries",2,s),this.va=Xe("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new li(s&&s.concurrentRequestLimit),this.Ba=new Sc,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Ri.prototype,n.ka=8,n.I=1,n.connect=function(s,a,l,f){Tt(0),this.W=s,this.H=a||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.J=ki(this,null,this.W),Dn(this)};function Ur(s){if(Ci(s),s.I==3){var a=s.V++,l=kt(s.J);if(W(l,"SID",s.M),W(l,"RID",a),W(l,"TYPE","terminate"),Ye(s,l),a=new Gt(s,s.j,a),a.M=2,a.A=Cn(kt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.A.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.A,l=!0),l||(a.g=Mi(a.j,null),a.g.ea(a.A)),a.F=Date.now(),Rn(a)}Fi(s)}function xn(s){s.g&&(jr(s),s.g.cancel(),s.g=null)}function Ci(s){xn(s),s.v&&(c.clearTimeout(s.v),s.v=null),Nn(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&c.clearTimeout(s.m),s.m=null)}function Dn(s){if(!ui(s.h)&&!s.m){s.m=!0;var a=s.Ea;Q||m(),b||(Q(),b=!0),_.add(a,s),s.D=0}}function Vc(s,a){return hi(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=a.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=Be(E(s.Ea,s,a),Oi(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const A=new Gt(this,this.j,s);let I=this.o;if(this.U&&(I?(I=Nt(I),Te(I,this.U)):I=this.U),this.u!==null||this.R||(A.J=I,I=null),this.S)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(a+=f,a>4096){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Vi(this,A,a),l=kt(this.J),W(l,"RID",s),W(l,"CVER",22),this.G&&W(l,"X-HTTP-Session-Id",this.G),Ye(this,l),I&&(this.R?a="headers="+$e(Ai(I))+"&"+a:this.u&&Lr(l,this.u,I)),Fr(this.h,A),this.Ra&&W(l,"TYPE","init"),this.S?(W(l,"$req",a),W(l,"SID","null"),A.U=!0,xr(A,l,null)):xr(A,l,a),this.I=2}}else this.I==3&&(s?Pi(this,s):this.i.length==0||ui(this.h)||Pi(this))};function Pi(s,a){var l;a?l=a.l:l=s.V++;const f=kt(s.J);W(f,"SID",s.M),W(f,"RID",l),W(f,"AID",s.K),Ye(s,f),s.u&&s.o&&Lr(f,s.u,s.o),l=new Gt(s,s.j,l,s.D+1),s.u===null&&(l.J=s.o),a&&(s.i=a.G.concat(s.i)),a=Vi(s,l,1e3),l.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),Fr(s.h,l),xr(l,f,a)}function Ye(s,a){s.H&&j(s.H,function(l,f){W(a,f,l)}),s.l&&j({},function(l,f){W(a,f,l)})}function Vi(s,a,l){l=Math.min(s.i.length,l);const f=s.l?E(s.l.Ka,s.l,s):null;t:{var A=s.i;let M=-1;for(;;){const ot=["count="+l];M==-1?l>0?(M=A[0].g,ot.push("ofs="+M)):M=0:ot.push("ofs="+M);let G=!0;for(let at=0;at<l;at++){var I=A[at].g;const Mt=A[at].map;if(I-=M,I<0)M=Math.max(0,A[at].g-100),G=!1;else try{I="req"+I+"_"||"";try{var P=Mt instanceof Map?Mt:Object.entries(Mt);for(const[ue,Jt]of P){let Xt=Jt;u(Jt)&&(Xt=Sr(Jt)),ot.push(I+ue+"="+encodeURIComponent(Xt))}}catch(ue){throw ot.push(I+"type="+encodeURIComponent("_badmap")),ue}}catch{f&&f(Mt)}}if(G){P=ot.join("&");break t}}P=void 0}return s=s.i.splice(0,l),a.G=s,P}function xi(s){if(!s.g&&!s.v){s.Y=1;var a=s.Da;Q||m(),b||(Q(),b=!0),_.add(a,s),s.A=0}}function Br(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=Be(E(s.Da,s),Oi(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,Di(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=Be(E(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Tt(10),xn(this),Di(this))};function jr(s){s.B!=null&&(c.clearTimeout(s.B),s.B=null)}function Di(s){s.g=new Gt(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var a=kt(s.na);W(a,"RID","rpc"),W(a,"SID",s.M),W(a,"AID",s.K),W(a,"CI",s.F?"0":"1"),!s.F&&s.ia&&W(a,"TO",s.ia),W(a,"TYPE","xmlhttp"),Ye(s,a),s.u&&s.o&&Lr(a,s.u,s.o),s.O&&(s.g.H=s.O);var l=s.g;s=s.ba,l.M=1,l.A=Cn(kt(a)),l.u=null,l.R=!0,oi(l,s)}n.Va=function(){this.C!=null&&(this.C=null,xn(this),Br(this),Tt(19))};function Nn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function Ni(s,a){var l=null;if(s.g==a){Nn(s),jr(s),s.g=null;var f=2}else if(Or(s.h,a))l=a.G,fi(s.h,a),f=1;else return;if(s.I!=0){if(a.o)if(f==1){l=a.u?a.u.length:0,a=Date.now()-a.F;var A=s.D;f=bn(),vt(f,new ei(f,l)),Dn(s)}else xi(s);else if(A=a.m,A==3||A==0&&a.X>0||!(f==1&&Vc(s,a)||f==2&&Br(s)))switch(l&&l.length>0&&(a=s.h,a.i=a.i.concat(l)),A){case 1:le(s,5);break;case 4:le(s,10);break;case 3:le(s,6);break;default:le(s,2)}}}function Oi(s,a){let l=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(l*=2),l*a}function le(s,a){if(s.j.info("Error code "+a),a==2){var l=E(s.bb,s),f=s.Ua;const A=!f;f=new Kt(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||He(f,"https"),Cn(f),A?Ic(f.toString(),l):bc(f.toString(),l)}else Tt(2);s.I=0,s.l&&s.l.pa(a),Fi(s),Ci(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function Fi(s){if(s.I=0,s.ja=[],s.l){const a=di(s.h);(a.length!=0||s.i.length!=0)&&(N(s.ja,a),N(s.ja,s.i),s.h.i.length=0,V(s.i),s.i.length=0),s.l.oa()}}function ki(s,a,l){var f=l instanceof Kt?kt(l):new Kt(l);if(f.g!="")a&&(f.g=a+"."+f.g),qe(f,f.u);else{var A=c.location;f=A.protocol,a=a?a+"."+A.hostname:A.hostname,A=+A.port;const I=new Kt(null);f&&He(I,f),a&&(I.g=a),A&&qe(I,A),l&&(I.h=l),f=I}return l=s.G,a=s.wa,l&&a&&W(f,l,a),W(f,"VER",s.ka),Ye(s,f),f}function Mi(s,a,l){if(a&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Aa&&!s.ma?new tt(new Mr({ab:l})):new tt(s.ma),a.Fa(s.L),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Li(){}n=Li.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function On(){}On.prototype.g=function(s,a){return new It(s,a)};function It(s,a){pt.call(this),this.g=new Ri(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.sa&&(s?s["X-WebChannel-Client-Profile"]=a.sa:s={"X-WebChannel-Client-Profile":a.sa}),this.g.U=s,(s=a&&a.Qb)&&!d(s)&&(this.g.u=s),this.A=a&&a.supportsCrossDomainXhr||!1,this.v=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!d(a)&&(this.g.G=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new Ie(this)}w(It,pt),It.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){Ur(this.g)},It.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.v&&(l={},l.__data__=Sr(s),s=l);a.i.push(new gc(a.Ya++,s)),a.I==3&&Dn(a)},It.prototype.N=function(){this.g.l=null,delete this.j,Ur(this.g),delete this.g,It.Z.N.call(this)};function Ui(s){Rr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}w(Ui,Rr);function Bi(){Cr.call(this),this.status=1}w(Bi,Cr);function Ie(s){this.g=s}w(Ie,Li),Ie.prototype.ra=function(){vt(this.g,"a")},Ie.prototype.qa=function(s){vt(this.g,new Ui(s))},Ie.prototype.pa=function(s){vt(this.g,new Bi)},Ie.prototype.oa=function(){vt(this.g,"b")},On.prototype.createWebChannel=On.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,ia=function(){return new On},sa=function(){return bn()},ra=oe,ss={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Sn.NO_ERROR=0,Sn.TIMEOUT=8,Sn.HTTP_ERROR=6,zn=Sn,ni.COMPLETE="complete",na=ni,Xs.EventType=Le,Le.OPEN="a",Le.CLOSE="b",Le.ERROR="c",Le.MESSAGE="d",pt.prototype.listen=pt.prototype.J,en=Xs,tt.prototype.listenOnce=tt.prototype.K,tt.prototype.getLastError=tt.prototype.Ha,tt.prototype.getLastErrorCode=tt.prototype.ya,tt.prototype.getStatus=tt.prototype.ca,tt.prototype.getResponseJson=tt.prototype.La,tt.prototype.getResponseText=tt.prototype.la,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Fa,ea=tt}).apply(typeof kn<"u"?kn:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let Fe="12.11.0";function vu(n){Fe=n}/**
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
 *//**
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
 */const ge=new Wo("@firebase/firestore");function Se(){return ge.logLevel}function D(n,...t){if(ge.logLevel<=z.DEBUG){const e=t.map(Es);ge.debug(`Firestore (${Fe}): ${n}`,...e)}}function ke(n,...t){if(ge.logLevel<=z.ERROR){const e=t.map(Es);ge.error(`Firestore (${Fe}): ${n}`,...e)}}function dn(n,...t){if(ge.logLevel<=z.WARN){const e=t.map(Es);ge.warn(`Firestore (${Fe}): ${n}`,...e)}}function Es(n){if(typeof n=="string")return n;try{return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function F(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,oa(n,r,e)}function oa(n,t,e){let r=`FIRESTORE (${Fe}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw ke(r),new Error(r)}function st(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||oa(t,i,r)}function dt(n,t){return n}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Oe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class de{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class aa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Tu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(gt.UNAUTHENTICATED))}shutdown(){}}class Au{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class wu{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){st(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new de;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new de,t.enqueueRetryable(()=>i(this.currentUser))};const c=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new de)}},0),c()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(st(typeof r.accessToken=="string",31837,{l:r}),new aa(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return st(t===null||typeof t=="string",2055,{h:t}),new gt(t)}}class Iu{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class bu{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Iu(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Zi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Su{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ru(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){st(this.o===void 0,3512);const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const c=o.token!==this.m;return this.m=o.token,D("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Zi(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(st(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Zi(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ru(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class vs{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Ru(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function q(n,t){return n<t?-1:n>t?1:0}function is(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const i=n.charAt(r),o=t.charAt(r);if(i!==o)return Kr(i)===Kr(o)?q(i,o):Kr(i)?1:-1}return q(n.length,t.length)}const Cu=55296,Pu=57343;function Kr(n){const t=n.charCodeAt(0);return t>=Cu&&t<=Pu}function Ve(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
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
 */const to="__name__";class Lt{constructor(t,e,r){e===void 0?e=0:e>t.length&&F(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&F(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Lt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Lt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Lt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return q(t.length,e.length)}static compareSegments(t,e){const r=Lt.isNumericId(t),i=Lt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Lt.extractNumericId(t).compare(Lt.extractNumericId(e)):is(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ys.fromString(t.substring(4,t.length-2))}}class Y extends Lt{construct(t,e,r){return new Y(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new x(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const Vu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Lt{construct(t,e,r){return new _t(t,e,r)}static isValidIdentifier(t){return Vu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===to}static keyField(){return new _t([to])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new x(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let c=!1;for(;i<t.length;){const u=t[i];if(u==="\\"){if(i+1===t.length)throw new x(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else u==="`"?(c=!c,i++):u!=="."||c?(r+=u,i++):(o(),i++)}if(o(),c)throw new x(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new _t(e)}static emptyPath(){return new _t([])}}/**
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
 */class k{constructor(t){this.path=t}static fromPath(t){return new k(Y.fromString(t))}static fromName(t){return new k(Y.fromString(t).popFirst(5))}static empty(){return new k(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new k(new Y(t.slice()))}}/**
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
 */function xu(n,t,e){if(!e)throw new x(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Du(n,t,e,r){if(t===!0&&r===!0)throw new x(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function eo(n){if(!k.isDocumentKey(n))throw new x(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ca(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ts(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":F(12329,{type:typeof n})}function la(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ts(n);throw new x(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function rt(n,t){const e={typeString:n};return t&&(e.value=t),e}function An(n,t){if(!ca(n))throw new x(C.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const c=n[r];if(i&&typeof c!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&c!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new x(C.INVALID_ARGUMENT,e);return!0}/**
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
 */const no=-62135596800,ro=1e6;class J{static now(){return J.fromMillis(Date.now())}static fromDate(t){return J.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*ro);return new J(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<no)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ro}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:J._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(An(t,J._jsonSchema))return new J(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-no;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}J._jsonSchemaVersion="firestore/timestamp/1.0",J._jsonSchema={type:rt("string",J._jsonSchemaVersion),seconds:rt("number"),nanoseconds:rt("number")};/**
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
 */class K{static fromTimestamp(t){return new K(t)}static min(){return new K(new J(0,0))}static max(){return new K(new J(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const pn=-1;function Nu(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=K.fromTimestamp(r===1e9?new J(e+1,0):new J(e,r));return new ee(i,k.empty(),t)}function Ou(n){return new ee(n.readTime,n.key,pn)}class ee{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ee(K.min(),k.empty(),pn)}static max(){return new ee(K.max(),k.empty(),pn)}}function Fu(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=k.comparator(n.documentKey,t.documentKey),e!==0?e:q(n.largestBatchId,t.largestBatchId))}/**
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
 */const ku="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Lu(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==ku)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,r)=>{e(t)})}static reject(t){return new R((e,r)=>{r(t)})}static waitFor(t){return new R((e,r)=>{let i=0,o=0,c=!1;t.forEach(u=>{++i,u.next(()=>{++o,c&&o===i&&e()},h=>r(h))}),c=!0,o===i&&e()})}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next(i=>i?R.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new R((r,i)=>{const o=t.length,c=new Array(o);let u=0;for(let h=0;h<o;h++){const E=h;e(t[E]).next(T=>{c[E]=T,++u,u===o&&r(c)},T=>i(T))}})}static doWhile(t,e){return new R((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function Uu(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ur(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class As{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}As.ce=-1;/**
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
 */const Bu=-1;function hr(n){return n==null}function Yn(n){return n===0&&1/n==-1/0}function ju(n){return typeof n=="number"&&Number.isInteger(n)&&!Yn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const ua="";function $u(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=so(t)),t=zu(n.get(e),t);return so(t)}function zu(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case ua:e+="";break;default:e+=o}}return e}function so(n){return n+ua+""}/**
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
 */function io(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ye(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ha(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Dt{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new Dt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new Dt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Mn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Mn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Mn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Mn(this.root,t,this.comparator,!0)}}class Mn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??ut.RED,this.left=i??ut.EMPTY,this.right=o??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new ut(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ut.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw F(27949);return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ft{constructor(t){this.comparator=t,this.data=new Dt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new oo(this.data.getIterator())}getIteratorFrom(t){return new oo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ft)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ft(this.comparator);return e.data=t,e}}class oo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class xt{constructor(t){this.fields=t,t.sort(_t.comparator)}static empty(){return new xt([])}unionWith(t){let e=new ft(_t.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new xt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ve(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Hu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Bt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Hu("Invalid base64 string: "+o):o}}(t);return new Bt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let c=0;c<i.length;++c)o+=String.fromCharCode(i[c]);return o}(t);return new Bt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Bt.EMPTY_BYTE_STRING=new Bt("");const qu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ne(n){if(st(!!n,39018),typeof n=="string"){let t=0;const e=qu.exec(n);if(st(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:et(n.seconds),nanos:et(n.nanos)}}function et(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function _e(n){return typeof n=="string"?Bt.fromBase64String(n):Bt.fromUint8Array(n)}/**
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
 */const fa="server_timestamp",da="__type__",pa="__previous_value__",ma="__local_write_time__";function ws(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[da])==null?void 0:r.stringValue)===fa}function fr(n){const t=n.mapValue.fields[pa];return ws(t)?fr(t):t}function mn(n){const t=ne(n.mapValue.fields[ma].timestampValue);return new J(t.seconds,t.nanos)}/**
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
 */class Gu{constructor(t,e,r,i,o,c,u,h,E,T,w){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=c,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=E,this.isUsingEmulator=T,this.apiKey=w}}const Zn="(default)";class gn{constructor(t,e){this.projectId=t,this.database=e||Zn}static empty(){return new gn("","")}get isDefaultDatabase(){return this.database===Zn}isEqual(t){return t instanceof gn&&t.projectId===this.projectId&&t.database===this.database}}function Ku(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new x(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gn(n.options.projectId,t)}/**
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
 */const ga="__type__",Qu="__max__",Ln={mapValue:{}},_a="__vector__",tr="value";function re(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ws(n)?4:Ju(n)?9007199254740991:Wu(n)?10:11:F(28295,{value:n})}function jt(n,t){if(n===t)return!0;const e=re(n);if(e!==re(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return mn(n).isEqual(mn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const c=ne(i.timestampValue),u=ne(o.timestampValue);return c.seconds===u.seconds&&c.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return _e(i.bytesValue).isEqual(_e(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return et(i.geoPointValue.latitude)===et(o.geoPointValue.latitude)&&et(i.geoPointValue.longitude)===et(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return et(i.integerValue)===et(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const c=et(i.doubleValue),u=et(o.doubleValue);return c===u?Yn(c)===Yn(u):isNaN(c)&&isNaN(u)}return!1}(n,t);case 9:return Ve(n.arrayValue.values||[],t.arrayValue.values||[],jt);case 10:case 11:return function(i,o){const c=i.mapValue.fields||{},u=o.mapValue.fields||{};if(io(c)!==io(u))return!1;for(const h in c)if(c.hasOwnProperty(h)&&(u[h]===void 0||!jt(c[h],u[h])))return!1;return!0}(n,t);default:return F(52216,{left:n})}}function _n(n,t){return(n.values||[]).find(e=>jt(e,t))!==void 0}function xe(n,t){if(n===t)return 0;const e=re(n),r=re(t);if(e!==r)return q(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,t.booleanValue);case 2:return function(o,c){const u=et(o.integerValue||o.doubleValue),h=et(c.integerValue||c.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return ao(n.timestampValue,t.timestampValue);case 4:return ao(mn(n),mn(t));case 5:return is(n.stringValue,t.stringValue);case 6:return function(o,c){const u=_e(o),h=_e(c);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,c){const u=o.split("/"),h=c.split("/");for(let E=0;E<u.length&&E<h.length;E++){const T=q(u[E],h[E]);if(T!==0)return T}return q(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,c){const u=q(et(o.latitude),et(c.latitude));return u!==0?u:q(et(o.longitude),et(c.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return co(n.arrayValue,t.arrayValue);case 10:return function(o,c){var S,V,N,U;const u=o.fields||{},h=c.fields||{},E=(S=u[tr])==null?void 0:S.arrayValue,T=(V=h[tr])==null?void 0:V.arrayValue,w=q(((N=E==null?void 0:E.values)==null?void 0:N.length)||0,((U=T==null?void 0:T.values)==null?void 0:U.length)||0);return w!==0?w:co(E,T)}(n.mapValue,t.mapValue);case 11:return function(o,c){if(o===Ln.mapValue&&c===Ln.mapValue)return 0;if(o===Ln.mapValue)return 1;if(c===Ln.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),E=c.fields||{},T=Object.keys(E);h.sort(),T.sort();for(let w=0;w<h.length&&w<T.length;++w){const S=is(h[w],T[w]);if(S!==0)return S;const V=xe(u[h[w]],E[T[w]]);if(V!==0)return V}return q(h.length,T.length)}(n.mapValue,t.mapValue);default:throw F(23264,{he:e})}}function ao(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return q(n,t);const e=ne(n),r=ne(t),i=q(e.seconds,r.seconds);return i!==0?i:q(e.nanos,r.nanos)}function co(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=xe(e[i],r[i]);if(o)return o}return q(e.length,r.length)}function De(n){return os(n)}function os(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ne(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return _e(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return k.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=os(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const c of r)o?o=!1:i+=",",i+=`${c}:${os(e.fields[c])}`;return i+"}"}(n.mapValue):F(61005,{value:n})}function Hn(n){switch(re(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=fr(n);return t?16+Hn(t):16;case 5:return 2*n.stringValue.length;case 6:return _e(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+Hn(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return ye(r.fields,(o,c)=>{i+=o.length+Hn(c)}),i}(n.mapValue);default:throw F(13486,{value:n})}}function as(n){return!!n&&"integerValue"in n}function Is(n){return!!n&&"arrayValue"in n}function Qr(n){return!!n&&"mapValue"in n}function Wu(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[ga])==null?void 0:r.stringValue)===_a}function sn(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return ye(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=sn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=sn(n.arrayValue.values[e]);return t}return{...n}}function Ju(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Qu}/**
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
 */class Ct{constructor(t){this.value=t}static empty(){return new Ct({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Qr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=sn(e)}setAll(t){let e=_t.emptyPath(),r={},i=[];t.forEach((c,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=u.popLast()}c?r[u.lastSegment()]=sn(c):i.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Qr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return jt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Qr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){ye(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new Ct(sn(this.value))}}/**
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
 */class St{constructor(t,e,r,i,o,c,u){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=c,this.documentState=u}static newInvalidDocument(t){return new St(t,0,K.min(),K.min(),K.min(),Ct.empty(),0)}static newFoundDocument(t,e,r,i){return new St(t,1,e,K.min(),r,i,0)}static newNoDocument(t,e){return new St(t,2,e,K.min(),K.min(),Ct.empty(),0)}static newUnknownDocument(t,e){return new St(t,3,e,K.min(),K.min(),Ct.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof St&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class er{constructor(t,e){this.position=t,this.inclusive=e}}function lo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],c=n.position[i];if(o.field.isKeyField()?r=k.comparator(k.fromName(c.referenceValue),e.key):r=xe(c,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function uo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!jt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class nr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Xu(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class ya{}class lt extends ya{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Zu(t,e,r):e==="array-contains"?new nh(t,r):e==="in"?new rh(t,r):e==="not-in"?new sh(t,r):e==="array-contains-any"?new ih(t,r):new lt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new th(t,r):new eh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(xe(e,this.value)):e!==null&&re(this.value)===re(e)&&this.matchesComparison(xe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class se extends ya{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new se(t,e)}matches(t){return Ea(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ea(n){return n.op==="and"}function va(n){return Yu(n)&&Ea(n)}function Yu(n){for(const t of n.filters)if(t instanceof se)return!1;return!0}function cs(n){if(n instanceof lt)return n.field.canonicalString()+n.op.toString()+De(n.value);if(va(n))return n.filters.map(t=>cs(t)).join(",");{const t=n.filters.map(e=>cs(e)).join(",");return`${n.op}(${t})`}}function Ta(n,t){return n instanceof lt?function(r,i){return i instanceof lt&&r.op===i.op&&r.field.isEqual(i.field)&&jt(r.value,i.value)}(n,t):n instanceof se?function(r,i){return i instanceof se&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,c,u)=>o&&Ta(c,i.filters[u]),!0):!1}(n,t):void F(19439)}function Aa(n){return n instanceof lt?function(e){return`${e.field.canonicalString()} ${e.op} ${De(e.value)}`}(n):n instanceof se?function(e){return e.op.toString()+" {"+e.getFilters().map(Aa).join(" ,")+"}"}(n):"Filter"}class Zu extends lt{constructor(t,e,r){super(t,e,r),this.key=k.fromName(r.referenceValue)}matches(t){const e=k.comparator(t.key,this.key);return this.matchesComparison(e)}}class th extends lt{constructor(t,e){super(t,"in",e),this.keys=wa("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class eh extends lt{constructor(t,e){super(t,"not-in",e),this.keys=wa("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function wa(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>k.fromName(r.referenceValue))}class nh extends lt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Is(e)&&_n(e.arrayValue,this.value)}}class rh extends lt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&_n(this.value.arrayValue,e)}}class sh extends lt{constructor(t,e){super(t,"not-in",e)}matches(t){if(_n(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!_n(this.value.arrayValue,e)}}class ih extends lt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Is(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>_n(this.value.arrayValue,r))}}/**
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
 */class oh{constructor(t,e=null,r=[],i=[],o=null,c=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=c,this.endAt=u,this.Te=null}}function ho(n,t=null,e=[],r=[],i=null,o=null,c=null){return new oh(n,t,e,r,i,o,c)}function bs(n){const t=dt(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>cs(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),hr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>De(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>De(r)).join(",")),t.Te=e}return t.Te}function Ss(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Xu(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Ta(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!uo(n.startAt,t.startAt)&&uo(n.endAt,t.endAt)}/**
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
 */class dr{constructor(t,e=null,r=[],i=[],o=null,c="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=c,this.startAt=u,this.endAt=h,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function ah(n,t,e,r,i,o,c,u){return new dr(n,t,e,r,i,o,c,u)}function ch(n){return new dr(n)}function fo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function lh(n){return k.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function uh(n){return n.collectionGroup!==null}function on(n){const t=dt(n);if(t.Ee===null){t.Ee=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ee.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(c){let u=new ft(_t.comparator);return c.filters.forEach(h=>{h.getFlattenedFilters().forEach(E=>{E.isInequality()&&(u=u.add(E.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ee.push(new nr(o,r))}),e.has(_t.keyField().canonicalString())||t.Ee.push(new nr(_t.keyField(),r))}return t.Ee}function pe(n){const t=dt(n);return t.Ie||(t.Ie=hh(t,on(n))),t.Ie}function hh(n,t){if(n.limitType==="F")return ho(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new nr(i.field,o)});const e=n.endAt?new er(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new er(n.startAt.position,n.startAt.inclusive):null;return ho(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ls(n,t,e){return new dr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ia(n,t){return Ss(pe(n),pe(t))&&n.limitType===t.limitType}function ba(n){return`${bs(pe(n))}|lt:${n.limitType}`}function Ze(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>Aa(i)).join(", ")}]`),hr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>De(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>De(i)).join(",")),`Target(${r})`}(pe(n))}; limitType=${n.limitType})`}function Rs(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):k.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of on(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(c,u,h){const E=lo(c,u,h);return c.inclusive?E<=0:E<0}(r.startAt,on(r),i)||r.endAt&&!function(c,u,h){const E=lo(c,u,h);return c.inclusive?E>=0:E>0}(r.endAt,on(r),i))}(n,t)}function fh(n){return(t,e)=>{let r=!1;for(const i of on(n)){const o=dh(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function dh(n,t,e){const r=n.field.isKeyField()?k.comparator(t.key,e.key):function(o,c,u){const h=c.data.field(o),E=u.data.field(o);return h!==null&&E!==null?xe(h,E):F(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F(19790,{direction:n.dir})}}/**
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
 */class Ee{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ye(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return ha(this.inner)}size(){return this.innerSize}}/**
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
 */const ph=new Dt(k.comparator);function us(){return ph}const Sa=new Dt(k.comparator);function Un(...n){let t=Sa;for(const e of n)t=t.insert(e.key,e);return t}function mh(n){let t=Sa;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function fe(){return an()}function Ra(){return an()}function an(){return new Ee(n=>n.toString(),(n,t)=>n.isEqual(t))}const gh=new ft(k.comparator);function Rt(...n){let t=gh;for(const e of n)t=t.add(e);return t}const _h=new ft(q);function yh(){return _h}/**
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
 */function Cs(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yn(t)?"-0":t}}function Ca(n){return{integerValue:""+n}}function Eh(n,t){return ju(t)?Ca(t):Cs(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class pr{constructor(){this._=void 0}}function vh(n,t,e){return n instanceof rr?function(i,o){const c={fields:{[da]:{stringValue:fa},[ma]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ws(o)&&(o=fr(o)),o&&(c.fields[pa]=o),{mapValue:c}}(e,t):n instanceof yn?Pa(n,t):n instanceof En?Va(n,t):function(i,o){const c=Ah(i,o),u=po(c)+po(i.Ae);return as(c)&&as(i.Ae)?Ca(u):Cs(i.serializer,u)}(n,t)}function Th(n,t,e){return n instanceof yn?Pa(n,t):n instanceof En?Va(n,t):e}function Ah(n,t){return n instanceof sr?function(r){return as(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class rr extends pr{}class yn extends pr{constructor(t){super(),this.elements=t}}function Pa(n,t){const e=xa(t);for(const r of n.elements)e.some(i=>jt(i,r))||e.push(r);return{arrayValue:{values:e}}}class En extends pr{constructor(t){super(),this.elements=t}}function Va(n,t){let e=xa(t);for(const r of n.elements)e=e.filter(i=>!jt(i,r));return{arrayValue:{values:e}}}class sr extends pr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function po(n){return et(n.integerValue||n.doubleValue)}function xa(n){return Is(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function wh(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof yn&&i instanceof yn||r instanceof En&&i instanceof En?Ve(r.elements,i.elements,jt):r instanceof sr&&i instanceof sr?jt(r.Ae,i.Ae):r instanceof rr&&i instanceof rr}(n.transform,t.transform)}class Vt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Vt}static exists(t){return new Vt(void 0,t)}static updateTime(t){return new Vt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function qn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class mr{}function Da(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ps(n.key,Vt.none()):new wn(n.key,n.data,Vt.none());{const e=n.data,r=Ct.empty();let i=new ft(_t.comparator);for(let o of t.fields)if(!i.has(o)){let c=e.field(o);c===null&&o.length>1&&(o=o.popLast(),c=e.field(o)),c===null?r.delete(o):r.set(o,c),i=i.add(o)}return new ve(n.key,r,new xt(i.toArray()),Vt.none())}}function Ih(n,t,e){n instanceof wn?function(i,o,c){const u=i.value.clone(),h=go(i.fieldTransforms,o,c.transformResults);u.setAll(h),o.convertToFoundDocument(c.version,u).setHasCommittedMutations()}(n,t,e):n instanceof ve?function(i,o,c){if(!qn(i.precondition,o))return void o.convertToUnknownDocument(c.version);const u=go(i.fieldTransforms,o,c.transformResults),h=o.data;h.setAll(Na(i)),h.setAll(u),o.convertToFoundDocument(c.version,h).setHasCommittedMutations()}(n,t,e):function(i,o,c){o.convertToNoDocument(c.version).setHasCommittedMutations()}(0,t,e)}function cn(n,t,e,r){return n instanceof wn?function(o,c,u,h){if(!qn(o.precondition,c))return u;const E=o.value.clone(),T=_o(o.fieldTransforms,h,c);return E.setAll(T),c.convertToFoundDocument(c.version,E).setHasLocalMutations(),null}(n,t,e,r):n instanceof ve?function(o,c,u,h){if(!qn(o.precondition,c))return u;const E=_o(o.fieldTransforms,h,c),T=c.data;return T.setAll(Na(o)),T.setAll(E),c.convertToFoundDocument(c.version,T).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,r):function(o,c,u){return qn(o.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):u}(n,t,e)}function mo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ve(r,i,(o,c)=>wh(o,c))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class wn extends mr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ve extends mr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Na(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function go(n,t,e){const r=new Map;st(n.length===e.length,32656,{Ve:e.length,de:n.length});for(let i=0;i<e.length;i++){const o=n[i],c=o.transform,u=t.data.field(o.field);r.set(o.field,Th(c,u,e[i]))}return r}function _o(n,t,e){const r=new Map;for(const i of n){const o=i.transform,c=e.data.field(i.field);r.set(i.field,vh(o,c,t))}return r}class Ps extends mr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Oa extends mr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class bh{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Ih(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=cn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=cn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ra();return this.mutations.forEach(i=>{const o=t.get(i.key),c=o.overlayedDocument;let u=this.applyToLocalView(c,o.mutatedFields);u=e.has(i.key)?null:u;const h=Da(c,u);h!==null&&r.set(i.key,h),c.isValidDocument()||c.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Rt())}isEqual(t){return this.batchId===t.batchId&&Ve(this.mutations,t.mutations,(e,r)=>mo(e,r))&&Ve(this.baseMutations,t.baseMutations,(e,r)=>mo(e,r))}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Sh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */var nt,$;function Rh(n){switch(n){case C.OK:return F(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return F(15467,{code:n})}}function Ch(n){if(n===void 0)return ke("GRPC error has no .code"),C.UNKNOWN;switch(n){case nt.OK:return C.OK;case nt.CANCELLED:return C.CANCELLED;case nt.UNKNOWN:return C.UNKNOWN;case nt.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case nt.INTERNAL:return C.INTERNAL;case nt.UNAVAILABLE:return C.UNAVAILABLE;case nt.UNAUTHENTICATED:return C.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case nt.NOT_FOUND:return C.NOT_FOUND;case nt.ALREADY_EXISTS:return C.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return C.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case nt.ABORTED:return C.ABORTED;case nt.OUT_OF_RANGE:return C.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return C.UNIMPLEMENTED;case nt.DATA_LOSS:return C.DATA_LOSS;default:return F(39323,{code:n})}}($=nt||(nt={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
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
 */new ys([4294967295,4294967295],0);class Ph{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function hs(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Vh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function xh(n,t){return hs(n,t.toTimestamp())}function ln(n){return st(!!n,49232),K.fromTimestamp(function(e){const r=ne(e);return new J(r.seconds,r.nanos)}(n))}function Fa(n,t){return fs(n,t).canonicalString()}function fs(n,t){const e=function(i){return new Y(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function ka(n){const t=Y.fromString(n);return st(Ua(t),10190,{key:t.toString()}),t}function ir(n,t){return Fa(n.databaseId,t.path)}function yo(n,t){const e=ka(t);if(e.get(1)!==n.databaseId.projectId)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new k(Ma(e))}function Dh(n){const t=ka(n);return t.length===4?Y.emptyPath():Ma(t)}function Ma(n){return st(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Eo(n,t,e){return{name:ir(n,t),fields:e.value.mapValue.fields}}function Nh(n,t){return"found"in t?function(r,i){st(!!i.found,43571),i.found.name,i.found.updateTime;const o=yo(r,i.found.name),c=ln(i.found.updateTime),u=i.found.createTime?ln(i.found.createTime):K.min(),h=new Ct({mapValue:{fields:i.found.fields}});return St.newFoundDocument(o,c,u,h)}(n,t):"missing"in t?function(r,i){st(!!i.missing,3894),st(!!i.readTime,22933);const o=yo(r,i.missing),c=ln(i.readTime);return St.newNoDocument(o,c)}(n,t):F(7234,{result:t})}function Oh(n,t){let e;if(t instanceof wn)e={update:Eo(n,t.key,t.value)};else if(t instanceof Ps)e={delete:ir(n,t.key)};else if(t instanceof ve)e={update:Eo(n,t.key,t.data),updateMask:kh(t.fieldMask)};else{if(!(t instanceof Oa))return F(16599,{dt:t.type});e={verify:ir(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,c){const u=c.transform;if(u instanceof rr)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof yn)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof En)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof sr)return{fieldPath:c.field.canonicalString(),increment:u.Ae};throw F(20930,{transform:c.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:xh(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:F(27497)}(n,t.precondition)),e}function Fh(n){let t=Dh(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){st(r===1,65062);const T=e.from[0];T.allDescendants?i=T.collectionId:t=t.child(T.collectionId)}let o=[];e.where&&(o=function(w){const S=La(w);return S instanceof se&&va(S)?S.getFilters():[S]}(e.where));let c=[];e.orderBy&&(c=function(w){return w.map(S=>function(N){return new nr(Re(N.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(S))}(e.orderBy));let u=null;e.limit&&(u=function(w){let S;return S=typeof w=="object"?w.value:w,hr(S)?null:S}(e.limit));let h=null;e.startAt&&(h=function(w){const S=!!w.before,V=w.values||[];return new er(V,S)}(e.startAt));let E=null;return e.endAt&&(E=function(w){const S=!w.before,V=w.values||[];return new er(V,S)}(e.endAt)),ah(t,i,c,o,u,"F",h,E)}function La(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Re(e.unaryFilter.field);return lt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Re(e.unaryFilter.field);return lt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Re(e.unaryFilter.field);return lt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Re(e.unaryFilter.field);return lt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}}(n):n.fieldFilter!==void 0?function(e){return lt.create(Re(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return se.create(e.compositeFilter.filters.map(r=>La(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F(1026)}}(e.compositeFilter.op))}(n):F(30097,{filter:n})}function Re(n){return _t.fromServerFormat(n.fieldPath)}function kh(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ua(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Ba(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class Mh{constructor(t){this.yt=t}}function Lh(n){const t=Fh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ls(t,t.limit,"L"):t}/**
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
 */class Uh{constructor(){this.bn=new Bh}addToCollectionParentIndex(t,e){return this.bn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.bn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(ee.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(ee.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Bh{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new ft(Y.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ft(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const vo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ja=41943040;class At{static withCacheSize(t){return new At(t,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(ja,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);/**
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
 */class Ne{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new Ne(0)}static ar(){return new Ne(-1)}}/**
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
 */const To="LruGarbageCollector",jh=1048576;function Ao([n,t],[e,r]){const i=q(n,e);return i===0?q(t,r):i}class $h{constructor(t){this.Pr=t,this.buffer=new ft(Ao),this.Tr=0}Er(){return++this.Tr}Ir(t){const e=[t,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Ao(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class zh{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){D(To,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ur(e)?D(To,"Ignoring IndexedDB error during garbage collection: ",e):await Lu(e)}await this.Ar(3e5)})}}class Hh{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return R.resolve(As.ce);const r=new $h(e);return this.Vr.forEachTarget(t,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(t,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(vo)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),vo):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let r,i,o,c,u,h,E;const T=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),i=this.params.maximumSequenceNumbersToCollect):i=w,c=Date.now(),this.nthSequenceNumber(t,i))).next(w=>(r=w,u=Date.now(),this.removeTargets(t,r,e))).next(w=>(o=w,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(w=>(E=Date.now(),Se()<=z.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-T}ms
	Determined least recently used ${i} in `+(u-c)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${w} documents in `+(E-h)+`ms
Total Duration: ${E-T}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:w})))}}function qh(n,t){return new Hh(n,t)}/**
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
 */class Gh{constructor(){this.changes=new Ee(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,St.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class Kh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Qh{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&cn(r.mutation,i,xt.empty(),J.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,Rt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=Rt()){const i=fe();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let c=Un();return o.forEach((u,h)=>{c=c.insert(u,h.overlayedDocument)}),c}))}getOverlayedDocuments(t,e){const r=fe();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,Rt()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((c,u)=>{e.set(c,u)})})}computeViews(t,e,r,i){let o=us();const c=an(),u=function(){return an()}();return e.forEach((h,E)=>{const T=r.get(E.key);i.has(E.key)&&(T===void 0||T.mutation instanceof ve)?o=o.insert(E.key,E):T!==void 0?(c.set(E.key,T.mutation.getFieldMask()),cn(T.mutation,E,T.mutation.getFieldMask(),J.now())):c.set(E.key,xt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((E,T)=>c.set(E,T)),e.forEach((E,T)=>u.set(E,new Kh(T,c.get(E)??null))),u))}recalculateAndSaveOverlays(t,e){const r=an();let i=new Dt((c,u)=>c-u),o=Rt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(c=>{for(const u of c)u.keys().forEach(h=>{const E=e.get(h);if(E===null)return;let T=r.get(h)||xt.empty();T=u.applyToLocalView(E,T),r.set(h,T);const w=(i.get(u.batchId)||Rt()).add(h);i=i.insert(u.batchId,w)})}).next(()=>{const c=[],u=i.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),E=h.key,T=h.value,w=Ra();T.forEach(S=>{if(!o.has(S)){const V=Da(e.get(S),r.get(S));V!==null&&w.set(S,V),o=o.add(S)}}),c.push(this.documentOverlayCache.saveOverlays(t,E,w))}return R.waitFor(c)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return lh(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):uh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const c=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):R.resolve(fe());let u=pn,h=o;return c.next(E=>R.forEach(E,(T,w)=>(u<w.largestBatchId&&(u=w.largestBatchId),o.get(T)?R.resolve():this.remoteDocumentCache.getEntry(t,T).next(S=>{h=h.insert(T,S)}))).next(()=>this.populateOverlays(t,E,o)).next(()=>this.computeViews(t,h,E,Rt())).next(T=>({batchId:u,changes:mh(T)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new k(e)).next(r=>{let i=Un();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let c=Un();return this.indexManager.getCollectionParents(t,o).next(u=>R.forEach(u,h=>{const E=function(w,S){return new dr(S,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,E,r,i).next(T=>{T.forEach((w,S)=>{c=c.insert(w,S)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(c=>(o=c,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(c=>{o.forEach((h,E)=>{const T=E.getKey();c.get(T)===null&&(c=c.insert(T,St.newInvalidDocument(T)))});let u=Un();return c.forEach((h,E)=>{const T=o.get(h);T!==void 0&&cn(T.mutation,E,xt.empty(),J.now()),Rs(e,E)&&(u=u.insert(h,E))}),u})}}/**
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
 */class Wh{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return R.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:ln(i.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(i){return{name:i.name,query:Lh(i.bundledQuery),readTime:ln(i.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Jh{constructor(){this.overlays=new Dt(k.comparator),this.Lr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=fe();return R.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.St(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Lr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const i=fe(),o=e.length+1,c=new k(e.child("")),u=this.overlays.getIteratorFrom(c);for(;u.hasNext();){const h=u.getNext().value,E=h.getKey();if(!e.isPrefixOf(E.path))break;E.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return R.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new Dt((E,T)=>E-T);const c=this.overlays.getIterator();for(;c.hasNext();){const E=c.getNext().value;if(E.getKey().getCollectionGroup()===e&&E.largestBatchId>r){let T=o.get(E.largestBatchId);T===null&&(T=fe(),o=o.insert(E.largestBatchId,T)),T.set(E.getKey(),E)}}const u=fe(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((E,T)=>u.set(E,T)),!(u.size()>=i)););return R.resolve(u)}St(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const c=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new Sh(e,r));let o=this.Lr.get(e);o===void 0&&(o=Rt(),this.Lr.set(e,o)),this.Lr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Xh{constructor(){this.sessionToken=Bt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
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
 */class Vs{constructor(){this.kr=new ft(ct.qr),this.Kr=new ft(ct.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const r=new ct(t,e);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Wr(new ct(t,e))}Qr(t,e){t.forEach(r=>this.removeReference(r,e))}Gr(t){const e=new k(new Y([])),r=new ct(e,t),i=new ct(e,t+1),o=[];return this.Kr.forEachInRange([r,i],c=>{this.Wr(c),o.push(c.key)}),o}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.Kr=this.Kr.delete(t)}jr(t){const e=new k(new Y([])),r=new ct(e,t),i=new ct(e,t+1);let o=Rt();return this.Kr.forEachInRange([r,i],c=>{o=o.add(c.key)}),o}containsKey(t){const e=new ct(t,0),r=this.kr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ct{constructor(t,e){this.key=t,this.Jr=e}static qr(t,e){return k.comparator(t.key,e.key)||q(t.Jr,e.Jr)}static Ur(t,e){return q(t.Jr,e.Jr)||k.comparator(t.key,e.key)}}/**
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
 */class Yh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Hr=new ft(ct.qr)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new bh(o,e,r,i);this.mutationQueue.push(c);for(const u of i)this.Hr=this.Hr.add(new ct(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return R.resolve(c)}lookupMutationBatch(t,e){return R.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Xr(r),o=i<0?0:i;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?Bu:this.Yn-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ct(e,0),i=new ct(e,Number.POSITIVE_INFINITY),o=[];return this.Hr.forEachInRange([r,i],c=>{const u=this.Zr(c.Jr);o.push(u)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ft(q);return e.forEach(i=>{const o=new ct(i,0),c=new ct(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([o,c],u=>{r=r.add(u.Jr)})}),R.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;k.isDocumentKey(o)||(o=o.child(""));const c=new ct(new k(o),0);let u=new ft(q);return this.Hr.forEachWhile(h=>{const E=h.key.path;return!!r.isPrefixOf(E)&&(E.length===i&&(u=u.add(h.Jr)),!0)},c),R.resolve(this.Yr(u))}Yr(t){const e=[];return t.forEach(r=>{const i=this.Zr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){st(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return R.forEach(e.mutations,i=>{const o=new ct(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Hr=r})}nr(t){}containsKey(t,e){const r=new ct(e,0),i=this.Hr.firstAfterOrEqual(r);return R.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Zh{constructor(t){this.ti=t,this.docs=function(){return new Dt(k.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,c=this.ti(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:c}),this.size+=c-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():St.newInvalidDocument(e))}getEntries(t,e){let r=us();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():St.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=us();const c=e.path,u=new k(c.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:E,value:{document:T}}=h.getNext();if(!c.isPrefixOf(E.path))break;E.path.length>c.length+1||Fu(Ou(T),r)<=0||(i.has(T.key)||Rs(e,T))&&(o=o.insert(T.key,T.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,r,i){F(9500)}ni(t,e){return R.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new tf(this)}getSize(t){return R.resolve(this.size)}}class tf extends Gh{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.Mr.addEntry(t,i)):this.Mr.removeEntry(r)}),R.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
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
 */class ef{constructor(t){this.persistence=t,this.ri=new Ee(e=>bs(e),Ss),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.ii=0,this.si=new Vs,this.targetCount=0,this.oi=Ne._r()}forEachTarget(t,e){return this.ri.forEach((r,i)=>e(i)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ii&&(this.ii=e),R.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new Ne(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.lr(e),R.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.ri.forEach((c,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.ri.delete(c),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),i++)}),R.waitFor(o).next(()=>i)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.ri.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this.si.$r(e,r),R.resolve()}removeMatchingKeys(t,e,r){this.si.Qr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(c=>{o.push(i.markPotentiallyOrphaned(t,c))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this.si.jr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this.si.containsKey(e))}}/**
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
 */class $a{constructor(t,e){this._i={},this.overlays={},this.ai=new As(0),this.ui=!1,this.ui=!0,this.ci=new Xh,this.referenceDelegate=t(this),this.li=new ef(this),this.indexManager=new Uh,this.remoteDocumentCache=function(i){return new Zh(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Mh(e),this.Pi=new Wh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Jh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this._i[t.toKey()];return r||(r=new Yh(e,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,r){D("MemoryPersistence","Starting transaction:",t);const i=new nf(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(o=>this.referenceDelegate.Ei(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ii(t,e){return R.or(Object.values(this._i).map(r=>()=>r.containsKey(t,e)))}}class nf extends Mu{constructor(t){super(),this.currentSequenceNumber=t}}class xs{constructor(t){this.persistence=t,this.Ri=new Vs,this.Ai=null}static Vi(t){return new xs(t)}get di(){if(this.Ai)return this.Ai;throw F(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.di.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.di.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),R.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ei(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.di,r=>{const i=k.fromPath(r);return this.mi(t,i).next(o=>{o||e.removeEntry(i,K.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return R.or([()=>R.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ii(t,e)])}}class or{constructor(t,e){this.persistence=t,this.fi=new Ee(r=>$u(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=qh(this,e)}static Vi(t,e){return new or(t,e)}Ti(){}Ei(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}pr(t){let e=0;return this.mr(t,r=>{e++}).next(()=>e)}mr(t,e){return R.forEach(this.fi,(r,i)=>this.wr(t,r,i).next(o=>o?R.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ni(t,c=>this.wr(t,c,e).next(u=>{u||(r++,o.removeEntry(c,K.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),R.resolve()}removeReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),R.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Hn(t.data.value)),e}wr(t,e,r){return R.or([()=>this.persistence.Ii(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.fi.get(e);return R.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Ds{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Ts=r,this.Es=i}static Is(t,e){let r=Rt(),i=Rt();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ds(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class rf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class sf{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Zc()?8:Uu(Xc())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.gs(t,e).next(c=>{o.result=c}).next(()=>{if(!o.result)return this.ps(t,e,i,r).next(c=>{o.result=c})}).next(()=>{if(o.result)return;const c=new rf;return this.ys(t,e,c).next(u=>{if(o.result=u,this.As)return this.ws(t,e,c,u.size)})}).next(()=>o.result)}ws(t,e,r,i){return r.documentReadCount<this.Vs?(Se()<=z.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Ze(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),R.resolve()):(Se()<=z.DEBUG&&D("QueryEngine","Query:",Ze(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Se()<=z.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Ze(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,pe(e))):R.resolve())}gs(t,e){if(fo(e))return R.resolve(null);let r=pe(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=ls(e,null,"F"),r=pe(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const c=Rt(...o);return this.fs.getDocuments(t,c).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const E=this.Ss(e,u);return this.bs(e,E,c,h.readTime)?this.gs(t,ls(e,null,"F")):this.Ds(t,E,e,h)}))})))}ps(t,e,r,i){return fo(e)||i.isEqual(K.min())?R.resolve(null):this.fs.getDocuments(t,r).next(o=>{const c=this.Ss(e,o);return this.bs(e,c,r,i)?R.resolve(null):(Se()<=z.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ze(e)),this.Ds(t,c,e,Nu(i,pn)).next(u=>u))})}Ss(t,e){let r=new ft(fh(t));return e.forEach((i,o)=>{Rs(t,o)&&(r=r.add(o))}),r}bs(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ys(t,e,r){return Se()<=z.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Ze(e)),this.fs.getDocumentsMatchingQuery(t,e,ee.min(),r)}Ds(t,e,r,i){return this.fs.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(c=>{o=o.insert(c.key,c)}),o))}}/**
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
 */const of="LocalStore";class af{constructor(t,e,r,i){this.persistence=t,this.Cs=e,this.serializer=i,this.vs=new Dt(q),this.Fs=new Ee(o=>bs(o),Ss),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Qh(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function cf(n,t,e,r){return new af(n,t,e,r)}async function za(n,t){const e=dt(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.Os(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const c=[],u=[];let h=Rt();for(const E of i){c.push(E.batchId);for(const T of E.mutations)h=h.add(T.key)}for(const E of o){u.push(E.batchId);for(const T of E.mutations)h=h.add(T.key)}return e.localDocuments.getDocuments(r,h).next(E=>({Ns:E,removedBatchIds:c,addedBatchIds:u}))})})}class wo{constructor(){this.activeTargetIds=yh()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class lf{constructor(){this.vo=new wo,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,r){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new wo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class uf{Mo(t){}shutdown(){}}/**
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
 */const Io="ConnectivityMonitor";class bo{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){D(Io,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){D(Io,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Bn=null;function ds(){return Bn===null?Bn=function(){return 268435456+Math.round(2147483648*Math.random())}():Bn++,"0x"+Bn.toString(16)}/**
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
 */const Wr="RestConnection",hf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class ff{get qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Zn?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(t,e,r,i,o){const c=ds(),u=this.Qo(t,e.toUriEncodedString());D(Wr,`Sending RPC '${t}' ${c}:`,u,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(h,i,o);const{host:E}=new URL(u),T=Qo(E);return this.zo(t,u,h,r,T).then(w=>(D(Wr,`Received RPC '${t}' ${c}: `,w),w),w=>{throw dn(Wr,`RPC '${t}' ${c} failed with error: `,w,"url: ",u,"request:",r),w})}jo(t,e,r,i,o,c){return this.Wo(t,e,r,i,o)}Go(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fe}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}Qo(t,e){const r=hf[t];let i=`${this.Ko}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class df{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
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
 */const mt="WebChannelConnection",tn=(n,t,e)=>{n.listen(t,r=>{try{e(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Pe extends ff{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!Pe.c_){const t=sa();tn(t,ra.STAT_EVENT,e=>{e.stat===ss.PROXY?D(mt,"STAT_EVENT: detected buffering proxy"):e.stat===ss.NOPROXY&&D(mt,"STAT_EVENT: detected no buffering proxy")}),Pe.c_=!0}}zo(t,e,r,i,o){const c=ds();return new Promise((u,h)=>{const E=new ea;E.setWithCredentials(!0),E.listenOnce(na.COMPLETE,()=>{try{switch(E.getLastErrorCode()){case zn.NO_ERROR:const w=E.getResponseJson();D(mt,`XHR for RPC '${t}' ${c} received:`,JSON.stringify(w)),u(w);break;case zn.TIMEOUT:D(mt,`RPC '${t}' ${c} timed out`),h(new x(C.DEADLINE_EXCEEDED,"Request time out"));break;case zn.HTTP_ERROR:const S=E.getStatus();if(D(mt,`RPC '${t}' ${c} failed with status:`,S,"response text:",E.getResponseText()),S>0){let V=E.getResponseJson();Array.isArray(V)&&(V=V[0]);const N=V==null?void 0:V.error;if(N&&N.status&&N.message){const U=function(X){const Z=X.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(Z)>=0?Z:C.UNKNOWN}(N.status);h(new x(U,N.message))}else h(new x(C.UNKNOWN,"Server responded with status "+E.getStatus()))}else h(new x(C.UNAVAILABLE,"Connection failed."));break;default:F(9055,{l_:t,streamId:c,h_:E.getLastErrorCode(),P_:E.getLastError()})}}finally{D(mt,`RPC '${t}' ${c} completed.`)}});const T=JSON.stringify(i);D(mt,`RPC '${t}' ${c} sending request:`,i),E.send(e,"POST",T,r,15)})}T_(t,e,r){const i=ds(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],c=this.createWebChannelTransport(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Go(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const E=o.join("");D(mt,`Creating RPC '${t}' stream ${i}: ${E}`,u);const T=c.createWebChannel(E,u);this.E_(T);let w=!1,S=!1;const V=new df({Jo:N=>{S?D(mt,`Not sending because RPC '${t}' stream ${i} is closed:`,N):(w||(D(mt,`Opening RPC '${t}' stream ${i} transport.`),T.open(),w=!0),D(mt,`RPC '${t}' stream ${i} sending:`,N),T.send(N))},Ho:()=>T.close()});return tn(T,en.EventType.OPEN,()=>{S||(D(mt,`RPC '${t}' stream ${i} transport opened.`),V.i_())}),tn(T,en.EventType.CLOSE,()=>{S||(S=!0,D(mt,`RPC '${t}' stream ${i} transport closed`),V.o_(),this.I_(T))}),tn(T,en.EventType.ERROR,N=>{S||(S=!0,dn(mt,`RPC '${t}' stream ${i} transport errored. Name:`,N.name,"Message:",N.message),V.o_(new x(C.UNAVAILABLE,"The operation could not be completed")))}),tn(T,en.EventType.MESSAGE,N=>{var U;if(!S){const L=N.data[0];st(!!L,16349);const X=L,Z=(X==null?void 0:X.error)||((U=X[0])==null?void 0:U.error);if(Z){D(mt,`RPC '${t}' stream ${i} received error:`,Z);const B=Z.status;let it=function(_){const m=nt[_];if(m!==void 0)return Ch(m)}(B),Q=Z.message;B==="NOT_FOUND"&&Q.includes("database")&&Q.includes("does not exist")&&Q.includes(this.databaseId.database)&&dn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),it===void 0&&(it=C.INTERNAL,Q="Unknown error status: "+B+" with message "+Z.message),S=!0,V.o_(new x(it,Q)),T.close()}else D(mt,`RPC '${t}' stream ${i} received:`,L),V.__(L)}}),Pe.u_(),setTimeout(()=>{V.s_()},0),V}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}E_(t){this.a_.push(t)}I_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,r){super.Go(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return ia()}}/**
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
 */function pf(n){return new Pe(n)}function Jr(){return typeof document<"u"?document:null}/**
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
 */function gr(n){return new Ph(n,!0)}/**
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
 */Pe.c_=!1;class Ha{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Ci=t,this.timerId=e,this.R_=r,this.A_=i,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */class mf{}class gf extends mf{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Wo(t,fs(e,r),i,o,c)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(C.UNKNOWN,o.toString())})}jo(t,e,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,u])=>this.connection.jo(t,fs(e,r),i,c,u,o)).catch(c=>{throw c.name==="FirebaseError"?(c.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new x(C.UNKNOWN,c.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function _f(n,t,e,r){return new gf(n,t,e,r)}class yf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ke(e),this.aa=!1):D("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ns="RemoteStore";class Ef{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo(c=>{r.enqueueAndForget(async()=>{Fs(this)&&(D(Ns,"Restarting streams for network reachability change."),await async function(h){const E=dt(h);E.Ia.add(4),await _r(E),E.Va.set("Unknown"),E.Ia.delete(4),await Os(E)}(this))})}),this.Va=new yf(r,i)}}async function Os(n){if(Fs(n))for(const t of n.Ra)await t(!0)}async function _r(n){for(const t of n.Ra)await t(!1)}function Fs(n){return dt(n).Ia.size===0}async function So(n,t){const e=dt(n);e.asyncQueue.verifyOperationInProgress(),D(Ns,"RemoteStore received new credentials");const r=Fs(e);e.Ia.add(3),await _r(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await Os(e)}async function vf(n,t){const e=dt(n);t?(e.Ia.delete(2),await Os(e)):t||(e.Ia.add(2),await _r(e),e.Va.set("Unknown"))}/**
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
 */class ks{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new de,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const c=Date.now()+r,u=new ks(t,e,c,i,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tf(n,t){if(ke("AsyncQueue",`${t}: ${n}`),ur(n))return new x(C.UNAVAILABLE,`${t}: ${n}`);throw n}class Af{constructor(){this.queries=Ro(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const i=dt(e),o=i.queries;i.queries=Ro(),o.forEach((c,u)=>{for(const h of u.Sa)h.onError(r)})})(this,new x(C.ABORTED,"Firestore shutting down"))}}function Ro(){return new Ee(n=>ba(n),Ia)}function wf(n){n.Ca.forEach(t=>{t.next()})}var Co,Po;(Po=Co||(Co={})).Ma="default",Po.Cache="cache";const If="SyncEngine";class bf{constructor(t,e,r,i,o,c){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new Ee(u=>ba(u),Ia),this.Eu=new Map,this.Iu=new Set,this.Ru=new Dt(k.comparator),this.Au=new Map,this.Vu=new Vs,this.du={},this.mu=new Map,this.fu=Ne.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}function Vo(n,t,e){const r=dt(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Tu.forEach((o,c)=>{const u=c.view.va(t);u.snapshot&&i.push(u.snapshot)}),function(c,u){const h=dt(c);h.onlineState=u;let E=!1;h.queries.forEach((T,w)=>{for(const S of w.Sa)S.va(u)&&(E=!0)}),E&&wf(h)}(r.eventManager,t),i.length&&r.Pu.H_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Sf(n,t,e){const r=dt(n),i=[],o=[],c=[];r.Tu.isEmpty()||(r.Tu.forEach((u,h)=>{c.push(r.pu(h,t,e).then(E=>{var T;if((E||e)&&r.isPrimaryClient){const w=E?!E.fromCache:(T=e==null?void 0:e.targetChanges.get(h.targetId))==null?void 0:T.current;r.sharedClientState.updateQueryState(h.targetId,w?"current":"not-current")}if(E){i.push(E);const w=Ds.Is(h.targetId,E);o.push(w)}}))}),await Promise.all(c),r.Pu.H_(i),await async function(h,E){const T=dt(h);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>R.forEach(E,S=>R.forEach(S.Ts,V=>T.persistence.referenceDelegate.addReference(w,S.targetId,V)).next(()=>R.forEach(S.Es,V=>T.persistence.referenceDelegate.removeReference(w,S.targetId,V)))))}catch(w){if(!ur(w))throw w;D(of,"Failed to update sequence numbers: "+w)}for(const w of E){const S=w.targetId;if(!w.fromCache){const V=T.vs.get(S),N=V.snapshotVersion,U=V.withLastLimboFreeSnapshotVersion(N);T.vs=T.vs.insert(S,U)}}}(r.localStore,o))}async function Rf(n,t){const e=dt(n);if(!e.currentUser.isEqual(t)){D(If,"User change. New user:",t.toKey());const r=await za(e.localStore,t);e.currentUser=t,function(o,c){o.mu.forEach(u=>{u.forEach(h=>{h.reject(new x(C.CANCELLED,c))})}),o.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Sf(e,r.Ns)}}class ar{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=gr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return cf(this.persistence,new sf,t.initialUser,this.serializer)}Cu(t){return new $a(xs.Vi,this.serializer)}Du(t){return new lf}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ar.provider={build:()=>new ar};class Cf extends ar{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){st(this.persistence.referenceDelegate instanceof or,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new zh(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new $a(r=>or.Vi(r,e),this.serializer)}}class ps{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rf.bind(null,this.syncEngine),await vf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Af}()}createDatastore(t){const e=gr(t.databaseInfo.databaseId),r=pf(t.databaseInfo);return _f(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,c,u){return new Ef(r,i,o,c,u)}(this.localStore,this.datastore,t.asyncQueue,e=>Vo(this.syncEngine,e,0),function(){return bo.v()?new bo:new uf}())}createSyncEngine(t,e){return function(i,o,c,u,h,E,T){const w=new bf(i,o,c,u,h,E);return T&&(w.gu=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=dt(i);D(Ns,"RemoteStore shutting down."),o.Ia.add(5),await _r(o),o.Aa.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}ps.provider={build:()=>new ps};/**
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
 */let Pf=class{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new x(C.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(i,o){const c=dt(i),u={documents:o.map(w=>ir(c.serializer,w))},h=await c.jo("BatchGetDocuments",c.serializer.databaseId,Y.emptyPath(),u,o.length),E=new Map;h.forEach(w=>{const S=Nh(c.serializer,w);E.set(S.key.toString(),S)});const T=[];return o.forEach(w=>{const S=E.get(w.toString());st(!!S,55234,{key:w}),T.push(S)}),T}(this.datastore,t);return e.forEach(r=>this.recordVersion(r)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new Ps(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,r)=>{const i=k.fromPath(r);this.mutations.push(new Oa(i,this.precondition(i)))}),await async function(r,i){const o=dt(r),c={writes:i.map(u=>Oh(o.serializer,u))};await o.Wo("Commit",o.serializer.databaseId,Y.emptyPath(),c)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw F(50498,{Gu:t.constructor.name});e=K.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new x(C.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(K.min())?Vt.exists(!1):Vt.updateTime(e):Vt.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(K.min()))throw new x(C.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Vt.updateTime(e)}return Vt.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}};/**
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
 */class Vf{constructor(t,e,r,i,o){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=i,this.deferred=o,this.zu=r.maxAttempts,this.M_=new Ha(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_(async()=>{const t=new Pf(this.datastore),e=this.Hu(t);e&&e.then(r=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Zu(i)}))}).catch(r=>{this.Zu(r)})})}Hu(t){try{const e=this.updateFunction(t);return!hr(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Zu(t){this.zu>0&&this.Xu(t)?(this.zu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ju(),Promise.resolve()))):this.deferred.reject(t)}Xu(t){if((t==null?void 0:t.name)==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!Rh(e)}return!1}}/**
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
 */const ie="FirestoreClient";class xf{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=vs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async c=>{D(ie,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(r,c=>(D(ie,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new de;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Tf(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Xr(n,t){n.asyncQueue.verifyOperationInProgress(),D(ie,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await za(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function xo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Df(n);D(ie,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>So(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>So(t.remoteStore,i)),n._onlineComponents=t}async function Df(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(ie,"Using user provided OfflineComponentProvider");try{await Xr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;dn("Error using user provided cache. Falling back to memory cache: "+e),await Xr(n,new ar)}}else D(ie,"Using default OfflineComponentProvider"),await Xr(n,new Cf(void 0));return n._offlineComponents}async function Nf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(ie,"Using user provided OnlineComponentProvider"),await xo(n,n._uninitializedComponentsProvider._online)):(D(ie,"Using default OnlineComponentProvider"),await xo(n,new ps))),n._onlineComponents}function Of(n){return Nf(n).then(t=>t.datastore)}function Ff(n,t,e){const r=new de;return n.asyncQueue.enqueueAndForget(async()=>{const i=await Of(n);new Vf(n.asyncQueue,i,e,t,r).ju()}),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function qa(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const kf="ComponentProvider",Do=new Map;function Mf(n,t,e,r,i){return new Gu(n,t,e,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,qa(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const Ga="firestore.googleapis.com",No=!0;class Oo{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new x(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ga,this.ssl=No}else this.host=t.host,this.ssl=t.ssl??No;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=ja;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<jh)throw new x(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Du("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qa(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ms{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Oo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Oo(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Tu;switch(r.type){case"firstParty":return new bu(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Do.get(e);r&&(D(kf,"Removing Datastore"),Do.delete(e),r.terminate())}(this),Promise.resolve()}}function Lf(n,t,e,r={}){var E;n=la(n,Ms);const i=Qo(t),o=n._getSettings(),c={...o,emulatorOptions:n._getEmulatorOptions()},u=`${t}:${e}`;i&&il(`https://${u}`),o.host!==Ga&&o.host!==u&&dn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:u,ssl:i,emulatorOptions:r};if(!Wn(h,c)&&(n._setSettings(h),r.mockUserToken)){let T,w;if(typeof r.mockUserToken=="string")T=r.mockUserToken,w=gt.MOCK_USER;else{T=Jc(r.mockUserToken,(E=n._app)==null?void 0:E.options.projectId);const S=r.mockUserToken.sub||r.mockUserToken.user_id;if(!S)throw new x(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new gt(S)}n._authCredentials=new Au(new aa(T,w))}}/**
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
 */class Ls{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ls(this.firestore,t,this._query)}}class ht{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ht(this.firestore,t,this._key)}toJSON(){return{type:ht._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(An(e,ht._jsonSchema))return new ht(t,r||null,new k(Y.fromString(e.referencePath)))}}ht._jsonSchemaVersion="firestore/documentReference/1.0",ht._jsonSchema={type:rt("string",ht._jsonSchemaVersion),referencePath:rt("string")};class vn extends Ls{constructor(t,e,r){super(t,e,ch(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ht(this.firestore,null,new k(t))}withConverter(t){return new vn(this.firestore,t,this._path)}}function Uf(n,t,...e){if(n=te(n),arguments.length===1&&(t=vs.newId()),xu("doc","path",t),n instanceof Ms){const r=Y.fromString(t,...e);return eo(r),new ht(n,null,new k(r))}{if(!(n instanceof ht||n instanceof vn))throw new x(C.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return eo(r),new ht(n.firestore,n instanceof vn?n.converter:null,new k(r))}}/**
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
 */const Fo="AsyncQueue";class ko{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ha(this,"async_queue_retry"),this._c=()=>{const r=Jr();r&&D(Fo,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=Jr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Jr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new de;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!ur(t))throw t;D(Fo,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,ke("INTERNAL UNHANDLED ERROR: ",Mo(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=ks.createAndSchedule(this,t,e,r,o=>this.hc(o));return this.tc.push(i),i}uc(){this.nc&&F(47125,{Pc:Mo(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ec(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ic(t){return this.Tc().then(()=>{this.tc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Mo(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Ka extends Ms{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new ko,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ko(t),this._firestoreClient=void 0,await t}}}function Bf(n,t){const e=typeof n=="object"?n:au(),r=typeof n=="string"?n:Zn,i=nu(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Qc("firestore");o&&Lf(i,...o)}return i}function jf(n){if(n._terminated)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||$f(n),n._firestoreClient}function $f(n){var r,i,o,c;const t=n._freezeSettings(),e=Mf(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(i=n._app)==null?void 0:i.options.apiKey,t);n._componentsProvider||(o=t.localCache)!=null&&o._offlineComponentProvider&&((c=t.localCache)!=null&&c._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new xf(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&function(h){const E=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(E),_online:E}}(n._componentsProvider))}/**
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
 */class Pt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Pt(Bt.fromBase64String(t))}catch(e){throw new x(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Pt(Bt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Pt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(An(t,Pt._jsonSchema))return Pt.fromBase64String(t.bytes)}}Pt._jsonSchemaVersion="firestore/bytes/1.0",Pt._jsonSchema={type:rt("string",Pt._jsonSchemaVersion),bytes:rt("string")};/**
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
 */class Us{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Bs{constructor(t){this._methodName=t}}/**
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
 */class Ut{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ut._jsonSchemaVersion}}static fromJSON(t){if(An(t,Ut._jsonSchema))return new Ut(t.latitude,t.longitude)}}Ut._jsonSchemaVersion="firestore/geoPoint/1.0",Ut._jsonSchema={type:rt("string",Ut._jsonSchemaVersion),latitude:rt("number"),longitude:rt("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Ot{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Ot._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(An(t,Ot._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new Ot(t.vectorValues);throw new x(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ot._jsonSchemaVersion="firestore/vectorValue/1.0",Ot._jsonSchema={type:rt("string",Ot._jsonSchemaVersion),vectorValues:rt("object")};/**
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
 */const zf=/^__.*__$/;class Hf{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ve(t,this.data,this.fieldMask,e,this.fieldTransforms):new wn(t,this.data,e,this.fieldTransforms)}}class Qa{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new ve(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Wa(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{dataSource:n})}}class js{constructor(t,e,r,i,o,c){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=c||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new js({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(t){var i;const e=(i=this.path)==null?void 0:i.child(t),r=this.i({path:e,arrayElement:!1});return r.mc(t),r}fc(t){var i;const e=(i=this.path)==null?void 0:i.child(t),r=this.i({path:e,arrayElement:!1});return r.Ac(),r}gc(t){return this.i({path:void 0,arrayElement:!0})}yc(t){return cr(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.mc(this.path.get(t))}mc(t){if(t.length===0)throw this.yc("Document fields must not be empty");if(Wa(this.dataSource)&&zf.test(t))throw this.yc('Document fields cannot begin and end with "__"')}}class qf{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||gr(t)}A(t,e,r,i=!1){return new js({dataSource:t,methodName:e,targetDoc:r,path:_t.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gf(n){const t=n._freezeSettings(),e=gr(n._databaseId);return new qf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Kf(n,t,e,r,i,o={}){const c=n.A(o.merge||o.mergeFields?2:0,t,e,i);$s("Data must be an object, but it was:",c,r);const u=Ja(r,c);let h,E;if(o.merge)h=new xt(c.fieldMask),E=c.fieldTransforms;else if(o.mergeFields){const T=[];for(const w of o.mergeFields){const S=Tn(t,w,e);if(!c.contains(S))throw new x(C.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);Za(T,S)||T.push(S)}h=new xt(T),E=c.fieldTransforms.filter(w=>h.covers(w.field))}else h=null,E=c.fieldTransforms;return new Hf(new Ct(u),h,E)}class yr extends Bs{_toFieldTransform(t){if(t.dataSource!==2)throw t.dataSource===1?t.yc(`${this._methodName}() can only appear at the top level of your update data`):t.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof yr}}function Qf(n,t,e,r){const i=n.A(1,t,e);$s("Data must be an object, but it was:",i,r);const o=[],c=Ct.empty();ye(r,(h,E)=>{const T=Ya(t,h,e);E=te(E);const w=i.fc(T);if(E instanceof yr)o.push(T);else{const S=Er(E,w);S!=null&&(o.push(T),c.set(T,S))}});const u=new xt(o);return new Qa(c,u,i.fieldTransforms)}function Wf(n,t,e,r,i,o){const c=n.A(1,t,e),u=[Tn(t,r,e)],h=[i];if(o.length%2!=0)throw new x(C.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<o.length;S+=2)u.push(Tn(t,o[S])),h.push(o[S+1]);const E=[],T=Ct.empty();for(let S=u.length-1;S>=0;--S)if(!Za(E,u[S])){const V=u[S];let N=h[S];N=te(N);const U=c.fc(V);if(N instanceof yr)E.push(V);else{const L=Er(N,U);L!=null&&(E.push(V),T.set(V,L))}}const w=new xt(E);return new Qa(T,w,c.fieldTransforms)}function Er(n,t){if(Xa(n=te(n)))return $s("Unsupported field value:",t,n),Ja(n,t);if(n instanceof Bs)return function(r,i){if(!Wa(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.yc("Nested arrays are not supported");return function(r,i){const o=[];let c=0;for(const u of r){let h=Er(u,i.gc(c));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),c++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Eh(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=J.fromDate(r);return{timestampValue:hs(i.serializer,o)}}if(r instanceof J){const o=new J(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:hs(i.serializer,o)}}if(r instanceof Ut)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pt)return{bytesValue:Vh(i.serializer,r._byteString)};if(r instanceof ht){const o=i.databaseId,c=r.firestore._databaseId;if(!c.isEqual(o))throw i.yc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Fa(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ot)return function(c,u){const h=c instanceof Ot?c.toArray():c;return{mapValue:{fields:{[ga]:{stringValue:_a},[tr]:{arrayValue:{values:h.map(T=>{if(typeof T!="number")throw u.yc("VectorValues must only contain numeric values.");return Cs(u.serializer,T)})}}}}}}(r,i);if(Ba(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${Ts(r)}`)}(n,t)}function Ja(n,t){const e={};return ha(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ye(n,(r,i)=>{const o=Er(i,t.dc(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Xa(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof J||n instanceof Ut||n instanceof Pt||n instanceof ht||n instanceof Bs||n instanceof Ot||Ba(n))}function $s(n,t,e){if(!Xa(e)||!ca(e)){const r=Ts(e);throw r==="an object"?t.yc(n+" a custom object"):t.yc(n+" "+r)}}function Tn(n,t,e){if((t=te(t))instanceof Us)return t._internalPath;if(typeof t=="string")return Ya(n,t);throw cr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Jf=new RegExp("[~\\*/\\[\\]]");function Ya(n,t,e){if(t.search(Jf)>=0)throw cr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Us(...t.split("."))._internalPath}catch{throw cr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function cr(n,t,e,r,i){const o=r&&!r.isEmpty(),c=i!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||c)&&(h+=" (found",o&&(h+=` in field ${r}`),c&&(h+=` in document ${i}`),h+=")"),new x(C.INVALID_ARGUMENT,u+n+h)}function Za(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class tc{convertValue(t,e="none"){switch(re(t)){case 0:return null;case 1:return t.booleanValue;case 2:return et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(_e(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw F(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ye(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertVectorValue(t){var r,i,o;const e=(o=(i=(r=t.fields)==null?void 0:r[tr].arrayValue)==null?void 0:i.values)==null?void 0:o.map(c=>et(c.doubleValue));return new Ot(e)}convertGeoPoint(t){return new Ut(et(t.latitude),et(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=fr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(mn(t));default:return null}}convertTimestamp(t){const e=ne(t);return new J(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Y.fromString(t);st(Ua(r),9688,{name:t});const i=new gn(r.get(1),r.get(3)),o=new k(r.popFirst(5));return i.isEqual(e)||ke(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Xf extends tc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Pt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ht(this.firestore,null,e)}}const Lo="@firebase/firestore",Uo="4.13.0";/**
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
 */class lr{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Yf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(Tn("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Yf extends lr{data(){return super.data()}}function Zf(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class td extends tc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Pt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ht(this.firestore,null,e)}}class nn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class me extends lr{constructor(t,e,r,i,o,c){super(t,e,r,i,c),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Gn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Tn("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new x(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=me._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}me._jsonSchemaVersion="firestore/documentSnapshot/1.0",me._jsonSchema={type:rt("string",me._jsonSchemaVersion),bundleSource:rt("string","DocumentSnapshot"),bundleName:rt("string"),bundle:rt("string")};class Gn extends me{data(t={}){return super.data(t)}}class un{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new nn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Gn(this._firestore,this._userDataWriter,r.key,r,new nn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let c=0;return i._snapshot.docChanges.map(u=>{const h=new Gn(i._firestore,i._userDataWriter,u.doc.key,u.doc,new nn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:c++}})}{let c=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new Gn(i._firestore,i._userDataWriter,u.doc.key,u.doc,new nn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let E=-1,T=-1;return u.type!==0&&(E=c.indexOf(u.doc.key),c=c.delete(u.doc.key)),u.type!==1&&(c=c.add(u.doc),T=c.indexOf(u.doc.key)),{type:ed(u.type),doc:h,oldIndex:E,newIndex:T}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new x(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=un._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=vs.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function ed(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */un._jsonSchemaVersion="firestore/querySnapshot/1.0",un._jsonSchema={type:rt("string",un._jsonSchemaVersion),bundleSource:rt("string","QuerySnapshot"),bundleName:rt("string"),bundle:rt("string")};const nd={maxAttempts:5};function rn(n,t){if((n=te(n)).firestore!==t)throw new x(C.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class rd{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=Gf(t)}get(t){const e=rn(t,this._firestore),r=new td(this._firestore);return this._transaction.lookup([e._key]).then(i=>{if(!i||i.length!==1)return F(24041);const o=i[0];if(o.isFoundDocument())return new lr(this._firestore,r,o.key,o,e.converter);if(o.isNoDocument())return new lr(this._firestore,r,e._key,null,e.converter);throw F(18433,{doc:o})})}set(t,e,r){const i=rn(t,this._firestore),o=Zf(i.converter,e,r),c=Kf(this._dataReader,"Transaction.set",i._key,o,i.converter!==null,r);return this._transaction.set(i._key,c),this}update(t,e,r,...i){const o=rn(t,this._firestore);let c;return c=typeof(e=te(e))=="string"||e instanceof Us?Wf(this._dataReader,"Transaction.update",o._key,e,r,i):Qf(this._dataReader,"Transaction.update",o._key,e),this._transaction.update(o._key,c),this}delete(t){const e=rn(t,this._firestore);return this._transaction.delete(e._key),this}}/**
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
 */class sd extends rd{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=rn(t,this._firestore),r=new Xf(this._firestore);return super.get(t).then(i=>new me(this._firestore,r,e._key,i._document,new nn(!1,!1),e.converter))}}function id(n,t,e){n=la(n,Ka);const r={...nd,...e};(function(c){if(c.maxAttempts<1)throw new x(C.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r);const i=jf(n);return Ff(i,o=>t(new sd(n,o)),r)}(function(t,e=!0){vu(ou),Xn(new hn("firestore",(r,{instanceIdentifier:i,options:o})=>{const c=r.getProvider("app").getImmediate(),u=new Ka(new wu(r.getProvider("auth-internal")),new Su(c,r.getProvider("app-check-internal")),Ku(c,i),c);return o={useFetchStreams:e,...o},u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Ce(Lo,Uo,t),Ce(Lo,Uo,"esm2020")})();const od={apiKey:"AIzaSyChVXaiee2KXgalfwvOwwXDd8une9d3M2g",authDomain:"fir-manager-5e0ef.firebaseapp.com",projectId:"fir-manager-5e0ef",storageBucket:"fir-manager-5e0ef.firebasestorage.app",messagingSenderId:"60765298961",appId:"1:60765298961:web:8bc064f762927231352cb0"},ad=Yo(od),Bo=Bf(ad);var cd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ld(n){if(n.__esModule)return n;var t=n.default;if(typeof t=="function"){var e=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(n).forEach(function(r){var i=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:function(){return n[r]}})}),e}var ec={exports:{}};const ud={},hd=Object.freeze(Object.defineProperty({__proto__:null,default:ud},Symbol.toStringTag,{value:"Module"})),jo=ld(hd);/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.11.1
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2025
 * @license MIT
 */(function(n){(function(){var t="input is invalid type",e=typeof window=="object",r=e?window:{};r.JS_SHA256_NO_WINDOW&&(e=!1);var i=!e&&typeof self=="object",o=!r.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node&&process.type!="renderer";o?r=cd:i&&(r=self);var c=!r.JS_SHA256_NO_COMMON_JS&&!0&&n.exports,u=!r.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",h="0123456789abcdef".split(""),E=[-2147483648,8388608,32768,128],T=[24,16,8,0],w=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],S=["hex","array","digest","arrayBuffer"],V=[];(r.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(b){return Object.prototype.toString.call(b)==="[object Array]"}),u&&(r.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(b){return typeof b=="object"&&b.buffer&&b.buffer.constructor===ArrayBuffer});var N=function(b,_){return function(m){return new B(_,!0).update(m)[b]()}},U=function(b){var _=N("hex",b);o&&(_=L(_,b)),_.create=function(){return new B(b)},_.update=function(y){return _.create().update(y)};for(var m=0;m<S.length;++m){var p=S[m];_[p]=N(p,b)}return _},L=function(b,_){var m=jo,p=jo.Buffer,y=_?"sha224":"sha256",g;p.from&&!r.JS_SHA256_NO_BUFFER_FROM?g=p.from:g=function(d){return new p(d)};var v=function(d){if(typeof d=="string")return m.createHash(y).update(d,"utf8").digest("hex");if(d==null)throw new Error(t);return d.constructor===ArrayBuffer&&(d=new Uint8Array(d)),Array.isArray(d)||ArrayBuffer.isView(d)||d.constructor===p?m.createHash(y).update(g(d)).digest("hex"):b(d)};return v},X=function(b,_){return function(m,p){return new it(m,_,!0).update(p)[b]()}},Z=function(b){var _=X("hex",b);_.create=function(y){return new it(y,b)},_.update=function(y,g){return _.create(y).update(g)};for(var m=0;m<S.length;++m){var p=S[m];_[p]=X(p,b)}return _};function B(b,_){_?(V[0]=V[16]=V[1]=V[2]=V[3]=V[4]=V[5]=V[6]=V[7]=V[8]=V[9]=V[10]=V[11]=V[12]=V[13]=V[14]=V[15]=0,this.blocks=V):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],b?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=b}B.prototype.update=function(b){if(!this.finalized){var _,m=typeof b;if(m!=="string"){if(m==="object"){if(b===null)throw new Error(t);if(u&&b.constructor===ArrayBuffer)b=new Uint8Array(b);else if(!Array.isArray(b)&&(!u||!ArrayBuffer.isView(b)))throw new Error(t)}else throw new Error(t);_=!0}for(var p,y=0,g,v=b.length,d=this.blocks;y<v;){if(this.hashed&&(this.hashed=!1,d[0]=this.block,this.block=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0),_)for(g=this.start;y<v&&g<64;++y)d[g>>>2]|=b[y]<<T[g++&3];else for(g=this.start;y<v&&g<64;++y)p=b.charCodeAt(y),p<128?d[g>>>2]|=p<<T[g++&3]:p<2048?(d[g>>>2]|=(192|p>>>6)<<T[g++&3],d[g>>>2]|=(128|p&63)<<T[g++&3]):p<55296||p>=57344?(d[g>>>2]|=(224|p>>>12)<<T[g++&3],d[g>>>2]|=(128|p>>>6&63)<<T[g++&3],d[g>>>2]|=(128|p&63)<<T[g++&3]):(p=65536+((p&1023)<<10|b.charCodeAt(++y)&1023),d[g>>>2]|=(240|p>>>18)<<T[g++&3],d[g>>>2]|=(128|p>>>12&63)<<T[g++&3],d[g>>>2]|=(128|p>>>6&63)<<T[g++&3],d[g>>>2]|=(128|p&63)<<T[g++&3]);this.lastByteIndex=g,this.bytes+=g-this.start,g>=64?(this.block=d[16],this.start=g-64,this.hash(),this.hashed=!0):this.start=g}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},B.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var b=this.blocks,_=this.lastByteIndex;b[16]=this.block,b[_>>>2]|=E[_&3],this.block=b[16],_>=56&&(this.hashed||this.hash(),b[0]=this.block,b[16]=b[1]=b[2]=b[3]=b[4]=b[5]=b[6]=b[7]=b[8]=b[9]=b[10]=b[11]=b[12]=b[13]=b[14]=b[15]=0),b[14]=this.hBytes<<3|this.bytes>>>29,b[15]=this.bytes<<3,this.hash()}},B.prototype.hash=function(){var b=this.h0,_=this.h1,m=this.h2,p=this.h3,y=this.h4,g=this.h5,v=this.h6,d=this.h7,O=this.blocks,H,yt,Et,wt,j,Ft,Nt,zt,Te,Ht,qt;for(H=16;H<64;++H)j=O[H-15],yt=(j>>>7|j<<25)^(j>>>18|j<<14)^j>>>3,j=O[H-2],Et=(j>>>17|j<<15)^(j>>>19|j<<13)^j>>>10,O[H]=O[H-16]+yt+O[H-7]+Et<<0;for(qt=_&m,H=0;H<64;H+=4)this.first?(this.is224?(zt=300032,j=O[0]-1413257819,d=j-150054599<<0,p=j+24177077<<0):(zt=704751109,j=O[0]-210244248,d=j-1521486534<<0,p=j+143694565<<0),this.first=!1):(yt=(b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10),Et=(y>>>6|y<<26)^(y>>>11|y<<21)^(y>>>25|y<<7),zt=b&_,wt=zt^b&m^qt,Nt=y&g^~y&v,j=d+Et+Nt+w[H]+O[H],Ft=yt+wt,d=p+j<<0,p=j+Ft<<0),yt=(p>>>2|p<<30)^(p>>>13|p<<19)^(p>>>22|p<<10),Et=(d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7),Te=p&b,wt=Te^p&_^zt,Nt=d&y^~d&g,j=v+Et+Nt+w[H+1]+O[H+1],Ft=yt+wt,v=m+j<<0,m=j+Ft<<0,yt=(m>>>2|m<<30)^(m>>>13|m<<19)^(m>>>22|m<<10),Et=(v>>>6|v<<26)^(v>>>11|v<<21)^(v>>>25|v<<7),Ht=m&p,wt=Ht^m&b^Te,Nt=v&d^~v&y,j=g+Et+Nt+w[H+2]+O[H+2],Ft=yt+wt,g=_+j<<0,_=j+Ft<<0,yt=(_>>>2|_<<30)^(_>>>13|_<<19)^(_>>>22|_<<10),Et=(g>>>6|g<<26)^(g>>>11|g<<21)^(g>>>25|g<<7),qt=_&m,wt=qt^_&p^Ht,Nt=g&v^~g&d,j=y+Et+Nt+w[H+3]+O[H+3],Ft=yt+wt,y=b+j<<0,b=j+Ft<<0,this.chromeBugWorkAround=!0;this.h0=this.h0+b<<0,this.h1=this.h1+_<<0,this.h2=this.h2+m<<0,this.h3=this.h3+p<<0,this.h4=this.h4+y<<0,this.h5=this.h5+g<<0,this.h6=this.h6+v<<0,this.h7=this.h7+d<<0},B.prototype.hex=function(){this.finalize();var b=this.h0,_=this.h1,m=this.h2,p=this.h3,y=this.h4,g=this.h5,v=this.h6,d=this.h7,O=h[b>>>28&15]+h[b>>>24&15]+h[b>>>20&15]+h[b>>>16&15]+h[b>>>12&15]+h[b>>>8&15]+h[b>>>4&15]+h[b&15]+h[_>>>28&15]+h[_>>>24&15]+h[_>>>20&15]+h[_>>>16&15]+h[_>>>12&15]+h[_>>>8&15]+h[_>>>4&15]+h[_&15]+h[m>>>28&15]+h[m>>>24&15]+h[m>>>20&15]+h[m>>>16&15]+h[m>>>12&15]+h[m>>>8&15]+h[m>>>4&15]+h[m&15]+h[p>>>28&15]+h[p>>>24&15]+h[p>>>20&15]+h[p>>>16&15]+h[p>>>12&15]+h[p>>>8&15]+h[p>>>4&15]+h[p&15]+h[y>>>28&15]+h[y>>>24&15]+h[y>>>20&15]+h[y>>>16&15]+h[y>>>12&15]+h[y>>>8&15]+h[y>>>4&15]+h[y&15]+h[g>>>28&15]+h[g>>>24&15]+h[g>>>20&15]+h[g>>>16&15]+h[g>>>12&15]+h[g>>>8&15]+h[g>>>4&15]+h[g&15]+h[v>>>28&15]+h[v>>>24&15]+h[v>>>20&15]+h[v>>>16&15]+h[v>>>12&15]+h[v>>>8&15]+h[v>>>4&15]+h[v&15];return this.is224||(O+=h[d>>>28&15]+h[d>>>24&15]+h[d>>>20&15]+h[d>>>16&15]+h[d>>>12&15]+h[d>>>8&15]+h[d>>>4&15]+h[d&15]),O},B.prototype.toString=B.prototype.hex,B.prototype.digest=function(){this.finalize();var b=this.h0,_=this.h1,m=this.h2,p=this.h3,y=this.h4,g=this.h5,v=this.h6,d=this.h7,O=[b>>>24&255,b>>>16&255,b>>>8&255,b&255,_>>>24&255,_>>>16&255,_>>>8&255,_&255,m>>>24&255,m>>>16&255,m>>>8&255,m&255,p>>>24&255,p>>>16&255,p>>>8&255,p&255,y>>>24&255,y>>>16&255,y>>>8&255,y&255,g>>>24&255,g>>>16&255,g>>>8&255,g&255,v>>>24&255,v>>>16&255,v>>>8&255,v&255];return this.is224||O.push(d>>>24&255,d>>>16&255,d>>>8&255,d&255),O},B.prototype.array=B.prototype.digest,B.prototype.arrayBuffer=function(){this.finalize();var b=new ArrayBuffer(this.is224?28:32),_=new DataView(b);return _.setUint32(0,this.h0),_.setUint32(4,this.h1),_.setUint32(8,this.h2),_.setUint32(12,this.h3),_.setUint32(16,this.h4),_.setUint32(20,this.h5),_.setUint32(24,this.h6),this.is224||_.setUint32(28,this.h7),b};function it(b,_,m){var p,y=typeof b;if(y==="string"){var g=[],v=b.length,d=0,O;for(p=0;p<v;++p)O=b.charCodeAt(p),O<128?g[d++]=O:O<2048?(g[d++]=192|O>>>6,g[d++]=128|O&63):O<55296||O>=57344?(g[d++]=224|O>>>12,g[d++]=128|O>>>6&63,g[d++]=128|O&63):(O=65536+((O&1023)<<10|b.charCodeAt(++p)&1023),g[d++]=240|O>>>18,g[d++]=128|O>>>12&63,g[d++]=128|O>>>6&63,g[d++]=128|O&63);b=g}else if(y==="object"){if(b===null)throw new Error(t);if(u&&b.constructor===ArrayBuffer)b=new Uint8Array(b);else if(!Array.isArray(b)&&(!u||!ArrayBuffer.isView(b)))throw new Error(t)}else throw new Error(t);b.length>64&&(b=new B(_,!0).update(b).array());var H=[],yt=[];for(p=0;p<64;++p){var Et=b[p]||0;H[p]=92^Et,yt[p]=54^Et}B.call(this,_,m),this.update(yt),this.oKeyPad=H,this.inner=!0,this.sharedMemory=m}it.prototype=new B,it.prototype.finalize=function(){if(B.prototype.finalize.call(this),this.inner){this.inner=!1;var b=this.array();B.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(b),B.prototype.finalize.call(this)}};var Q=U();Q.sha256=Q,Q.sha224=U(!0),Q.sha256.hmac=Z(),Q.sha224.hmac=Z(!0),c?n.exports=Q:(r.sha256=Q.sha256,r.sha224=Q.sha224)})()})(ec);var fd=ec.exports;async function dd(n,t){const e=t.trim().toUpperCase(),r=fd.sha256(e),i=Uf(Bo,"access_control",r);try{return await id(Bo,async o=>{const c=await o.get(i);if(!c.exists())return{ok:!1,reason:"codigo-invalido"};const u=c.data();return u.appId!==n?{ok:!1,reason:"codigo-invalido"}:u.active?u.used?{ok:!1,reason:"contraseña-usada"}:(o.update(i,{used:!0,usedAt:new Date}),{ok:!0}):{ok:!1,reason:"codigo-invalido"}})}catch(o){return console.error("Error:",o),{ok:!1,reason:"error"}}}async function pd(n){const t=await dd("geo-capital5",n);return console.log("RESULT:",t),t.ok?(localStorage.setItem("authorized","true"),{ok:!0}):{ok:!1,error:t.reason}}const bt=document.getElementById("app");let be=0,ms=[];function md(){localStorage.getItem("authorized")==="true"?_d():gd()}function gd(){localStorage.removeItem("authorized"),bt.innerHTML="";const n=document.createElement("div");n.style.textAlign="center",n.style.padding="40px";const t=document.createElement("h2");t.textContent="🔐 Introduce tu código";const e=document.createElement("input");e.placeholder="Código...",e.id="access-input";const r=document.createElement("button");r.textContent="Entrar";const i=document.createElement("p");i.id="login-msg",r.onclick=async()=>{const o=e.value.trim();if(!o)return;const c=await pd(o);c.ok?location.reload():i.textContent=c.error},n.appendChild(t),n.appendChild(e),n.appendChild(r),n.appendChild(i),bt.appendChild(n)}async function _d(){console.log("INIT EJECUTANDO"),ms=await Fc(),$n(bt,Kn),yd()}async function Kn(n){const t=Mc(ms,n);bt.innerHTML="";const e=document.createElement("button");e.textContent="⬅ Volver",e.className="nav-btn",e.onclick=()=>{$n(bt,Kn)},bt.appendChild(e);const r=document.createElement("h2");r.textContent=`🌍 ${n}`,r.style.textAlign="center",bt.appendChild(r);const i=document.createElement("div");i.className="action-container";const o=document.createElement("button");o.innerHTML="📘 <span>Aprender</span>",o.className="action-btn learn-btn";const c=document.createElement("button");c.innerHTML="🎮 <span>Jugar</span>",c.className="action-btn quiz-btn",i.appendChild(o),i.appendChild(c),bt.appendChild(i);const u=document.createElement("div");u.className="big-logo-container";const h=document.createElement("img");h.src="logo_juvenil.png",h.className="big-logo",u.appendChild(h),bt.appendChild(u),o.onclick=async()=>{await Oc(bt,t,n,()=>{$n(bt,Kn)})},c.onclick=()=>{zo(bt,t,n,()=>{$n(bt,Kn)},ms)}}function yd(){const n=document.createElement("div");n.className="app-signature",n.textContent="@JesusLitrus",n.style.cursor="pointer",n.style.padding="20px",n.style.display="block",n.style.textAlign="center",document.body.appendChild(n)}window.__tapListenerAdded||(window.__tapListenerAdded=!0,document.body.addEventListener("click",n=>{n.target.tagName!=="BUTTON"&&(be===0&&setTimeout(()=>{be=0,console.log("RESET")},3e3),be++,console.log("TAPS:",be),be>=10&&(be=0,confirm("🔐 ¿Aplicar logout?")&&(localStorage.removeItem("authorized"),location.reload())))}));md();
