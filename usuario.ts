import { Blackjack } from "./blackjack";
import { Casino } from "./casino";

export class Usuario {
    private perfilId: number;
    private nombre: string;
    private saldo: number;

    constructor(pId: number, pNombre: string, pSaldo: number) {
    this.perfilId = pId;
    this.nombre = pNombre;
    this.saldo = pSaldo;
    //this.profileId = Casino.profiles.size();
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