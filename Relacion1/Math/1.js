function numeros(n1 , n2 , n3 , n4){
    let numeros = [n1 , n2 , n3 , n4];
    let max = Math.max(...numeros);
    document.write("El maximo es: " + max);
    let min = Math.min(...numeros);
    document.write("<br> El minimo es: " + min);
}


numeros(1,2,3,4);