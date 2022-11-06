import { Tragamonedas } from "./abstractTragamonedas";
import { readlineSync } from "./main";
import { Usuario } from "./usuario";
import * as fs from 'fs';

export class Tragamonedas5 extends Tragamonedas {    
    private pozo: number;

    constructor(pCantRuedas: number) {
        super(pCantRuedas)
        this.cantRuedas = pCantRuedas;
        this.apuesta = 30;
        this.pozo = 150000;
    }
    public girarRuedas(pCantRuedas: number): void {
        for (let i: number = 0; i < pCantRuedas; i++) {
          this.listaRuedas[i] = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        }    
        this.cantJugadas += 1 * 1;    
        this.dineroRecaudado += this.apuesta * 0.9;
        console.log(this.listaRuedas);
      }
    public getPozo(): number {
        return this.pozo;
    }
    public SumarPozo(): void {
        this.pozo += this.apuesta * 0.1;
    }
    public acreditarPremioDosAciertos(pUsuario: Usuario): void {
        pUsuario.sumarSaldo(1500);
        this.premiosPagados += 1500 * 1;
        console.log("Gano $ 1500");
    }
    public acreditarPremioTresAciertos(pUsuario: Usuario): void {
        pUsuario.sumarSaldo(3000);
        this.premiosPagados += 3000 * 1;
        console.log("Gano $ 3000");
    }
    public acreditarPremioCuatroAciertos(pUsuario: Usuario): void {
        pUsuario.sumarSaldo(7000);
        this.premiosPagados += 7000 * 1;
        console.log("Gano $ 7000");
    }
    public acreditarPremioCincoAciertos(pUsuario: Usuario): void {
        pUsuario.sumarSaldo(30000);
        this.premiosPagados += 30000 * 1;
        console.log("Gano $ 30000");
    }
    public acreditarPremioPozo(pUsuario: Usuario): void {
        pUsuario.sumarSaldo(this.pozo);
        this.premiosPagados += this.pozo * 1;
        console.log("Gano el pozo de: $ ", this.pozo);
    }
    public mostrarEstadisticasTragamonedas5(): void {
        fs.writeFileSync('estadisticasTragamonedas5.txt', "\n" + "         Datos recolectados" + "\n" + "Dinero Recaudado: $ " + this.dineroRecaudado + "\n" + "Premio Pagado: $ " + this.premiosPagados + "\n" + "Cantidad de veces jugadas: " + this.cantJugadas + "\n" + "Pozo acumulado: $ " + this.pozo);
        console.log(fs.readFileSync('estadisticasTragamonedas5.txt', 'utf8'));
      }
    public iniciarJuego(pUsuario: Usuario): void {
        console.log("Bienvenido al Tragamonedas de cuatro ruedas...");
        console.log(fs.readFileSync('manualTragamonedasSimple.txt', 'utf8'));
        this.inicio = readlineSync.question("Desea Jugar ?...");
        while (this.inicio == "si" || this.inicio == "no") {
            if (this.inicio == "no") {
                console.log("Gracias... vuelva pronto.");
                break;
            } else if (this.inicio == "si") {
                if (this.apuesta > pUsuario.getSaldo()) {
                    console.log("Lo siento, fondo insuficiente, adios");
                    break;
                } else {
                    pUsuario.restarSaldo(this.apuesta);
                    this.SumarPozo();
                    this.girarRuedas(this.cantRuedas);
            
                    if (this.listaRuedas[0] == 7 && this.listaRuedas[1] == 7 && this.listaRuedas[2] == 7 && this.listaRuedas[3] == 7) {
                        this.acreditarPremioPozo(pUsuario);
                        console.log("Su saldo es: $ ", pUsuario.getSaldo());
                    } else if (this.listaRuedas[0] == this.listaRuedas[1] && this.listaRuedas[1] == this.listaRuedas[2] && this.listaRuedas[2] == this.listaRuedas[3] && this.listaRuedas[3] == this.listaRuedas[4]) {
                        this.acreditarPremioCincoAciertos(pUsuario);
                        console.log("Su saldo es: $ ", pUsuario.getSaldo());
                    } else if (this.listaRuedas[0] == this.listaRuedas[1] && this.listaRuedas[1] == this.listaRuedas[2] && this.listaRuedas[2] == this.listaRuedas[3]) {
                        this.acreditarPremioCuatroAciertos(pUsuario);
                        console.log("Su saldo es: $ ", pUsuario.getSaldo());
                    } else if (this.listaRuedas[0] == this.listaRuedas[1] && this.listaRuedas[1] == this.listaRuedas[2]) {
                        this.acreditarPremioTresAciertos(pUsuario);
                        console.log("Su saldo es: $ ", pUsuario.getSaldo());
                    } else if (this.listaRuedas[0] == this.listaRuedas[1]) {
                        this.acreditarPremioDosAciertos(pUsuario);
                        console.log("Su saldo es: $ ", pUsuario.getSaldo());
                    } else {
                        console.log("Siga Participando...");
                        console.log("Su saldo es: $", pUsuario.getSaldo());
                    }
                }
            } else {
                console.log("Dato invalido");
            }
            this.inicio = readlineSync.question("Desea Jugar ?...");
        }
    }
}