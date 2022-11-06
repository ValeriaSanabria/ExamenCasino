import {Blackjack} from "./blackjack";
import {Usuario} from "./usuario";
import {Ruleta} from "./ruleta";
import {Tragamonedas4} from "./tragamonedasCuatroRuedas";
import {Tragamonedas5} from "./tragamonedasCincoRuedas";

export class Casino {
    private nombre: string;
    private ruleta: Ruleta;
    private blackjack: Blackjack;
    private tragamonedas4: Tragamonedas4;
    private tragamonedas5: Tragamonedas5;

    constructor(pNombre: string, pRuleta: Ruleta, pBlackjack: Blackjack, pTragamonedas4: Tragamonedas4, pTragamonedas5: Tragamonedas5) {
        this.nombre = pNombre;
        this.blackjack = pBlackjack;
        this.ruleta = pRuleta;
        this.tragamonedas4 = pTragamonedas4;
        this.tragamonedas5 = pTragamonedas5
    }
    public iniciarBlackjack (pBlackjack: Blackjack, pUsuario: Usuario): void {
        pBlackjack.iniciarJuegoBlackJack (pUsuario);
    }
    public iniciarRuleta(pRuleta: Ruleta, pUsuario: Usuario): void {
        pRuleta.iniciarJuegoRuleta(pUsuario);
    }
    public inciarTragamonedas4(pUsuario: Usuario): void {
        this.tragamonedas4.iniciarJuego(pUsuario);
    }
    public inciarTragamonedas5(pUsuario: Usuario): void {
        this.tragamonedas5.iniciarJuego(pUsuario)
    }
    public mostrarEstadisticasBlackjack(pBlackjack: Blackjack): void {
        pBlackjack.generarEstadisticas();
    }
    public mostrarEstadisticasTragamonedas4() {
        this.tragamonedas4.mostrarEstadisticasTragamonedas4();
    }
    public mostrarEstadisticasTragamonedas5() {
        this.tragamonedas5.mostrarEstadisticasTragamonedas5();
    }

}