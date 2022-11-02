"use strict";
exports.__esModule = true;
exports.Ruleta = void 0;
var main_1 = require("./main");
var fs = require("fs");
var Ruleta = /** @class */ (function () {
    function Ruleta() {
        this.numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
        this.numRojo = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
        this.numNegro = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
        this.manual = fs.readFileSync('manualRuleta.txt', 'utf8');
    }
    Ruleta.prototype.getNumeros = function () {
        return this.numeros;
    };
    Ruleta.prototype.getNumRojo = function () {
        return this.numRojo;
    };
    Ruleta.prototype.getNumNegro = function () {
        return this.numNegro;
    };
    Ruleta.prototype.girarRuleta = function () {
        var numero;
        numero = Math.floor(Math.random() * (37 - 0)) + 0;
        return numero;
    };
    Ruleta.prototype.entregarPremio = function (pApuesta) {
        return pApuesta * 36;
    };
    Ruleta.prototype.iniciarJuegoRuleta = function (pUsuario, pApuesta) {
        var opcion = "si";
        while (opcion === "si" || opcion === "no") {
            if (opcion === "no") {
                console.log("Usted se retira con un saldo: $", pUsuario.getSaldo());
                break;
            }
            else if (opcion === "si") {
                console.log(this.manual);
                var respuesta = main_1.readlineSync.questionInt("A que numero desea apostar? ");
                pUsuario.restarSaldo(pApuesta);
                var numero = this.girarRuleta();
                console.log("El numero de la ruleta es: " + numero);
                if (numero === respuesta) {
                    console.log("Usted gana: $", this.entregarPremio(pApuesta));
                }
                else {
                    console.log("La casa gana");
                    console.log("Su saldo actual es: $" + pUsuario.getSaldo());
                }
            }
            opcion = main_1.readlineSync.question("Desea jugar de nuevo? ");
        }
    };
    return Ruleta;
}());
exports.Ruleta = Ruleta;
