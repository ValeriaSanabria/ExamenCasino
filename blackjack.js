"use strict";
exports.__esModule = true;
exports.Blackjack = void 0;
var main_1 = require("./main");
var Blackjack = /** @class */ (function () {
    function Blackjack() {
        this.totalSumaUsuario = 0;
        this.totalSumaBanca = 0;
        this.apuesta = 0;
    }
    Blackjack.prototype.getPremio = function (pApuesta) {
        var premio = pApuesta * 2;
        return premio;
    };
    Blackjack.prototype.resetearJuego = function () {
        this.totalSumaBanca = 0;
        this.totalSumaUsuario = 0;
    };
    Blackjack.prototype.ingresarApuesta = function (pApuesta, pUsuario) {
        pUsuario.restarSaldo(pApuesta);
    };
    Blackjack.prototype.pedirCartaAleatoria = function () {
        var carta;
        carta = Math.floor(Math.random() * (14 - 1)) + 1;
        return carta;
    };
    Blackjack.prototype.iniciarJuegoBlackJack = function (pApuesta, pUsuario) {
        var respuesta = "si";
        while (respuesta === "si" || respuesta === "no") {
            if (respuesta === "no") {
                console.log("Salio de BlackJack");
                break;
            }
            else if (respuesta === "si") {
                this.resetearJuego();
                this.ingresarApuesta(pApuesta, pUsuario);
                console.log("Bienvenido a BlackJack");
                var carta = this.pedirCartaAleatoria();
                console.log("Carta: ", carta);
                console.log("Total: ", this.totalSumaUsuario += carta);
                respuesta = main_1.readlineSync.question("Desea pedir otra carta? ");
                while (respuesta === "si" || respuesta === "no") {
                    if (respuesta === "no") {
                        console.log("Usted se planta con: ", this.totalSumaUsuario);
                        break;
                    }
                    else if (respuesta === "si") {
                        carta = this.pedirCartaAleatoria();
                        console.log("Carta: ", carta);
                        console.log("Total: ", this.totalSumaUsuario += carta);
                        if (this.totalSumaUsuario > 21) {
                            console.log("Superaste los 21, has perdido.");
                            console.log("Fin del juego");
                            console.log("Su saldo es: ", pUsuario.getSaldo());
                            break;
                        }
                        else if (this.totalSumaUsuario === 21) {
                            console.log("Felicidades BlackJack");
                            break;
                        }
                    }
                    else {
                        console.log("Dato invalido ");
                    }
                    respuesta = main_1.readlineSync.question("Desea pedir otra carta? ");
                }
                if (this.totalSumaUsuario <= 21) {
                    console.log("......Ahora juega la banca......");
                    carta = this.pedirCartaAleatoria();
                    console.log("Carta: ", carta);
                    console.log("Total de la banca: ", this.totalSumaBanca += carta);
                    while (this.totalSumaBanca < 17) {
                        carta = this.pedirCartaAleatoria();
                        console.log("Carta: ", carta);
                        console.log("Total de la banca: ", this.totalSumaBanca += carta);
                    }
                    if (this.totalSumaBanca === this.totalSumaUsuario) {
                        console.log("Empate");
                        console.log("Su saldo es:", pUsuario.getSaldo() + pApuesta);
                        break;
                    }
                    else if ((this.totalSumaBanca > this.totalSumaUsuario) && (this.totalSumaBanca < 22)) {
                        console.log("La banca gana");
                        console.log("Su saldo es:", pUsuario.getSaldo());
                        break;
                    }
                    else {
                        console.log("Ganaste: $", this.getPremio(pApuesta));
                        console.log("Su saldo es: ", pUsuario.sumarSaldo(pApuesta));
                    }
                }
                respuesta = main_1.readlineSync.question("Desea jugar de nuevo? ");
            }
        }
    };
    return Blackjack;
}());
exports.Blackjack = Blackjack;
