const primeiraPessoa = {
    nome: "Jefferson",
    idade: 30,
    profissao: "Mecânico",

    titulo01: function(){
        console.log(this.nome + ' têm ' + this.idade + ' anos de idade e trabalha como ' + this.profissao)

    }

}

primeiraPessoa.titulo01();

const segundaPessoa = {
    nome: "Regina",
    idade: 29,
    profissao: "Tecnica em enfermagem",

    titulo02:function(){
        console.log('Sua esposa' + this.nome + ', tem ' + this.idade + ' anos de idade e trabalha como ' + this.profissao);

    }

}

segundaPessoa.titulo02();
primeiraPessoa['idade'] = 'teste';
primeiraPessoa.titulo01();