import { Blackjack } from "./blackjack";
import { Usuario } from "./usuario";
import { readlineSync } from "./main";

export class Casino {
    private blackjack: Blackjack;
   

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