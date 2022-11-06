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
var main_1 = require("./main");
var fs = require("fs");
var Tragamonedas5 = /** @class */ (function (_super) {
    __extends(Tragamonedas5, _super);
    function Tragamonedas5(pCantRuedas) {
        var _this = _super.call(this, pCantRuedas) || this;
        _this.cantRuedas = pCantRuedas;
        _this.apuesta = 30;
        _this.pozo = 150000;
        return _this;
    }
    Tragamonedas5.prototype.girarRuedas = function (pCantRuedas) {
        for (var i = 0; i < pCantRuedas; i++) {
            this.listaRuedas[i] = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        }
        this.cantJugadas += 1 * 1;
        this.dineroRecaudado += this.apuesta * 0.9;
        console.log(this.listaRuedas);
    };
    Tragamonedas5.prototype.getPozo = function () {
        return this.pozo;
    };
    Tragamonedas5.prototype.SumarPozo = function () {
        this.pozo += this.apuesta * 0.1;
    };
    Tragamonedas5.prototype.acreditarPremioDosAciertos = function (pUsuario) {
        pUsuario.sumarSaldo(1500);
        this.premiosPagados += 1500 * 1;
        console.log("Gano $ 1500");
    };
    Tragamonedas5.prototype.acreditarPremioTresAciertos = function (pUsuario) {
        pUsuario.sumarSaldo(3000);
        this.premiosPagados += 3000 * 1;
        console.log("Gano $ 3000");
    };
    Tragamonedas5.prototype.acreditarPremioCuatroAciertos = function (pUsuario) {
        pUsuario.sumarSaldo(7000);
        this.premiosPagados += 7000 * 1;
        console.log("Gano $ 7000");
    };
    Tragamonedas5.prototype.acreditarPremioCincoAciertos = function (pUsuario) {
        pUsuario.sumarSaldo(30000);
        this.premiosPagados += 30000 * 1;
        console.log("Gano $ 30000");
    };
    Tragamonedas5.prototype.acreditarPremioPozo = function (pUsuario) {
        pUsuario.sumarSaldo(this.pozo);
        this.premiosPagados += this.pozo * 1;
        console.log("Gano el pozo de: $ ", this.pozo);
    };
    Tragamonedas5.prototype.mostrarEstadisticasTragamonedas5 = function () {
        fs.writeFileSync('estadisticasTragamonedas5.txt', "\n" + "         Datos recolectados" + "\n" + "Dinero Recaudado: $ " + this.dineroRecaudado + "\n" + "Premio Pagado: $ " + this.premiosPagados + "\n" + "Cantidad de veces jugadas: " + this.cantJugadas + "\n" + "Pozo acumulado: $ " + this.pozo);
        console.log(fs.readFileSync('estadisticasTragamonedas5.txt', 'utf8'));
    };
    Tragamonedas5.prototype.resetearEstidisticasCincoRuedas = function () {
        fs.writeFileSync('estadisticasTragamonedas5.txt', " ");
    };
    Tragamonedas5.prototype.iniciarJuego = function (pUsuario) {
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
                    this.SumarPozo();
                    this.girarRuedas(this.cantRuedas);
                    if (this.listaRuedas[0] == 7 && this.listaRuedas[1] == 7 && this.listaRuedas[2] == 7 && this.listaRuedas[3] == 7) {
                        this.acreditarPremioPozo(pUsuario);
                        console.log("Su saldo es: $ ", pUsuario.getSaldo());
                    }
                    else if (this.listaRuedas[0] == this.listaRuedas[1] && this.listaRuedas[1] == this.listaRuedas[2] && this.listaRuedas[2] == this.listaRuedas[3] && this.listaRuedas[3] == this.listaRuedas[4]) {
                        this.acreditarPremioCincoAciertos(pUsuario);
                        console.log("Su saldo es: $ ", pUsuario.getSaldo());
                    }
                    else if (this.listaRuedas[0] == this.listaRuedas[1] && this.listaRuedas[1] == this.listaRuedas[2] && this.listaRuedas[2] == this.listaRuedas[3]) {
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
            }
            else {
                console.log("Dato invalido");
            }
            this.inicio = main_1.readlineSync.question("Desea Jugar ?...");
        }
    };
    return Tragamonedas5;
}(abstractTragamonedas_1.Tragamonedas));
exports.Tragamonedas5 = Tragamonedas5;
