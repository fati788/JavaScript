function operadores(num1, num2, num3, num4, num5) {
    //a) El mayor de todos los números recibidos
    if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
        document.write("El numero mayor es: " + num1);
    } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
        document.write("El numero mayor es: " + num2);
    } if (num3 > num2 && num3 > num1 && num3 > num4 && num3 > num5) {
        document.write("El numero mayor es: " + num3);
    } if (num4 > num2 && num4 > num3 && num4 > num1 && num4 > num5) {
        document.write("El numero mayor es: " + num4);
    } if (num5 > num2 && num5 > num3 && num5 > num4 && num5 > num1) {
        document.write("El numero mayor es: " + num5);
    }
    document.write("<br>");
    //b) El menor de todos los números recibidos
    if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5) {
        document.write("El numero menor es: " + num1);
    } else if (num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5) {
        document.write("El numero menor es: " + num2);
    } if (num3 < num2 && num3 < num1 && num3 < num4 && num3 < num5) {
        document.write("El numero menor es: " + num3);
    } if (num4 < num2 && num4 < num3 && num4 < num1 && num4 < num5) {
        document.write("El numero menor es: " + num4);
    } if (num5 < num2 && num5 < num3 && num5 < num4 && num5 < num1) {
        document.write("El numero menor es: " + num5);
    }
    document.write("<br>");
    //c) La media de todos los números recibidos
    let suma = num1 + num2 + num3 + num4 + num5;
    document.write(" La media de todos los números recibidos es: " + (suma / 5));
    document.write("<br>");
    let contador = 0;
    if (num1 % 5 == 0) {
        contador++;
    } if (num2 % 5 == 0) {
        contador++;
    } if (num3 % 5 == 0) {
        contador++;
    } if (num4 % 5 == 0) {
        contador++;
    } if (num5 % 5 == 0) {
        contador++;
    }
    document.write("hay " + contador + " numeros múltiplos de 5 ");
}
let num1 , num2 , num3 , num4 , num5;
do{
num1 = parseInt(prompt("Dame el primer numero: "));

}while( isNaN(num1) || num1 === null || num1 === " ");

do{
 num2 = parseInt(prompt("Dame el segundo numero: "));
}while(isNaN(num2) || num2 === null || num2 === " " );

do{
    num3 = parseInt(prompt("Dame el tercer numero: "));
}while(isNaN(num3) || num3 === null || num3 === " ");

do{
    num4 = parseInt(prompt("Dame el numero nº 4: "));
}while(isNaN(num4) || num4 === null || num4 === " ");
do{
    num5 = parseInt(prompt("Dame el numero nº 5: "));
}while(isNaN(num5) || num5 === null || num5 === " ");

operadores(num1 , num2 , num3 , num4 , num5);