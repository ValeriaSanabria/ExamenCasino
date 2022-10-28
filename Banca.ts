export class Banca{
    
    pedirCartaAleatoria(): number {
        let carta: number;
        carta = Math.floor(Math.random () * (14 - 1)) + 1;
        return carta
    }
}
