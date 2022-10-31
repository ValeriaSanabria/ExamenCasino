export abstract class Tragamonedas{
    protected premio: number;
    protected saldo: number;

    constructor(psaldo:number){
        this.saldo = psaldo;
    }

    public getSaldo():number{
        return this.saldo;
    }

    ingresarApuesta():void{
    }

    iniciarJuego():void{
    }

    entregarPremio(psaldoUsuario):void{

    }

}


