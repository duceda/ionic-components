(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modal-modal-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-info/modal-info.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-info/modal-info.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>modal-info</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal/modal.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal/modal.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo='Modal'></app-header>\n\n<ion-content padding>\n\n<ion-button (click)=\"abrirModal()\" expand=\"full\">\n  Abrir modal\n</ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/modal-info/modal-info-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/modal-info/modal-info-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ModalInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalInfoPageRoutingModule", function() { return ModalInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalInfoPageRoutingModule = class ModalInfoPageRoutingModule {
};
ModalInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [],
        exports: [],
    })
], ModalInfoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/modal-info/modal-info.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/modal-info/modal-info.module.ts ***!
  \*******************************************************/
/*! exports provided: ModalInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalInfoPageModule", function() { return ModalInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-info-routing.module */ "./src/app/pages/modal-info/modal-info-routing.module.ts");
/* harmony import */ var _modal_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-info.page */ "./src/app/pages/modal-info/modal-info.page.ts");







let ModalInfoPageModule = class ModalInfoPageModule {
};
ModalInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalInfoPageRoutingModule"]
        ],
        declarations: [_modal_info_page__WEBPACK_IMPORTED_MODULE_6__["ModalInfoPage"]]
    })
], ModalInfoPageModule);



/***/ }),

/***/ "./src/app/pages/modal-info/modal-info.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/modal-info/modal-info.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZGFsLWluZm8vbW9kYWwtaW5mby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/modal-info/modal-info.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/modal-info/modal-info.page.ts ***!
  \*****************************************************/
/*! exports provided: ModalInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalInfoPage", function() { return ModalInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModalInfoPage = class ModalInfoPage {
    constructor() { }
    ngOnInit() {
    }
};
ModalInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-info/modal-info.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-info.page.scss */ "./src/app/pages/modal-info/modal-info.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ModalInfoPage);



/***/ }),

/***/ "./src/app/pages/modal/modal.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/modal/modal.module.ts ***!
  \*********************************************/
/*! exports provided: ModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal.page */ "./src/app/pages/modal/modal.page.ts");
/* harmony import */ var _modal_info_modal_info_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal-info/modal-info.page */ "./src/app/pages/modal-info/modal-info.page.ts");
/* harmony import */ var _modal_info_modal_info_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal-info/modal-info.module */ "./src/app/pages/modal-info/modal-info.module.ts");









let ModalPageModule = class ModalPageModule {
};
ModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        entryComponents: [
            _modal_info_modal_info_page__WEBPACK_IMPORTED_MODULE_7__["ModalInfoPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
            _modal_info_modal_info_module__WEBPACK_IMPORTED_MODULE_8__["ModalInfoPageModule"]
        ],
        declarations: [_modal_page__WEBPACK_IMPORTED_MODULE_6__["ModalPage"]]
    })
], ModalPageModule);



/***/ }),

/***/ "./src/app/pages/modal/modal.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/modal/modal.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZGFsL21vZGFsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/modal/modal.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/modal/modal.page.ts ***!
  \*******************************************/
/*! exports provided: ModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPage", function() { return ModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _pages_modal_info_modal_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/modal-info/modal-info.page */ "./src/app/pages/modal-info/modal-info.page.ts");




let ModalPage = class ModalPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    // ModalInfoPage - Hay que añadirlo dentro de los entrycomponents porque el modal se crea en tiempo 
    // de ejecución y angular lo compila cuando es necesario, entonces hay 
    // que añadirlo como entrycomponent en el módulo
    abrirModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_modal_info_modal_info_page__WEBPACK_IMPORTED_MODULE_3__["ModalInfoPage"],
                componentProps: {
                    nombre: 'Daniel',
                    pais: 'España'
                }
            });
            yield modal.present();
        });
    }
};
ModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal/modal.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.page.scss */ "./src/app/pages/modal/modal.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], ModalPage);



/***/ })

}]);
//# sourceMappingURL=pages-modal-modal-module-es2015.js.map