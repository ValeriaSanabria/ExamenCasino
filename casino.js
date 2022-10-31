"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino(pNombre, pFondos, pBlackjack) {
        this.nombre = pNombre;
        this.fondos = pFondos;
        this.blackjack = pBlackjack;
    }
    Casino.prototype.iniciarBlack = function (pBlackjack, pApuesta, pUsuario) {
        pBlackjack.iniciarJuegoBlackJack(pApuesta, pUsuario);
    };
    return Casino;
}());
exports.Casino = Casino;
