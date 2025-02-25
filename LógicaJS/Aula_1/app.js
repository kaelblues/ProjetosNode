alert('Welcome to Squid Game!!!');
let numeroSecreto = 5;
let chute = prompt("Escolha um número de 1 a 10");

if (parseInt(chute) === numeroSecreto) {
    console.log('Isso aí! Você descobriu o número secreto (5)!');
} else {
    console.log('Que pena! Tente novamente.');
}
