let nombre;
let cont = 0;
do {
    nombre = prompt("Dime un nombre");
    if (nombre != "fin" && nombre != "Fin" && nombre != "FIN") {
        cont++;
    }
} while (nombre != "fin" && nombre != "Fin" && nombre != "FIN");

document.write("Has introducido " + cont + " palabras");