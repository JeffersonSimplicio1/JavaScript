//Aprendendo sobre objetos
// objetos é uma coleção de valores que são declarados por {}

const pessoa01 = {
  nome: "Jefferson",
  idade: 30,
  curso: "ADS",
  estadoCivil: "Casado",
  numeroDeFilhos: 1,
  atualEmprego: "Tecnico Automotivo",
};

console.log(pessoa01);

console.log("-------------------");

console.log(
  "Nome do aluno é : " +
    pessoa01.nome +
    ", " +
    pessoa01.idade +
    " anos de idade " +
    ", cursando o tecnologo em " +
    pessoa01.curso +
    " Possui " +
    pessoa01.numeroDeFilhos +
    " filho."
);

//incrementando valor ao objeto
pessoa01.altura = 1.59;
console.log(pessoa01);

//deletando valor do objeto
delete pessoa01.numeroDeFilhos;
console.log(pessoa01);
