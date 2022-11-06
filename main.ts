import {Blackjack} from "./blackjack";
import {Usuario} from "./usuario";
import {Casino} from "./casino"
import {Tragamonedas4} from "./tragamonedasCuatroRuedas";
import {Tragamonedas5} from "./tragamonedasCincoRuedas";
import {Ruleta} from "./ruleta";

export let readlineSync = require('readline-sync');
let tragamonedas4: Tragamonedas4 = new Tragamonedas4(4);
let tragamonedas5: Tragamonedas5 = new Tragamonedas5(5);
let usuario1: Usuario = new Usuario(123, "Jugador", 20000);
let blackjack1: Blackjack = new Blackjack();
let ruleta1: Ruleta = new Ruleta();
let casino1: Casino = new Casino("Las Estrellas", ruleta1, blackjack1, tragamonedas4, tragamonedas5);
console.log("");
let juegos: string[] = ["Blackjack", "Ruleta", "Tragamonedas simple", "Tragamonedas full"];
let i: number;

console.log("                        Bienvenido al casino");

i = readlineSync.keyInSelect(juegos, "Elija su juego");

while ( i == 0 || i == 1 || i == 2 || i == 3) {
  if (juegos[i] == "Blackjack") {           
    casino1.iniciarBlackjack (usuario1);
    casino1.mostrarEstadisticasBlackjack();
  } else if (juegos[i] == "Ruleta") {
    casino1.iniciarRuleta(usuario1);
    casino1.mostrarEstadistcasRuleta();
  } else if (juegos[i] == "Tragamonedas simple") {
    casino1.inciarTragamonedas4(usuario1);
    casino1.mostrarEstadisticasTragamonedas4();   
  } else if (juegos[i] == "Tragamonedas full") {
   casino1.inciarTragamonedas5(usuario1);
   casino1.mostrarEstadisticasTragamonedas5();    
  }
  console.log ("Adios vuelva pronto.");
  i = readlineSync.keyInSelect(juegos, "Elija su juego");
}
casino1.resetearEstadisticas();