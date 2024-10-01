// faça um programa que receba N (quantidade de numeros) e seus respectivos valores
// imprima o maior numero par e o menos numero impar.
const { gets, print } = require("./funcoes-auxiliares");

const N = gets();
let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < N; i++) {
  const numero = gets();
  if (numero % 2 === 0 && numero > maiorNumeroPar) {
    maiorNumeroPar = numero;
  } else if (menorNumeroImpar === 0) {
    menorNumeroImpar = numero;
  } else if (numero < menorNumeroImpar) {
    menorNumeroImpar = numero;
  }
}

print("Maior numero par: " + maiorNumeroPar);
print("Menor numero impar: " + menorNumeroImpar);
