function aperta(){
    let senha = document.getElementById("senha").value
    let lamp = document.getElementById("img")

    if (senha == 1234){
        lamp.src ="img/acender.jpg"
        document.getElementById('p').innerHTML= "Deu certo"
    }else{
        lamp.src ="img/apagada.jpg"
        document.getElementById('p').innerHTML= "Senha errada"
        
    }
}