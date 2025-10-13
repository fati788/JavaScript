function Saludar(){
    let nombre = document.getElementById("Nombre").value ;
       let Apellidos = document.getElementById("Apellidos").value ;
       let Aficion = document.getElementById("Aficiones").value;
    alert(`Hola ${nombre} ${Apellidos} con aficion en ${Aficion}`);
}
function cambiarColor(){
    document.getElementById("primero").style.backgroundColor = Color.value;
    //Si utulizamos la propiedad name de input color
}
document.getElementById("saludar").addEventListener("click", Saludar, false);

let frutas = ["pera" , "Manzana" , "melón" , "Naranja"];
 
for (let fruta in frutas){
    document.getElementById("segundo").textContent += frutas[fruta] + ", ";
}
