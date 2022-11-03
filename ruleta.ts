import {readlineSync} from "./main";
import {Usuario} from "./usuario";
import * as fs from 'fs';

export class Ruleta {
    private numero: number;
    private numeroApostado: number;
    private apuesta: number;
    private manual: string;

    constructor() {
        this.numero = 0;
        this.apuesta = 0;
        this.numeroApostado = 0;
        this.manual = fs.readFileSync('manualRuleta.txt', 'utf8');
    }
    getNumero(): number {
        return this.numero;
    }
    girarRuleta(): number {
        this.numero = Math.floor(Math.random() * (37 - 0)) + 0;
        return this.numero;
    }
    entregarPremio(pApuesta: number): number {
        return pApuesta * 36;
    }
    iniciarJuegoRuleta(pUsuario: Usuario): void {
        console.log("Bienvenido a la Ruleta")
        let opcion = "si";
        while (opcion === "si" || opcion === "no") {
            if (opcion === "no") {
                console.log("Usted se retira con un saldo: $", pUsuario.getSaldo());
                break;
            } else if (opcion === "si") {
                console.log(this.manual);
                this.apuesta = readlineSync.question("Ingrese el monto a apostar: ");
                pUsuario.restarSaldo(this.apuesta);
                this.numeroApostado = readlineSync.questionInt("A que numero desea apostar? ");
                this.numero = this.girarRuleta();
                console.log("El numero de la ruleta es: ", this.getNumero());
                if (this.numero === this.numeroApostado) {
                    console.log("Usted gana: $", this.entregarPremio(this.apuesta));
                } else {
                    console.log("La casa gana");
                    console.log("Su saldo actual es: $", pUsuario.getSaldo());
                }
            }
            opcion = readlineSync.question("Desea jugar de nuevo? ");
        }
    }
}