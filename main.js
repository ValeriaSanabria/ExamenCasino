"use strict";
exports.__esModule = true;
exports.readlineSync = void 0;
var blackjack_1 = require("./blackjack");
exports.readlineSync = require('readline-sync');
var blackjack1 = new blackjack_1.Blackjack(500000);
blackjack1.iniciarJuego();
