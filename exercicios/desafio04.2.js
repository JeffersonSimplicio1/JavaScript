/*Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/

function escolhaCondicao(condicao, valor) {
  if (condicao === 1) {
    const descontoDebito = valor - (valor * 10) / 100;
    return "O produto sairá no valor de: " + descontoDebito + " Reais";
  } else if (condicao === 2) {
    const descontoDinheiro = valor - (valor * 15) / 100;
    return "O produto sairá no valor de: " + descontoDinheiro + " Reais";
  } else if (condicao === 3) {
    const parcelaAteDuasVezes = valor;
    return "O valor do produto não terá mudanças";
  } else {
    const acimaDeDuasVezes = (valor * 10) / 100 + valor;
    return "O valor do produto terá aumento de " + acimaDeDuasVezes + " Reais";
  }
}

function main() {
  const condicao = 2;
  const valor = 1000;

  console.log(escolhaCondicao(condicao, valor));
}
main();
