function colocar(){
    let nome= document.getElementById("seunome").value
    console.log(nome.length)
    document.getElementById("nome").innerHTML=("Seu nome tem "+ nome.length + " letras")   
}