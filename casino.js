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
    Casino.prototype.getNombre = function () {
        this.nombre;
    };
    Casino.prototype.set = function (pNombre) {
        this.nombre = pNombre;
        return this.nombre;
    };
    Casino.prototype.iniciarBlackjack = function (pUsuario) {
        this.blackjack.iniciarJuegoBlackJack(pUsuario);
    };
    Casino.prototype.iniciarRuleta = function (pUsuario) {
        this.ruleta.iniciarJuegoRuleta(pUsuario);
    };
    Casino.prototype.inciarTragamonedas4 = function (pUsuario) {
        this.tragamonedas4.iniciarJuego(pUsuario);
    };
    Casino.prototype.inciarTragamonedas5 = function (pUsuario) {
        this.tragamonedas5.iniciarJuego(pUsuario);
    };
    Casino.prototype.mostrarEstadisticasBlackjack = function () {
        this.blackjack.mostrarEstadisticas();
    };
    Casino.prototype.mostrarEstadistcasRuleta = function () {
        this.ruleta.mostrarEstadisticas();
    };
    Casino.prototype.mostrarEstadisticasTragamonedas4 = function () {
        this.tragamonedas4.mostrarEstadisticasTragamonedas4();
    };
    Casino.prototype.mostrarEstadisticasTragamonedas5 = function () {
        this.tragamonedas5.mostrarEstadisticasTragamonedas5();
    };
    Casino.prototype.resetearEstadisticas = function () {
        this.ruleta.resetearEstidisticasRuleta();
        this.blackjack.resetearEstidisticasBlackjack();
        this.tragamonedas4.resetearEstidisticasCuatroRuedas();
        this.tragamonedas5.resetearEstidisticasCincoRuedas();
    };
    return Casino;
}());
exports.Casino = Casino;
