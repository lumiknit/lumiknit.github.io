import{t}from"./index-BsL75xPk.js";import{createTheme as e}from"./index-cWSfb2Tm.js";const r=[{tag:t.strong,fontWeight:"bold"},{tag:t.emphasis,fontStyle:"italic"},{tag:t.link,textDecoration:"underline"},{tag:t.heading,fontWeight:"bold",textDecoration:"underline"},{tag:t.strikethrough,textDecoration:"line-through"}],n={invalid:"#d1242f",comment:"#329033",docComment:"#448c27",literal:"#0550ae",string:"#1d4a8c",keyword:"#cf222e",type:"#c76618",func:"#8250df",var:"#953800",tag:"#116329",link:"#0550ae"},i={invalid:"#f85149",comment:"#9198a1",docComment:"#9198a1",literal:"#79c0ff",string:"#a5d6ff",keyword:"#ff7b72",type:"#ffa657",func:"#d2a8ff",var:"#ffa657",tag:"#7ee787",link:"#79c0ff"},a=o=>[...r,{tag:t.invalid,color:o.invalid},{tag:[t.comment,t.lineComment,t.blockComment],fontStyle:"italic",color:o.comment},{tag:[t.docComment,t.docString,t.documentMeta],fontStyle:"italic",color:o.docComment},{tag:[t.null,t.bool,t.atom,t.special(t.variableName)],fontStyle:"italic",color:o.literal},{tag:[t.literal,t.integer,t.float,t.number],color:o.literal},{tag:[t.character,t.string,t.regexp,t.special(t.string),t.special(t.regexp)],color:o.string},{tag:[t.escape],fontWeight:"bold",color:o.string},{tag:[t.keyword,t.controlKeyword,t.moduleKeyword,t.definitionKeyword],fontWeight:"bold",color:o.keyword},{tag:[t.typeName,t.className],fontWeight:"bold",color:o.type},{tag:[t.function(t.variableName),t.function(t.propertyName)],color:o.func},{tag:[t.definition(t.variableName),t.propertyName,t.attributeName],color:o.var},{tag:[t.macroName,t.meta],fontWeight:"bold",color:o.func},{tag:[t.namespace],fontWeight:"bold",color:o.type},{tag:[t.tagName],fontWeight:"bold",color:o.tag},{tag:[t.labelName],fontWeight:"bold",fontStyle:"italic",color:o.literal},{tag:[t.quote],color:o.literal},{tag:[t.link],textDecoration:"underline",color:o.link}],g=e({variant:"light",settings:{background:"#ffffff",foreground:"#1f2328",caret:"#0969da",selection:"#006edb80",gutterBackground:"#ffffff",gutterForeground:"#1f2328",lineHighlight:"#70809018"},styles:a(n)}),l=e({variant:"dark",settings:{background:"#000000",foreground:"#f0f6fc",caret:"#45a6ff",selection:"#0576ff80",gutterBackground:"#000000",gutterForeground:"#f0f6fc",lineHighlight:"#70809060"},styles:a(i)});export{l as defaultDark,g as defaultLight};
