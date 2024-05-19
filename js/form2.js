function sla(){
    let nome = document.getElementById("nome").value
    let rg = document.getElementById("rg").value
    let cpf = document.getElementById("cpf").value
    let pro = document.getElementById("pro").value
    let end = document.getElementById("end").value

    document.getElementById("p").innerHTML= ` Seu nome é ${nome},seu rg é ${rg}, seu cpf é ${cpf}, você é ${pro} e você mora ${end}`
}