"use strict";

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _app = require("../src/app.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Test for Mobile Phone Class
describe('MobilePhones', function () {

    describe('Checking output', function () {
        var nokia108 = new _app.MobilePhone("Nokia 108", "0937286388", 2);
        it('Should return an object nokia108.simSlot as 2', function () {
            _chai2.default.deepEqual(nokia108.simSlot, 2);
        });
    });
});