/*Faça um programa que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua media e a sua classificação conforme tabela abaixo

Média= (nota1 + nota2 + nota3) / 3

Classificação

- Média menor que 5, Reprovado
- Média entre 5 e 7, Recuperação
- Média acima de 7, passou de semestre

*/

const nota1 = 8;
const nota2 = 8;
const nota3 = 8;
const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
  console.log("O aluno esta Reprovado");
} else if (media >= 5 && media <= 7) {
  console.log("O aluno esta em Recuperação");
} else {
  console.log("Aluno Aprovado");
}