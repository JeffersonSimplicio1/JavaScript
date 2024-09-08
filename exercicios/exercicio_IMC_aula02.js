/*Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:

IMC = peso/ (altura*altura)

- Abaixo de 18.5 = abaixo do peso
- entre 18.5 e 25 = peso ideal
- entre 25 e 30 = acima do peso
- entre 30 e 40 = obeso
- acima de 40 = obesidade grave

*/

const altura = 1.6;
const pesoAtual = 45;
const imc = pesoAtual / (altura * altura);

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso ideal");
} else if (imc >= 25 && imc < 30) {
  console.log("Acima do peso");
} else if (imc >= 30 && imc < 40) {
  console.log("Obeso");
} else {
  console.log("Obesidade grave");
}
