/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_stores_1 = __webpack_require__(1);
var types_1 = __webpack_require__(6);
var encoder_1 = __webpack_require__(7);
var instances = new Map();
chrome.runtime.onConnect.addListener(function (port) {
    var tabId = port.sender.tab.id;
    instances.set(tabId, {
        port: port,
        stores: new Map(),
        storesList: new react_stores_1.Store({ list: [] })
    });
    port.onMessage.addListener(messageHandler);
    port.onDisconnect.addListener(function (port) {
        port.onMessage.removeListener(messageHandler);
        instances.delete(tabId);
    });
});
var messageHandler = function (message, port) {
    var _a;
    var pageInstance = instances.get(port.sender.tab.id);
    switch (message.action) {
        case types_1.EAction.CREATE_NEW_STORE: {
            var store = new react_stores_1.Store(encoder_1.decodeData(message.payload.initialState));
            if (pageInstance.stores.has(message.payload.name)) {
                var storeInstance = pageInstance.stores.get(message.payload.name);
                storeInstance.meta.setState({
                    active: true,
                    updateTimes: storeInstance.meta.state.updateTimes + 1
                });
                storeInstance.history.setState({
                    items: __spread(storeInstance.history.state.items, [
                        {
                            action: message.payload.options.persistence
                                ? "@initStore/persistence"
                                : "@initStore",
                            state: __assign({}, store.state),
                            payload: {},
                            timestamp: Date.now(),
                            trace: message.payload.trace
                        }
                    ])
                });
                pageInstance.storesList.setState({
                    list: pageInstance.storesList.state.list.map(function (storeItem) { return (__assign(__assign({}, storeItem), { active: storeItem.name === message.payload.name ? true : storeItem.active })); })
                });
                return;
            }
            pageInstance.stores.set(message.payload.name, {
                store: store,
                options: __assign(__assign({}, message.payload.options), { persistenceDriver: message.payload.meta.persistenceDriverName }),
                history: new react_stores_1.Store({
                    items: [
                        {
                            action: message.payload.options.persistence
                                ? "@initStore/persistence"
                                : "@initStore",
                            state: __assign({}, store.state),
                            timestamp: Date.now(),
                            payload: {},
                            trace: message.payload.trace
                        }
                    ]
                }),
                listeners: new react_stores_1.Store({
                    list: []
                }),
                meta: new react_stores_1.Store({
                    updateTimes: 0,
                    version: message.payload.meta.version,
                    active: Boolean(true),
                    listnersNumber: 0
                })
            });
            pageInstance.storesList.setState({
                list: __spread(pageInstance.storesList.state.list, [
                    { name: message.payload.name, active: true }
                ])
            });
            break;
        }
        case types_1.EAction.REMOVE_STORE: {
            var storeInstance = pageInstance.stores.get(message.payload.name);
            storeInstance.meta.setState({
                active: false
            });
            storeInstance.history.setState({
                items: __spread(storeInstance.history.state.items, [
                    {
                        action: "@removeStore",
                        state: {},
                        payload: {},
                        timestamp: Date.now(),
                        trace: message.payload.trace
                    }
                ])
            });
            pageInstance.storesList.setState({
                list: pageInstance.storesList.state.list.map(function (storeItem) { return (__assign(__assign({}, storeItem), { active: storeItem.name === message.payload.name ? false : storeItem.active })); })
            });
            break;
        }
        case types_1.EAction.SET_STATE: {
            var nextState = encoder_1.decodeData(message.payload.nextState);
            var storeInstance = pageInstance.stores.get(message.payload.name);
            storeInstance.store.setState(nextState);
            storeInstance.meta.setState({
                updateTimes: storeInstance.meta.state.updateTimes + 1
            });
            storeInstance.history.setState({
                items: __spread(storeInstance.history.state.items, [
                    {
                        action: (_a = message.payload.actionName, (_a !== null && _a !== void 0 ? _a : "@update/" + new Date(Date.now()).toLocaleTimeString())),
                        state: __assign({}, storeInstance.store.state),
                        payload: nextState,
                        timestamp: Date.now(),
                        trace: message.payload.trace
                    }
                ])
            });
            break;
        }
        case types_1.EAction.ADD_EVENT_LISTNER: {
            var storeInstance = pageInstance.stores.get(message.payload.name);
            storeInstance.listeners.setState({
                list: __spread(storeInstance.listeners.state.list, [
                    {
                        id: message.payload.eventId,
                        trace: message.payload.trace
                    }
                ])
            });
            storeInstance.meta.setState({
                listnersNumber: storeInstance.listeners.state.list.length
            });
            break;
        }
        case types_1.EAction.REMOVE_EVENT_LISTNER: {
            var storeInstance = pageInstance.stores.get(message.payload.name);
            storeInstance.listeners.setState({
                list: __spread(storeInstance.listeners.state.list.filter(function (listener) { return listener.id !== message.payload.eventId; }))
            });
            storeInstance.meta.setState({
                listnersNumber: storeInstance.listeners.state.list.length
            });
            break;
        }
    }
};
window["instances"] = instances;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(2);
} else {}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=__webpack_require__(3),React__default=_interopDefault(React),extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function __extends(e,t){function r(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function __rest(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]])}return r}function __spreadArrays(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var i=Array(e),n=0;for(t=0;t<r;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,n++)i[n]=o[s];return i}!function(e){e[e.All=0]="All",e[e.Init=1]="Init",e[e.Update=2]="Update",e[e.DumpUpdate=3]="DumpUpdate"}(exports.StoreEventType||(exports.StoreEventType={}));var StoreEvent=function(){function e(e,t,r,i){this.id=e,this.types=t,this.onFire=r,this.onRemove=i,this.timeout=null}return e.prototype.remove=function(){this.timeout&&clearTimeout(this.timeout),this.onRemove(this.id)},e}(),StoreEventSpecificKeys=function(){function e(e,t,r,i,n){void 0===n&&(n=[]),this.id=e,this.types=t,this.onFire=r,this.onRemove=i,this.includeKeys=n,this.timeout=null}return e.prototype.remove=function(){this.timeout&&clearTimeout(this.timeout),this.onRemove(this.id)},e}(),followStore=function(e){return function(t){return function(r){function i(){var e=null!==r&&r.apply(this,arguments)||this;return e.storeEvent=null,e.state={storeState:null},e}return __extends(i,r),i.prototype.componentWillMount=function(){var t=this;this.storeEvent=e.on(exports.StoreEventType.All,(function(){t.forceUpdate()}))},i.prototype.componentWillUnmount=function(){this.storeEvent.remove()},i.prototype.render=function(){return React.createElement(t,this.props)},i}(React.Component)}},StorePersistentDriver=function(){function e(e,t){void 0===t&&(t=1/0),this.name=e,this.lifetime=t,this.persistence=!0,this.initialState=null}return e.prototype.pack=function(e){return{data:e,timestamp:Date.now()}},e.prototype.reset=function(){var e=this.pack(this.initialState);return this.write(e),e},Object.defineProperty(e.prototype,"storeName",{get:function(){return("store.persistent."+this.type+"."+this.name).toLowerCase()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"dumpHistoryName",{get:function(){return("store.persistent.dump.history."+this.type+"."+this.name).toLowerCase()},enumerable:!0,configurable:!0}),e}(),StorePersistentLocalStorageDriver=function(e){function t(t,r){void 0===r&&(r=1/0);var i=e.call(this,t,r)||this;return i.name=t,i.lifetime=r,i.storage=null,i.type="localStorage","undefined"!=typeof window&&window.localStorage&&(i.storage=window.localStorage),i}return __extends(t,e),t.prototype.write=function(e){if(this.storage&&this.persistence)try{this.storage.setItem(this.storeName,JSON.stringify(e))}catch(e){console.error(e)}},t.prototype.read=function(){if(this.storage&&this.persistence){var e=null;try{e=JSON.parse(this.storage.getItem(this.storeName)),Boolean(e)||Boolean(e.timestamp)||(e=this.reset())}catch(t){e=this.reset()}return e}return this.reset()},t.prototype.saveDump=function(e){var t=e.timestamp;if(this.storage&&this.persistence)try{var r=JSON.parse(this.storage.getItem(this.dumpHistoryName));r&&r.dumpHistory?(r.dumpHistory.push(e),this.storage.setItem(this.dumpHistoryName,JSON.stringify(r))):this.storage.setItem(this.dumpHistoryName,JSON.stringify({dumpHistory:[e]}))}catch(r){try{this.storage.setItem(this.dumpHistoryName,JSON.stringify({dumpHistory:[e]}))}catch(e){console.error(e),t=null}console.error(r),t=null}return t},t.prototype.removeDump=function(e){if(this.storage&&this.persistence)try{var t=JSON.parse(this.storage.getItem(this.dumpHistoryName));if(t&&t.dumpHistory){var r=t.dumpHistory.filter((function(t){return t.timestamp!==e}));this.storage.setItem(this.dumpHistoryName,JSON.stringify({dumpHistory:r}))}}catch(e){console.error(e)}},t.prototype.readDump=function(e){var t=null;if(this.storage&&this.persistence)try{var r=JSON.parse(this.storage.getItem(this.dumpHistoryName));t=r&&r.dumpHistory?r.dumpHistory.find((function(t){return t.timestamp===e})):null}catch(e){console.error(e)}return t},t.prototype.getDumpHistory=function(){var e=[];if(this.storage&&this.persistence)try{var t=JSON.parse(this.storage.getItem(this.dumpHistoryName));t&&t.dumpHistory&&(e=t.dumpHistory.map((function(e){return e.timestamp})))}catch(t){console.error(t),e=[]}return e},t.prototype.resetHistory=function(){if(this.storage&&this.persistence)try{this.storage.setItem(this.dumpHistoryName,JSON.stringify({dumpHistory:[]}))}catch(e){console.error(e)}},t.prototype.clear=function(){if(this.storage&&this.persistence)try{this.storage.removeItem(this.storeName)}catch(e){console.error(e)}},t}(StorePersistentDriver);function isPrimitive(e){switch(typeof e){case"undefined":case"boolean":case"number":case"string":case"symbol":return!0;default:return!1}}function areSimilar(e,t){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];if(e===t)return!0;if(isPrimitive(e)||isPrimitive(t))return e===t;if(null===e||null===t)return!1;if(Array.isArray(e)&&!Array.isArray(t)||!Array.isArray(e)&&Array.isArray(t))return!1;for(var n=new Set(r),o=new Set(Object.keys(e)),s=new Set(Object.keys(t)),a=0,u=r;a<u.length;a++){var p=u[a];o.add(p),s.add(p)}if(o.size!==s.size)return!1;var c=Array.from(o),h=Array.from(s);c.sort(),h.sort();for(var f=c.length-1;f>=0;f--)if(c[f]!==h[f])return!1;for(f=c.length-1;f>=0;f--){p=c[f];if(!n.has(p)&&!areSimilar.apply(void 0,__spreadArrays([e[p],t[p]],r)))return!1}return typeof e==typeof t}var StoreEventManager=function(){function e(e,t){this.fireTimeout=e,this.name=t,this.events=[],this.eventCounter=0,this.timeout=null,this._hook=null,this._hook=window.__REACT_STORES_INSPECTOR__}return e.prototype.getEventsCount=function(){return this.events.length},e.prototype.generateEventId=function(){return""+ ++this.eventCounter+Date.now()+Math.random()},e.prototype.fire=function(e,t,r,i){var n=this;if(i)this.fireTimeout&&0!==this.fireTimeout?(i.timeout&&clearTimeout(this.timeout),i.timeout=setTimeout((function(){n.doFire(e,t,r,i)}),this.fireTimeout)):this.doFire(e,t,r,i);else if(this.fireTimeout&&0!==this.fireTimeout)this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){for(var i in n.events)n.events.hasOwnProperty(i)&&n.doFire(e,t,r,n.events[i])}),this.fireTimeout);else for(var o in this.events)this.events.hasOwnProperty(o)&&this.doFire(e,t,r,this.events[o])},e.prototype.remove=function(e){var t;if(this.fireTimeout&&0!==this.fireTimeout)for(var r in this.events)this.events.hasOwnProperty(r)&&this.events[r].timeout&&clearTimeout(this.timeout);this.events=this.events.filter((function(t){return t.id!==e})),null===(t=this._hook)||void 0===t||t.removeEvent(this.name,e)},e.prototype.add=function(e,t,r){var i,n,o=this;return n=r?new StoreEventSpecificKeys(this.generateEventId(),e,t,(function(e){o.remove(e)}),r):new StoreEvent(this.generateEventId(),e,t,(function(e){o.remove(e)})),this.events.push(n),null===(i=this._hook)||void 0===i||i.addEvent(this.name,n.id),n},e.prototype.doFire=function(e,t,r,i){if(i.types.includes(e)||i.types.includes(exports.StoreEventType.All)){if(i instanceof StoreEventSpecificKeys){var n=Object.keys(t).filter((function(e){return!i.includeKeys.includes(e)}));return void(areSimilar.apply(void 0,__spreadArrays([t,r],n))||i.onFire(t,r,i.includeKeys,e))}i.onFire(t,r,e)}},e}(),Store=function(){function e(e,t,r){var i,n,o;this.persistenceDriver=r,this.version="5.0.0",this.eventManager=null,this.initialState=null,this.frozenState=null,this._hook=null,this.opts={name:"",live:!1,freezeInstances:!1,immutable:!1,persistence:!1,setStateTimeout:0},this._hook=window.__REACT_STORES_INSPECTOR__;var s=null;if(this.name=null!=(n=null===(i=t)||void 0===i?void 0:i.name)?n:this.generateStoreId(e),t&&(this.opts.name=this.name,this.opts.immutable=!0===t.immutable,this.opts.persistence=!0===t.persistence,this.opts.setStateTimeout=t.setStateTimeout),this.persistenceDriver||(this.persistenceDriver=new StorePersistentLocalStorageDriver(this.name+this.generateStoreId(e))),this.opts.persistence){var a=this.persistenceDriver.read().data;a&&(s=a)}null===s&&(s=e),this.persistenceDriver.persistence=this.opts.persistence,this.persistenceDriver.initialState=e,this.eventManager=new StoreEventManager(this.opts.setStateTimeout,this.name),this.initialState=this.deepFreeze(e),this.frozenState=this.deepFreeze(s),null===(o=this._hook)||void 0===o||o.attachStore(this,this.name,this.opts,!1)}return Object.defineProperty(e.prototype,"state",{get:function(){return this.frozenState},enumerable:!0,configurable:!0}),e.prototype.deepFreeze=function(e){if(this.opts.immutable){var t=Object.getOwnPropertyNames(e);for(var r in t)if(t.hasOwnProperty(r)){var i=e[t[r]];"object"==typeof i&&null!==i&&this.deepFreeze(i)}return Object.freeze(e)}return e},e.prototype.hashCode=function(e){for(var t=0,r=0;r<e.length;r++)t=Math.imul(31,t)+e.charCodeAt(r)|0;return t.toString(16)},e.prototype.generateStoreId=function(e){var t="";for(var r in e)e.hasOwnProperty(r)&&(t+=r);return this.hashCode(t)},e.prototype.resetPersistence=function(){this.persistenceDriver.reset()},e.prototype.clearPersistence=function(){this.persistenceDriver.clear()},e.prototype.resetDumpHistory=function(){this.persistenceDriver.resetHistory(),this.eventManager.fire(exports.StoreEventType.DumpUpdate,this.frozenState,this.frozenState)},e.prototype.saveDump=function(){var e=this.persistenceDriver.saveDump(this.persistenceDriver.pack(this.frozenState));return this.eventManager.fire(exports.StoreEventType.DumpUpdate,this.frozenState,this.frozenState),e},e.prototype.removeDump=function(e){this.persistenceDriver.removeDump(e),this.eventManager.fire(exports.StoreEventType.DumpUpdate,this.frozenState,this.frozenState)},e.prototype.restoreDump=function(e){var t=this.persistenceDriver.readDump(e);if(t){var r=this.deepFreeze(this.frozenState);this.setState(__assign(__assign({},t.data),{$actionName:"@restoreDump"})),this.eventManager.fire(exports.StoreEventType.DumpUpdate,this.frozenState,r)}},e.prototype.getDumpHistory=function(){return this.persistenceDriver.getDumpHistory()},e.prototype.setState=function(e){var t,r=e.$actionName,i=__rest(e,["$actionName"]),n=this.deepFreeze(this.frozenState),o=this.deepFreeze(__assign(__assign({},n),i));this.frozenState=o,this.persistenceDriver.write(this.persistenceDriver.pack(o)),this.eventManager.fire(exports.StoreEventType.Update,o,n),null===(t=this._hook)||void 0===t||t.updateState(this.name,i,r)},e.prototype.resetState=function(){this.setState(__assign(__assign({},this.deepFreeze(this.initialState)),{$actionName:"@resetState"}))},e.prototype.removeStore=function(){var e;null===(e=this._hook)||void 0===e||e.removeStore(this.name)},e.prototype.getInitialState=function(){return this.initialState},e.prototype.on=function(e,t,r){var i,n=e&&e.constructor===Array?e:[e];return i=Array.isArray(t)?this.eventManager.add(n,r,t):this.eventManager.add(n,t),this.eventManager.fire(exports.StoreEventType.Init,this.frozenState,this.frozenState,i),this.eventManager.fire(exports.StoreEventType.DumpUpdate,this.frozenState,this.frozenState,i),i},e}();function getOption(e){var t=function(e){return e},r=function(e,t){return e===t},i=exports.StoreEventType.All,n=[];return e[0]&&(Object.keys(exports.StoreEventType).includes(e[0].toString())||Array.isArray(e[0])&&Object.keys(exports.StoreEventType).includes(e[0][0].toString()))?{eventType:e[0],mapState:e[1]||t,compare:e[2]||r,includeKeys:n}:e[0]&&Array.isArray(e[0])&&"string"==typeof e[0][0]?{eventType:e[1]||i,mapState:t,compare:r,includeKeys:e[0]}:"function"==typeof e[0]?{eventType:i,mapState:e[0]||t,compare:e[1]||r,includeKeys:n}:e[0]?{eventType:e[0].eventType||i,mapState:e[0].mapState||t,compare:e[0].compare||r,includeKeys:n}:{mapState:t,compare:r,eventType:i,includeKeys:n}}function useStore(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var i=React.useMemo((function(){return getOption(t)}),[]),n=React.useRef(e),o=React.useMemo((function(){return i.mapState(n.current.state)}),[]),s=React.useState(0),a=React.useRef(o);return React.useEffect((function(){var e;return e=i.includeKeys.length>0?n.current.on(i.eventType,i.includeKeys,(function(e){a.current=i.mapState(e),s[1](Date.now())})):n.current.on(i.eventType,(function(e,t,r){var n=i.mapState(e,t,r);i.compare&&i.compare(n,a.current)||(a.current=n,s[1](Date.now()))})),function(){e.remove()}}),[]),a.current}function useIsolatedStore(e,t,r){var i=React__default.useState(0),n=React__default.useRef(React__default.useMemo((function(){return new Store(e,__assign({persistence:!1,immutable:!0},t),r)}),[]));return React__default.useEffect((function(){var e=n.current.on(exports.StoreEventType.Update,(function(){i[1](Date.now())}));return function(){var r;e.remove(),(null===(r=t)||void 0===r?void 0:r.persistence)||n.current.resetState(),n.current.removeStore()}}),[]),n.current}exports.Store=Store,exports.StoreEvent=StoreEvent,exports.StorePersistentDriver=StorePersistentDriver,exports.StorePersistentLocalStorageDriver=StorePersistentLocalStorageDriver,exports.areSimilar=areSimilar,exports.followStore=followStore,exports.useIsolatedStore=useIsolatedStore,exports.useStore=useStore;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(4);
} else {}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var h=__webpack_require__(5),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113;n&&Symbol.for("react.suspense_list");
var z=n?Symbol.for("react.memo"):60115,aa=n?Symbol.for("react.lazy"):60116;n&&Symbol.for("react.fundamental");n&&Symbol.for("react.responder");n&&Symbol.for("react.scope");var A="function"===typeof Symbol&&Symbol.iterator;
function B(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
function E(a,b,c){this.props=a;this.context=b;this.refs=D;this.updater=c||C}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(B(85));this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,c){this.props=a;this.context=b;this.refs=D;this.updater=c||C}var H=G.prototype=new F;
H.constructor=G;h(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,l=null;if(null!=b)for(e in void 0!==b.ref&&(l=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var k=Array(f),m=0;m<f;m++)k[m]=arguments[m+2];d.children=k}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:l,props:d,_owner:J.current}}
function ba(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,c,e){if(P.length){var d=P.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var l=0;l<a.length;l++){d=a[l];var f=b+T(d,l);g+=S(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=A&&a[A]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),l=
0;!(d=a.next()).done;)d=d.value,f=b+T(d,l++),g+=S(d,f,c,e);else if("object"===d)throw c=""+a,Error(B(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function U(a,b,c){return null==a?0:S(a,"",b,c)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ca(a,b){a.func.call(a.context,b,a.count++)}
function da(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,e,c,function(a){return a}):null!=a&&(N(a)&&(a=ba(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+c)),e.push(a))}function V(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(O,"$&/")+"/");b=Q(b,g,e,d);U(a,da,b);R(b)}function W(){var a=I.current;if(null===a)throw Error(B(321));return a}
var X={Children:{map:function(a,b,c){if(null==a)return a;var e=[];V(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=Q(null,null,b,c);U(a,ca,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){if(!N(a))throw Error(B(143));return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:x,render:a}},lazy:function(a){return{$$typeof:aa,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
b,c){return W().useImperativeHandle(a,b,c)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,c){return W().useReducer(a,b,c)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,Profiler:u,StrictMode:t,Suspense:y,createElement:M,cloneElement:function(a,b,c){if(null===a||void 0===a)throw Error(B(267,a));var e=h({},a.props),d=a.key,g=a.ref,l=a._owner;
if(null!=b){void 0!==b.ref&&(g=b.ref,l=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(k in b)K.call(b,k)&&!L.hasOwnProperty(k)&&(e[k]=void 0===b[k]&&void 0!==f?f[k]:b[k])}var k=arguments.length-2;if(1===k)e.children=c;else if(1<k){f=Array(k);for(var m=0;m<k;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,key:d,ref:g,props:e,_owner:l}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.12.0",
__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:h}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EAction;
(function (EAction) {
    EAction[EAction["SET_STATE"] = 0] = "SET_STATE";
    EAction[EAction["RESET_STATE"] = 1] = "RESET_STATE";
    EAction[EAction["CREATE_NEW_STORE"] = 2] = "CREATE_NEW_STORE";
    EAction[EAction["REMOVE_STORE"] = 3] = "REMOVE_STORE";
    EAction[EAction["ADD_EVENT_LISTNER"] = 4] = "ADD_EVENT_LISTNER";
    EAction[EAction["REMOVE_EVENT_LISTNER"] = 5] = "REMOVE_EVENT_LISTNER";
})(EAction = exports.EAction || (exports.EAction = {}));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var EProtocolTypes;
(function (EProtocolTypes) {
    EProtocolTypes[EProtocolTypes["NAN"] = 0] = "NAN";
    EProtocolTypes[EProtocolTypes["UNDEFINED"] = 1] = "UNDEFINED";
    EProtocolTypes[EProtocolTypes["DATE"] = 2] = "DATE";
    EProtocolTypes[EProtocolTypes["MAP"] = 3] = "MAP";
    EProtocolTypes[EProtocolTypes["FUNCTION"] = 4] = "FUNCTION";
    EProtocolTypes[EProtocolTypes["REGEXP"] = 5] = "REGEXP";
    EProtocolTypes[EProtocolTypes["SYMBOL"] = 6] = "SYMBOL";
    EProtocolTypes[EProtocolTypes["CUSTOM_CLASS"] = 7] = "CUSTOM_CLASS";
})(EProtocolTypes || (EProtocolTypes = {}));
function encodeData(obj) {
    var string = JSON.stringify(obj, function (key, value) {
        var _a, _b, _c, _d, _e, _f;
        if (typeof value === "number" && isNaN(value)) {
            return { __DEV_PROTOCOL__: true, type: EProtocolTypes.NAN };
        }
        if (typeof value === "undefined") {
            return { __DEV_PROTOCOL__: true, type: EProtocolTypes.UNDEFINED };
        }
        if ((typeof value === "string" && Date.parse(value)) ||
            value instanceof Date) {
            return {
                __DEV_PROTOCOL__: true,
                type: EProtocolTypes.DATE,
                value: new Date(value).getTime() + "_"
            };
        }
        if (value instanceof Map) {
            return {
                __DEV_PROTOCOL__: true,
                type: EProtocolTypes.MAP,
                value: Array.from(value.entries())
            };
        }
        if (typeof value === "function") {
            return {
                __DEV_PROTOCOL__: true,
                type: EProtocolTypes.FUNCTION,
                value: value.toString()
            };
        }
        if (value instanceof RegExp) {
            return {
                __DEV_PROTOCOL__: true,
                type: EProtocolTypes.REGEXP,
                value: {
                    source: value.source,
                    flags: value.flags
                }
            };
        }
        if (typeof value === "symbol") {
            return {
                __DEV_PROTOCOL__: true,
                type: EProtocolTypes.SYMBOL,
                value: value.description
            };
        }
        if (value && ((_b = (_a = Object.getPrototypeOf(value)) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.name) &&
            ["Object", "Boolean", "String", "Number", "Array"].indexOf((_d = (_c = Object.getPrototypeOf(value)) === null || _c === void 0 ? void 0 : _c.constructor) === null || _d === void 0 ? void 0 : _d.name) === -1) {
            return {
                __DEV_PROTOCOL__: true,
                type: EProtocolTypes.CUSTOM_CLASS,
                value: __assign({}, value),
                constructorName: (_f = (_e = Object.getPrototypeOf(value)) === null || _e === void 0 ? void 0 : _e.constructor) === null || _f === void 0 ? void 0 : _f.name
            };
        }
        return value;
    });
    return string;
}
exports.encodeData = encodeData;
function decodeData(string) {
    return JSON.parse(string, function (key, value) {
        var _a;
        if (typeof value === "object" && ((_a = value) === null || _a === void 0 ? void 0 : _a.__DEV_PROTOCOL__)) {
            switch (value.type) {
                case EProtocolTypes.NAN: {
                    return NaN;
                }
                case EProtocolTypes.UNDEFINED: {
                    return "undefined";
                }
                case EProtocolTypes.DATE: {
                    return new Date(parseInt(value.value, 10));
                }
                case EProtocolTypes.MAP: {
                    return new Map(value.value);
                }
                case EProtocolTypes.FUNCTION: {
                    return new Function("return " + value.value)();
                }
                case EProtocolTypes.REGEXP: {
                    return new RegExp(value.value.source, value.value.flags);
                }
                case EProtocolTypes.SYMBOL: {
                    return Symbol(value.value);
                }
                case EProtocolTypes.CUSTOM_CLASS: {
                    var obj = __assign(__assign({}, value.value), { __constructorName: value.constructorName });
                    return obj;
                }
            }
        }
        return value;
    });
}
exports.decodeData = decodeData;


/***/ })
/******/ ]);
//# sourceMappingURL=background.js.map