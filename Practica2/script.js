let Subrayado = document.getElementById("Subrayado");
let parrafo = document.getElementById("parrafo")
 Subrayado.addEventListener('click', () => {
    
   if (parrafo.style.textDecoration === "underline") {
      parrafo.style.textDecoration = "none";
    } else {
      parrafo.style.textDecoration = "underline";
    }

  });
let Fondo = document.getElementById("Fondo");
let colors = ["blue" , "red" , "yellow" , "white"];

Fondo.addEventListener('click', () => {
   let rnd = Math.floor(Math.random() * colors.length);
  parrafo.style.backgroundColor = colors[rnd];
  });

let Texto = document.getElementById("Texto");
let coloresTexto = ["blue" , "red" , "yellow" ,"black"];

Texto.addEventListener('click' , () => {
 let rnd = Math.floor(Math.random() * coloresTexto.length);
 parrafo.style.color = coloresTexto[rnd];
});

let tamano = document.getElementById("Tamano");
let tamanos = ["10px" , "20px" , "30px" , "40px" , "50px"]
tamano.addEventListener('click' , () =>{
    let rnd = Math.floor(Math.random() * tamanos.length);
     parrafo.style.fontSize = tamanos[rnd];
});