// Desafio 04 sobre funções 

function yourName (nome){
    console.log('Seu nome é: ' + nome);

}
yourName('Jefferson');
yourName('Benjamin');
yourName('Regina');
console.log('------------------')


function verifiqueIdade(idade){
    if (idade < 18){
        console.log('Você tem ' + idade + ' anos de idade!');
        console.log('Você é menor de idade!');
    } else{
        console.log('Sua idade é: ' + idade);
        console.log('Você é maior de idade!')
    }

}
// chamando a função modo 01

verifiqueIdade(22);
console.log('------------------')
verifiqueIdade(8);
console.log('------------------')
verifiqueIdade(18);
console.log('------------------')

//chamando a função modo 02

 function main(){
    const idade = 32;
    console.log(verifiqueIdade(idade));
 }
 main();

 // brincando com as funções

 function main1(){
    const nome = 'Ademar';
    const idade = 53;
    console.log(yourName(nome) + verifiqueIdade(idade));
 }
 main1();