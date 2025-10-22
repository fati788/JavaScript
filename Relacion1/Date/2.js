function diaSemana(numero) {

    switch (numero) {
        case 0:
            document.write("El dia del semana es: Dom");
            break;
        case 1:
            document.write("El dia del semana es: Lun");
            break;
        case 2:
            document.write("El dia del semana es: Mar");
            break;
        case 3:
            document.write("El dia del semana es: Mie");
            break;
        case 4:
            document.write("El dia del semana es: Jue");
            break;
        case 5:
            document.write("El dia del semana es: Vie");
            break;
        case 6:
            document.write("El dia del semana es: Sab");
            break;
        default:
            document.write("Error numero incorrecto")
    }
}

let fecha = new Date();
diaSemana(fecha.getDay());