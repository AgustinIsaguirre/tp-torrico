let nota1=undefined;
let corte=undefined;   
do{    
        do{
        
            nota1 = window.prompt("Ingrese una nota del 0 al 10");

            nota1 = parseInt(nota1);

            console.log(nota1);

        }

        while(isNaN(nota1));

        if(nota1<0 || nota1>10){

            alert("Debe Ingresar un número entre 0 y 10");
        
            do{

                nota1 = window.prompt("Ingrese una nota del 0 al 10");
            
                nota1 = parseInt(nota1);
            
            }
            
            while(isNaN(nota1));
        }
        
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
    




    
    
    
    



