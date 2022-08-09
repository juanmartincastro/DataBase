class Usuario {
    constructor (nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
        this.mascotas = []
        this.libros = []
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`  
    }

    addMascotas(nombreMascota){
        const mascotas = this.mascotas
        mascotas.push(nombreMascota)
    }

    countMascotas(){
        return this.mascotas.length
    }

    addBook(nombreLibro, autorLibro){
            const libros = this.libros
            libros.push({nombre: `${nombreLibro}`, autor: `${autorLibro}`})
            
    }

    getBookNames(){
        const soloNombreLibros = this.libros.map((el) => el.nombre).join(", ")
        return soloNombreLibros
    }
}

const usuario1 = new Usuario('Juan Martin', 'Castro')

console.log(usuario1.getFullName())
console.log(usuario1.addMascotas("Margo"))
console.log(usuario1.addMascotas("Braulio"))
console.log(usuario1.addMascotas("Dante"))
console.log(usuario1.countMascotas())
console.log(usuario1.addBook("El guardian entre el centeno", "J. D. Sallinger"))
console.log(usuario1.addBook("1984", "George Orwell"))
console.log(usuario1.getBookNames())



