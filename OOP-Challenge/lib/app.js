'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MobilePhone = function () {
    function MobilePhone(name, imeiNum, simSlot) {
        _classCallCheck(this, MobilePhone);

        if (typeof name !== 'string') {
            this.error = 'invalid input';
        }

        // Abstraction
        this._name = name;
        this._imeiNum = imeiNum;
        this._simSlot = simSlot;
        this._batteryLife = 100;
    }

    _createClass(MobilePhone, [{
        key: 'dial',
        value: function dial() {
            this.batteryLife = Math.floor(Math.random() * 50 + 1);
            return this.name + ' Caling! Battery life is now ' + this.batteryLife + ' percent';
        }
    }, {
        key: 'shareFile',
        value: function shareFile() {
            return 'File sharing with bluetooth';
        }
    }, {
        key: 'batteryLife',
        set: function set(value) {
            this._batteryLife -= value;
        },
        get: function get() {
            return this._batteryLife <= 0 ? 0 : this._batteryLife;
        }
    }, {
        key: 'name',
        get: function get() {
            return this._name;
        }
    }, {
        key: 'imeiNum',
        get: function get() {
            return this._imeiNum;
        }
    }, {
        key: 'simSlot',
        get: function get() {
            return this._simSlot;
        }
    }]);

    return MobilePhone;
}();

// Inheritance is at play here


exports.default = MobilePhone;

var SmartPhone = function (_MobilePhone) {
    _inherits(SmartPhone, _MobilePhone);

    function SmartPhone(name, imeiNum, batteryLife, camera) {
        _classCallCheck(this, SmartPhone);

        var _this = _possibleConstructorReturn(this, (SmartPhone.__proto__ || Object.getPrototypeOf(SmartPhone)).call(this, name, imeiNum, batteryLife));

        _this._camera = camera;
        _this._browsers = ['Chrome'];
        return _this;
    }

    // Browser method


    _createClass(SmartPhone, [{
        key: 'browse',
        value: function browse() {
            this.batteryLife = Math.floor(Math.random() * 80 + 1);
            return this.name + ' browsing! Battery life now ' + this.batteryLife + ' percent';
        }

        // File sharing method

    }, {
        key: 'shareFile',
        value: function shareFile() {
            return 'File Sharing with wifi';
        }

        // Setter methods

    }, {
        key: 'browsers',
        set: function set(browserName) {
            this._browsers.push(browserName);
        }

        // Getter methods
        ,
        get: function get() {
            return this._browsers;
        }
    }]);

    return SmartPhone;
}(MobilePhone);

exports.SmartPhone = SmartPhone;