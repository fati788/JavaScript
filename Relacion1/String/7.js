let texto = prompt("Damen un texto");
//a) Imprimir la primera mitad de los caracteres de la cadena.
document.write("la primera mitad de los caracteres de la cadena: ")
for (let i = 0; i < (texto.length) / 2; i++) {
    document.write(texto.charAt(i));
}

//b) Imprimir el último carácter.
    document.write("<br> El ultimo cracter es: " + texto.charAt(texto.length -1));

//c) Imprimirlo en forma inversa.
document.write("<br> Imprimirlo en forma inversa: " + texto.split("").reverse().join(""));

//d) Imprimir cada carácter del String separado con un guion
document.write("<br> Imprimir cada carácter del String separado con un guion: " +texto.split(""));
//e) Imprimir la cantidad de vocales almacenadas
let cont = 0;
let vocales = "aeuioAEUIO";

for(let i=0 ; i< texto.length ; i++){
 if(vocales.includes(texto.charAt(i))){
    cont++
 }
}

document.write("<br> Tiene " + cont + " Vocales");