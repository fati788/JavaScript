function longitud(){
    let texto;
    do{
        texto = prompt("Dime una cadena");
    }while(texto.length < 3)
        document.write("El longitud de la cadena es: " +texto.length);
}

longitud();