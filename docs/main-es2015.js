(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-map></app-map>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer>\n  <p  class=\"text-xs-center\">© Copyright 2020. All rights reserved.</p>\n  <p  class=\"text-xs-center\"> Developed by Daniel Montes</p>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-dashboard/main-dashboard.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-dashboard/main-dashboard.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md bg-dark navbar-dark sticky-top\">\r\n    <a class=\"navbar-brand\" href=\"#\">{{ title }}\r\n        <i class=\"fas fa-tools\"></i>\r\n    </a>\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navb\" aria-expanded=\"true\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div id=\"navb\" class=\"navbar-collapse collapse hide\">\r\n    </div>\r\n</nav>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-dashboard></app-main-dashboard>\r\n<div class=\"map-container\">\r\n    <div class=\"map-frame\">\r\n      <div id=\"map\"></div>\r\n    </div>\r\n</div>\r\n<div  id=\"generalStats\" class=\"card text-white bg-dark mb-3\" style=\"max-width: 18rem;\">\r\n  <div class=\"card-header\">General Stats</div>\r\n  <div class=\"card-body\">\r\n    <p class=\"card-text\"><b>Date:</b> {{ lastChecked }} </p>\r\n    <p class=\"card-text\"><b>Cases:</b> {{ cases }} </p>\r\n    <p class=\"card-text\"><b>New cases:</b> {{ todayCases }}  </p>\r\n    <p class=\"card-text\"><b>Total recovered: </b>  {{ totalRecovered }}   </p>\r\n    <p class=\"card-text\"><b>Total deaths: </b> {{ deaths}} </p>\r\n  </div>\r\n</div>\r\n<div id=\"showMarkers\" class=\"btn-group-vertical\">\r\n  <button type=\"button\" class=\"btn btn-primary\" id=\"exampleCheck1\" (click)=\"showDistricts()\">Districts View</button>\r\n  <br>\r\n  <button type=\"button\" class=\"btn btn-primary\" id=\"exampleCheck2\" (click)=\"showProvinces()\">Provinces View</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
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
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'COVID19-CR';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_coronastatistics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/coronastatistics.service */ "./src/app/services/coronastatistics.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-dashboard/main-dashboard.component */ "./src/app/main-dashboard/main-dashboard.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"],
            _main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["MainDashboardComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_10__["LeafletModule"].forRoot()
        ],
        providers: [_services_coronastatistics_service__WEBPACK_IMPORTED_MODULE_1__["CoronastatisticsService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/data/data.js":
/*!******************************!*\
  !*** ./src/app/data/data.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  "name": "Grecia",
  "latlng": [10.0726507, -84.3117298],
  "cases": 9
}, {
  "name": "Alajuela",
  "latlng": [10.0169109, -84.2156165],
  "cases": 45
}, {
  "name": "San Jose",
  "latlng": [9.9333669, -84.0858859],
  "cases": 23
}, {
  "name": "Santa Ana",
  "latlng": [9.9327098, -84.1823177],
  "cases": 16
}, {
  "name": "Escazu",
  "latlng": [9.9194401, -84.1413027],
  "cases": 13
}, {
  "name": "Tibas",
  "latlng": [9.9601982, -84.0822821],
  "cases": 12
}, {
  "name": "Heredia",
  "latlng": [9.9975216, -84.1211849],
  "cases": 12
}, {
  "name": "Desamparados",
  "latlng": [9.8965978, -84.0631713],
  "cases": 12
}, {
  "name": "Goicoechea",
  "latlng": [9.9473717, -84.0179533],
  "cases": 8
}, {
  "name": "La Union",
  "latlng": [9.9388468, -84.0078108],
  "cases": 6
}, {
  "name": "Moravia",
  "latlng": [9.9618075, -84.0532257],
  "cases": 6
}, {
  "name": "San Carlos",
  "latlng": [10.3378529, -84.4408188],
  "cases": 6
}, {
  "name": "Cartago",
  "latlng": [9.8633303, -83.9245327],
  "cases": 5
}, {
  "name": "Curridabat",
  "latlng": [9.9134323, -84.0332696],
  "cases": 5
}, {
  "name": "Montes de Oca",
  "latlng": [9.9381134, -84.045481],
  "cases": 5
}, {
  "name": "Poas",
  "latlng": [10.0744457, -84.2479653],
  "cases": 5
}, {
  "name": "Nicoya",
  "latlng": [10.1494207, -85.4711438],
  "cases": 3
}, {
  "name": "Perez Zeledon",
  "latlng": [9.3535614, -83.7278156],
  "cases": 3
}, {
  "name": "Puntarenas",
  "latlng": [9.9785489, -84.8573261],
  "cases": 3
}, {
  "name": "Santa Cruz",
  "latlng": [10.2602518, -85.5885873],
  "cases": 2
}, {
  "name": "Atenas		",
  "latlng": [9.97718, -84.379997],
  "cases": 2
}, {
  "name": "Santa Barbara	",
  "latlng": [10.03819, -84.15888],
  "cases": 2
}, {
  "name": "Vazquez de Coronado",
  "latlng": [9.9775608,-84.0083074],
  "cases": 2,
}, {
  "name": "San Rafael		",
  "latlng": [10.0128373, -84.106983, 15],
  "cases": 2
}, {
  "name": "Aserri		",
  "latlng": [9.865107, -84.1027104],
  "cases": 2
}, {
  "name": "Coto Brus	",
  "latlng": [8.9540659, -83.0791588],
  "cases": 2
}, {
  "name": "Jimenez",
  "latlng": [10.1994596, -83.7836826],
  "cases": 2
}, {
  "name": "El Guarco",
  "cases": 2,
  "latlng": [9.8431777, -83.9537617]
}, {
  "name": "Garabito	",
  "cases": 2,
  "latlng": [9.9778492, -84.8316098]
}, {
  "name": "Oreamuno",
  "cases": 2,
  "latlng": [9.903667, -83.9767081]
}, {
  "name": "Sarchi	",
  "cases": 2,
  "latlng": [10.0919309, -84.3558599]
}, {
  "name": "Barva	",
  "cases": 1,
  "latlng": [10.0202225, -84.1279471]
}, {
  "name": "Limon		",
  "cases": 1,
  "latlng": [9.9914448, -83.0325223]
}, {
  "name": "Palmares	",
  "cases": 1,
  "latlng": [10.056764, -84.4347075]
}, {
  "name": "Liberia		",
  "cases": 1,
  "latlng": [10.6317634, -85.4433859]
}, {
  "name": "Montes de Oro",
  "cases": 1,
  "latlng": [10.0919364, -84.7311813]
}, {
  "name": "Belen		",
  "cases": 1,
  "latlng": [9.9852018, -84.1852407]
}, {
  "name": "Flores		",
  "cases": 1,
  "latlng": [10.0070839, -84.1616868]
}, {
  "name": "Alvarado	",
  "cases": 1,
  "latlng": [9.9162158, -83.8183322]
}, {
  "name": "Orotina	",
  "cases": 1,
  "latlng": [9.9122007, -84.5284045]
}, {
  "name": "Tilaran	",
  "latlng": [10.4670143, -84.972916],
  "cases": 1
}]);


/***/ }),

/***/ "./src/app/data/provincesData.js":
/*!***************************************!*\
  !*** ./src/app/data/provincesData.js ***!
  \***************************************/
/*! exports provided: provincesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provincesData", function() { return provincesData; });
const provincesData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "01",
      properties: {
        name: "Alajuela",
        cases: 0,
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-84.159315, 10.773952],
            [-84.16761, 10.031062],
            [-84.249997, 9.936388],
            [-84.45872, 9.890393],
            [-84.560358, 9.860628],
            [-84.681205, 9.882275],
            [-84.557643, 10.014834],
            [-84.661982, 10.16356],
            [-84.774592, 10.312217],
            [-84.782844, 10.485111],
            [-85.049227, 10.703792],
            [-85.40627, 10.881859],
            [-85.367873, 11.016689],
            [-85.249781, 11.062516],
            [-84.909236, 10.943888],
            [-84.678508, 11.078689],
            [-84.425826, 10.951978],
            [-84.35439, 10.992424],
            [-84.318679, 10.914224],
            [-84.222557, 10.87107],
            [-84.225289, 10.809026],
            [-84.159381, 10.779348]
          ]
        ]
      }
    },
    {
      type: "Feature",
      id: "02",
      properties: {
        name: "Cartago",
        cases: 40
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-83.94267, 10.144804],
            [-83.94696, 10.146663],
            [-83.942668, 10.133821],
            [-83.934944, 10.101036],
            [-83.929619, 10.081769],
            [-83.902497, 10.065544],
            [-83.876066, 10.034274],
            [-83.880951, 10.019568],
            [-83.870141, 10.011453],
            [-83.868682, 9.993196],
            [-83.861302, 9.9817],
            [-83.858901, 9.971218],
            [-83.876068, 9.969865],
            [-83.899415, 9.966145],
            [-83.929453, 9.950083],
            [-83.938724, 9.957861],
            [-83.960872, 9.948223],
            [-84.008585, 9.938924],
            [-84.009011, 9.926919],
            [-84.037841, 9.894452],
            [-83.999403, 9.871452],
            [-84.061195, 9.811916],
            [-84.084527, 9.761844],
            [-83.992874, 9.780115],
            [-83.977766, 9.745603],
            [-83.948245, 9.737482],
            [-83.946183, 9.700258],
            [-83.936569, 9.698905],
            [-83.920089, 9.68266],
            [-83.901551, 9.688752],
            [-83.887814, 9.670477],
            [-83.850054, 9.664385],
            [-83.847296, 9.625122],
            [-83.762852, 9.603458],
            [-83.758363, 9.557417],
            [-83.70343, 9.552],
            [-83.637512, 9.576376],
            [-83.577091, 9.538458],
            [-83.538637, 9.508662],
            [-83.483717, 9.481572],
            [-83.513924, 9.541166],
            [-83.511167, 9.595334],
            [-83.431527, 9.673861],
            [-83.431515, 9.703643],
            [-83.338145, 9.825448],
            [-83.351871, 9.928271],
            [-83.310719, 9.982376],
            [-83.601863, 9.985081],
            [-83.942445, 10.144635]
          ]
        ]
      }
    },
    {
      type: "Feature",
      id: "02",
      properties: {
        name: "Heredia",
        cases: 25
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-84.01365, 10.033767],
            [-84.014339, 10.045937],
            [-84.029099, 10.057431],
            [-84.026697, 10.081431],
            [-84.015868, 10.075685],
            [-83.980167, 10.101374],
            [-83.974668, 10.166264],
            [-83.929345, 10.187891],
            [-83.851077, 10.255465],
            [-83.841471, 10.32843],
            [-83.877171, 10.397325],
            [-83.873047, 10.422988],
            [-83.842837, 10.444598],
            [-83.830481, 10.486462],
            [-83.844212, 10.53237],
            [-83.83872, 10.570172],
            [-83.845584, 10.59987],
            [-83.838712, 10.641713],
            [-83.787904, 10.657909],
            [-83.761807, 10.695695],
            [-83.706888, 10.692996],
            [-83.741214, 10.726731],
            [-83.731605, 10.740223],
            [-83.752211, 10.772603],
            [-83.818128, 10.748319],
            [-83.877179, 10.719984],
            [-83.929357, 10.705141],
            [-83.933481, 10.718635],
            [-83.967809, 10.722683],
            [-83.971936, 10.742922],
            [-84.024116, 10.794188],
            [-84.043343, 10.772603],
            [-84.065315, 10.760461],
            [-84.083168, 10.76181],
            [-84.103767, 10.777999],
            [-84.125738, 10.763159],
            [-84.132607, 10.786094],
            [-84.16007, 10.783396],
            [-84.162816, 10.382467],
            [-84.162818, 10.079741],
            [-84.177925, 10.005368],
            [-84.202638, 9.990491],
            [-84.183406, 9.970203],
            [-84.116117, 9.962088],
            [-84.065306, 9.967498],
            [-84.022739, 9.994548],
            [-84.014589, 10.033767]
          ]
        ]
      }
    },
    {
      type: "Feature",
      id: "02",
      properties: {
        name: "San Jose",
        cases: 25
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-83.42946, 9.365063],
            [-83.488522, 9.260713],
            [-83.514619, 9.251225],
            [-83.520115, 9.21056],
            [-83.477549, 9.17938],
            [-83.474797, 9.142774],
            [-83.485782, 9.100741],
            [-83.509126, 9.070907],
            [-83.570919, 9.08718],
            [-83.616239, 9.131927],
            [-83.668424, 9.157688],
            [-83.691774, 9.209205],
            [-83.72885, 9.226827],
            [-83.76181, 9.247159],
            [-83.771426, 9.228182],
            [-83.808501, 9.233604],
            [-83.84558, 9.286465],
            [-83.851078, 9.348803],
            [-83.904629, 9.400291],
            [-83.958188, 9.412484],
            [-84.015865, 9.463963],
            [-84.070797, 9.501889],
            [-84.05982, 9.570959],
            [-84.127101, 9.575022],
            [-84.150453, 9.625122],
            [-84.22323, 9.619706],
            [-84.32485, 9.641369],
            [-84.392146, 9.6346],
            [-84.400394, 9.592625],
            [-84.42923, 9.564188],
            [-84.477293, 9.568251],
            [-84.533596, 9.585855],
            [-84.570678, 9.654908],
            [-84.59128, 9.740189],
            [-84.539105, 9.765904],
            [-84.576171, 9.817329],
            [-84.507521, 9.905274],
            [-84.445722, 9.926919],
            [-84.392163, 9.93233],
            [-84.34547, 9.920155],
            [-84.283674, 9.925566],
            [-84.245219, 9.940446],
            [-84.197155, 9.964793],
            [-84.150463, 9.96344],
            [-84.079055, 9.962088],
            [-84.021375, 9.993196],
            [-84.013128, 10.055403],
            [-84.026519, 10.082446],
            [-83.99906, 10.09191],
            [-83.977087, 10.126385],
            [-83.970905, 10.16694],
            [-83.932457, 10.18316],
            [-83.946183, 10.15207],
            [-83.942065, 10.123681],
            [-83.933139, 10.086502],
            [-83.911169, 10.064192],
            [-83.88439, 10.035795],
            [-83.867909, 9.997253],
            [-83.862067, 9.976966],
            [-83.922481, 9.955325],
            [-83.969175, 9.948562],
            [-84.01724, 9.939093],
            [-84.013127, 9.90798],
            [-84.040589, 9.89851],
            [-84.048831, 9.882275],
            [-84.006266, 9.870099],
            [-84.018619, 9.843039],
            [-84.081783, 9.794324],
            [-84.101015, 9.765904],
            [-84.037855, 9.755077],
            [-83.996653, 9.779438],
            [-83.98017, 9.740189],
            [-83.956825, 9.732068],
            [-83.95133, 9.699582],
            [-83.929359, 9.671154],
            [-83.901894, 9.681984],
            [-83.877175, 9.660323],
            [-83.853829, 9.661677],
            [-83.855198, 9.629184],
            [-83.778305, 9.60075],
            [-83.765936, 9.579084],
            [-83.739846, 9.542521],
            [-83.713753, 9.537103],
            [-83.672557, 9.545229],
            [-83.651954, 9.569605],
            [-83.62449, 9.545229],
            [-83.573681, 9.522206],
            [-83.528362, 9.496472],
            [-83.494028, 9.474799],
            [-83.483038, 9.435515],
            [-83.470679, 9.392161],
            [-83.430857, 9.363708]
          ]
        ]
      }
    },
    {
      type: "Feature",
      id: "02",
      properties: {
        name: "Limon",
        cases: 25
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-82.935429, 9.077688],
            [-82.981779, 9.095317],
            [-82.994143, 9.157688],
            [-83.061427, 9.165823],
            [-83.073794, 9.243093],
            [-83.172659, 9.321701],
            [-83.234462, 9.323056],
            [-83.315484, 9.385387],
            [-83.392389, 9.342027],
            [-83.463801, 9.390807],
            [-83.509123, 9.588563],
            [-83.433609, 9.671154],
            [-83.419867, 9.728007],
            [-83.340226, 9.837626],
            [-83.349826, 9.930977],
            [-83.314127, 9.983728],
            [-83.603846, 9.985081],
            [-83.704122, 10.045937],
            [-83.726106, 10.037824],
            [-83.945805, 10.147339],
            [-83.929699, 10.190594],
            [-83.858304, 10.250736],
            [-83.852802, 10.318973],
            [-83.865845, 10.381791],
            [-83.879578, 10.400702],
            [-83.856924, 10.443247],
            [-83.833578, 10.464855],
            [-83.830828, 10.506041],
            [-83.845246, 10.551947],
            [-83.842501, 10.603245],
            [-83.839755, 10.644412],
            [-83.781398, 10.657234],
            [-83.764913, 10.701093],
            [-83.706553, 10.690297],
            [-83.740873, 10.727405],
            [-83.750489, 10.770579],
            [-83.704492, 10.790141],
            [-83.665352, 10.798909],
            [-83.670152, 10.853538],
            [-83.676332, 10.894671],
            [-83.698302, 10.94254],
            [-83.656426, 10.938495],
            [-83.630331, 10.914898],
            [-83.600119, 10.860281],
            [-83.56922, 10.76923],
            [-83.532488, 10.656559],
            [-83.459701, 10.485111],
            [-83.377305, 10.363555],
            [-83.270192, 10.227086],
            [-83.142479, 10.071629],
            [-83.104014, 10.017539],
            [-83.032607, 10.020244],
            [-82.994151, 9.947209],
            [-82.906267, 9.830861],
            [-82.847211, 9.760491],
            [-82.800518, 9.759137],
            [-82.788153, 9.709057],
            [-82.76069, 9.667092],
            [-82.715373, 9.665738],
            [-82.705755, 9.649492],
            [-82.645338, 9.642723],
            [-82.602763, 9.630538],
            [-82.560191, 9.60075],
            [-82.556066, 9.564188],
            [-82.553319, 9.527623],
            [-82.600004, 9.565543],
            [-82.60001, 9.524914],
            [-82.617861, 9.496472],
            [-82.650818, 9.495117],
            [-82.68103, 9.497826],
            [-82.703004, 9.539812],
            [-82.742827, 9.572314],
            [-82.782653, 9.570959],
            [-82.816986, 9.588563],
            [-82.845826, 9.587209],
            [-82.859561, 9.57773],
            [-82.858189, 9.537103],
            [-82.841712, 9.505953],
            [-82.849948, 9.477508],
            [-82.935082, 9.474799],
            [-82.930974, 9.142774],
            [-82.93493, 9.0804],
            [-82.935617, 9.076671]
          ]
        ]
      }
    },
    {
      type: "Feature",
      id: "02",
      properties: {
        name: "Guanacaste",
        cases: 25
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-85.612324, 11.216122],
            [-85.686461, 11.08408],
            [-85.664501, 11.05443],
            [-85.661753, 11.040951],
            [-85.69196, 11.016689],
            [-85.733157, 11.040951],
            [-85.763371, 11.019384],
            [-85.686482, 10.976246],
            [-85.713933, 10.925011],
            [-85.875963, 10.949282],
            [-85.856762, 10.925011],
            [-85.939145, 10.895345],
            [-85.766146, 10.811724],
            [-85.678244, 10.806328],
            [-85.65077, 10.674104],
            [-85.68372, 10.644412],
            [-85.697455, 10.598521],
            [-85.64528, 10.636314],
            [-85.664496, 10.582322],
            [-85.724915, 10.536421],
            [-85.777101, 10.539121],
            [-85.807316, 10.506716],
            [-85.777113, 10.452701],
            [-85.867733, 10.358151],
            [-85.832045, 10.306813],
            [-85.851264, 10.277086],
            [-85.840281, 10.198704],
            [-85.807326, 10.120302],
            [-85.760636, 10.049994],
            [-85.702959, 9.968851],
            [-85.664504, 9.903921],
            [-85.409102, 9.841686],
            [-85.323935, 9.817329],
            [-85.227806, 9.7253],
            [-85.178361, 9.841686],
            [-85.279963, 9.925566],
            [-85.267975, 9.960735],
            [-85.247381, 9.972908],
            [-85.199319, 9.970203],
            [-85.162239, 9.988462],
            [-85.169786, 10.021596],
            [-85.14903, 10.039852],
            [-85.155541, 10.048642],
            [-85.172362, 10.046275],
            [-85.196394, 10.079741],
            [-85.238276, 10.10374],
            [-85.246864, 10.170995],
            [-85.242746, 10.217625],
            [-85.243089, 10.244654],
            [-85.225582, 10.196],
            [-85.201037, 10.170319],
            [-85.12413, 10.156802],
            [-85.071942, 10.162209],
            [-85.031604, 10.160181],
            [-85.037781, 10.190932],
            [-85.026454, 10.198704],
            [-85.026452, 10.187891],
            [-85.003453, 10.173022],
            [-85.004136, 10.160519],
            [-84.930675, 10.110838],
            [-84.91968, 10.109486],
            [-84.927574, 10.116922],
            [-84.929292, 10.157477],
            [-84.904919, 10.176402],
            [-84.875394, 10.186201],
            [-84.877793, 10.201407],
            [-84.889808, 10.213571],
            [-84.871273, 10.247695],
            [-84.870241, 10.265263],
            [-84.862345, 10.282153],
            [-84.84415, 10.290599],
            [-84.838999, 10.326403],
            [-84.828357, 10.336198],
            [-84.811878, 10.33147],
            [-84.794712, 10.322012],
            [-84.786814, 10.322012],
            [-84.774112, 10.34937],
            [-84.767931, 10.353085],
            [-84.780631, 10.384493],
            [-84.766216, 10.422313],
            [-84.773079, 10.461141],
            [-84.77514, 10.496589],
            [-84.792647, 10.489837],
            [-84.818738, 10.514818],
            [-84.821576, 10.525113],
            [-84.835993, 10.523425],
            [-84.845264, 10.53237],
            [-84.84372, 10.546209],
            [-84.852645, 10.546209],
            [-84.860198, 10.555659],
            [-84.882169, 10.56241],
            [-84.891269, 10.560047],
            [-84.903456, 10.569835],
            [-84.910839, 10.568991],
            [-84.922683, 10.572028],
            [-84.93058, 10.582153],
            [-84.938991, 10.586034],
            [-84.945514, 10.59464],
            [-84.956843, 10.594133],
            [-84.974867, 10.605776],
            [-84.986197, 10.604257],
            [-84.989803, 10.618093],
            [-84.998557, 10.623998],
            [-85.001648, 10.625685],
            [-85.000447, 10.635977],
            [-85.003365, 10.640701],
            [-85.000104, 10.652342],
            [-85.002207, 10.658077],
            [-85.008214, 10.662211],
            [-85.011476, 10.668537],
            [-85.018428, 10.67326],
            [-85.019888, 10.674778],
            [-85.021347, 10.683044],
            [-85.02684, 10.692575],
            [-85.04203, 10.697298],
            [-85.053103, 10.696539],
            [-85.057052, 10.698816],
            [-85.060228, 10.704382],
            [-85.060486, 10.708599],
            [-85.067437, 10.708093],
            [-85.070785, 10.712731],
            [-85.086834, 10.713069],
            [-85.096448, 10.717707],
            [-85.101341, 10.71349],
            [-85.106233, 10.713575],
            [-85.109924, 10.711719],
            [-85.119107, 10.710623],
            [-85.124601, 10.710876],
            [-85.124516, 10.714924],
            [-85.128893, 10.719141],
            [-85.128807, 10.73179],
            [-85.139449, 10.744271],
            [-85.141767, 10.745114],
            [-85.144514, 10.747307],
            [-85.155842, 10.746548],
            [-85.167773, 10.747897],
            [-85.18142, 10.746295],
            [-85.190433, 10.748319],
            [-85.19996, 10.751691],
            [-85.203994, 10.755655],
            [-85.225621, 10.761979],
            [-85.235837, 10.766026],
            [-85.273791, 10.751017],
            [-85.306762, 10.798235],
            [-85.349333, 10.827911],
            [-85.374055, 10.82926],
            [-85.400147, 10.867024],
            [-85.428826, 10.897705],
            [-85.447363, 10.918269],
            [-85.448739, 10.93445],
            [-85.442217, 10.946585],
            [-85.419903, 10.963438],
            [-85.393125, 10.96445],
            [-85.379733, 10.975909],
            [-85.376299, 10.996131],
            [-85.36703, 10.999501],
            [-85.354327, 11.030168],
            [-85.333042, 11.036234],
            [-85.330681, 11.04053],
            [-85.322786, 11.041457],
            [-85.311972, 11.042383],
            [-85.289657, 11.02267],
            [-85.284762, 11.024355],
            [-85.276351, 11.014245],
            [-85.271459, 11.01593],
            [-85.267682, 11.014667],
            [-85.268282, 11.011465],
            [-85.262618, 11.012813],
            [-85.257468, 11.020058],
            [-85.258326, 11.033201],
            [-85.263389, 11.042383],
            [-85.255838, 11.0439],
            [-85.251031, 11.048954],
            [-85.248799, 11.061084],
            [-85.245108, 11.060663],
            [-85.242276, 11.06538],
            [-85.238156, 11.063443],
            [-85.232577, 11.062011],
            [-85.229058, 11.063106],
            [-85.358109, 11.125855],
            [-85.424697, 11.128887],
            [-85.523913, 11.168634],
            [-85.561001, 11.21006],
            [-85.61023, 11.219153],
            [-85.612377, 11.216206]
          ]
        ]
      }
    },
    {
      type: "Feature",
      id: "02",
      properties: {
        name: "Puntarenas",
        cases: 25
      },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [-85.091224, 10.158153],
              [-85.03349, 10.159505],
              [-85.026712, 10.15866],
              [-85.026883, 10.168629],
              [-85.035465, 10.173191],
              [-85.039242, 10.191439],
              [-85.025511, 10.200055],
              [-85.028427, 10.19279],
              [-85.02551, 10.185018],
              [-85.009204, 10.17826],
              [-85.00165, 10.169136],
              [-85.005253, 10.160181],
              [-84.981053, 10.147677],
              [-84.980534, 10.140918],
              [-84.972124, 10.138552],
              [-84.959765, 10.129427],
              [-84.945346, 10.116922],
              [-84.929896, 10.113204],
              [-84.920282, 10.110838],
              [-84.927923, 10.127737],
              [-84.932724, 10.153422],
              [-84.912815, 10.165926],
              [-84.904574, 10.178767],
              [-84.876081, 10.186877],
              [-84.87642, 10.201745],
              [-84.889808, 10.211206],
              [-84.870243, 10.243641],
              [-84.869211, 10.26729],
              [-84.860972, 10.282829],
              [-84.844837, 10.292625],
              [-84.838999, 10.326741],
              [-84.82664, 10.335523],
              [-84.794371, 10.321337],
              [-84.777889, 10.286207],
              [-84.763812, 10.271343],
              [-84.766557, 10.259857],
              [-84.734289, 10.250736],
              [-84.72227, 10.258168],
              [-84.724243, 10.268303],
              [-84.704334, 10.262222],
              [-84.696092, 10.270161],
              [-84.686136, 10.283505],
              [-84.67412, 10.279789],
              [-84.668455, 10.259351],
              [-84.657126, 10.242965],
              [-84.6609, 10.210192],
              [-84.664162, 10.193804],
              [-84.684759, 10.176064],
              [-84.668456, 10.174881],
              [-84.66279, 10.166264],
              [-84.668968, 10.154098],
              [-84.665536, 10.146325],
              [-84.674117, 10.139059],
              [-84.665193, 10.121823],
              [-84.648543, 10.094107],
              [-84.640302, 10.077037],
              [-84.627943, 10.065544],
              [-84.624852, 10.046275],
              [-84.602882, 10.043064],
              [-84.572671, 10.019568],
              [-84.565801, 10.021934],
              [-84.566015, 10.028527],
              [-84.563098, 10.02878],
              [-84.563355, 10.016102],
              [-84.556833, 10.003931],
              [-84.554257, 9.99328],
              [-84.552969, 9.986856],
              [-84.561599, 9.9817],
              [-84.571892, 9.986433],
              [-84.593176, 9.971556],
              [-84.612059, 9.954648],
              [-84.635061, 9.947547],
              [-84.6409, 9.937064],
              [-84.650856, 9.94146],
              [-84.660812, 9.930977],
              [-84.667336, 9.917111],
              [-84.677292, 9.905951],
              [-84.681286, 9.905443],
              [-84.682488, 9.909164],
              [-84.688838, 9.903668],
              [-84.683862, 9.893437],
              [-84.688324, 9.886165],
              [-84.683175, 9.887264],
              [-84.678798, 9.879485],
              [-84.680256, 9.877202],
              [-84.67854, 9.876526],
              [-84.678711, 9.87475],
              [-84.67648, 9.877794],
              [-84.669271, 9.876864],
              [-84.661889, 9.875257],
              [-84.658971, 9.876018],
              [-84.655108, 9.872467],
              [-84.647041, 9.869338],
              [-84.648413, 9.865956],
              [-84.647297, 9.864603],
              [-84.646032, 9.866336],
              [-84.645431, 9.864729],
              [-84.642255, 9.865364],
              [-84.640582, 9.864433],
              [-84.637363, 9.865744],
              [-84.635389, 9.864603],
              [-84.628566, 9.862023],
              [-84.614963, 9.860501],
              [-84.61333, 9.861897],
              [-84.610283, 9.861939],
              [-84.60921, 9.860924],
              [-84.602902, 9.861812],
              [-84.601915, 9.859317],
              [-84.597366, 9.85826],
              [-84.595649, 9.852552],
              [-84.600045, 9.848113],
              [-84.585971, 9.840332],
              [-84.575328, 9.846421],
              [-84.562282, 9.841686],
              [-84.56022, 9.832552],
              [-84.569488, 9.825448],
              [-84.575325, 9.82714],
              [-84.583565, 9.821727],
              [-84.582536, 9.804812],
              [-84.567775, 9.809887],
              [-84.551639, 9.7791],
              [-84.541339, 9.782483],
              [-84.537218, 9.776731],
              [-84.553008, 9.7544],
              [-84.565711, 9.759137],
              [-84.571549, 9.738497],
              [-84.592146, 9.742896],
              [-84.583224, 9.710411],
              [-84.583223, 9.679615],
              [-84.563313, 9.626476],
              [-84.555415, 9.624107],
              [-84.548548, 9.613952],
              [-84.544771, 9.585516],
              [-84.531726, 9.579084],
              [-84.528291, 9.572652],
              [-84.485725, 9.569605],
              [-84.45914, 9.578407],
              [-84.431647, 9.558772],
              [-84.393883, 9.598042],
              [-84.391818, 9.637307],
              [-84.304626, 9.644754],
              [-84.224974, 9.625122],
              [-84.187889, 9.616998],
              [-84.150124, 9.627153],
              [-84.133641, 9.598042],
              [-84.143937, 9.57773],
              [-84.130207, 9.553355],
              [-84.071162, 9.565543],
              [-84.083512, 9.508662],
              [-84.002501, 9.44703],
              [-83.957864, 9.396904],
              [-83.929709, 9.38471],
              [-83.911855, 9.401646],
              [-83.88851, 9.371838],
              [-83.888506, 9.362353],
              [-83.843881, 9.34135],
              [-83.860352, 9.298662],
              [-83.839757, 9.254614],
              [-83.76904, 9.215305],
              [-83.753239, 9.218694],
              [-83.760621, 9.241059],
              [-83.747577, 9.243093],
              [-83.73556, 9.222421],
              [-83.706724, 9.225471],
              [-83.666213, 9.18277],
              [-83.675819, 9.17328],
              [-83.673761, 9.154638],
              [-83.651448, 9.142435],
              [-83.646296, 9.129216],
              [-83.6154, 9.126165],
              [-83.553263, 9.082095],
              [-83.505028, 9.074976],
              [-83.478921, 9.130572],
              [-83.489902, 9.203782],
              [-83.520111, 9.211916],
              [-83.43361, 9.359643],
              [-83.392406, 9.339317],
              [-83.33061, 9.378612],
              [-83.231738, 9.317635],
              [-83.178174, 9.327121],
              [-83.073811, 9.243093],
              [-83.080662, 9.221405],
              [-83.055947, 9.197004],
              [-83.064182, 9.178025],
              [-82.994155, 9.156333],
              [-82.933729, 9.072264],
              [-82.888408, 9.074976],
              [-82.740107, 8.981393],
              [-82.709878, 8.920347],
              [-82.750066, 8.908815],
              [-82.781629, 8.875574],
              [-82.820767, 8.857934],
              [-82.879129, 8.831474],
              [-82.867466, 8.806368],
              [-82.893553, 8.779904],
              [-82.919646, 8.76226],
              [-82.881889, 8.69982],
              [-82.842064, 8.667239],
              [-82.826955, 8.597995],
              [-82.826266, 8.557257],
              [-82.831072, 8.513798],
              [-82.854415, 8.453356],
              [-82.874328, 8.435017],
              [-82.914151, 8.427546],
              [-82.932693, 8.431621],
              [-82.961531, 8.406489],
              [-82.985564, 8.368448],
              [-83.019208, 8.348747],
              [-83.046675, 8.333121],
              [-83.024022, 8.310021],
              [-83.000677, 8.295073],
              [-82.991062, 8.277407],
              [-82.975957, 8.293035],
              [-82.941627, 8.269932],
              [-82.923772, 8.247508],
              [-82.927889, 8.218966],
              [-82.913472, 8.200616],
              [-82.900425, 8.176829],
              [-82.90111, 8.151001],
              [-82.890125, 8.121093],
              [-82.878452, 8.086423],
              [-82.883943, 8.048352],
              [-82.903167, 8.029315],
              [-82.920334, 8.054471],
              [-82.914844, 8.093901],
              [-82.917589, 8.125171],
              [-82.99311, 8.248187],
              [-83.125625, 8.335839],
              [-83.153792, 8.369807],
              [-83.105737, 8.457431],
              [-83.161341, 8.546393],
              [-83.191557, 8.616325],
              [-83.259529, 8.630582],
              [-83.327507, 8.665203],
              [-83.356352, 8.715431],
              [-83.441488, 8.701857],
              [-83.46141, 8.69982],
              [-83.429831, 8.658415],
              [-83.284942, 8.547072],
              [-83.274647, 8.506328],
              [-83.26778, 8.382714],
              [-83.293868, 8.360975],
              [-83.535537, 8.433659],
              [-83.587748, 8.439092],
              [-83.611785, 8.482559],
              [-83.709965, 8.565405],
              [-83.745679, 8.599353],
              [-83.719595, 8.686924],
              [-83.661921, 8.717467],
              [-83.652988, 8.797547],
              [-83.611794, 8.847757],
              [-83.633071, 8.913564],
              [-83.652297, 9.024796],
              [-83.723701, 9.110233],
              [-83.810217, 9.190904],
              [-83.904286, 9.268168],
              [-84.040922, 9.333219],
              [-84.170699, 9.377935],
              [-84.190627, 9.437547],
              [-84.484473, 9.507307],
              [-84.535319, 9.504598],
              [-84.599862, 9.552678],
              [-84.668526, 9.602781],
              [-84.692565, 9.665738],
              [-84.681583, 9.7253],
              [-84.652747, 9.760491],
              [-84.676085, 9.812593],
              [-84.728953, 9.880246],
              [-84.744751, 9.91542],
              [-84.758484, 9.960059],
              [-84.805171, 9.972232],
              [-84.821747, 9.973923],
              [-84.853329, 9.971218],
              [-84.858482, 9.977304],
              [-84.84767, 9.982883],
              [-84.846124, 9.990829],
              [-84.883884, 10.005537],
              [-84.921203, 10.026329],
              [-84.962414, 10.05067],
              [-84.980957, 10.080417],
              [-85.0146, 10.099346],
              [-85.0455, 10.120302],
              [-85.074261, 10.1323],
              [-85.085418, 10.140242],
              [-85.097434, 10.155112],
              [-85.091279, 10.158153]
            ]
          ],
          [
            [
              [-85.230226, 9.730038],
              [-85.194511, 9.668446],
              [-85.161552, 9.633246],
              [-85.145756, 9.611582],
              [-85.140262, 9.58247],
              [-85.114859, 9.556063],
              [-85.08808, 9.571636],
              [-85.06748, 9.646108],
              [-85.040016, 9.675215],
              [-84.997445, 9.696874],
              [-84.99341, 9.705842],
              [-84.998901, 9.712441],
              [-85.014349, 9.714979],
              [-85.016754, 9.721747],
              [-85.011091, 9.736467],
              [-84.995299, 9.747464],
              [-84.98929, 9.741712],
              [-84.981908, 9.739005],
              [-84.977102, 9.735621],
              [-84.975728, 9.73156],
              [-84.968519, 9.727838],
              [-84.959421, 9.725131],
              [-84.951353, 9.726654],
              [-84.948949, 9.73579],
              [-84.951866, 9.74628],
              [-84.951695, 9.756769],
              [-84.943628, 9.759306],
              [-84.938821, 9.757276],
              [-84.936246, 9.756092],
              [-84.929037, 9.759983],
              [-84.927319, 9.768949],
              [-84.923543, 9.776731],
              [-84.917535, 9.784344],
              [-84.920281, 9.790941],
              [-84.899856, 9.796693],
              [-84.901055, 9.803459],
              [-84.895219, 9.81327],
              [-84.879085, 9.812086],
              [-84.875306, 9.820712],
              [-84.864149, 9.824095],
              [-84.862603, 9.831368],
              [-84.892811, 9.835258],
              [-84.914098, 9.82714],
              [-84.929892, 9.835258],
              [-84.919939, 9.844561],
              [-84.906035, 9.851834],
              [-84.905518, 9.859613],
              [-84.917189, 9.863503],
              [-84.919937, 9.873651],
              [-84.934355, 9.880415],
              [-84.927148, 9.897326],
              [-84.913073, 9.900878],
              [-84.918735, 9.924551],
              [-84.932639, 9.92844],
              [-84.930238, 9.932837],
              [-84.957356, 9.941291],
              [-84.974604, 9.942813],
              [-85.005505, 9.943489],
              [-85.018897, 9.951605],
              [-85.024048, 9.965807],
              [-85.049108, 9.975951],
              [-85.068335, 9.976966],
              [-85.080009, 9.980685],
                [-85.095458, 9.974261],
                [-85.108848, 9.981362],
                [-85.119834, 9.996577],
                [-85.140776, 10.007734],
                [-85.159316, 10.020582],
                [-85.16996, 10.010777],
                [-85.162409, 9.993196],
                [-85.161035, 9.985757],
                [-85.16996, 9.979671],
                [-85.183349, 9.971218],
                [-85.202231, 9.967836],
                [-85.22077, 9.969865],
                [-85.234504, 9.967836],
                [-85.247894, 9.970879],
                [-85.255447, 9.96344],
                [-85.26712, 9.96175],
                [-85.272614, 9.950929],
                [-85.270555, 9.938417],
                [-85.276047, 9.928271],
                [-85.277421, 9.917788],
                [-85.265063, 9.915082],
                [-85.243092, 9.907642],
                [-85.217, 9.900878],
                [-85.214937, 9.892084],
                [-85.202922, 9.884643],
                [-85.198458, 9.864687],
                [-85.195367, 9.857922],
                [-85.175114, 9.853525],
                [-85.180603, 9.844392],
                [-85.186097, 9.843039],
                [-85.185754, 9.836273],
                [-85.187127, 9.826125],
                [-85.187471, 9.815976],
                [-85.19056, 9.806504],
                [-85.194336, 9.796354],
                [-85.190561, 9.78316],
                [-85.180262, 9.781468],
                [-85.192275, 9.772333],
                [-85.197769, 9.768949],
                [-85.1988, 9.760152],
                [-85.203606, 9.752709],
                [-85.207383, 9.745603],
                [-85.214592, 9.740527],
                [-85.218369, 9.743234],
                [-85.215967, 9.728684],
                [-85.230041, 9.729699]
              ]
            ]
        ]
      }
    }
  ]
};


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer {\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  padding: 1rem;\r\n  text-align: center;\r\n  z-index: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/main-dashboard/main-dashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/main-dashboard/main-dashboard.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tZGFzaGJvYXJkL21haW4tZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/main-dashboard/main-dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main-dashboard/main-dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: MainDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainDashboardComponent", function() { return MainDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainDashboardComponent = class MainDashboardComponent {
    constructor() {
        this.title = 'COVID19 - Costa Rica';
    }
    ngOnInit() {
    }
};
MainDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-dashboard/main-dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-dashboard.component.css */ "./src/app/main-dashboard/main-dashboard.component.css")).default]
    })
], MainDashboardComponent);



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map-container {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin-top: 50px;\r\n    z-index: 0;\r\n  }\r\n\r\n  .map-frame {\r\n    border: 2px solid black;\r\n    height: 100%;\r\n  }\r\n\r\n  #map {\r\n    position: relative;\r\n    height: 85%;\r\n  }\r\n\r\n  #generalStats {\r\n  position: absolute;\r\n  bottom: 25px;\r\n  left: 25px;\r\n}\r\n\r\n  #showMarkers {\r\n  position: absolute;\r\n  top:60px;\r\n  right:25px;\r\n}\r\n\r\n  .info {\r\n  padding: 6px 8px;\r\n  font:Arial, Helvetica, sans-serif;\r\n  background: white;\r\n  background: rgba(255,255,255,0.8);\r\n  box-shadow: 0 0 15px rgba(0,0,0,0.2);\r\n  border-radius: 5px;\r\n}\r\n\r\n  .info h4 {\r\n  margin: 0 0 5px;\r\n  color: #777;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7O0VBRUY7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7QUFDWjs7RUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtBQUNaOztFQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEI7O0VBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgfVxyXG5cclxuICAubWFwLWZyYW1lIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgI21hcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxuICB9XHJcblxyXG4jZ2VuZXJhbFN0YXRzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAyNXB4O1xyXG4gIGxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbiNzaG93TWFya2VycyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDo2MHB4O1xyXG4gIHJpZ2h0OjI1cHg7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBwYWRkaW5nOiA2cHggOHB4O1xyXG4gIGZvbnQ6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uaW5mbyBoNCB7XHJcbiAgbWFyZ2luOiAwIDAgNXB4O1xyXG4gIGNvbG9yOiAjNzc3O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_coronastatistics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/coronastatistics.service */ "./src/app/services/coronastatistics.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/data */ "./src/app/data/data.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_provincesData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/provincesData */ "./src/app/data/provincesData.js");






let MapComponent = class MapComponent {
    constructor(css) {
        this.css = css;
        this.base = _data_provincesData__WEBPACK_IMPORTED_MODULE_5__["provincesData"].features;
        this.markersArray = [];
    }
    ngOnInit() {
        this.initMainLayer();
        this.loadGeneralData();
    }
    initMainLayer() {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_4__["map"]("map", { center: [9.934739, -84.087502], zoom: 9 });
        leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"]("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw", {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1
        }).addTo(this.map);
    }
    showDistricts() {
        this.map.remove();
        this.initMainLayer();
        this.initMarkers();
    }
    showProvinces() {
        this.map.remove();
        this.initMainLayer();
        this.loadCantonesMap();
    }
    initCantonesMap(pD) {
        leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"](
        // tslint:disable-next-line: max-line-length
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1
        }).addTo(this.map);
        let data = '';
        var geojson = leaflet__WEBPACK_IMPORTED_MODULE_4__["geoJSON"](JSON.parse(JSON.stringify(_data_provincesData__WEBPACK_IMPORTED_MODULE_5__["provincesData"])), {
            onEachFeature: function (feature, layer) {
                layer.on("mouseover", function () {
                    this.setStyle({
                        color: 'red'
                    });
                });
                layer.on('mouseout', function (e) {
                    geojson.resetStyle(e.target);
                });
                layer.on("click", function () {
                    //layer.remove();
                    // this.setStyle({
                    //     color: 'green'
                    // });
                });
                let province = feature.properties.name === "San Jose" ? "sanJose" : String(feature.properties.name).toLocaleLowerCase();
                // Access dictionary of provinces and cases using province name
                data = `<div class="info">
        <h4> <b> ${feature.properties.name} </b> </h4>
          <p>Casos confirmados: ${pD["data"][0]["byLocation"][province]}</p>
        </div>`;
                layer.bindPopup(data);
            }
        }).addTo(this.map);
    }
    getProvincia(name) {
        for (let p in this.base) {
            const provinceName = this.base[p]["properties"]["name"];
            if (provinceName === name) {
                console.log("Nombre de Provincia:", this.base[p]["properties"]["name"]);
                console.log(this.base[p]);
                return this.base[p];
            }
        }
    }
    initMarkers() {
        _data_data__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(element => {
            const data = `<div class="card text-center" style="width: 18rem;" ><div class="card-body" >
       <h5 class="card-title"> ${element.name} </h5>
         <p class="card-text">Casos confirmados: ${element.cases} </p>
         </div>
       </div>`;
            const newMarker = leaflet__WEBPACK_IMPORTED_MODULE_4__["marker"](element.latlng).addTo(this.map).bindPopup(data);
        });
    }
    loadGeneralData() {
        this.css
            .loadCostaRicaData()
            .toPromise()
            .then(data => {
            console.log("GeneralData:", data);
            const date = new Date(data["data"]["lastChecked"]);
            this.lastChecked = date.toISOString().substring(0, 10);
            this.cases = data["data"]["covid19Stats"][0]["confirmed"];
            this.todayCases = data["todayCases"];
            this.totalRecovered = data["data"]["covid19Stats"][0]["recovered"];
            this.deaths = data["data"]["covid19Stats"][0]["deaths"];
            this.nDeaths = data["todayDeaths"];
            // this.stats = Object.keys(data).map(e => data[e]);
            // console.log('Data:' + this.stats);
        })
            .catch(error => console.log(error));
    }
    onProvinceChanged(value) {
        console.log(value);
        const provincia = this.getProvincia(value);
        leaflet__WEBPACK_IMPORTED_MODULE_4__["geoJSON"](JSON.parse(JSON.stringify(provincia)), {
            onEachFeature(feature, layer) {
                layer.on('mouseover', function () {
                });
                layer.on('mouseout', function () {
                    this.setStyle({
                        color: "blue"
                    });
                });
                layer.on('click', function () {
                    layer.remove();
                    // this.setStyle({
                    //     color: 'green'
                    // });
                });
            }
        }).addTo(this.map);
    }
    loadCantonesMap() {
        // this.css.load().subscribe(data => {
        //   // this.provinceData = data["data"][0]["byLocation"];
        //   // console.log(this.provinceData);
        //   // // for (const p in dataByLoc) {
        //   // //   this.setProvinceCases(p.toUpperCase(), dataByLoc[p])
        //   // // };
        //   return data["data"][0]["byLocation"];
        // });
        this.css.loadProvinceData().subscribe((data) => {
            this.provinceData = data;
            this.initCantonesMap(this.provinceData);
        });
    }
};
MapComponent.ctorParameters = () => [
    { type: _services_coronastatistics_service__WEBPACK_IMPORTED_MODULE_1__["CoronastatisticsService"] }
];
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-map",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")).default]
    })
], MapComponent);



/***/ }),

/***/ "./src/app/services/coronastatistics.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/coronastatistics.service.ts ***!
  \******************************************************/
/*! exports provided: CoronastatisticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoronastatisticsService", function() { return CoronastatisticsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let CoronastatisticsService = class CoronastatisticsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.URL_API = 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats';
        this.API_KEY = '';
        this.CR_API = 'https://coronaviruscr.com/api/reports';
        _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production ? this.API_KEY = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_tst_key : this.API_KEY = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_tst_key;
    }
    loadCostaRicaData() {
        const _params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('country', 'Costa Rica');
        const _headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('x-rapidapi-host', 'covid-19-coronavirus-statistics.p.rapidapi.com')
            .set('X-RapidAPI-Key', this.API_KEY);
        return this.httpClient.get(this.URL_API, { headers: _headers, params: _params });
    }
    loadProvinceData() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Content-Type', 'application/json');
        return this.httpClient.get(this.CR_API, { headers });
    }
};
CoronastatisticsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CoronastatisticsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CoronastatisticsService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    api_tst_key: '41e7fd92a1msh6d64dc92c4406f1p15bfcbjsn6732a42639f9',
    api_stg_key: '123queso'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Montes\Documents\Angular\covid19\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map