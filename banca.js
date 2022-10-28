"use strict";
exports.__esModule = true;
exports.Banca = void 0;
var Banca = /** @class */ (function () {
    function Banca() {
    }
    Banca.prototype.pedirCartaAleatoria = function () {
        var carta;
        carta = Math.floor(Math.random() * (14 - 1)) + 1;
        return carta;
    };
    return Banca;
}());
exports.Banca = Banca;
