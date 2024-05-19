function aperta(){
    let lamp = document.getElementById("img")

    if (lamp.src.match("img/acender.jpg")){
        lamp.src ="img/apagada.jpg"
        document.getElementById('nome').innerHTML= "Acender"
    }else{
        lamp.src ="img/acender.jpg"
        document.getElementById('nome').innerHTML= "Apagar"
        
    }
}