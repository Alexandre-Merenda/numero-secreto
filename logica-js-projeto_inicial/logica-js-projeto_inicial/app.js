let mensagemBoasvindas = ('Boas Vindas ao Jogo do Número Secreto');
alert(mensagemBoasvindas);
let intervalo = 10
let numeroSecreto = parseInt(Math.random()*intervalo)+1;
console.log ('O número secreto é '+numeroSecreto);
let chute;
let tentativas = 1;

//Enquanto o chuter for diferente do número secreto
while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e '+intervalo);
    console.log (+tentativas+'ª tentativa');
    console.log ('O chute foi '+chute);
    //Se o chute for igual ao numero secreto
    if(chute==numeroSecreto){
        break;
    } else {
        if(chute > numeroSecreto){
            alert('O número secreto é menor que '+chute);
        } else {
            alert('O número secreto é maior que '+chute);
        }
        //tentativas = tentativas + 1
        tentativas++;
    }
}
//se tentativas for > 1 mostre 'tentativas' senão mostre 'tentativas'
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert ('Você acertou o número secreto ('+numeroSecreto+') em '+tentativas+' '+palavraTentativa);