"use strict";
exports.__esModule = true;
exports.readlineSync = void 0;
var blackjack_1 = require("./blackjack");
var usuario_1 = require("./usuario");
var casino_1 = require("./casino");
var tragamonedasCuatroRuedas_1 = require("./tragamonedasCuatroRuedas");
var tragamonedasCincoRuedas_1 = require("./tragamonedasCincoRuedas");
var ruleta_1 = require("./ruleta");
exports.readlineSync = require('readline-sync');
var tragamonedas4 = new tragamonedasCuatroRuedas_1.Tragamonedas4(4);
var tragamonedas5 = new tragamonedasCincoRuedas_1.Tragamonedas5(5);
var usuario1 = new usuario_1.Usuario(123, "Jugador", 20000);
var blackjack1 = new blackjack_1.Blackjack();
var ruleta1 = new ruleta_1.Ruleta();
var casino1 = new casino_1.Casino("Las Estrellas", ruleta1, blackjack1, tragamonedas4, tragamonedas5);
console.log("");
var juegos = ["Blackjack", "Ruleta", "Tragamonedas simple", "Tragamonedas full"];
var i;
console.log("                        Bienvenido al casino");
i = exports.readlineSync.keyInSelect(juegos, "Elija su juego");
while (i == 0 || i == 1 || i == 2 || i == 3) {
    if (juegos[i] == "Blackjack") {
        casino1.iniciarBlackjack(usuario1);
        casino1.mostrarEstadisticasBlackjack();
    }
    else if (juegos[i] == "Ruleta") {
        casino1.iniciarRuleta(usuario1);
        casino1.mostrarEstadistcasRuleta();
    }
    else if (juegos[i] == "Tragamonedas simple") {
        casino1.inciarTragamonedas4(usuario1);
        casino1.mostrarEstadisticasTragamonedas4();
    }
    else if (juegos[i] == "Tragamonedas full") {
        casino1.inciarTragamonedas5(usuario1);
        casino1.mostrarEstadisticasTragamonedas5();
    }
    console.log("Adios vuelva pronto.");
    i = exports.readlineSync.keyInSelect(juegos, "Elija su juego");
}
