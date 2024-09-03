//condicionais (Booleans)

let numero = 125981;
let numeroPar = numero % 2 == 0;

// if(numeroPar){
//     console.log("Numero é par")
// } else {
//     console.log('Numero é impar')
// }

if (numero == 0) {
  console.log("Número invalido!");
} else if (numeroPar) {
  console.log("O número informado é par!");
} else {
  console.log("O número informado é impar!");
}
