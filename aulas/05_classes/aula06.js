class aluno{
    nome;
    idade;
    matricula;
    curso;
    turno;

    constructor(nome,idade,matricula,curso,turno){
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
        this.curso = curso;
        this.turno = turno;
    }

    descrever(){
        console.log('O aluno: '+ this.nome + ' tem ' + this.idade + ' anos de idade, sua matricula é ' + this.matricula + '. O mesmo frequenta o curso de ' + this.curso + ' no periodo da ' + this.turno)
    }
}

const jefferson = new aluno('jefferson', 30, 1282024, 'ads', 'noite');

jefferson.descrever();