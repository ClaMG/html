function enviar(){
    let senha1 = document.getElementById("s1").value
    let senha2 = document.getElementById("s2").value
    if (senha1 != senha2){
        document.getElementById("p").innerHTML= "Senha Repetida incorretamente"
    }else if (senha1 == "davidson"){
        document.getElementById("p").innerHTML= "Senha Correta"
    }else{
        document.getElementById("p").innerHTML= "Senha Incorreta"
    }
}