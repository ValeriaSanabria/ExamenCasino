import { Blackjack } from "./blackjack";
import { Usuario } from "./usuario";
import { Casino } from "./casino"
import { Tragamonedas4 } from "./tragamonedasCuatroRuedas";
import { Tragamonedas5 } from "./tragamonedasCincoRuedas";
import { Ruleta } from "./ruleta";


export let readlineSync = require('readline-sync');
let usuario1: Usuario = new Usuario (123, "Jugador", 10000);
let blackjack1: Blackjack = new Blackjack ();
let ruleta1: Ruleta = new Ruleta ();
let casino1 : Casino = new Casino ("Las Estrellas", 100000000, blackjack1, ruleta1);

let tragamonedas4 : Tragamonedas4 = new Tragamonedas4(10000);
let tragamonedas5 : Tragamonedas5 = new Tragamonedas5(10000);

console.log("");
     
let juegos: Array<string> = ["Blackjack", "Ruleta", "Tragamonedas simple", "Tragamonedas full"];
let i: number = 0;
console.log("                        Bienvenido al casino");
i = readlineSync.keyInSelect(juegos, "Elija su juego");

console.log("Bienvenido a: ", juegos[i]);
        
if (juegos[i] === "Blackjack") {           
    casino1.iniciarBlack (blackjack1, usuario1);
} else if (juegos[i] === "Ruleta") {
    casino1.iniciarRuleta (ruleta1, usuario1,100);
} else if (juegos[i] === "Tragamonedas simple") {
    tragamonedas4.iniciarJuego();    
} else if (juegos[i] === "Tragamonedas full") {
    tragamonedas5.iniciarJuego();    
}  else if (juegos[i] === undefined) {
    console.log ("Adios vuelva pronto");
}