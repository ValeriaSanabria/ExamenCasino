import { Blackjack } from "./blackjack";
import { Usuario } from "./usuario";
import { Casino } from "./casino"

export let readlineSync = require('readline-sync');

let usuario1: Usuario = new Usuario (123, "Jugador", 10000);
let blackjack1: Blackjack = new Blackjack ();
let casino1 : Casino = new Casino ("Las Estrellas", 100000000, blackjack1);

console.log("");
     
let juegos: Array<string> = ["Blackjack", "Ruleta", "Tragamonedas simple", "Tragamonedas full"];
let i: number = 0;
console.log("                        Bienvenido al casino");
i = readlineSync.keyInSelect(juegos, "Elija su juego");

console.log("Bienvenido a: ", juegos[i]);
        
if (juegos[i] === "Blackjack") {    
    casino1.iniciarBlack (blackjack1, 100, usuario1);
} else if (juegos[i] === "Ruleta") {
    console.log ("Aca va la ruleta");
} else if (juegos[i] === "Tragamonedas simple") {
    console.log ("Aca va tragamonedas cuatro ruedas");
} else if (juegos[i] === "Tragamonedas full") {
    console.log ("Aca va el tragamonedas de cinco ruedas");    
}  else if (juegos[i] === undefined) {
    console.log ("Adios vuelva pronto");
}