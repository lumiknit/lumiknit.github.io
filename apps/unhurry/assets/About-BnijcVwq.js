import{c as m,o as p,v as E,P as I,t as u,i as r,a as o,V as j,M as f,S as N,z as _,d as P,h as U}from"./index-DC6p1vEH.js";import{o as W}from"./ConfirmModal-BchIuF5p.js";import"./mermaid-0kDHvlpH.js";import"./hljs-CYh1hj9C.js";import"./marked-CPAjdABQ.js";const T=async()=>{if(localStorage.clear(),sessionStorage.clear(),window.indexedDB){const n=await indexedDB.databases();for(const s of n)indexedDB.deleteDatabase(s.name)}};var q=u("<p><b>Platform</b>: Web Browser"),z=u("<p><b>Platform</b>: Desktop (with Tauri)"),G=u('<span class="tag is-primary ml-1">New Version!'),F=u("<p><b>Latest Version</b>: "),H=u('<div class=container><div class=has-text-centered><h1 class=title> About Unhurry </h1><img class=unhurry-icon src=/unhurry.svg><p><b>Unhurry</b> is a front-end only LLM Web UI for quick and ease uses.</p><ul><li><b>Author</b>: <a target=_blank href=https://github.com/lumiknit>lumiknit (aasr4r4@gmail.com)</a></li><li class="is-inline-flex is-align-items-center"><b>Repository</b>: <a class="button is-dark"href=https://github.com/lumiknit/unhurry target=_blank> &nbsp; lumiknit/unhurry</a></li></ul><br><p><b>Version</b>: </p><br><a target=_blank href=https://github.com/lumiknit/unhurry/releases/latest>Visit the latest release page</a><br><p>If your data is corrupted or you want to reset all data, you can reset all data here.</p><button class="button is-danger">Reset All Data');const J=(n,s)=>{const e=n.split(".").map(t=>parseInt(t)),l=s.split(".").map(t=>parseInt(t));for(let t=0;t<Math.min(e.length,l.length);t++){if(e[t]>l[t])return 1;if(e[t]<l[t])return-1}return e.length-l.length},K=async()=>{const n=await fetch("https://api.github.com/repos/lumiknit/unhurry/releases/latest");if(n.ok){let e=(await n.json()).name;return e.startsWith("v")&&(e=e.slice(1)),e}},ee=()=>{const[n,s]=m(),[e,l]=m();p(async()=>{const a=await E();s(a),window._be=a,I.info("[About] BE service loaded",a==null?void 0:a.name())}),p(()=>{K().then(l)});const t=async()=>{await W("Are you sure to reset all data?")&&(await T(),P.success("All data has been reset."))};return(()=>{var a=H(),h=a.firstChild,$=h.firstChild,S=$.nextSibling,x=S.nextSibling,b=x.nextSibling,w=b.firstChild,y=w.nextSibling,k=y.firstChild,v=k.nextSibling,g=v.nextSibling,C=g.firstChild,A=b.nextSibling,c=A.nextSibling,B=c.firstChild;B.nextSibling;var D=c.nextSibling,d=D.nextSibling,L=d.nextSibling,R=L.nextSibling,V=R.nextSibling;return r(g,o(j,{}),C),r(h,o(N,{get children(){return[o(f,{get when(){return n()===void 0},get children(){return q()}}),o(f,{get when(){var i;return((i=n())==null?void 0:i.name())==="Tauri"},get children(){return z()}})]}}),c),r(c,"0.6.0",null),r(h,o(_,{get when(){return e()},get children(){var i=F(),M=i.firstChild;return M.nextSibling,r(i,e,null),r(i,o(_,{get when(){return J("0.6.0",e())<0},get children(){return G()}}),null),i}}),d),V.$$click=t,a})()};U(["click"]);export{ee as default};
