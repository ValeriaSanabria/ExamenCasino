"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino(pNombre, pRuleta, pBlackjack, pTragamonedas4, pTragamonedas5) {
        this.nombre = pNombre;
        this.blackjack = pBlackjack;
        this.ruleta = pRuleta;
        this.tragamonedas4 = pTragamonedas4;
        this.tragamonedas5 = pTragamonedas5;
    }
    Casino.prototype.iniciarBlackjack = function (pBlackjack, pUsuario) {
        pBlackjack.iniciarJuegoBlackJack(pUsuario);
    };
    Casino.prototype.iniciarRuleta = function (pRuleta, pUsuario) {
        pRuleta.iniciarJuegoRuleta(pUsuario);
    };
    Casino.prototype.inciarTragamonedas4 = function (pTragamonedas4, pUsuario) {
        pTragamonedas4.iniciarJuego(pUsuario);
    };
    Casino.prototype.inciarTragamonedas5 = function (pTragamonedas5, pUsuario) {
        pTragamonedas5.iniciarJuego(pUsuario);
    };
    Casino.prototype.mostrarEstadisticasBlackjack = function (pBlackjack) {
        pBlackjack.generarEstadisticas();
    };
    return Casino;
}());
exports.Casino = Casino;
