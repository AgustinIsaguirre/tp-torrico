let numero;
let numeroInt;
let suma=0;

    do{
        
        numero = window.prompt("Ingrese un número"); 

        numeroInt = parseInt(numero);

        
           if(numero!=null){  
                if(isNaN(numeroInt)){
                    alert("Debe ingresar un número")
                }
                else{
                    suma=suma+numeroInt;
                }
           }    
    }
    while(numero!=null);
    
        
       alert("La suma de todos los número es: " + suma);

    