(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();const On=(e,t)=>e===t,Ne=Symbol("solid-proxy"),ie={equals:On};let Hn=Vt;const L=1,le=2,kt={owned:null,cleanups:null,context:null,owner:null};var m=null;let Te=null,Ln=null,b=null,$=null,H=null,ge=0;function Nn(e,t){const n=b,i=m,l=e.length===0,s=t===void 0?i:t,o=l?kt:{owned:null,cleanups:null,context:s?s.context:null,owner:s},r=l?e:()=>e(()=>Re(()=>Se(o)));m=o,b=null;try{return Q(r,!0)}finally{b=n,m=i}}function Ee(e,t){t=t?Object.assign({},ie,t):ie;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=l=>(typeof l=="function"&&(l=l(n.value)),Ht(n,l));return[Ot.bind(n),i]}function B(e,t,n){const i=Lt(e,t,!1,L);be(i)}function Vn(e,t,n){n=n?Object.assign({},ie,n):ie;const i=Lt(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,be(i),Ot.bind(i)}function Re(e){if(b===null)return e();const t=b;b=null;try{return e()}finally{b=t}}function Ot(){if(this.sources&&this.state)if(this.state===L)be(this);else{const e=$;$=null,Q(()=>se(this),!1),$=e}if(b){const e=this.observers?this.observers.length:0;b.sources?(b.sources.push(this),b.sourceSlots.push(e)):(b.sources=[this],b.sourceSlots=[e]),this.observers?(this.observers.push(b),this.observerSlots.push(b.sources.length-1)):(this.observers=[b],this.observerSlots=[b.sources.length-1])}return this.value}function Ht(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&Q(()=>{for(let l=0;l<e.observers.length;l+=1){const s=e.observers[l],o=Te&&Te.running;o&&Te.disposed.has(s),(o?!s.tState:!s.state)&&(s.pure?$.push(s):H.push(s),s.observers&&jt(s)),o||(s.state=L)}if($.length>1e6)throw $=[],new Error},!1)),t}function be(e){if(!e.fn)return;Se(e);const t=ge;jn(e,e.value,t)}function jn(e,t,n){let i;const l=m,s=b;b=m=e;try{i=e.fn(t)}catch(o){return e.pure&&(e.state=L,e.owned&&e.owned.forEach(Se),e.owned=null),e.updatedAt=n+1,Bt(o)}finally{b=s,m=l}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ht(e,i):e.value=i,e.updatedAt=n)}function Lt(e,t,n,i=L,l){const s={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:m?m.context:null,pure:n};return m===null||m!==kt&&(m.owned?m.owned.push(s):m.owned=[s]),s}function Nt(e){if(e.state===0)return;if(e.state===le)return se(e);if(e.suspense&&Re(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ge);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===L)be(e);else if(e.state===le){const i=$;$=null,Q(()=>se(e,t[0]),!1),$=i}}function Q(e,t){if($)return e();let n=!1;t||($=[]),H?n=!0:H=[],ge++;try{const i=e();return Bn(n),i}catch(i){n||(H=null),$=null,Bt(i)}}function Bn(e){if($&&(Vt($),$=null),e)return;const t=H;H=null,t.length&&Q(()=>Hn(t),!1)}function Vt(e){for(let t=0;t<e.length;t++)Nt(e[t])}function se(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const l=i.state;l===L?i!==t&&(!i.updatedAt||i.updatedAt<ge)&&Nt(i):l===le&&se(i,t)}}}function jt(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=le,n.pure?$.push(n):H.push(n),n.observers&&jt(n))}}function Se(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),l=n.observers;if(l&&l.length){const s=l.pop(),o=n.observerSlots.pop();i<l.length&&(s.sourceSlots[o]=i,l[i]=s,n.observerSlots[i]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)Se(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Wn(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Bt(e,t=m){throw Wn(e)}let Rn=!1;function g(e,t){return Re(()=>e(t||{}))}function te(){return!0}const qn={get(e,t,n){return t===Ne?n:e.get(t)},has(e,t){return t===Ne?!0:e.has(t)},set:te,deleteProperty:te,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:te,deleteProperty:te}},ownKeys(e){return e.keys()}};function ke(e){return(e=typeof e=="function"?e():e)?e:{}}function Dn(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function v(...e){let t=!1;for(let o=0;o<e.length;o++){const r=e[o];t=t||!!r&&Ne in r,e[o]=typeof r=="function"?(t=!0,Vn(r)):r}if(t)return new Proxy({get(o){for(let r=e.length-1;r>=0;r--){const c=ke(e[r])[o];if(c!==void 0)return c}},has(o){for(let r=e.length-1;r>=0;r--)if(o in ke(e[r]))return!0;return!1},keys(){const o=[];for(let r=0;r<e.length;r++)o.push(...Object.keys(ke(e[r])));return[...new Set(o)]}},qn);const n={},i=Object.create(null);for(let o=e.length-1;o>=0;o--){const r=e[o];if(!r)continue;const c=Object.getOwnPropertyNames(r);for(let f=c.length-1;f>=0;f--){const a=c[f];if(a==="__proto__"||a==="constructor")continue;const u=Object.getOwnPropertyDescriptor(r,a);if(!i[a])i[a]=u.get?{enumerable:!0,configurable:!0,get:Dn.bind(n[a]=[u.get.bind(r)])}:u.value!==void 0?u:void 0;else{const d=n[a];d&&(u.get?d.push(u.get.bind(r)):u.value!==void 0&&d.push(()=>u.value))}}}const l={},s=Object.keys(i);for(let o=s.length-1;o>=0;o--){const r=s[o],c=i[r];c&&c.get?Object.defineProperty(l,r,c):l[r]=c?c.value:void 0}return l}function In(e,t,n){let i=n.length,l=t.length,s=i,o=0,r=0,c=t[l-1].nextSibling,f=null;for(;o<l||r<s;){if(t[o]===n[r]){o++,r++;continue}for(;t[l-1]===n[s-1];)l--,s--;if(l===o){const a=s<i?r?n[r-1].nextSibling:n[s-r]:c;for(;r<s;)e.insertBefore(n[r++],a)}else if(s===r)for(;o<l;)(!f||!f.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[s-1]&&n[r]===t[l-1]){const a=t[--l].nextSibling;e.insertBefore(n[r++],t[o++].nextSibling),e.insertBefore(n[--s],a),t[l]=n[s]}else{if(!f){f=new Map;let u=r;for(;u<s;)f.set(n[u],u++)}const a=f.get(t[o]);if(a!=null)if(r<a&&a<s){let u=o,d=1,p;for(;++u<l&&u<s&&!((p=f.get(t[u]))==null||p!==a+d);)d++;if(d>a-r){const C=t[o];for(;r<a;)e.insertBefore(n[r++],C)}else e.replaceChild(n[r++],t[o++])}else o++;else t[o++].remove()}}}const _t="_$DX_DELEGATE";function Un(e,t,n,i={}){let l;return Nn(s=>{l=s,t===document?e():h(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{l(),t.textContent=""}}function qe(e,t,n){let i;const l=()=>{const o=document.createElement("template");return o.innerHTML=e,o.content.firstChild},s=()=>(i||(i=l())).cloneNode(!0);return s.cloneNode=s,s}function Gn(e,t=window.document){const n=t[_t]||(t[_t]=new Set);for(let i=0,l=e.length;i<l;i++){const s=e[i];n.has(s)||(n.add(s),t.addEventListener(s,Fn))}}function h(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return re(e,t,i,n);B(l=>re(e,t(),l,n),i)}function Fn(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const i=n[t];if(i&&!n.disabled){const l=n[`${t}Data`];if(l!==void 0?i.call(n,l,e):i.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function re(e,t,n,i,l){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,o=i!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,s==="string"||s==="number")if(s==="number"&&(t=t.toString()),o){let r=n[0];r&&r.nodeType===3?r.data!==t&&(r.data=t):r=document.createTextNode(t),n=j(e,n,i,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||s==="boolean")n=j(e,n,i);else{if(s==="function")return B(()=>{let r=t();for(;typeof r=="function";)r=r();n=re(e,r,n,i)}),()=>n;if(Array.isArray(t)){const r=[],c=n&&Array.isArray(n);if(Ve(r,t,n,l))return B(()=>n=re(e,r,n,i,!0)),()=>n;if(r.length===0){if(n=j(e,n,i),o)return n}else c?n.length===0?Ct(e,r,i):In(e,n,r):(n&&j(e),Ct(e,r));n=r}else if(t.nodeType){if(Array.isArray(n)){if(o)return n=j(e,n,i,t);j(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Ve(e,t,n,i){let l=!1;for(let s=0,o=t.length;s<o;s++){let r=t[s],c=n&&n[e.length],f;if(!(r==null||r===!0||r===!1))if((f=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))l=Ve(e,r,c)||l;else if(f==="function")if(i){for(;typeof r=="function";)r=r();l=Ve(e,Array.isArray(r)?r:[r],Array.isArray(c)?c:[c])||l}else e.push(r),l=!0;else{const a=String(r);c&&c.nodeType===3&&c.data===a?e.push(c):e.push(document.createTextNode(a))}}return l}function Ct(e,t,n=null){for(let i=0,l=t.length;i<l;i++)e.insertBefore(t[i],n)}function j(e,t,n,i){if(n===void 0)return e.textContent="";const l=i||document.createTextNode("");if(t.length){let s=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(l!==r){const c=r.parentNode===e;!s&&!o?c?e.replaceChild(l,r):e.insertBefore(l,n):c&&r.remove()}else s=!0}}else e.insertBefore(l,n);return[l]}const Wt=(e,[t,n,i])=>[e*t,e*n,e*i],Rt=([e,t,n])=>e*.299+t*.587+n*.114,Kn=e=>{const[t,n,i]=Wt(.00392156862745098,e),l=Math.max(t,n,i),s=l-Math.min(t,n,i),o=s&&(l==t?(n-i)/s:l==n?2+(i-t)/s:4+(t-n)/s);return[60*(o<0?o+6:o),l&&s/l,l]},X=([e,t,n])=>{const i=(l,s=(l+e/60)%6)=>n-n*t*Math.max(Math.min(s,4-s,1),0);return Wt(255,[i(5),i(3),i(1)])},qt=([e,t,n],i=t*Math.min(n,1-n)+n)=>[e,i?2-2*n/i:0,i],Y=([e,t,n],i=n-n*t/2,l=Math.min(i,1-i))=>[e,l?(n-i)/l:0,i],Dt=([e,t,n])=>`hsl(${e} ${100*t}%${100*n}%)`,Xn=e=>Dt(Y(e)),It=e=>`rgb(${e[0]},${e[1]},${e[2]})`,Oe=e=>`#${e.map(t=>Math.floor(t).toString(16).padStart(2,"0")).join("")}`,N={width:"100%",height:"100%"},De={position:"absolute",left:"0",top:"0"},Yn={"touch-action":"none","-webkit-touch-callout":"none","-webkit-tap-highlight-color":"transparent","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"},Ut="conic-gradient(hsl(0 100% 50%) 0,hsl(120 100% 50%) 120deg,hsl(240 100% 50%) 240deg,hsl(0 100% 50%) 360deg)",Qn=(e,t)=>e===t,oe=Symbol("solid-proxy"),Pt={equals:Qn};let Gt=Ft;const k=1,ce=2,Jn={owned:null,cleanups:null,context:null,owner:null};var _=null;let He=null,Zn=null,S=null,y=null,M=null,$e=0;function P(e,t,n){const i=Ie(e,t,!1,k);J(i)}function zn(e,t,n){Gt=ri;const i=Ie(e,t,!1,k);i.user=!0,M?M.push(i):J(i)}function ei(e,t,n){n=n?Object.assign({},Pt,n):Pt;const i=Ie(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,J(i),ni.bind(i)}function ye(e){if(S===null)return e();const t=S;S=null;try{return e()}finally{S=t}}function ti(e){zn(()=>ye(e))}function ni(){if(this.sources&&this.state)if(this.state===k)J(this);else{const e=y;y=null,ve(()=>fe(this)),y=e}if(S){const e=this.observers?this.observers.length:0;S.sources?(S.sources.push(this),S.sourceSlots.push(e)):(S.sources=[this],S.sourceSlots=[e]),this.observers?(this.observers.push(S),this.observerSlots.push(S.sources.length-1)):(this.observers=[S],this.observerSlots=[S.sources.length-1])}return this.value}function ii(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&ve(()=>{for(let l=0;l<e.observers.length;l+=1){const s=e.observers[l],o=He&&He.running;o&&He.disposed.has(s),(o?!s.tState:!s.state)&&(s.pure?y.push(s):M.push(s),s.observers&&Kt(s)),o||(s.state=k)}if(y.length>1e6)throw y=[],new Error})),t}function J(e){if(!e.fn)return;Ue(e);const t=$e;li(e,e.value,t)}function li(e,t,n){let i;const l=_,s=S;S=_=e;try{i=e.fn(t)}catch(o){return e.pure&&(e.state=k,e.owned&&e.owned.forEach(Ue),e.owned=null),e.updatedAt=n+1,Xt(o)}finally{S=s,_=l}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ii(e,i):e.value=i,e.updatedAt=n)}function Ie(e,t,n,i=k,l){const s={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:_,context:_?_.context:null,pure:n};return _===null||_!==Jn&&(_.owned?_.owned.push(s):_.owned=[s]),s}function ae(e){if(e.state===0)return;if(e.state===ce)return fe(e);if(e.suspense&&ye(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<$e);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===k)J(e);else if(e.state===ce){const i=y;y=null,ve(()=>fe(e,t[0])),y=i}}function ve(e,t){if(y)return e();let n=!1;y=[],M?n=!0:M=[],$e++;try{const i=e();return si(n),i}catch(i){n||(M=null),y=null,Xt(i)}}function si(e){if(y&&(Ft(y),y=null),e)return;const t=M;M=null,t.length&&ve(()=>Gt(t))}function Ft(e){for(let t=0;t<e.length;t++)ae(e[t])}function ri(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:ae(i)}for(t=0;t<n;t++)ae(e[t])}function fe(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const l=i.state;l===k?i!==t&&(!i.updatedAt||i.updatedAt<$e)&&ae(i):l===ce&&fe(i,t)}}}function Kt(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=ce,n.pure?y.push(n):M.push(n),n.observers&&Kt(n))}}function Ue(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),l=n.observers;if(l&&l.length){const s=l.pop(),o=n.observerSlots.pop();i<l.length&&(s.sourceSlots[o]=i,l[i]=s,n.observerSlots[i]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)Ue(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function oi(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Xt(e,t=_){throw oi(e)}function x(e,t){return ye(()=>e(t||{}))}function ne(){return!0}const je={get(e,t,n){return t===oe?n:e.get(t)},has(e,t){return t===oe?!0:e.has(t)},set:ne,deleteProperty:ne,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ne,deleteProperty:ne}},ownKeys(e){return e.keys()}};function Le(e){return(e=typeof e=="function"?e():e)?e:{}}function ci(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function w(...e){let t=!1;for(let o=0;o<e.length;o++){const r=e[o];t=t||!!r&&oe in r,e[o]=typeof r=="function"?(t=!0,ei(r)):r}if(t)return new Proxy({get(o){for(let r=e.length-1;r>=0;r--){const c=Le(e[r])[o];if(c!==void 0)return c}},has(o){for(let r=e.length-1;r>=0;r--)if(o in Le(e[r]))return!0;return!1},keys(){const o=[];for(let r=0;r<e.length;r++)o.push(...Object.keys(Le(e[r])));return[...new Set(o)]}},je);const n={},i=Object.create(null);for(let o=e.length-1;o>=0;o--){const r=e[o];if(!r)continue;const c=Object.getOwnPropertyNames(r);for(let f=c.length-1;f>=0;f--){const a=c[f];if(a==="__proto__"||a==="constructor")continue;const u=Object.getOwnPropertyDescriptor(r,a);if(!i[a])i[a]=u.get?{enumerable:!0,configurable:!0,get:ci.bind(n[a]=[u.get.bind(r)])}:u.value!==void 0?u:void 0;else{const d=n[a];d&&(u.get?d.push(u.get.bind(r)):u.value!==void 0&&d.push(()=>u.value))}}}const l={},s=Object.keys(i);for(let o=s.length-1;o>=0;o--){const r=s[o],c=i[r];c&&c.get?Object.defineProperty(l,r,c):l[r]=c?c.value:void 0}return l}function Ge(e,...t){if(oe in e){const l=new Set(t.length>1?t.flat():t[0]),s=t.map(o=>new Proxy({get(r){return o.includes(r)?e[r]:void 0},has(r){return o.includes(r)&&r in e},keys(){return o.filter(r=>r in e)}},je));return s.push(new Proxy({get(o){return l.has(o)?void 0:e[o]},has(o){return l.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!l.has(o))}},je)),s}const n={},i=t.map(()=>({}));for(const l of Object.getOwnPropertyNames(e)){const s=Object.getOwnPropertyDescriptor(e,l),o=!s.get&&!s.set&&s.enumerable&&s.writable&&s.configurable;let r=!1,c=0;for(const f of t)f.includes(l)&&(r=!0,o?i[c][l]=s.value:Object.defineProperty(i[c],l,s)),++c;r||(o?n[l]=s.value:Object.defineProperty(n,l,s))}return[...i,n]}const ai=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],fi=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...ai]),ui=new Set(["innerHTML","textContent","innerText","children"]),hi=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),di=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function gi(e,t){const n=di[e];return typeof n=="object"?n[t]?n.$:void 0:n}const bi=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]);function Si(e,t,n){let i=n.length,l=t.length,s=i,o=0,r=0,c=t[l-1].nextSibling,f=null;for(;o<l||r<s;){if(t[o]===n[r]){o++,r++;continue}for(;t[l-1]===n[s-1];)l--,s--;if(l===o){const a=s<i?r?n[r-1].nextSibling:n[s-r]:c;for(;r<s;)e.insertBefore(n[r++],a)}else if(s===r)for(;o<l;)(!f||!f.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[s-1]&&n[r]===t[l-1]){const a=t[--l].nextSibling;e.insertBefore(n[r++],t[o++].nextSibling),e.insertBefore(n[--s],a),t[l]=n[s]}else{if(!f){f=new Map;let u=r;for(;u<s;)f.set(n[u],u++)}const a=f.get(t[o]);if(a!=null)if(r<a&&a<s){let u=o,d=1,p;for(;++u<l&&u<s&&!((p=f.get(t[u]))==null||p!==a+d);)d++;if(d>a-r){const C=t[o];for(;r<a;)e.insertBefore(n[r++],C)}else e.replaceChild(n[r++],t[o++])}else o++;else t[o++].remove()}}}const Mt="_$DX_DELEGATE";function A(e,t,n){let i;const l=()=>{const o=document.createElement("template");return o.innerHTML=e,o.content.firstChild},s=()=>(i||(i=l())).cloneNode(!0);return s.cloneNode=s,s}function $i(e,t=window.document){const n=t[Mt]||(t[Mt]=new Set);for(let i=0,l=e.length;i<l;i++){const s=e[i];n.has(s)||(n.add(s),t.addEventListener(s,pi))}}function Be(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Yt(e,t){t==null?e.removeAttribute("class"):e.className=t}function yi(e,t,n,i){if(i)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const l=n[0];e.addEventListener(t,n[0]=s=>l.call(e,n[1],s))}else e.addEventListener(t,n)}function vi(e,t,n={}){const i=Object.keys(t||{}),l=Object.keys(n);let s,o;for(s=0,o=l.length;s<o;s++){const r=l[s];!r||r==="undefined"||t[r]||(At(e,r,!1),delete n[r])}for(s=0,o=i.length;s<o;s++){const r=i[s],c=!!t[r];!r||r==="undefined"||n[r]===c||!c||(At(e,r,!0),n[r]=c)}return n}function V(e,t,n){if(!t)return n?Be(e,"style"):t;const i=e.style;if(typeof t=="string")return i.cssText=t;typeof n=="string"&&(i.cssText=n=void 0),n||(n={}),t||(t={});let l,s;for(s in n)t[s]==null&&i.removeProperty(s),delete n[s];for(s in t)l=t[s],l!==n[s]&&(i.setProperty(s,l),n[s]=l);return n}function Fe(e,t={},n,i){const l={};return P(()=>typeof t.ref=="function"?Ke(t.ref,e):t.ref=e),P(()=>mi(e,t,n,!0,l,!0)),l}function Ke(e,t,n){return ye(()=>e(t,n))}function W(e,t,n,i){if(i||(i=[]),typeof t!="function")return ue(e,t,i,n);P(l=>ue(e,t(),l,n),i)}function mi(e,t,n,i,l={},s=!1){t||(t={});for(const o in l)if(!(o in t)){if(o==="children")continue;l[o]=Tt(e,o,null,l[o],n,s)}for(const o in t){if(o==="children")continue;const r=t[o];l[o]=Tt(e,o,r,l[o],n,s)}}function wi(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function At(e,t,n){const i=t.trim().split(/\s+/);for(let l=0,s=i.length;l<s;l++)e.classList.toggle(i[l],n)}function Tt(e,t,n,i,l,s){let o,r,c,f,a;if(t==="style")return V(e,n,i);if(t==="classList")return vi(e,n,i);if(n===i)return i;if(t==="ref")s||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);i&&e.removeEventListener(u,i),n&&e.addEventListener(u,n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);i&&e.removeEventListener(u,i,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),d=bi.has(u);if(!d&&i){const p=Array.isArray(i)?i[0]:i;e.removeEventListener(u,p)}(d||n)&&(yi(e,u,n,d),d&&$i([u]))}else t.slice(0,5)==="attr:"?Be(e,t.slice(5),n):(a=t.slice(0,5)==="prop:")||(c=ui.has(t))||(f=gi(t,e.tagName))||(r=fi.has(t))||(o=e.nodeName.includes("-"))?(a&&(t=t.slice(5),r=!0),t==="class"||t==="className"?Yt(e,n):o&&!r&&!c?e[wi(t)]=n:e[f||t]=n):Be(e,hi[t]||t,n);return n}function pi(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const i=n[t];if(i&&!n.disabled){const l=n[`${t}Data`];if(l!==void 0?i.call(n,l,e):i.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function ue(e,t,n,i,l){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t;if(e=n[0]&&n[0].parentNode||e,s==="string"||s==="number"){s==="number"&&(t=t.toString());{let o=n[0];o&&o.nodeType===3?o.data!==t&&(o.data=t):o=document.createTextNode(t),n=K(e,n,i,o)}}else if(t==null||s==="boolean")n=K(e,n,i);else{if(s==="function")return P(()=>{let o=t();for(;typeof o=="function";)o=o();n=ue(e,o,n,i)}),()=>n;if(Array.isArray(t)){const o=[],r=n&&Array.isArray(n);if(We(o,t,n,l))return P(()=>n=ue(e,o,n,i,!0)),()=>n;if(o.length===0)return n=K(e,n,i),n;r?n.length===0?Et(e,o,i):Si(e,n,o):(n&&K(e),Et(e,o)),n=o}else if(t.nodeType){if(Array.isArray(n))return n=K(e,n,i,t);n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild),n=t}}return n}function We(e,t,n,i){let l=!1;for(let s=0,o=t.length;s<o;s++){let r=t[s],c=n&&n[e.length],f;if(!(r==null||r===!0||r===!1))if((f=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))l=We(e,r,c)||l;else if(f==="function")if(i){for(;typeof r=="function";)r=r();l=We(e,Array.isArray(r)?r:[r],Array.isArray(c)?c:[c])||l}else e.push(r),l=!0;else{const a=String(r);c&&c.nodeType===3&&c.data===a?e.push(c):e.push(document.createTextNode(a))}}return l}function Et(e,t,n=null){for(let i=0,l=t.length;i<l;i++)e.insertBefore(t[i],n)}function K(e,t,n,i){if(n===void 0)return e.textContent="";const l=i||document.createTextNode("");if(t.length){let s=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(l!==r){const c=r.parentNode===e;!s&&!o?c?e.replaceChild(l,r):e.insertBefore(l,n):c&&r.remove()}else s=!0}}else e.insertBefore(l,n);return[l]}var xi=A("<div>");const _i=e=>{const t=()=>X(e.hsv),n=()=>e.size||"10px";return(()=>{var i=xi();return P(l=>{var s=e.class,o={"pointer-events":"none",position:"absolute",left:`${e.pos[0]*100}%`,top:`${e.pos[1]*100}%`,width:n(),height:n(),border:`2px solid ${Rt(t())>127?"black":"white"}`,"border-radius":"50%",transform:"translate(-50%, -50%)","background-color":It(t()),...e.style};return s!==l.e&&Yt(i,l.e=s),l.t=V(i,o,l.t),l},{e:void 0,t:void 0}),i})()};var Ci=A("<div>");const Z=e=>{let t;const[n,i]=Ge(e,["hsv","onPick","colorToPos","pointerStyle","pointerClass"]),l=s=>{if(!e.onPick||s.buttons===0)return;const o=Math.min(1,Math.max(0,s.offsetX/s.currentTarget.offsetWidth)),r=Math.min(1,Math.max(0,s.offsetY/s.currentTarget.offsetHeight));e.onPick(o,r,s.type==="pointerdown")!==!1?t.setPointerCapture(s.pointerId):t.releasePointerCapture(s.pointerId)};return(()=>{var s=Ci(),o=t;return typeof o=="function"?Ke(o,s):t=s,Fe(s,w(i,{get style(){return{position:"relative",...Yn,...typeof e.style=="object"?e.style:{}}},onPointerDown:l,onPointerMove:l}),!1),W(s,()=>e.children,null),W(s,x(_i,{get pos(){return e.colorToPos(e.hsv)},get hsv(){return e.hsv},get style(){return n.pointerStyle},get class(){return n.pointerClass}}),null),s})()},he=Math.PI/180;var Pi=A("<div>");const Mi=e=>{const t=()=>e.hsv[2];return x(Z,w(e,{onPick:(n,i)=>{var o;const l=n*2-1,s=i*2-1;(o=e.onHSVChange)==null||o.call(e,[(Math.atan2(s,l)/he+450)%360,Math.min(Math.sqrt(l*l+s*s),1),e.hsv[2]])},colorToPos:([n,i])=>{const l=n*he;return[(Math.sin(l)*i+1)/2,(-Math.cos(l)*i+1)/2]},get children(){var n=Pi();return P(i=>V(n,{...N,"background-image":`linear-gradient(rgba(0,0,0,${1-t()}), rgb(0,0,0,${1-t()})),radial-gradient(closest-side, #ffff, #fff0),${Ut}`,"border-radius":"50%"},i)),n}}))};var Ai=A("<canvas width=32 height=32>");const Ti=(e,t,n)=>{e.clearRect(0,0,t,n),e.fillStyle="#fff";for(let i=0;i<n;i++){const l=i/n,s=Math.round(2*t*Math.min(l,1-l));for(let o=0;o<s;o++){const r=o/t,c=1-l+r/2,f=255*c,a=f*(1-r/c);e.fillStyle=`rgb(${f},${a},${a})`,e.fillRect(o,i,1,1)}t-s>0&&e.fillRect(s,i,t-s,1)}},Qt=e=>{let t;const n=()=>e.hsv[0];ti(()=>{const l=t.getContext("2d");l&&Ti(l,t.width,t.height)});const i="polygon(0 0, 0 100%, 100% 50%)";return x(Z,w(e,{get style(){return{...typeof e.style=="object"?e.style:{},"clip-path":i}},onPick:(l,s,o)=>{var f;let r=2*Math.min(s,1-s);if(l>r){if(o)return!1;const a=l-r;l-=a*.3,s>.5?s-=a*.35:s+=a*.35,r=2*Math.min(s,1-s)}r>0&&(l/=r);const c=[e.hsv[0],l,1-s];return(f=e.onHSVChange)==null||f.call(e,qt(c)),!0},colorToPos:l=>{const[,s,o]=Y(l);return[2*Math.min(o,1-o)*s,1-o]},get children(){var l=Ai(),s=t;return typeof s=="function"?Ke(s,l):t=l,P(o=>V(l,{...N,...De,"clip-path":i,filter:`hue-rotate(${n()}deg)`},o)),l}}))};var Ei=A("<div>");const Xe=e=>x(Z,w(e,{onPick:(t,n)=>{var l;const i=Math.atan2(n-.5,t-.5)/he;(l=e.onHSVChange)==null||l.call(e,[(i+450)%360,e.hsv[1],e.hsv[2]])},colorToPos:([t])=>{const n=t*he,i=(1-100*e.strokeWidth/200)/2;return[.5+i*Math.sin(n),.5-i*Math.cos(n)]},get children(){var t=Ei();return P(n=>V(t,{...N,"background-image":Ut,"border-radius":"50%","mask-image":`radial-gradient(closest-side circle at center,transparent ${99.5-100*e.strokeWidth}%,black ${100-100*e.strokeWidth}%)`},n)),t}}));var ki=A("<div>");const Oi=e=>{const[t,n]=Ge(e,["rotate","strokeWidth","hsv","onHSVChange","children"]),i=()=>50*(.99-e.strokeWidth);return(()=>{var l=ki();return Fe(l,w(n,{style:{position:"relative"}}),!1),W(l,x(Xe,w(t,{get style(){return{...De,...N}}})),null),W(l,x(Qt,w(t,{get style(){return{position:"absolute",left:`${50-i()/2}%`,top:`${50-i()*Math.sqrt(3)/2}%`,width:`${i()*1.5}%`,height:`${i()*Math.sqrt(3)}%`,transform:e.rotate?`translate(-16.7%, 0) rotate(${e.hsv[0]-90}deg) translate(16.7%, 0)`:"none"}}})),null),l})()};var Hi=A("<div>");const Jt=e=>{const t=()=>e.hsv[0];return x(Z,w(e,{onPick:(n,i)=>{var l;(l=e.onHSVChange)==null||l.call(e,[e.hsv[0],n,1-i])},colorToPos:([,n,i])=>[n,1-i],get children(){var n=Hi();return P(i=>V(n,{...N,"background-color":`hsl(${t()}, 100%, 50%)`,"background-image":"linear-gradient(to top, #000, #0000), linear-gradient(to right, #fff, #fff0)"},i)),n}}))};var Li=A("<div>");const Ni=e=>{const[t,n]=Ge(e,["rotate","strokeWidth","hsv","onHSVChange","children"]),i=()=>100*(.99-e.strokeWidth)/Math.sqrt(2);return(()=>{var l=Li();return Fe(l,w(n,{style:{position:"relative"}}),!1),W(l,x(Xe,w(t,{get style(){return{...De,...N}}})),null),W(l,x(Jt,w(t,{get style(){return{position:"absolute",left:`${(100-i())/2}%`,top:`${(100-i())/2}%`,width:`${i()}%`,height:`${i()}%`,transform:e.rotate?`rotate(${e.hsv[0]-45}deg)`:"none"}}})),null),l})()};var Vi=A("<div>");const Ye=e=>x(Z,w(e,{onPick:t=>{var i;const n=e.colorMap(e.hsv,t)[1];(i=e.onHSVChange)==null||i.call(e,n)},colorToPos:t=>[e.inverseColorMap(t),.5],get children(){var t=Vi();return P(n=>V(t,{...N,"background-image":`linear-gradient(to right, ${[0,.25,.5,.75,1].map(i=>e.colorMap(e.hsv,i)[0]).join(",")})`},n)),t}})),Qe=e=>t=>{const n=(i,l)=>(i[e]=l*255,i);return x(Ye,w(t,{colorMap:(i,l)=>{const s=n(X(i),l);return[It(s),Kn(s)]},inverseColorMap:i=>X(i)[e]/255}))},ji=Qe(0),Bi=Qe(1),Wi=Qe(2),de=[360,1,1],Je=e=>t=>x(Ye,w(t,{colorMap:(n,i)=>{const l=[...n];return l[e]=i*de[e],[Xn(l),l]},inverseColorMap:n=>n[e]/de[e]})),Ri=Je(0),qi=Je(1),Di=Je(2),Ze=e=>t=>x(Ye,w(t,{colorMap:(n,i)=>{const l=Y(n);return l[e]=i*de[e],[Dt(l),qt(l)]},inverseColorMap:n=>Y(n)[e]/de[e]})),Ii=Ze(0),Ui=Ze(1),Gi=Ze(2);var Fi=qe("<label>Stroke Width:<input type=range min=0 max=1 step=0.01>"),Ki=qe("<label>Rotate:<input type=checkbox>"),Xi=qe('<main class=container><h1> Solid Tiny Color </h1><div><a href=https://github.com/lumiknit/solid-tiny-color><img class=badge src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&amp;logo=github&amp;logoColor=white"></a></div><p>Solid Tiny Color is a simple but essential color picker components for SolidJS.<a href=#install>See installation and usage!</a></p><h2> Demo </h2><article class=narrow><div class=c-hash-line>Hex:<span class=c-hash></span></div><hr><div class=grid><div> R: <!> </div><div> G: <!> </div><div> B: <!> </div></div><hr><div class=grid><div> H: <!> </div><div> S: <!>% </div><div> V: <!>% </div></div><hr><div class=grid><div> H: <!> </div><div> S: <!>% </div><div> L: <!>% </div></div></article><h3> Wheel-Plane Composition </h3><div class=grid><article><header><b>HSVWheel</b></header></article><article><header><b>HSLWheel</b></header></article></div><h3> Sliders </h3><div class=grid><article><header><b>RGB</b></header>, <!>, </article><article><header><b>HSV</b></header>, <!>,</article><article><header><b>HSL</b></header>, <!>,</article></div><h3> Hue Wheels </h3><div class=grid><article><header><b>HueWheel</b></header></article><article><header><b>HSCircle</b></header></article></div><h3> SV/SL Planes </h3><div class=grid><article><header><b>SVSquare</b></header></article><article><header><b>SLTriangle</b></header></article></div><h2 id=install> Installation and Usage </h2><h3> Installation </h3>Install by the following command:<pre>pnpm add solid-tiny-color</pre><h3> Usage </h3>In <code>solid-tiny-color</code>, the main color format is<code>HSV</code>(where hue is in degrees, and saturation and value are in the range of 0 to 1).<pre></pre>Since most of the components <b>do not</b> contain sizing style, you must provide the size by CSS. Also, most components will not work without<code>display: absolute</code>nor <code>position: relative</code> for itself, because of their pointers. Some component requires additional props. For example,<ul><li> <code>HueWheel</code> requires <code>strokeWidth</code> </li><li> <code>Slider</code> required <code>colorMap</code> and <code>inverseColorMap</code>which helps you to add any color gradient you want.');const Yi=()=>{const[e,t]=Ee([0,0,0]),n=d=>{t(d),document.body.style.backgroundColor=Oe(X(d))},[i,l]=Ee(.2),[s,o]=Ee(!0);n([Math.random()*360,.2+Math.random()*.3,.5+Math.random()*.4]);const r=()=>X(e()),c=()=>Y(e()),f=()=>({hsv:e(),onHSVChange:n}),a=()=>(()=>{var d=Fi(),p=d.firstChild,C=p.nextSibling;return C.$$input=R=>l(parseFloat(R.currentTarget.value)),B(()=>C.value=i()),d})(),u=()=>(()=>{var d=Ki(),p=d.firstChild,C=p.nextSibling;return C.addEventListener("change",R=>o(R.currentTarget.checked)),B(()=>C.checked=s()),d})();return(()=>{var d=Xi(),p=d.firstChild,C=p.nextSibling,R=C.nextSibling,Zt=R.nextSibling,ze=Zt.nextSibling,et=ze.firstChild,zt=et.firstChild,q=zt.nextSibling,en=et.nextSibling,tt=en.nextSibling,me=tt.firstChild,tn=me.firstChild,nt=tn.nextSibling;nt.nextSibling;var we=me.nextSibling,nn=we.firstChild,it=nn.nextSibling;it.nextSibling;var lt=we.nextSibling,ln=lt.firstChild,st=ln.nextSibling;st.nextSibling;var sn=tt.nextSibling,rt=sn.nextSibling,pe=rt.firstChild,rn=pe.firstChild,ot=rn.nextSibling;ot.nextSibling;var xe=pe.nextSibling,on=xe.firstChild,ct=on.nextSibling;ct.nextSibling;var at=xe.nextSibling,cn=at.firstChild,ft=cn.nextSibling;ft.nextSibling;var an=rt.nextSibling,fn=an.nextSibling,_e=fn.firstChild,un=_e.firstChild,ut=un.nextSibling;ut.nextSibling;var Ce=_e.nextSibling,hn=Ce.firstChild,ht=hn.nextSibling;ht.nextSibling;var dt=Ce.nextSibling,dn=dt.firstChild,gt=dn.nextSibling;gt.nextSibling;var gn=ze.nextSibling,bt=gn.nextSibling,D=bt.firstChild;D.firstChild;var z=D.nextSibling;z.firstChild;var bn=bt.nextSibling,St=bn.nextSibling,T=St.firstChild,Sn=T.firstChild,I=Sn.nextSibling,$t=I.nextSibling;$t.nextSibling;var E=T.nextSibling,$n=E.firstChild,U=$n.nextSibling,yt=U.nextSibling;yt.nextSibling;var O=E.nextSibling,yn=O.firstChild,G=yn.nextSibling,vt=G.nextSibling;vt.nextSibling;var vn=St.nextSibling,mt=vn.nextSibling,ee=mt.firstChild;ee.firstChild;var wt=ee.nextSibling;wt.firstChild;var mn=mt.nextSibling,pt=mn.nextSibling,Pe=pt.firstChild;Pe.firstChild;var xt=Pe.nextSibling;xt.firstChild;var wn=pt.nextSibling,pn=wn.nextSibling,xn=pn.nextSibling,_n=xn.nextSibling,Cn=_n.nextSibling,Pn=Cn.nextSibling,Mn=Pn.nextSibling,An=Mn.nextSibling,Tn=An.nextSibling,En=Tn.nextSibling,kn=En.nextSibling;return h(q,()=>Oe(r())),h(me,()=>Math.floor(r()[0]),nt),h(we,()=>Math.floor(r()[1]),it),h(lt,()=>Math.floor(r()[2]),st),h(pe,()=>Math.floor(e()[0]),ot),h(xe,()=>Math.floor(100*e()[1]),ct),h(at,()=>Math.floor(100*e()[2]),ft),h(_e,()=>Math.floor(c()[0]),ut),h(Ce,()=>Math.floor(100*c()[1]),ht),h(dt,()=>Math.floor(100*c()[2]),gt),h(D,g(Ni,v({class:"sq-large"},f,{get strokeWidth(){return i()},get rotate(){return s()}})),null),h(D,g(a,{}),null),h(D,g(u,{}),null),h(z,g(Oi,v({class:"sq-large"},f,{get strokeWidth(){return i()},get rotate(){return s()}})),null),h(z,g(a,{}),null),h(z,g(u,{}),null),h(T,g(ji,v({class:"h-bar"},f)),I),h(T,g(Bi,v({class:"h-bar"},f)),I),h(T,g(Wi,v({class:"h-bar"},f)),I),h(T,()=>Math.floor(r()[0]),I),h(T,()=>Math.floor(r()[1]),$t),h(T,()=>Math.floor(r()[2]),null),h(E,g(Ri,v({class:"h-bar"},f)),U),h(E,g(qi,v({class:"h-bar"},f)),U),h(E,g(Di,v({class:"h-bar"},f)),U),h(E,()=>Math.floor(e()[0]),U),h(E,()=>Math.floor(100*e()[1]),yt),h(E,()=>Math.floor(100*e()[2]),null),h(O,g(Ii,v({class:"h-bar"},f)),G),h(O,g(Ui,v({class:"h-bar"},f)),G),h(O,g(Gi,v({class:"h-bar"},f)),G),h(O,()=>Math.floor(c()[0]),G),h(O,()=>Math.floor(100*c()[1]),vt),h(O,()=>Math.floor(100*c()[2]),null),h(ee,g(Xe,v({class:"sq"},f,{get strokeWidth(){return i()}})),null),h(ee,g(a,{}),null),h(wt,g(Mi,v({class:"sq"},f)),null),h(Pe,g(Jt,v({class:"sq"},f)),null),h(xt,g(Qt,v({class:"sq"},f)),null),h(kn,()=>`
import { HSV, hsvToRGB, SVSquare } from 'solid-tiny-color';

...

const [hsv, setHSV] = createSignal<HSV>([0, 0, 0]);

return <div>
	My color is {hsvToRGB(hsv()).join(', ')}

	<SVSquare class="color-sq"
		hsv={hsv()} onHSVChange={setHSV} />
</div>;
`.trim()),B(F=>{var Me=Rt(r())>127?"black":"white",Ae=Oe(r());return Me!==F.e&&((F.e=Me)!=null?q.style.setProperty("color",Me):q.style.removeProperty("color")),Ae!==F.t&&((F.t=Ae)!=null?q.style.setProperty("background",Ae):q.style.removeProperty("background")),F},{e:void 0,t:void 0}),d})()};Gn(["input"]);const Qi=document.getElementById("root");Un(()=>g(Yi,{}),Qi);
