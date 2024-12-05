// let numero = Number (window.prompt("Escolha um numero: "));
// let anterior = numero - 1;
// let posterior = numero + 1;
// alert('o numero escolhido foi: ' + numero);
// alert('O numero anterior é: ' + anterior);
// alert('O numero posterior é: ' + posterior);

let valorTotal = Number(window.prompt("Qual o valor total da conta? "));
let quantPessoas = Number (window.prompt("Quantas pessoas irão pagar a conta?"));
let divisao = valorTotal / quantPessoas;
alert("O valor a ser pago por cada pessoa é: " + divisao);