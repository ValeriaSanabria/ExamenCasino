"use strict";
exports.__esModule = true;
exports.Blackjack = void 0;
var main_1 = require("./main");
var Blackjack = /** @class */ (function () {
    function Blackjack(pPremio) {
        this.premio = pPremio;
        this.totalSumaUsuario = 0;
        this.totalSumaBanca = 0;
    }
    Blackjack.prototype.getPremio = function () {
        return this.premio;
    };
    Blackjack.prototype.setPremio = function (pPremio) {
        this.premio = pPremio;
    };
    Blackjack.prototype.ingresarApuesta = function (pSaldo) {
        this.premio = this.premio + pSaldo;
    };
    Blackjack.prototype.finalizarJuego = function () {
        console.log("El juego ha finalizado");
    };
    Blackjack.prototype.pedirCartaAleatoria = function () {
        var carta;
        carta = Math.floor(Math.random() * (14 - 1)) + 1;
        return carta;
    };
    Blackjack.prototype.iniciarJuego = function () {
        console.log("Bienvenido a BlackJack");
        this.totalSumaUsuario += this.pedirCartaAleatoria();
        console.log("Total: ", this.totalSumaUsuario);
        var respuesta = main_1.readlineSync.question("Desea pedir otra carta? ");
        while (respuesta === "si" || respuesta === "no") {
            if (respuesta === "no") {
                console.log("Usted se planta con: ", this.totalSumaUsuario);
                break;
            }
            else if (respuesta === "si") {
                this.totalSumaUsuario += this.pedirCartaAleatoria();
                console.log("total: ", this.totalSumaUsuario);
                if (this.totalSumaUsuario > 21) {
                    console.log("Superaste los 21, has perdido.");
                    break;
                }
                else if (this.totalSumaUsuario === 21) {
                    console.log("Felicidades BlackJack");
                    break;
                }
            }
            respuesta = main_1.readlineSync.question("Desea pedir otra carta? ");
        }
        if (this.totalSumaUsuario === 21 || this.totalSumaUsuario > 21) {
            console.log("Fin del juego");
        }
        else if (this.totalSumaUsuario < 21) {
            console.log("Ahora juega la banca");
            this.totalSumaBanca += this.pedirCartaAleatoria();
            console.log("Total de la banca: ", this.totalSumaBanca);
            while ((this.totalSumaBanca < this.totalSumaUsuario) && (this.totalSumaBanca < 21)) {
                this.totalSumaBanca += this.pedirCartaAleatoria();
                console.log("Total de la banca: ", this.totalSumaBanca);
            }
            if ((this.totalSumaBanca > this.totalSumaUsuario) && (this.totalSumaBanca <= 21)) {
                console.log("La banca gana");
            }
            else {
                console.log("Ganaste");
            }
        }
    };
    return Blackjack;
}());
exports.Blackjack = Blackjack;
