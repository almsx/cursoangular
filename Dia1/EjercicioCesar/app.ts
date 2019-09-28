/* FUNCIÓN EJEMPLO*/

/*function holaMundo(name:String){
    return "Hola Mundo ! Soy:"+name;
}
document.getElementById("container").innerHTML = holaMundo("Cesar");*/

/* FUNCIÓN 1 VALIDACIÓN INE */

/* function INE(edad:number){
    let edad_usr=edad;
    let respuesta:string;

    if(edad_usr < 18) {
        respuesta ="INE no autorizada";
    }
    else {
        respuesta ="INE  autorizada";
    }
    return respuesta;
}
document.getElementById("container").innerHTML = INE(20); */

/* FUNCIÓN 2 VALIDACIÓN RFC */

/*function RFC(nombre:string,paterno:string,materno:string,ayo:string,mes:string,dia:string,homoclave:string){

    let rfc_paterno = paterno.substr(0,2); 
    let rfc_materno = materno.substr(0,1);
    let rfc_nombre  = nombre.substr(0,1);

    //Variables Año
    let ayo_usr = ayo;
    let long_ayo_usr = (ayo_usr.length);
    //Variables Mes
    let mes_usr =mes;
    let long_mes_usr = (mes_usr.length);
    //Variables Día
    let dia_usr =dia;
    let long_dia_usr = (dia_usr.length);

    let cero:string="0";
    let comp_ayo:string;
    let comp_mes:string;
    let comp_dia:string;

    let comp_val:string=rfc_paterno+rfc_materno+rfc_nombre;
    let rfc_success:string;
    
    //Validación del Año
    if(long_ayo_usr = 4){
        comp_ayo = ayo.substr(2,4); 
    }
    else{
        comp_ayo = ayo;     
    }

    //Validación del Mes 
    if(long_mes_usr < 2){
        comp_mes = cero.concat(mes); 
    }
    else{
        comp_mes = mes; 
    }
    
    //Validación del día
    if(long_dia_usr < 2){
        comp_dia = cero.concat(dia); 
    }
    else{
        comp_dia = mes;   
    } 

    //Validación del Palabras Prohibidas
    if(long_dia_usr < 2){
        comp_dia = cero.concat(dia); 
    }
    else{
        comp_dia = mes;   
    } 

    //Variables Validacion Palabras Prohibidas
     if(comp_val = "PENE"){
        rfc_success = comp_val.substr(0,3)+"X"; 
    }
    else{
        rfc_success = comp_val;   
    } 

    //return "Valores Recibidos:"+nombre+"-"+paterno+"-"+materno+"-"+mes+"-"+dia+"-"+ayo+"-"+homoclave;
    //return "RFC:"+rfc_paterno+rfc_materno+rfc_nombre+comp_ayo+comp_mes+comp_dia+homoclave+rfc_success;  
    return "RFC:"+rfc_success+comp_ayo+comp_mes+comp_dia+homoclave; 
}
document.getElementById("container").innerHTML = RFC("ENRIQUE","PEÑA","NIETO","1984","3","9","HM0");*/

/* FUNCIÓN MULTIPLICACIÓN */

function MULTIPLICACION(dato:number){
    let valor_x:number;
    let respuesta:string;

    /* for(let i=0; i<4; i++){
        console.log("iteracion"+i);
    }  */

    for(let contador=1; contador<=20; contador++){

       valor_x = dato * contador;
        respuesta= "El resultado  de multiplicar:" + dato +"*"+contador+"="+valor_x;

        console.log(respuesta);
        
    }
        return respuesta;
        
}
document.getElementById("container").innerHTML = MULTIPLICACION(2);