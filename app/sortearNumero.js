function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor+1);
}

const menorValor = parseInt(prompt("informe o limite inferior: "));
const maiorValor = parseInt(prompt("informe o limite superior: "));
const numeroSecreto = gerarNumeroAleatorio()
const elementoMenorValor = document.getElementById('menor-valor')
const elementoMaiorValor = document.getElementById('maior-valor')

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor

console.log('O número secreto é:', numeroSecreto)