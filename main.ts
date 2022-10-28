import { Blackjack } from "./blackjack";
import { Banca } from "./banca";

export let readlineSync = require('readline-sync');


let blackjack1: Blackjack = new Blackjack (500000);


blackjack1.iniciarJuego();