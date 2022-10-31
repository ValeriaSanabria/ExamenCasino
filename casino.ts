
import { Blackjack } from "./blackjack";
import { Usuario } from "./usuario";
import { readlineSync } from "./main";
import { Tragamonedas } from "./tragamonedas";
import { Ruleta } from "./ruleta";
import { Blackjack } from "./blackjack";

export class Casino{
    private nombre: string;
    private tragamonedas: Tragamonedas[];
    private ruleta: Ruleta;
    private blackjack: Blackjack;
    private fondos: number;

    constructor(pNombre: string, pFondos){
this.nombre = pNombre;
this.fondos = pFondos;

    }
    constructor (pBlackjack: Blackjack){
        this.blackjack = pBlackjack;
    }

    public iniciarBlack (pBlackjack: Blackjack, pApuesta: number, pUsuario: Usuario): void {
        pBlackjack.iniciarJuegoBlackJack (pApuesta, pUsuario);
    }
 

    

    habilitarJugador(){
    }
    obtenerPerdida(){

    }
    obtenerGanancia(){

    }

}