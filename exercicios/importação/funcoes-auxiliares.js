const N = [5, 3, 4, 1,10,8];
let maiorNumeroPar = 0;
let menorNumeroImpar = 1;


for (let i = 0; i < N.length; i++) {
  const numero = N[];

  if (numero % 2 == 0) {
    if (numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  }
  // TODO: Criar a condição e regras para identificar também o "menorNumeroImpar".
}