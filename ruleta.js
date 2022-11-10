"use strict";
exports.__esModule = true;
exports.Ruleta = void 0;
var main_1 = require("./main");
var fs = require("fs");
var Ruleta = /** @class */ (function () {
    function Ruleta() {
        this.listaNumApostados = [];
        this.numeroDeRuleta = 0;
        this.apuesta = 0;
        this.numeroApostado = 0;
        this.manual = fs.readFileSync('manualRuleta.txt', 'utf8');
        this.respuesta = "";
        this.cantPartidas = 0;
        this.cantGanadas = 0;
        this.cantPerdidas = 0;
        this.cantDineroEntregado = 0;
        this.cantDineroRecaudado = 0;
    }
    Ruleta.prototype.getNumero = function () {
        return this.numeroDeRuleta;
    };
    Ruleta.prototype.apostarNumeros = function (pUsuario) {
        this.listaNumApostados = [];
        while (this.respuesta == "si" || this.respuesta == "no" || this.respuesta == "") {
            if (this.respuesta == "no") {
                console.log("No va maaaaas");
                break;
            }
            else if (this.respuesta == "si") {
                this.apuesta = main_1.readlineSync.question("Ingrese el monto a apostar: ");
                if (pUsuario.getSaldo() < this.apuesta) {
                    console.log("Lo siento, fondo insuficiente, su saldo es: ", pUsuario.getSaldo());
                    break;
                }
                else {
                    pUsuario.restarSaldo(this.apuesta);
                    this.numeroApostado = main_1.readlineSync.question("Ingrese el numero a apostar: ");
                    if (this.numeroApostado > -1 && this.numeroApostado < 37) {
                        this.listaNumApostados.push(this.numeroApostado);
                        console.log("Sus numeros apostados son: ", this.listaNumApostados);
                    }
                    else {
                        console.log("Numero fuera de rango, elija otro");
                        pUsuario.sumarSaldo(this.apuesta);
                    }
                }
            }
            else if (this.respuesta == "") {
                console.log("Dato invalido");
            }
            this.respuesta = main_1.readlineSync.question("Desea apostar otro numero?: ");
        }
    };
    Ruleta.prototype.girarRuleta = function () {
        this.numeroDeRuleta = Math.floor(Math.random() * (36 - (-1))) + (-1);
        console.log("El numero de la ruleta es: ", this.getNumero());
    };
    Ruleta.prototype.entregarPremio = function (pUsuario) {
        this.apuesta += this.apuesta * 36;
        pUsuario.sumarSaldo(this.apuesta);
    };
    Ruleta.prototype.controlarNumero = function () {
        for (var i = 0; i < this.listaNumApostados.length; i++) {
            if (this.listaNumApostados[i] == this.numeroDeRuleta) {
                this.numeroApostado = this.numeroDeRuleta;
                break;
            }
        }
    };
    Ruleta.prototype.mostrarEstadisticas = function () {
        fs.writeFileSync('estadisticasRuleta.txt', "\n" + "         Datos recolectados" + "\n" + "Cantidad de partidas jugadas: " + this.cantPartidas + "\n" + "Total de cantidades de veces ganadas de la casa:" + this.cantGanadas + "\n" + "Cantidad de veces perdidas: " + this.cantPerdidas + "\n" + "Total de premios entregados: $" + this.cantDineroEntregado + "\n" + "Total de dinero recaudado: $" + this.cantDineroRecaudado + "\n");
        console.log(fs.readFileSync('estadisticasRuleta.txt', 'utf8'));
    };
    Ruleta.prototype.resetearEstadisticasRuleta = function () {
        fs.writeFileSync('estadisticasRuleta.txt', " ");
    };
    Ruleta.prototype.iniciarJuegoRuleta = function (pUsuario) {
        console.log(this.manual);
        this.respuesta = main_1.readlineSync.question("Desea jugar a la ruleta? ");
        while (this.respuesta == "si" || this.respuesta == "no") {
            if (this.respuesta == "no") {
                console.log("Usted se retira con un saldo: $", pUsuario.getSaldo());
                break;
            }
            else if (this.respuesta == "si") {
                console.log("Bienvenido a la Ruleta");
                this.cantPartidas += this.cantPartidas * 1;
                this.apostarNumeros(pUsuario);
                this.girarRuleta();
                this.controlarNumero();
                if (this.numeroApostado == this.numeroDeRuleta) {
                    console.log("Usted gana: $", (this.apuesta * 36));
                    console.log("Su saldo es: $", pUsuario.getSaldo());
                    this.cantPerdidas += this.cantPerdidas + 1;
                    this.cantDineroEntregado += this.apuesta * 36;
                }
                else {
                    console.log("La casa gana ");
                    console.log("Su saldo es: $", pUsuario.getSaldo());
                    this.cantGanadas += this.cantGanadas + 1;
                    this.cantDineroRecaudado += this.apuesta * 1;
                }
            }
            this.respuesta = main_1.readlineSync.question("Desea jugar de nuevo? ");
        }
    };
    return Ruleta;
}());
exports.Ruleta = Ruleta;
