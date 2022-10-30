import { Ruleta } from "./ruleta";

let readlineSync = require('readline-sync');

class Usuario {
    private perfilId: number;
    private nombre: string;
    private saldo: number;
    private apostar: boolean;

    constructor(pId: number, pNombre: string, pSaldo: number, pApostar: boolean) {
    this.perfilId = pId;
    this.nombre = pNombre;
    this.saldo = pSaldo;
    this.apostar = pApostar;
}


public getId(){
    return this.perfilId;
}

public getNombre(){
    return this.nombre;
}

public getSaldo(){
    return this.saldo;
}

public hacerApuesta(): void{
if (this.apostar == true){
    this.apostar = false;
} else {
    this.apostar = true;
}
}

public elegirJuego(){

}

public obtenerFichas(){

}

public salirDelJuego(){
    
}
}