const o=new Set(["success","warning","error"]),n=new Set(["light","medium","heavy","soft","rigid"]);async function t(e,r={},a){return window.__TAURI_INTERNALS__.invoke(e,r,a)}var s;(function(e){e.WINDOW_RESIZED="tauri://resize",e.WINDOW_MOVED="tauri://move",e.WINDOW_CLOSE_REQUESTED="tauri://close-requested",e.WINDOW_DESTROYED="tauri://destroyed",e.WINDOW_FOCUS="tauri://focus",e.WINDOW_BLUR="tauri://blur",e.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",e.WINDOW_THEME_CHANGED="tauri://theme-changed",e.WINDOW_CREATED="tauri://window-created",e.WEBVIEW_CREATED="tauri://webview-created",e.DRAG_ENTER="tauri://drag-enter",e.DRAG_OVER="tauri://drag-over",e.DRAG_DROP="tauri://drag-drop",e.DRAG_LEAVE="tauri://drag-leave"})(s||(s={}));const u={async vibrate(e){try{return{status:"ok",data:await t("plugin:haptics|vibrate",{duration:e})}}catch(r){if(r instanceof Error)throw r;return{status:"error",error:r}}},async impactFeedback(e){try{return{status:"ok",data:await t("plugin:haptics|impact_feedback",{style:e})}}catch(r){if(r instanceof Error)throw r;return{status:"error",error:r}}},async notificationFeedback(e){try{return{status:"ok",data:await t("plugin:haptics|notification_feedback",{type:e})}}catch(r){if(r instanceof Error)throw r;return{status:"error",error:r}}}},{vibrate:d,impactFeedback:_,notificationFeedback:f}=u;class E{constructor(){}name(){return"Tauri"}async greet(r){return t("greet",{name:r})}async fetch(r,a,i,c){return await t("fetch_http",{method:r,url:a,headers:i,body:c})}async vibrate(r){typeof r=="number"?d(r):o.has(r)?f(r):n.has(r)&&_(r)}}export{E as TauriService};
