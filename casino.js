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
    Casino.prototype.inciarTragamonedas4 = function (pUsuario) {
        this.tragamonedas4.iniciarJuego(pUsuario);
    };
    Casino.prototype.inciarTragamonedas5 = function (pUsuario) {
        this.tragamonedas5.iniciarJuego(pUsuario);
    };
    Casino.prototype.mostrarEstadisticasBlackjack = function (pBlackjack) {
        pBlackjack.generarEstadisticas();
    };
    Casino.prototype.mostrarEstadisticasTragamonedas4 = function () {
        this.tragamonedas4.mostrarEstadisticasTragamonedas4();
    };
    Casino.prototype.mostrarEstadisticasTragamonedas5 = function () {
        this.tragamonedas5.mostrarEstadisticasTragamonedas5();
    };
    return Casino;
}());
exports.Casino = Casino;
