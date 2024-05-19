function teste(){
    let ano = +document.getElementById("ano").value
    if ((ano%4==0) || (ano%400==0) && (ano%100!=0)) {
        document.getElementById("bi").innerHTML=(ano +" é ano bissexto")
    }else{
        document.getElementById("bi").innerHTML=(ano +" não é bissexto")
    }
}  