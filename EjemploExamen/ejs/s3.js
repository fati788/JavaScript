/*Realiza una página en la que pida el numero de filas y el numero de columnas por
teclado y pinte el fondo de la columna de color naranja si el numero es multipolo de 3.*/
let fila = parseInt(prompt("Dame numeros de filas"));
let columna = parseInt(prompt("Dame numero de columnas: "));
let cont = 0;
document.write("<table border = '1'>");
for (let i = 1; i <= fila; i++) {
    document.write("<tr>")
    for (let j = 1; j <= columna; j++) {

        cont++;
        if(cont % 3 == 0){
            document.write("<td style =' background-color: orange; padding: 10px'>" + cont + "</td>");
        }else{
        document.write("<td style ='padding: 10px'>" + cont + "</td>");
        }
    }


    document.write("</tr>");
}

document.write("</table>");