let nota1=undefined;
let corte=undefined;
let verif;   
do{    
        do{
        
            nota1 = window.prompt("Ingrese una nota del 0 al 10");

            nota1 = parseInt(nota1);

            verif=true;

                if(isNaN(nota1)){
                    verif=false
                }

                if(nota1<0 || nota1>10){

                    alert("Debe Ingresar un número entre 0 y 10");

                    verif=false;
                }    

        }

        while(verif===false);

        
    switch(nota1){

                case 0:
                case 1:
                case 2:
                case 3:{alert("Muy deficiente");break;}

                case 4:
                case 5:{alert("insuficiente");break;}

                case 6:{alert("suficiente");break;}

                case 7:{alert("Bien");break;}

                case 8:
                case 9:{alert("Notable");break;}

                case 10:{alert("Sobresaliente");break;} 
          
               
            
     }
     corte = window.confirm("¿Desea ingresar otra nota?");
}   
      while(corte===true);
    




    
    
    
    



