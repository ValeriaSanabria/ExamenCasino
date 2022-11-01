import {Tragamonedas} from "./abstractTragamonedas";

export class Tragamonedas4 extends Tragamonedas{

    constructor(psaldo:number){
        super (psaldo)
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

        console.log("Bienvenido al Tragamonedas de cuatro ruedas...");
        let inicio = readlineSync.question("Desea Jugar Ya?...");
        while (inicio === "si" || inicio === "no"){
            if (inicio === "no") {
                console.log("Gracias... vuelva pronto.");
                break;
            }          
            else if (inicio === "si"){
            rueda1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            rueda2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            rueda3 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            rueda4 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            console.log(rueda1,rueda2,rueda3,rueda4);
            }
                if (rueda1 === rueda2 && rueda2 === rueda3 && rueda3 === rueda4){
                console.log("Gano 1000")
              }
                else if(rueda1 === rueda2 && rueda2 === rueda3){
                console.log("Gano 500")
              }
                else if(rueda1 === rueda2 ){
                console.log("Gano 200")
              }
                 else{
                console.log("Siga Participando...")
              }

            inicio = readlineSync.question("Desea jugar de nuevo? "); 

        }
 
                   


    }

    entregarPremio(psaldoUsuario):void{

    }

}

// let tragamonedas1: Tragamonedas4 = new Tragamonedas4(100);
// tragamonedas1.iniciarJuego();

