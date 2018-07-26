(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-light\">\r\n<router-outlet></router-outlet>\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-list/client-list.component */ "./src/app/client-list/client-list.component.ts");
/* harmony import */ var _client_info_client_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-info/client-info.component */ "./src/app/client-info/client-info.component.ts");
/* harmony import */ var _client_viewer_client_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-viewer/client-viewer.component */ "./src/app/client-viewer/client-viewer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _services_client_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/client.service.client */ "./src/app/services/client.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_3__["ClientListComponent"],
                _client_info_client_info_component__WEBPACK_IMPORTED_MODULE_4__["ClientInfoComponent"],
                _client_viewer_client_viewer_component__WEBPACK_IMPORTED_MODULE_5__["ClientViewerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["routing"]
            ],
            providers: [_services_client_service_client__WEBPACK_IMPORTED_MODULE_9__["ClientService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_viewer_client_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client-viewer/client-viewer.component */ "./src/app/client-viewer/client-viewer.component.ts");


var appRoutes = [
    { path: '', redirectTo: 'client', pathMatch: 'full' },
    { path: 'client', component: _client_viewer_client_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ClientViewerComponent"] },
    { path: 'client/:clientId', component: _client_viewer_client_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ClientViewerComponent"] },
    { path: '**', component: _client_viewer_client_viewer_component__WEBPACK_IMPORTED_MODULE_1__["ClientViewerComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/client-info/client-info.component.css":
/*!*******************************************************!*\
  !*** ./src/app/client-info/client-info.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client-info/client-info.component.html":
/*!********************************************************!*\
  !*** ./src/app/client-info/client-info.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"clientId !== undefined && client !== undefined\">\n  <div class=\" text-white text-center text-white shadow-lg p-3 rounded\" style=\"background-color: #212529\">\n    <h3 style=\"padding-left: 3%;\"><i class=\"fa fa-user\"> </i> Personal Information</h3>\n  </div>\n  <div class=\"bg-white shadow-lg p-3 mb-5 rounded\">\n    <div class=\"row\" style=\"padding: 0px 20px\">\n      <div class=\"col-lg-5 text-center rounded\" style=\"padding: 30px 5px 50px 5px; background-color: #191e23\">\n        <img src=\"{{client.general.avatar}}\" width=\"100%\" class=\"rounded-circle\"\n             style=\"border: 5px solid #2b3137\">\n        <br/>\n      </div>\n      <div class=\"col-lg-7\">\n        <br/>\n        <h4><strong>{{client.general.firstName}} {{client.general.lastName}}</strong></h4>\n        <h6 class=\"text-black-50\"><em>{{client.job.title}} <br/> at {{client.job.company}}</em></h6>\n        <ul class=\"list-group list-group-flush\">\n          <div class=\"list-group-item\">\n            <div class=\"row\">\n              <div class=\"col-6\"> <h6 class=\"text-muted\">Email: </h6> </div>\n              <div class=\"col-6\"> <h6><strong>{{client.contact.email.split('@')[0]}}</strong></h6><h6><strong>@{{client.contact.email.split('@')[1]}}</strong></h6> </div>\n            </div>\n          </div>\n          <div class=\"list-group-item\">\n            <div class=\"row\">\n              <div class=\"col-6\"> <h6 class=\"text-muted\">Phone: </h6> </div>\n              <div class=\"col-6\"> <h6><strong>{{client.contact.phone}}</strong></h6> </div>\n            </div>\n          </div>\n          <div class=\"list-group-item\">\n            <div class=\"row\">\n              <div class=\"col-6\"> <h6 class=\"text-muted\">Address: </h6> </div>\n              <div class=\"col-6\"> <h6><strong>{{client.address.street}}, {{client.address.city}}, {{client.address.country}}, {{client.address.zipCode}}</strong></h6> </div>\n            </div>\n          </div>\n        </ul>\n      </div>\n    </div>\n    <br/>\n  </div>\n</div>\n<div *ngIf=\"clientId === undefined\">\n  <h3 class=\"text-muted text-uppercase\"> choose client to see the info-panel </h3>\n</div>\n"

/***/ }),

/***/ "./src/app/client-info/client-info.component.ts":
/*!******************************************************!*\
  !*** ./src/app/client-info/client-info.component.ts ***!
  \******************************************************/
/*! exports provided: ClientInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientInfoComponent", function() { return ClientInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_client_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/client.service.client */ "./src/app/services/client.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientInfoComponent = /** @class */ (function () {
    function ClientInfoComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.route.params.subscribe(function (params) { _this.setParams(params); });
    }
    ClientInfoComponent.prototype.setParams = function (params) {
        this.clientId = params['clientId'];
        if (this.clientId !== undefined) {
            this.getClientById(this.clientId);
        }
    };
    ClientInfoComponent.prototype.getClientById = function (id) {
        var _this = this;
        this.service.getClientById(id)
            .then(function (res) { _this.client = res[0]; });
    };
    ClientInfoComponent.prototype.ngOnInit = function () {
    };
    ClientInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-info',
            template: __webpack_require__(/*! ./client-info.component.html */ "./src/app/client-info/client-info.component.html"),
            styles: [__webpack_require__(/*! ./client-info.component.css */ "./src/app/client-info/client-info.component.css")]
        }),
        __metadata("design:paramtypes", [_services_client_service_client__WEBPACK_IMPORTED_MODULE_2__["ClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ClientInfoComponent);
    return ClientInfoComponent;
}());



/***/ }),

/***/ "./src/app/client-list/client-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/client-list/client-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client-list/client-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/client-list/client-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"input-group input-group-lg\">\n    <input type=\"text\" [(ngModel)]=\"title\" (keyup)=\"search()\" class=\"form-control border border-right-0\"\n           placeholder=\"Search\">\n    <span class=\"input-group-append\">\n                <button class=\"btn btn-outline-dark bg-white border border-left-0\"\n                        type=\"button\" title=\"Search\" disabled>\n                    <i class=\"fa fa-search\"></i>\n                </button>\n    </span>\n  </div>\n  <ul *ngFor=\"let client of clients\" class=\"list-group\">\n    <li [ngClass]=\"{'btn-dark active': client.general.id == clientId}\" class=\" btn list-group-item list-group-item-action\" routerLink=\"/client/{{client.general.id}}\">\n      <div class=\"row\">\n        <div class=\"col-lg-3 col-md-12\">\n          <img class=\"rounded\" src=\"{{client.general.avatar}}\" width=\"100px\">\n        </div>\n        <div class=\"col-lg-9 col-md-12\">\n          <h3>{{client.general.firstName}} {{client.general.lastName}}</h3>\n          <h6 class=\"text-muted\"> {{client.job.title}}</h6>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/client-list/client-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/client-list/client-list.component.ts ***!
  \******************************************************/
/*! exports provided: ClientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientListComponent", function() { return ClientListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/client.service.client */ "./src/app/services/client.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientListComponent = /** @class */ (function () {
    function ClientListComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.route.params.subscribe(function (params) { _this.clientId = params['clientId']; });
    }
    ClientListComponent.prototype.getAllClients = function () {
        var _this = this;
        this.service.getAllClients()
            .then(function (result) {
            _this.allClients = result;
            _this.clients = result;
        });
    };
    ClientListComponent.prototype.search = function () {
        var _this = this;
        console.log(this.title);
        if (this.title !== '') {
            this.service.searchClients(this.title)
                .then(function (res) { _this.clients = res; });
        }
        else {
            this.clients = this.allClients;
        }
    };
    ClientListComponent.prototype.ngOnInit = function () {
        this.title = '';
        this.getAllClients();
    };
    ClientListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-list',
            template: __webpack_require__(/*! ./client-list.component.html */ "./src/app/client-list/client-list.component.html"),
            styles: [__webpack_require__(/*! ./client-list.component.css */ "./src/app/client-list/client-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_client_service_client__WEBPACK_IMPORTED_MODULE_1__["ClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ClientListComponent);
    return ClientListComponent;
}());



/***/ }),

/***/ "./src/app/client-viewer/client-viewer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/client-viewer/client-viewer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client-viewer/client-viewer.component.html":
/*!************************************************************!*\
  !*** ./src/app/client-viewer/client-viewer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<div class=\"container\">\n  <h2><strong> List of All Clients </strong></h2>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <app-client-list></app-client-list>\n      <br/>\n    </div>\n    <div class=\"col-md-6\">\n      <app-client-info></app-client-info>\n    </div>\n  </div>\n\n</div>\n<br/>\n<br/>\n"

/***/ }),

/***/ "./src/app/client-viewer/client-viewer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/client-viewer/client-viewer.component.ts ***!
  \**********************************************************/
/*! exports provided: ClientViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientViewerComponent", function() { return ClientViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientViewerComponent = /** @class */ (function () {
    function ClientViewerComponent() {
    }
    ClientViewerComponent.prototype.ngOnInit = function () {
    };
    ClientViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-viewer',
            template: __webpack_require__(/*! ./client-viewer.component.html */ "./src/app/client-viewer/client-viewer.component.html"),
            styles: [__webpack_require__(/*! ./client-viewer.component.css */ "./src/app/client-viewer/client-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientViewerComponent);
    return ClientViewerComponent;
}());



/***/ }),

/***/ "./src/app/services/client.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/client.service.client.ts ***!
  \***************************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
var HOST = 'https://tk-clients-angular.herokuapp.com/';
// const HOST = 'http://localhost:4200/';
var CLIENT_URL = HOST + 'assets/clients.json';
var ClientService = /** @class */ (function () {
    function ClientService() {
    }
    ClientService.prototype.getAllClients = function () {
        return fetch(CLIENT_URL)
            .then(function (response) { return response.json(); });
    };
    ClientService.prototype.getClientById = function (id) {
        return fetch(CLIENT_URL)
            .then(function (response) { return response.json(); })
            .then(function (response2) { return response2.filter(function (client) { return client.general.id === id; }); });
    };
    ClientService.prototype.searchClients = function (title) {
        return fetch(CLIENT_URL)
            .then(function (response) { return response.json(); })
            .then(function (response2) { return response2.filter(function (client) {
            return client.general.firstName.toLowerCase().includes(title.toLowerCase()) ||
                client.general.lastName.toLowerCase().includes(title.toLowerCase().toLowerCase()) ||
                client.job.company.toLowerCase().includes(title.toLowerCase()) ||
                client.job.title.toLowerCase().includes(title.toLowerCase()) ||
                client.contact.email.toLowerCase().includes(title.toLowerCase()) ||
                client.contact.phone.toLowerCase().includes(title.toLowerCase()) ||
                client.address.street.toLowerCase().includes(title.toLowerCase()) ||
                client.address.city.toLowerCase().includes(title.toLowerCase()) ||
                client.address.zipCode.toLowerCase().includes(title.toLowerCase()) ||
                client.address.country.toLowerCase().includes(title.toLowerCase());
        }); });
    };
    return ClientService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tim\Documents\WebDev\tk-clients-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map