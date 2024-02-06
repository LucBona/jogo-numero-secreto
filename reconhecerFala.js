const elementoChute = document.querySelector('#chute');

window.SpeechRecognition = window.SpeechRecognition || 
webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener('result', retorno);
recognition.addEventListener('end', () => recognition.start());

function retorno(e) {
    transcricao = e.results[0][0].transcript;
    exibeChuteTela(transcricao);
    verificaValidade(transcricao);
}

function exibeChuteTela(transcricao){
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${transcricao}</span>
    `;
}