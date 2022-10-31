"use strict";
exports.__esModule = true;
exports.Ruleta = void 0;
var Ruleta = /** @class */ (function () {
    function Ruleta(pColor) {
        this.numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
        this.numRojo = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
        this.numNegro = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
        this.color = pColor;
    }
    Ruleta.prototype.getNumeros = function () {
        return this.numeros;
    };
    Ruleta.prototype.getNumRojo = function () {
        return this.numRojo;
    };
    Ruleta.prototype.getNumNegro = function () {
        return this.numNegro;
    };
    Ruleta.prototype.getColor = function () {
        return this.color;
    };
    return Ruleta;
}());
exports.Ruleta = Ruleta;
