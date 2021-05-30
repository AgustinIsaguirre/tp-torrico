
do{  
    let nota1 = window.prompt("Ingrese una nota del 0 al 10");

    nota1 = parseInt(nota1);
}
while(isNaN(nota1));

do{



        switch(nota1){

            case 0,1,2,3:{console.log("Muy deficiente");break;}

            case 4,5:{console.log("insuficiente");break;}

            case 6:{console.log("suficiente");break;}

            case 7:{console.log("Bien");break;}

            case 8,9:{console.log("Notable");break;}

            case 10:{console.log("Sobresaliente");break;} 

            default:{console.log("Debe ingresar un numero entre 0 y 10");break;}
        }

    
    
}
while(nota1 <0 || nota1 >10);