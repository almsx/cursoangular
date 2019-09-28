let peliculas = [
    {titulo: "titulo 1", genero: "comedia"},
    {titulo: "Titulo 2", genero: "drama"},
    {titulo: "Titulo 3", genero: "accion"},
    {titulo: "Titulo 4", genero: "comedia"}
];

let peliculasComedia = peliculas.filter(function(pelicula){
    return pelicula.genero == "comedia";
});

let final:string  = '';
peliculasComedia.forEach(function(pelicula){
    final += pelicula.titulo + ', ';
});

document.querySelector("#app").innerHTML = final;


/****************************************************** */

let boletoCine = (pelicula : string, horario: string, esMiembro?: any , pasoADulceria: boolean = false) => {
    let boleto = "Bienvenido a: " + pelicula + ', debes estar a las: ' + horario + '. Tu costo de boleto es: $';
    boleto += (esMiembro) ? 35 : 70;
    boleto += (pasoADulceria) ? ', y te vamos a regalar unos cacahuates!' : '';
    return boleto;
} 

document.querySelector('#app2').innerHTML=  boletoCine('King Kong', '7:00pm', true , false);


/************************************* */
interface Pelicula {
    titulo: string,
    duracion?: number, // param  opcional
    ganadoraOscar?: (gana: boolean) => void // Metodos sin implementar
}

// let ganoOscar = (gana: boolean):void  => {
//     console.log(gana ? 'Ha ganado un oscar' : ' No ha ganado un oscar');
// }

let pelicula: Pelicula = {
    titulo: "Algun titulo",
    duracion: 113,
    ganadoraOscar: (gana: boolean) =>  {
        console.log(gana ? 'Ha ganado un oscar' : ' No ha ganado un oscar')
    }
}
// let pel: Pelicula = {
//     titulo: "Algun titulo",
//     duracion: 113,
//     ganadoraOscar: ganoOscar(true)
// }

console.log(pelicula);
pelicula.ganadoraOscar(true);

/***************************************** */


interface Persona extends Fecha{
    nombre: string,
    apMaterno: string,
    apPaterno: string,
    getRfc? : (nombre:string, apMaterno:string, apPaterno:string, dia:number, mes:number, anio:number) => string;
}

interface Fecha {
    dia: number,
    mes: number,
    anio: number
}

let persona: Persona = {
    nombre: "Rafa",
    apMaterno: "Aleman",
    apPaterno: "Lucio",
    dia: 11,
    mes: 7,
    anio: 1980,
    getRfc: (nombre?, apMaterno?, apPaterno?, dia?, mes?, anio? ):string => {
        return "AELR800711";
    }
}

console.log(persona.getRfc());