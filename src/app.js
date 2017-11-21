'use strict'


module.exports = {

    words: (myWords) => {

        if (typeof (myWords) != 'string' || typeof (myWords) === null) {
            return undefined;
        }

        let word = myWords.toLowerCase().split(" ");
        let countsObj = {};

        for (let element of word) {
            element in countsObj ? countsObj[element] += 1 : countsObj[element] = 1;
        }

        return JSON.stringify(countsObj);
    }

}
