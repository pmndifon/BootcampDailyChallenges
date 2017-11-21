'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _app = require('./app.js');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var myWords = myWords;

describe("Words", function () {

    describe("Handling Output", function () {
        it('Checking single word output', function () {
            _chai2.default.notStrictEqual({ hello: 1 }, myApp.words("hello"));
        });
    });

    describe("Handling Output", function () {
        it('Checking multiple word output', function () {
            _chai2.default.notStrictEqual({ hello: 1, please: 1, hi: 2, why: 2 }, myApp.words("hello hi please hi why why"));
        });
    });

    describe("Handling Input", function () {
        it('Checking for an empty string', function () {
            myWords = " ";
            _chai2.default.notStrictEqual(myWords, null, undefined);
        });
    });

    describe("Handling Input", function () {
        it('Checking for number', function () {
            myWords = 1234;
            _chai2.default.typeOf(myWords, 'number', undefined);
        });
    });
});