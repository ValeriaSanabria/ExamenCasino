import  { Tragamonedas } from "./tragamonedas";
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



habilitarJugador(){

}
obtenerPerdida(){

}
obtenerGanancia(){
    
}

}