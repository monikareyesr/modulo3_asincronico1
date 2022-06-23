class Libro {  //siempre en mayuscula la clase

    constructor(nombre_libro, autor, editorial, genero) {
        this.nombre_libro = nombre_libro;
        this.autor = autor;
        this.editorial = editorial;
        this.genero = genero;
    }

    mostrarLibro() {  //retorna un string con las propiedades del libro   //metodos
        const mensaje = this.nombre_libro + " - " + this.autor + " - " + this.editorial + " - " + this.genero
        return mensaje
    }
}

// instanciar objeto
const libro1 = new Libro('Crimen y castigo', 'Dovtoyevsky', 'Alma', 'novela');
const libro2 = new Libro('Un mundo feliz', 'Aldous Huxley', 'Planeta', 'novela');
const libro3 = new Libro('La belleza de pensar', 'E.anguita', 'Universidad de Valparaiso', 'epistolar');


const libros = [libro1, libro2, libro3];  //arreglo llamado libros

function filtrarPorAutor(libros, nombre_autor) {  //funcion filtrarPorautor
    //   const libros_autor = []  //array vacio

    //  for (let libro of libros) {
    //      if (libro.autor == nombre_autor) {
    //          libros_autor.push(libro)
    //      }
    //  }
    //  return libros_autor

     return libros.filter(function (lib){   //otra opcion
         return lib.autor == nombre_autor
     })
}

