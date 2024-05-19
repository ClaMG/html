function nomes(){
    let nome = document.getElementById("n").value

    if ((nome == Davidson) || (nome == Sidio) || (nome == Luis)){
        document.getElementById("p").innerHTML= `Ola ${nome}, Você é um professor `
    }
    else{
        document.getElementById("p").innerHTML= `Ola ${nome}, Você é um(a) estudante ou aluno(a)`
    }        
    
}