let peliculas = [
    {
        genero: 'Comedia', titulo: 'Scary Movie',
    },
    {
        genero: 'Terror', titulo: 'Chucku',
    },
    {
        genero: 'Suspenso', titulo: 'Duro de matar',
    },
];

/* JS */
let movies = peliculas.filter(function (pelicula) {
    return pelicula.genero == 'Terror';
});
/* TS */
let peliculasAccion = peliculas.filter(pelicula => pelicula.genero == 'Comedia');

let peliSeleccionada: string = "";

movies.forEach(movie => {
    peliSeleccionada += movie.titulo + ", ";
});


let ps: string = "";

peliculasAccion.forEach(movie => {
    ps += movie.titulo + ", ";
});

console.log('Ex1');

peliculas.forEach(() => console.log('Vista!'));

console.log('Ex2');

peliculas.forEach(pelicula => console.log(pelicula.titulo + ' vista!'));

console.log('Ex3');

peliculas.forEach((pelicula, index) => {
    let texto = pelicula.titulo + ' (' + pelicula.genero + ')' + ' vista! ' + index;
    console.log(texto);
});

/* IV Function Arrw */

function Pelicula() {
    let self = this;
    self.anoEstreno = 2000;
    setTimeout(function () {
        console.log(self.anoEstreno);
    }, 1500);
}

Pelicula();

function Pelicula3() {
    //let self = this;
    //self.anoEstreno = 2000;
    var estreno = 5000;
    function mensaje(estreno){
        console.log(estreno);
    }
    setTimeout(function () {
        mensaje(estreno);
    }, 3500);
}
Pelicula3();

function PeliculaArrow() {
    this.añoEstreno = 2000; setTimeout(() => {
        console.log(this.añoEstreno);
    }, 4500);
}

PeliculaArrow();
/* Imprimir resutadp */

interface Pelicula{
    titulo: string,
    duracion?: number,
    ganadoraOscar?: (gana: boolean) => void
}

let pelicula: Pelicula = {
    titulo: 'Chucky',
    duracion: 120,
    ganadoraOscar: (gana: boolean) =>
    console.log(gana ? 'SI gano': 'NO gano' )
}

let verPelicula = (gana:boolean): void => {
    console.log(gana ? 'SI gano': 'NO gano' )
}

interface Persona {
    nombre: string,
    apellido: string
}

interface DirectorCine extends Persona {
    numPeliculaDirigidas: number
}

let director: DirectorCine= {
    nombre: 'Alberto',
    apellido: 'Tadeo',
    numPeliculaDirigidas: 20
}

console.log('pelicula');
console.log(pelicula);
console.log('pelicula');
console.log(director);
console.log('Director ', director);



pelicula.ganadoraOscar(true);

interface People{
    name: string,
    paterno: string,
    materno: string,
    rfc: (name: string, paterno: string, materno: string) => string
}

let generar: People = {
    name: 'Albe',
    paterno: 'Luebbert',
    materno: 'Mendoza',
    rfc: (name: 'a', paterno: 's', materno: 's')
}

let verPelicula = (gana:boolean): void => {
    console.log(gana ? 'SI gano': 'NO gano' )
}



document.querySelector('#app').innerHTML = peliSeleccionada;
document.querySelector('#app2').innerHTML = ps;


