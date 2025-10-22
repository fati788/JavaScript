function generarResultado() {
  let opciones = ['1', 'X', '2'];
  let indiceAleatorio = Math.floor(Math.random() * opciones.length);
  return opciones[indiceAleatorio];
}

function generarQuiniela(numeroPartidos) {
  let quiniela = [];
  for (let i = 0; i < numeroPartidos; i++) {
    quiniela.push(generarResultado());
  }
  return quiniela;
}


let miQuiniela = generarQuiniela(15);
document.write(miQuiniela);