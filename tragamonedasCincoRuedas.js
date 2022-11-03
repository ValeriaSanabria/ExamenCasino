"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Tragamonedas5 = void 0;
var abstractTragamonedas_1 = require("./abstractTragamonedas");
var Tragamonedas5 = /** @class */ (function (_super) {
    __extends(Tragamonedas5, _super);
    function Tragamonedas5(pSaldo) {
        return _super.call(this, pSaldo) || this;
    }
    Tragamonedas5.prototype.getSaldo = function () {
        return this.saldo;
    };
    Tragamonedas5.prototype.restarApuesta = function (pSaldo) {
        this.saldo = pSaldo - 20;
        return this.saldo;
    };
    Tragamonedas5.prototype.acreditarPremioDosAciertos = function (pSaldo) {
        this.saldo = pSaldo + 500;
        return this.saldo;
    };
    Tragamonedas5.prototype.acreditarPremioTresAciertos = function (pSaldo) {
        this.saldo = pSaldo + 1000;
        return this.saldo;
    };
    Tragamonedas5.prototype.acreditarPremioCuatroAciertos = function (pSaldo) {
        this.saldo = pSaldo + 2000;
        return this.saldo;
    };
    Tragamonedas5.prototype.acreditarPremioCincoAciertos = function (pSaldo) {
        this.saldo = pSaldo + 3000;
        return this.saldo;
    };
    Tragamonedas5.prototype.iniciarJuego = function () {
        var readlineSync = require('readline-sync');
        var rueda1 = 0;
        var rueda2 = 0;
        var rueda3 = 0;
        var rueda4 = 0;
        var rueda5 = 0;
        console.log("Bienvenido al Tragamonedas de cinco ruedas...");
        var inicio = readlineSync.question("Desea Jugar Ya?...");
        while (inicio === "si" || inicio === "no") {
            if (inicio === "no") {
                console.log("Gracias... vuelva pronto.");
                break;
            }
            else if (inicio === "si") {
                this.restarApuesta(this.saldo);
                rueda1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
                rueda2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
                rueda3 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
                rueda4 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
                rueda5 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
                console.log(rueda1, rueda2, rueda3, rueda4, rueda5);
            }
            if (rueda1 === rueda2 && rueda2 === rueda3 && rueda3 === rueda4 && rueda4 === rueda5) {
                console.log("Gano 3000");
                this.acreditarPremioCincoAciertos(this.saldo);
                console.log("Su saldo es: ", this.saldo);
            }
            else if (rueda1 === rueda2 && rueda2 === rueda3 && rueda3 === rueda4) {
                console.log("Gano 2000");
                this.acreditarPremioCuatroAciertos(this.saldo);
                console.log("Su saldo es: ", this.saldo);
            }
            else if (rueda1 === rueda2 && rueda2 === rueda3) {
                console.log("Gano 1000");
                this.acreditarPremioTresAciertos(this.saldo);
                console.log("Su saldo es: ", this.saldo);
            }
            else if (rueda1 === rueda2) {
                console.log("Gano 500");
                this.acreditarPremioDosAciertos(this.saldo);
                console.log("Su saldo es: ", this.saldo);
            }
            else {
                console.log("Siga Participando...");
                console.log("Su saldo es: ", this.saldo);
            }
            inicio = readlineSync.question("Desea jugar de nuevo? ");
        }
    };
    return Tragamonedas5;
}(abstractTragamonedas_1.Tragamonedas));
exports.Tragamonedas5 = Tragamonedas5;
