(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();let k=M;const m=1,A=2,U={owned:null,cleanups:null,context:null,owner:null};var u=null;let T=null,h=null,a=null,g=null,v=0;function q(e,n){const t=h,s=u,i=e.length===0,l=n===void 0?s:n,r=i?U:{owned:null,cleanups:null,context:l?l.context:null,owner:l},o=i?e:()=>e(()=>w(()=>x(r)));u=r,h=null;try{return C(o,!0)}finally{h=t,u=s}}function $(e,n,t){const s=Q(e,n,!1,m);j(s)}function w(e){if(h===null)return e();const n=h;h=null;try{return e()}finally{h=n}}function G(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&C(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],r=T&&T.running;r&&T.disposed.has(l),(r?!l.tState:!l.state)&&(l.pure?a.push(l):g.push(l),l.observers&&F(l)),r||(l.state=m)}if(a.length>1e6)throw a=[],new Error},!1)),n}function j(e){if(!e.fn)return;x(e);const n=v;K(e,e.value,n)}function K(e,n,t){let s;const i=u,l=h;h=u=e;try{s=e.fn(n)}catch(r){return e.pure&&(e.state=m,e.owned&&e.owned.forEach(x),e.owned=null),e.updatedAt=t+1,H(r)}finally{h=l,u=i}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?G(e,s):e.value=s,e.updatedAt=t)}function Q(e,n,t,s=m,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:u,context:u?u.context:null,pure:t};return u===null||u!==U&&(u.owned?u.owned.push(l):u.owned=[l]),l}function I(e){if(e.state===0)return;if(e.state===A)return L(e);if(e.suspense&&w(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<v);)e.state&&n.push(e);for(let t=n.length-1;t>=0;t--)if(e=n[t],e.state===m)j(e);else if(e.state===A){const s=a;a=null,C(()=>L(e,n[0]),!1),a=s}}function C(e,n){if(a)return e();let t=!1;n||(a=[]),g?t=!0:g=[],v++;try{const s=e();return W(t),s}catch(s){t||(g=null),a=null,H(s)}}function W(e){if(a&&(M(a),a=null),e)return;const n=g;g=null,n.length&&C(()=>k(n),!1)}function M(e){for(let n=0;n<e.length;n++)I(e[n])}function L(e,n){e.state=0;for(let t=0;t<e.sources.length;t+=1){const s=e.sources[t];if(s.sources){const i=s.state;i===m?s!==n&&(!s.updatedAt||s.updatedAt<v)&&I(s):i===A&&L(s,n)}}}function F(e){for(let n=0;n<e.observers.length;n+=1){const t=e.observers[n];t.state||(t.state=A,t.pure?a.push(t):g.push(t),t.observers&&F(t))}}function x(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const l=i.pop(),r=t.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,t.observerSlots[s]=r)}}if(e.owned){for(n=e.owned.length-1;n>=0;n--)x(e.owned[n]);e.owned=null}if(e.cleanups){for(n=e.cleanups.length-1;n>=0;n--)e.cleanups[n]();e.cleanups=null}e.state=0}function X(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function H(e,n=u){throw X(e)}function _(e,n){return w(()=>e(n||{}))}function J(e,n,t){let s=t.length,i=n.length,l=s,r=0,o=0,f=n[i-1].nextSibling,d=null;for(;r<i||o<l;){if(n[r]===t[o]){r++,o++;continue}for(;n[i-1]===t[l-1];)i--,l--;if(i===r){const c=l<s?o?t[o-1].nextSibling:t[l-o]:f;for(;o<l;)e.insertBefore(t[o++],c)}else if(l===o)for(;r<i;)(!d||!d.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[l-1]&&t[o]===n[i-1]){const c=n[--i].nextSibling;e.insertBefore(t[o++],n[r++].nextSibling),e.insertBefore(t[--l],c),n[i]=t[l]}else{if(!d){d=new Map;let p=o;for(;p<l;)d.set(t[p],p++)}const c=d.get(n[r]);if(c!=null)if(o<c&&c<l){let p=r,S=1,P;for(;++p<i&&p<l&&!((P=d.get(n[p]))==null||P!==c+S);)S++;if(S>c-o){const V=n[r];for(;o<c;)e.insertBefore(t[o++],V)}else e.replaceChild(t[o++],n[r++])}else r++;else n[r++].remove()}}}const O="_$DX_DELEGATE";function Y(e,n,t,s={}){let i;return q(l=>{i=l,n===document?e():B(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{i(),n.textContent=""}}function R(e,n,t){let s;const i=()=>{const r=document.createElement("template");return r.innerHTML=e,t?r.content.firstChild.firstChild:r.content.firstChild},l=n?()=>w(()=>document.importNode(s||(s=i()),!0)):()=>(s||(s=i())).cloneNode(!0);return l.cloneNode=l,l}function b(e,n=window.document){const t=n[O]||(n[O]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];t.has(l)||(t.add(l),n.addEventListener(l,te))}}function Z(e,n){n==null?e.removeAttribute("class"):e.className=n}function z(e,n,t,s){if(s)Array.isArray(t)?(e[`$$${n}`]=t[0],e[`$$${n}Data`]=t[1]):e[`$$${n}`]=t;else if(Array.isArray(t)){const i=t[0];e.addEventListener(n,t[0]=l=>i.call(e,t[1],l))}else e.addEventListener(n,t)}function ee(e,n,t){return w(()=>e(n,t))}function B(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return E(e,n,s,t);$(i=>E(e,n(),i,t),s)}function te(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}});t;){const s=t[n];if(s&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?s.call(t,i,e):s.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function E(e,n,t,s,i){for(;typeof t=="function";)t=t();if(n===t)return t;const l=typeof n,r=s!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(n=n.toString()),r){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=y(e,t,s,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n;else if(n==null||l==="boolean")t=y(e,t,s);else{if(l==="function")return $(()=>{let o=n();for(;typeof o=="function";)o=o();t=E(e,o,t,s)}),()=>t;if(Array.isArray(n)){const o=[],f=t&&Array.isArray(t);if(N(o,n,t,i))return $(()=>t=E(e,o,t,s,!0)),()=>t;if(o.length===0){if(t=y(e,t,s),r)return t}else f?t.length===0?D(e,o,s):J(e,t,o):(t&&y(e),D(e,o));t=o}else if(n.nodeType){if(Array.isArray(t)){if(r)return t=y(e,t,s,n);y(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function N(e,n,t,s){let i=!1;for(let l=0,r=n.length;l<r;l++){let o=n[l],f=t&&t[l],d;if(!(o==null||o===!0||o===!1))if((d=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))i=N(e,o,f)||i;else if(d==="function")if(s){for(;typeof o=="function";)o=o();i=N(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||i}else e.push(o),i=!0;else{const c=String(o);f&&f.nodeType===3&&f.data===c?e.push(f):e.push(document.createTextNode(c))}}return i}function D(e,n,t=null){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function y(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let l=!1;for(let r=n.length-1;r>=0;r--){const o=n[r];if(i!==o){const f=o.parentNode===e;!l&&!r?f?e.replaceChild(i,o):e.insertBefore(i,t):f&&o.remove()}else l=!0}}else e.insertBefore(i,t);return[i]}(()=>{let e=10;const n=()=>{var l;const i=getComputedStyle(document.documentElement).getPropertyValue("--sj-c-bg");i&&((l=document.querySelector('meta[name="theme-color"]'))==null||l.setAttribute("content",i)),e<1e4&&(e*=4,setTimeout(n,e))},t=i=>{document.documentElement.setAttribute("color-theme",i?"dark":"light"),setTimeout(n)},s=matchMedia("(prefers-color-scheme: dark)");s.addEventListener("change",i=>t(i.matches)),t(s.matches),addEventListener("load",n)})();const ne=R("<button>"),se=e=>(()=>{const n=ne();z(n,"click",e.onClick,!0);const t=e.ref;return typeof t=="function"?ee(t,n):e.ref=n,B(n,()=>e.children),$(s=>{const i=`no-user-select btn btn-${e.outline?"ol-":""}${e.color} ${e.class??""} ${e.small?"btn-sm":""}`,l=e.disabled;return i!==s._v$&&Z(n,s._v$=i),l!==s._v$2&&(n.disabled=s._v$2=l),s},{_v$:void 0,_v$2:void 0}),n})();b(["click"]);b(["click"]);b(["input","keydown"]);b(["click"]);b(["click","keydown"]);const ie=R('<div class=sj-bi><div class=sj-bi-i><div class="badges w-100"></div><div class=input-line><input type=text><button class=""> Up '),le=e=>(()=>{const n=ie(),t=n.firstChild,s=t.firstChild;return B(s,_(se,{color:"primary",small:!0,children:"abc"})),n})(),oe=()=>["Hello, world!",_(le,{})],re=document.getElementById("root");Y(()=>_(oe,{}),re);
