
class GestorLibros{
    private novedades: string;
    private registroLibros: Libro[];
 
    constructor( pRegistroLibros:Libro[]){
        this.registroLibros = pRegistroLibros;
        
       }
       
       verNovedades():void{
          this.novedades = this.novedades;
       }
       
       insertarLibro(insertarLibro:Libro):void{
          insertarLibro;
       }
       
       consultarLibro():void{
          this.registroLibros = this.registroLibros;
       }
       modificarLibro():void{
          this.registroLibros = this.registroLibros;
       }
       
       
       
       eliminarLibro(eliminarLibro:Libro):void{
          for(let i:number=0; i<this.registroLibros.length; i++){
             if(eliminarLibro.getNombreLibro() === this.registroLibros[i].getNombreLibro()){
                this.registroLibros.splice(i,1);
             }else{
                console.log("No se encontro Libro");
             }
          }
          
       }
    }
    
    
    class Libro{
       private nombreLibro: string;
       private autor: string;
       private editorial: string;
       private edicion:number; 
       private cantidadPaginas:number;
       private codigoIsbn:number; 
       
       constructor(pNombreLibro:string, pAutor:string, pEditorial:string, pEdicion:number, pCantidadPaginas:number,pCodigoIsbn:number){
          this.nombreLibro = pNombreLibro;
          this.autor = pAutor;
          this.editorial = pEditorial;
          this.edicion = pEdicion;
          this.cantidadPaginas = pCantidadPaginas;
          this.codigoIsbn = pCodigoIsbn;
       }
       
       public getNombreLibro():string{
          return this.nombreLibro;
       }
       public setNombreLibro(pNombreLibro: string):void{
          this.nombreLibro = pNombreLibro;
       } 
       public getAutor():string{
          return this.autor;
       }
       public setAutor(pAutor: string):void{
          this.autor = pAutor;
       } 
       public getEditorial():string{
          return this.editorial;
       }
       public setEditorial(pEditorial: string):void{
          this.editorial = pEditorial;
       } 
       public getEdicion():number{
          return this.edicion;
       }
       public setEdicion(pEdicion: number):void{
          this.edicion = pEdicion;
       } 
       public getCantidadPaginas():number{
          return this.cantidadPaginas;
       }
       public setCantidadPaginas(pCantidadPaginas: number):void{
          this.cantidadPaginas = pCantidadPaginas;
       } 
       public getCodigoIsbn():number{
          return this.codigoIsbn;
       }
       public setCodigoIsbn(pCodigoIsbn: number):void{
          this.codigoIsbn = pCodigoIsbn;
       } 
       
       
       
    }
    let libro1: Libro = new Libro("El Principito","Antoine de Saint-Exupéry","Emecé Editores",1,96,9788498381498); 
    let libro2: Libro = new Libro("El alquimista","Paulo Coelho","Companhia das Letras",2,192,9688441325489); 
    let libro3: Libro = new Libro("La Rana Maria","Arturo Boz","Campana",5,47,4548475563781); 
    let libro4: Libro = new Libro("Viajero Sin Rumbo","Federico hingz","Artemisa",2,125,9418354796475); 
    
    let registroLibros: Libro[] = [libro1,libro2,libro3,libro4];
    console.log(libro2);
 
    require
    let readlineSync = require('readline-sync');
    let accion: Array<string> = ["Insertar Libro","Consultar Libro","Modificar Libro","Eliminar Libro"];
    let i = 0
    i = readlineSync.keyInSelect(accion,"Bienvenido... elija una opcion: ");
    console.log("Gracias por elegir" , accion[i]);
    
    if(accion[i] === "Insertar Libro"){
       let nuevoLibro = readlineSync.question("Ingrese el nuevo libro: ");
       nuevoLibro.insertarLibro();
       
    }else if(accion[i] === "Consultar Libro"){
       let consultarLibro = readlineSync.question("Ingrese el libro que desea consultar: ");
       consultarLibro.consultarLibro();
 
    }else if(accion[i] === "Modificar Libro"){
       let modificarLibro = readlineSync.question("Ingrese el libro que desea modificar: ");
       modificarLibro.modificarLibro();
 
    }else if(accion[i] === "Eliminar Libro"){
       let eliminarLibro = readlineSync.question("Ingrese el libro que desea eliminar: ");
       eliminarLibro.eliminarLibro();
 
    }else{
      console.log("Error intente nuevamente");
    }
 
    
 //    import * as fs from 'fs';
 
 // let texto: string = fs.readFileSync('abc.txt', 'utf8');
 
 // let palabras: string[] = texto.split(' ');
 
 // console.log(palabras);
    
    
    
    
 
 
 
