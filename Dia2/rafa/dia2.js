var peliculas = [
    { titulo: "titulo 1", genero: "comedia" },
    { titulo: "Titulo 2", genero: "drama" },
    { titulo: "Titulo 3", genero: "accion" },
    { titulo: "Titulo 4", genero: "comedia" }
];
var peliculasComedia = peliculas.filter(function (pelicula) {
    return pelicula.genero == "comedia";
});
var final = '';
peliculasComedia.forEach(function (pelicula) {
    final += pelicula.titulo + ', ';
});
document.querySelector("#app").innerHTML = final;
/****************************************************** */
var boletoCine = function (pelicula, horario, esMiembro, pasoADulceria) {
    if (pasoADulceria === void 0) { pasoADulceria = false; }
    var boleto = "Bienvenido a: " + pelicula + ', debes estar a las: ' + horario + '. Tu costo de boleto es: $';
    boleto += (esMiembro) ? 35 : 70;
    boleto += (pasoADulceria) ? ', y te vamos a regalar unos cacahuates!' : '';
    return boleto;
};
document.querySelector('#app2').innerHTML = boletoCine('King Kong', '7:00pm', true, false);
// let ganoOscar = (gana: boolean):void  => {
//     console.log(gana ? 'Ha ganado un oscar' : ' No ha ganado un oscar');
// }
var pelicula = {
    titulo: "Algun titulo",
    duracion: 113,
    ganadoraOscar: function (gana) {
        console.log(gana ? 'Ha ganado un oscar' : ' No ha ganado un oscar');
    }
};
// let pel: Pelicula = {
//     titulo: "Algun titulo",
//     duracion: 113,
//     ganadoraOscar: ganoOscar(true)
// }
console.log(pelicula);
pelicula.ganadoraOscar(true);
var persona = {
    nombre: "Rafa",
    apMaterno: "Aleman",
    apPaterno: "Lucio",
    dia: 11,
    mes: 7,
    anio: 1980,
    getRfc: function (nombre, apMaterno, apPaterno, dia, mes, anio) {
        return "AELR800711";
    }
};
console.log(persona.getRfc());
