"use strict";(self.webpackChunkLiveHelperChat=self.webpackChunkLiveHelperChat||[]).push([[821],{6821:function(t,e,i){i.r(e),i.d(e,{needhelpWidget:function(){return a}});var s=i(5671),n=i(3144),o=(i(7761),i(3031)),h=i(2137),a=function(){function t(e){(0,s.Z)(this,t),this.attributes={},this.hidden=!1,this.widgetOpen=!1,this.invitationOpen=!1,this.nhOpen=!1,this.delayProcessed=!1,this.cont=new o.a((e||"lhc")+"_needhelp_widget_v2",h.a.getAbstractStyle({zindex:"2147483639",width:"320px",height:"135px",position:"fixed",display:"none"}),null,"iframe"),this.loadStatus={main:!1,theme:!1,status:!1}}return(0,n.Z)(t,[{key:"checkLoadStatus",value:function(){1==this.loadStatus.theme&&1==this.loadStatus.main&&1==this.loadStatus.status&&(this.cont.elmDomDoc.body.style.display="")}},{key:"init",value:function(t,e){var i=this;this.attributes=t;var s={bottom:70+this.attributes.widgetDimesions.value.wbottom+"px",right:65+this.attributes.widgetDimesions.value.wright+"px"},n=!1;if("bottom_left"==t.position_placement||"full_height_left"==t.position_placement?(s={bottom:70+this.attributes.widgetDimesions.value.wbottom+"px",left:65+this.attributes.widgetDimesions.value.wright+"px"},n=!0):"middle_left"==t.position_placement?(s={bottom:"calc(50% + 35px)",left:65+this.attributes.widgetDimesions.value.wright+"px"},n=!0):"middle_right"==t.position_placement&&(s={bottom:"calc(50% + 35px)",right:65+this.attributes.widgetDimesions.value.wright+"px"}),this.cont.massRestyle(s),this.attributes=t,this.cont.tmpl=e.html.replace("{dev_type}",!0===this.attributes.isMobile?"lhc-mobile":"lhc-desktop"),this.cont.bodyId="need-help",null===this.cont.constructUIIframe("",this.attributes.staticJS.dir))return null;this.cont.elmDomDoc.body.style.display="none",this.cont.elmDom.className+=!0===this.attributes.isMobile?" lhc-mobile":" lhc-desktop",this.cont.attachUserEventListener("click",(function(e){t.eventEmitter.emitEvent("nhClicked",[{event:e,sender:"closeButton"}]),t.eventEmitter.emitEvent("showWidget",[{event:e}])}),"start-chat-btn","nhstrt");var o=this;this.cont.attachUserEventListener("click",(function(e){t.eventEmitter.emitEvent("nhClosed",[{sender:"closeButton"}]),e.stopPropagation(),o.hide(!0)}),"close-need-help-btn","nhcls"),e.dimensions&&(1==n&&e.dimensions.right&&(e.dimensions.left=e.dimensions.right,delete e.dimensions.right),this.cont.massRestyle(e.dimensions)),this.cont.insertCssRemoteFile({onload:function(){i.loadStatus.main=!0,i.checkLoadStatus()},crossOrigin:"anonymous",href:this.attributes.staticJS.widget_css},!0),1==this.attributes.isMobile&&this.cont.insertCssRemoteFile({crossOrigin:"anonymous",href:this.attributes.staticJS.widget_mobile_css}),this.attributes.theme?this.cont.insertCssRemoteFile({onload:function(){i.loadStatus.theme=!0,i.checkLoadStatus()},id:"lhc-theme-needhelp",crossOrigin:"anonymous",href:this.attributes.LHC_API.args.lhc_base_url+"/widgetrestapi/themeneedhelp/"+this.attributes.theme+"?v="+this.attributes.theme_v},!0):(this.loadStatus.theme=!0,this.checkLoadStatus()),t.sload.subscribe((function(t){t&&(i.loadStatus.status=!0,i.checkLoadStatus())})),e.ap||(t.eventEmitter.addListener("showInvitation",(function(){i.invitationOpen=!0,i.hide()})),t.eventEmitter.addListener("chatStarted",(function(){i.hide(!0)})),t.eventEmitter.addListener("hideInvitation",(function(){i.invitationOpen=!1,i.show()})),t.eventEmitter.addListener("cancelInvitation",(function(){i.invitationOpen=!1,i.show()})),t.msgsnippet_status.subscribe((function(t){1==t&&i.hide(!0)})),t.shidden.subscribe((function(t){t?i.hide(!1):i.show()}))),setTimeout((function(){i.delayProcessed=!0,t.widgetStatus.subscribe((function(t){1==t?(i.widgetOpen=!0,i.hide()):(i.widgetOpen=!1,i.show())})),t.onlineStatus.subscribe((function(t){if(0==t){var e=i.hidden;i.hide(),!1===e&&(i.hidden=!1)}else i.show()}))}),e.delay+this.attributes.status_delay),t.eventEmitter.addListener("reloadWidget",(function(){i.cont.insertCssRemoteFile({onload:function(){i.loadStatus.theme=!0,i.checkLoadStatus()},id:"lhc-theme-needhelp",crossOrigin:"anonymous",href:i.attributes.LHC_API.args.lhc_base_url+"/widgetrestapi/themeneedhelp/"+i.attributes.theme+"?v="+Date.now()},!0)}))}},{key:"hide",value:function(t){void 0!==t&&!0===t&&(this.attributes.userSession.hnh=Math.round(Date.now()/1e3),this.attributes.storageHandler.storeSessionInformation(this.attributes.userSession.getSessionAttributes()),this.hidden=!0),this.cont.hide(),1==this.nhOpen&&this.attributes.eventEmitter.emitEvent("nhHide",[]),this.nhOpen=!1}},{key:"show",value:function(){0!=this.delayProcessed&&1!=this.hidden&&1!=this.widgetOpen&&1!=this.invitationOpen&&0!=this.attributes.onlineStatus.value&&(!1===this.attributes.hideOffline?(this.cont.show(),0==this.nhOpen&&this.attributes.eventEmitter.emitEvent("nhShow",[]),this.nhOpen=!0):(this.cont.hide(),1==this.nhOpen&&this.attributes.eventEmitter.emitEvent("nhHide",[]),this.nhOpen=!1))}}]),t}()}}]);
//# sourceMappingURL=b10c9440ec454caf8cbd.js.map