"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("./app.po");
describe('lottoland App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.LottolandPage();
    });
    it('should display welcome message', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to app!');
    });
});
