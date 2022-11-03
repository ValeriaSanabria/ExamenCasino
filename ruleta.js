"use strict";
exports.__esModule = true;
exports.Ruleta = void 0;
var main_1 = require("./main");
var Ruleta = /** @class */ (function () {
    function Ruleta() {
        this.numero = 0;
        this.apuesta = 0;
        this.numeroApostado = 0;
    }
    Ruleta.prototype.getNumero = function () {
        return this.numero;
    };
    Ruleta.prototype.girarRuleta = function () {
        this.numero = Math.floor(Math.random() * (37 - 0)) + 0;
        return this.numero;
    };
    Ruleta.prototype.entregarPremio = function (pApuesta) {
        return pApuesta * 36;
    };
    Ruleta.prototype.iniciarJuegoRuleta = function (pUsuario) {
        console.log("Bienvenido a la Ruleta");
        var opcion = "si";
        while (opcion === "si" || opcion === "no") {
            if (opcion === "no") {
                console.log("Usted se retira con un saldo: $", pUsuario.getSaldo());
                break;
            }
            else if (opcion === "si") {
                this.apuesta = main_1.readlineSync.question("Ingrese el monto a apostar: ");
                pUsuario.restarSaldo(this.apuesta);
                this.numeroApostado = main_1.readlineSync.questionInt("A que numero desea apostar? ");
                this.numero = this.girarRuleta();
                console.log("El numero de la ruleta es: ", this.getNumero());
                if (this.numero === this.numeroApostado) {
                    console.log("Usted gana: $", this.entregarPremio(this.apuesta));
                }
                else {
                    console.log("La casa gana");
                    console.log("Su saldo actual es: $", pUsuario.getSaldo());
                }
            }
            opcion = main_1.readlineSync.question("Desea jugar de nuevo? ");
        }
    };
    return Ruleta;
}());
exports.Ruleta = Ruleta;
