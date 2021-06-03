let texto = [];
let i=0;

    do{
        
        
        texto[i] = window.prompt("Ingrese el texto que desee");     
        i++;
        
    }
    while(texto[i-1]!=null);
    
        
        let suma = texto.join("-");

    alert(suma);