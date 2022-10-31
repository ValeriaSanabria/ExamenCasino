"use strict";
exports.__esModule = true;
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(pId, pNombre, pSaldo) {
        this.perfilId = pId;
        this.nombre = pNombre;
        this.saldo = pSaldo;
        //this.profileId = Casino.profiles.size();
    }
    Usuario.prototype.setId = function (pPerfilId) {
        this.perfilId = pPerfilId;
    };
    Usuario.prototype.getPerfilId = function () {
        return this.perfilId;
    };
    Usuario.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Usuario.prototype.getNombre = function () {
        return this.nombre;
    };
    Usuario.prototype.sumarSaldo = function (pApuesta) {
        return this.saldo += pApuesta * 2;
    };
    Usuario.prototype.restarSaldo = function (pApuesta) {
        this.saldo = this.saldo - pApuesta;
    };
    Usuario.prototype.getSaldo = function () {
        return this.saldo;
    };
    Usuario.prototype.hacerApuesta = function (pApuesta) {
        this.saldo = this.saldo - pApuesta;
    };
    Usuario.prototype.elegirJuego = function (pOpcion) {
        if (pOpcion === 1 || pOpcion === 2 || pOpcion === 3 || pOpcion === 4) {
        }
    };
    //inciarJuegoBlack (pCasino: Casino): void {
    //    pCasino.iniciarBlack (parametro)
    //}
    Usuario.prototype.obtenerFichas = function () {
    };
    Usuario.prototype.salirDelJuego = function () {
    };
    return Usuario;
}());
exports.Usuario = Usuario;
