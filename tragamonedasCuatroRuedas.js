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
exports.TragamonedasCuatroRuedas = void 0;
var abstractTragamonedas_1 = require("./abstractTragamonedas");
var main_1 = require("./main");
var fs = require("fs");
var TragamonedasCuatroRuedas = /** @class */ (function (_super) {
    __extends(TragamonedasCuatroRuedas, _super);
    function TragamonedasCuatroRuedas(pCantRuedas) {
        var _this = _super.call(this, pCantRuedas) || this;
        _this.cantRuedas = pCantRuedas;
        _this.apuesta = 10;
        return _this;
    }
    TragamonedasCuatroRuedas.prototype.girarRuedas = function (pCantRuedas) {
        for (var i = 0; i < pCantRuedas; i++) {
            this.listaRuedas[i] = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        }
        this.cantJugadas += 1 * 1;
        this.dineroRecaudado += this.apuesta;
        console.log(this.listaRuedas);
    };
    TragamonedasCuatroRuedas.prototype.acreditarPremioDosAciertos = function (pUsuario) {
        pUsuario.sumarSaldo(500);
        this.premiosPagados += 500 * 1;
        console.log("Gano $ 500");
    };
    TragamonedasCuatroRuedas.prototype.acreditarPremioTresAciertos = function (pUsuario) {
        pUsuario.sumarSaldo(1000);
        this.premiosPagados += 1000 * 1;
        console.log("Gano $ 1000");
    };
    TragamonedasCuatroRuedas.prototype.acreditarPremioCuatroAciertos = function (pUsuario) {
        pUsuario.sumarSaldo(2000);
        this.premiosPagados += 2000 * 1;
        console.log("Gano $ 2000");
    };
    TragamonedasCuatroRuedas.prototype.mostrarEstadisticasTragamonedas4 = function () {
        fs.writeFileSync('estadisticasTragamonedas4.txt', "\n" + "         Datos recolectados" + "\n" + "Dinero Recaudado: $ " + this.dineroRecaudado + "\n" + "Premio Pagado: $ " + this.premiosPagados + "\n" + "Cantidad de veces jugadas: " + this.cantJugadas + "\n");
        console.log(fs.readFileSync('estadisticasTragamonedas4.txt', 'utf8'));
    };
    TragamonedasCuatroRuedas.prototype.resetearEstidisticasCuatroRuedas = function () {
        fs.writeFileSync('estadisticasTragamonedas4.txt', " ");
    };
    TragamonedasCuatroRuedas.prototype.iniciarJuego = function (pUsuario) {
        console.log("Bienvenido al Tragamonedas de cuatro ruedas...");
        console.log(fs.readFileSync('manualTragamonedasSimple.txt', 'utf8'));
        this.inicio = main_1.readlineSync.question("Desea Jugar ?...");
        while (this.inicio == "si" || this.inicio == "no") {
            if (this.inicio == "no") {
                console.log("Gracias... vuelva pronto.");
                break;
            }
            else if (this.inicio == "si") {
                if (this.apuesta > pUsuario.getSaldo()) {
                    console.log("Lo siento, fondo insuficiente, adios");
                    break;
                }
                else {
                    pUsuario.restarSaldo(this.apuesta);
                    this.girarRuedas(this.cantRuedas);
                }
                if (this.listaRuedas[0] == this.listaRuedas[1] && this.listaRuedas[1] == this.listaRuedas[2] && this.listaRuedas[2] == this.listaRuedas[3]) {
                    this.acreditarPremioCuatroAciertos(pUsuario);
                    console.log("Su saldo es: $ ", pUsuario.getSaldo());
                }
                else if (this.listaRuedas[0] == this.listaRuedas[1] && this.listaRuedas[1] == this.listaRuedas[2]) {
                    this.acreditarPremioTresAciertos(pUsuario);
                    console.log("Su saldo es: $ ", pUsuario.getSaldo());
                }
                else if (this.listaRuedas[0] == this.listaRuedas[1]) {
                    this.acreditarPremioDosAciertos(pUsuario);
                    console.log("Su saldo es: $ ", pUsuario.getSaldo());
                }
                else {
                    console.log("Siga Participando...");
                    console.log("Su saldo es: $", pUsuario.getSaldo());
                }
            }
            else {
                console.log("Dato invalido");
            }
            this.inicio = main_1.readlineSync.question("Desea Jugar ?...");
        }
    };
    return TragamonedasCuatroRuedas;
}(abstractTragamonedas_1.Tragamonedas));
exports.TragamonedasCuatroRuedas = TragamonedasCuatroRuedas;
