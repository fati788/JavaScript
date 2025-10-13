let num1 = parseInt(prompt("Dame un numero"));
let num2 = parseInt(prompt("Dame otro numero"));

let suma = num1 + num2;
let producto = num1 * num2;

if(suma > producto){
    document.write("La suma es mayor que el producto");
}else if(producto>suma){
    document.write("El producto es mayor que la suma");
}else{
    document.write("El producto y la suma son iguales");
}