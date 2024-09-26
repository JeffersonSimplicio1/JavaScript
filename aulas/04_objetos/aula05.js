// function calcularArea(raio) {
//   const pi = 3.14;
//   const areaCirculo = pi * Math.pow(raio, 2);
//   return areaCirculo;
// }
// const areaCalculada = calcularArea(); 
// console.log(calcularArea(10));


const carro = {
    marca:'Jeep',
    modelo: 'T270',
    nome: 'Compass',
    ano: 2024,

    descricao: function(){
        console.log(`comprei um carro da marca ${this.marca} modelo: ${this.modelo}`)
    }
}

carro.descricao();