"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino(pNombre, pFondos, pBlackjack, pRuleta) {
        this.nombre = pNombre;
        this.fondos = pFondos;
        this.blackjack = pBlackjack;
        this.ruleta = pRuleta;
    }
    Casino.prototype.iniciarBlack = function (pBlackjack, pUsuario) {
        pBlackjack.iniciarJuegoBlackJack(pUsuario);
    };
    Casino.prototype.iniciarRuleta = function (pRuleta, pUsuario, pApuesta) {
        pRuleta.iniciarJuegoRuleta(pUsuario, pApuesta);
    };
    return Casino;
}());
exports.Casino = Casino;
