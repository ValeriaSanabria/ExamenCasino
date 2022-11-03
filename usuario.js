"use strict";
exports.__esModule = true;
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(pId, pNombre, pSaldo) {
        this.perfilId = pId;
        this.nombre = pNombre;
        this.saldo = pSaldo;
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
    Usuario.prototype.sumarSaldo = function (pPremio) {
        return this.saldo += pPremio * 1;
    };
    Usuario.prototype.cobrarEmpate = function (pApuesta) {
        return this.saldo += pApuesta * 1;
    };
    Usuario.prototype.restarSaldo = function (pApuesta) {
        this.saldo = this.saldo - pApuesta;
    };
    Usuario.prototype.getSaldo = function () {
        return this.saldo;
    };
    return Usuario;
}());
exports.Usuario = Usuario;
