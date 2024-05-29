function ir(){
    let n = document.getElementById("user").value
    let d = document.getElementById("data").value
    let s = document.getElementById("senha").value
    let an = 2024-d
    if ((n== "Cla") && (d == "2008") && (s== "1234")){
        document.getElementById("p").innerHTML= `Bem vindo, ${n}, Você ja tem ${an}, anos`
    } else if ((n=="Hugo")&&(d==2007)&&(s== "2234")){
        document.getElementById("p").innerHTML=`Bem viado, ${n}, Você ja tem ${an}, anos`
    } else if ((s== "1234")){
        document.getElementById("p").innerHTML=`Essa senha não é do user ${n}, é de Cla, nascido em 2008`
    } else if ((s== "2234")){
        document.getElementById("p").innerHTML=`Essa senha não é do user ${n}, é de Hugo, nascido em 2007`
    } else if ((n== "Cla") || (n=="Hugo")){
        document.getElementById("p").innerHTML=`Informações Incorretas, tente corrigir entrando com uma das senhas a seguir: 1234 ou 2234`
    } else {
        document.getElementById("p").innerHTML=`O ${n} não foi cadastrado, Cla e Hugo foram`
    }
}