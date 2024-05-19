let lista=[]
function colocar(){
    lista.push(document.getElementById("lista").value)
    document.getElementById("aparecer").innerHTML= lista.join('<br>-')
    document.getElementById("lista").value = ""
}    

function tirar(){
    lista.pop(document.getElementById("lista").value)
    document.getElementById("aparecer").innerHTML= lista.join('<br> -')
}
function apagar(){
    document.getElementById("aparecer").innerHTML= lista =[""]
}