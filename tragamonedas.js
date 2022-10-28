var Tragamonedas = /** @class */ (function () {
    // private ruedas: Ruedas[];
    function Tragamonedas(psaldo) {
        this.saldo = psaldo;
    }
    Tragamonedas.prototype.getSaldo = function () {
        return this.saldo;
    };
    Tragamonedas.prototype.ingresarApuesta = function () {
    };
    Tragamonedas.prototype.iniciarJuego = function () {
        var readlineSync = require('readline-sync');
        var rueda1 = 0;
        var rueda2 = 0;
        var rueda3 = 0;
        var rueda4 = 0;
        console.log("Bienvenido al Tragamonedas");
        var inicio = readlineSync.question("Desea Jugar Ya?");
        if (inicio === "si") {
            rueda1 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
            rueda2 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
            rueda3 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
            rueda4 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
            console.log(rueda1, rueda2, rueda3, rueda4);
        }
        else {
            console.log("Gracias por su visita...");
        }
    };
    Tragamonedas.prototype.entregarPremio = function (psaldoUsuario) {
    };
    return Tragamonedas;
}());
var nuevoJugador = new Tragamonedas(100);
