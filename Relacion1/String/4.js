let fuente = prompt("Dame un frase");
let clave = prompt("Dime la clave que qiueres buscar");
if(fuente.includes(clave)){
    let posicion = fuente.indexOf(clave);
    document.write("La posicion de esa clave es: " + posicion);
}else{
    document.write("Ese clave no existe");
}