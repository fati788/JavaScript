let fila = parseInt(prompt("Dame el numero de filas: "));
let columna = parseInt(prompt("Dame el numero de columnas: "));
let numero = 0;
document.write("<table border = '1'>");
for (let i = 1; i <= fila; i++) {
    document.write("<tr>");
    for (let j = 1; j <= columna; j++) {
        numero++;
        if (numero % 3 == 0) {
          document.write("<td style = 'background-color:red'>" + numero + "</td>");
        } else {
            document.write("<td>" + numero + "</td>");
        }
    }
    document.write("</tr>");
}



document.write("</table>");
