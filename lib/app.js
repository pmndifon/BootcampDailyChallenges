'use strict';

module.exports = {

    words: function words(myWords) {

        if (typeof myWords != 'string' || typeof myWords === null) {
            return undefined;
        }

        var word = myWords.toLowerCase().split(" ");
        var countsObj = {};

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = word[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var element = _step.value;

                element in countsObj ? countsObj[element] += 1 : countsObj[element] = 1;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return JSON.stringify(countsObj);
    }

};