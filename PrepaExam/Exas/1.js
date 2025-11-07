function generarPrimativa() {
  //Genera 6 números diferentes entre 1 y 49
  let numeros = [];
  let numro;
  for (let i = 1; i <= 6; i++) {
    numro = Math.floor(Math.random() * 49) + 1;
    if (!numeros.includes(numro)) {
      numeros.push(numro);
    }
  }

  //Genera un número complementario diferente a los 6 anteriores
  let complementario;
  do {
    complementario = Math.floor(Math.random() * 49) + 1;
  } while (numeros.includes(complementario));
  //Genera un número de reintegro entre 0 y 9
  let reintegro = Math.floor(Math.random() * 10);
  //Muestra la fecha actual en formato dd/mm/yyyy
  let fecha = new Date();
  let dia = fecha.getDate();
  let mes = fecha.getMonth() + 1;
  let anio = fecha.getFullYear();
  if (dia < 10) {
    dia = "0" + dia;
  }
  if (mes < 10) {
    mes = "0" + mes;
  }
  let fechaAc = dia + "/" + mes + "/" + anio;
  let fechaAc1 = new Date().toLocaleDateString('es-ES');

  document.getElementById("content").innerHTML = `<p>Combinación:${numeros.join(", ")}  </p>
                                               <p>complementario: ${complementario}</p>
                                               <p>reintegro: ${reintegro}</p>
                                               <p>Fecha actual: ${fechaAc}</p>`;

}