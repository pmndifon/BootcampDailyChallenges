import * as chai from "chai";
import MobilePhone from "../src/app.js";
import { SmartPhone } from "../src/app.js";

let assert = chai.assert;

// Test for Mobile Phone Class
describe('MobilePhone', () => {
    const Nokia110 = new MobilePhone("Nokia 108", "093728638567899", 2);
    it('Should return an object', () => {
        assert.typeOf(Nokia110, 'object');
    })

    it('Should return 2 if Nokia110.simSlot', () => {
        assert.equal(Nokia110.simSlot, 2);
    })

    it('Should return a string of Nokia110.name', () => {
        assert.typeOf(Nokia110.name, 'string');
    })

    it('Should return a 15 characters for Nokia110.imeiNum', () => {
        assert.lengthOf(Nokia110.imeiNum, 15);
    })

    it('should be an instance of the MobilePhone class', () => {
        assert.instanceOf(Nokia110, MobilePhone, 'Nokia 110 is an instance of MobilePhone')
    });

    // Test for SmartPhone Class
    describe('MobilePhone', () => {
        const iPhone6 = new SmartPhone("iPhone 6", "87394093873281", 0);

        it('should return invalid input if name is not string', () => {
            const iPhone5s = new SmartPhone(25, "87394093873281", 1);
            assert.assert.equal(iPhone5s.error, 'invalid input');
        });

        it('Should return number if iPhone6.batteryLife', () => {
            assert.typeOf(iPhone6.batteryLife, 'number');
        })

        it('Should return an array for iPhone6.bowsers', () => {
            assert.typeOf(iPhone6.browsers, 'array');
        })

        it('Should return invalid input for iPhone6.browsers = 6', function () {
            // Method call to add entry to array property of object
            iPhone6.browsers = 6;
            let browsers = iPhone6.browsers; // assigns the content of the array to browsers

            assert.include(
                // this return the type of every element in array...
                browsers.map(function (el) {
                    return typeof (el);
                }), "number", 'array should not contain number'); // ...and checks if a "number" is in it
        });

        it('should be an instance of the SmartPhone class', () => {
            assert.instanceOf(iPhone6, SmartPhone, 'Iphone 6 is an instance of SmartPhone')
        });

        it('should be sim cannot be 0', () => {
            assert.equal(iPhone6.simSlot, 0, 'Sim slot cannot be 0')
        });
    });

});