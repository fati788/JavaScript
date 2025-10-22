function operaciones(n1 , n2 , n3 , n4 , n5){
    if(n1> n2 && n1> n3 && n1>n4 && n1>n5){
        document.write("El mayor es: " + n1);
    }else if(n2> n1 && n2> n3 && n2>n4 && n2>n5){
        document.write("El mayor es: " + n2);
    }else if(n3> n2 && n3> n1 && n3>n4 && n3>n5){
        document.write("El mayor es: " + n3);
    }else if(n4> n2 && n4> n3 && n4>n1 && n4>n5){
        document.write("El mayor es: " + n4);
    }else if(n5> n2 && n5> n3 && n5>n4 && n5>n1){
        document.write("El mayor es: " + n5);
    }
    document.write("<br>");

    if(n1< n2 && n1< n3 && n1<n4 && n1<n5){
        document.write("El menor es: " + n1);
    }else if(n2< n1 && n2< n3 && n2<n4 && n2<n5){
        document.write("El menor es: " + n2);
    }else if(n3< n2 && n3< n1 && n3<n4 && n3<n5){
        document.write("El menor es: " + n3);
    }else if(n4< n2 && n4< n3 && n4<n1 && n4<n5){
        document.write("El menor es: " + n4);
    }else if(n5< n2 && n5< n3 && n5<n4 && n5<n1){
        document.write("El menor es: " + n5);
    }
    document.write("<br>");
    document.write("La media de estos numeros es: " + ((n1 + n2 + n3 + n4 + n5)/5));
    let cont = 0;
     document.write("<br>");
    if(n1%5 == 0){
        cont++;
    }else if(n2%5 == 0){
        cont++;
    }else if(n3%5 == 0){
        cont++;
    }else if(n4%5 == 0){
        cont++;
    }else if(n5%5 == 0){
        cont++;
    }
document.write("Hay " +cont + " divisores de 5");

}

let n1 , n2 , n3 , n4 , n5  ;

do{
 n1 = parseInt(prompt("Dame un numero"));
}while(isNaN(n1) || n1 === " " || n1 === null);
do{
 n2 = parseInt(prompt("Dame un numero"));
}while(isNaN(n2) || n2 === " " || n2 === null);
do{
 n3 = parseInt(prompt("Dame un numero"));
}while(isNaN(n3) || n3 === " " || n3 === null);
do{
 n4 = parseInt(prompt("Dame un numero"));
}while(isNaN(n4) || n4 === " " || n4 === null);
do{
 n5 = parseInt(prompt("Dame un numero"));
}while(isNaN(n5) || n5 === " " || n5 === null);



operaciones(n1 , n2 , n3 , n4 , n5);