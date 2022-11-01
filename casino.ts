
import { Blackjack } from "./blackjack";
import { Usuario } from "./usuario";
import { readlineSync } from "./main";
import { Tragamonedas } from "./abstractTragamonedas";
import { Ruleta } from "./ruleta";

export class Casino { 
    private nombre: string;
    private tragamonedas: Tragamonedas[];
    private ruleta: Ruleta;
    private blackjack: Blackjack;
    private fondos: number;

    constructor (pNombre: string, pFondos: number, pBlackjack: Blackjack) {
    this.nombre = pNombre;
    this.fondos = pFondos;
    this.blackjack = pBlackjack;
    }


    public iniciarBlack (pBlackjack: Blackjack, pApuesta: number, pUsuario: Usuario): void {
        pBlackjack.iniciarJuegoBlackJack (pApuesta, pUsuario);
    }
}