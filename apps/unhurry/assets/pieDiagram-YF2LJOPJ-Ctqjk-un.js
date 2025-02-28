import{p as N}from"./chunk-TMUBEWPD-CKI_rwQr.js";import{_ as i,g as B,s as U,a as H,b as K,n as V,o as Z,l as D,c as j,D as q,H as J,K as Q,L as z,M as X,e as Y,v as ee,N as te,F as ae}from"./mermaid-CQBNahGa.js";import{p as re}from"./gitGraph-YCYPL57B-CXNMo3Sn.js";import"./hljs-CYh1hj9C.js";import"./_baseUniq-C-kCnw0Y.js";import"./_basePickBy-BvoW71E0.js";import"./clone-D_HhRDtt.js";var ie=ae.pie,C={sections:new Map,showData:!1},h=C.sections,w=C.showData,se=structuredClone(ie),oe=i(()=>structuredClone(se),"getConfig"),ne=i(()=>{h=new Map,w=C.showData,ee()},"clear"),le=i(({label:e,value:a})=>{h.has(e)||(h.set(e,a),D.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),ce=i(()=>h,"getSections"),pe=i(e=>{w=e},"setShowData"),de=i(()=>w,"getShowData"),F={getConfig:oe,clear:ne,setDiagramTitle:Z,getDiagramTitle:V,setAccTitle:K,getAccTitle:H,setAccDescription:U,getAccDescription:B,addSection:le,getSections:ce,setShowData:pe,getShowData:de},ge=i((e,a)=>{N(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),ue={parse:i(async e=>{const a=await re("pie",e);D.debug(a),ge(a,F)},"parse")},fe=i(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),he=fe,me=i(e=>{const a=[...e.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,n)=>n.value-s.value);return te().value(s=>s.value)(a)},"createPieArcs"),ve=i((e,a,G,s)=>{D.debug(`rendering pie chart
`+e);const n=s.db,y=j(),T=q(n.getConfig(),y.pie),$=40,o=18,d=4,c=450,m=c,v=J(a),l=v.append("g");l.attr("transform","translate("+m/2+","+c/2+")");const{themeVariables:r}=y;let[A]=Q(r.pieOuterStrokeWidth);A??(A=2);const _=T.textPosition,g=Math.min(m,c)/2-$,M=z().innerRadius(0).outerRadius(g),W=z().innerRadius(g*_).outerRadius(g*_);l.append("circle").attr("cx",0).attr("cy",0).attr("r",g+A/2).attr("class","pieOuterCircle");const b=n.getSections(),S=me(b),L=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],p=X(L);l.selectAll("mySlices").data(S).enter().append("path").attr("d",M).attr("fill",t=>p(t.data.label)).attr("class","pieCircle");let E=0;b.forEach(t=>{E+=t}),l.selectAll("mySlices").data(S).enter().append("text").text(t=>(t.data.value/E*100).toFixed(0)+"%").attr("transform",t=>"translate("+W.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),l.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const x=l.selectAll(".legend").data(p.domain()).enter().append("g").attr("class","legend").attr("transform",(t,u)=>{const f=o+d,P=f*p.domain().length/2,R=12*o,I=u*f-P;return"translate("+R+","+I+")"});x.append("rect").attr("width",o).attr("height",o).style("fill",p).style("stroke",p),x.data(S).append("text").attr("x",o+d).attr("y",o-d).text(t=>{const{label:u,value:f}=t.data;return n.getShowData()?`${u} [${f}]`:u});const O=Math.max(...x.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),k=m+$+o+d+O;v.attr("viewBox",`0 0 ${k} ${c}`),Y(v,c,k,T.useMaxWidth)},"draw"),Se={draw:ve},Ae={parser:ue,db:F,renderer:Se,styles:he};export{Ae as diagram};
