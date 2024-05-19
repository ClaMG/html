function descubra(){
    let num1 = +document.getElementById("num1").value
    let num2 = +document.getElementById("num2").value
    let num3 = +document.getElementById("num3").value
    if((num1>num2)&&(num1>num3)){
        document.getElementById("numerom").innerHTML=("O "+ num1+" é o maior número")
    }else if((num2>num1)&&(num2>num3)){
        document.getElementById("numerom").innerHTML=("O "+ num2+" é o maior número")
    }else if((num3>num1)&&(num3>num2)){
        document.getElementById("numerom").innerHTML=("O "+ num3+" é o maior número")
    }
}