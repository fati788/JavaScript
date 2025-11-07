let numero=0;

function banner() {
    let banners = ["Ciclo de Grado superior de Desarrollo de Aplicaciones Webs",
        "Ven a Cuevas del Almanzora y matricúlate",
        "I.E.S Jaroso", "Es tu oportunidad de encontrar un buentrabajo"];
    document.getElementById("content").innerHTML = banners[numero];
    numero++;
    if(numero>=banners.length){
        numero =0;
    }
    

}

setInterval("banner()" , 1000);