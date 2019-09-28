let peliculas = [
    {genero: 'Comedia', titulo: 'Scary Movie',
    },
    {genero: 'Terror', titulo: 'Chucku',
    },
    {genero: 'Suspenso', titulo: 'Duro de matar',
    },
];

/* JS */
let movies = peliculas.filter(function(pelicula){
    return pelicula.genero == 'Terror';
});
/* TS */
let peliculasAccion = peliculas.filter(pelicula => pelicula.genero == 'Comedia');

let peliSeleccionada: string = "";

movies.forEach(movie => {
    peliSeleccionada += movie.titulo + ", ";
});


let ps: string = "";

peliculasAccion.forEach(movie =>{
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

/* Imprimir resutadp */

document.querySelector('#app').innerHTML = peliSeleccionada;
document.querySelector('#app2').innerHTML = ps;
