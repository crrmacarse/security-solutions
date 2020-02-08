function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var app_constants_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/constants/routes */
    "./src/app/constants/routes.ts");
    /* harmony import */


    var _components_public_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/public/home/home.component */
    "./src/app/components/public/home/home.component.ts");
    /* harmony import */


    var _components_client_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/client/auth/login/login.component */
    "./src/app/components/client/auth/login/login.component.ts");
    /* harmony import */


    var _components_client_auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/client/auth/register/register.component */
    "./src/app/components/client/auth/register/register.component.ts");
    /* harmony import */


    var _components_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/admin/dashboard/dashboard.component */
    "./src/app/components/admin/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_admin_auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/admin/auth/login/login.component */
    "./src/app/components/admin/auth/login/login.component.ts");
    /* harmony import */


    var _components_shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/shared/page-not-found/page-not-found.component */
    "./src/app/components/shared/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _components_public_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/public/about/about.component */
    "./src/app/components/public/about/about.component.ts");
    /* harmony import */


    var _components_public_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/public/contact/contact.component */
    "./src/app/components/public/contact/contact.component.ts");
    /* harmony import */


    var _components_public_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/public/how-it-works/how-it-works.component */
    "./src/app/components/public/how-it-works/how-it-works.component.ts");
    /* harmony import */


    var _components_public_quote_quote_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/public/quote/quote.component */
    "./src/app/components/public/quote/quote.component.ts");
    /* harmony import */


    var _components_public_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/public/testimonials/testimonials.component */
    "./src/app/components/public/testimonials/testimonials.component.ts");
    /* harmony import */


    var _components_shared_report_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/shared/report/report.component */
    "./src/app/components/shared/report/report.component.ts");
    /* harmony import */


    var _components_public_help_help_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/public/help/help.component */
    "./src/app/components/public/help/help.component.ts");
    /* harmony import */


    var _components_sample_todos_todos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/sample/todos/todos.component */
    "./src/app/components/sample/todos/todos.component.ts");

    var adminRoutes = [{
      path: app_constants_routes__WEBPACK_IMPORTED_MODULE_2__["ADMIN_DASHBOARD"],
      component: _components_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]
    }, {
      path: app_constants_routes__WEBPACK_IMPORTED_MODULE_2__["ADMIN_LOGIN"],
      component: _components_admin_auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    }];
    var clientRoutes = [{
      path: app_constants_routes__WEBPACK_IMPORTED_MODULE_2__["CLIENT_LOGIN"],
      component: _components_client_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: app_constants_routes__WEBPACK_IMPORTED_MODULE_2__["CLIENT_REGISTER"],
      component: _components_client_auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    }];
    var appRoutes = [].concat(adminRoutes, clientRoutes, [{
      path: app_constants_routes__WEBPACK_IMPORTED_MODULE_2__["ABOUT"],
      component: _components_public_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"]
    }, {
      path: app_constants_routes__WEBPACK_IMPORTED_MODULE_2__["CONTACT"],
      component: _components_public_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"]
    }, {
      path: app_constants_routes__WEBPACK_IMPORTED_MODULE_2__["HOW_IT_WORKS"],
      component: _components_public_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_11__["HowItWorksComponent"]
    }, {
      path: app_constants_routes__WEBPACK_IMPORTED_MODULE_2__["QUOTE"],
      component: _components_public_quote_quote_component__WEBPACK_IMPORTED_MODULE_12__["QuoteComponent"]
    }, {
      path: app_constants_routes__WEBPACK_IMPORTED_MODULE_2__["TESTIMONIALS"],
      component: _components_public_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_13__["TestimonialsComponent"]
    }, {
      path: app_constants_routes__WEBPACK_IMPORTED_MODULE_2__["REPORT"],
      component: _components_shared_report_report_component__WEBPACK_IMPORTED_MODULE_14__["ReportComponent"]
    }, {
      path: app_constants_routes__WEBPACK_IMPORTED_MODULE_2__["HELP"],
      component: _components_public_help_help_component__WEBPACK_IMPORTED_MODULE_15__["HelpComponent"]
    }, {
      path: app_constants_routes__WEBPACK_IMPORTED_MODULE_2__["TODOS"],
      component: _components_sample_todos_todos_component__WEBPACK_IMPORTED_MODULE_16__["TodosComponent"]
    }, {
      path: app_constants_routes__WEBPACK_IMPORTED_MODULE_2__["HOME"],
      component: _components_public_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: '**',
      component: _components_shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"]
    }]);

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/shared/navbar/navbar.component */
    "./src/app/components/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/shared/footer/footer.component */
    "./src/app/components/shared/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_public_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/public/home/home.component */
    "./src/app/components/public/home/home.component.ts");
    /* harmony import */


    var _components_client_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/client/auth/login/login.component */
    "./src/app/components/client/auth/login/login.component.ts");
    /* harmony import */


    var _components_client_auth_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/client/auth/register/register.component */
    "./src/app/components/client/auth/register/register.component.ts");
    /* harmony import */


    var _components_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/admin/dashboard/dashboard.component */
    "./src/app/components/admin/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_admin_auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/admin/auth/login/login.component */
    "./src/app/components/admin/auth/login/login.component.ts");
    /* harmony import */


    var _components_shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/shared/page-not-found/page-not-found.component */
    "./src/app/components/shared/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _components_public_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/public/about/about.component */
    "./src/app/components/public/about/about.component.ts");
    /* harmony import */


    var _components_public_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/public/contact/contact.component */
    "./src/app/components/public/contact/contact.component.ts");
    /* harmony import */


    var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/shared/navbar/navbar.component */
    "./src/app/components/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/shared/footer/footer.component */
    "./src/app/components/shared/footer/footer.component.ts");
    /* harmony import */


    var _components_sample_todos_todos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/sample/todos/todos.component */
    "./src/app/components/sample/todos/todos.component.ts");
    /* harmony import */


    var _components_sample_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/sample/todo-item/todo-item.component */
    "./src/app/components/sample/todo-item/todo-item.component.ts");
    /* harmony import */


    var _components_public_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/public/how-it-works/how-it-works.component */
    "./src/app/components/public/how-it-works/how-it-works.component.ts");
    /* harmony import */


    var _components_public_quote_quote_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/public/quote/quote.component */
    "./src/app/components/public/quote/quote.component.ts");
    /* harmony import */


    var _components_shared_report_report_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/shared/report/report.component */
    "./src/app/components/shared/report/report.component.ts");
    /* harmony import */


    var _components_public_help_help_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/public/help/help.component */
    "./src/app/components/public/help/help.component.ts");
    /* harmony import */


    var _components_public_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/public/testimonials/testimonials.component */
    "./src/app/components/public/testimonials/testimonials.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_public_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_client_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _components_client_auth_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _components_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], _components_admin_auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _components_shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"], _components_public_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"], _components_public_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"], _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"], _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _components_sample_todos_todos_component__WEBPACK_IMPORTED_MODULE_15__["TodosComponent"], _components_sample_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_16__["TodoItemComponent"], _components_public_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_17__["HowItWorksComponent"], _components_public_quote_quote_component__WEBPACK_IMPORTED_MODULE_18__["QuoteComponent"], _components_shared_report_report_component__WEBPACK_IMPORTED_MODULE_19__["ReportComponent"], _components_public_help_help_component__WEBPACK_IMPORTED_MODULE_20__["HelpComponent"], _components_public_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_21__["TestimonialsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_public_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_client_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _components_client_auth_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _components_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], _components_admin_auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _components_shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"], _components_public_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"], _components_public_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"], _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"], _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _components_sample_todos_todos_component__WEBPACK_IMPORTED_MODULE_15__["TodosComponent"], _components_sample_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_16__["TodoItemComponent"], _components_public_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_17__["HowItWorksComponent"], _components_public_quote_quote_component__WEBPACK_IMPORTED_MODULE_18__["QuoteComponent"], _components_shared_report_report_component__WEBPACK_IMPORTED_MODULE_19__["ReportComponent"], _components_public_help_help_component__WEBPACK_IMPORTED_MODULE_20__["HelpComponent"], _components_public_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_21__["TestimonialsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/admin/auth/login/login.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/admin/auth/login/login.component.ts ***!
    \****************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsAdminAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)();
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 2,
      vars: 0,
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/admin/dashboard/dashboard.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/admin/dashboard/dashboard.component.ts ***!
    \*******************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppComponentsAdminDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)();
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 2,
      vars: 0,
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/client/auth/login/login.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/client/auth/login/login.component.ts ***!
    \*****************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsClientAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)();
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 2,
      vars: 0,
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50L2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/client/auth/register/register.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/client/auth/register/register.component.ts ***!
    \***********************************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentsClientAuthRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent() {
        _classCallCheck(this, RegisterComponent);
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)();
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 2,
      vars: 0,
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "register works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50L2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/public/about/about.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/public/about/about.component.ts ***!
    \************************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsPublicAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 2,
      vars: 0,
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "everything about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/public/contact/contact.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/public/contact/contact.component.ts ***!
    \****************************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppComponentsPublicContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 2,
      vars: 0,
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/public/help/help.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/public/help/help.component.ts ***!
    \**********************************************************/

  /*! exports provided: HelpComponent */

  /***/
  function srcAppComponentsPublicHelpHelpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpComponent", function () {
      return HelpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HelpComponent =
    /*#__PURE__*/
    function () {
      function HelpComponent() {
        _classCallCheck(this, HelpComponent);
      }

      _createClass(HelpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HelpComponent;
    }();

    HelpComponent.ɵfac = function HelpComponent_Factory(t) {
      return new (t || HelpComponent)();
    };

    HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HelpComponent,
      selectors: [["app-help"]],
      decls: 2,
      vars: 0,
      template: function HelpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "help works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljL2hlbHAvaGVscC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-help',
          templateUrl: './help.component.html',
          styleUrls: ['./help.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/public/home/home.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/public/home/home.component.ts ***!
    \**********************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsPublicHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.title = 'Hello World';
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changeTitle",
        value: function changeTitle(title) {
          this.title = title;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 24,
      vars: 0,
      consts: [[1, "home"], ["id", "hero"], [1, "home__carousel"], [1, "home__hero"], [1, "home__hero__content"], ["alt", "My image name", "src", "assets/images/trex.png"], [1, "home__hero__content__description"], ["id", "information"], [1, "home__information"], ["id", "testimonials"], [1, "home__testimonials"], ["id", "contact"], [1, "home__contact"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Sliding text here that validates the vision of the company ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Automation is the future.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Few more description here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Website pics that shows the functionalities available ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Testimonials/Reviews here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Reason why to contact bla bla ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " fields here and submit button ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".home[_ngcontent-%COMP%]   .home__carousel[_ngcontent-%COMP%] {\n  height: 50vh;\n}\n.home[_ngcontent-%COMP%]   .home__hero[_ngcontent-%COMP%] {\n  height: 30vh;\n  background: #a6b6bf;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.home[_ngcontent-%COMP%]   .home__hero__content[_ngcontent-%COMP%] {\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n  margin: 3rem 0;\n}\n@media (max-width: 1024px) {\n  .home[_ngcontent-%COMP%]   .home__hero__content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.home[_ngcontent-%COMP%]   .home__hero__content[_ngcontent-%COMP%]   .home__hero__content__description[_ngcontent-%COMP%] {\n  margin-left: 5rem;\n}\n.home[_ngcontent-%COMP%]   .home__hero__content[_ngcontent-%COMP%]   .home__hero__content__description[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.home[_ngcontent-%COMP%]   .home__hero__content[_ngcontent-%COMP%]   .home__hero__content__description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.home[_ngcontent-%COMP%]   .home__information[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n}\n.home[_ngcontent-%COMP%]   .home__testimonials[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n}\n.home[_ngcontent-%COMP%]   .home__contact[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  justify-content: space-around;\n  padding: 15rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3NlY3VyaXR5LXNvbHV0aW9ucy9zZWN1cml0eS1zb2x1dGlvbnMvc3JjL2FwcC9jb21wb25lbnRzL3B1YmxpYy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLFlBQUE7QUNISjtBRE1FO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDSko7QURPRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsY0FBQTtBQ0xKO0FEUU07RUFERjtJQUVJLGFBQUE7RUNMTjtBQUNGO0FEUUk7RUFDRSxpQkFBQTtBQ05OO0FEUU07RUFDRSxlQUFBO0FDTlI7QURTTTtFQUNFLGlCQUFBO0FDUFI7QURZRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtBQ1ZKO0FEYUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7QUNYSjtBRGNFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ1pKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wdWJsaWMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zY3NzL2Jhc2UvdmFyaWFibGVzXCI7XG5cbi5ob21lIHtcblxuICAuaG9tZV9fY2Fyb3VzZWwge1xuICAgIGhlaWdodDogNTB2aDtcbiAgfVxuXG4gIC5ob21lX19oZXJvIHtcbiAgICBoZWlnaHQ6IDMwdmg7XG4gICAgYmFja2dyb3VuZDogI2E2YjZiZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5ob21lX19oZXJvX19jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDNyZW0gMDtcblxuICAgIGltZyB7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJHNjcmVlbi1sZykge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5ob21lX19oZXJvX19jb250ZW50X19kZXNjcmlwdGlvbiB7XG4gICAgICBtYXJnaW4tbGVmdDogNXJlbTtcblxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaG9tZV9faW5mb3JtYXRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5ob21lX190ZXN0aW1vbmlhbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5ob21lX19jb250YWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgcGFkZGluZzogMTVyZW0gMDtcbiAgfVxufVxuIiwiLmhvbWUgLmhvbWVfX2Nhcm91c2VsIHtcbiAgaGVpZ2h0OiA1MHZoO1xufVxuLmhvbWUgLmhvbWVfX2hlcm8ge1xuICBoZWlnaHQ6IDMwdmg7XG4gIGJhY2tncm91bmQ6ICNhNmI2YmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaG9tZSAuaG9tZV9faGVyb19fY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAzcmVtIDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5ob21lIC5ob21lX19oZXJvX19jb250ZW50IGltZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmhvbWUgLmhvbWVfX2hlcm9fX2NvbnRlbnQgLmhvbWVfX2hlcm9fX2NvbnRlbnRfX2Rlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDVyZW07XG59XG4uaG9tZSAuaG9tZV9faGVyb19fY29udGVudCAuaG9tZV9faGVyb19fY29udGVudF9fZGVzY3JpcHRpb24gaDEge1xuICBmb250LXNpemU6IDNyZW07XG59XG4uaG9tZSAuaG9tZV9faGVyb19fY29udGVudCAuaG9tZV9faGVyb19fY29udGVudF9fZGVzY3JpcHRpb24gcCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLmhvbWUgLmhvbWVfX2luZm9ybWF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5ob21lIC5ob21lX190ZXN0aW1vbmlhbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmhvbWUgLmhvbWVfX2NvbnRhY3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogMTVyZW0gMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/public/how-it-works/how-it-works.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/public/how-it-works/how-it-works.component.ts ***!
    \**************************************************************************/

  /*! exports provided: HowItWorksComponent */

  /***/
  function srcAppComponentsPublicHowItWorksHowItWorksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HowItWorksComponent", function () {
      return HowItWorksComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HowItWorksComponent =
    /*#__PURE__*/
    function () {
      function HowItWorksComponent() {
        _classCallCheck(this, HowItWorksComponent);
      }

      _createClass(HowItWorksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HowItWorksComponent;
    }();

    HowItWorksComponent.ɵfac = function HowItWorksComponent_Factory(t) {
      return new (t || HowItWorksComponent)();
    };

    HowItWorksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HowItWorksComponent,
      selectors: [["app-how-it-works"]],
      decls: 2,
      vars: 0,
      template: function HowItWorksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "How it works");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljL2hvdy1pdC13b3Jrcy9ob3ctaXQtd29ya3MuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HowItWorksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-how-it-works',
          templateUrl: './how-it-works.component.html',
          styleUrls: ['./how-it-works.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/public/quote/quote.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/public/quote/quote.component.ts ***!
    \************************************************************/

  /*! exports provided: QuoteComponent */

  /***/
  function srcAppComponentsPublicQuoteQuoteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuoteComponent", function () {
      return QuoteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var QuoteComponent =
    /*#__PURE__*/
    function () {
      function QuoteComponent() {
        _classCallCheck(this, QuoteComponent);
      }

      _createClass(QuoteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return QuoteComponent;
    }();

    QuoteComponent.ɵfac = function QuoteComponent_Factory(t) {
      return new (t || QuoteComponent)();
    };

    QuoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QuoteComponent,
      selectors: [["app-quote"]],
      decls: 2,
      vars: 0,
      template: function QuoteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Get a quote");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljL3F1b3RlL3F1b3RlLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuoteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-quote',
          templateUrl: './quote.component.html',
          styleUrls: ['./quote.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/public/testimonials/testimonials.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/public/testimonials/testimonials.component.ts ***!
    \**************************************************************************/

  /*! exports provided: TestimonialsComponent */

  /***/
  function srcAppComponentsPublicTestimonialsTestimonialsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function () {
      return TestimonialsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TestimonialsComponent =
    /*#__PURE__*/
    function () {
      function TestimonialsComponent() {
        _classCallCheck(this, TestimonialsComponent);
      }

      _createClass(TestimonialsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TestimonialsComponent;
    }();

    TestimonialsComponent.ɵfac = function TestimonialsComponent_Factory(t) {
      return new (t || TestimonialsComponent)();
    };

    TestimonialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TestimonialsComponent,
      selectors: [["app-testimonials"]],
      decls: 2,
      vars: 0,
      template: function TestimonialsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Testimonials");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGljL3Rlc3RpbW9uaWFscy90ZXN0aW1vbmlhbHMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimonialsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-testimonials',
          templateUrl: './testimonials.component.html',
          styleUrls: ['./testimonials.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/sample/todo-item/todo-item.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/sample/todo-item/todo-item.component.ts ***!
    \********************************************************************/

  /*! exports provided: TodoItemComponent */

  /***/
  function srcAppComponentsSampleTodoItemTodoItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function () {
      return TodoItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var app_services_todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! app/services/todo.service */
    "./src/app/services/todo.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var TodoItemComponent =
    /*#__PURE__*/
    function () {
      function TodoItemComponent(todoService) {
        var _this = this;

        _classCallCheck(this, TodoItemComponent);

        this.todoService = todoService;
        this.deleteTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        this.onToggle = function (todo) {
          _this.todoService.toggleCompleted(todo).subscribe(function (response) {
            console.log(response);
          });

          todo.completed = !todo.completed;
        };

        this.onDelete = function (todo) {
          _this.deleteTodo.emit(todo);
        };

        this.setClasses = function () {
          return {
            todo: true,
            'is-completed': _this.todo.completed
          };
        };
      }

      _createClass(TodoItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TodoItemComponent;
    }();

    TodoItemComponent.ɵfac = function TodoItemComponent_Factory(t) {
      return new (t || TodoItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_services_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]));
    };

    TodoItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TodoItemComponent,
      selectors: [["app-todo-item"]],
      inputs: {
        todo: "todo"
      },
      outputs: {
        deleteTodo: "deleteTodo"
      },
      decls: 8,
      vars: 3,
      consts: [[3, "ngClass"], ["type", "checkbox", 3, "change"], ["type", "button", 3, "click"]],
      template: function TodoItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TodoItemComponent_Template_input_change_1_listener($event) {
            return ctx.onToggle(ctx.todo);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_button_click_6_listener($event) {
            return ctx.onDelete(ctx.todo);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClasses());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("title: ", ctx.todo.title, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("description: ", ctx.todo.title, "");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: [".is-completed[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3NlY3VyaXR5LXNvbHV0aW9ucy9zZWN1cml0eS1zb2x1dGlvbnMvc3JjL2FwcC9jb21wb25lbnRzL3NhbXBsZS90b2RvLWl0ZW0vdG9kby1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NhbXBsZS90b2RvLWl0ZW0vdG9kby1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2FtcGxlL3RvZG8taXRlbS90b2RvLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXMtY29tcGxldGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4iLCIuaXMtY29tcGxldGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-todo-item',
          templateUrl: './todo-item.component.html',
          styleUrls: ['./todo-item.component.scss']
        }]
      }], function () {
        return [{
          type: app_services_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]
        }];
      }, {
        todo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        deleteTodo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/sample/todos/todos.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/sample/todos/todos.component.ts ***!
    \************************************************************/

  /*! exports provided: TodosComponent */

  /***/
  function srcAppComponentsSampleTodosTodosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodosComponent", function () {
      return TodosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var app_services_todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! app/services/todo.service */
    "./src/app/services/todo.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../todo-item/todo-item.component */
    "./src/app/components/sample/todo-item/todo-item.component.ts");

    function TodosComponent_ul_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-todo-item", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteTodo", function TodosComponent_ul_3_Template_app_todo_item_deleteTodo_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.deleteTodo($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var todo_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("todo", todo_r1);
      }
    }

    var TodosComponent =
    /*#__PURE__*/
    function () {
      function TodosComponent(todoServices) {
        _classCallCheck(this, TodosComponent);

        this.todoServices = todoServices;
      }

      _createClass(TodosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.todoServices.getTodos().subscribe(function (todos) {
            _this2.todos = todos;
          });
        }
      }, {
        key: "deleteTodo",
        value: function deleteTodo(todo) {
          this.todos = this.todos.filter(function (t) {
            return t.id !== todo.id;
          });
          this.todoServices.deleteTodo(todo).subscribe(function (response) {
            console.log(response);
          });
        }
      }]);

      return TodosComponent;
    }();

    TodosComponent.ɵfac = function TodosComponent_Factory(t) {
      return new (t || TodosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_services_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]));
    };

    TodosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TodosComponent,
      selectors: [["app-todos"]],
      decls: 4,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], [3, "todo", "deleteTodo"]],
      template: function TodosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Todos:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TodosComponent_ul_3_Template, 3, 1, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.todos);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_3__["TodoItemComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2FtcGxlL3RvZG9zL3RvZG9zLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-todos',
          templateUrl: './todos.component.html',
          styleUrls: ['./todos.component.scss']
        }]
      }], function () {
        return [{
          type: app_services_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/shared/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/shared/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 2,
      vars: 0,
      consts: [[1, "footer"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Footer here ala ph gov website\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".footer[_ngcontent-%COMP%] {\n  padding: 10rem 0;\n  background: #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3NlY3VyaXR5LXNvbHV0aW9ucy9zZWN1cml0eS1zb2x1dGlvbnMvc3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICBwYWRkaW5nOiAxMHJlbSAwO1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xufVxuIiwiLmZvb3RlciB7XG4gIHBhZGRpbmc6IDEwcmVtIDA7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/shared/navbar/navbar.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
    \**************************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsSharedNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/"];
    };

    var _c1 = function _c1() {
      return ["about"];
    };

    var _c2 = function _c2() {
      return ["how-it-works"];
    };

    var _c3 = function _c3() {
      return ["testimonials"];
    };

    var _c4 = function _c4() {
      return ["quote"];
    };

    var _c5 = function _c5() {
      return ["report"];
    };

    var _c6 = function _c6() {
      return ["help"];
    };

    var _c7 = function _c7() {
      return ["login"];
    }; // import * as ROUTES from 'app/constants/routes';
    // import camelCase from 'lodash/camelCase';
    // @TODO: Passing the ROUTES to html


    var NavbarComponent =
    /*#__PURE__*/
    function () {
      // routeLinks: {};
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.routeLinks = Object.values(ROUTES).filter(v => !!v).reduce((acc, curr) => {
          //   const key = camelCase(curr)
          //   acc[key] = curr;
          //   return acc
          // }, {});
          this.title = 'Security Solutions Company';
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 20,
      vars: 17,
      consts: [[1, "navbar"], [1, "title", 3, "routerLink"], [1, "navbar__links"], [1, "navbar___left"], [3, "routerLink"], [1, "navbar__right"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "How it works");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Testimonials");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Get a Quote");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Submit a Report");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c7));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Cinzel|Raleway&display=swap\");\n.navbar[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  position: -webkit-sticky;\n  position: sticky;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 2rem 0;\n  top: 0;\n  background: #012340;\n  font-size: 1.2rem;\n  color: #ffffffa3;\n  z-index: 20;\n  width: 100%;\n}\n.navbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-family: Cinzel, serif;\n  margin-left: 2rem;\n}\n.navbar[_ngcontent-%COMP%]   .navbar__links[_ngcontent-%COMP%] {\n  display: block;\n}\n@media (min-width: 1024px) {\n  .navbar[_ngcontent-%COMP%]   .navbar__links[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    padding: 0 1.5rem;\n  }\n}\n.navbar[_ngcontent-%COMP%]   .navbar__links[_ngcontent-%COMP%]   .navbar___left[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.navbar[_ngcontent-%COMP%]   .navbar__links[_ngcontent-%COMP%]   .navbar___left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffffa3;\n  margin-right: 1rem;\n}\n.navbar[_ngcontent-%COMP%]   .navbar__links[_ngcontent-%COMP%]   .navbar__right[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  font-size: 1rem;\n}\n.navbar[_ngcontent-%COMP%]   .navbar__links[_ngcontent-%COMP%]   .navbar__right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  color: #ffffffa3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3NlY3VyaXR5LXNvbHV0aW9ucy9zZWN1cml0eS1zb2x1dGlvbnMvc3JjL3Njc3MvYmFzZS9fdHlwb2dyYXBoeS5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvc2VjdXJpdHktc29sdXRpb25zL3NlY3VyaXR5LXNvbHV0aW9ucy9zcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9zZWN1cml0eS1zb2x1dGlvbnMvc2VjdXJpdHktc29sdXRpb25zL3NyYy9zY3NzL2Jhc2UvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGtGQUFBO0FDR1I7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsbUJDTmM7RURPZCxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUVERjtBRkdFO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FFREo7QUZJRTtFQUNFLGNBQUE7QUVGSjtBRklJO0VBSEY7SUFJSSxvQkFBQTtJQUFBLGFBQUE7SUFDQSxtQkFBQTtZQUFBLFlBQUE7SUFDQSx5QkFBQTtZQUFBLDhCQUFBO0lBQ0EsaUJBQUE7RUVESjtBQUNGO0FGR0k7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FFRE47QUZHTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUVEUjtBRktJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtBRUhOO0FGS007RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FFSFIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1DaW56ZWx8UmFsZXdheSZkaXNwbGF5PXN3YXAnKTtcblxuJGZvbnQtcHJpbWFyeTogQ2luemVsO1xuJGZvbnQtc2Vjb25kYXJ5OiBSYWxld2F5O1xuJGZvbnQtZmFtaWx5OiAkZm9udC1zZWNvbmRhcnksIFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuIiwiQGltcG9ydCBcIn5zY3NzL2Jhc2UvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNjc3MvYmFzZS90eXBvZ3JhcGh5XCI7XG5cbi5uYXZiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogI2ZmZmZmZmEzO1xuICB6LWluZGV4OiAyMDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeSwgc2VyaWY7XG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gIH1cblxuICAubmF2YmFyX19saW5rcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHNjcmVlbi1sZykge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICAgIH1cblxuICAgIC5uYXZiYXJfX19sZWZ0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmZhMztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5uYXZiYXJfX3JpZ2h0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmb250LXNpemU6IDFyZW07XG5cbiAgICAgIGEge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmYTM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxufVxuIiwiJGJnLWNvbG9yOiAjZWVlO1xuJGNvbG9yOiAjMzMzO1xuXG4kcHJpbWFyeS1jb2xvcjogIzAxMjM0MDtcbiR0ZXh0LWNvbG9yOiAjZTJlOGYwO1xuXG4kdGV4dC1jb2xvci0tc2Vjb25kYXJ5OiAjNzQ3Yjg0O1xuJHRleHQtY29sb3ItLWxpZ2h0ZW46IGxpZ2h0ZW4oJHRleHQtY29sb3IsIDUwJSk7XG5cbi8vIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvcmVzcG9uc2l2ZS1kZXNpZ24vI2FwcFxuXG4kc2NyZWVuLXNtOiAgICAgICAgICAgICAgICAgIDY0MHB4O1xuJHNjcmVlbi1zbS1taW46ICAgICAgICAgICAgICAkc2NyZWVuLXNtO1xuXG4kc2NyZWVuLW1kOiAgICAgICAgICAgICAgICAgIDc2OHB4O1xuJHNjcmVlbi1tZC1taW46ICAgICAgICAgICAgICAkc2NyZWVuLW1kO1xuXG4kc2NyZWVuLWxnOiAgICAgICAgICAgICAgICAgIDEwMjRweDtcbiRzY3JlZW4tbGctbWluOiAgICAgICAgICAgICAgJHNjcmVlbi1sZztcblxuJHNjcmVlbi14bDogICAgICAgICAgICAgICAgICAxMjgwcHg7XG4kc2NyZWVuLXhsLW1pbjogICAgICAgICAgICAgICRzY3JlZW4teGw7O1xuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Q2luemVsfFJhbGV3YXkmZGlzcGxheT1zd2FwXCIpO1xuLm5hdmJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiAjMDEyMzQwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6ICNmZmZmZmZhMztcbiAgei1pbmRleDogMjA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5hdmJhciAudGl0bGUge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC1mYW1pbHk6IENpbnplbCwgc2VyaWY7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xufVxuLm5hdmJhciAubmF2YmFyX19saW5rcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAubmF2YmFyIC5uYXZiYXJfX2xpbmtzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMCAxLjVyZW07XG4gIH1cbn1cbi5uYXZiYXIgLm5hdmJhcl9fbGlua3MgLm5hdmJhcl9fX2xlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm5hdmJhciAubmF2YmFyX19saW5rcyAubmF2YmFyX19fbGVmdCBhIHtcbiAgY29sb3I6ICNmZmZmZmZhMztcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuLm5hdmJhciAubmF2YmFyX19saW5rcyAubmF2YmFyX19yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5uYXZiYXIgLm5hdmJhcl9fbGlua3MgLm5hdmJhcl9fcmlnaHQgYSB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgY29sb3I6ICNmZmZmZmZhMztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/shared/page-not-found/page-not-found.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/components/shared/page-not-found/page-not-found.component.ts ***!
    \******************************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppComponentsSharedPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageNotFoundComponent =
    /*#__PURE__*/
    function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 2,
      vars: 0,
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-not-found',
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/shared/report/report.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/shared/report/report.component.ts ***!
    \**************************************************************/

  /*! exports provided: ReportComponent */

  /***/
  function srcAppComponentsSharedReportReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportComponent", function () {
      return ReportComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ReportComponent =
    /*#__PURE__*/
    function () {
      function ReportComponent() {
        _classCallCheck(this, ReportComponent);
      }

      _createClass(ReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReportComponent;
    }();

    ReportComponent.ɵfac = function ReportComponent_Factory(t) {
      return new (t || ReportComponent)();
    };

    ReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReportComponent,
      selectors: [["app-report"]],
      decls: 2,
      vars: 0,
      template: function ReportComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "report works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3JlcG9ydC9yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-report',
          templateUrl: './report.component.html',
          styleUrls: ['./report.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/constants/routes.ts":
  /*!*************************************!*\
    !*** ./src/app/constants/routes.ts ***!
    \*************************************/

  /*! exports provided: HOME, ABOUT, CONTACT, HOW_IT_WORKS, QUOTE, HELP, TESTIMONIALS, REPORT, TODOS, CLIENT_LOGIN, CLIENT_REGISTER, ADMIN_DASHBOARD, ADMIN_LOGIN */

  /***/
  function srcAppConstantsRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HOME", function () {
      return HOME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ABOUT", function () {
      return ABOUT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CONTACT", function () {
      return CONTACT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HOW_IT_WORKS", function () {
      return HOW_IT_WORKS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QUOTE", function () {
      return QUOTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HELP", function () {
      return HELP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TESTIMONIALS", function () {
      return TESTIMONIALS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "REPORT", function () {
      return REPORT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TODOS", function () {
      return TODOS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CLIENT_LOGIN", function () {
      return CLIENT_LOGIN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CLIENT_REGISTER", function () {
      return CLIENT_REGISTER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADMIN_DASHBOARD", function () {
      return ADMIN_DASHBOARD;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADMIN_LOGIN", function () {
      return ADMIN_LOGIN;
    });

    var HOME = '';
    var ABOUT = 'about';
    var CONTACT = 'contact';
    var HOW_IT_WORKS = 'how-it-works';
    var QUOTE = 'quote';
    var HELP = 'help';
    var TESTIMONIALS = 'testimonials';
    var REPORT = 'report';
    var TODOS = 'todos';
    var CLIENT_LOGIN = 'login';
    var CLIENT_REGISTER = 'register';
    var ADMIN_DASHBOARD = 'admin';
    var ADMIN_LOGIN = 'admin/login';
    /***/
  },

  /***/
  "./src/app/services/todo.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/todo.service.ts ***!
    \******************************************/

  /*! exports provided: TodoService */

  /***/
  function srcAppServicesTodoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoService", function () {
      return TodoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var TodoService =
    /*#__PURE__*/
    function () {
      function TodoService(http) {
        _classCallCheck(this, TodoService);

        this.http = http;
        this.todosUrl = 'https://jsonplaceholder.typicode.com/todos';
      }

      _createClass(TodoService, [{
        key: "getTodos",
        value: function getTodos() {
          return this.http.get(this.todosUrl);
        }
      }, {
        key: "toggleCompleted",
        value: function toggleCompleted(todo) {
          var url = "".concat(this.todosUrl, "/").concat(todo.id);
          return this.http.put(url, todo, httpOptions);
        }
      }, {
        key: "deleteTodo",
        value: function deleteTodo(todo) {
          var url = "".concat(this.todosUrl, "/").concat(todo.id);
          return this.http.delete(url, httpOptions);
        }
      }]);

      return TodoService;
    }();

    TodoService.ɵfac = function TodoService_Factory(t) {
      return new (t || TodoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    TodoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TodoService,
      factory: TodoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/runner/work/security-solutions/security-solutions/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map