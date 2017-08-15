"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var EuroJackpotService = (function () {
    function EuroJackpotService(_http) {
        this._http = _http;
    }
    EuroJackpotService.prototype.getPosts = function () {
        return this._http.get("https://www.lottoland.com/api/drawings/euroJackpot", { headers: this.getHeaders() }).map(function (res) { return res.json(); });
    };
    EuroJackpotService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        return headers;
    };
    EuroJackpotService = __decorate([
        core_1.Injectable()
    ], EuroJackpotService);
    return EuroJackpotService;
}());
exports.EuroJackpotService = EuroJackpotService;
//# sourceMappingURL=eurojackpot.service.js.map