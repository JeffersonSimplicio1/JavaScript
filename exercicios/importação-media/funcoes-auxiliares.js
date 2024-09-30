const entradas = [5.5,0,10,6,8,99];
let i = 1;

function gets() {
  const valor = entradas[i];
  i++;
  return valor;  
}

function print(text){
  console.log(text)
}

module.exports = {gets,print};
