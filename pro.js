var GestorLibros = /** @class */ (function () {
    function GestorLibros(pRegistroLibros) {
        this.registroLibros = pRegistroLibros;
    }
    GestorLibros.prototype.verNovedades = function () {
        this.novedades = this.novedades;
    };
    GestorLibros.prototype.insertarLibro = function (insertarLibro) {
        insertarLibro;
    };
    GestorLibros.prototype.consultarLibro = function () {
        this.registroLibros = this.registroLibros;
    };
    GestorLibros.prototype.modificarLibro = function () {
        this.registroLibros = this.registroLibros;
    };
    GestorLibros.prototype.eliminarLibro = function (eliminarLibro) {
        for (var i_1 = 0; i_1 < this.registroLibros.length; i_1++) {
            if (eliminarLibro.getNombreLibro() === this.registroLibros[i_1].getNombreLibro()) {
                this.registroLibros.splice(i_1, 1);
            }
            else {
                console.log("No se encontro Libro");
            }
        }
    };
    return GestorLibros;
}());
var Libro = /** @class */ (function () {
    function Libro(pNombreLibro, pAutor, pEditorial, pEdicion, pCantidadPaginas, pCodigoIsbn) {
        this.nombreLibro = pNombreLibro;
        this.autor = pAutor;
        this.editorial = pEditorial;
        this.edicion = pEdicion;
        this.cantidadPaginas = pCantidadPaginas;
        this.codigoIsbn = pCodigoIsbn;
    }
    Libro.prototype.getNombreLibro = function () {
        return this.nombreLibro;
    };
    Libro.prototype.setNombreLibro = function (pNombreLibro) {
        this.nombreLibro = pNombreLibro;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.setAutor = function (pAutor) {
        this.autor = pAutor;
    };
    Libro.prototype.getEditorial = function () {
        return this.editorial;
    };
    Libro.prototype.setEditorial = function (pEditorial) {
        this.editorial = pEditorial;
    };
    Libro.prototype.getEdicion = function () {
        return this.edicion;
    };
    Libro.prototype.setEdicion = function (pEdicion) {
        this.edicion = pEdicion;
    };
    Libro.prototype.getCantidadPaginas = function () {
        return this.cantidadPaginas;
    };
    Libro.prototype.setCantidadPaginas = function (pCantidadPaginas) {
        this.cantidadPaginas = pCantidadPaginas;
    };
    Libro.prototype.getCodigoIsbn = function () {
        return this.codigoIsbn;
    };
    Libro.prototype.setCodigoIsbn = function (pCodigoIsbn) {
        this.codigoIsbn = pCodigoIsbn;
    };
    return Libro;
}());
var libro1 = new Libro("El Principito", "Antoine de Saint-Exupéry", "Emecé Editores", 1, 96, 9788498381498);
var libro2 = new Libro("El alquimista", "Paulo Coelho", "Companhia das Letras", 2, 192, 9688441325489);
var libro3 = new Libro("La Rana Maria", "Arturo Boz", "Campana", 5, 47, 4548475563781);
var libro4 = new Libro("Viajero Sin Rumbo", "Federico hingz", "Artemisa", 2, 125, 9418354796475);
var registroLibros = [libro1, libro2, libro3, libro4];
console.log(libro2);
require;
var readlineSync = require('readline-sync');
var accion = ["Insertar Libro", "Consultar Libro", "Modificar Libro", "Eliminar Libro"];
var i = 0;
i = readlineSync.keyInSelect(accion, "Bienvenido... elija una opcion: ");
console.log("Gracias por elegir", accion[i]);
if (accion[i] === "Insertar Libro") {
    var nuevoLibro = readlineSync.question("Ingrese el nuevo libro: ");
    nuevoLibro.insertarLibro();
}
else if (accion[i] === "Consultar Libro") {
    var consultarLibro = readlineSync.question("Ingrese el libro que desea consultar: ");
    consultarLibro.consultarLibro();
}
else if (accion[i] === "Modificar Libro") {
    var modificarLibro = readlineSync.question("Ingrese el libro que desea modificar: ");
    modificarLibro.modificarLibro();
}
else if (accion[i] === "Eliminar Libro") {
    var eliminarLibro = readlineSync.question("Ingrese el libro que desea eliminar: ");
    eliminarLibro.eliminarLibro();
}
else {
    console.log("Error intente nuevamente");
}
//    import * as fs from 'fs';
// let texto: string = fs.readFileSync('abc.txt', 'utf8');
// let palabras: string[] = texto.split(' ');
// console.log(palabras);
