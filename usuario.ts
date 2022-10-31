import { Blackjack } from "./blackjack";
import { Casino } from "./casino";
import { readlineSync } from "./main";
import { Ruleta } from "./ruleta";

export class Usuario {

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
public setId(pPerfilId: number): void {
    this.perfilId = pPerfilId;
}
public getPerfilId (): number{
    return this.perfilId;
}
public setNombre (pNombre: string): void {
    this.nombre = pNombre;
}
public getNombre(){
    return this.nombre;
}
public sumarSaldo (pApuesta: number): number {
   return this.saldo += pApuesta * 2; 
   
}
public restarSaldo (pApuesta: number): void {
    this.saldo = this.saldo - pApuesta;
}
public getSaldo(){
    return this.saldo;
}

public hacerApuesta (pApuesta: number): void {
    this.saldo = this.saldo - pApuesta;


public hacerApuesta(): void{
if (this.apostar == true){
    this.apostar = false;
} else {
    this.apostar = true;
  }
}

public elegirJuego (pOpcion: number): void {
  if (pOpcion === 1 || pOpcion === 2 || pOpcion === 3 || pOpcion === 4){
    } 
}
//inciarJuegoBlack (pCasino: Casino): void {
//    pCasino.iniciarBlack (parametro)
//}

public obtenerFichas(){

}

public salirDelJuego(){
    
}
}