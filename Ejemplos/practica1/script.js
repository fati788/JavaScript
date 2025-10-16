let nombre = document.getElementById("nombre").value;
let anioNac = document.getElementById("anio").value;
let color = document.getElementById("color").value;
let anioActual = new Date().getFullYear();
let edad = (anioActual - anioNac);
if(nombre === "" || anioNac === "" || color === ""){
    alert("Error, Introduce todos los datos");
}
let resultadoDiv = document.getElementById("divv");

let mensaje = "Hola, " + nombre +". Tienes " + edad + "años y tu color favorito es el : " +color;
if(edad <18){
    mensaje += ", Eres menor de edad";
}else{
    mensaje += ", Eres mayor de edad";
}

resultadoDiv.textContent = mensaje;
resultadoDiv.style.color = color;

console.log(mensaje);