"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var models_1 = require("../models/models");
var EuroJackpotComponent = (function () {
    function EuroJackpotComponent(_eurojackpotService) {
        this._eurojackpotService = _eurojackpotService;
        this.title = 'EuroJackpot';
        this.numbers = [];
        this.euroNumbers = [];
        this.tiers = [
            "I",
            "II",
            "III",
            "IV",
            "V",
            "VI",
            "VII",
            "VIII",
            "IX",
            "X",
            "XI",
            "XII"
        ];
        this.matches = [
            "5 Numbers + 2 Euronumbers",
            "5 Numbers + 1 Euronumber",
            "5 Numbers + 0 Euronumbers",
            "4 Numbers + 2 Euronumbers",
            "4 Numbers + 1 Euronumber",
            "4 Numbers + 0 Euronumbers",
            "3 Numbers + 2 Euronumbers",
            "2 Numbers + 2 Euronumbers",
            "3 Numbers + 1 Euronumber",
            "3 Numbers + 0 Euronumbers",
            "1 Number + 2 Euronumbers",
            "2 Numbers + 1 Euronumber"
        ];
        this.ranks = [
            "rank1",
            "rank2",
            "rank3",
            "rank4",
            "rank5",
            "rank6",
            "rank7",
            "rank8",
            "rank9",
            "rank10",
            "rank11",
            "rank12"
        ];
    }
    ;
    EuroJackpotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._eurojackpotService.getPosts()
            .subscribe(function (result) {
            _this.result = result;
            _this.getLotteryNumbers(result);
            _this.getResultsTableContent(result);
            console.log(_this.resultsTable);
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
            }
        });
    };
    ;
    EuroJackpotComponent.prototype.getResultsTableContent = function (result) {
        this.resultsTable = [];
        var odds = result.last.odds;
        for (var i = 0; i < this.tiers.length; i++) {
            var resultTable = new models_1.ResultTable();
            resultTable.tier = this.tiers[i];
            resultTable.match = this.matches[i];
            resultTable.winners = odds[this.ranks[i]].winners + "x";
            resultTable.amount = "€" + odds[this.ranks[i]].prize;
            this.resultsTable.push(resultTable);
        }
    };
    EuroJackpotComponent.prototype.getLotteryNumbers = function (result) {
        this.numbers = result.last.numbers;
        this.euroNumbers = result.last.euroNumbers;
    };
    EuroJackpotComponent = __decorate([
        core_1.Component({
            selector: 'euroJackpotContent',
            templateUrl: './eurojackpot.component.html',
            styleUrls: ['./eurojackpot.component.css']
        })
    ], EuroJackpotComponent);
    return EuroJackpotComponent;
}());
exports.EuroJackpotComponent = EuroJackpotComponent;
//# sourceMappingURL=eurojackpot.component.js.map