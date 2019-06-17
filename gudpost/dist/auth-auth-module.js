(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "./src/app/auth/containers/index.ts");




var routes = [
    {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers */ "./src/app/auth/containers/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./src/app/auth/components/index.ts");








var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            declarations: [
                _containers__WEBPACK_IMPORTED_MODULE_6__["containers"],
                _components__WEBPACK_IMPORTED_MODULE_7__["components"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/components/index.ts":
/*!******************************************!*\
  !*** ./src/app/auth/components/index.ts ***!
  \******************************************/
/*! exports provided: LoginFormComponent, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/auth/components/login-form/login-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_0__["LoginFormComponent"]; });



var components = [
    _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_0__["LoginFormComponent"]
];


/***/ }),

/***/ "./src/app/auth/components/login-form/login-form.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/auth/components/login-form/login-form.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\" (ngSubmit)=\"submit()\">\n\n  <h2 class=\"text-secondary text-center\">Login</h2>\n\n  <div class=\"form-group\">\n    <label for=\"inputGudpostEmail\">Email</label>\n    <input #inputGudpostEmail type=\"email\" class=\"form-control\" id=\"inputGudpostEmail\" placeholder=\"Enter email ...\"\n      formControlName=\"username\" [class.is-invalid]=\"isFieldInvalid('username')\" required>\n    <div class=\"invalid-feedback\">\n      Not valid email!\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"inputGudpostPassword\">Password</label>\n    <input #inputGudpostPassword type=\"password\" class=\"form-control\" id=\"inputGudpostPassword\" placeholder=\"Enter Password ...\"\n      formControlName=\"password\" required>\n  </div>\n\n  <div class=\"form-group text-right clearfix custom-control custom-checkbox\" (click)=\"onCheckRememberMe()\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\" formControlName=\"rememberMe\" >\n    <label class=\"custom-control-label\" for=\"customCheck1\">Remember me</label>\n  </div>\n\n  <div class=\"form-group d-flex justify-content-between\">\n    <button class=\"btn btn-primary  btn-login-action mr-2\">Sign Up</button>\n    <button type=\"submit\" class=\"btn btn-primary btn-yellow btn-login-action  mr-2\">Login</button>\n    <button class=\"btn btn-primary btn-darker-blue btn-login-action\" type=\"button\" (click)=\"loginFacebook()\">\n      <i class=\"fab fa-facebook-f\"></i>\n    </button>\n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/auth/components/login-form/login-form.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/auth/components/login-form/login-form.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-login-action {\n  width: 150px; }\n\n.custom-control-label:hover {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb21wb25lbnRzL2xvZ2luLWZvcm0vRDpcXFByb2plY3RzXFxnai13b3JrZmxvdy9zcmNcXGFwcFxcYXV0aFxcY29tcG9uZW50c1xcbG9naW4tZm9ybVxcbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUVJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29tcG9uZW50cy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWxvZ2luLWFjdGlvbiB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/components/login-form/login-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/auth/components/login-form/login-form.component.ts ***!
  \********************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.hasErrors = false;
        this.rememberMe = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
        this.loginUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loginWithFacebook = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
        this.loginForm = this.formBuilder.group({
            username: ['admin@gudpost.net', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['admingudpost123', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rememberMe: [false],
        });
    }
    LoginFormComponent.prototype.onCheckRememberMe = function () {
        this.loginForm.patchValue({
            rememberMe: true
        });
    };
    LoginFormComponent.prototype.isFieldInvalid = function (fieldName) {
        var control = this.loginForm.get(fieldName);
        return control.invalid && control.touched;
    };
    LoginFormComponent.prototype.isFormValid = function () {
        if (this.loginForm.invalid) {
            var controls_1 = this.loginForm.controls;
            Object.keys(controls_1)
                .forEach(function (controlName) { return controls_1[controlName].markAsTouched(); });
            this.hasErrors = true;
            return false;
        }
        this.hasErrors = false;
        return true;
    };
    LoginFormComponent.prototype.submit = function () {
        if (this.isFormValid()) {
            var user = {
                username: this.loginForm.value.username,
                password: this.loginForm.value.password,
                rememberMe: this.loginForm.value.rememberMe
            };
            this.loginUser.emit(user);
        }
    };
    LoginFormComponent.prototype.loginFacebook = function () {
        this.loginWithFacebook.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginFormComponent.prototype, "rememberMe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginFormComponent.prototype, "loginUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginFormComponent.prototype, "loginWithFacebook", void 0);
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/auth/components/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.scss */ "./src/app/auth/components/login-form/login-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/auth/containers/index.ts":
/*!******************************************!*\
  !*** ./src/app/auth/containers/index.ts ***!
  \******************************************/
/*! exports provided: LoginPageComponent, containers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/auth/containers/login-page/login-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__["LoginPageComponent"]; });



var containers = [
    _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__["LoginPageComponent"]
];


/***/ }),

/***/ "./src/app/auth/containers/login-page/login-page.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/auth/containers/login-page/login-page.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mx-auto login-form\">\n  <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" *ngIf=\"hasErrors\">\n    <p>\n      Wrong Email or Password, check again please !\n    </p>\n    <button type=\"button\" class=\"close\" (click)=\"onDismissAlert()\" data-dismiss=\"alert\" aria-label=\"Close\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"d-flex justify-content-center mb-4\">\n    <img src=\"assets/logo/GUDPOST-2.png\" class=\"img-fluid w-75\" alt=\"\">\n  </div>\n\n  <app-login-form \n    (loginWithFacebook)=\"loginWithFacebook($event)\"\n    (loginUser)=\"submit($event)\" >\n  </app-login-form>\n\n  <hr>\n\n  <div class=\"text-center\">\n    <button class=\"btn btn-light text-secondary\">Forgot password</button>\n  </div>\n\n  <button (click)=\"testJsonServer()\">Test</button>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/containers/login-page/login-page.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/auth/containers/login-page/login-page.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form {\n  width: 500px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb250YWluZXJzL2xvZ2luLXBhZ2UvRDpcXFByb2plY3RzXFxnai13b3JrZmxvdy9zcmNcXGFwcFxcYXV0aFxcY29udGFpbmVyc1xcbG9naW4tcGFnZVxcbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUix3Q0FBZ0M7VUFBaEMsZ0NBQWdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2NvbnRhaW5lcnMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWZvcm0ge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/auth/containers/login-page/login-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/auth/containers/login-page/login-page.component.ts ***!
  \********************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/auth/services/login.service.ts");





var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(router, formBuilder, loginService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.loginForm = this.formBuilder.group({
            username: [undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: [undefined, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            rememberMe: [''],
        });
    }
    LoginPageComponent.prototype.submit = function (user) {
        if (this.isValidUser(user)) {
            this.router.navigate(['/home']);
        }
    };
    LoginPageComponent.prototype.isValidUser = function (user) {
        var validUser = {
            username: 'admin@gudpost.net',
            password: 'admingudpost123'
        };
        if (validUser.username !== user.username
            || validUser.password !== user.password) {
            this.hasErrors = true;
            return false;
        }
        return true;
    };
    LoginPageComponent.prototype.loginWithFacebook = function (loginSignal) {
        var _this = this;
        if (loginSignal) {
            this.loginService.loginFacebook().pipe()
                .subscribe(function () {
                _this.router.navigate(['/home']);
            });
        }
    };
    LoginPageComponent.prototype.logout = function () {
        this.loginService.logOutFacebook().subscribe(function (res) { return console.log(res); });
    };
    LoginPageComponent.prototype.onDismissAlert = function () {
        this.hasErrors = undefined;
    };
    LoginPageComponent.prototype.testJsonServer = function () {
        this.loginService.testJsonServer();
    };
    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/auth/containers/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.scss */ "./src/app/auth/containers/login-page/login-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/auth/services/login.service.ts":
/*!************************************************!*\
  !*** ./src/app/auth/services/login.service.ts ***!
  \************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.loginFacebook = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            FB.login(function (response) {
                _this.getLongLiveToken(response.authResponse.accessToken).pipe()
                    .subscribe(function (longLiveToken) {
                    _this.setLocalStorage(longLiveToken);
                    observer.next(longLiveToken);
                });
            });
        });
    };
    LoginService.prototype.setLocalStorage = function (authResponse) {
        localStorage.setItem('GPLoginUser', JSON.stringify(authResponse));
    };
    LoginService.prototype.getLongLiveToken = function (accessToken) {
        // tslint:disable-next-line: max-line-length
        var urlExchangeLongLivedToken = "https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=933021606869470&client_secret=b086a2a1ac36c03154cc48354575bdaa&fb_exchange_token=" + accessToken;
        return this.http.get(urlExchangeLongLivedToken);
    };
    LoginService.prototype.logOutFacebook = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            FB.logout(function (response) {
                observer.next(response);
            });
        });
    };
    LoginService.prototype.testJsonServer = function () {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].mockServerURL + "/posts").subscribe(function (d) { return console.log(d); });
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map