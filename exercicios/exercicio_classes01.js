class carros {
    marca;
    cor;
    gastoMedioCombustivel;
    
    constructor(marca, cor, gastoMedioCombustivel) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivel = gastoMedioCombustivel;
    }

    calcularGasto(distanciaPercorrida, precoCombustivel){
        return distanciaPercorrida * this.gastoMedioCombustivel * precoCombustivel;
        

    }
}

const uno = new carros('Fiat', 'Vermelho', 1/12);
const palio = new carros('Fiat', 'Preto', 1/10);

uno.calcularGasto(70,5)
console.log(uno.calcularGasto(70,5))

palio.calcularGasto(70,5)
console.log(palio.calcularGasto(70,5));
