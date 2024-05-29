const array=[]
function colocar(){
    array.push(document.getElementById("texto").value)
    document.getElementById("p").innerHTML= array.join('<br>-')
    document.getElementById("texto").value = ""
} 