import{_ as X,ag as F,ah as Y,ai as _,aj as H,l as i,c as V,ak as U,al as $,a7 as q,ac as z,a8 as P,a6 as K,am as Q,an as W,ao as Z}from"./mermaid-B_THX1iI.js";import{G as B}from"./graph-BPeze7tG.js";import{l as I}from"./layout-Bn6dteMr.js";import{i as x}from"./_baseUniq-BXoNsvf3.js";import{c as L}from"./clone-DklZDr5O.js";import{m as A}from"./_basePickBy-Dg6YWlcH.js";import"./hljs-CYh1hj9C.js";import"./marked-CPAjdABQ.js";function E(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:ee(e),edges:ne(e)};return x(e.graph())||(t.value=L(e.graph())),t}function ee(e){return A(e.nodes(),function(t){var n=e.node(t),o=e.parent(t),c={v:t};return x(n)||(c.value=n),x(o)||(c.parent=o),c})}function ne(e){return A(e.edges(),function(t){var n=e.edge(t),o={v:t.v,w:t.w};return x(t.name)||(o.name=t.name),x(n)||(o.value=n),o})}var f=new Map,b=new Map,J=new Map,te=X(()=>{b.clear(),J.clear(),f.clear()},"clear"),O=X((e,t)=>{const n=b.get(t)||[];return i.trace("In isDescendant",t," ",e," = ",n.includes(e)),n.includes(e)},"isDescendant"),se=X((e,t)=>{const n=b.get(t)||[];return i.info("Descendants of ",t," is ",n),i.info("Edge is ",e),e.v===t||e.w===t?!1:n?n.includes(e.v)||O(e.v,t)||O(e.w,t)||n.includes(e.w):(i.debug("Tilt, ",t,",not in descendants"),!1)},"edgeInCluster"),G=X((e,t,n,o)=>{i.warn("Copying children of ",e,"root",o,"data",t.node(e),o);const c=t.children(e)||[];e!==o&&c.push(e),i.warn("Copying (nodes) clusterId",e,"nodes",c),c.forEach(a=>{if(t.children(a).length>0)G(a,t,n,o);else{const r=t.node(a);i.info("cp ",a," to ",o," with parent ",e),n.setNode(a,r),o!==t.parent(a)&&(i.warn("Setting parent",a,t.parent(a)),n.setParent(a,t.parent(a))),e!==o&&a!==e?(i.debug("Setting parent",a,e),n.setParent(a,e)):(i.info("In copy ",e,"root",o,"data",t.node(e),o),i.debug("Not Setting parent for node=",a,"cluster!==rootId",e!==o,"node!==clusterId",a!==e));const u=t.edges(a);i.debug("Copying Edges",u),u.forEach(l=>{i.info("Edge",l);const v=t.edge(l.v,l.w,l.name);i.info("Edge data",v,o);try{se(l,o)?(i.info("Copying as ",l.v,l.w,v,l.name),n.setEdge(l.v,l.w,v,l.name),i.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):i.info("Skipping copy of edge ",l.v,"-->",l.w," rootId: ",o," clusterId:",e)}catch(C){i.error(C)}})}i.debug("Removing node",a),t.removeNode(a)})},"copy"),R=X((e,t)=>{const n=t.children(e);let o=[...n];for(const c of n)J.set(c,e),o=[...o,...R(c,t)];return o},"extractDescendants"),ie=X((e,t,n)=>{const o=e.edges().filter(l=>l.v===t||l.w===t),c=e.edges().filter(l=>l.v===n||l.w===n),a=o.map(l=>({v:l.v===t?n:l.v,w:l.w===t?t:l.w})),r=c.map(l=>({v:l.v,w:l.w}));return a.filter(l=>r.some(v=>l.v===v.v&&l.w===v.w))},"findCommonEdges"),D=X((e,t,n)=>{const o=t.children(e);if(i.trace("Searching children of id ",e,o),o.length<1)return e;let c;for(const a of o){const r=D(a,t,n),u=ie(t,n,r);if(r)if(u.length>0)c=r;else return r}return c},"findNonClusterChild"),k=X(e=>!f.has(e)||!f.get(e).externalConnections?e:f.has(e)?f.get(e).id:e,"getAnchorId"),re=X((e,t)=>{if(!e||t>10){i.debug("Opting out, no graph ");return}else i.debug("Opting in, graph ");e.nodes().forEach(function(n){e.children(n).length>0&&(i.warn("Cluster identified",n," Replacement id in edges: ",D(n,e,n)),b.set(n,R(n,e)),f.set(n,{id:D(n,e,n),clusterData:e.node(n)}))}),e.nodes().forEach(function(n){const o=e.children(n),c=e.edges();o.length>0?(i.debug("Cluster identified",n,b),c.forEach(a=>{const r=O(a.v,n),u=O(a.w,n);r^u&&(i.warn("Edge: ",a," leaves cluster ",n),i.warn("Descendants of XXX ",n,": ",b.get(n)),f.get(n).externalConnections=!0)})):i.debug("Not a cluster ",n,b)});for(let n of f.keys()){const o=f.get(n).id,c=e.parent(o);c!==n&&f.has(c)&&!f.get(c).externalConnections&&(f.get(n).id=c)}e.edges().forEach(function(n){const o=e.edge(n);i.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(n)),i.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(e.edge(n)));let c=n.v,a=n.w;if(i.warn("Fix XXX",f,"ids:",n.v,n.w,"Translating: ",f.get(n.v)," --- ",f.get(n.w)),f.get(n.v)||f.get(n.w)){if(i.warn("Fixing and trying - removing XXX",n.v,n.w,n.name),c=k(n.v),a=k(n.w),e.removeEdge(n.v,n.w,n.name),c!==n.v){const r=e.parent(c);f.get(r).externalConnections=!0,o.fromCluster=n.v}if(a!==n.w){const r=e.parent(a);f.get(r).externalConnections=!0,o.toCluster=n.w}i.warn("Fix Replacing with XXX",c,a,n.name),e.setEdge(c,a,o,n.name)}}),i.warn("Adjusted Graph",E(e)),T(e,0),i.trace(f)},"adjustClustersAndEdges"),T=X((e,t)=>{var c,a;if(i.warn("extractor - ",t,E(e),e.children("D")),t>10){i.error("Bailing out");return}let n=e.nodes(),o=!1;for(const r of n){const u=e.children(r);o=o||u.length>0}if(!o){i.debug("Done, no node has children",e.nodes());return}i.debug("Nodes = ",n,t);for(const r of n)if(i.debug("Extracting node",r,f,f.has(r)&&!f.get(r).externalConnections,!e.parent(r),e.node(r),e.children("D")," Depth ",t),!f.has(r))i.debug("Not a cluster",r,t);else if(!f.get(r).externalConnections&&e.children(r)&&e.children(r).length>0){i.warn("Cluster without external connections, without a parent and with children",r,t);let l=e.graph().rankdir==="TB"?"LR":"TB";(a=(c=f.get(r))==null?void 0:c.clusterData)!=null&&a.dir&&(l=f.get(r).clusterData.dir,i.warn("Fixing dir",f.get(r).clusterData.dir,l));const v=new B({multigraph:!0,compound:!0}).setGraph({rankdir:l,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});i.warn("Old graph before copy",E(e)),G(r,e,v,r),e.setNode(r,{clusterNode:!0,id:r,clusterData:f.get(r).clusterData,label:f.get(r).label,graph:v}),i.warn("New graph after copy node: (",r,")",E(v)),i.debug("Old graph after copy",E(e))}else i.warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!f.get(r).externalConnections," no parent: ",!e.parent(r)," children ",e.children(r)&&e.children(r).length>0,e.children("D"),t),i.debug(f);n=e.nodes(),i.warn("New list of nodes",n);for(const r of n){const u=e.node(r);i.warn(" Now next level",r,u),u!=null&&u.clusterNode&&T(u.graph,t+1)}},"extractor"),M=X((e,t)=>{if(t.length===0)return[];let n=Object.assign([],t);return t.forEach(o=>{const c=e.children(o),a=M(e,c);n=[...n,...a]}),n},"sorter"),oe=X(e=>M(e,e.children()),"sortNodesByHierarchy"),j=X(async(e,t,n,o,c,a)=>{i.warn("Graph in recursive render:XAX",E(t),c);const r=t.graph().rankdir;i.trace("Dir in recursive render - dir:",r);const u=e.insert("g").attr("class","root");t.nodes()?i.info("Recursive render XXX",t.nodes()):i.info("No nodes found for",t),t.edges().length>0&&i.info("Recursive edges",t.edge(t.edges()[0]));const l=u.insert("g").attr("class","clusters"),v=u.insert("g").attr("class","edgePaths"),C=u.insert("g").attr("class","edgeLabels"),g=u.insert("g").attr("class","nodes");await Promise.all(t.nodes().map(async function(d){const s=t.node(d);if(c!==void 0){const w=JSON.parse(JSON.stringify(c.clusterData));i.trace(`Setting data for parent cluster XXX
 Node.id = `,d,`
 data=`,w.height,`
Parent cluster`,c.height),t.setNode(c.id,w),t.parent(d)||(i.trace("Setting parent",d,c.id),t.setParent(d,c.id,w))}if(i.info("(Insert) Node XXX"+d+": "+JSON.stringify(t.node(d))),s!=null&&s.clusterNode){i.info("Cluster identified XBX",d,s.width,t.node(d));const{ranksep:w,nodesep:m}=t.graph();s.graph.setGraph({...s.graph.graph(),ranksep:w+25,nodesep:m});const N=await j(g,s.graph,n,o,t.node(d),a),S=N.elem;U(s,S),s.diff=N.diff||0,i.info("New compound node after recursive render XAX",d,"width",s.width,"height",s.height),$(S,s)}else t.children(d).length>0?(i.trace("Cluster - the non recursive path XBX",d,s.id,s,s.width,"Graph:",t),i.trace(D(s.id,t)),f.set(s.id,{id:D(s.id,t),node:s})):(i.trace("Node - the non recursive path XAX",d,g,t.node(d),r),await q(g,t.node(d),{config:a,dir:r}))})),await X(async()=>{const d=t.edges().map(async function(s){const w=t.edge(s.v,s.w,s.name);i.info("Edge "+s.v+" -> "+s.w+": "+JSON.stringify(s)),i.info("Edge "+s.v+" -> "+s.w+": ",s," ",JSON.stringify(t.edge(s))),i.info("Fix",f,"ids:",s.v,s.w,"Translating: ",f.get(s.v),f.get(s.w)),await Z(C,w)});await Promise.all(d)},"processEdges")(),i.info("Graph before layout:",JSON.stringify(E(t))),i.info("############################################# XXX"),i.info("###                Layout                 ### XXX"),i.info("############################################# XXX"),I(t),i.info("Graph after layout:",JSON.stringify(E(t)));let y=0,{subGraphTitleTotalMargin:p}=z(a);return await Promise.all(oe(t).map(async function(d){var w;const s=t.node(d);if(i.info("Position XBX => "+d+": ("+s.x,","+s.y,") width: ",s.width," height: ",s.height),s!=null&&s.clusterNode)s.y+=p,i.info("A tainted cluster node XBX1",d,s.id,s.width,s.height,s.x,s.y,t.parent(d)),f.get(s.id).node=s,P(s);else if(t.children(d).length>0){i.info("A pure cluster node XBX1",d,s.id,s.x,s.y,s.width,s.height,t.parent(d)),s.height+=p,t.node(s.parentId);const m=(s==null?void 0:s.padding)/2||0,N=((w=s==null?void 0:s.labelBBox)==null?void 0:w.height)||0,S=N-m||0;i.debug("OffsetY",S,"labelHeight",N,"halfPadding",m),await K(l,s),f.get(s.id).node=s}else{const m=t.node(s.parentId);s.y+=p/2,i.info("A regular node XBX1 - using the padding",s.id,"parent",s.parentId,s.width,s.height,s.x,s.y,"offsetY",s.offsetY,"parent",m,m==null?void 0:m.offsetY,s),P(s)}})),t.edges().forEach(function(d){const s=t.edge(d);i.info("Edge "+d.v+" -> "+d.w+": "+JSON.stringify(s),s),s.points.forEach(S=>S.y+=p/2);const w=t.node(d.v);var m=t.node(d.w);const N=Q(v,s,f,n,w,m,o);W(s,N)}),t.nodes().forEach(function(d){const s=t.node(d);i.info(d,s.type,s.diff),s.isGroup&&(y=s.diff)}),i.warn("Returning from recursive render XAX",u,y),{elem:u,diff:y}},"recursiveRender"),me=X(async(e,t)=>{var a,r,u,l,v,C;const n=new B({multigraph:!0,compound:!0}).setGraph({rankdir:e.direction,nodesep:((a=e.config)==null?void 0:a.nodeSpacing)||((u=(r=e.config)==null?void 0:r.flowchart)==null?void 0:u.nodeSpacing)||e.nodeSpacing,ranksep:((l=e.config)==null?void 0:l.rankSpacing)||((C=(v=e.config)==null?void 0:v.flowchart)==null?void 0:C.rankSpacing)||e.rankSpacing,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),o=t.select("g");F(o,e.markers,e.type,e.diagramId),Y(),_(),H(),te(),e.nodes.forEach(g=>{n.setNode(g.id,{...g}),g.parentId&&n.setParent(g.id,g.parentId)}),i.debug("Edges:",e.edges),e.edges.forEach(g=>{if(g.start===g.end){const h=g.start,y=h+"---"+h+"---1",p=h+"---"+h+"---2",d=n.node(h);n.setNode(y,{domId:y,id:y,parentId:d.parentId,labelStyle:"",label:"",padding:0,shape:"labelRect",style:"",width:10,height:10}),n.setParent(y,d.parentId),n.setNode(p,{domId:p,id:p,parentId:d.parentId,labelStyle:"",padding:0,shape:"labelRect",label:"",style:"",width:10,height:10}),n.setParent(p,d.parentId);const s=structuredClone(g),w=structuredClone(g),m=structuredClone(g);s.label="",s.arrowTypeEnd="none",s.id=h+"-cyclic-special-1",w.arrowTypeStart="none",w.arrowTypeEnd="none",w.id=h+"-cyclic-special-mid",m.label="",d.isGroup&&(s.fromCluster=h,m.toCluster=h),m.id=h+"-cyclic-special-2",m.arrowTypeStart="none",n.setEdge(h,y,s,h+"-cyclic-special-0"),n.setEdge(y,p,w,h+"-cyclic-special-1"),n.setEdge(p,h,m,h+"-cyc<lic-special-2")}else n.setEdge(g.start,g.end,{...g},g.id)}),i.warn("Graph at first:",JSON.stringify(E(n))),re(n),i.warn("Graph after XAX:",JSON.stringify(E(n)));const c=V();await j(o,n,e.type,e.diagramId,void 0,c)},"render");export{me as render};
