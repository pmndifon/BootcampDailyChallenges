import assert from "chai";
import  SmartPhone } from "../src/app.js";


// Test for Mobile Phone Class
describe('MobilePhone', () => {
    const nokia108 = new MobilePhone("Nokia 108", "0937286388", 2);
    it('Should return an object nokia108.simSlot as 2', () => {
        assert.deepEqual(nokia108.simSlot, 2)
    })
});