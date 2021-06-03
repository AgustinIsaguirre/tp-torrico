let dni;
let resto;

do{
        
    dni = window.prompt("Ingrese su número de DNI");

    dni = parseInt(dni);

    console.log(dni);

}

while(isNaN(dni));

if(dni<0 || dni>99999999){

    alert("Debe Ingresar un número entre 0 y 99-999-999");

    do{

        dni = window.prompt("Ingrese su número de DNI");
    
        dni = parseInt(dni);
    
    }
    
    while(isNaN(dni));
}
