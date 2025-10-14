let caracter;
let vocales = "aeuioAEUIO";
let palabra = "";
let cont = 0;
do{
 caracter = prompt("Dame un caracter");
 if(caracter != "*"){
   if(vocales.includes(caracter)){
    caracter = caracter.toLocaleUpperCase();
    cont++ ;
   }else{
    caracter = caracter.toLocaleLowerCase();
   }
   
   palabra += caracter ;

 }
}while(caracter != "*");


document.write("Has introducido: " + palabra + " y " + cont + " vocales");