import { Usuario } from "./usuario";

export abstract class Tragamonedas {
    protected listaRuedas: number[];
    protected cantRuedas: number;
    protected cantJugadas: number;
    protected premiosPagados: number;
    protected dineroRecaudado: number;
    protected apuesta: number;
    protected inicio: string;   

    constructor(pCantRuedas: number) {
        this.listaRuedas = [];        
        this.cantRuedas = pCantRuedas;
        this.cantJugadas = 0;
        this.premiosPagados = 0;
        this.dineroRecaudado = 0;
        this.apuesta;        
        this.inicio = "";
    }
    public girarRuedas(pCantRuedas: number): void {
        for (let i: number = 0; i < pCantRuedas; i++) {
          this.listaRuedas[i] = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        }    
        this.cantJugadas += 1 * 1;    
        this.dineroRecaudado += this.apuesta;
        console.log(this.listaRuedas);
      }

    public iniciarJuego(pUsuario: Usuario): void {
  
    }
}