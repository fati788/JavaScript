function diaSemana(numero) {

    switch (numero) {
        case 0:
            document.write("El dia del semana es: Domingo");
            break;
        case 1:
            document.write("El dia del semana es: Lunes");
            break;
        case 2:
            document.write("El dia del semana es: Martes");
            break;
        case 3:
            document.write("El dia del semana es: Miercoles");
            break;
        case 4:
            document.write("El dia del semana es: Juves");
            break;
        case 5:
            document.write("El dia del semana es: Viernes");
            break;
        case 6:
            document.write("El dia del semana es: Sabado");
            break;
        default:
            document.write("Error numero incorrecto")
    }
}

let fecha = new Date();
diaSemana(fecha.getDay());