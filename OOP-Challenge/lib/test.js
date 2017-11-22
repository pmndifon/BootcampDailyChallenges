"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _chai = require("chai");

var chai = _interopRequireWildcard(_chai);

var _app = require("./app.js");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var assert = chai.assert;

// Test for Mobile Phone Class
describe('MobilePhone', function () {
    var Nokia110 = new _app2.default("Nokia 108", "093728638567899", 2);
    it('Should return an object', function () {
        assert.typeOf(Nokia110, 'object');
    });

    it('Should return 2 if Nokia110.simSlot', function () {
        assert.equal(Nokia110.simSlot, 2);
    });

    it('Should return a string of Nokia110.name', function () {
        assert.typeOf(Nokia110.name, 'string');
    });

    it('Should return a 15 characters for Nokia110.imeiNum', function () {
        assert.lengthOf(Nokia110.imeiNum, 15);
    });

    it('should be an instance of the MobilePhone class', function () {
        assert.instanceOf(Nokia110, _app2.default, 'Nokia 110 is an instance of MobilePhone');
    });

    // Test for SmartPhone Class
    describe('MobilePhone', function () {
        var iPhone6 = new _app.SmartPhone("iPhone 6", "87394093873281", 0);

        it('should return invalid input if name is not string', function () {
            var iPhone5s = new _app.SmartPhone(25, "87394093873281", 1);
            assert.assert.equal(iPhone5s.error, 'invalid input');
        });

        it('Should return number if iPhone6.batteryLife', function () {
            assert.typeOf(iPhone6.batteryLife, 'number');
        });

        it('Should return an array for iPhone6.bowsers', function () {
            assert.typeOf(iPhone6.browsers, 'array');
        });

        it('Should return invalid input for iPhone6.browsers = 6', function () {
            // Method call to add entry to array property of object
            iPhone6.browsers = 6;
            var browsers = iPhone6.browsers; // assigns the content of the array to browsers

            assert.include(
            // this return the type of every element in array...
            browsers.map(function (el) {
                return typeof el === "undefined" ? "undefined" : _typeof(el);
            }), "number", 'array should not contain number'); // ...and checks if a "number" is in it
        });

        it('should be an instance of the SmartPhone class', function () {
            assert.instanceOf(iPhone6, _app.SmartPhone, 'Iphone 6 is an instance of SmartPhone');
        });

        it('should be sim cannot be 0', function () {
            assert.equal(iPhone6.simSlot, 0, 'Sim slot cannot be 0');
        });
    });
});