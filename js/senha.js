function enviar(){
    let senha = document.getElementById("s").value
    if (senha == "davidson"){
        document.getElementById("p").innerHTML= "Senha correta"
    } else{
        document.getElementById("p").innerHTML= "Senha incorreta"
    }
}