
let caracter;
let palabra = "";
let count = 0;
let vocales = "aeuioAEUIO";

do{
    caracter =prompt("Dame un carácter: ");
    if(caracter != "*"){
        if(vocales.includes(caracter)){
          count++ ;
            palabra += caracter.toLocaleUpperCase();
        }else{
            palabra += caracter.toLocaleLowerCase();
        }
    }
}while(caracter != "*");

document.write("Has introducido: " + palabra + " y " + count + " Vocales");