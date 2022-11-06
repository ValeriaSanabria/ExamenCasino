import { Tragamonedas } from "./abstractTragamonedas";
import { Usuario } from "./usuario";
import { readlineSync } from "./main";
import * as fs from 'fs';

export class Tragamonedas4 extends Tragamonedas { 

  constructor(pCantRuedas: number) {
    super(pCantRuedas)
    this.cantRuedas = pCantRuedas;
    this.apuesta = 10;
  }
  public girarRuedas(pCantRuedas: number): void {
    for (let i: number = 0; i < pCantRuedas; i++) {
      this.listaRuedas[i] = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    }    
    this.cantJugadas += 1 * 1;    
    this.dineroRecaudado += this.apuesta;
    console.log(this.listaRuedas);
  }
  public acreditarPremioDosAciertos(pUsuario: Usuario): void {
    pUsuario.sumarSaldo(500);
    this.premiosPagados += 500 * 1;
    console.log("Gano $ 500");
  }
  public acreditarPremioTresAciertos(pUsuario: Usuario): void {
    pUsuario.sumarSaldo(1000);
    this.premiosPagados += 1000 * 1;
    console.log("Gano $ 1000");
  }
  public acreditarPremioCuatroAciertos(pUsuario: Usuario): void {
    pUsuario.sumarSaldo(2000);
    this.premiosPagados += 2000 * 1;
    console.log("Gano $ 2000");
  }
  public mostrarEstadisticasTragamonedas4(): void {
    fs.writeFileSync('estadisticasTragamonedas4.txt', "\n" + "         Datos recolectados" + "\n" + "Dinero Recaudado: $ " + this.dineroRecaudado + "\n" + "Premio Pagado: $ " + this.premiosPagados + "\n" + "Cantidad de veces jugadas: " + this.cantJugadas + "\n");
    console.log(fs.readFileSync('estadisticasTragamonedas4.txt', 'utf8'));
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
          this.girarRuedas(this.cantRuedas);
        }
        if (this.listaRuedas[0] == this.listaRuedas[1] && this.listaRuedas[1] == this.listaRuedas[2] && this.listaRuedas[2] == this.listaRuedas[3]) {
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
      } else {
        console.log("Dato invalido");
      }
      this.inicio = readlineSync.question("Desea Jugar ?...");
    }
  }
}