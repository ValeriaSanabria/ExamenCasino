import { readlineSync } from "./main";
import { Usuario } from "./usuario";
import * as fs from 'fs';

export class Blackjack {
    private totalSumaUsuario: number;
    private totalSumaBanca: number;
    private carta: number;
    private manual: string;
    private cantDineroApostado: number;
    private cantEmpate: number;
    private cantGanadasBancas: number;
    private cantPerdidasBanca: number;
    private totalDineroEntregado: number;

    constructor() {
        this.totalSumaUsuario = 0;
        this.totalSumaBanca = 0;
        this.carta = 0;
        this.manual = fs.readFileSync('manualBlackjack.txt', 'utf8');
        this.cantDineroApostado = 0;
        this.cantEmpate = 0;
        this.cantGanadasBancas = 0;
        this.cantPerdidasBanca = 0;
        this.totalDineroEntregado = 0;
        

    }
    public getPremio(pApuesta: number): number {
        let premio = pApuesta * 2
        return premio;
    }
    public devolverApuesta (pUsuario: Usuario, pApuesta: number): number {
        let saldo: number = pUsuario.getSaldo() + pApuesta;
        return saldo
    }

    public resetearJuego(): void {
        this.totalSumaBanca = 0;
        this.totalSumaUsuario = 0;
    }

    public ingresarApuesta(pApuesta: number, pUsuario: Usuario): void {
        pUsuario.restarSaldo(pApuesta);
    }

    public pedirCartaAleatoria(): number {
        let carta: number;
        carta = Math.floor(Math.random() * (14 - 1)) + 1;
        return carta
    }

    public iniciarJuegoBlackJack(pUsuario: Usuario): void {
        let respuesta: string = "si";

        while (respuesta === "si" || respuesta === "no") {
            if (respuesta === "no") {
                console.log ("Salio de BlackJack");
                break;
            } else if (respuesta === "si") {
                console.log (this.manual);
                let pApuesta: number = readlineSync.question("Inicia su apuesta: ");
                if (pApuesta > pUsuario.getSaldo()) {
                    console.log ("Lo siento, fondo insuficiente, adios");
                    break;
                } else {
                    this.resetearJuego();
                    this.ingresarApuesta(pApuesta, pUsuario);
                    console.log("Bienvenido a BlackJack")
                    console.log("Carta: ", this.carta = this.pedirCartaAleatoria());
                    console.log("Total: ", this.totalSumaUsuario += this.carta);
                    respuesta = readlineSync.question("Desea pedir otra carta? ");
                    while (respuesta === "si" || respuesta === "no") {
                        if (respuesta === "no") {
                            console.log("Usted se planta con: ", this.totalSumaUsuario);
                            break;
                        } else if (respuesta === "si") {
                            console.log("Carta: ", this.carta = this.pedirCartaAleatoria());
                            console.log("Total: ", this.totalSumaUsuario += this.carta);
                            if (this.totalSumaUsuario > 21) {
                                console.log("Superaste los 21, has perdido.");
                                console.log("Fin del juego");
                                console.log("Su saldo es: ", pUsuario.getSaldo())
                                this.cantGanadasBancas += 1 * 1; 
                                break;
                            } else if (this.totalSumaUsuario === 21) {
                                console.log("Felicidades BlackJack");
                                break;
                            }
                        } else {
                            console.log("Dato invalido ");
                        }
                        respuesta = readlineSync.question("Desea pedir otra carta? ");
                    }
                    if (this.totalSumaUsuario <= 21) {
                        console.log("......Ahora juega la banca......");
                        console.log("Carta: ", this.carta = this.pedirCartaAleatoria());
                        console.log("Total de la banca: ", this.totalSumaBanca += this.carta);
    
                        while (this.totalSumaBanca < 17) {
                            console.log("Carta: ", this.carta = this.pedirCartaAleatoria());
                            console.log("Total de la banca: ", this.totalSumaBanca += this.carta);
                        }
                        if (this.totalSumaBanca === this.totalSumaUsuario) {
                            console.log("Empate");
                            console.log("Su saldo es:", pUsuario.cobrarEmpate(pApuesta));
                            this.cantEmpate += 1 * 1;                      
                        } else if ((this.totalSumaBanca > this.totalSumaUsuario) && (this.totalSumaBanca < 22)) {
                            console.log("La banca gana");
                            console.log("Su saldo es:", pUsuario.getSaldo());
                            this.cantGanadasBancas += 1 * 1;                         
                        } else {
                            console.log("Ganaste: $", this.getPremio(pApuesta));
                            console.log("Su saldo es: ", pUsuario.sumarSaldo(pApuesta));
                            this.cantPerdidasBanca += 1 * 1;
                            this.totalDineroEntregado += this.getPremio(pApuesta); 
                        }
                    }
                    respuesta = readlineSync.question("Desea jugar de nuevo? ");
                    this.cantDineroApostado += pApuesta * 1;
                }
            }
        }       
    }

    public generarEstadisticas(): void {
        fs.writeFileSync('datosEstadisticosBlackjack.txt', "\n" + "         Datos recolectados" +"\n"+ "Cantidad de dinero apostado: " + this.cantDineroApostado + "\n" + "Victorias de la Banca: " + this.cantGanadasBancas + "\n" + "Perdidas de la Banca: " + this.cantPerdidasBanca + "\n" + "Empates: " + this.cantEmpate + "\n" + "Total de dinero entregado: " + this.totalDineroEntregado + "\n" );        
        console.log(fs.readFileSync('datosEstadisticosBlackjack.txt', 'utf8'));
    }
}
