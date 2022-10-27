export class Blackjack {
    private premio: number;
    private numeroCarta: number;
    private palo: string;
    private banca: Banca;

    constructor(pPremio: number){
        this.premio = pPremio;
        this.palo = "diamantes";
        this.numeroCarta = 1;
    }
}