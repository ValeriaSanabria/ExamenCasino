class Usuario {
    private perfilId: number;
    private nombre: string;
    private saldo: number;

    constructor(pId: number, pNombre: string, pSaldo: number) {
    this.perfilId = pId;
    this.nombre = pNombre;
    this.saldo = pSaldo;
    //this.profileId = Casino.profiles.size();
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

public hacerApuesta(){

}

public elegirJuego(){

}

public obtenerFichas(){

}

public salirDelJuego(){
    
}
}