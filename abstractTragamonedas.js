"use strict";
exports.__esModule = true;
exports.Tragamonedas = void 0;
var Tragamonedas = /** @class */ (function () {
    function Tragamonedas(pCantRuedas) {
        this.listaRuedas = [];
        this.cantRuedas = pCantRuedas;
        this.cantJugadas = 0;
        this.premiosPagados = 0;
        this.dineroRecaudado = 0;
        this.apuesta;
        this.inicio = "";
    }
    Tragamonedas.prototype.girarRuedas = function (pCantRuedas) {
        for (var i = 0; i < pCantRuedas; i++) {
            this.listaRuedas[i] = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        }
        this.cantJugadas += 1 * 1;
        this.dineroRecaudado += this.apuesta;
        console.log(this.listaRuedas);
    };
    Tragamonedas.prototype.iniciarJuego = function (pUsuario) {
    };
    return Tragamonedas;
}());
exports.Tragamonedas = Tragamonedas;
