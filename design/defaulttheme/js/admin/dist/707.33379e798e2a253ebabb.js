"use strict";(self.webpackChunkLHCReactAPPAdmin=self.webpackChunkLHCReactAPPAdmin||[]).push([[707],{4707:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(8152),c=a(4942),i=a(7294),s=a(9669),r=a.n(s),o=a(4478),l=a(9778);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){(0,c.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){switch(t.type){case"attr":return-1===(c=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats[c]=d(d({},e.chats[c]),t.value),e=d({},e));case"attr_remove":return-1===(c=e.chats.findIndex((function(e){return e[t.attr]==t.id})))?e:(e.chats[c]=d(d({},e.chats[c]),t.value),e=d({},e));case"update":return d(d({},e),t.value);case"add":if(-1===(c=e.chats.findIndex((function(e){return e.id==t.value.id}))))if(!0===t.static_order){var a=e.chats.findIndex((function(e){return e.id>t.value.id}));-1===a?e.chats.push(t.value):e.chats.splice(a,0,t.value)}else e.chats.unshift(t.value);else e.chats[c].active=!0,e.chats[c].mn=0,e.chats[c].support_chat=!1;return d({},e);case"remove":return-1===(c=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats.splice(c,1),d({},e));case"update_chat":return-1===(c=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats[c]=d(d({},e.chats[c]),t.value),d({},e));case"msg_received":if(-1===(c=e.chats.findIndex((function(e){return e.id==t.id}))))return e;e.chats[c].msg=t.value.msg;var n=document.getElementById("chat-tab-link-"+t.id);return null!==n&&n.classList.contains("active")?e.chats[c].active=!0:e.chats[c].active=!1,e.chats[c].mn=0==e.chats[c].active?e.chats[c].mn?e.chats[c].mn+t.value.mn:t.value.mn:0,!1===t.static_order&&e.chats.splice(0,0,e.chats.splice(c,1)[0]),d({},e);case"refocus":var c;if(-1!==(c=e.chats.findIndex((function(e){return 1==e.active})))){if(t.id==e.chats[c].id)return e;e.chats[c].active=!1}return-1!==(c=e.chats.findIndex((function(e){return e.id==t.id})))&&(e.chats[c].active=!0,e.chats[c].mn=0,e.chats[c].support_chat=!1),d({},e);case"group_offline":return e.group_offline=t.value,d({},e);default:throw new Error("Unknown action!")}}const h=function(e){var t=(0,i.useReducer)(m,{chats:[],group_offline:!1}),a=(0,n.Z)(t,2),c=a[0],s=a[1],u=(0,i.useRef)(c);(0,i.useEffect)((function(){u.current=c}),[c]);var d=function(){var e=[];return c.chats.map((function(t,a){return e.push(t.id)})),e},h=function(e){r().get(WWW_DIR_JAVASCRIPT+"front/tabs/(id)/"+(void 0!==e?e.join("/"):d().join("/"))).then((function(e){e.data.map((function(e,t){var a=document.getElementById("node-js-indicator-"+e.id);null!==a&&(e.live_status="wifi"==a.textContent),s({type:"update_chat",id:e.id,value:e})}))}))};document.getElementById("tabs")||(0,l.Z)((function(){c.chats&&0!=c.chats.length&&r().get(WWW_DIR_JAVASCRIPT+"front/tabs/(id)/"+d().join("/")).then((function(e){e.data.map((function(e,t){var a=document.getElementById("node-js-indicator-"+e.id);if(null!==a&&(e.live_status="wifi"==a.textContent),c.chats&&0!=c.chats.length){var n=c.chats.findIndex((function(t){return t.id==e.id}));-1!==n&&(c.chats[n].lmsg_id!==e.lmsg_id?e.mn=1:e.mn=c.chats[n].mn)}s({type:"update_chat",id:e.id,value:e})}))}))}),1e3),(0,i.useEffect)((function(){function t(t,a){a.focus&&s({type:"attr_remove",id:!0,attr:"active",value:{active:!1}}),s({type:"add",static_order:e.static_order,value:{id:t,active:a.focus}}),h([t])}function a(t,a){s({type:"add",value:{id:t,static_order:e.static_order,active:!1,mn:1}}),h([t])}function n(e){s({type:"remove",id:e})}function c(e){s({type:"refocus",id:e})}function i(t){s({type:"group_offline",value:lhinst.hidenicknamesstatus}),Object.keys(t.result_status).map((function(e){s({type:"update_chat",id:t.result_status[e].chat_id,value:t.result_status[e]})})),"false"!==t.result&&Object.keys(t.result).map((function(a){s({type:"msg_received",id:t.result[a].chat_id,value:{msg:t.result[a].msg,mn:t.result[a].mn},order_chats:e.static_order})}))}function r(e){s({type:"update_chat",id:e.id,value:{tp:"true",tx:e.txt}})}function o(e){s({type:"update_chat",id:e.id,value:{tp:"false"}})}function l(e){s({type:"update_chat",id:e.id,value:{live_status:e.status}})}function d(e,t){var a=u.current.chats.findIndex((function(e){return 1==e.active}));-1!==a&&(u.current.chats.length-1>a&&0==t?f(u.current.chats[a+1]):a>0&&1==t&&f(u.current.chats[a-1]))}if(ee.addListener("chatStartTab",t),ee.addListener("chatTabPreload",(function(e,a){u.current.chats&&0!=u.current.chats.length&&-1!==u.current.chats.findIndex((function(t){return t.id==e}))||t(e,a)})),ee.addListener("chatStartBackground",a),ee.addListener("removeSynchroChat",n),ee.addListener("chatTabClicked",c),ee.addListener("chatTabFocused",c),ee.addListener("chatAdminSync",i),ee.addListener("supportUnreadChat",(function(e){e.id&&1==e.unread&&s({type:"update_chat",id:e.id,value:{support_chat:!0}})})),ee.addListener("nodeJsTypingVisitor",r),ee.addListener("nodeJsTypingVisitorStopped",o),ee.addListener("nodeJsVisitorStatus",l),ee.addListener("activateNextTab",d),localStorage){var m=localStorage.getItem("achat_id");if(null!==m&&""!==m){var p=m.split(",").map(Number);1==e.static_order&&p.sort((function(e,t){return e-t}));var v=[];p.forEach((function(e){var t=document.getElementById("chat-tab-link-"+e);parseInt(e)>0&&v.push({id:parseInt(e),active:null!==t&&t.classList.contains("active")})})),s({type:"update",value:{chats:v}}),p.length>0&&h(p),setTimeout((function(){p.forEach((function(e){var t=document.getElementById("chat-tab-link-"+e);null!==t&&t.classList.contains("active")&&c(parseInt(e))}))}),1e3)}}return function(){ee.removeListener("chatStartTab",t),ee.removeListener("chatStartBackground",a),ee.removeListener("removeSynchroChat",n),ee.removeListener("chatTabClicked",c),ee.removeListener("chatTabFocused",c),ee.removeListener("chatAdminSync",i),ee.removeListener("supportUnreadChat",i),ee.removeListener("nodeJsTypingVisitor",r),ee.removeListener("nodeJsTypingVisitorStopped",o),ee.removeListener("nodeJsVisitorStatus",l),ee.removeListener("activateNextTab",d)}}),[]);var f=function(e){null!==document.getElementById("chat-tab-link-"+e.id)?($("#chat-tab-link-"+e.id).click(),new bootstrap.Tab(document.querySelector("#chat-tab-link-"+e.id)).show()):document.location=WWW_DIR_JAVASCRIPT+"front/default/(cid)/"+e.id+"/#!#chat-id-"+e.id},p=(0,o.$)("chat_tabs"),v=p.t;return p.i18n,i.createElement(i.Fragment,null,(!c.chats||0==c.chats.length)&&i.createElement("div",{className:"text-center text-muted p-2"},i.createElement("span",{className:"material-icons"},"chat"),v("chat_tabs.open_chats")),c.chats.map((function(e,t){return i.createElement("div",{title:e.id,onClick:function(){return f(e)},className:"p-1 action-image chat-tabs-row"+(e.active?" chat-tab-active":"")+(e.vwa?" long-response-chat":"")},i.createElement("div",{className:"fs12"},i.createElement("button",{type:"button",onClick:function(t){return function(e,t){e.preventDefault(),e.stopPropagation(),lhinst.removeDialogTab(t.id,$("#tabs"),!0),lhinst.channel&&lhinst.channel.postMessage({action:"close_chat",args:{chat_id:t.id}})}(t,e)},className:"float-end btn-link m-0 ms-1 p-0 btn btn-xs"},i.createElement("i",{className:"material-icons me-0"},"close")),e.dep&&i.createElement("span",{className:"float-end text-muted text-truncate mw-80px"},0==e.cs&&i.createElement("span",{title:v("chat_tabs.pending_status"),className:"material-icons chat-pending me-0"},"chat"),1==e.cs&&i.createElement("span",{title:v("chat_tabs.active_status"),className:"material-icons chat-active me-0"},"chat"),5==e.cs&&i.createElement("span",{title:v("chat_tabs.bot_status"),className:"material-icons chat-active me-0"},"android"),2==e.cs&&i.createElement("span",{title:v("chat_tabs.closed_status"),className:"material-icons chat-closed me-0"},"chat"),i.createElement("span",{className:"d-none d-lg-inline"},i.createElement("span",{className:"material-icons",title:e.dep},"home"),e.dep)),i.createElement("span",{className:"material-icons"+(1==e.pnd_rsp?" text-danger":" text-success")},1==e.pnd_rsp?"call_received":"call_made"),e.adicons&&e.adicons.map((function(t,a){return i.createElement("span",{onClick:function(a){return function(e,t,a){e.preventDefault(),e.stopPropagation(),t.has_popup&&lhc.revealModal({url:WWW_DIR_JAVASCRIPT+"chat/icondetailed/"+a.id+"/"+t.icon_id})}(a,t,e)},style:{color:t.color},className:"material-icons",title:t.title},t.icon)})),e.aicons&&Object.keys(e.aicons).map((function(t,a){return i.createElement("span",{style:{color:e.aicons[t].c?e.aicons[t].c:"#1d548e;"},className:"material-icons",title:e.aicons[t].i},e.aicons[t].i)})),e.vwa&&i.createElement("span",{title:e.vwa,className:"d-none d-lg-inline material-icons text-danger"},"timer"),e.support_chat&&i.createElement("span",{className:"whatshot blink-ani text-warning material-icons"},"whatshot"),i.createElement("i",{className:"material-icons "+("boolean"==typeof e.live_status?!0===e.live_status?"icon-user-online":"icon-user-offline":2==e.us?"icon-user-away":0==e.us?"icon-user-online":"icon-user-offline")},"boolean"==typeof e.live_status?!0===e.live_status?"wifi":"wifi_off":2==e.us?"wifi_1_bar":0==e.us?"wifi":"wifi_off"),i.createElement("i",{className:"material-icons icon-user-online "+(1==e.um?"icon-user-offline":"icon-user-online")},"send"),e.cc&&i.createElement("img",{className:"d-none d-lg-inline",title:e.cn,src:e.cc,alt:""})," ",(0==c.group_offline||!(0!=e.us))&&i.createElement("span",{className:"small-truncate-nick "+(e.mn>0||0==e.cs?"font-weight-bold ":"")+(0==e.cs?"text-danger":"")},e.nick||e.id),e.mn>0&&i.createElement("span",{className:"msg-nm ps-1"},"(",e.mn,")"),e.lmsg&&i.createElement("span",{className:"d-none d-xl-inline text-muted"}," ",e.lmsg),e.co==confLH.user_id&&i.createElement("span",{className:"d-none d-lg-inline float-end text-muted"},i.createElement("span",{title:v("chat_tabs.chat_owner"),className:"material-icons"},"account_box"))),(e.msg||"true"==e.tp&&e.tx)&&i.createElement("div",{className:"fs13 text-muted pt-1"},i.createElement("span",{title:"true"==e.tp&&e.tx?e.tx:e.msg,className:"d-none d-lg-inline-block text-truncate mw-100 "+(e.mn>0?"font-weight-bold":"")+("true"==e.tp&&e.tx?" font-italic":"")},"true"==e.tp&&e.tx?e.tx:e.msg)))})))}},9778:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294);const c=function(e,t){var a=(0,n.useRef)();(0,n.useEffect)((function(){a.current=e}),[e]),(0,n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}}}]);
//# sourceMappingURL=707.33379e798e2a253ebabb.js.map