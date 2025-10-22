function VerEmail(email) {
    if (email.includes("@")) {
        document.write("El correo tiene @");
    } else {
        document.write("El correo NOO tiene @");
    }
}


let email = prompt("Dime un correo electronico");

VerEmail(email);
