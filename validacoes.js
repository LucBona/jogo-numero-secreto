function verificaValidade(chute){
    const numero = +chute;

    if (naoENumero(numero)){
        console.log('Você disse: ', chute);
        if (chute == "game over") {
            document.body.innerHTML = `
                <button id='btn-reiniciar' class='reiniciar over'>REINICIAR</button>
            `
            document.body.style.backgroundColor= "black";
            document.body.style.backgroundImage= "url('/imagens/game_over5.jpg')";
            document.body.style.backgroundSize= "cover";
        }
        else {
            elementoChute.innerHTML += '<div>Valor inválido!!</div>';
            return
        }
    }
    
    if (foraDoIntervalo(numero)){
        elementoChute.innerHTML += '<div>número fora do intervalo permitido!!</div>';
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <img src=/imagens/taça.jpg class='imagem'>
            <h2>Você acertou!!</h2>
            <h3>O número sorteado foi ${numeroSecreto}</h3>
            <button id='btn-reiniciar' class='reiniciar'>REINICIAR</button>
        `
        recognition.stop();
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>'
    } else {
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>'
    }
}

function naoENumero(numero) {
    return Number.isNaN(numero)
}

function foraDoIntervalo(numero) {
    if (menorValor>numero || numero>maiorValor){
        return true
    }
    else{
        return false
    }
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'btn-reiniciar') {
        window.location.reload();
    }
})