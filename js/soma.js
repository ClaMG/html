function soma(){
    let soma=0
    let contador=1
    while(contador<=100){
        soma+=contador;
        contador++
    }
    document.getElementById("resposta").innerHTML =("A soma de 1 a 100 é "+soma)
}