function piramide(caracter , numero){
    for (let i = 0 ; i<= numero ; i++){
      
        for(let j = 1 ; j<= numero - i ; j++){
          document.write(caracter);
        }
         document.write("<br>");
    }
}
piramide("@" , 4);