var peliculas = [
    { genero: 'Comedia', titulo: 'Scary Movie'
    },
    { genero: 'Terror', titulo: 'Chucku'
    },
    { genero: 'Suspenso', titulo: 'Duro de matar'
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
/* Imprimir resutadp */
document.querySelector('#app').innerHTML = peliSeleccionada;
document.querySelector('#app2').innerHTML = ps;
