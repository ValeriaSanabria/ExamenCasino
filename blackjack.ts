import { readlineSync } from "./main";

export class Blackjack {
    private premio: number;
    private totalSumaUsuario: number;
    private totalSumaBanca: number;   
    
    constructor(pPremio: number){
        this.premio = pPremio;
        this.totalSumaUsuario = 0;
        this.totalSumaBanca = 0;
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
        
        this.totalSumaUsuario += this.pedirCartaAleatoria();
        console.log ("Total: ", this.totalSumaUsuario);
        let respuesta = readlineSync.question("Desea pedir otra carta? ");
        while (respuesta === "si" || respuesta === "no") {
            if (respuesta === "no") {
                console.log ("Usted se planta con: ", this.totalSumaUsuario);
                break
            }
            else if (respuesta === "si") {
                this.totalSumaUsuario += this.pedirCartaAleatoria();
                console.log ("total: ", this.totalSumaUsuario);
                if (this.totalSumaUsuario > 21) {
                    console.log ("Superaste los 21, has perdido.")
                    break
                } else if (this.totalSumaUsuario === 21){
                    console.log ("Felicidades BlackJack");
                    break

                } 
            }
            respuesta = readlineSync.question("Desea pedir otra carta? ");
        } if (this.totalSumaUsuario === 21 || this.totalSumaUsuario > 21) {
            console.log ("Fin del juego");
        } else if (this.totalSumaUsuario < 21){
            console.log ("Ahora juega la banca");
            this.totalSumaBanca += this.pedirCartaAleatoria();
            console.log ("Total de la banca: ", this.totalSumaBanca);
                      
            while ((this.totalSumaBanca < this.totalSumaUsuario) && (this.totalSumaBanca < 21)){
                this.totalSumaBanca += this.pedirCartaAleatoria();
                console.log ("Total de la banca: ", this.totalSumaBanca);
                              
            } if ((this.totalSumaBanca > this.totalSumaUsuario) && (this.totalSumaBanca <= 21)){
                console.log("La banca gana");
            }else {
                console.log("Ganaste");
            }
        }
    }        
}