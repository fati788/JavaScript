let fila = parseInt(prompt("Dime cuantas filas"));
let columna = parseInt(prompt("Dime cuantas columnas"));
document.write("<table border = '1' style='border-collapse: collapse'>");
let numero = 1;
for (let i = 1; i <= fila; i++) {
    document.write("<tr>");

    for (let i = 1; i <= columna; i++) {
        document.write("<td>");
        if (numero % 3 == 0) {
            document.write("<td style='background-color:#F00'>");
            document.write(numero);
            document.write("</td>");
        } else {
            document.write("<td>");
            document.write(numero);
            document.write("</td>");
        }
        numero++;


    }
    document.write("</tr>");
}





document.write("</table>");