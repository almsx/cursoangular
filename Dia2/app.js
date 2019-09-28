var peliculas = [
    {
        genero: 'Comedia', titulo: 'Scary Movie'
    },
    {
        genero: 'Terror', titulo: 'Chucku'
    },
    {
        genero: 'Suspenso', titulo: 'Duro de matar'
    },
];
/* JS */
var movies = peliculas.filter(function (pelicula) {
    return pelicula.genero == 'Terror';
});
/* TS */
var peliculasAccion = peliculas.filter(function (pelicula) { return pelicula.genero == 'Comedia'; });
var peliSeleccionada = "";
movies.forEach(function (movie) {
    peliSeleccionada += movie.titulo + ", ";
});
var ps = "";
peliculasAccion.forEach(function (movie) {
    ps += movie.titulo + ", ";
});
console.log('Ex1');
peliculas.forEach(function () { return console.log('Vista!'); });
console.log('Ex2');
peliculas.forEach(function (pelicula) { return console.log(pelicula.titulo + ' vista!'); });
console.log('Ex3');
peliculas.forEach(function (pelicula, index) {
    var texto = pelicula.titulo + ' (' + pelicula.genero + ')' + ' vista! ' + index;
    console.log(texto);
});
/* IV Function Arrw */
function Pelicula() {
    var self = this;
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
    function mensaje(estreno) {
        console.log(estreno);
    }
    setTimeout(function () {
        mensaje(estreno);
    }, 3500);
}
Pelicula3();
function PeliculaArrow() {
    var _this = this;
    this.añoEstreno = 2000;
    setTimeout(function () {
        console.log(_this.añoEstreno);
    }, 4500);
}
PeliculaArrow();
var pelicula = {
    titulo: 'Chucky',
    duracion: 120,
    ganadoraOscar: function (gana) {
        return console.log(gana ? 'SI gano' : 'NO gano');
    }
};
var verPelicula = function (gana) {
    console.log(gana ? 'SI gano' : 'NO gano');
};
var director = {
    nombre: 'Alberto',
    apellido: 'Tadeo',
    numPeliculaDirigidas: 20
};
console.log('pelicula');
console.log(pelicula);
console.log('pelicula');
console.log(director);
console.log('Director ', director);
pelicula.ganadoraOscar(true);
var generar = {
    name: 'Albe',
    paterno: 'Luebbert',
    materno: 'Mendoza',
    rfc: function (name, paterno, materno) {
        return ;
    }
};
var verPelicula = function (gana) {
    console.log(gana ? 'SI gano' : 'NO gano');
};
document.querySelector('#app').innerHTML = peliSeleccionada;
document.querySelector('#app2').innerHTML = ps;
