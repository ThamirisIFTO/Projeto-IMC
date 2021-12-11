const calcular = document.getElementById('calcular');

function imc () {
const peso = document.getElementById('peso').value;
const altura = document.getElementById('altura').value;
const nome = document.getElementById('nome').value;
const resultado = document.getElementById('resultado');

if (nome !== '' && altura !== '' && peso !== '') {

    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacao = '';

    if (valorIMC <= 18.4){
        classificacao = 'abaixo do peso.';
    }else if (valorIMC > 18.5 && valorIMC <= 24.9) {
        classificacao = 'com peso ideal. Parabéns!!!';
    }else if (valorIMC > 25 && valorIMC <= 29.9){
        classificacao = 'levemente acima do peso.';
    }else if (valorIMC > 30 && valorIMC <= 34.9){
        classificacao = 'com obesidade grau I.';
    }else if (valorIMC > 35 && valorIMC <= 39.9){
        classificacao = 'com obesidade grau II';
    }else if (valorIMC > 40) {
        classificacao = 'com obesidade grau III. Cuidado!!';
    }

    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
    
 }else {
    resultado.textContent = 'Preencha todos os campos!!!';
 }
}
calcular.addEventListener('click', imc);
