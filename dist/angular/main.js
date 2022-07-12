"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _component_one_page_sroll_one_page_sroll_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/one-page-sroll/one-page-sroll.component */ 4189);
/* harmony import */ var _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/profile/profile.component */ 365);
/* harmony import */ var _component_photo_container_photo_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/photo-container/photo-container.component */ 2865);
/* harmony import */ var _component_test_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/test/test.component */ 9796);
/* harmony import */ var _component_photo_lens_photo_lens_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/photo-lens/photo-lens.component */ 8548);
/* harmony import */ var _component_servers_servers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/servers/servers.component */ 1336);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);










const routes = [
    {
        path: 'servers',
        component: _app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent,
    },
    {
        path: 'test',
        component: _component_test_test_component__WEBPACK_IMPORTED_MODULE_3__.TestComponent,
        children: [
            {
                path: 'servers',
                component: _component_servers_servers_component__WEBPACK_IMPORTED_MODULE_5__.ServersComponent,
            },
            {
                path: 'photoLens',
                component: _component_photo_lens_photo_lens_component__WEBPACK_IMPORTED_MODULE_4__.PhotoLensComponent,
            },
            {
                path: 'photoContainer',
                component: _component_photo_container_photo_container_component__WEBPACK_IMPORTED_MODULE_2__.PhotoContainerComponent,
            },
            {
                path: 'profile',
                component: _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent,
            },
            {
                path: 'onePageScroll',
                component: _component_one_page_sroll_one_page_sroll_component__WEBPACK_IMPORTED_MODULE_0__.OnePageSrollComponent,
            },
        ],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-page-scroll-core */ 1644);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _aotearoan_angular_fullpage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @aotearoan/angular-fullpage */ 840);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _component_server_server_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/server/server.component */ 4848);
/* harmony import */ var _component_servers_servers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/servers/servers.component */ 1336);
/* harmony import */ var _component_photo_lens_photo_lens_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/photo-lens/photo-lens.component */ 8548);
/* harmony import */ var _component_one_page_sroll_one_page_sroll_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/one-page-sroll/one-page-sroll.component */ 4189);
/* harmony import */ var _component_test_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/test/test.component */ 9796);
/* harmony import */ var _component_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/side-bar/side-bar.component */ 9692);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ 5754);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ 3351);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ 5812);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _component_photo_container_photo_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/photo-container/photo-container.component */ 2865);
/* harmony import */ var _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/profile/profile.component */ 365);
/* harmony import */ var _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fullpage/angular-fullpage */ 9780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule,
            ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_17__.NgxPageScrollCoreModule,
            _aotearoan_angular_fullpage__WEBPACK_IMPORTED_MODULE_18__.FullpageModule,
            _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_19__.AngularFullpageModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _component_server_server_component__WEBPACK_IMPORTED_MODULE_2__.ServerComponent,
        _component_servers_servers_component__WEBPACK_IMPORTED_MODULE_3__.ServersComponent,
        _component_photo_lens_photo_lens_component__WEBPACK_IMPORTED_MODULE_4__.PhotoLensComponent,
        _component_test_test_component__WEBPACK_IMPORTED_MODULE_6__.TestComponent,
        _component_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_7__.SideBarComponent,
        _component_photo_container_photo_container_component__WEBPACK_IMPORTED_MODULE_8__.PhotoContainerComponent,
        _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__.ProfileComponent,
        _component_one_page_sroll_one_page_sroll_component__WEBPACK_IMPORTED_MODULE_5__.OnePageSrollComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__.MatListModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule,
        ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_17__.NgxPageScrollCoreModule,
        _aotearoan_angular_fullpage__WEBPACK_IMPORTED_MODULE_18__.FullpageModule,
        _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_19__.AngularFullpageModule] }); })();


/***/ }),

/***/ 4189:
/*!**********************************************************************!*\
  !*** ./src/app/component/one-page-sroll/one-page-sroll.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnePageSrollComponent": () => (/* binding */ OnePageSrollComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullpage/angular-fullpage */ 9780);


class OnePageSrollComponent {
    constructor() { }
    ngOnInit() { }
}
OnePageSrollComponent.ɵfac = function OnePageSrollComponent_Factory(t) { return new (t || OnePageSrollComponent)(); };
OnePageSrollComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OnePageSrollComponent, selectors: [["app-one-page-sroll"]], decls: 52, vars: 0, consts: [[1, "header-top", "clearfix"], [1, "l-left"], ["href", "#firstSection"], ["href", "#", 1, "l-right", "toggle-menu"], [1, "hide"], ["id", "menu"], ["data-menuanchor", "firstSection"], ["href", "#firstSection", "title", "First Section"], ["data-menuanchor", "secondSection"], ["href", "#secondSection", "title", "Second Section"], ["data-menuanchor", "thirdSection"], ["href", "#thirdSection", "title", "Second Section"], ["data-menuanchor", "fourthSection"], ["href", "#fourthSection", "title", "Fourth Section"], ["data-menuanchor", "fifthSection"], ["href", "#fifthSection", "title", "First Slide"], ["id", "fullpage"], [1, "vertical-scrolling"]], template: function OnePageSrollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header")(1, "div", 0)(2, "h1", 1)(3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "LOGO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i")(7, "i")(8, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav", 4)(10, "ul", 5)(11, "li", 6)(12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "First Section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8)(15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Second Section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 10)(18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Third Section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 12)(21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Fourth Section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 14)(24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Fifth Section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16)(27, "section", 17)(28, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "#1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "This is the first section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 17)(33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "#2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "This is the second section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "section", 17)(38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "#3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "This is the third section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "section", 17)(43, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "#4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "This is the fourth section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "section", 17)(48, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "#5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "This is the fourth section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, directives: [_fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_1__["ɵb"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Alegreya+Sans:300,400,700);\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-family: \"Alegreya Sans\", Arial, sans-serif;\n  text-transform: uppercase;\n}\nbody[_ngcontent-%COMP%] {\n  color: black;\n  letter-spacing: 0.18em;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\nul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.clearfix[_ngcontent-%COMP%]:before, .clearfix[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n}\n.clearfix[_ngcontent-%COMP%]:after {\n  clear: both;\n}\n.l-left[_ngcontent-%COMP%] {\n  float: left;\n}\n.l-right[_ngcontent-%COMP%] {\n  float: right;\n}\n.end[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  font-size: 3em;\n  font-weight: bold;\n  opacity: 0;\n  transform: translateY(300px);\n  transition: opacity, transform 1s;\n  transition-delay: 1s;\n}\n.header-top[_ngcontent-%COMP%] {\n  background: rgba(0, 47, 77, 0.3);\n  height: 70px;\n  padding: 0 10px;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 12;\n  box-sizing: border-box;\n}\nh1[_ngcontent-%COMP%] {\n  line-height: 70px;\n  height: 70px;\n}\nh1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0 10px;\n}\n.toggle-menu[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  display: inline-block;\n  position: relative;\n  top: 10px;\n}\n.toggle-menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  height: 2px;\n  background: white;\n  width: 30px;\n  left: 10px;\n  transition: all 0.3s;\n}\n.toggle-menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(1) {\n  top: 16px;\n}\n.toggle-menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) {\n  top: 24px;\n}\n.toggle-menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3) {\n  top: 32px;\n}\n.open-menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(1) {\n  top: 25px;\n  transform: rotateZ(45deg);\n}\n.open-menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) {\n  background: transparent;\n}\n.open-menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3) {\n  top: 25px;\n  transform: rotateZ(-45deg);\n}\nnav[_ngcontent-%COMP%] {\n  height: 0;\n  opacity: 0;\n  box-sizing: border-box;\n  background: rgba(0, 47, 77, 0.25);\n  position: fixed;\n  top: 70px;\n  width: 100%;\n  transition: all 1s;\n}\n.open-menu[_ngcontent-%COMP%]    ~ nav[_ngcontent-%COMP%] {\n  opacity: 1;\n  padding: 80px 0;\n  z-index: 15;\n  height: calc(90vh - 70px);\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  display: flex;\n}\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  flex: 1;\n}\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 2em;\n  display: block;\n  padding: 30px;\n  text-align: center;\n  transition: background 0.3s;\n}\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #ff4b4b;\n  margin-left: 20px;\n}\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #212121;\n}\nsection[_ngcontent-%COMP%] {\n  text-align: center;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 4em;\n  margin-bottom: 20px;\n}\nh3[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 2.8em;\n}\n#fp-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .fp-slidesNav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: white;\n  width: 8px;\n  height: 8px;\n  margin: -4px 0 0 -4px;\n}\n#fp-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .fp-slidesNav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], #fp-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .fp-slidesNav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  margin: -8px 0 0 -8px;\n  background: transparent;\n  box-sizing: border-box;\n  border: 2px solid #212121;\n}\n@media screen and (max-width: 767px) {\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-top: 1px;\n  }\n\n  nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n\n  .scroll-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 400px) {\n  html[_ngcontent-%COMP%] {\n    font-size: 50%;\n  }\n\n  .open-menu[_ngcontent-%COMP%]    ~ nav[_ngcontent-%COMP%] {\n    padding: 20px 0;\n  }\n\n  nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 3px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uZS1wYWdlLXNyb2xsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNRLDhFQUFBO0FBQ1I7RUFDQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLCtDQUFBO0VBQ0EseUJBQUE7QUFBRDtBQUdBO0VBQ0MsWUFBQTtFQUNBLHNCQUFBO0FBQUQ7QUFFQTtFQUNDLHFCQUFBO0VBQ0EsWUFBQTtBQUNEO0FBQ0E7RUFDQyxxQkFBQTtBQUVEO0FBQUE7O0VBRUUsV0FBQTtFQUNBLGNBQUE7QUFHRjtBQURBO0VBQ0UsV0FBQTtBQUlGO0FBRkE7RUFDQyxXQUFBO0FBS0Q7QUFIQTtFQUNDLFlBQUE7QUFNRDtBQUpBO0VBQ0MsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBRVEsNEJBQUE7RUFFUixpQ0FBQTtFQUVBLG9CQUFBO0FBT0Q7QUFMQTtFQUNDLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFRRDtBQU5BO0VBQ0MsaUJBQUE7RUFDQSxZQUFBO0FBU0Q7QUFQQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0FBVUQ7QUFSQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFXRDtBQVRBO0VBQ0Msa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQVlEO0FBVkE7RUFDQyxTQUFBO0FBYUQ7QUFYQTtFQUNDLFNBQUE7QUFjRDtBQVpBO0VBQ0MsU0FBQTtBQWVEO0FBYkE7RUFDQyxTQUFBO0VBRVEseUJBQUE7QUFnQlQ7QUFkQTtFQUNDLHVCQUFBO0FBaUJEO0FBZkE7RUFDQyxTQUFBO0VBRVEsMEJBQUE7QUFrQlQ7QUFoQkE7RUFDRSxTQUFBO0VBQ0QsVUFBQTtFQUNDLHNCQUFBO0VBQ0QsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQyxrQkFBQTtBQW1CRjtBQWpCQTtFQUNDLFVBQUE7RUFDQyxlQUFBO0VBQ0QsV0FBQTtFQUNBLHlCQUFBO0FBb0JEO0FBbEJBO0VBQ0MsZUFBQTtFQUNBLGFBQUE7QUFxQkQ7QUFuQkE7RUFDQyxPQUFBO0FBc0JEO0FBcEJBO0VBQ0MsY0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQXVCRDtBQXJCQTtFQUNDLG1CQUFBO0VBQ0EsaUJBQUE7QUF3QkQ7QUF0QkE7RUFDQyxtQkFBQTtBQXlCRDtBQXZCQTtFQUNDLGtCQUFBO0FBMEJEO0FBeEJBO0VBQ0MsY0FBQTtFQUNBLG1CQUFBO0FBMkJEO0FBekJBO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtBQTRCRDtBQTFCQTs7RUFFQyxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUE2QkQ7QUEzQkE7Ozs7RUFJQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBOEJEO0FBM0JBO0VBQ0M7SUFDQyxzQkFBQTtFQThCQTs7RUEzQkQ7SUFDQyxlQUFBO0VBOEJBOztFQTNCQTtJQUNFLGdCQUFBO0VBOEJGOztFQTNCQTtJQUNFLGFBQUE7RUE4QkY7QUFDRjtBQTNCQTtFQUNFO0lBQ0UsY0FBQTtFQTZCRjs7RUExQkE7SUFDQSxlQUFBO0VBNkJBOztFQTFCRDtJQUNDLFlBQUE7RUE2QkE7QUFDRiIsImZpbGUiOiJvbmUtcGFnZS1zcm9sbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsZWdyZXlhK1NhbnM6MzAwLDQwMCw3MDApO1xuKiB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Zm9udC1mYW1pbHk6ICdBbGVncmV5YSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmJvZHkge1xuXHRjb2xvcjogYmxhY2s7XG5cdGxldHRlci1zcGFjaW5nOiAuMThlbTtcbn1cbmEge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cbnVsLCBsaSB7XG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5jbGVhcmZpeDpiZWZvcmUsXG4uY2xlYXJmaXg6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbi5jbGVhcmZpeDphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuLmwtbGVmdCB7XG5cdGZsb2F0OiBsZWZ0O1xufVxuLmwtcmlnaHQge1xuXHRmbG9hdDogcmlnaHQ7XG59XG4uZW5kIHtcblx0bWFyZ2luLXRvcDogMzBweDtcblx0Zm9udC1zaXplOiAzZW07XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRvcGFjaXR5OiAwO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMDBweCk7XG5cdCAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwMHB4KTtcblx0dHJhbnNpdGlvbjogb3BhY2l0eSwgLXdlYmtpdC10cmFuc2Zvcm0gMXM7XG5cdHRyYW5zaXRpb246IG9wYWNpdHksIHRyYW5zZm9ybSAxcztcblx0dHJhbnNpdGlvbjogb3BhY2l0eSwgdHJhbnNmb3JtIDFzLCAtd2Via2l0LXRyYW5zZm9ybSAxcztcblx0dHJhbnNpdGlvbi1kZWxheTogMXM7XG59XG4uaGVhZGVyLXRvcCB7XG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgNDcsIDc3LCAuMyk7XG5cdGhlaWdodDogNzBweDtcblx0cGFkZGluZzogMCAxMHB4O1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHRvcDogMDtcblx0d2lkdGg6IDEwMCU7XG5cdHotaW5kZXg6IDEyO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaDEge1xuXHRsaW5lLWhlaWdodDogNzBweDtcblx0aGVpZ2h0OiA3MHB4O1xufVxuaDEgYSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRwYWRkaW5nOiAwIDEwcHg7XG59XG4udG9nZ2xlLW1lbnUge1xuXHR3aWR0aDogNTBweDtcblx0aGVpZ2h0OiA1MHB4O1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dG9wOiAxMHB4O1xufVxuLnRvZ2dsZS1tZW51IGkge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRoZWlnaHQ6IDJweDtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdHdpZHRoOiAzMHB4O1xuXHRsZWZ0OiAxMHB4O1xuXHR0cmFuc2l0aW9uOiBhbGwgLjNzO1xufVxuLnRvZ2dsZS1tZW51IGk6bnRoLWNoaWxkKDEpIHtcblx0dG9wOiAxNnB4O1xufVxuLnRvZ2dsZS1tZW51IGk6bnRoLWNoaWxkKDIpIHtcblx0dG9wOiAyNHB4O1xufVxuLnRvZ2dsZS1tZW51IGk6bnRoLWNoaWxkKDMpIHtcblx0dG9wOiAzMnB4O1xufVxuLm9wZW4tbWVudSBpOm50aC1jaGlsZCgxKSB7XG5cdHRvcDogMjVweDtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xuXHQgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWig0NWRlZyk7XG59XG4ub3Blbi1tZW51IGk6bnRoLWNoaWxkKDIpIHtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ub3Blbi1tZW51IGk6bnRoLWNoaWxkKDMpIHtcblx0dG9wOiAyNXB4O1xuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigtNDVkZWcpO1xuXHQgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigtNDVkZWcpO1xufVxubmF2IHtcbiBcdGhlaWdodDogMDtcblx0b3BhY2l0eTogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblx0YmFja2dyb3VuZDogcmdiYSgwLCA0NywgNzcsIC4yNSk7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0dG9wOiA3MHB4O1xuXHR3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xufVxuLm9wZW4tbWVudSB+IG5hdiB7XG5cdG9wYWNpdHk6IDE7XG4gXHRwYWRkaW5nOiA4MHB4IDA7XG5cdHotaW5kZXg6IDE1O1xuXHRoZWlnaHQ6IGNhbGMoOTB2aCAtIDcwcHgpO1xufVxubmF2IHVsIHtcblx0cGFkZGluZzogMCAxMHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xufVxubmF2IGxpIHtcblx0ZmxleDogMTtcbn1cbm5hdiBsaSBhIHtcblx0Zm9udC1zaXplOiAyZW07XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRwYWRkaW5nOiAzMHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzO1xufVxubmF2IGxpIGEge1xuXHRiYWNrZ3JvdW5kOiAjZmY0YjRiO1xuXHRtYXJnaW4tbGVmdDogMjBweDtcbn1cbm5hdiBsaSBhOmhvdmVyIHtcblx0YmFja2dyb3VuZDogIzIxMjEyMTtcbn1cbnNlY3Rpb24ge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5oMiB7XG5cdGZvbnQtc2l6ZTogNGVtO1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuaDMge1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRmb250LXNpemU6IDIuOGVtO1xufVxuI2ZwLW5hdiB1bCBsaSBhIHNwYW4sXG4uZnAtc2xpZGVzTmF2IHVsIGxpIGEgc3BhbiB7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHR3aWR0aDogOHB4O1xuXHRoZWlnaHQ6IDhweDtcblx0bWFyZ2luOiAtNHB4IDAgMCAtNHB4O1xufVxuI2ZwLW5hdiB1bCBsaSBhLmFjdGl2ZSBzcGFuLFxuLmZwLXNsaWRlc05hdiB1bCBsaSBhLmFjdGl2ZSBzcGFuLFxuI2ZwLW5hdiB1bCBsaTpob3ZlciBhLmFjdGl2ZSBzcGFuLFxuLmZwLXNsaWRlc05hdiB1bCBsaTpob3ZlciBhLmFjdGl2ZSBzcGFuIHtcblx0d2lkdGg6IDE2cHg7XG5cdGhlaWdodDogMTZweDtcblx0bWFyZ2luOiAtOHB4IDAgMCAtOHB4O1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0Ym9yZGVyOiAycHggc29saWQgIzIxMjEyMTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblx0bmF2IHVsIHtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHR9XG5cblx0bmF2IGxpIHtcblx0XHRtYXJnaW4tdG9wOiAxcHg7XG5cdH1cblxuICBuYXYgbGkgYSB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgfVxuXG4gIC5zY3JvbGwtaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICBodG1sIHtcbiAgICBmb250LXNpemU6IDUwJTtcbiAgfVxuXG4gIC5vcGVuLW1lbnUgfiBuYXYge1xuXHRcdHBhZGRpbmc6IDIwcHggMDtcblx0fVxuXG5cdG5hdiBsaSBhIHtcblx0XHRwYWRkaW5nOiAzcHg7XG5cdH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2865:
/*!************************************************************************!*\
  !*** ./src/app/component/photo-container/photo-container.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoContainerComponent": () => (/* binding */ PhotoContainerComponent)
/* harmony export */ });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ 9822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class PhotoContainerComponent {
    constructor() {
        this.backgroundcontainer = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Container();
        this.widthForFrame = 250;
        this.heightForFrame = 300;
        this.indexForOnePageScrolling = 0;
        this.pagesForOnePageScrolling = [];
    }
    ngOnInit() {
        this.loadImagesForBackgroundContainer();
        this.mainContainerInit();
        this.setupWindow();
        this.setupMask();
        this.setupContentForMask();
        this.tickerForContent();
    }
    ngOnChanges() { }
    ngAfterViewInit() {
        // this.video();
    }
    wheelScroll($event) {
        // $event.deltaY > 0: scroll down
        if ($event.deltaY > 0) {
            if (this.indexForOnePageScrolling <
                this.pagesForOnePageScrolling.length - 1) {
                this.indexForOnePageScrolling++;
            }
        }
        else {
            if (this.indexForOnePageScrolling > 0) {
                this.indexForOnePageScrolling--;
            }
        }
        const rate = window.innerHeight / 901;
        this.pagesForOnePageScrolling[this.indexForOnePageScrolling].scale.set(rate);
        this.backgroundcontainer.addChild(this.pagesForOnePageScrolling[this.indexForOnePageScrolling]);
    }
    mainContainerInit() {
        this.containerForPIXI = document.getElementById('containerForPIXI');
        if (this.containerForPIXI) {
            this.app = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Application({
                width: this.containerForPIXI.getBoundingClientRect().width,
                height: window.innerHeight,
            });
            this.containerForPIXI.appendChild(this.app.view);
            this.backgroundcontainer.addChild(this.pagesForOnePageScrolling[this.indexForOnePageScrolling]);
            this.app.stage.addChild(this.backgroundcontainer);
        }
    }
    loadImagesForBackgroundContainer() {
        const b1 = pixi_js__WEBPACK_IMPORTED_MODULE_0__.Sprite.from('../../../assets/1.jpeg');
        this.pagesForOnePageScrolling.push(b1);
        const b2 = pixi_js__WEBPACK_IMPORTED_MODULE_0__.Sprite.from('../../../assets/2.jpeg');
        this.pagesForOnePageScrolling.push(b2);
    }
    video() {
        // const containerForProfile = new PIXI.Container();
        const profileFrame = pixi_js__WEBPACK_IMPORTED_MODULE_0__.Sprite.from('../../../assets/profile.mp4');
        profileFrame.scale.set(0.1);
        profileFrame.position.set(10, 10);
        this.frame.addChild(profileFrame);
    }
    setupWindow() {
        // Create window frame
        this.frame = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Graphics();
        // this.frame.beginFill(0x666666);
        this.frame.lineStyle({ color: 0xffffff, width: 4, alignment: 0 });
        this.frame.drawRect(0, 0, this.widthForFrame, this.heightForFrame);
        this.frame.position.set(100, 60);
        this.app.stage.addChild(this.frame);
    }
    setupMask() {
        // Create a graphics object to define our mask
        this.mask = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Graphics();
        // Add the rectangular area to show
        this.mask.beginFill(0x000000);
        this.mask.drawRect(0, 0, this.widthForFrame - 8, this.heightForFrame - 20);
        this.mask.endFill();
    }
    setupContentForMask() {
        // Add container that will hold our masked content
        const maskContainer = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Container();
        // Set the mask to use our graphics object from above
        maskContainer.mask = this.mask;
        maskContainer.filters = [new pixi_js__WEBPACK_IMPORTED_MODULE_0__.filters.NoiseFilter(0.5)];
        // Add the mask as a child, so that the mask is positioned relative to its parent
        maskContainer.addChild(this.mask);
        // Offset by the window's frame width
        maskContainer.position.set(4, 8);
        // And add the container to the window!
        this.frame.addChild(maskContainer);
        // Create contents for the masked container
        this.text = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Text('Do not go gentle into that good night,\n' +
            'Old age should burn and rave at close of day;\n' +
            'Rage, rage against the dying of the light.', {
            fontSize: 24,
            fill: 0xffffff,
            wordWrap: true,
            wordWrapWidth: this.widthForFrame - 8,
        });
        this.text.x = 10;
        maskContainer.addChild(this.text);
    }
    tickerForContent() {
        // Add a ticker callback to scroll the text up and down
        let elapsed = 0.0;
        this.app.ticker.add((delta) => {
            elapsed += delta;
            this.text.y = 0;
            this.text.y += Math.cos(elapsed / 80.0) * 30.0;
        });
    }
}
PhotoContainerComponent.ɵfac = function PhotoContainerComponent_Factory(t) { return new (t || PhotoContainerComponent)(); };
PhotoContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PhotoContainerComponent, selectors: [["app-photo-container"]], hostBindings: function PhotoContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("wheel", function PhotoContainerComponent_wheel_HostBindingHandler($event) { return ctx.wheelScroll($event); });
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 1, consts: [["id", "containerForPIXI", 1, "containerForPIXI"], [1, "debug"]], template: function PhotoContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("index:", ctx.indexForOnePageScrolling, "");
    } }, styles: [".containerForPIXI[_ngcontent-%COMP%] {\n  float: right;\n  width: 85vw;\n  height: 100vh;\n}\n\n.debug[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3RvLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6InBob3RvLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJGb3JQSVhJIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogODV2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmRlYnVne1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTA7XG59XG4iXX0= */"] });


/***/ }),

/***/ 8548:
/*!**************************************************************!*\
  !*** ./src/app/component/photo-lens/photo-lens.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoLensComponent": () => (/* binding */ PhotoLensComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PhotoLensComponent {
    constructor() {
        this.centerX = 0;
        this.centerY = 0;
        this.cursorPositionX = 0;
        this.cursorPositionY = 0;
        this.newCenterPositionX = '';
        this.newCenterPositionY = '';
        this.scaleNum = 1;
        this.scaleString = '';
        this.deltaY = 0;
        this.RouteBodyPersentage = 0.85;
    }
    ngOnInit() {
        this.container1 = document.getElementById('container1');
        this.coords = this.container1.getBoundingClientRect();
        this.centerX = this.coords.width / this.RouteBodyPersentage / 2;
        this.centerY = this.coords.height / 2;
    }
    ngAfterViewInit() { }
    mouseMove($event) {
        if (this.container1 !== null) {
            this.cursorPositionX = $event.clientX - this.centerX;
            this.cursorPositionY = $event.clientY - this.centerY;
            const cofX = 0.9;
            // const cofX = 1;
            // const cofY = 1 / 4;
            const cofY = 1;
            const momvementX = this.cursorPositionX * cofX;
            const momvementY = this.cursorPositionY * cofY;
            this.newCenterPositionX = -momvementX + 'px';
            this.newCenterPositionY = -momvementY + 'px';
        }
    }
    wheelScroll($event) {
        this.deltaY = $event.deltaY;
        // $event.deltaY > 0: scroll down
        if ($event.deltaY > 0 && this.scaleNum > 1) {
            this.scaleNum = 1;
            this.scaleString = 'scale(' + this.scaleNum + ')';
        }
        this.scaleNum -= $event.deltaY * 0.005;
        if (this.scaleNum < 0) {
            this.scaleNum = 0;
        }
        this.scaleString = 'scale(' + this.scaleNum + ')';
    }
}
PhotoLensComponent.ɵfac = function PhotoLensComponent_Factory(t) { return new (t || PhotoLensComponent)(); };
PhotoLensComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotoLensComponent, selectors: [["app-photo-lens"]], hostBindings: function PhotoLensComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function PhotoLensComponent_mousemove_HostBindingHandler($event) { return ctx.mouseMove($event); })("wheel", function PhotoLensComponent_wheel_HostBindingHandler($event) { return ctx.wheelScroll($event); });
    } }, decls: 17, vars: 14, consts: [[1, "routeBody"], [1, "background"], ["id", "container1", 1, "floatBasic", "container1"], [1, "floatBasic", "container2"], [1, "locationData"]], template: function PhotoLensComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home is far away");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-position-x", ctx.newCenterPositionX)("background-position-y", ctx.newCenterPositionY)("transform", ctx.scaleString);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("CenterX: ", ctx.centerX, ", CenterY: ", ctx.centerY, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("(Relative to center) CursorX: ", ctx.cursorPositionX, ", CursorY: ", ctx.cursorPositionY, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("New CenterX: ", ctx.newCenterPositionX, ", new CenterY: ", ctx.newCenterPositionY, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("scale: ", ctx.scaleString, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("deltaY: ", ctx.deltaY, "");
    } }, styles: ["body[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n}\n\n.locationData[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-left: 3%;\n  margin-top: 3%;\n  z-index: 3;\n  top: 0;\n}\n\n.locationData[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 8px;\n  color: green;\n}\n\n.background[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  height: 100%;\n  width: 90%;\n  background-color: gray;\n  background-size: cover;\n}\n\n.floatBasic[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 85%;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.container1[_ngcontent-%COMP%] {\n  z-index: 1;\n  background-image: url('1.jpeg');\n  background-position-x: center;\n  background-position-y: center;\n}\n\n.container2[_ngcontent-%COMP%] {\n  z-index: 2;\n  background-image: url('black0.png');\n  filter: blur(3px);\n  background-position: center center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3RvLWxlbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0FBRUY7O0FBQUE7RUFDRSxVQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0FBR0YiLCJmaWxlIjoicGhvdG8tbGVucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi5sb2NhdGlvbkRhdGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIHotaW5kZXg6IDM7XG4gIHRvcDogMDtcbn1cblxuLmxvY2F0aW9uRGF0YSBwIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAwO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDkwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmZsb2F0QmFzaWMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogODUlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmNvbnRhaW5lcjEge1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvMS5qcGVnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XG59XG4uY29udGFpbmVyMiB7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9ibGFjazAucG5nXCIpO1xuICBmaWx0ZXI6IGJsdXIoM3B4KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 365:
/*!********************************************************!*\
  !*** ./src/app/component/profile/profile.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ProfileComponent {
    constructor() { }
    ngOnInit() { }
    ngAfterViewInit() { }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 5, vars: 0, consts: [[1, "containerForPIXI"], [1, "wrapper"], ["id", "js-loader", 1, "loader"], ["id", "js-loader-cube", 1, "loader__cube"], ["id", "js-loader-line", 1, "loader__line"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: [".containerForPIXI[_ngcontent-%COMP%] {\n  float: right;\n  width: 85vw;\n  height: 100vh;\n}\n\nbody[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  font-family: \"Noto Sans HK\", sans-serif;\n  font-weight: 400;\n  color: #fff;\n  background: #f4f4f4;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  max-width: 1024px;\n  height: 550px;\n  border-radius: 20px;\n  border: 4px solid #393638;\n  background: #000;\n  box-shadow: -5px 5px 20px 10px rgba(0, 0, 0, 0.3);\n}\n\n.loader[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  opacity: 1;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100px;\n  height: 100px;\n}\n\n.loader__cube[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transform: rotate(45deg);\n  border: 1px solid #ffffff;\n}\n\n.loader__line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  height: 100px;\n  left: 50%;\n  transform: translateX(calc(-50% + 1px));\n  width: 1px;\n  background: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFFQSxtQkFBQTtFQUVBLHVCQUFBO0VBRUEsU0FBQTtFQUVBLHVDQUFBO0VBRUEsZ0JBQUE7RUFFQSxXQUFBO0VBRUEsbUJBQUE7QUFORjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaURBQUE7QUFORjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFORjs7QUFTRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQVBKOztBQVVFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSx1Q0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQVJKIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyRm9yUElYSSB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDg1dnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgbWFyZ2luOiAwO1xuXG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBIS1wiLCBzYW5zLXNlcmlmO1xuXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgY29sb3I6ICNmZmY7XG5cbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbn1cblxuLndyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgaGVpZ2h0OiA1NTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiA0cHggc29saWQgcmdiYSg1NywgNTQsIDU2LCAxKTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgYm94LXNoYWRvdzogLTVweCA1cHggMjBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmxvYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgb3BhY2l0eTogMTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgJl9fY3ViZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xuICB9XG5cbiAgJl9fbGluZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygtNTAlICsgMXB4KSk7XG4gICAgd2lkdGg6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC8vIGJhY2tncm91bmQ6IHJlZDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 4848:
/*!******************************************************!*\
  !*** ./src/app/component/server/server.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerComponent": () => (/* binding */ ServerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ServerComponent {
    constructor() {
        this.serverId = 666;
        this.serverStatus = 'offline';
    }
    ngOnInit() { }
    test() { }
}
ServerComponent.ɵfac = function ServerComponent_Factory(t) { return new (t || ServerComponent)(); };
ServerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServerComponent, selectors: [["app-server"]], decls: 4, vars: 2, template: function ServerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "server works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Id: ", ctx.serverId, ", status: ", ctx.serverStatus, " ");
    } }, styles: ["body[_ngcontent-%COMP%] {\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0YiLCJmaWxlIjoic2VydmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuIl19 */"] });


/***/ }),

/***/ 1336:
/*!********************************************************!*\
  !*** ./src/app/component/servers/servers.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServersComponent": () => (/* binding */ ServersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _server_server_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../server/server.component */ 4848);



class ServersComponent {
    constructor() {
        this.allowNewServer = false;
        this.inputData = '';
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }
    ngOnInit() { }
    onUpdateServerName(event) {
        console.log({ event });
        console.log(event);
        this.inputData = event.target.value;
    }
}
ServersComponent.ɵfac = function ServersComponent_Factory(t) { return new (t || ServersComponent)(); };
ServersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ServersComponent, selectors: [["app-servers"]], decls: 10, vars: 3, consts: [["type", "text", 1, "form-control", 3, "input"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "disabled"]], template: function ServersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "body")(1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "servers works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function ServersComponent_Template_input_input_3_listener($event) { return ctx.onUpdateServerName($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ServersComponent_Template_input_ngModelChange_4_listener($event) { return ctx.inputData = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Add Server");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-server");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.inputData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.inputData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.allowNewServer);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _server_server_component__WEBPACK_IMPORTED_MODULE_0__.ServerComponent], styles: ["p[_ngcontent-%COMP%] {\n  color: blue;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin-left: 5%;\n  margin-right: 10%;\n  padding-top: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRUYiLCJmaWxlIjoic2VydmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBjb2xvcjogYmx1ZTtcbn1cbmJvZHl7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuIl19 */"] });


/***/ }),

/***/ 9692:
/*!**********************************************************!*\
  !*** ./src/app/component/side-bar/side-bar.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideBarComponent": () => (/* binding */ SideBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class SideBarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    goToServer() {
        this.router.navigate(['test/servers']);
    }
    photoLens() {
        this.router.navigate(['test/photoLens']);
    }
    goToPhotoContainer() {
        this.router.navigate(['test/photoContainer']).then(() => {
            // window.location.reload();
        });
    }
    goToProfile() {
        this.router.navigate(['test/profile']).then(() => {
            // window.location.reload();
        });
    }
    goToOnePageScroll() {
        this.router.navigate(['test/onePageScroll']).then(() => {
            // window.location.reload();
        });
    }
}
SideBarComponent.ɵfac = function SideBarComponent_Factory(t) { return new (t || SideBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
SideBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideBarComponent, selectors: [["app-side-bar"]], decls: 12, vars: 0, consts: [[1, "sideBar"], [1, "sideBarBody"], [3, "click"]], template: function SideBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideBarComponent_Template_p_click_2_listener() { return ctx.goToServer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "severs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideBarComponent_Template_p_click_4_listener() { return ctx.photoLens(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "photoLens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideBarComponent_Template_p_click_6_listener() { return ctx.goToPhotoContainer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "photoContainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideBarComponent_Template_p_click_8_listener() { return ctx.goToProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideBarComponent_Template_p_click_10_listener() { return ctx.goToOnePageScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "onePageScroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: [".sideBar[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 10;\n  width: 15vw;\n  height: 100vh;\n}\n\n.sideBarBody[_ngcontent-%COMP%] {\n  float: right;\n  background-color: antiquewhite;\n  padding-top: 30%;\n  padding-right: 10%;\n}\n\n.sideBar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUVGIiwiZmlsZSI6InNpZGUtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVCYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwO1xuICB3aWR0aDogMTV2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5zaWRlQmFyQm9keXtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG4gIHBhZGRpbmctdG9wOiAzMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcbn1cblxuLnNpZGVCYXIgcCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi8vIC5Sb3V0ZUNvbnRlbnQge1xuLy8gICBmbG9hdDogcmlnaHQ7XG4vLyAgIHdpZHRoOiA4NXZ3O1xuLy8gICBoZWlnaHQ6IDEwMHZoO1xuLy8gfVxuIl19 */"] });


/***/ }),

/***/ 9796:
/*!**************************************************!*\
  !*** ./src/app/component/test/test.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestComponent": () => (/* binding */ TestComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../side-bar/side-bar.component */ 9692);



class TestComponent {
    constructor(router) {
        this.router = router;
    }
    // goToLens(): void {
    //   this.router.navigate(['test/photoLens']);
    // }
    ngOnInit() { }
}
TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
TestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["app-test"]], decls: 4, vars: 0, consts: [[1, "sideBar"], [1, "content"]], template: function TestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-side-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_0__.SideBarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: [".sideBar[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 10;\n  width: 15vw;\n  height: 100vh;\n  background-color: antiquewhite;\n}\n\n.sideBarBody[_ngcontent-%COMP%] {\n  float: right;\n  padding-top: 30%;\n  padding-right: 5%;\n}\n\n.sideBar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 12px;\n}\n\n.content[_ngcontent-%COMP%] {\n  float: right;\n  width: 85vw;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFFRiIsImZpbGUiOiJ0ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVCYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwO1xuICB3aWR0aDogMTV2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xufVxuLnNpZGVCYXJCb2R5IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXRvcDogMzAlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbn1cblxuLnNpZGVCYXIgcCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jb250ZW50IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogODV2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map