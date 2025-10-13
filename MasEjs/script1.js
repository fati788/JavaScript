function esPrima(numero){
    for(let i =23; i< numero ; i++){
        if(numero % i == 0){
            return false;
        }else{
           return true;
        }
    }
}


let fila = parseInt(prompt("Dame numeros de fila"));
let columna = parseInt(prompt("Dame numeros de columna"));

let numero = 0;
document.write("<table border = '1'>");
for (let i= 1 ; i<= fila ; i++ ){
    
    document.write("<tr>"); 
    for(let j= 1 ; j<= columna ; j++ ){
        numero ++;
        if(esPrima(numero)){
        document.write("<td class='amarillo'>" + numero + "</td>");
        }else{
            document.write("<td>" + numero + "</td>");
        }
    }
    document.write("</tr>");
}
document.write("</table");