function cuadrado(caracter, numero) {
    for (let j = 1; j <= numero; j++) {
        for (let i = 1; i <= numero; i++) {
            document.write(caracter);
        }
        document.write("<br>");
    }

}




cuadrado("#", 3);