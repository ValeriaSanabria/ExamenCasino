import {Tragamonedas} from "./abstractTragamonedas";

export class Tragamonedas4 extends Tragamonedas{

  constructor(pSaldo:number){
    super (pSaldo);
  }
  
  public getSaldo():number{
    return this.saldo;
  }

  restarApuesta(pSaldo: number):number{
      this.saldo = pSaldo -10;
      return this.saldo;
  }
  
  acreditarPremioDosAciertos(pSaldo: number):number{
      this.saldo = pSaldo + 500;
      return this.saldo;
  }

  acreditarPremioTresAciertos(pSaldo: number):number{
      this.saldo = pSaldo + 1000;
      return this.saldo;

  }

  acreditarPremioCuatroAciertos(pSaldo: number):number{
      this.saldo = pSaldo + 2000;
      return this.saldo;
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
            this.restarApuesta(this.saldo);
            rueda1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            rueda2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            rueda3 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            rueda4 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            console.log(rueda1,rueda2,rueda3,rueda4);
            }
                if (rueda1 === rueda2 && rueda2 === rueda3 && rueda3 === rueda4){
                console.log("Gano 2000");
                this.acreditarPremioCuatroAciertos(this.saldo);
                console.log ("Su saldo es: ", this.saldo);
                }
                else if(rueda1 === rueda2 && rueda2 === rueda3){
                console.log("Gano 1000");
                this.acreditarPremioTresAciertos(this.saldo);
                console.log ("Su saldo es: ", this.saldo);
                }
                else if(rueda1 === rueda2 ){
                console.log("Gano 500");
                this.acreditarPremioDosAciertos(this.saldo);
                console.log ("Su saldo es: ", this.saldo);
                }
                 else{
                console.log("Siga Participando...");
                console.log ("Su saldo es: ", this.saldo);

                  }
           inicio = readlineSync.question("Desea jugar de nuevo? "); 
        }
  }
}
