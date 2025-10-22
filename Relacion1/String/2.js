let nombre;
let cont = 0;
do {
    nombre = prompt("Dime un nombre");
    if (nombre != "fin") {
        cont++;
    }
} while (nombre != "fin");

document.write("Has introducido " + cont + " palabras");