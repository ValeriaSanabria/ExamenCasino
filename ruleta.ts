import { readlineSync } from "./main";
import { Usuario } from "./usuario";
import * as fs from 'fs';

export class Ruleta {
    private numeroDeRuleta: number;
    private listaNumApostados: number[];
    private numeroApostado: number;
    private apuesta: number;
    private manual: string;
    private respuesta: string;
    private cantPartidas: number;
    private cantGanadas: number;
    private cantPerdidas: number;
    private cantDineroEntregado: number;
    private cantDineroRecaudado: number;

    constructor() {
        this.listaNumApostados = [];
        this.numeroDeRuleta = 0;
        this.apuesta = 0;
        this.numeroApostado = 0;
        this.manual = fs.readFileSync('asset/manualRuleta.txt', 'utf8');
        this.respuesta = "";
        this.cantPartidas = 0;
        this.cantGanadas = 0;
        this.cantPerdidas = 0;
        this.cantDineroEntregado = 0;
        this.cantDineroRecaudado = 0;
    }
    public getNumero(): number {
        return this.numeroDeRuleta;
    }
    public apostarNumeros(pUsuario: Usuario): void {
        this.listaNumApostados = [];
        while (this.respuesta == "si" || this.respuesta == "no" || this.respuesta == "") {
            if (this.respuesta == "no") {
                console.log("No va maaaaas");
                break;
            } else if (this.respuesta == "si") {
                this.apuesta = readlineSync.question("Ingrese el monto a apostar: ");
                if (pUsuario.getSaldo() < this.apuesta) {
                    console.log("Lo siento, fondo insuficiente, su saldo es: ", pUsuario.getSaldo());
                    break;
                } else {
                    pUsuario.restarSaldo(this.apuesta);
                    this.numeroApostado = readlineSync.question("Ingrese el numero a apostar: ");
                    if (this.numeroApostado > -1 && this.numeroApostado < 37) {
                        this.listaNumApostados.push(this.numeroApostado);
                        console.log("Sus numeros apostados son: ", this.listaNumApostados);
                    } else {
                        console.log("Numero fuera de rango, elija otro");
                        pUsuario.sumarSaldo(this.apuesta);
                    }
                }
            } else if (this.respuesta == "") {
                console.log("Dato invalido");
        }
        this.respuesta = readlineSync.question("Desea apostar otro numero?: ");
    }    
}
public girarRuleta(): void {
    this.numeroDeRuleta = Math.floor(Math.random() * (36 - (-1))) + (-1);
    console.log("El numero de la ruleta es: ", this.getNumero());

}
public entregarPremio(pUsuario: Usuario): void {
    this.apuesta += this.apuesta * 36;
    pUsuario.sumarSaldo(this.apuesta);
}
public controlarNumero(): void {
    for (let i: number = 0; i < this.listaNumApostados.length; i++) {
        if (this.listaNumApostados[i] == this.numeroDeRuleta) {
            this.numeroApostado = this.numeroDeRuleta;
            break;
        }
    }
}
public mostrarEstadisticas(): void {
    fs.writeFileSync('asset/estadisticasRuleta.txt', "\n" + "         Datos recolectados" + "\n" + "Cantidad de partidas jugadas: " + this.cantPartidas + "\n" + "Total de cantidades de veces ganadas de la casa: " + this.cantGanadas + "\n" + "Cantidad de veces perdidas: " + this.cantPerdidas + "\n" + "Total de premios entregados: $" + this.cantDineroEntregado + "\n" + "Total de dinero recaudado: $" + this.cantDineroRecaudado + "\n");
    console.log(fs.readFileSync('asset/estadisticasRuleta.txt', 'utf8'));
}
public resetearEstadisticasRuleta(): void {

    fs.writeFileSync('asset/estadisticasRuleta.txt', " ");
}

public iniciarJuegoRuleta(pUsuario: Usuario): void {
    console.log(this.manual);
    this.respuesta = readlineSync.question("Desea jugar a la ruleta? ");

    while (this.respuesta == "si" || this.respuesta == "no") {
        if (this.respuesta == "no") {
            console.log("Usted se retira con un saldo: $", pUsuario.getSaldo());
            break;
        } else if (this.respuesta == "si") {
            console.log("Bienvenido a la Ruleta");
            this.cantPartidas += this.cantPartidas * 1;
            this.apostarNumeros(pUsuario);
            this.girarRuleta();
            this.controlarNumero();
            if (this.numeroApostado == this.numeroDeRuleta) {
                console.log("Usted gana: $", (this.apuesta * 36));
                console.log("Su saldo es: $", pUsuario.getSaldo());
                this.cantPerdidas += this.cantPerdidas + 1;
                this.cantDineroEntregado += this.apuesta * 36;
            } else {
                console.log("La casa gana ");
                console.log("Su saldo es: $", pUsuario.getSaldo());
                this.cantGanadas += this.cantGanadas + 1;
                this.cantDineroRecaudado += this.apuesta * 1;
            }
        }
        this.respuesta = readlineSync.question("Desea jugar de nuevo? ");
    }
}
}