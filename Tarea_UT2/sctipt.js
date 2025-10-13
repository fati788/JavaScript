
let nombre = document.getElementById("Nombre").value;
let color = document.getElementById("Color").style.backgroundColor = Color.value;
let anioNac = document.getElementById("AnoNacimiento").value;

let anioActual = new Date().getFullYear();
let edad = anioActual - anioNac;
//Si algún campo está vacío, usar alert() para mostrar un aviso.
if (nombre === "" || anioNac === "" || color === "") {
    alert("Por favor, completa todos los campos");

}


let resultadoDiv = document.getElementById("divv");

let mensaje = "Hola " + nombre + ", tienes " + edad + " años y tu color favorito es " + color + ". ";

if (edad < 18) {
    mensaje += "Eres menor de edad.";
} else {
    mensaje += "Eres mayor de edad.";
}

resultadoDiv.textContent = mensaje;
//Cambiar el color del texto del resultado
//  según la elección del usuario.
resultadoDiv.style.color = color;

//Mostrar también el mensaje en la consola del navegador.
console.log(mensaje);
