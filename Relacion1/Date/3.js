function Mes(numero) {

    switch (numero) {
        case 0:
            document.write("El mes es: Enero");
            break;
        case 1:
            document.write("El mes es: Febrero");
            break;
        case 2:
            document.write("El mes es: Marzo");
            break;
        case 3:
            document.write("El mes es: Abril");
            break;
        case 4:
            document.write("El mes es: mayo");
            break;
        case 5:
            document.write("El mes es: junio");
            break;
        case 6:
            document.write("El mes es: Julio");
            break;
        case 7:
            document.write("El mes es: Agosto");
            break;
        case 8:
            document.write("El mes es: Septiembre");
            break;
        case 9:
            document.write("El mes es: Octubre");
            break;
        case 10:
            document.write("El mes es: Noviembre");
            break;
        case 11:
            document.write("El mes es: Diciembre");
            break;

        default:
            document.write("Error numero incorrecto")
    }
}

let fecha = new Date();
Mes(fecha.getMonth());