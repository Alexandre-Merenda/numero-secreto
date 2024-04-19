let listaDeNumerosSorteados = [];
let numMin = 1;
let numMax = 10;
let tentativas = 1;
let numeroSecreto;
mensagemInicial();
novoNumeroSecreto();

function novoNumeroSecreto() {
    numeroSecreto = gerarNumeroAleatorio(numMax);
    console.log(listaDeNumerosSorteados);
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:2});
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre ${numMin} e ${numMax}`);
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto em ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute>numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(numeroMaximo) {
    let numeroEscolhido = parseInt(Math.random()*numeroMaximo+1);
    if (listaDeNumerosSorteados.length==numeroMaximo){
        listaDeNumerosSorteados=[];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio(numeroMaximo);
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute=document.querySelector('input');
    chute.value='';    
}

function reiniciarJogo() {
    novoNumeroSecreto();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}