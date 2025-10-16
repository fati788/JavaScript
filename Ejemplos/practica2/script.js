let subrayado = document.getElementById("subrayado");
let parrafo = document.getElementById("par");

subrayado.addEventListener('click', () => {
    if (parrafo.style.textDecoration === "underline") {
       parrafo.style.textDecoration = "none";
    }else{
        parrafo.style.textDecoration = "underline";
    }

});
let fondo = document.getElementById("fondo");
let colores = ["blue" , "red" , "yellow" , "white"];

fondo.addEventListener('click' , () => {
    let rnd = Math.floor(Math.random() * colores.length);
    parrafo.style.backgroundColor = colores[rnd];
});

let texto = document.getElementById("texto");
let colors = ["blue" , "red" , "yellow" , "black"];

texto.addEventListener('click' ,() => {

    let rnd = Math.floor(Math.random() * colors.length);
    parrafo.style.color = colors[rnd];
});
