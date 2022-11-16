if (self.CavalryLogger) { CavalryLogger.start_js(["XRtux"]); }

__d("DesktopHscrollUnitEventConstants",[],(function(a,b,c,d,e,f){a="DesktopHScrollUnit/itemInserted";f.HSCROLL_ITEM_INSERTED_EVENT=a;b="DesktopHScrollUnit/itemShown";f.HSCROLL_ITEM_SHOWN_EVENT=b;c="DesktopHScrollUnit/HideIndividualItem";f.HSCROLL_ITEM_HIDE_EVENT=c;d="DesktopHScrollUnit/scrollItemBeforeXout";f.HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT=d;e="DesktopHScrollUnit/unhideIndividualItem";f.HSCROLL_ITEM_UNHIDE_EVENT=e;a="logLastAdXout";f.HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN=a;b="onXoutIndividualItem";f.HSCROLL_PAGER_ITEM_HIDE_EVENT=b}),null);
__d("EntstreamFeedObject",["csx","CSS","Parent"],(function(a,b,c,d,e,f,g){var h={getRoot:function(a){return b("Parent").bySelector(a,"._5jmm")},getHscrollOuterRootIfAvailable:function(a){a=a;b("CSS").matchesSelector(a,"._170y")&&(a=h.getRoot(a.parentNode));return a}};e.exports=h}),null);
__d("EntstreamFeedObjectTracking",["csx","CSS","DOM","EntstreamFeedObject","Focus","ge"],(function(a,b,c,d,e,f,g){"use strict";f.register=a;f.hideAllFromActor=c;f.unhideAllFromActor=d;f.getRoot=e;var h=new Map();function a(a){var c=this.getRoot(a.nodeID);if(!c)return;var d=b("DOM").scry(c,"._5v9_"),e=d&&d.length?d:[c];a.actorIDs.forEach(function(a){var b=[].concat(h.get(a)||[]);b.push.apply(b,e);h.set(a,b)})}function c(a){var c=this.getRoot(a.nodeID);(h.get(a.actorID)||[]).forEach(function(a){if(a===c)return;b("CSS").hide(a)})}function d(a){var c=this.getRoot(a.nodeID);(h.get(a.actorID)||[]).forEach(function(a){b("CSS").show(a)});c&&b("Focus").setWithoutOutline(c)}function e(a){a=b("ge")(a);return a?b("EntstreamFeedObject").getRoot(a):null}}),null);
__d("XUIAmbientNUXTheme",["cx"],(function(a,b,c,d,e,f,g){a="_2x6q";f.wrapperClassName=a;b={offset:14,length:18};f.arrowDimensions=b}),null);
__d("getCentralImpressionScrollSpeed",["Event"],(function(a,b,c,d,e,f){"use strict";var g=0,h=Date.now(),i=null,j=null;function a(a){b("Event").listen(window,"scroll",function(){j&&clearTimeout(j),j=setTimeout(function(){return a()},100)},b("Event").Priority.NORMAL,{passive:!0})}function k(){var a=window.scrollY,b=Date.now();if(i!=null&&b!==h){var c=a-i;g=c/(b-h)*1e3}i=a;h=b}a(function(){g=0,i=null});b("Event").listen(window,"scroll",function(){return k()},b("Event").Priority.NORMAL,{passive:!0});e.exports=function(){return g}}),null);
__d("getCentralImpressionTimeAfterRefresh",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=null;window.addEventListener("load",function(){g=Date.now()},{passive:!0});function a(){return g!=null?Date.now()-g:0}}),null);
__d("isImpressionTargetOccluded",["containsNode","getViewportDimensions"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,c,d){d===void 0&&(d={bottom:0,left:0,right:0,top:0});try{if(!a||!c||!document.elementFromPoint)return!1;var e=b("getViewportDimensions")();if(e.height===0||e.width===0)return!1;var f=c.x,g=c.y,h=c.width;c=c.height;h=Math.min(f+h,e.width-1);c=Math.min(g+c,e.height-1);e=[{x:f,y:g},{x:f,y:c},{x:h,y:g},{x:h,y:c},{x:(f+h)/2,y:(g+c)/2}];d.top!==0&&d.top>g&&d.top<c&&e.push({x:(f+h)/2,y:(d.top+c)/2});return e.every(function(c){c=document.elementFromPoint(c.x,c.y);c=!!c&&!b("containsNode")(c,a)&&!b("containsNode")(a,c);return c})}catch(a){return!1}}}),null);
__d("ghlTestUBT",["cr:1278084","cr:1543261"],(function(a,b,c,d,e,f){"use strict";b("cr:1543261")&&b("cr:1543261")();a=b("cr:1278084");e.exports=a}),null);
__d("ghlInternalBumpODSKey",["ODS"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,c){return b("ODS").bumpEntityKey(2966,"feed_ads",a+"."+c)}}),null);
__d("ghlTestUBTFacebook",["Promise","URI","cr:1088657","ghlInternalBumpODSKey","promiseDone"],(function(a,b,c,d,e,f){"use strict";var g,h=function(){return new(b("Promise"))(function(a){var b=window.atob,c=document.body;if(b==null||c==null){a(!1);return}var d=document.createElement("div");d.className=l(b);c.appendChild(d);b=k(d);if(b&&b.MozBinding&&b.MozBinding.startsWith("url")){setTimeout(function(){return a(d.clientWidth===0)},5e3);return}a((b==null?void 0:b.display)==="none")})},i=function(){return new(b("Promise"))(function(a){var c=document.body;if(c==null){a(!1);return}var d=document.createElement("img");c.appendChild(d);d.onload=function(){var b=k(d);a((b==null?void 0:b.display)==="none");d.parentNode&&d.parentNode.removeChild(d)};d.onerror=function(){a(!0),d.parentNode&&d.parentNode.removeChild(d)};d.src=new(g||(g=b("URI")))("https://scontent.xx.fbcdn.net/hads-ak-prn2/1487645_6012475414660_1439393861_n.png").toString()})},j=null;a=function(a){j==null&&(m("init"),j=new(b("Promise"))(function(a){return b("promiseDone")(b("Promise").all([h(),i()]),function(b){var c=b[0];b=b[1];m("done",c,b);c=c||b;a(c)})})),b("promiseDone")(j,a),b("cr:1088657")&&b("cr:1088657").i()};var k=function(a){return window.getComputedStyle(a)},l=function(a){return[a("QWRCb3g="),a("QWQ="),a("YWR2ZXJ0"),a("cG9zdC1hZHM=")].join(" ")},m=function(){for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];return b("ghlInternalBumpODSKey")("ghlTestUBT",String(c.join(".")))};c=a;e.exports=c}),null);
__d("MsiteFullViewFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1962677");c=b("FalcoLoggerInternal").create("msite_full_view",a);e.exports=c}),null);
__d("MsiteViewabilityFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1958033");c=b("FalcoLoggerInternal").create("msite_viewability",a);e.exports=c}),null);
__d("MsiteViewableImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1953926");c=b("FalcoLoggerInternal").create("msite_viewable_impression",a);e.exports=c}),null);
__d("PercentVisible",[],(function(a,b,c,d,e,f){a=-1;f.NO_VISIBLE=a;b=0;f.VISIBLE_0_PCT=b;c=50;f.VISIBLE_50_PCT=c;d=100;f.VISIBLE_100_PCT=d}),null);