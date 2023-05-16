/*!
 * 
 *     MCAFEE RESTRICTED CONFIDENTIAL
 *     Copyright (c) 2022 McAfee, LLC
 *     
 *     The source code contained or described herein and all documents related
 *     to the source code ("Material") are owned by McAfee or its
 *     suppliers or licensors. Title to the Material remains with McAfee
 *     or its suppliers and licensors. The Material contains trade
 *     secrets and proprietary and confidential information of McAfee or its
 *     suppliers and licensors. The Material is protected by worldwide copyright
 *     and trade secret laws and treaty provisions. No part of the Material may
 *     be used, copied, reproduced, modified, published, uploaded, posted,
 *     transmitted, distributed, or disclosed in any way without McAfee's prior
 *     express written permission.
 *     
 *     No license under any patent, copyright, trade secret or other intellectual
 *     property right is granted to or conferred upon you by disclosure or
 *     delivery of the Materials, either expressly, by implication, inducement,
 *     estoppel or otherwise. Any license under such intellectual property rights
 *     must be expressed and approved by McAfee in writing.
 *     
 */!function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=102)}({1:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"g",(function(){return a})),n.d(t,"b",(function(){return E})),n.d(t,"h",(function(){return c})),n.d(t,"f",(function(){return _})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return T}));const s={CACHE_STORE:"CACHE_STORE",CONTENT_HANDLER:"CONTENT_HANDLER",EXECUTE_COMMAND:"EXECUTE_COMMAND",FOCUS_OR_CREATE_TAB:"FOCUS_OR_CREATE_TAB",GET_BK_GLOBALS:"GET_BK_GLOBALS",GET_EXTENSION_STATUS:"GET_EXTENSION_STATUS",GET_TAB_DATA:"GET_TAB_DATA",GTI_REQUEST:"GTI_REQUEST",INSTALL_EXTENSION:"INSTALL_EXTENSION",PLACEHOLDER_TEXT:"PLACEHOLDER_TEXT",REMOVE_TAB:"REMOVE_TAB",SEND_TELEMETRY:"SEND_TELEMETRY",SET_VIEWPORT:"SET_VIEWPORT",WHITELIST:"WHITELIST",RESET_NATIVE_SETTING:"RESET_NATIVE_SETTING",UPDATE_BK_NATIVE_SETTINGS:"UPDATE_BK_NATIVE_SETTINGS",SHOW_SIDEBAR_MAIN:"SHOW_SIDEBAR_MAIN",GET_POPUP_DATA:"GET_POPUP_DATA",GET_SETTINGS_DATA:"GET_SETTINGS_DATA",RESET_SETTINGS:"RESET_SETTINGS",AUTO_RUN_VIDEO_SITE:"AUTO_RUN_VIDEO_SITE",GET_CLICK_EVENT_TIME:"GET_CLICK_EVENT_TIME",SAVE_CLICK_EVENT_TIME:"SAVE_CLICK_EVENT_TIME",GET_TYPOSQUATTING_DATA:"GET_TYPOSQUATTING_DATA",IS_FRAME_BLOCKED:"IS_FRAME_BLOCKED",IS_WHITELISTED:"IS_WHITELISTED",ANY_BLOCKED_IFRAMES:"ANY_BLOCKED_IFRAMES",ANY_BLOCKED_CRYPTOSCRIPTS:"ANY_BLOCKED_CRYPTOSCRIPTS",UNBLOCK_ALL_IFRAMES:"UNBLOCK_ALL_IFRAMES",VIEW_SITE_REPORT:"VIEW_SITE_REPORT",SEARCH_ANNOTATION:"SEARCH_ANNOTATION",UPDATE_ENGINE_STATS:"UPDATE_ENGINE_STATS",SOCIAL_MEDIA_ANNOTATION:"SOCIAL_MEDIA_ANNOTATION",UPDATE_RAT_DETECTION_SHOWING_FLAG:"UPDATE_RAT_DETECTION_SHOWING_FLAG",SEARCH_SUGGEST:"SEARCH_SUGGEST",GET_WEIGHTS:"GET_WEIGHTS",SAVE_FORM_INFO:"SAVE_FORM_INFO",GET_FORM_INFO_CACHE:"GET_FORM_INFO_CACHE",CLEAR_FORM_INFO_CACHE:"CLEAR_FORM_INFO_CACHE",SAVE_MULTISTEP_LOGIN:"SAVE_MULTISTEP_LOGIN",CLEAR_CACHED_DWS_INFO:"CLEAR_DWS_INFO",GET_CACHED_DWS_INFO:"GET_CACHED_DWS_INFO",UPDATE_DWS_WHITELIST:"UPDATE_DWS_WHITELIST",LAUNCH_IDPS_LOGIN:"LAUNCH_IDPS_LOGIN",UPDATE_DWS_SHOWN:"UPDATE_DWS_SHOWN",GET_APS_DETAILS:"GET_APS_DETAILS",FORM_PRE_CHECK_PASSED:"FORM_PRE_CHECK_PASSED",SIGN_UP_FORM_DETECTED:"SIGN_UP_FORM_DETECTED",SET_FF_POLICY_COLLECTION:"SET_FF_POLICY_COLLECTION",SET_FF_POLICY_LAST_SHOWN:"SET_FF_POLICY_LAST_SHOWN"},o={UNBLOCK_IFRAME:"UNBLOCK_IFRAME",BALLOON_MESSAGE:"BALLOON_MESSAGE",PAGE_OVERLAY:"PAGE_OVERLAY",SIDEBAR:"SIDEBAR",TOPBAR:"TOPBAR",PING_CONTENT_ANNOTATION:"PING_CONTENT_ANNOTATION",PING_CONTENT_RAT_DETECTION:"PING_CONTENT_RAT_DETECTION",PING_CONTENT_IFRAME_BANNER:"PING_CONTENT_IFRAME_BANNER",PING_CONTENT_AUTOPLAY_DETECTION:"PING_CONTENT_AUTOPLAY_DETECTION",PING_CONTENT_SIDEBAR_MAIN:"PING_CONTENT_SIDEBAR_MAIN",PING_CONTENT_FF_DL_OVERLAY:"PING_CONTENT_FF_DL_OVERLAY",PING_CONTENT_CRYPTO_BLOCK:"PING_CONTENT_CRYPTO_BLOCK",PING_CONTENT_FF_VIEWPORTS:"PING_CONTENT_FF_VIEWPORTS",PING_CONTENT_IDPS:"PING_CONTENT_IDPS",PING_CONTENT_APS_TOAST:"PING_CONTENT_APS_TOAST",PING_CONTENT_APS_BALLOON:"PING_CONTENT_APS_BALLOON",PING_CONTENT_APS_OBSERVER:"PING_CONTENT_APS_OBSERVER",PING_CONTENT_SITE_LISTENER:"PING_CONTENT_SITE_LISTENER",PING_IFRAME_FORM_CHECK:"PING_IFRAME_FORM_CHECK",PING_IFRAME_FORM_DETECTION:"PING_IFRAME_FORM_DETECTION",PING_IFRAME_BLOCK:"PING_IFRAME_BLOCK",APS_REGISTRATION_PAGE:"APS_REGISTRATION_PAGE",BROADCAST_TO_FOREGROUND:"BROADCAST_TO_FOREGROUND",TRIGGER_AJ_TOAST:"TRIGGER_AJ_TOAST"},a={MAIN:"MAIN",RELOAD:"RELOAD",SMA:"SMA",RAT_DETECTION:"RAT_DETECTION"},E={ADVANCED_PROTECTION_SIGNAL:"ADVANCED_PROTECTION_SIGNAL",ADVANCED_PROTECTION_SIGNAL_TOAST:"ADVANCED_PROTECTION_SIGNAL_TOAST",DWS:"DWS"},c={CRYPTO_BLOCK:"CRYPTO_BLOCK",IFRAME_BLOCK:"IFRAME_BLOCK",TRIGGER_ALLOW:"TRIGGER_ALLOW"},_={SEARCH_EXTENSION_OVERLAY:"SEARCH_EXTENSION_OVERLAY",FINISH_DOWNLOAD:"FINISH_DOWNLOAD"},i={PING:0,DISCONNECT_NATIVE:1,SET_PROPERTY_EX:2,SET_PROPERTY:3,GET_PROPERTY:4,CLEAR_GTI_CACHE:5,RESET_CRYPTO:6,CLEAN_TYPOSQUATING_WHITELIST:7,CLEAR_TYPOSQUATING_CACHE:8,CLEAN_CRYPTO_WHITELIST:10,CLEAN_RAT_WHITELIST:12,CLEAN_RAT_CACHE:13,REPLACE_TRUSTED_DOMAIN:15,VERIFY_GTI_REQUEST:17,VERIFY_TYPOSQUAT_SERVER:18,GET_ALL_WA_SETTINGS:19,SET_STORAGE_PROPERTY:20,GET_STORAGE_PROPERTY:21,REINIT_SCHEDULED_TASKS:22,OPEN_SETTINGS:23,OPEN_ACTION_PANEL:24,GET_MEMORY_FOOTPRINT:26,ENDURANCE_TEST_RESET:27,FORM_DETECTION_RESULT:28,SHOW_UNUSED_SELECTORS:29},T={PONG:0}},102:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var s=n(8),o=n(25);const a=2;class E{constructor(){this.autoplayDetectedfn=null,this.getLastSavedTimeFn=null,this.setLastSavedTimeFn=null,this.USER_PLAYED="mcafee_wa_userplayed",this.PROCESSED_VIDEO="mcafee_wa_processedvideo",this.CLICK_PLAY_INTERVAL=4e3}init(e=null,t=null,n=null){return!!e&&(this.autoplayDetectedfn=e,this.getLastSavedTimeFn=n,this.setLastSavedTimeFn=t,document.defaultView===document.defaultView.top&&window.addEventListener("click",this._setLastClickedTime.bind(this),!0),this._processLoadedElements(),!0)}_handlePlay(e){e.addEventListener("play",()=>{this._onplay(e)})}async _onplay(e){const t=e.src.length>0?e.src:e.currentSrc;if("true"===e.getAttribute(this.USER_PLAYED))return;let n=await this._getLastClickedTime();n=n||0;Date.now()-n<=this.CLICK_PLAY_INTERVAL?e.setAttribute(this.USER_PLAYED,"true"):this.autoplayDetectedfn(t)}_getLastClickedTime(){return this.getLastSavedTimeFn()}_setLastClickedTime(){this.setLastSavedTimeFn(Date.now())}_processVideoElement(e){"true"!==e.getAttribute(this.PROCESSED_VIDEO)&&(e.setAttribute(this.PROCESSED_VIDEO,"true"),(e.currentTime>0&&!1===e.paused&&!1===e.ended&&e.readyState>a||!0===e.autoplay)&&this._onplay(e),this._handlePlay(e))}_recursiveProcess(e){for(let t=0;t<e.childNodes.length;++t)this._recursiveProcess(e.childNodes[t]);e instanceof HTMLMediaElement&&this._processVideoElement(e)}nodeAdded(e){this._recursiveProcess(e)}_processLoadedElements(){setTimeout(()=>{const e=document.querySelectorAll("audio, video");for(let t=0;t<e.length;++t)this._processVideoElement(e[t])},3e3)}}class c{constructor(){this.mutationHandler=null}init(e,t,n){this.mutationHandler=new E,this.mutationHandler.init(e,t,n);new MutationObserver(this.handleMutations.bind(this)).observe(document,{childList:!0,subtree:!0})}handleMutations(e){e.forEach(e=>{for(const t of e.addedNodes)this.mutationHandler.nodeAdded(t)})}}var _=n(1);class i extends o.a{constructor(){super(_.c.PING_CONTENT_AUTOPLAY_DETECTION)}main(){(new c).init(e=>s.a.autoRunVideo(e),e=>s.a.saveLastClickedTime(e),()=>s.a.getLastClickedTime())}}(new i).main()},11:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));const s={NONE:0,LINKEDIN:1,INSTAGRAM:2,YOUTUBE:4,FACEBOOK:8,TWITTER:16,REDDIT:32},o=Object.values(s).reduce((e,t)=>e+t),a={TOGGLE_ON:"TOGGLE_ON",TOGGLE_OFF:"TOGGLE_OFF",ANNOTATION_ENABLE_ALL:"ANNOTATION_ENABLE_ALL",ANNOTATION_DISABLE_ALL:"ANNOTATION_DISABLE_ALL",ANNOTATION_ENABLE:"ANNOTATION_ENABLE",ANNOTATION_DISABLE:"ANNOTATION_DISABLE",GET:"GET"}},12:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));const s={GET:"GET",SET:"SET"},o={NONE:"NONE",ONLY_SECURE_SEARCH:"ONLY_SECURE_SEARCH",ALL:"ALL",*[Symbol.iterator](){for(const e of Object.keys(this))yield e}},a={SEARCH:0,SOCIALMEDIA:1}},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return _})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));var s=n(3);class o{static PreprocessSecureSearchRegEx(e){return e.trim().split("\n")}static getBrowserSuffix(){const{CH:e,FF:t,EDGE:n}={CH:"_ch",FF:"_ff",IE:"_ie",EDGE:"_ed"},o={};return o[s.c.EDGE]=n,o[s.c.FIREFOX]=t,o[s.c.CHROME]=e,o[s.d.BROWSER_TYPE]}}const a={SYSTEM:0,USER:1},{SYSTEM:E,USER:c}=a,_={NONE:0,INT:1,INT64:2,BOOL:3,STRING:4},i={WEBBOOST_AUTO_PLAY_NOTIFICATION:"AutoPlayNotificationRequired",WEBBOOST_UPSELL_DISABLED:"WBUpsellDisabled",USE_NATIVE_LOGGER:"UseNativeLogger"},T=o.getBrowserSuffix(),r={DEV_MODE:{scope:E,name:"dev_mode",value:!1},AFF_ID:{scope:E,name:"*Affid",value:0},BINARY_VERSION:{scope:E,name:"version",value:null},EXTENSION_VERSION_CH:{scope:E,name:"ChromeExtVersion",value:"",writeOnly:!0},EXTENSION_VERSION_FF:{scope:E,name:"*FirefoxXPIVersion",value:"",writeOnly:!0},EXTENSION_VERSION_ED:{scope:E,name:"EdgeExtVersion",value:"",writeOnly:!0},BROWSER_TYPE:{scope:E,name:"browsertype",value:"",writeOnly:!0},USER_AGENT:{scope:E,name:"useragent",value:"",writeOnly:!0},SUGGESTION_URL:{scope:E,name:"suggestion_url",value:""},SCRIPT_GENERATED_DEFAULT_SS_URL:{scope:c,name:"SCRIPT_GENERATED_DEFAULT_SS_URL"+T,value:""},SECURE_SEARCH_REGEXES:{scope:c,name:"SECURE_SEARCH_REGEXES",value:"",preprocess:o.PreprocessSecureSearchRegEx},SHOW_SEARCH_SETTINGS:{scope:E,name:"*ShowSearchSettings",value:!0},SECURE_SEARCH_TOAST_STAMP:{scope:c,name:"*SSDateStampShowedToast"+T,value:0},SECURE_SEARCH_ANNOTATION_ONLY:{scope:E,name:"*OnlyShowAnnotationsOnSecureSearch",value:!0},SECURE_SEARCH_SHOW_ICONS:{scope:c,name:"*Icons",value:!0},SECURE_SEARCH_CHOICE:{scope:c,name:"*SSToastChoice"+T,value:!1},SS_DEF:{scope:E,name:"*SS_DEF"+T,value:0},ANNOTATIONS_CHOICE_EXPLICIT:{scope:E,name:"*AnnotationsChoiceExplicit"+T,value:!1},CURRENT_SAO_IN_EXTENSION:{scope:c,name:"*CurrentSAOInExtension"+T,value:""},FF_EXTENSION_LAST_TOAST_TIME:{scope:c,name:"ff_extension_last_toast_time",value:0,writeOnly:!0},FF_EXTENSION_TOAST_COUNT:{scope:c,name:"ff_extension_toast_count",value:0,writeOnly:!0},CHECKLIST_START_INGORE_DATE_AV:{scope:E,name:"startIgnoreDateAV",value:"",writeOnly:!0},CHECKLIST_START_IGNORE_DATE_FW:{scope:E,name:"startIgnoreDateFW",value:"",writeOnly:!0},CHECKLIST_IGNORE_DURACTION:{scope:E,name:"ignoreDuration",value:"14",writeOnly:!0},CHECKLIST_GRACE_PERIOD_AV:{scope:E,name:"fixGracePeriodStartDateAV",value:"",writeOnly:!0},CHECKLIST_GRACE_PERIOD_FW:{scope:E,name:"fixGracePeriodStartDateFW",value:"",writeOnly:!0},CHECKLIST_GRACE_PERIOD_DURATION:{scope:E,name:"fixGracePeriodDuration",value:"24",writeOnly:!0},CRYPTOJACKING_DISABLED:{scope:E,name:"CryptojackingDisabled",value:!1},SMA_USER_TOGGLE:{scope:E,name:"sma_user_toggle"+T,value:!1,writeOnly:!0},SMA_ANNOTATION_OPTIONS:{scope:E,name:"sma_annotation_options"+T,value:0,writeOnly:!0},PAGES_SCANNED:{scope:E,name:"*CounterPagesScanned",value:0},PAGES_BLOCKED:{scope:E,name:"*CounterPagesBlocked",value:0},DOWNLOADS_SCANNED:{scope:E,name:"*CounterDownloadsScanned",value:0},DOWNLOADS_BLOCKED:{scope:E,name:"*CounterDownloadsBlocked",value:0},CRYPTO_BLOCKED:{scope:E,name:"*CounterCryptoJackingBlocked",value:0},BLOCKPAGE_WHITELIST:{scope:c,name:"*WhiteList",value:""},TS_WHITELIST:{scope:c,name:"*TListWhiteList",value:""},CSP_ID_SETTING:{scope:E,name:"CSPIdValue",value:"__not_available__"},UNINSTALL_SURVEY_ENABLED:{scope:E,name:"uninstall_survey_enabled",value:!1},UNINSTALL_SURVEY_URL:{scope:E,name:"uninstall_survey_url",value:""},RAT_DETECTION_ENABLED:{scope:E,name:"rat_detection_enabled",value:!0},IDPS_FEATURE_ENABLED:{scope:E,name:"idps_feature_enabled",value:0},APS_COHORT:{scope:E,name:"aps_cohort",value:0},APS_TOGGLE_SETTING:{scope:E,name:"aps_toggle_setting",value:!0},ALT_TRIGGER:{scope:E,name:"alt_triggers_cohort",value:0},IFRAME_FORM_CHECK_ENABLED:{scope:E,name:"iframe_form_check_enabled",value:!0},ANNOTATION_JOURNEY_COHORT:{scope:E,name:"annotation_journey_cohort"+T,value:0},ANNOTATION_JOURNEY_TOAST:{scope:c,name:"aj_toast"+T,value:null}}},2:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));const s=chrome},25:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var s=n(7);class o{constructor(e){this.pingCommand=e,s.a.debug("File Injection [started]: "+this.pingCommand),this.basePingListener()}basePingListener(e=null){chrome.runtime.onMessage.addListener((t,n,o)=>{if(n.id!==chrome.runtime.id)return;const{command:a}=t;a===this.pingCommand&&(s.a.debug(`File Injection [pinged]: Received ${a} command`),o({content:!0}),"function"==typeof e&&e())})}}},3:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"k",(function(){return E})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return _})),n.d(t,"b",(function(){return i})),n.d(t,"j",(function(){return T})),n.d(t,"l",(function(){return r})),n.d(t,"h",(function(){return A})),n.d(t,"g",(function(){return N})),n.d(t,"i",(function(){return S}));const s={GREEN:0,YELLOW:1,RED:2,UNKNOWN:3,HACKERSAFE:4,TYPOSQUATTING:5,PHISHING:6,*[Symbol.iterator](){for(const e of Object.keys(this))"GREEN"!==e&&"UNKNOWN"!==e&&(yield this[e])}},o={UNKNOWN:-1,FIREFOX:1,CHROME:2,EDGE:3},a={BROWSER_TYPE:2,DEBUG_MODE:!1,EXTENSION_VERSION:"8.1.0.2859",LOG_LEVEL:0,ENGINES_VERSION:"1.0.0.13",YEAR:2022},E={Red:1,Yellow:2,Phishing:3,Typoquatting:4,iFrame:5,Crypto:6},c={GREEN:0,YELLOW:1,RED:2,UNKNOWN:3,HACKERSAFE:4,DISABLED:5},_={RAISE_NEW_TAB_EVENT:3,UPDATE_CACHE_STATS:4},i={[c.GREEN]:"GREEN",[c.YELLOW]:"YELLOW",[c.RED]:"RED",[c.UNKNOWN]:"WHITE",[c.DISABLED]:"DISABLED"},T={MINIMAL:15,UNKNOWN:30,MEDIUM:50},r=e=>{const t={};return Object.keys(e).forEach(n=>{t[e[n]]=n}),t},A={CH:"https://chrome.google.com/webstore/detail/mcafee%C2%AE-secure-search/enppghjcblldgigemljohkgpcompnjgh",ED:"https://microsoftedge.microsoft.com/addons/detail/dbghilognjpbmkdcpjgodiieiflmlaeb"},N=(e,t)=>Array.from(Array(t+1).keys()).slice(e),S={YAHOO:"https://search.yahoo.com/search?fr=mcafee&type=C040US0D19700101&p=",BING:"https://www.bing.com/search?partnercode=MC99&q="}},5:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var s=n(6);class o{static getResetValues(){return{blockedIframes:[],cryptoBlockData:null,tabDomainTrusted:!1}}static getDefaultValues(){return o.getResetValues()}reset(e){this.update(e,o.getResetValues())}get(e){return _.cacheStore.get(s.c.CACHE_TAB_DATA.name,{})[e]||o.getDefaultValues()}set(e,t){const n=_.cacheStore.get(s.c.CACHE_TAB_DATA.name,{});n[e]=t,_.cacheStore.set(s.c.CACHE_TAB_DATA.name,n)}delete(e){delete _.cacheStore.get(s.c.CACHE_TAB_DATA.name,{})[e]}update(e,t){const n=this.get(e);this.set(e,{...n,...t})}setTabBlockPageData(e,t){const n=this.get(e);this.set(e,{...n,blockPageData:t})}addBlockedFrame(e,t){this.get(e).blockedIframes.push(t)}getBlockedFrames(e){return this.get(e).blockedIframes}resetBlockedFrames(e){this.get(e).blockedIframes=[]}}var a=n(3),E=n(9),c=n(16);const _={isTrustCheckRequired:!0,ExtensionTelemetryUrl:null,scheduleManager:null,schedules:null,isNativeConnected:!0,telemetryEngine:null,postInstallationPage:"https://www.mcafee.com/consumer/v/wa-how.html",listenerManager:null,firefoxInternalUUID:"",shadowMode:"closed",browserType:a.d.BROWSER_TYPE,cacheStore:null,ffViewports:null,garbageCollector:null,gtiCache:null,typoCache:null,logger:null,loglevel:null,messageDispatcher:null,port:null,tabData:new o,tabIdToLastClickTime:new Map,useNativeLogger:!1,wasm:null,userAgentInBase64:null,gtiServer:E.b.GTI_SERVER,typoSquattingServer:E.b.TYPOSQUATTING_SERVER,tldParser:null,cryptoBlacklist:E.c,trustedDomains:E.e,nativeSettings:c.b,searchSuggest:null,ratBlacklist:E.d,wssMessageDispatcher:null,isWssConnected:null,wssNativeClient:null,WSS_INSTALLED:null,searchEngines:null,enginesVersionUrl:E.b.ENGINE_VERSION_URL,engineCheckInterval:864e5,ENGINES_VERSION:a.d.ENGINES_VERSION,AUTO_PLAY_NOTIFICATION_ENABLED:!1,ALLOW_LOCALHOST:!1,IDPS_AUTH_URL:"https://csptoken.ccs.mcafee.com/auth/token",IDPS_BREACH_COUNT_URL:"https://identity.unifiedapis.mcafee.com/breach/v1/BreachCount",IDPS_CSP_CLIENT_ID:null,IDPS_IS_ENTITLED:!1,IDPS_PROVISION_ID:null,IDPS_LOGIN_DOMAIN:"https://protection.mcafee.com",UA_CLIENT:null,TYPOSQUATTING_MAX_CACHE:100,TYPOSQUATTING_EXPIRY:2592e6,WA_IMAGE_SECRET:null,apsUrlList:E.a,apsAnimationTimeout:5e3,downloadUrls:new Set,wpsRequestedSettings:new Set(["SMA_USER_TOGGLE","SEARCH_ANNOTATION_OPTION","SMA_ANNOTATION_OPTIONS"]),permittedContentTypes:["application/vnd.microsoft.portable-executable","application/octet-stream","application/x-msdos-program","application/x-msdownload","binary/octet-stream","application/x-msdownload"],SUPPORTED_WEBSITE_LIST:["protection.mcafee.com","protection-dev-roadhouse-int.dvqa.mcafee.com","protection-dev2-roadhouse-int.dvqa.mcafee.com","protection-qa-roadhouse-int.dvqa.mcafee.com"]}},6:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return _})),n.d(t,"a",(function(){return i}));var s=n(11),o=n(12);const{NONE:a,...E}=s.c,c={SET:"SET",GET:"GET",CLEAR:"CLEAR"},_={BLOCK_PAGE_PHISHING_FIRST_VARIANT_COUNT:{name:"BLOCK_PAGE_PHISHING_FIRST_VARIANT_COUNT",type:"number"},BLOCK_PAGE_RED_FIRST_VARIANT_COUNT:{name:"BLOCK_PAGE_RED_FIRST_VARIANT_COUNT",type:"number"},BLOCK_PAGE_WHITELIST:{name:"BLOCK_PAGE_WHITELIST",type:"array"},BLOCK_PAGE_YELLOW_FIRST_VARIANT_COUNT:{name:"BLOCK_PAGE_YELLOW_FIRST_VARIANT_COUNT",type:"number"},CRYPTO_WHITELIST:{name:"CRYPTO_WHITELIST",type:"array"},ENGINE_DOWNLOAD_TASK:{name:"ENGINE_DOWNLOAD_TASK",type:"object"},ENGINES:{name:"ENGINES",type:"object"},ENGINES_FUTURE_TIME:{name:"ENGINES_FUTURE_TIME",type:"object"},ENGINES_VERSION:{name:"ENGINES_VERSION",type:"string"},EXTENSION_LOGGING:{name:"EXTENSION_LOGGING",options:[0,1,2,3,4],type:"number"},USE_NATIVE_LOGGER:{name:"USE_NATIVE_LOGGER",type:"boolean"},EXTN_UUID2:{name:"EXTN_UUID2",type:"string"},IFRAME_BLOCK_FIRST_TIME:{name:"IFRAME_BLOCK_FIRST_TIME",type:"boolean"},LAST_HEARTBEAT_SENT:{name:"LAST_HEARTBEAT_SENT",type:"object"},POPUP_STATS:{name:"POPUP_STATS",type:"object"},POST_INSTALLATION_PAGE_SHOWED:{name:"POST_INSTALLATION_PAGE_SHOWED",type:"object"},RAT_DETECTION_WHITELIST:{name:"RAT_DETECTION_WHITELIST",type:"array"},SEARCH_ANNOTATION_OPTION:{name:"SEARCH_ANNOTATION_OPTION",options:[...o.a],type:"string"},SMA_ANNOTATION_OPTIONS:{name:"SMA_ANNOTATION_OPTIONS",options:{...E},type:"number"},SMA_USER_TOGGLE:{name:"SMA_USER_TOGGLE",type:"boolean"},TELEMETRY_HEARTBEAT_TASK:{name:"TELEMETRY_HEARTBEAT_TASK",type:"object"},TYPOSQUATTING_WHITELIST:{name:"TYPOSQUATTING_WHITELIST",type:"array"},CACHE_TYPOSQUATTING:{name:"CACHE_TYPOSQUATTING",type:"object"},CACHE_GTI:{name:"CACHE_GTI",type:"object"},CACHE_TAB_DATA:{name:"CACHE_TAB_DATA",type:"object"},USER_NATIVE_STATS:{name:"USER_NATIVE_STATS",type:"boolean"},WHITELIST_FLAG:{name:"WHITELIST_FLAG",type:"boolean"},DWS_INFO:{name:"DWS_INFO",type:"object"},DWS_WHITELIST:{name:"DWS_WHITELIST",type:"array"},DWS_UNIQUE_EMAILS:{name:"DWS_UNIQUE_EMAILS",type:"array"},APS_TOAST_FIRST_TIME:{name:"APS_TOAST_FIRST_TIME",type:"boolean"},APS_FULL_MSG_SHOWN_ARRAY:{name:"APS_FULL_MSG_SHOWN_ARRAY",type:"array"},FF_POLICY_PERSONAL_COLLECTION:{name:"FF_POLICY_PERSONAL_COLLECTION",type:"boolean"},FF_POLICY_ACTIVITY_COLLECTION:{name:"FF_POLICY_ACTIVITY_COLLECTION",type:"boolean"},FF_POLICY_LAST_SHOWN:{name:"FF_POLICY_LAST_SHOWN",type:"number"},WA_AFFID:{name:"WA_AFFID",type:"number"},APS_TOGGLE_SETTING:{name:"APS_TOGGLE_SETTING",type:"boolean"},AJ_TOAST:{name:"AJ_TOAST",type:"boolean"},AJ_APS_ENABLE:{name:"AJ_APS_ENABLE",type:"number"}},i={RAT_DETECTION_SHOWING:{name:"RAT_DETECTION_SHOWING",type:"object"},FORM_INFO:{name:"FORM_INFO",type:"object"},SAVE_MULTI_STEP_LOGIN:{name:"SAVE_MULTI_STEP_LOGIN",type:"object"},APS_EMAIL_LINKS:{name:"APS_EMAIL_LINKS",type:"array"},WSS_EMAIL:{name:"WSS_EMAIL",type:"string"}}},7:function(e,t,n){"use strict";n.d(t,"b",(function(){return A})),n.d(t,"a",(function(){return S}));var s=n(5),o=n(3),a=n(6);const E={loglevel:null},c={NONE:0,INFO:1,ERROR:2,WARN:3,DEBUG:4},_=1,i=2,T=3,r=4,A={BACKGROUND:"BACKGROUND",CONTENT:"CONTENT",TELEMETRY:"TELEMETRY",SMART_NATIVE_CLIENT:"SMART_NATIVE_CLIENT"},N={DEFAULT:"color: #000000; font-weight: normal; font-style:normal; background: #FFFFFF;",BACKGROUND:"color: #8D0DBA; font-weight: bold; background: #FFFFFF;",CONTENT:"color: #F54A26; font-weight: bold; background: #FFFFFF;",TELEMETRY:"color: #147831; font-weight: bold; background: #FFFFFF;",SMART_NATIVE_CLIENT:"color: #004d7c; font-weight: bold; background: #FFFFFF;"};class S{static processLog(e,t,n){t!==c.NONE&&(n&&!Object.values(A).includes(n)&&(n=void 0),chrome.storage.local.get(a.c.USE_NATIVE_LOGGER.name,E=>{if(!0===E[a.c.USE_NATIVE_LOGGER.name]){n||(n=l()?A.BACKGROUND:A.CONTENT);const a={processType:n,browserType:o.d.BROWSER_TYPE,extensionType:"wa",logType:t,message:e};s.a.messageDispatcher&&s.a.messageDispatcher.logger(a)}}),m(e,t,n))}static setNativeLogging(e){s.a.useNativeLogger=e,chrome.storage.local.set(a.c.USE_NATIVE_LOGGER,e)}static log(e,t){S.processLog(e,c.INFO,t)}static error(e,t){S.processLog(e,c.ERROR,t)}static warn(e,t){S.processLog(e,c.WARN,t)}static debug(e,t){S.processLog(e,c.DEBUG,t)}}const m=async(e,t,n)=>{const s=await O();if(s===c.NONE)return;const o=n||(l()?A.BACKGROUND:A.CONTENT),a=`%c[${o} ${(new Date).toLocaleString([],{hour:"2-digit",minute:"2-digit",hour12:!0})}]: %c${e}`,E=N.DEFAULT;let S=N[o];if(S||(S=E),s>=c.ERROR&&t===i&&console.error(a,E,E),s>=c.INFO&&t===_&&console.log(a,S,E),s>=c.WARN&&t===T){const e="color: #FFA500; font-family: sans-serif; font-weight: bolder; text-shadow: #000 1px 1px;";console.log("%cWARN - "+a,e,S,E)}if(s>=c.DEBUG&&t===r){const e="color: #FF33D7; font-family: sans-serif; font-weight: bolder; text-shadow: #000 1px 1px;";console.log("%cDEBUG - "+a,e,S,E)}},l=()=>null!==s.a.cacheStore,O=async()=>{const e=l()?s.a:E;let t=e.loglevel;return null===e.loglevel&&(t=await I(),e.loglevel=null==t?o.d.LOG_LEVEL:t),Number.isInteger(t)&&Object.values(c).includes(t)?t:o.d.LOG_LEVEL},I=async()=>{const e=new Promise(e=>chrome.storage.local.get(a.c.EXTENSION_LOGGING.name,e)),t=(await e)[a.c.EXTENSION_LOGGING.name];return Number.isInteger(t)&&Object.values(c).includes(t)?t:null}},8:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var s=n(2),o=n(1);class a{static handlePromiseMessage(e,t=null){return new Promise((n,o)=>{s.a.runtime.sendMessage(e,e=>{"function"==typeof t?t(n,o,e):((e,t,n)=>{s.a.runtime.lastError&&t(s.a.runtime.lastError.message),e(n)})(n,o,e)})})}static cacheStore(e,t){const n=o.a.CACHE_STORE;return this.handlePromiseMessage({command:n,action:e,data:t})}static saveLastClickedTime(e){const t=o.a.SAVE_CLICK_EVENT_TIME;s.a.runtime.sendMessage({command:t,last_event:e})}static getLastClickedTime(){const e=o.a.GET_CLICK_EVENT_TIME;return this.handlePromiseMessage({command:e})}static autoRunVideo(e){const t=o.a.AUTO_RUN_VIDEO_SITE;s.a.runtime.sendMessage({command:t,url:e})}static isFrameBlocked(e){const t=o.a.IS_FRAME_BLOCKED;return this.handlePromiseMessage({command:t,url:e})}static makeGTIRequest(e,t,n,s){const a={command:o.a.GTI_REQUEST,url:e,isSecureSearch:t,requestData:n,referer:s};return this.handlePromiseMessage(a)}static executeCommand(e,t){const n=o.a.EXECUTE_COMMAND;s.a.runtime.sendMessage({command:n,commandId:e,params:t})}static focusOrCreateTab(e){const t=o.a.FOCUS_OR_CREATE_TAB;s.a.runtime.sendMessage({command:t,url:e})}static closeTab(){const e=o.a.REMOVE_TAB;s.a.runtime.sendMessage({command:e})}static whitelist(e,t,n){const s=o.a.WHITELIST;return this.handlePromiseMessage({action:e,command:s,type:t,data:n})}static getPopupData(){const e=o.a.GET_POPUP_DATA;return this.handlePromiseMessage({command:e})}static getSettingsData(){const e=o.a.GET_SETTINGS_DATA;return this.handlePromiseMessage({command:e})}static searchAnnotation(e,t){const n=o.a.SEARCH_ANNOTATION;return this.handlePromiseMessage({action:e,data:t,command:n})}static socialMediaAnnotation(e,t){const n=o.a.SOCIAL_MEDIA_ANNOTATION;return this.handlePromiseMessage({action:e,data:t,command:n})}static async getBkGlobals(e=!1){return new Promise(t=>{const n=o.a.GET_BK_GLOBALS;this.handlePromiseMessage({command:n,bIncludeSearchEngines:e}).then(e=>{t(JSON.parse(e))})})}static viewSiteReport(e=null,t=!1){const n=o.a.VIEW_SITE_REPORT;s.a.runtime.sendMessage({command:n,url:e,showInNewTab:t})}static getTypoSquattingData(e){const t=o.a.GET_TYPOSQUATTING_DATA;return this.handlePromiseMessage({command:t,domain:e})}static getPlaceholderText(e){const t=o.a.PLACEHOLDER_TEXT;return this.handlePromiseMessage({command:t,id:e})}static setViewPort(e,t){const n=o.a.SET_VIEWPORT;s.a.runtime.sendMessage({command:n,x:e,y:t})}static sendTelemetry(e){const t=o.a.SEND_TELEMETRY;s.a.runtime.sendMessage({command:t,telemetry:e})}static anyBlockedIframes(e){const t=o.a.ANY_BLOCKED_IFRAMES;return this.handlePromiseMessage({command:t,frameUrls:e})}static anyBlockedCryptoScripts(){const e=o.a.ANY_BLOCKED_CRYPTOSCRIPTS;return this.handlePromiseMessage({command:e})}static resetSettings(){const e=o.a.RESET_SETTINGS;s.a.runtime.sendMessage({command:e})}static sendEngineStat(e){s.a.runtime.sendMessage({command:o.a.UPDATE_ENGINE_STATS,engine:e})}static contentHandler(e){const t=o.a.CONTENT_HANDLER;s.a.runtime.sendMessage({command:t,message:e})}static getTabData(e={}){const t={command:o.a.GET_TAB_DATA,...e};return this.handlePromiseMessage(t)}static isWhitelisted(e){const t={command:o.a.IS_WHITELISTED,url:e};return this.handlePromiseMessage(t)}static getExtensionStatus(e){return this.handlePromiseMessage({command:o.a.GET_EXTENSION_STATUS,extension_id:e})}static unblockAllIframes(){const e=o.a.UNBLOCK_ALL_IFRAMES;s.a.runtime.sendMessage({command:e})}static updateRatDetectionShowingFlag(e){const t=o.a.UPDATE_RAT_DETECTION_SHOWING_FLAG;s.a.runtime.sendMessage({command:t,showed:e})}static getSearchSuggest(e){const t={command:o.a.SEARCH_SUGGEST,searchTerm:e};return this.handlePromiseMessage(t)}static resetNativeSetting(e){const t=o.a.RESET_NATIVE_SETTING;s.a.runtime.sendMessage({command:t,setting:e})}static saveFormInfo(e,t){const n=o.a.SAVE_FORM_INFO;s.a.runtime.sendMessage({command:n,username:e,hostname:t})}static saveMultiStepLogin(e,t){const n=o.a.SAVE_MULTISTEP_LOGIN;s.a.runtime.sendMessage({command:n,data:e,completeLogin:t})}static getFormInfoCache(){const e=o.a.GET_FORM_INFO_CACHE;return this.handlePromiseMessage({command:e})}static clearFormInfoCache(){const e=o.a.CLEAR_FORM_INFO_CACHE;s.a.runtime.sendMessage({command:e})}static updateDWSWhitelist(e){const t=o.a.UPDATE_DWS_WHITELIST;s.a.runtime.sendMessage({command:t,email:e})}static getCachedDWSInfo(e){const t={command:o.a.GET_CACHED_DWS_INFO,email:e};return this.handlePromiseMessage(t)}static clearCachedDWSInfo(e){const t=o.a.CLEAR_CACHED_DWS_INFO;s.a.runtime.sendMessage({command:t,email:e})}static updateDWSShown(e){const t=o.a.UPDATE_DWS_SHOWN;s.a.runtime.sendMessage({command:t,email:e})}static getAPSDetails(){const e=o.a.GET_APS_DETAILS;return this.handlePromiseMessage({command:e})}static signUpFormDetected(){const e=o.a.SIGN_UP_FORM_DETECTED;s.a.runtime.sendMessage({command:e})}static updateBkNativeSettings(e,t){const n=o.a.UPDATE_BK_NATIVE_SETTINGS;s.a.runtime.sendMessage({command:n,name:e,value:t})}static launchIDPSLogin(){const e=o.a.LAUNCH_IDPS_LOGIN;s.a.runtime.sendMessage({command:e})}static showSidebarMain(){const e=o.a.SHOW_SIDEBAR_MAIN;s.a.runtime.sendMessage({command:e})}static setFFPolicyCollection({personal:e,activity:t}){const n=o.a.SET_FF_POLICY_COLLECTION;s.a.runtime.sendMessage({command:n,personal:e,activity:t})}static setFFPolicyLastShown(){const e=o.a.SET_FF_POLICY_LAST_SHOWN;s.a.runtime.sendMessage({command:e})}static broadcastToForeground(e){const t=o.c.BROADCAST_TO_FOREGROUND;s.a.runtime.sendMessage({command:t,payload:e})}}},9:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return E})),n.d(t,"a",(function(){return c}));const s={MAX_CACHE_RECORDS:1e3,MAX_RESERVED_CALLBACK_ID:5,PHISHING_CATEGORY:169,SITE_ADVISOR_URL:"www.siteadvisor.com/",GTI_SERVER:"https://webadvisorc.rest.gti.mcafee.com/1",TYPOSQUATTING_SERVER:"https://mip.api.mcafeewebadvisor.com/v1/typosquatting?",ENGINE_VERSION_URL:"https://sadownload.mcafee.com/products/SA/Win/extensions/engines/update.json"},o=new Set(["www.mcafee.com"]),a=["wss://*.gasolina.ml/*","*://kissdoujin.com/Content/js/c-hive.js*","wss://*.sen-to-zdrowie.ml/*","*://cookiescript.info/libs/*","*://rocks.io/assets/*","*://coin-have.com/c/*","*://coinnebula.com/lib/*","wss://*.coin-have.com/","ws://digger.cryptobara.com/*","ws://*.webminepool.tk/*","*://*.lewd.ninja/static/m.js*","*://tokyodrift.ga/dropyoulike/a-o/*","*://*.2giga.link/hive/lib/*","*://papoto.com/lib/*","*://load.jsecoin.com/*","ws://*.1q2w3.fun/*","*://*/*plugins/ajcryptominer/assets/*","*://monerominer.rocks/miner.php*","*://minemytraffic.com/*","*://*.monerise.com/core/*","*://*.cookiescript.info/libs/*","ws://hive.tubetitties.com/*","wss://*.freecontent.racing/*","wss://*.hodling.faith/*","ws://gtg02.bestsecurepractice.com/proxy","*://cryptoloot.pro/lib/*","*://lmodr.biz/*","*://*.webminepool.com/lib/base.js","ws://*.sen-to-zdrowie.ml/*","ws://*.morningdigit.com/*","*://mine.nahnoji.cz/*","*://*.minescripts.info/*","*://jsecoin.com/server*","*://coinhive.com/lib*","wss://*.webminepool.tk/*","ws://*.monerise.com/proxy/*","*://kisshentai.net/Content/js/c-hive.js*","*://mataharirama.xyz/*","*://*.coinpirate.cf/*","ws://*.playerassets.info/*","wss://*.1q2w3.fun/*","*://*.1q2w3.fun/*","*://anime.reactor.cc/js/ch/cryptonight.wasm*","*://webmine.cz/miner*","wss://ws.l33tsite.info/*","*://coinhive.com/captcha*","wss://www.mutuza.win/proxy","*://*.morningdigit.com/*","ws://*.host.d-ns.ga/*","*://*.doubleclick5.xyz/*","*://miner.pr0gramm.com/xmr.min.js*","*://*.freecontent.bid/*","ws://lewd.ninja/comics/*","wss://*.monerise.com:9333/proxy/*","*://*.webminepool.com/lib/captcha.js","*://coinerra.com/lib/*","*://*.playerassets.info/*","wss://*.webmine.pro/*","wss://lewd.ninja/comics/*","*://*.doubleclick1.xyz/*","ws://*.freecontent.racing/*","*://*.googleanalytcs.com/*","wss://*.coinnebula.com/proxy*","ws://*.monerise.com:9333/proxy/*","ws://*.freecontent.loan/*","*://party-nngvitbizn.now.sh/*","wss://api.l33tsite.info/*","*://coinlab.biz/lib/coinlab.js*","wss://*.monerise.com/proxy/*","ws://www.mutuza.win/proxy","*://jscdndel.com/content/vidm.min.js*","*://listat.biz/*","*://minecrunch.co/web/*","ws://*.chainblock.science/*","*://baiduccdn1.com/lib/*","*://*.mutuza.win/worker.js","*://*.load.jsecoin.com/*","*://ppoi.org/lib/*","wss://*.chainblock.science/*","wss://*.crypto-loot.com/proxy*","wss://gtg02.bestsecurepractice.com/proxy","wss://*.coinhive.com/proxy*","*://coin-hive.com/captcha*","*://jsccnn.com/content/vidm.min.js*","*://monerominer.rocks/scripts/miner.js*","*://*.jsecoin.com/server*","*://server.jsecoin.com/*","wss://*.coin-hive.com/proxy*","*://*.doubleclick4.xyz/*","*://miner.cryptobara.com/client/*","*://*.rocks.io/assets/*","*://*.ppoi.org/lib/*","*://you.tubetitties.com/worker.js*","wss://*.googleanalytcs.com/*","wss://hive.tubetitties.com/*","*://static.reasedoper.pw/*","*://*.ppoi.org/token/*","ws://*.webmine.pro/*","*://you.tubetitties.com/hash.wasm*","*://*.doubleclick3.xyz/*","*://*.turnsocial.com/m.js","ws://*.hodling.faith/*","wss://*.morningdigit.com/*","*://*.ad-miner.com/lib/*","wss://*.2giga.link/wproxy*","ws://*.googleanalytcs.com/*","*://*.doubleclick6.xyz/*","ws://turnsocial.now.sh/*","*://cdn.cloudcoins.co/javascript/cloudcoins.min.js*","*://joyreactor.cc/ws/ch/*","*://minero.pw/miner.min.js*","*://*.webmine.pro/*","*://punchsub.net/chm.js","wss://mine.nahnoji.cz/*","wss://mine.torrent.pw/*","*://*.mutuza.win/lib/*","*://*.kickass.cd/power2/m.js","ws://*.cpu2cash.link/*","*://*.server.jsecoin.com/*","*://*.mutuza.win/processor.js","wss://turnsocial.now.sh/*","*://kiwifarms.net/js/Jawsh/xmr/xmr.min.js*","*://*.rocks.io/proxy*","*://crypto-loot.com/lib*","*://*.chmproxy.bid/lib/*","ws://*.gasolina.ml/*","*://*.stackpathdns.com/assets/javascript/cr.js","*://*.coinblind.com/lib/*","*://miner.pr0gramm.com/pm.min.js*","*://*.bewhoyouare.gq/*","wss://*.zlx.com.br/proxy*","*://a-o.ninja/apk-AO/kingofthenorth/*","*://ad-miner.com/lib/*","*://*.webminepool.com/api/*","*://*.cpu2cash.link/*","*://*.hemnes.win/*","wss://*.cpu2cash.link/*","ws://*.coinpirate.cf/*","ws://ws.l33tsite.info/*","*://digger.cryptobara.com/client/*","*://kickass.cd/m.js*","ws://*.zlx.com.br/proxy*","*://*.doubleclick2.xyz/*","*://*.amazonaws.com/doubleclick13/*","wss://*.freecontent.loan/*","*://*.host.d-ns.ga/*","*://*.candid.zone/youtube.com/*","ws://api.l33tsite.info/*","*://gtg2.bestsecurepractice.com/lib/*","wss://*.host.d-ns.ga/*","*://coin-hive.com/lib*","ws://mine.nahnoji.cz/*","wss://*.playerassets.info/*","*://*.afminer.com/code/*","wss://*.coinpirate.cf/*","*://cookiescriptcdn.pro/libs/*","*://*.goredirect.party/assets/*","*://*.ZLX.COM.BR/assets/min.js*","*://*.ZLX.COM.BR/assets/playermon.js*","*://p.hemnes.win/lib/*","*://gtg02.bestsecurepractice.com/proxy2/*","*://gtg02.bestsecurepractice.com/meri.js","*://gtg02.bestsecurepractice.com/lv.js","*://gtg02.bestsecurepractice.com/worker.js","*://gtg02.bestsecurepractice.com/processor.js","*://gtg02.bestsecurepractice.com/demo.html","*://*.turnsocial.com/c.wasm*","*://*.turnsocial.com/m.js*","*://cdn.minescripts.info/c/*","*://tokyodrift.ga/dropyoulike/backup/c.wasm*","*://punchsub.net/chm2.js","*://*.kickass.cd/webmr4.js","*://*.kickass.cd/m.js","wss://*.authedmine.com/proxy"],E=[{domain:"www.beamyourscreen.com",urls:[]},{domain:"www.connectwise.com",urls:["www.connectwise.com/platform/unified-management/control"]},{domain:"get.gotoassist.com",urls:[]},{domain:"fastsupport.gotoassist.com",urls:[]},{domain:"www.join.me",urls:[]},{domain:"www.mikogo.com",urls:[]},{domain:"www.mikogo.de",urls:[]},{domain:"www.securelink.com",urls:[]},{domain:"join.zoho.com",urls:[]}],c={shopping:{"www.amazon.com":{paths:["buy/payselect/handlers","buy/addressselect/handlers"]}},email:{"mail.google.com/mail":{selector:"table[role=presentation] > tr div[data-message-id] a"},"outlook.live.com/mail":{selector:"div[role=complementary][aria-label] a"},"outlook.office.com/mail":{selector:"div[role=complementary][aria-label] a"},"outlook.office365.com/mail":{selector:"div[role=complementary][aria-label] a"},"mail.yahoo.com":{selector:"div[role=main] ul li a"}}}}});
//# sourceMappingURL=../../sourceMap/chrome/scripts/content_autoplay_detection.map