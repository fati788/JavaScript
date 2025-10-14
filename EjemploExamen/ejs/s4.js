function piramide(caracter , numero){

    for(let i=numero ; i>= 1 ; i--){
       
        for(let j=1 ; j<=i ; j++){
          document.write(caracter);
        }
        document.write("<br>");
    }
}


piramide("@" ,4);