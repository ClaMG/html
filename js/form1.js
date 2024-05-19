function dados(){

    let nome = document.getElementById("nome").value
    let rg = document.getElementById("rg").value
    let cpf = document.getElementById("cpf").value
    let PROFISSÃO = document.getElementById("PROFISSÃO").value
    let cep = document.getElementById("CEP").value
    
    document.getElementById("p").innerHTML= `eu, ${nome} , de RG: ${rg} ,portador do CPF : ${cpf} ,de profissão :  ${PROFISSÃO} , do cep ${cep}`
    
    
    }