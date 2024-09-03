/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variaveis.sendo elas:

1- preço do etanol
2- preço da gasolina
3- tipo do combustivel que esta no carro
4- gasto medio de combustivel do carro por km
5- distancia em km viagem

imprima no console o valor que sera gasto para esta viagem*/ 


const valorEtanol = 5.79;
const valorGasolina = 6.66;
const kmPorLitro = 10;
const distancia = 100;
const tipoCombustivel = 'Gasolina';

if (tipoCombustivel === 'Etanol') {
    let valorTotalGasto = (distancia / kmPorLitro) * valorEtanol
    console.log('O valor total gasto na viagem com o combustivel foi de: ', valorTotalGasto)
} else if (tipoCombustivel === 'Gasolina'){
    let valorTotalGasto = (distancia / kmPorLitro) * valorGasolina
    console.log('O valor total gasto na viagem com o combustivel foi de: ', valorTotalGasto)

}




