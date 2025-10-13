let caracter
let contador = 0;
let palabra = "";
do {
    let vocales = "aeuioAEUIO";
    caracter = prompt("Dame un caracter");
    if (caracter != "*") {
        if (vocales.includes(caracter)) {
            caracter = caracter.toUpperCase();
            contador++;
        } else {
            caracter = caracter.toLowerCase();
        }
        palabra += caracter;
    }
} while (caracter != "*");

document.write("Resultado: " + palabra + " y hay " + contador + " Vocales");
