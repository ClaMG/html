function calculateIMC() {
    weight = parseFloat(document.getElementById('weight').value);
    height = parseFloat(document.getElementById('height').value);
    
    imc = weight / (height * height);

    resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Seu IMC é: ' + imc.toFixed(2);
}