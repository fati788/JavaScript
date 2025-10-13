  function multipleDos(numero){
    if(numero%2 == 0){
        return true;
    }else{
        return false;
    }
  }
for (let i = 1 ; i<= 300; i++){
   
     if (multipleDos(i)){
         document.write("<span style= 'color:green;font-size: 2em' >" + i + ", </span>" );
    }else if(i%3 == 0){
      document.write("<span style = 'color: red ; font-size: 18px '>"+i + ", </span>" );   
    }
    if (i% 10 == 0){
      document.write(i + ", <br>");
    }

}