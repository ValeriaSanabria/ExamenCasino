import {
    readlineSync
} from "./main";
import {
    Usuario
} from "./usuario";

export class Ruleta {
    private numeros: number[];
    private numRojo: number[];
    private numNegro: number[];

    constructor() {
        this.numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
        this.numRojo = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
        this.numNegro = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
    }

    getNumeros(): number[] {
        return this.numeros;
    }

    getNumRojo(): number[] {
        return this.numRojo;
    }

    getNumNegro(): number[] {
        return this.numNegro;
    }

    girarRuleta(): number {
        let numero: number;
        numero = Math.floor(Math.random() * (37 - 0)) + 0;
        return numero;
    }

    entregarPremio(pApuesta: number): number {
        return pApuesta * 36;
    }

    iniciarJuegoRuleta(pUsuario: Usuario, pApuesta: number): void {
        console.log("Bienvenido a la Ruleta")
        let opcion = "si";

        while (opcion === "si" || opcion === "no") {

            
            if (opcion === "no") {
                console.log("Usted se retira con un saldo: $", pUsuario.getSaldo());
                break;
            } else if (opcion === "si") {
            let respuesta = readlineSync.questionInt("A que numero desea apostar? ");
                
                pUsuario.restarSaldo(pApuesta);
                let numero: number = this.girarRuleta();
                console.log("El numero de la ruleta es: " + numero);
                if (numero === respuesta) {
                    console.log("Usted gana: $", this.entregarPremio(pApuesta));
                } else {
                    console.log("La casa gana");
                    console.log("Su saldo actual es: $" + pUsuario.getSaldo());
                }
            }
            opcion = readlineSync.question("Desea jugar de nuevo? ");
        }
    }
}