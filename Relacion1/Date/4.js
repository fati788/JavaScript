function Mes(numero) {

    switch (numero) {
        case 0:
            document.write("El mes es: Ene");
            break;
        case 1:
            document.write("El mes es: Feb");
            break;
        case 2:
            document.write("El mes es: Mar");
            break;
        case 3:
            document.write("El mes es: Abr");
            break;
        case 4:
            document.write("El mes es: may");
            break;
        case 5:
            document.write("El mes es: jun");
            break;
        case 6:
            document.write("El mes es: Jul");
            break;
        case 7:
            document.write("El mes es: Ago");
            break;
        case 8:
            document.write("El mes es: Sep");
            break;
        case 9:
            document.write("El mes es: Oct");
            break;
        case 10:
            document.write("El mes es: Nov");
            break;
        case 11:
            document.write("El mes es: Dic");
            break;

        default:
            document.write("Error numero incorrecto")
    }
}

let fecha = new Date();
Mes(fecha.getMonth() );