"use strict";
exports.__esModule = true;
exports.math = void 0;
var Math = /** @class */ (function () {
    function Math() {
    }
    Math.prototype.addition = function (a, b) {
        return a + b;
    };
    Math.prototype.subtraction = function (a, b) {
        return a - b;
    };
    Math.prototype.division = function (a, b) {
        return a / b;
    };
    Math.prototype.multiplication = function (a, b) {
        return a * b;
    };
    Math.prototype.sqr = function (a) {
        return a * a;
    };
    Math.prototype.sqrt = function (a) {
    };
    Math.prototype.oneDivToNumber = function (a) {
    };
    return Math;
}());
exports.math = new Math();
