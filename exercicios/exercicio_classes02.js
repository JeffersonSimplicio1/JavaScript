class pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

    }

    calculoImc(){
        return this.peso / Math.pow(this.altura,2);

    }
    classificarImc (){
        const imc = this.calculoImc();
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
}

const jose = new pessoa('josé',70,1.75);
 jose.calculoImc();
 console.log(jose.calculoImc());
 console.log(jose.classificarImc());