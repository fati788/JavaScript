let cadena = prompt("Dime una cadena");
let reverse = cadena.split("").reverse().join("");

if(cadena === reverse){
    document.write("El palabra es palíndromo");
}else{
    document.write("El numero NOOO es palíndromo");
}