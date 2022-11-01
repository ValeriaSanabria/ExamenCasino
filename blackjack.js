"use strict";
exports.__esModule = true;
exports.Blackjack = void 0;
var main_1 = require("./main");
var fs = require("fs");
var Blackjack = /** @class */ (function () {
    function Blackjack() {
        this.totalSumaUsuario = 0;
        this.totalSumaBanca = 0;
        this.carta = 0;
        this.manual = fs.readFileSync('manualBlackjack.txt', 'utf8');
        this.cantDineroApostado = 0;
        this.cantEmpate = 0;
        this.cantGanadasBancas = 0;
        this.cantPerdidasBanca = 0;
        this.totalDineroEntregado = 0;
    }
    Blackjack.prototype.getPremio = function (pApuesta) {
        var premio = pApuesta * 2;
        return premio;
    };
    Blackjack.prototype.devolverApuesta = function (pUsuario, pApuesta) {
        var saldo = pUsuario.getSaldo() + pApuesta;
        return saldo;
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
    Blackjack.prototype.iniciarJuegoBlackJack = function (pUsuario) {
        var respuesta = "si";
        while (respuesta === "si" || respuesta === "no") {
            if (respuesta === "no") {
                console.log("Salio de BlackJack");
                break;
            }
            else if (respuesta === "si") {
                console.log(this.manual);
                var pApuesta = main_1.readlineSync.question("Inicia su apuesta: ");
                if (pApuesta > pUsuario.getSaldo()) {
                    console.log("Lo siento, fondo insuficiente, adios");
                    break;
                }
                else {
                    this.resetearJuego();
                    this.ingresarApuesta(pApuesta, pUsuario);
                    console.log("Bienvenido a BlackJack");
                    console.log("Carta: ", this.carta = this.pedirCartaAleatoria());
                    console.log("Total: ", this.totalSumaUsuario += this.carta);
                    respuesta = main_1.readlineSync.question("Desea pedir otra carta? ");
                    while (respuesta === "si" || respuesta === "no") {
                        if (respuesta === "no") {
                            console.log("Usted se planta con: ", this.totalSumaUsuario);
                            break;
                        }
                        else if (respuesta === "si") {
                            console.log("Carta: ", this.carta = this.pedirCartaAleatoria());
                            console.log("Total: ", this.totalSumaUsuario += this.carta);
                            if (this.totalSumaUsuario > 21) {
                                console.log("Superaste los 21, has perdido.");
                                console.log("Fin del juego");
                                console.log("Su saldo es: ", pUsuario.getSaldo());
                                this.cantGanadasBancas += 1 * 1;
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
                        console.log("Carta: ", this.carta = this.pedirCartaAleatoria());
                        console.log("Total de la banca: ", this.totalSumaBanca += this.carta);
                        while (this.totalSumaBanca < 17) {
                            console.log("Carta: ", this.carta = this.pedirCartaAleatoria());
                            console.log("Total de la banca: ", this.totalSumaBanca += this.carta);
                        }
                        if (this.totalSumaBanca === this.totalSumaUsuario) {
                            console.log("Empate");
                            console.log("Su saldo es:", pUsuario.cobrarEmpate(pApuesta));
                            this.cantEmpate += 1 * 1;
                            this.totalDineroEntregado += pApuesta * 1;
                        }
                        else if ((this.totalSumaBanca > this.totalSumaUsuario) && (this.totalSumaBanca < 22)) {
                            console.log("La banca gana");
                            console.log("Su saldo es:", pUsuario.getSaldo());
                            this.cantGanadasBancas += 1 * 1;
                        }
                        else {
                            console.log("Ganaste: $", this.getPremio(pApuesta));
                            console.log("Su saldo es: ", pUsuario.sumarSaldo(pApuesta));
                            this.cantPerdidasBanca += 1 * 1;
                            this.totalDineroEntregado += this.getPremio(pApuesta);
                        }
                    }
                    respuesta = main_1.readlineSync.question("Desea jugar de nuevo? ");
                    this.cantDineroApostado += pApuesta * 1;
                }
            }
        }
    };
    Blackjack.prototype.generarEstadisticas = function () {
        fs.writeFileSync('datosEstadisticosBlackjack.txt', "\n" + "         Datos recolectados" + "\n" + "Victorias de la Banca: " + this.cantGanadasBancas + "\n" + "Perdidas de la Banca: " + this.cantPerdidasBanca + "\n" + "Empates: " + this.cantEmpate + "\n" + "Total de dinero recaudado: $" + this.cantDineroApostado + "\n" + "Total de dinero entregado: $" + this.totalDineroEntregado + "\n");
        console.log(fs.readFileSync('datosEstadisticosBlackjack.txt', 'utf8'));
    };
    return Blackjack;
}());
exports.Blackjack = Blackjack;
