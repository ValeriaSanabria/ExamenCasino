import { Blackjack } from "./blackjack";

export let readlineSync = require('readline-sync');

let blackjack1: Blackjack = new Blackjack (500000);

blackjack1.iniciarJuego();