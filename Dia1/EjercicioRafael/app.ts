function holaMundo(name: string): string {
    return "Hola, soy: " + name;
}

function printINE(edad: number): string {
    let str =  (edad >= 18) ? 'Si' : 'No';
    return str + ` puede tener INE con ${edad} años de edad`;
}


function getRFC (nombre: string, apPaterno: string, apMaterno:string, ano:number, mes:number, dia:number): string {
    
    let ano2d, mes2d, dia2d, rfc;

    if(ano >= 1900){

        let fnac = new Date(ano + "-01-02");
        ano2d = fnac.getFullYear().toString().substr(-2);

    } else if(ano <= 99) {
        ano2d = ano
    }

    if(mes <= 9){
        mes2d = "0" + mes;
    } else if(mes >12 || mes <= 0){
        mes2d = "00";
        alert('Mes invalido');
    } else{
        mes2d = mes;
    }

    if(dia <= 9){
        let dia2d = "0" + dia;
    } else if(dia >31 || dia <= 0){
        dia2d = "00";
        alert('dia invalido');
    } else{
        dia2d = dia;
    }

    rfc = apPaterno.substr(0,2) + apMaterno.substr(0,1) + nombre.substr(0,1) + ano2d + mes2d + dia2d + 'XXX';

    return "RFC: " + rfc.toUpperCase();
}

function tablaMultiplicar(numero: number):string {
    let tablas:string = `La tabla del ${numero} es: <br><br>`;
    for(let i=1; i<= 20; i++){
        tablas += `${numero}x${i}=${numero*i} <br>`;
    }

    return tablas;
}

document.querySelector('#tabla').innerHTML = tablaMultiplicar(5);
document.querySelector('#datos').innerHTML = getRFC('Rafael', "Aleman", "Lucio", 1980, 7, 41);
document.querySelector('#ine').innerHTML = printINE(19);