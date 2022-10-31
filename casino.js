"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino(pBlackjack) {
        this.blackjack = pBlackjack;
    }
    Casino.prototype.iniciarBlack = function (pBlackjack, pApuesta, pUsuario) {
        pBlackjack.iniciarJuegoBlackJack(pApuesta, pUsuario);
    };
    Casino.prototype.habilitarJugador = function () {
    };
    Casino.prototype.obtenerPerdida = function () {
    };
    Casino.prototype.obtenerGanancia = function () {
    };
    return Casino;
}());
exports.Casino = Casino;
