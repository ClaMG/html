function imc(){
    let altura= +document.getElementById("altura").value
    let peso= +document.getElementById("peso").value

    let imc = peso/(altura*altura)

    if(imc<18.5){
        document.getElementById("imc").innerHTML="Você está classificado de magreza, seu grau de obesidade é de 0 e seu imc é "+ imc
    }else if((imc>= 18.5)&&(imc<=24.9)){
        document.getElementById("imc").innerHTML="Você está classificado de normal, seu grau de obesidade é de 0 e seu imc é "+ imc
    }else if((imc>= 25)&&(imc<=29.9)){
        document.getElementById("imc").innerHTML="Você está classificado de sobrepeso, seu grau de obesidade é de 1 e seu imc é "+ imc
    }else if((imc>= 30)&&(imc<=39.9)){
        document.getElementById("imc").innerHTML="Você está classificado de obesidade, seu grau de obesidade é de 2 e seu imc é "+ imc
    }else{
        document.getElementById("imc").innerHTML="Você está classificado de obesidade grau, seu grau de obesidade é de 3 e seu imc é "+ imc
    }
}