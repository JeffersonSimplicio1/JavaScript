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
/*Função main () esta função é procesada porém só é executada após ser chamanda, pelo seu nome, com main (); 

Esse codigo podera ser usado quantas vzs necessario apenas chamando ele pelo seu nome (main();) 
*/ 

function main(){
    let altura = 1.6;
    let peso = 45;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
    
};
main ();

/*A funcção abaixo é uma função imediatamente invocada, esta função deve esta entre parenteses; Ela é resolvida e imediatamente executada, ou seja não é necessário chamar (Ter um nome, como a fução acima) para a sua execução.

Esse código só será usado uma vez, após essa execução é como se ele não existisse mais para o programa
*/

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



