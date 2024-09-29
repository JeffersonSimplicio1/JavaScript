// const alunos = ['Jefferson', 'Maria','Regina', 'Benjamin', 'Cibele'];

// console.log(alunos);
// console.log(alunos.length);
// console.log (alunos[3]);
// alunos.push ('Lizandra'); // acrescenta um item no fim do array
// console.log(alunos);
// alunos.pop (alunos) // apaga o ultimo item do array
// alunos.shift() //apaga o primeiro item do array
// console.log(alunos);

const notas = [10,9,5,3,8,7.5] 
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota; 
    
}

console.log(soma);
const media = soma/ notas.length
console.log(media);