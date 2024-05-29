function des(){
    let v = +document.getElementById("va").value
    let d = +document.getElementById("ad").value
    let r = (v*d)/100
    let result = v-r
    document.getElementById("p").innerHTML= result
}
function acr(){
    let v = +document.getElementById("va").value
    let a = +document.getElementById("ad").value
    let r = (v*a)/100
    let result = v+r
    document.getElementById("p").innerHTML= result
}