import { Blackjack } from "./blackjack";
import { Casino } from "./casino";
import { readlineSync } from "./main";
import { Ruleta } from "./ruleta";

export class Usuario {

    private perfilId: number;
    private nombre: string;
    private saldo: number;

    constructor (pId: number, pNombre: string, pSaldo: number) {
    this.perfilId = pId;
    this.nombre = pNombre;
    this.saldo = pSaldo;
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
public getNombre(): string {
    return this.nombre;
}
public sumarSaldo (pApuesta: number): number {
   return this.saldo += pApuesta * 2; 
}
public cobrarEmpate (pApuesta: number): number {
    return this.saldo += pApuesta * 1; 
}
public restarSaldo (pApuesta: number): void {
    this.saldo = this.saldo - pApuesta;
}
public getSaldo(): number {
    return this.saldo;
}

}
