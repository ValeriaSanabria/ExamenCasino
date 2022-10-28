import { Banca } from "./Banca"

let readlineSync = require('readline-sync');


export class Blackjack {
    private premio: number;
    private numeroCarta: number;
    private palo: string;
    private banca: Banca;

    constructor(pPremio: number){
        this.premio = pPremio;
        this.palo = "diamantes";
        this.numeroCarta = 1;
    }
    getPremio (): number {
        return this.premio;
    }
    setPremio (pPremio: number): void {
        this.premio = pPremio;
    }
    

    ingresarApuesta (pSaldo: number): void {
        this.premio = this.premio + pSaldo;
    }
    finalizarJuego(): void {
        console.log ("El juego ha finalizado");
    }

    pedirCartaAleatoria(): number {
        let carta: number;
        carta = Math.floor(Math.random () * (14 - 1)) + 1;
        return carta
    }
    iniciarJuego (): void {
        console.log("Bienvenido a BlackJack")
        let juego: number = 0;
        juego += this.pedirCartaAleatoria();
        console.log ("Total: ", juego);
        let respuesta = readlineSync.question("Desea pedir otra carta? ");
        while (respuesta === "si" || respuesta === "no") {
            if (respuesta === "no") {
                console.log ("Usted se planta con: ", juego);
                break
            }
            else if (respuesta === "si") {
                juego += this.pedirCartaAleatoria();
                console.log ("total: ", juego);
                if (juego > 21) {
                    console.log ("Superaste los 21, has perdido.")
                    break
                } else if (juego === 21){
                    console.log ("Felicidades BlackJack");
                    break

                } 

                }

            }  
        respuesta = readlineSync.question("Desea pedir otra carta? ");
    }
}        



let blackjack1: Blackjack = new Blackjack (500000);
console.log(blackjack1.pedirCartaAleatoria());

blackjack1.iniciarJuego();