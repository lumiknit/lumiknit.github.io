import{m as ie,c as ee,a as W,b as te,S as ce,i as de,e as ue,f as ge,s as ve,P as be,g as P,u as M,t as fe,h as re,j as ae,o as X,k as R,l as pe,n as oe,p as $}from"./vendor-solid-js-MzRK2e14.js";var ye=fe("<div>"),Y=class{x;y;width;height;constructor(t){this.x=Math.floor(t.x),this.y=Math.floor(t.y),this.width=Math.floor(t.width),this.height=Math.floor(t.height)}get rect(){return{x:this.x,y:this.y,width:this.width,height:this.height}}get left(){return this.x}get top(){return this.y}get right(){return this.x+this.width}get bottom(){return this.y+this.height}get center(){return{x:this.x+this.width*.5,y:this.y+this.height*.5}}get corners(){return{topLeft:{x:this.left,y:this.top},topRight:{x:this.right,y:this.top},bottomRight:{x:this.left,y:this.bottom},bottomLeft:{x:this.right,y:this.bottom}}}},L=t=>{let a=new Y(t.getBoundingClientRect());const{transform:e}=getComputedStyle(t);return e&&(a=me(a,e)),a},me=(t,a)=>{let e,o;if(a.startsWith("matrix3d(")){const s=a.slice(9,-1).split(/, /);e=+s[12],o=+s[13]}else if(a.startsWith("matrix(")){const s=a.slice(7,-1).split(/, /);e=+s[4],o=+s[5]}else e=0,o=0;return new Y({...t,x:t.x-e,y:t.y-o})},E=()=>({x:0,y:0}),G=(t,a)=>t.x===a.x&&t.y===a.y,V=(t,a)=>new Y({...t,x:t.x+a.x,y:t.y+a.y}),he=(t,a)=>Math.sqrt(Math.pow(t.x-a.x,2)+Math.pow(t.y-a.y,2)),xe=(t,a)=>{const e=Math.max(t.top,a.top),o=Math.max(t.left,a.left),s=Math.min(t.right,a.right),g=Math.min(t.bottom,a.bottom),d=s-o,p=g-e;if(o<s&&e<g){const c=t.width*t.height,b=a.width*a.height,v=d*p;return v/(c+b-v)}return 0},z=(t,a)=>t.x===a.x&&t.y===a.y&&t.width===a.width&&t.height===a.height,Ee=(t,a,e)=>{const o=t.transformed.center,s={distance:1/0,droppable:null};for(const g of a){const d=he(o,g.layout.center);d<s.distance?(s.distance=d,s.droppable=g):d===s.distance&&g.id===e.activeDroppableId&&(s.droppable=g)}return s.droppable},Ie=(t,a,e)=>{const o=t.transformed,s={ratio:0,droppable:null};for(const g of a){const d=xe(o,g.layout);d>s.ratio?(s.ratio=d,s.droppable=g):d>0&&d===s.ratio&&g.id===e.activeDroppableId&&(s.droppable=g)}return s.droppable},ne=re(),Pe=t=>{const a=ie({collisionDetector:Ie},t),[e,o]=ee({draggables:{},droppables:{},sensors:{},active:{draggableId:null,get draggable(){return e.active.draggableId!==null?e.draggables[e.active.draggableId]:null},droppableId:null,get droppable(){return e.active.droppableId!==null?e.droppables[e.active.droppableId]:null},sensorId:null,get sensor(){return e.active.sensorId!==null?e.sensors[e.active.sensorId]:null},overlay:null}}),s=(r,n,l)=>{r.substring(0,r.length-1),M(()=>e[r][n])&&o(r,n,"transformers",l.id,l)},g=(r,n,l)=>{r.substring(0,r.length-1),M(()=>e[r][n])&&M(()=>e[r][n].transformers[l])&&o(r,n,"transformers",l,void 0)},d=({id:r,node:n,layout:l,data:D})=>{const u=e.draggables[r],i={id:r,node:n,layout:l,data:D,_pendingCleanup:!1};let y;if(!u)Object.defineProperties(i,{transformers:{enumerable:!0,configurable:!0,writable:!0,value:{}},transform:{enumerable:!0,configurable:!0,get:()=>{if(e.active.overlay)return E();const x=Object.values(e.draggables[r].transformers);return x.sort((C,_)=>C.order-_.order),x.reduce((C,_)=>_.callback(C),E())}},transformed:{enumerable:!0,configurable:!0,get:()=>V(e.draggables[r].layout,e.draggables[r].transform)}});else if(e.active.draggableId===r&&!e.active.overlay){const x={x:u.layout.x-l.x,y:u.layout.y-l.y},C="addDraggable-existing-offset",_=u.transformers[C],Q=_?_.callback(x):x;y={id:C,order:100,callback:Z=>({x:Z.x+Q.x,y:Z.y+Q.y})},U(()=>g("draggables",r,C))}$(()=>{o("draggables",r,i),y&&s("draggables",r,y)}),e.active.draggable&&O()},p=r=>{M(()=>e.draggables[r])&&(o("draggables",r,"_pendingCleanup",!0),queueMicrotask(()=>c(r)))},c=r=>{if(e.draggables[r]?._pendingCleanup){const n=e.active.draggableId===r;$(()=>{n&&o("active","draggableId",null),o("draggables",r,void 0)})}},b=({id:r,node:n,layout:l,data:D})=>{const u=e.droppables[r],i={id:r,node:n,layout:l,data:D,_pendingCleanup:!1};u||Object.defineProperties(i,{transformers:{enumerable:!0,configurable:!0,writable:!0,value:{}},transform:{enumerable:!0,configurable:!0,get:()=>{const y=Object.values(e.droppables[r].transformers);return y.sort((x,C)=>x.order-C.order),y.reduce((x,C)=>C.callback(x),E())}},transformed:{enumerable:!0,configurable:!0,get:()=>V(e.droppables[r].layout,e.droppables[r].transform)}}),o("droppables",r,i),e.active.draggable&&O()},v=r=>{M(()=>e.droppables[r])&&(o("droppables",r,"_pendingCleanup",!0),queueMicrotask(()=>m(r)))},m=r=>{if(e.droppables[r]?._pendingCleanup){const n=e.active.droppableId===r;$(()=>{n&&o("active","droppableId",null),o("droppables",r,void 0)})}},I=({id:r,activators:n})=>{o("sensors",r,{id:r,activators:n,coordinates:{origin:{x:0,y:0},current:{x:0,y:0},get delta(){return{x:e.sensors[r].coordinates.current.x-e.sensors[r].coordinates.origin.x,y:e.sensors[r].coordinates.current.y-e.sensors[r].coordinates.origin.y}}}})},w=r=>{if(!M(()=>e.sensors[r]))return;const n=e.active.sensorId===r;$(()=>{n&&o("active","sensorId",null),o("sensors",r,void 0)})},h=({node:r,layout:n})=>{const l=e.active.overlay,D={node:r,layout:n};l||Object.defineProperties(D,{id:{enumerable:!0,configurable:!0,get:()=>e.active.draggable?.id},data:{enumerable:!0,configurable:!0,get:()=>e.active.draggable?.data},transformers:{enumerable:!0,configurable:!0,get:()=>Object.fromEntries(Object.entries(e.active.draggable?e.active.draggable.transformers:{}).filter(([u])=>u!=="addDraggable-existing-offset"))},transform:{enumerable:!0,configurable:!0,get:()=>{const u=Object.values(e.active.overlay?e.active.overlay.transformers:[]);return u.sort((i,y)=>i.order-y.order),u.reduce((i,y)=>y.callback(i),E())}},transformed:{enumerable:!0,configurable:!0,get:()=>e.active.overlay?V(e.active.overlay.layout,e.active.overlay.transform):new Y({x:0,y:0,width:0,height:0})}}),o("active","overlay",D)},A=()=>o("active","overlay",null),f=(r,n)=>{$(()=>{o("sensors",r,"coordinates",{origin:{...n},current:{...n}}),o("active","sensorId",r)})},k=r=>{const n=e.active.sensorId;n&&o("sensors",n,"coordinates","current",{...r})},j=()=>o("active","sensorId",null),T=(r,n)=>{const l={};for(const u of Object.values(e.sensors))if(u)for(const[i,y]of Object.entries(u.activators))l[i]??=[],l[i].push({sensor:u,activator:y});const D={};for(const u in l){let i=u;n&&(i=`on${u}`),D[i]=y=>{for(const{activator:x}of l[u]){if(e.active.sensor)break;x(y,r)}}}return D},O=()=>{let r=!1;const n=Object.values(e.draggables),l=Object.values(e.droppables),D=e.active.overlay;return $(()=>{const u=new WeakMap;for(const i of n)if(i){const y=i.layout;u.has(i.node)||u.set(i.node,L(i.node));const x=u.get(i.node);z(y,x)||(o("draggables",i.id,"layout",x),r=!0)}for(const i of l)if(i){const y=i.layout;u.has(i.node)||u.set(i.node,L(i.node));const x=u.get(i.node);z(y,x)||(o("droppables",i.id,"layout",x),r=!0)}if(D){const i=D.layout,y=L(D.node);z(i,y)||(o("active","overlay","layout",y),r=!0)}}),r},S=()=>{const r=e.active.overlay??e.active.draggable;if(r){const n=a.collisionDetector(r,Object.values(e.droppables),{activeDroppableId:e.active.droppableId}),l=n?n.id:null;e.active.droppableId!==l&&o("active","droppableId",l)}},q=r=>{const n={id:"sensorMove",order:0,callback:l=>e.active.sensor?{x:l.x+e.active.sensor.coordinates.delta.x,y:l.y+e.active.sensor.coordinates.delta.y}:l};O(),$(()=>{o("active","draggableId",r),s("draggables",r,n)}),S()},B=()=>{const r=M(()=>e.active.draggableId);$(()=>{r!==null&&g("draggables",r,"sensorMove"),o("active",["draggableId","droppableId"],null)}),O()},H=r=>{P(()=>{const n=e.active.draggable;n&&M(()=>r({draggable:n}))})},K=r=>{P(()=>{const n=e.active.draggable;if(n){const l=M(()=>e.active.overlay);Object.values(l?l.transform:n.transform),M(()=>r({draggable:n,overlay:l}))}})},J=r=>{P(()=>{const n=e.active.draggable,l=e.active.droppable;n&&M(()=>r({draggable:n,droppable:l,overlay:e.active.overlay}))})},U=r=>{P(({previousDraggable:n,previousDroppable:l,previousOverlay:D})=>{const u=e.active.draggable,i=u?e.active.droppable:null,y=u?e.active.overlay:null;return!u&&n&&M(()=>r({draggable:n,droppable:l,overlay:D})),{previousDraggable:u,previousDroppable:i,previousOverlay:y}},{previousDraggable:null,previousDroppable:null,previousOverlay:null})};K(()=>S()),a.onDragStart&&H(a.onDragStart),a.onDragMove&&K(a.onDragMove),a.onDragOver&&J(a.onDragOver),a.onDragEnd&&U(a.onDragEnd);const le=[e,{addTransformer:s,removeTransformer:g,addDraggable:d,removeDraggable:p,addDroppable:b,removeDroppable:v,addSensor:I,removeSensor:w,setOverlay:h,clearOverlay:A,recomputeLayouts:O,detectCollisions:S,draggableActivators:T,sensorStart:f,sensorMove:k,sensorEnd:j,dragStart:q,dragEnd:B,onDragStart:H,onDragMove:K,onDragOver:J,onDragEnd:U}];return W(ne.Provider,{value:le,get children(){return a.children}})},N=()=>ae(ne)||null,De=(t="pointer-sensor")=>{const[a,{addSensor:e,removeSensor:o,sensorStart:s,sensorMove:g,sensorEnd:d,dragStart:p,dragEnd:c}]=N(),b=250,v=10;X(()=>{e({id:t,activators:{pointerdown:A}})}),R(()=>{o(t)});const m=()=>a.active.sensorId===t,I={x:0,y:0};let w=null,h=null;const A=(S,q)=>{S.button===0&&(document.addEventListener("pointermove",j),document.addEventListener("pointerup",T),h=q,I.x=S.clientX,I.y=S.clientY,w=window.setTimeout(k,b))},f=()=>{w&&(clearTimeout(w),w=null),document.removeEventListener("pointermove",j),document.removeEventListener("pointerup",T),document.removeEventListener("selectionchange",O)},k=()=>{a.active.sensor?m()||f():(s(t,I),p(h),O(),document.addEventListener("selectionchange",O))},j=S=>{const q={x:S.clientX,y:S.clientY};if(!a.active.sensor){const B={x:q.x-I.x,y:q.y-I.y};Math.sqrt(B.x**2+B.y**2)>v&&k()}m()&&(S.preventDefault(),g(q))},T=S=>{f(),m()&&(S.preventDefault(),c(),d())},O=()=>{window.getSelection()?.removeAllRanges()}},je=t=>(De(),te(()=>t.children)),F=t=>({transform:`translate3d(${t.x}px, ${t.y}px, 0)`}),we=(t,a={})=>{const[e,{addDraggable:o,removeDraggable:s,draggableActivators:g}]=N(),[d,p]=oe(null);X(()=>{const m=d();m&&o({id:t,node:m,layout:L(m),data:a})}),R(()=>s(t));const c=()=>e.active.draggableId===t,b=()=>e.draggables[t]?.transform||E();return Object.defineProperties((m,I)=>{const w=I?I():{};P(()=>{const h=d(),A=g(t);if(h)for(const f in A)h.addEventListener(f,A[f]);R(()=>{if(h)for(const f in A)h.removeEventListener(f,A[f])})}),p(m),w.skipTransform||P(()=>{const h=b();if(G(h,E()))m.style.removeProperty("transform");else{const A=F(b());m.style.setProperty("transform",A.transform??null)}})},{ref:{enumerable:!0,value:p},isActiveDraggable:{enumerable:!0,get:c},dragActivators:{enumerable:!0,get:()=>g(t,!0)},transform:{enumerable:!0,get:b}})},Oe=(t,a={})=>{const[e,{addDroppable:o,removeDroppable:s}]=N(),[g,d]=oe(null);X(()=>{const v=g();v&&o({id:t,node:v,layout:L(v),data:a})}),R(()=>s(t));const p=()=>e.active.droppableId===t,c=()=>e.droppables[t]?.transform||E();return Object.defineProperties((v,m)=>{const I=m?m():{};d(v),I.skipTransform||P(()=>{const w=c();if(G(w,E()))v.style.removeProperty("transform");else{const h=F(c());v.style.setProperty("transform",h.transform??null)}})},{ref:{enumerable:!0,value:d},isActiveDroppable:{enumerable:!0,get:p},transform:{enumerable:!0,get:c}})},Te=t=>{const[a,{onDragStart:e,onDragEnd:o,setOverlay:s,clearOverlay:g}]=N();let d;e(({draggable:c})=>{s({node:c.node,layout:c.layout}),queueMicrotask(()=>{if(d){const b=L(d),v={x:(c.layout.width-b.width)/2,y:(c.layout.height-b.height)/2};b.x+=v.x,b.y+=v.y,s({node:d,layout:b})}})}),o(()=>queueMicrotask(g));const p=()=>{const c=a.active.overlay,b=a.active.draggable;return!c||!b?{}:{position:"fixed",transition:"transform 0s",top:`${c.layout.top}px`,left:`${c.layout.left}px`,"min-width":`${b.layout.width}px`,"min-height":`${b.layout.height}px`,...F(c.transform),...t.style}};return W(be,{get mount(){return document.body},get children(){return W(ce,{get when(){return a.active.draggable},get children(){var c=ye(),b=d;return typeof b=="function"?pe(b,c):d=c,de(c,(()=>{var v=te(()=>typeof t.children=="function");return()=>v()?t.children(a.active.draggable):t.children})()),ue(v=>{var m=t.class,I=p();return m!==v.e&&ge(c,v.e=m),v.t=ve(c,I,v.t),v},{e:void 0,t:void 0}),c}})}})},Se=(t,a,e)=>{const o=t.slice();return o.splice(e,0,...o.splice(a,1)),o},se=re(),$e=t=>{const[a]=N(),[e,o]=ee({initialIds:[],sortedIds:[]}),s=p=>p>=0&&p<e.initialIds.length;P(()=>{o("initialIds",[...t.ids]),o("sortedIds",[...t.ids])}),P(()=>{a.active.draggableId&&a.active.droppableId?M(()=>{const p=e.sortedIds.indexOf(a.active.draggableId),c=e.initialIds.indexOf(a.active.droppableId);if(!s(p)||!s(c))o("sortedIds",[...t.ids]);else if(p!==c){const b=Se(e.sortedIds,p,c);o("sortedIds",b)}}):o("sortedIds",[...t.ids])});const d=[e,{}];return W(se.Provider,{value:d,get children(){return t.children}})},Me=()=>ae(se)||null,Ae=(t,a)=>e=>{t(e),a(e)},qe=(t,a={})=>{const[e,{addTransformer:o,removeTransformer:s}]=N(),[g]=Me(),d=we(t,a),p=Oe(t,a),c=Ae(d.ref,p.ref),b=()=>g.initialIds.indexOf(t),v=()=>g.sortedIds.indexOf(t),m=f=>e.droppables[f]?.layout||null,I=()=>{const f=E(),k=b(),j=v();if(j!==k){const T=m(t),O=m(g.initialIds[j]);T&&O&&(f.x=O.x-T.x,f.y=O.y-T.y)}return f},w={id:"sortableOffset",order:100,callback:f=>{const k=I();return{x:f.x+k.x,y:f.y+k.y}}};X(()=>o("droppables",t,w)),R(()=>s("droppables",t,w.id));const h=()=>(t===e.active.draggableId&&!e.active.overlay?e.draggables[t]?.transform:e.droppables[t]?.transform)||E();return Object.defineProperties(f=>{d(f,()=>({skipTransform:!0})),p(f,()=>({skipTransform:!0})),P(()=>{const k=h();if(G(k,E()))f.style.removeProperty("transform");else{const j=F(h());f.style.setProperty("transform",j.transform??null)}})},{ref:{enumerable:!0,value:c},transform:{enumerable:!0,get:h},isActiveDraggable:{enumerable:!0,get:()=>d.isActiveDraggable},dragActivators:{enumerable:!0,get:()=>d.dragActivators},isActiveDroppable:{enumerable:!0,get:()=>p.isActiveDroppable}})};export{je as D,$e as S,Te as a,Pe as b,Ee as c,qe as d,N as u};
