function numeroPerfecto(numero) {
    let sumaDivisores = 0;
    for (let i = 1; i < numero; i++) {

        if (numero % i == 0) {
            sumaDivisores += i;
        }



    }

    if (sumaDivisores == numero) {
        document.write("El numero es perfecto");
    } else {
        document.write("El numero no ees perfecto");
    }
}


numeroPerfecto(6);