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
exports.Tragamonedas4 = void 0;
var abstractTragamonedas_1 = require("./abstractTragamonedas");
var Tragamonedas4 = /** @class */ (function (_super) {
    __extends(Tragamonedas4, _super);
    function Tragamonedas4(psaldo) {
        return _super.call(this, psaldo) || this;
    }
    Tragamonedas4.prototype.getSaldo = function () {
        return this.saldo;
    };
    Tragamonedas4.prototype.ingresarApuesta = function () {
    };
    Tragamonedas4.prototype.iniciarJuego = function () {
        var readlineSync = require('readline-sync');
        var rueda1 = 0;
        var rueda2 = 0;
        var rueda3 = 0;
        var rueda4 = 0;
        console.log("Bienvenido al Tragamonedas de cuatro ruedas...");
        var inicio = readlineSync.question("Desea Jugar Ya?...");
        if (inicio === "si") {
            rueda1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            rueda2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            rueda3 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            rueda4 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            console.log(rueda1, rueda2, rueda3, rueda4);
            if (rueda1 === rueda2 && rueda2 === rueda3 && rueda3 === rueda4) {
                console.log("Gano 1000");
            }
            else if (rueda1 === rueda2 && rueda2 === rueda3) {
                console.log("Gano 500");
            }
            else if (rueda1 === rueda2) {
                console.log("Gano 200");
            }
            else {
                console.log("Siga Participando...");
            }
        }
        else {
            console.log("Gracias por su visita...");
        }
    };
    Tragamonedas4.prototype.entregarPremio = function (psaldoUsuario) {
    };
    return Tragamonedas4;
}(abstractTragamonedas_1.Tragamonedas));
exports.Tragamonedas4 = Tragamonedas4;
var tragamonedas1 = new Tragamonedas4(100);
tragamonedas1.iniciarJuego();