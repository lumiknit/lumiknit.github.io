var jt=Object.defineProperty;var Rt=(e,t,n)=>t in e?jt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ie=(e,t,n)=>Rt(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const Ut=(e,t)=>e===t,I=Symbol("solid-proxy"),Ft=typeof Proxy=="function",Ue=Symbol("solid-track"),be={equals:Ut};let at=ht;const V=1,ve=2,ct={owned:null,cleanups:null,context:null,owner:null};var x=null;let Le=null,Bt=null,b=null,A=null,U=null,Ce=0;function ne(e,t){const n=b,s=x,i=e.length===0,r=t===void 0?s:t,o=i?ct:{owned:null,cleanups:null,context:r?r.context:null,owner:r},l=i?e:()=>e(()=>k(()=>re(o)));x=o,b=null;try{return ee(l,!0)}finally{b=n,x=s}}function z(e,t){t=t?Object.assign({},be,t):be;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),dt(n,i));return[ft.bind(n),s]}function v(e,t,n){const s=Ve(e,t,!1,V);ae(s)}function Se(e,t,n){at=Wt;const s=Ve(e,t,!1,V);s.user=!0,U?U.push(s):ae(s)}function L(e,t,n){n=n?Object.assign({},be,n):be;const s=Ve(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,ae(s),ft.bind(s)}function Ht(e){return ee(e,!1)}function k(e){if(b===null)return e();const t=b;b=null;try{return e()}finally{b=t}}function Vt(e){Se(()=>k(e))}function ut(e){return x===null||(x.cleanups===null?x.cleanups=[e]:x.cleanups.push(e)),e}function Fe(){return b}function Kt(e){const t=L(e),n=L(()=>Be(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}function ft(){if(this.sources&&this.state)if(this.state===V)ae(this);else{const e=A;A=null,ee(()=>$e(this),!1),A=e}if(b){const e=this.observers?this.observers.length:0;b.sources?(b.sources.push(this),b.sourceSlots.push(e)):(b.sources=[this],b.sourceSlots=[e]),this.observers?(this.observers.push(b),this.observerSlots.push(b.sources.length-1)):(this.observers=[b],this.observerSlots=[b.sources.length-1])}return this.value}function dt(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&ee(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],o=Le&&Le.running;o&&Le.disposed.has(r),(o?!r.tState:!r.state)&&(r.pure?A.push(r):U.push(r),r.observers&&gt(r)),o||(r.state=V)}if(A.length>1e6)throw A=[],new Error},!1)),t}function ae(e){if(!e.fn)return;re(e);const t=Ce;zt(e,e.value,t)}function zt(e,t,n){let s;const i=x,r=b;b=x=e;try{s=e.fn(t)}catch(o){return e.pure&&(e.state=V,e.owned&&e.owned.forEach(re),e.owned=null),e.updatedAt=n+1,mt(o)}finally{b=r,x=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?dt(e,s):e.value=s,e.updatedAt=n)}function Ve(e,t,n,s=V,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:x,context:x?x.context:null,pure:n};return x===null||x!==ct&&(x.owned?x.owned.push(r):x.owned=[r]),r}function we(e){if(e.state===0)return;if(e.state===ve)return $e(e);if(e.suspense&&k(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Ce);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===V)ae(e);else if(e.state===ve){const s=A;A=null,ee(()=>$e(e,t[0]),!1),A=s}}function ee(e,t){if(A)return e();let n=!1;t||(A=[]),U?n=!0:U=[],Ce++;try{const s=e();return Gt(n),s}catch(s){n||(U=null),A=null,mt(s)}}function Gt(e){if(A&&(ht(A),A=null),e)return;const t=U;U=null,t.length&&ee(()=>at(t),!1)}function ht(e){for(let t=0;t<e.length;t++)we(e[t])}function Wt(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:we(s)}for(t=0;t<n;t++)we(e[t])}function $e(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const i=s.state;i===V?s!==t&&(!s.updatedAt||s.updatedAt<Ce)&&we(s):i===ve&&$e(s,t)}}}function gt(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=ve,n.pure?A.push(n):U.push(n),n.observers&&gt(n))}}function re(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),o=n.observerSlots.pop();s<i.length&&(r.sourceSlots[o]=s,i[s]=r,n.observerSlots[s]=o)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)re(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)re(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function qt(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function mt(e,t=x){throw qt(e)}function Be(e){if(typeof e=="function"&&!e.length)return Be(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=Be(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}const Xt=Symbol("fallback");function tt(e){for(let t=0;t<e.length;t++)e[t]()}function Yt(e,t,n={}){let s=[],i=[],r=[],o=0,l=t.length>1?[]:null;return ut(()=>tt(r)),()=>{let a=e()||[],u=a.length,f,c;return a[Ue],k(()=>{let g,y,S,_,E,C,O,P,F;if(u===0)o!==0&&(tt(r),r=[],s=[],i=[],o=0,l&&(l=[])),n.fallback&&(s=[Xt],i[0]=ne(ke=>(r[0]=ke,n.fallback())),o=1);else if(o===0){for(i=new Array(u),c=0;c<u;c++)s[c]=a[c],i[c]=ne(h);o=u}else{for(S=new Array(u),_=new Array(u),l&&(E=new Array(u)),C=0,O=Math.min(o,u);C<O&&s[C]===a[C];C++);for(O=o-1,P=u-1;O>=C&&P>=C&&s[O]===a[P];O--,P--)S[P]=i[O],_[P]=r[O],l&&(E[P]=l[O]);for(g=new Map,y=new Array(P+1),c=P;c>=C;c--)F=a[c],f=g.get(F),y[c]=f===void 0?-1:f,g.set(F,c);for(f=C;f<=O;f++)F=s[f],c=g.get(F),c!==void 0&&c!==-1?(S[c]=i[f],_[c]=r[f],l&&(E[c]=l[f]),c=y[c],g.set(F,c)):r[f]();for(c=C;c<u;c++)c in S?(i[c]=S[c],r[c]=_[c],l&&(l[c]=E[c],l[c](c))):i[c]=ne(h);i=i.slice(0,o=u),s=a.slice(0)}return i});function h(g){if(r[c]=g,l){const[y,S]=z(c);return l[c]=S,t(a[c],y)}return t(a[c])}}}function m(e,t){return k(()=>e(t||{}))}function ue(){return!0}const Qt={get(e,t,n){return t===I?n:e.get(t)},has(e,t){return t===I?!0:e.has(t)},set:ue,deleteProperty:ue,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ue,deleteProperty:ue}},ownKeys(e){return e.keys()}};function je(e){return(e=typeof e=="function"?e():e)?e:{}}function Jt(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function K(...e){let t=!1;for(let o=0;o<e.length;o++){const l=e[o];t=t||!!l&&I in l,e[o]=typeof l=="function"?(t=!0,L(l)):l}if(Ft&&t)return new Proxy({get(o){for(let l=e.length-1;l>=0;l--){const a=je(e[l])[o];if(a!==void 0)return a}},has(o){for(let l=e.length-1;l>=0;l--)if(o in je(e[l]))return!0;return!1},keys(){const o=[];for(let l=0;l<e.length;l++)o.push(...Object.keys(je(e[l])));return[...new Set(o)]}},Qt);const n={},s=Object.create(null);for(let o=e.length-1;o>=0;o--){const l=e[o];if(!l)continue;const a=Object.getOwnPropertyNames(l);for(let u=a.length-1;u>=0;u--){const f=a[u];if(f==="__proto__"||f==="constructor")continue;const c=Object.getOwnPropertyDescriptor(l,f);if(!s[f])s[f]=c.get?{enumerable:!0,configurable:!0,get:Jt.bind(n[f]=[c.get.bind(l)])}:c.value!==void 0?c:void 0;else{const h=n[f];h&&(c.get?h.push(c.get.bind(l)):c.value!==void 0&&h.push(()=>c.value))}}}const i={},r=Object.keys(s);for(let o=r.length-1;o>=0;o--){const l=r[o],a=s[l];a&&a.get?Object.defineProperty(i,l,a):i[l]=a?a.value:void 0}return i}const yt=e=>`Stale read from <${e}>.`;function ye(e){const t="fallback"in e&&{fallback:()=>e.fallback};return L(Yt(()=>e.each,e.children,t||void 0))}function ie(e){const t=e.keyed,n=L(()=>e.when,void 0,{equals:(s,i)=>t?s===i:!s==!i});return L(()=>{const s=n();if(s){const i=e.children;return typeof i=="function"&&i.length>0?k(()=>i(t?s:()=>{if(!k(n))throw yt("Show");return e.when})):i}return e.fallback},void 0,void 0)}function Zt(e){let t=!1;const n=(r,o)=>(t?r[1]===o[1]:!r[1]==!o[1])&&r[2]===o[2],s=Kt(()=>e.children),i=L(()=>{let r=s();Array.isArray(r)||(r=[r]);for(let o=0;o<r.length;o++){const l=r[o].when;if(l)return t=!!r[o].keyed,[o,l,r[o]]}return[-1]},void 0,{equals:n});return L(()=>{const[r,o,l]=i();if(r<0)return e.fallback;const a=l.children;return typeof a=="function"&&a.length>0?k(()=>a(t?o:()=>{if(k(i)[0]!==r)throw yt("Match");return l.when})):a},void 0,void 0)}function fe(e){return e}const en=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],tn=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...en]),nn=new Set(["innerHTML","textContent","innerText","children"]),sn=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),rn=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function on(e,t){const n=rn[e];return typeof n=="object"?n[t]?n.$:void 0:n}const ln=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),an={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function cn(e,t,n){let s=n.length,i=t.length,r=s,o=0,l=0,a=t[i-1].nextSibling,u=null;for(;o<i||l<r;){if(t[o]===n[l]){o++,l++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===o){const f=r<s?l?n[l-1].nextSibling:n[r-l]:a;for(;l<r;)e.insertBefore(n[l++],f)}else if(r===l)for(;o<i;)(!u||!u.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[r-1]&&n[l]===t[i-1]){const f=t[--i].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--r],f),t[i]=n[r]}else{if(!u){u=new Map;let c=l;for(;c<r;)u.set(n[c],c++)}const f=u.get(t[o]);if(f!=null)if(l<f&&f<r){let c=o,h=1,g;for(;++c<i&&c<r&&!((g=u.get(t[c]))==null||g!==f+h);)h++;if(h>f-l){const y=t[o];for(;l<f;)e.insertBefore(n[l++],y)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const nt="_$DX_DELEGATE";function un(e,t,n,s={}){let i;return ne(r=>{i=r,t===document?e():d(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function $(e,t,n){let s;const i=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},r=t?()=>k(()=>document.importNode(s||(s=i()),!0)):()=>(s||(s=i())).cloneNode(!0);return r.cloneNode=r,r}function Ke(e,t=window.document){const n=t[nt]||(t[nt]=new Set);for(let s=0,i=e.length;s<i;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,bn))}}function M(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function fn(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function dn(e,t,n){n?e.setAttribute(t,""):e.removeAttribute(t)}function Oe(e,t){t==null?e.removeAttribute("class"):e.className=t}function hn(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=r=>i.call(e,n[1],r))}else e.addEventListener(t,n,typeof n!="function"&&n)}function gn(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let r,o;for(r=0,o=i.length;r<o;r++){const l=i[r];!l||l==="undefined"||t[l]||(it(e,l,!1),delete n[l])}for(r=0,o=s.length;r<o;r++){const l=s[r],a=!!t[l];!l||l==="undefined"||n[l]===a||!a||(it(e,l,!0),n[l]=a)}return n}function j(e,t,n){if(!t)return n?M(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let i,r;for(r in n)t[r]==null&&s.removeProperty(r),delete n[r];for(r in t)i=t[r],i!==n[r]&&(s.setProperty(r,i),n[r]=i);return n}function H(e,t={},n,s){const i={};return s||v(()=>i.children=oe(e,t.children,i.children)),v(()=>typeof t.ref=="function"&&ze(t.ref,e)),v(()=>mn(e,t,n,!0,i,!0)),i}function ze(e,t,n){return k(()=>e(t,n))}function d(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return oe(e,t,s,n);v(i=>oe(e,t(),i,n),s)}function mn(e,t,n,s,i={},r=!1){t||(t={});for(const o in i)if(!(o in t)){if(o==="children")continue;i[o]=st(e,o,null,i[o],n,r,t)}for(const o in t){if(o==="children")continue;const l=t[o];i[o]=st(e,o,l,i[o],n,r,t)}}function yn(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function it(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,r=s.length;i<r;i++)e.classList.toggle(s[i],n)}function st(e,t,n,s,i,r,o){let l,a,u,f,c;if(t==="style")return j(e,n,s);if(t==="classList")return gn(e,n,s);if(n===s)return s;if(t==="ref")r||n(e);else if(t.slice(0,3)==="on:"){const h=t.slice(3);s&&e.removeEventListener(h,s,typeof s!="function"&&s),n&&e.addEventListener(h,n,typeof n!="function"&&n)}else if(t.slice(0,10)==="oncapture:"){const h=t.slice(10);s&&e.removeEventListener(h,s,!0),n&&e.addEventListener(h,n,!0)}else if(t.slice(0,2)==="on"){const h=t.slice(2).toLowerCase(),g=ln.has(h);if(!g&&s){const y=Array.isArray(s)?s[0]:s;e.removeEventListener(h,y)}(g||n)&&(hn(e,h,n,g),g&&Ke([h]))}else if(t.slice(0,5)==="attr:")M(e,t.slice(5),n);else if(t.slice(0,5)==="bool:")dn(e,t.slice(5),n);else if((c=t.slice(0,5)==="prop:")||(u=nn.has(t))||!i&&((f=on(t,e.tagName))||(a=tn.has(t)))||(l=e.nodeName.includes("-")||"is"in o))c&&(t=t.slice(5),a=!0),t==="class"||t==="className"?Oe(e,n):l&&!a&&!u?e[yn(t)]=n:e[f||t]=n;else{const h=i&&t.indexOf(":")>-1&&an[t.split(":")[0]];h?fn(e,h,t,n):M(e,sn[t]||t,n)}return n}function bn(e){let t=e.target;const n=`$$${e.type}`,s=e.target,i=e.currentTarget,r=a=>Object.defineProperty(e,"target",{configurable:!0,value:a}),o=()=>{const a=t[n];if(a&&!t.disabled){const u=t[`${n}Data`];if(u!==void 0?a.call(t,u,e):a.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&r(t.host),!0},l=()=>{for(;o()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),e.composedPath){const a=e.composedPath();r(a[0]);for(let u=0;u<a.length-2&&(t=a[u],!!o());u++){if(t._$host){t=t._$host,l();break}if(t.parentNode===i)break}}else l();r(s)}function oe(e,t,n,s,i){for(;typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,r==="string"||r==="number"){if(r==="number"&&(t=t.toString(),t===n))return n;if(o){let l=n[0];l&&l.nodeType===3?l.data!==t&&(l.data=t):l=document.createTextNode(t),n=W(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||r==="boolean")n=W(e,n,s);else{if(r==="function")return v(()=>{let l=t();for(;typeof l=="function";)l=l();n=oe(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[],a=n&&Array.isArray(n);if(He(l,t,n,i))return v(()=>n=oe(e,l,n,s,!0)),()=>n;if(l.length===0){if(n=W(e,n,s),o)return n}else a?n.length===0?rt(e,l,s):cn(e,n,l):(n&&W(e),rt(e,l));n=l}else if(t.nodeType){if(Array.isArray(n)){if(o)return n=W(e,n,s,t);W(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function He(e,t,n,s){let i=!1;for(let r=0,o=t.length;r<o;r++){let l=t[r],a=n&&n[e.length],u;if(!(l==null||l===!0||l===!1))if((u=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))i=He(e,l,a)||i;else if(u==="function")if(s){for(;typeof l=="function";)l=l();i=He(e,Array.isArray(l)?l:[l],Array.isArray(a)?a:[a])||i}else e.push(l),i=!0;else{const f=String(l);a&&a.nodeType===3&&a.data===f?e.push(a):e.push(document.createTextNode(f))}}return i}function rt(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function W(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(i!==l){const a=l.parentNode===e;!r&&!o?a?e.replaceChild(i,l):e.insertBefore(i,n):a&&l.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}const vn=e=>typeof e=="function",xe=(e,t)=>vn(e)?e(t):e;var w;(function(e){e[e.ADD_TOAST=0]="ADD_TOAST",e[e.UPDATE_TOAST=1]="UPDATE_TOAST",e[e.UPSERT_TOAST=2]="UPSERT_TOAST",e[e.DISMISS_TOAST=3]="DISMISS_TOAST",e[e.REMOVE_TOAST=4]="REMOVE_TOAST",e[e.START_PAUSE=5]="START_PAUSE",e[e.END_PAUSE=6]="END_PAUSE"})(w||(w={}));const pe=Symbol("store-raw"),X=Symbol("store-node"),R=Symbol("store-has"),bt=Symbol("store-self");function vt(e){let t=e[I];if(!t&&(Object.defineProperty(e,I,{value:t=new Proxy(e,$n)}),!Array.isArray(e))){const n=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let i=0,r=n.length;i<r;i++){const o=n[i];s[o].get&&Object.defineProperty(e,o,{enumerable:s[o].enumerable,get:s[o].get.bind(t)})}}return t}function Q(e){let t;return e!=null&&typeof e=="object"&&(e[I]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function J(e,t=new Set){let n,s,i,r;if(n=e!=null&&e[pe])return n;if(!Q(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let o=0,l=e.length;o<l;o++)i=e[o],(s=J(i,t))!==i&&(e[o]=s)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const o=Object.keys(e),l=Object.getOwnPropertyDescriptors(e);for(let a=0,u=o.length;a<u;a++)r=o[a],!l[r].get&&(i=e[r],(s=J(i,t))!==i&&(e[r]=s))}return e}function Te(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function le(e,t,n){if(e[t])return e[t];const[s,i]=z(n,{equals:!1,internal:!0});return s.$=i,e[t]=s}function Sn(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===I||t===X||(delete n.value,delete n.writable,n.get=()=>e[I][t]),n}function St(e){Fe()&&le(Te(e,X),bt)()}function wn(e){return St(e),Reflect.ownKeys(e)}const $n={get(e,t,n){if(t===pe)return e;if(t===I)return n;if(t===Ue)return St(e),n;const s=Te(e,X),i=s[t];let r=i?i():e[t];if(t===X||t===R||t==="__proto__")return r;if(!i){const o=Object.getOwnPropertyDescriptor(e,t);Fe()&&(typeof r!="function"||e.hasOwnProperty(t))&&!(o&&o.get)&&(r=le(s,t,r)())}return Q(r)?vt(r):r},has(e,t){return t===pe||t===I||t===Ue||t===X||t===R||t==="__proto__"?!0:(Fe()&&le(Te(e,R),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:wn,getOwnPropertyDescriptor:Sn};function Z(e,t,n,s=!1){if(!s&&e[t]===n)return;const i=e[t],r=e.length;n===void 0?(delete e[t],e[R]&&e[R][t]&&i!==void 0&&e[R][t].$()):(e[t]=n,e[R]&&e[R][t]&&i===void 0&&e[R][t].$());let o=Te(e,X),l;if((l=le(o,t,i))&&l.$(()=>n),Array.isArray(e)&&e.length!==r){for(let a=e.length;a<r;a++)(l=o[a])&&l.$();(l=le(o,"length",r))&&l.$(e.length)}(l=o[bt])&&l.$()}function wt(e,t){const n=Object.keys(t);for(let s=0;s<n.length;s+=1){const i=n[s];Z(e,i,t[i])}}function xn(e,t){if(typeof t=="function"&&(t=t(e)),t=J(t),Array.isArray(t)){if(e===t)return;let n=0,s=t.length;for(;n<s;n++){const i=t[n];e[n]!==i&&Z(e,n,i)}Z(e,"length",s)}else wt(e,t)}function te(e,t,n=[]){let s,i=e;if(t.length>1){s=t.shift();const o=typeof s,l=Array.isArray(e);if(Array.isArray(s)){for(let a=0;a<s.length;a++)te(e,[s[a]].concat(t),n);return}else if(l&&o==="function"){for(let a=0;a<e.length;a++)s(e[a],a)&&te(e,[a].concat(t),n);return}else if(l&&o==="object"){const{from:a=0,to:u=e.length-1,by:f=1}=s;for(let c=a;c<=u;c+=f)te(e,[c].concat(t),n);return}else if(t.length>1){te(e[s],t,[s].concat(n));return}i=e[s],n=[s].concat(n)}let r=t[0];typeof r=="function"&&(r=r(i,n),r===i)||s===void 0&&r==null||(r=J(r),s===void 0||Q(i)&&Q(r)&&!Array.isArray(r)?wt(i,r):Z(e,s,r))}function pn(...[e,t]){const n=J(e||{}),s=Array.isArray(n),i=vt(n);function r(...o){Ht(()=>{s&&o.length===1?xn(n,o[0]):te(n,o)})}return[i,r]}const Ae=new WeakMap,$t={get(e,t){if(t===pe)return e;const n=e[t];let s;return Q(n)?Ae.get(n)||(Ae.set(n,s=new Proxy(n,$t)),s):n},set(e,t,n){return Z(e,t,J(n)),!0},deleteProperty(e,t){return Z(e,t,void 0,!0),!0}};function de(e){return t=>{if(Q(t)){let n;(n=Ae.get(t))||Ae.set(t,n=new Proxy(t,$t)),e(n)}return t}}const[G,B]=pn({toasts:[],pausedAt:void 0}),Tn=()=>{const{pausedAt:e,toasts:t}=G;if(e)return;const n=Date.now();return t.map(i=>{if(i.duration===1/0)return;const r=(i.duration||0)+i.pauseDuration-(n-i.createdAt);if(r<=0){i.visible&&D({type:w.DISMISS_TOAST,toastId:i.id});return}return setTimeout(()=>{D({type:w.DISMISS_TOAST,toastId:i.id})},r)})},se=new Map,ot=(e,t)=>{if(se.has(e))return;const n=setTimeout(()=>{se.delete(e),D({type:w.REMOVE_TOAST,toastId:e})},t);se.set(e,n)},An=e=>{const t=se.get(e);se.delete(e),t&&clearTimeout(t)},D=e=>{switch(e.type){case w.ADD_TOAST:B("toasts",i=>{const r=i;return[e.toast,...r]});break;case w.DISMISS_TOAST:const{toastId:t}=e,n=G.toasts;if(t){const i=n.find(r=>r.id===t);i&&ot(t,i.unmountDelay),B("toasts",r=>r.id===t,de(r=>r.visible=!1))}else n.forEach(i=>{ot(i.id,i.unmountDelay)}),B("toasts",i=>i.id!==void 0,de(i=>i.visible=!1));break;case w.REMOVE_TOAST:if(!e.toastId){B("toasts",[]);break}B("toasts",i=>i.filter(o=>o.id!==e.toastId));break;case w.UPDATE_TOAST:e.toast.id&&An(e.toast.id),B("toasts",i=>i.id===e.toast.id,i=>({...i,...e.toast}));break;case w.UPSERT_TOAST:G.toasts.find(i=>i.id===e.toast.id)?D({type:w.UPDATE_TOAST,toast:e.toast}):D({type:w.ADD_TOAST,toast:e.toast});break;case w.START_PAUSE:B(de(i=>{i.pausedAt=Date.now(),i.toasts.forEach(r=>{r.paused=!0})}));break;case w.END_PAUSE:const s=e.time-(G.pausedAt||0);B(de(i=>{i.pausedAt=void 0,i.toasts.forEach(r=>{r.pauseDuration+=s,r.paused=!1})}));break}},_n={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Y={id:"",icon:"",unmountDelay:500,duration:3e3,ariaProps:{role:"status","aria-live":"polite"},className:"",style:{},position:"top-right",iconTheme:{}},xt={position:"top-right",toastOptions:Y,gutter:8,containerStyle:{},containerClassName:""},he="16px",Cn={position:"fixed","z-index":9999,top:he,bottom:he,left:he,right:he,"pointer-events":"none"},On=(()=>{let e=0;return()=>String(++e)})(),kn=e=>{Ln(t=>({containerClassName:e.containerClassName??t.containerClassName,containerStyle:e.containerStyle??t.containerStyle,gutter:e.gutter??t.gutter,position:e.position??t.position,toastOptions:{...e.toastOptions}}))},En=(e,t)=>{const s=e.includes("top")?{top:0,"margin-top":`${t}px`}:{bottom:0,"margin-bottom":`${t}px`},i=e.includes("center")?{"justify-content":"center"}:e.includes("right")?{"justify-content":"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:"all 230ms cubic-bezier(.21,1.02,.73,1)",...s,...i}},Pn=(e,t)=>{const n=e.getBoundingClientRect();n.height!==t.height&&D({type:w.UPDATE_TOAST,toast:{id:t.id,height:n.height}})},Nn=(e,t)=>{const{toasts:n}=G,s=q().gutter||xt.gutter||8,i=n.filter(a=>(a.position||t)===t&&a.height),r=i.findIndex(a=>a.id===e.id),o=i.filter((a,u)=>u<r&&a.visible).length;return i.slice(0,o).reduce((a,u)=>a+s+(u.height||0),0)},Mn=(e,t)=>(e.position||t).includes("top")?1:-1,Dn={display:"flex","align-items":"center",color:"#363636",background:"white","box-shadow":"0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05)","max-width":"350px","pointer-events":"auto",padding:"8px 10px","border-radius":"4px","line-height":"1.3","will-change":"transform"},In={display:"flex","align-items":"center",flex:"1 1 auto",margin:"4px 10px","white-space":"pre-line"},ge={"flex-shrink":0,"min-width":"20px","min-height":"20px",display:"flex","align-items":"center","justify-content":"center","text-align":"center"},_e=e=>({calcMode:"spline",keyTimes:"0; 1",keySplines:e}),[q,Ln]=z(xt),jn=(e,t="blank",n)=>{var s,i,r;return{...Y,...q().toastOptions,...n,type:t,message:e,pauseDuration:0,createdAt:Date.now(),visible:!0,id:n.id||On(),paused:!1,style:{...Y.style,...(s=q().toastOptions)==null?void 0:s.style,...n.style},duration:n.duration||((i=q().toastOptions)==null?void 0:i.duration)||_n[t],position:n.position||((r=q().toastOptions)==null?void 0:r.position)||q().position||Y.position}},ce=e=>(t,n={})=>ne(()=>{const s=G.toasts.find(r=>r.id===n.id),i=jn(t,e,{...s,duration:void 0,...n});return D({type:w.UPSERT_TOAST,toast:i}),i.id}),T=(e,t)=>ce("blank")(e,t);k(()=>T);T.error=ce("error");T.success=ce("success");T.loading=ce("loading");T.custom=ce("custom");T.dismiss=e=>{D({type:w.DISMISS_TOAST,toastId:e})};T.promise=(e,t,n)=>{const s=T.loading(t.loading,{...n});return e.then(i=>(T.success(xe(t.success,i),{id:s,...n}),i)).catch(i=>{T.error(xe(t.error,i),{id:s,...n})}),e};T.remove=e=>{D({type:w.REMOVE_TOAST,toastId:e})};var Rn=$("<div><style>.sldt-active{z-index:9999;}.sldt-active>*{pointer-events:auto;}");const Un=e=>(Se(()=>{kn(e)}),Se(()=>{const t=Tn();ut(()=>{t&&t.forEach(n=>n&&clearTimeout(n))})}),(()=>{var t=Rn();return t.firstChild,d(t,m(ye,{get each(){return G.toasts},children:n=>m(Vn,{toast:n})}),null),v(n=>{var s={...Cn,...e.containerStyle},i=e.containerClassName;return n.e=j(t,s,n.e),i!==n.t&&Oe(t,n.t=i),n},{e:void 0,t:void 0}),t})());var me=$("<div>"),Fn=$("<div><div>");const Bn=e=>{let t;return Se(()=>{if(!t)return;const n=Mn(e.toast,e.position);e.toast.visible?t.animate([{transform:`translate3d(0,${n*-200}%,0) scale(.6)`,opacity:.5},{transform:"translate3d(0,0,0) scale(1)",opacity:1}],{duration:350,fill:"forwards",easing:"cubic-bezier(.21,1.02,.73,1)"}):t.animate([{transform:"translate3d(0,0,-1px) scale(1)",opacity:1},{transform:`translate3d(0,${n*-150}%,-1px) scale(.4)`,opacity:0}],{duration:400,fill:"forwards",easing:"cubic-bezier(.06,.71,.55,1)"})}),(()=>{var n=Fn(),s=n.firstChild,i=t;return typeof i=="function"?ze(i,n):t=n,d(n,m(Zt,{get children(){return[m(fe,{get when(){return e.toast.icon},get children(){var r=me();return d(r,()=>e.toast.icon),v(o=>j(r,ge,o)),r}}),m(fe,{get when(){return e.toast.type==="loading"},get children(){var r=me();return d(r,m(Qn,K(()=>e.toast.iconTheme))),v(o=>j(r,ge,o)),r}}),m(fe,{get when(){return e.toast.type==="success"},get children(){var r=me();return d(r,m(Wn,K(()=>e.toast.iconTheme))),v(o=>j(r,ge,o)),r}}),m(fe,{get when(){return e.toast.type==="error"},get children(){var r=me();return d(r,m(Xn,K(()=>e.toast.iconTheme))),v(o=>j(r,ge,o)),r}})]}}),s),H(s,K(()=>e.toast.ariaProps),!1,!0),d(s,()=>xe(e.toast.message,e.toast)),v(r=>{var o=e.toast.className,l={...Dn,...e.toast.style},a=In;return o!==r.e&&Oe(n,r.e=o),r.t=j(n,l,r.t),r.a=j(s,a,r.a),r},{e:void 0,t:void 0,a:void 0}),n})()};var Hn=$("<div>");const Vn=e=>{const t=()=>{const i=e.toast.position||Y.position,r=Nn(e.toast,i);return En(i,r)},n=L(()=>t());let s;return Vt(()=>{s&&Pn(s,e.toast)}),(()=>{var i=Hn();i.addEventListener("mouseleave",()=>D({type:w.END_PAUSE,time:Date.now()})),i.addEventListener("mouseenter",()=>D({type:w.START_PAUSE,time:Date.now()}));var r=s;return typeof r=="function"?ze(r,i):s=i,d(i,(()=>{var o=L(()=>e.toast.type==="custom");return()=>o()?xe(e.toast.message,e.toast):m(Bn,{get toast(){return e.toast},get position(){return e.toast.position||Y.position}})})()),v(o=>{var l=n(),a=e.toast.visible?"sldt-active":"";return o.e=j(i,l,o.e),a!==o.t&&Oe(i,o.t=a),o},{e:void 0,t:void 0}),i})()};var Kn=$('<svg><circle cx=16 cy=16 r=0><animate attributeName=opacity values="0; 1; 1"></animate><animate attributeName=r values="0; 17.5; 16"></svg>',!1,!0),zn=$('<svg><circle cx=16 cy=16 r=12 opacity=0><animate attributeName=opacity values="1; 0"></animate><animate attributeName=r values="12; 26"></svg>',!1,!0);const pt=e=>{const t={dur:"0.35s",begin:"100ms",fill:"freeze",calcMode:"spline",keyTimes:"0; 0.6; 1",keySplines:"0.25 0.71 0.4 0.88; .59 .22 .87 .63"};return(()=>{var n=Kn(),s=n.firstChild,i=s.nextSibling;return H(s,t,!0,!1),H(i,t,!0,!1),v(()=>M(n,"fill",e.fill)),n})()},Tt=e=>{const t={dur:"1s",begin:e.begin||"320ms",fill:"freeze",..._e("0.0 0.0 0.2 1")};return(()=>{var n=zn(),s=n.firstChild,i=s.nextSibling;return H(s,t,!0,!1),H(i,t,!0,!1),v(()=>M(n,"fill",e.fill)),n})()};var Gn=$('<svg viewBox="0 0 32 32"width=1.25rem height=1.25rem><path fill=none stroke-width=4 stroke-dasharray=22 stroke-dashoffset=22 stroke-linecap=round stroke-miterlimit=10 d=M9.8,17.2l3.8,3.6c0.1,0.1,0.3,0.1,0.4,0l9.6-9.7><animate attributeName=stroke-dashoffset values=22;0 dur=0.25s begin=250ms fill=freeze>');const Wn=e=>{const t=e.primary||"#34C759";return(()=>{var n=Gn(),s=n.firstChild,i=s.firstChild;return n.style.setProperty("overflow","visible"),d(n,m(pt,{fill:t}),s),d(n,m(Tt,{fill:t,begin:"350ms"}),s),H(i,K(()=>_e("0.0, 0.0, 0.58, 1.0")),!0,!1),v(()=>M(s,"stroke",e.secondary||"#FCFCFC")),n})()};var qn=$('<svg viewBox="0 0 32 32"width=1.25rem height=1.25rem><path fill=none stroke-width=4 stroke-dasharray=9 stroke-dashoffset=9 stroke-linecap=round d=M16,7l0,9><animate attributeName=stroke-dashoffset values=9;0 dur=0.2s begin=250ms fill=freeze></animate></path><circle cx=16 cy=23 r=2.5 opacity=0><animate attributeName=opacity values=0;1 dur=0.25s begin=350ms fill=freeze>');const Xn=e=>{const t=e.primary||"#FF3B30";return(()=>{var n=qn(),s=n.firstChild,i=s.firstChild,r=s.nextSibling,o=r.firstChild;return n.style.setProperty("overflow","visible"),d(n,m(pt,{fill:t}),s),d(n,m(Tt,{fill:t}),s),H(i,K(()=>_e("0.0, 0.0, 0.58, 1.0")),!0,!1),H(o,K(()=>_e("0.0, 0.0, 0.58, 1.0")),!0,!1),v(l=>{var a=e.secondary||"#FFFFFF",u=e.secondary||"#FFFFFF";return a!==l.e&&M(s,"stroke",l.e=a),u!==l.t&&M(r,"fill",l.t=u),l},{e:void 0,t:void 0}),n})()};var Yn=$('<svg viewBox="0 0 32 32"width=1.25rem height=1.25rem><path fill=none stroke-width=4 stroke-miterlimit=10 d=M16,6c3,0,5.7,1.3,7.5,3.4c1.5,1.8,2.5,4,2.5,6.6c0,5.5-4.5,10-10,10S6,21.6,6,16S10.5,6,16,6z></path><path fill=none stroke-width=4 stroke-linecap=round stroke-miterlimit=10 d=M16,6c3,0,5.7,1.3,7.5,3.4c0.6,0.7,1.1,1.4,1.5,2.2><animateTransform attributeName=transform type=rotate from="0 16 16"to="360 16 16"dur=0.75s repeatCount=indefinite>');const Qn=e=>(()=>{var t=Yn(),n=t.firstChild,s=n.nextSibling;return t.style.setProperty("overflow","visible"),v(i=>{var r=e.primary||"#E5E7EB",o=e.secondary||"#4b5563";return r!==i.e&&M(n,"stroke",i.e=r),o!==i.t&&M(s,"stroke",i.t=o),i},{e:void 0,t:void 0}),t})();class At{constructor(t){Ie(this,"maxCount");Ie(this,"allMoves");this.maxCount=t,this.allMoves=["left-left","left-right","right-left","right-right"];for(let n=0;n<t;n++)this.allMoves.push(n)}stateToIndex([t,n,s,i]){return t+this.maxCount*(n+this.maxCount*(s+this.maxCount*i))}indexToState(t){const n=t%this.maxCount;t=Math.floor(t/this.maxCount);const s=t%this.maxCount;t=Math.floor(t/this.maxCount);const i=t%this.maxCount;t=Math.floor(t/this.maxCount);const r=t%this.maxCount;return[n,s,i,r]}passTurn(t){const[n,s,i,r]=this.indexToState(t);return this.stateToIndex([i,r,n,s])}action(t,n){let[s,i,r,o]=this.indexToState(t);if(typeof n=="number"){if(s===n||i===n||n<0||n>=this.maxCount||s+i-n>=this.maxCount||s+i-n<0)return;i=s+i-n,s=n}else switch(n){case"left-left":if(s<1||r<1)return;r+=s,r>=this.maxCount&&(r=0);break;case"left-right":if(s<1||o<1)return;o+=s,o>=this.maxCount&&(o=0);break;case"right-left":if(i<1||r<1)return;r+=i,r>=this.maxCount&&(r=0);break;case"right-right":if(i<1||o<1)return;o+=i,o>=this.maxCount&&(o=0);break;default:return}return this.stateToIndex([r,o,s,i])}fillTableCell(t,n,s){if(s&&console.log("-- Traverse",this.indexToState(n)),t[n]!==void 0)return!1;let i=[],r=[],o=[];for(const l of this.allMoves){const a=this.action(n,l);if(a!==void 0){if(s&&console.log("Check move",l,this.indexToState(a),t[a]),o.push(l),t[a]===void 0)r.push(l);else if(t[a].win===!1){i.push(l);break}}}if(i.length>0){let l=0;for(let a=1;a<i.length;a++)t[this.action(n,i[a])].depth<t[this.action(n,i[l])].depth&&(l=a);return t[n]={win:!0,nextMove:i[l],depth:t[this.action(n,i[l])].depth+1},!0}else if(r.length===0){let l=0;for(const a of o)l=Math.max(l,t[this.action(n,a)].depth);return t[n]={win:!1,nextMove:r[0],depth:l},!0}else if(o.length===1){const l=o[0],a=this.action(n,l);return a===void 0||t[a]===void 0?!1:(t[n]={win:!t[a].win,nextMove:l,depth:t[a].depth+1},!0)}return!1}table(){const t=Array(this.maxCount**4).fill(void 0);for(let i=0;i<this.maxCount;i++)for(let r=0;r<this.maxCount;r++)t[this.stateToIndex([0,0,i,r])]={win:!1,nextMove:"end",depth:0},t[this.stateToIndex([i,r,0,0])]={win:!0,nextMove:"end",depth:0};let n=!0,s=0;for(;n;){n=!1,s++;const i=this.maxCount**4;for(let r=0;r<i;r++)n=this.fillTableCell(t,r)||n}return console.log("Finished in",s,"iterations"),this.fillTableCell(t,this.stateToIndex([1,1,1,1]),!0),t}findBest(t,n){let s=[],i=[],r=[];for(const o of this.allMoves){const l=this.action(n,o);if(l!==void 0)if(s.push(o),console.log("Check",o,this.indexToState(l),t[l]),t[l]===void 0){r.push(o);continue}else t[l].win===!1&&i.push(o)}if(i.length>0){let o=0;for(let l=1;l<i.length;l++)t[this.action(n,i[l])].depth<t[this.action(n,i[o])].depth&&(o=l);return i[o]}return r.length>0?r[Math.floor(Math.random()*r.length)]:s[Math.floor(Math.random()*s.length)]}}var lt=$("<span> * "),Jn=$("<button>CPU First"),Zn=$("<div><div class=board><h2>CPU Player</h2><div class=half><div>Left: <code></code></div><div>Right: <code></code></div></div></div><div class=board><h2>Human Player</h2><div class=half><div>Left: <code></code></div><div>Right: <code></code></div></div></div><div><h3> Action </h3><div><button>Left to Left</button><button>Left to Right</button><button>Right to Left</button><button>Right to Right</button></div><div></div><br></div><div><h2> History </h2><ol></ol></div><div><button class=outline>Reset</button></div><hr>"),ei=$("<button class=secondary>Left to "),ti=$("<li>");const ni=e=>new Promise(t=>setTimeout(t,e)),Re=e=>{const t=e.turn==="cpu"?"CPU":"Human",n=e.turn==="cpu"?"Human":"CPU";if(typeof e.move=="number")return`${t} re-split (${e.prev[0]}, ${e.prev[1]}) to (${e.next[2]}, ${e.next[3]})! (${n}: (${e.next[0]}, ${e.next[1]}))`;if(e.move==="end")return`${t} GG!`;{const[s,i]=e.move.split("-"),[r,o]=[s,i].map(l=>l==="left"?0:1);return`${t} hit ${i}(${e.prev[2+o]}->${e.next[o]}) side by ${s}(${e.prev[r]})!`}},ii=()=>{const e=new At(5),t=e.table(),[n,s]=z(!0),[i,r]=z([1,1,1,1]),[o,l]=z([]),a=()=>{r([1,1,1,1]),l([]),s(!0)},u=g=>e.action(e.stateToIndex(i()),g)!==void 0,f=g=>{const y=e.findBest(t,g),S=e.action(g,y);if(S===void 0){T.error("Invalid move");return}r(e.indexToState(S));const _={turn:"cpu",prev:e.indexToState(g),next:e.indexToState(S),move:y};l(E=>[...E,_]),s(!0),T(Re(_))},c=async g=>{const y=i(),S=e.action(e.stateToIndex(y),g);if(S===void 0){T.error("Invalid move");return}r(e.indexToState(e.passTurn(S)));const _={turn:"human",prev:y,next:e.indexToState(S),move:g};l(E=>[...E,_]),s(!1),T(Re(_)),await ni(1e3),f(S)},h=async()=>{T("CPU First");const g=e.passTurn(e.stateToIndex(i()));f(g)};return(()=>{var g=Zn(),y=g.firstChild,S=y.firstChild;S.firstChild;var _=S.nextSibling,E=_.firstChild,C=E.firstChild,O=C.nextSibling,P=E.nextSibling,F=P.firstChild,ke=F.nextSibling,Ge=y.nextSibling,Ee=Ge.firstChild;Ee.firstChild;var _t=Ee.nextSibling,We=_t.firstChild,Ct=We.firstChild,Ot=Ct.nextSibling,kt=We.nextSibling,Et=kt.firstChild,Pt=Et.nextSibling,Pe=Ge.nextSibling,Nt=Pe.firstChild,qe=Nt.nextSibling,Ne=qe.firstChild,Me=Ne.nextSibling,De=Me.nextSibling,Xe=De.nextSibling,Ye=qe.nextSibling;Ye.nextSibling;var Qe=Pe.nextSibling,Mt=Qe.firstChild,Dt=Mt.nextSibling,It=Qe.nextSibling,Lt=It.firstChild;return d(S,m(ie,{get when(){return!n()},get children(){return lt()}}),null),d(O,()=>i()[2]),d(ke,()=>i()[3]),d(Ee,m(ie,{get when(){return n()},get children(){return lt()}}),null),d(Ot,()=>i()[0]),d(Pt,()=>i()[1]),Ne.$$click=()=>c("left-left"),Me.$$click=()=>c("left-right"),De.$$click=()=>c("right-left"),Xe.$$click=()=>c("right-right"),d(Ye,()=>[...Array(e.maxCount).keys()].map(p=>(()=>{var N=ei();return N.firstChild,N.$$click=()=>c(p),d(N,p,null),v(()=>N.disabled=!n()||!u(p)),N})())),d(Pe,m(ie,{get when(){return o().length===0},get children(){var p=Jn();return p.$$click=()=>h(),p}}),null),d(Dt,()=>o().map(p=>(()=>{var N=ti();return d(N,()=>Re(p)),N})())),Lt.$$click=a,v(p=>{var N=!n()||!u("left-left"),Je=!n()||!u("left-right"),Ze=!n()||!u("right-left"),et=!n()||!u("right-right");return N!==p.e&&(Ne.disabled=p.e=N),Je!==p.t&&(Me.disabled=p.t=Je),Ze!==p.a&&(De.disabled=p.a=Ze),et!==p.o&&(Xe.disabled=p.o=et),p},{e:void 0,t:void 0,a:void 0,o:void 0}),g})()};Ke(["click"]);var si=$("<table><thead><tr><th>I / Op.</th></tr></thead><tbody>"),ri=$("<th>"),oi=$("<tr><td>"),li=$("<b>(<!>)"),ai=$("<td>");const ci=()=>{const e=new At(5),t=e.table(),n=s=>{const i=s%e.maxCount,r=Math.floor(s/e.maxCount);return`(${i},${r})`};return(()=>{var s=si(),i=s.firstChild,r=i.firstChild;r.firstChild;var o=i.nextSibling;return d(r,m(ye,{get each(){return[...Array(e.maxCount*e.maxCount).keys()]},children:l=>(()=>{var a=ri();return d(a,()=>n(l)),a})()}),null),d(o,m(ye,{get each(){return[...Array(e.maxCount*e.maxCount).keys()]},children:l=>(()=>{var a=oi(),u=a.firstChild;return d(u,()=>n(l)),d(a,m(ye,{get each(){return[...Array(e.maxCount*e.maxCount).keys()]},children:f=>(()=>{var c=ai();return d(c,m(ie,{get when(){return t[l+f*e.maxCount**2]},get children(){var h=li(),g=h.firstChild,y=g.nextSibling;return y.nextSibling,d(h,()=>t[l+f*e.maxCount**2].win?"Win":"Lose",g),d(h,()=>t[l+f*e.maxCount**2].depth,y),v(()=>M(h,"title",String(t[l+f*e.maxCount**2].nextMove))),h}})),c})()}),null),a})()})),s})()};var ui=$("<main class=container><h1> Chopstick Game </h1><a href=https://github.com/lumiknit/_w_chopsticks>🔗 Github (Description)</a><h1> All Possible Cases </h1><button>");function fi(){const[e,t]=z(!1);return[m(Un,{}),(()=>{var n=ui(),s=n.firstChild,i=s.nextSibling,r=i.nextSibling,o=r.nextSibling;return d(n,m(ii,{}),r),o.$$click=()=>t(!e()),d(o,()=>e()?"Hide":"Show"),d(n,m(ie,{get when(){return e()},get children(){return m(ci,{})}}),null),n})()]}Ke(["click"]);const di=document.getElementById("root");un(()=>m(fi,{}),di);
