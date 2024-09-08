//Refazendo o exercicio de IMC com funções

function calcularImc (peso, altura){
    return peso / Math.pow(altura,2);
}

function classificarImc(imc){
    if (imc < 18.5) {
        return ("Abaixo do peso");
      } else if (imc >= 18.5 && imc < 25) {
        return ("Peso ideal");
      } else if (imc >= 25 && imc < 30) {
        return ("Acima do peso");
      } else if (imc >= 30 && imc < 40) {
        return ("Obeso");
      } else {
        return ("Obesidade grave");
      }
}


function main(){
    let altura = 1.6;
    let peso = 45;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
    
};
main ();



(function(){
  console.log('Adicionando uma nova function no main!')
})();

(function (){
  let altura = 2.0;
  let peso =  89;

  const imc = calcularImc(peso, altura);
  console.log(classificarImc(imc));
}());

function main2(){
  let altura = 1.80;
  let peso = 100;

  const imc = calcularImc(peso, altura);
  console.log(classificarImc(imc))

};

main2();



