export class Tragamonedas{
    private premio: number;
    private saldo: number;
    // private ruedas: Ruedas[];

    constructor(psaldo:number){
        this.saldo = psaldo;
    }

    public getSaldo():number{
        return this.saldo;
    }

    ingresarApuesta():void{

    }

    iniciarJuego():void{
        let readlineSync = require('readline-sync');
        let rueda1 = 0;
        let rueda2 = 0;
        let rueda3 = 0;
        let rueda4 = 0;

        console.log("Bienvenido al Tragamonedas");
        let inicio = readlineSync.question("Desea Jugar Ya?");
        if (inicio === "si"){
            rueda1 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
            rueda2 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
            rueda3 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
            rueda4 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
            console.log(rueda1,rueda2,rueda3,rueda4);


        }else{
            console.log("Gracias por su visita...");
        }


    }

    entregarPremio(psaldoUsuario):void{

    }

}

let nuevoJugador: Tragamonedas = new Tragamonedas(100);
