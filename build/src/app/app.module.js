"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var eurojackpot_component_1 = require("./components/eurojackpot.component");
var eurojackpot_service_1 = require("./services/eurojackpot.service");
var primeng_1 = require("primeng/primeng");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                primeng_1.DataTableModule,
                primeng_1.SharedModule
            ],
            declarations: [
                eurojackpot_component_1.EuroJackpotComponent
            ],
            providers: [
                eurojackpot_service_1.EuroJackpotService,
                { provide: core_1.LOCALE_ID,
                    useValue: 'es-ES' }
            ],
            bootstrap: [eurojackpot_component_1.EuroJackpotComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
