let max;


do{
    max = window.prompt("Ingrese el número máxmo de la pirámide");

    max = parseInt(max);

    console.log(max);

}
while(isNaN(max));

for(let i = max; i>=1; i--){
    for(let a=1; a<=i;a++){
        document.write(i);
    }
    document.write("<br>");
}