"use strict";
exports.__esModule = true;
exports.readlineSync = void 0;
var blackjack_1 = require("./blackjack");
var usuario_1 = require("./usuario");
var casino_1 = require("./casino");
var tragamonedasCuatroRuedas_1 = require("./tragamonedasCuatroRuedas");
var tragamonedasCincoRuedas_1 = require("./tragamonedasCincoRuedas");
exports.readlineSync = require('readline-sync');
var usuario1 = new usuario_1.Usuario(123, "Jugador", 10000);
var blackjack1 = new blackjack_1.Blackjack();
var casino1 = new casino_1.Casino("Las Estrellas", 100000000, blackjack1);
var tragamonedas4 = new tragamonedasCuatroRuedas_1.Tragamonedas4(10000);
var tragamonedas5 = new tragamonedasCincoRuedas_1.Tragamonedas5(10000);
console.log("");
var juegos = ["Blackjack", "Ruleta", "Tragamonedas simple", "Tragamonedas full"];
var i = 0;
console.log("                        Bienvenido al casino");
i = exports.readlineSync.keyInSelect(juegos, "Elija su juego");
console.log("Bienvenido a: ", juegos[i]);
if (juegos[i] === "Blackjack") {
    casino1.iniciarBlack(blackjack1, 100, usuario1);
}
else if (juegos[i] === "Ruleta") {
    console.log("Aca va la ruleta");
}
else if (juegos[i] === "Tragamonedas simple") {
    tragamonedas4.iniciarJuego();
}
else if (juegos[i] === "Tragamonedas full") {
    tragamonedas5.iniciarJuego();
}
else if (juegos[i] === undefined) {
    console.log("Adios vuelva pronto");
}
