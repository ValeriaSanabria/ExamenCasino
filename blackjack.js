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
        this.manual = fs.readFileSync('asset/manualBlackjack.txt', 'utf8');
        this.cantDineroApostado = 0;
        this.cantEmpate = 0;
        this.cantGanadasBancas = 0;
        this.cantPerdidasBanca = 0;
        this.totalDineroEntregado = 0;
        this.apuesta = 0;
        this.respuesta = "";
        this.premio = 0;
    }
    Blackjack.prototype.getPremio = function () {
        this.premio = this.apuesta * 2;
        return this.premio;
    };
    Blackjack.prototype.ingresarApuesta = function () {
        this.apuesta = main_1.readlineSync.question("Ingrese el monto a apostar: ");
        return this.apuesta;
    };
    Blackjack.prototype.devolverApuesta = function (pUsuario) {
        pUsuario.cobrarEmpate(this.apuesta);
    };
    Blackjack.prototype.resetearJuego = function () {
        this.totalSumaBanca = 0;
        this.totalSumaUsuario = 0;
    };
    Blackjack.prototype.pedirCartaAleatoria = function () {
        this.carta = Math.floor(Math.random() * (14 - 1)) + 1;
        return this.carta;
    };
    Blackjack.prototype.iniciarJuegoBlackjack = function (pUsuario) {
        console.log(this.manual);
        this.respuesta = main_1.readlineSync.question("Desea jugar? ");
        while (this.respuesta == "si" || this.respuesta == "no") {
            if (this.respuesta == "no") {
                console.log("Salio de BlackJack");
                break;
            }
            else if (this.respuesta == "si") {
                this.ingresarApuesta();
                if (this.apuesta > pUsuario.getSaldo()) {
                    console.log("Lo siento, fondo insuficiente, adios");
                    break;
                }
                else {
                    this.resetearJuego();
                    pUsuario.restarSaldo(this.apuesta);
                    console.log("Bienvenido a BlackJack");
                    console.log("Carta: ", this.carta = this.pedirCartaAleatoria());
                    console.log("Total: ", this.totalSumaUsuario += this.carta);
                    this.respuesta = main_1.readlineSync.question("Desea pedir otra carta? ");
                    while (this.respuesta == "si" || this.respuesta == "no") {
                        if (this.respuesta == "no") {
                            console.log("Usted se planta con: ", this.totalSumaUsuario);
                            break;
                        }
                        else if (this.respuesta == "si") {
                            console.log("Carta: ", this.carta = this.pedirCartaAleatoria());
                            console.log("Total: ", this.totalSumaUsuario += this.carta);
                            if (this.totalSumaUsuario > 21) {
                                console.log("Superaste los 21, has perdido.");
                                console.log("Fin del juego");
                                console.log("Su saldo es: ", pUsuario.getSaldo());
                                this.cantGanadasBancas += 1 * 1;
                                break;
                            }
                            else if (this.totalSumaUsuario == 21) {
                                console.log("Felicidades BlackJack");
                                break;
                            }
                        }
                        else {
                            console.log("Dato invalido ");
                        }
                        this.respuesta = main_1.readlineSync.question("Desea pedir otra carta? ");
                    }
                    if (this.totalSumaUsuario <= 21) {
                        console.log("......Ahora juega la banca......");
                        console.log("Carta: ", this.carta = this.pedirCartaAleatoria());
                        console.log("Total de la banca: ", this.totalSumaBanca += this.carta);
                        while (this.totalSumaBanca < 17) {
                            console.log("Carta: ", this.carta = this.pedirCartaAleatoria());
                            console.log("Total de la banca: ", this.totalSumaBanca += this.carta);
                        }
                        if (this.totalSumaBanca == this.totalSumaUsuario) {
                            console.log("Empate");
                            console.log("Su saldo es:", pUsuario.cobrarEmpate(this.apuesta));
                            this.cantEmpate += 1 * 1;
                            this.totalDineroEntregado += this.apuesta * 1;
                        }
                        else if ((this.totalSumaBanca > this.totalSumaUsuario) && (this.totalSumaBanca < 22)) {
                            console.log("La banca gana");
                            console.log("Su saldo es:", pUsuario.getSaldo());
                            this.cantGanadasBancas += 1 * 1;
                        }
                        else {
                            console.log("Ganaste: $", this.getPremio());
                            console.log("Su saldo es: ", pUsuario.sumarSaldo(this.premio));
                            this.cantPerdidasBanca += 1 * 1;
                            this.totalDineroEntregado += this.getPremio();
                        }
                    }
                    this.respuesta = main_1.readlineSync.question("Desea jugar de nuevo? ");
                    this.cantDineroApostado += this.apuesta * 1;
                }
            }
        }
    };
    Blackjack.prototype.mostrarEstadisticas = function () {
        fs.writeFileSync('estadisticasBlackjack.txt', "\n" + "         Datos recolectados" + "\n" + "Victorias de la Banca: " + this.cantGanadasBancas + "\n" + "Perdidas de la Banca: " + this.cantPerdidasBanca + "\n" + "Empates: " + this.cantEmpate + "\n" + "Total de dinero apostado: $" + this.cantDineroApostado + "\n" + "Total de premios pagados: $" + this.totalDineroEntregado + "\n");
        console.log(fs.readFileSync('estadisticasBlackjack.txt', 'utf8'));
    };
    Blackjack.prototype.resetearEstadisticasBlackjack = function () {
        fs.writeFileSync('estadisticasBlackjack.txt', " ");
    };
    return Blackjack;
}());
exports.Blackjack = Blackjack;
