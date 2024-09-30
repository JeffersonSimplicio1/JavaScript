const N = [5, 3, 4,1,10,8];
let maiorNumeroPar = 0;
let menorNumeroImpar = 1;


for (let i = 0; i < N.length; i++) {
  const numero = N[i];

  if (numero % 2 === 0) {
    if ( numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
      
    } else if (numero % 2 !==0){
        if(numero < menorNumeroImpar){
            menorNumeroImpar = numero;
        }
        
    }
    
  }

}
console.log('Maior número par: ',maiorNumeroPar)
console.log('Menor número impar: ', menorNumeroImpar)