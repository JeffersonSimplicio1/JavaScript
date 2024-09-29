//Crie programa que seja capaz de percorrer uma lista de numeros e imprima cada numero par encontrado.

const numeros = [
  1, 2, 3, 5, 9, 7, 85, 65, 98, 52, 4, 5, 69, 85, 33, 44, 66, 88, 9955, 156,
  445, 4546, 521, 858, 54, 648, 11, 4, 546, 8, 58, 546, 498, 5, 16, 65469, 89,
  47984, 6556, 4564, 823, 13, 158, 4984, 464, 984, 986,0
];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0 && numeros[i] !== 0) {
    console.log(numeros[i]);
  }
}
