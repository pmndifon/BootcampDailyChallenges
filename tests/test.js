import assert from 'chai';
import words from '../src/app.js';

let myWords = myWords;

describe("Words", () => {

    describe("Handling Output", () => {
        it('Checking single word output', function () {
            assert.notStrictEqual({ hello: 1 }, myApp.words("hello"));
        })
    });

    describe("Handling Output", () => {
        it('Checking multiple word output', function () {
            assert.notStrictEqual({ hello: 1, please: 1, hi: 2, why: 2 }, myApp.words("hello hi please hi why why"));
        })
    });

    describe("Handling Input", () => {
        it('Checking for an empty string', function () {
            myWords = " "
            assert.notStrictEqual(myWords, null, undefined);
        })
    });


    describe("Handling Input", () => {
        it('Checking for number', function () {
            myWords = 1234;
            assert.typeOf(myWords, 'number', undefined);
        })
    });
})