export abstract class Tragamonedas{
    protected premio: number;
    protected saldo: number;

    constructor(pSaldo:number){
        this.saldo = pSaldo;
    }

    public getSaldo():number{
        return this.saldo;
    }


    iniciarJuego():void{
    }


}


