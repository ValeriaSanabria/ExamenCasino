"use strict";
exports.__esModule = true;
exports.Blackjack = exports.Banca = void 0;
var readlineSync = require('readline-sync');
var Banca = /** @class */ (function () {
    function Banca() {
    }
    return Banca;
}());
exports.Banca = Banca;
var Blackjack = /** @class */ (function () {
    function Blackjack(pPremio) {
        this.premio = pPremio;
        this.palo = "diamantes";
        this.numeroCarta = 1;
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
        var juego = 0;
        juego += this.pedirCartaAleatoria();
        console.log("Total: ", juego);
        var respuesta = readlineSync.question("Desea pedir otra carta? ");
        while (respuesta === "si" || respuesta === "no") {
            if (respuesta === "no") {
                console.log("Usted se planta con: ", juego);
                break;
            }
            else if (respuesta === "si") {
                juego += this.pedirCartaAleatoria();
                console.log("total: ", juego);
                if (juego > 21) {
                    console.log("Superaste los 21, has perdido.");
                    break;
                }
                else if (juego === 21) {
                    console.log("Felicidades BlackJack");
                    break;
                }
            }
            respuesta = readlineSync.question("Desea pedir otra carta? ");
        }
    };
    return Blackjack;
}());
exports.Blackjack = Blackjack;
var blackjack1 = new Blackjack(500000);
console.log(blackjack1.pedirCartaAleatoria());
blackjack1.iniciarJuego();
