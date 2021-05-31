let texto = [];
let i=-1;

    do{
        
        i++;
        texto[i] = window.prompt("Ingrese el texto que desee");     
        
    }
    while(texto[i]!=null);
    
        
        let suma = texto.join("-");

    console.log(suma);