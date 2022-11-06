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
    public getNombre (): void {
        this.nombre;
    }
    public set (pNombre: string): string {
        this.nombre = pNombre;
        return this.nombre;
    }
    public iniciarBlackjack (pUsuario: Usuario): void {
        this.blackjack.iniciarJuegoBlackJack(pUsuario);
    }
    public iniciarRuleta(pUsuario: Usuario): void {
        this.ruleta.iniciarJuegoRuleta(pUsuario);
    }
    public inciarTragamonedas4(pUsuario: Usuario): void {
        this.tragamonedas4.iniciarJuego(pUsuario);
    }
    public inciarTragamonedas5(pUsuario: Usuario): void {
        this.tragamonedas5.iniciarJuego(pUsuario)
    }
    public mostrarEstadisticasBlackjack(): void {
        this.blackjack.mostrarEstadisticas();
    }
    public mostrarEstadistcasRuleta(): void {
        this.ruleta.mostrarEstadisticas();
    }
    public mostrarEstadisticasTragamonedas4(): void {
        this.tragamonedas4.mostrarEstadisticasTragamonedas4();
    }
    public mostrarEstadisticasTragamonedas5(): void {
        this.tragamonedas5.mostrarEstadisticasTragamonedas5();
    }
}