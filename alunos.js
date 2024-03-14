let chamadaDeAlunos = [
    {
        nome: "Kayky",
        idade: 16,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 75,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 10
            },
        ],
        matriculadoEm: "2024/02/23",
        numeroChamada: 1221
    },
    {
        nome: "Ana",
        idade: 17,
        materias: [
            {
                nome: "BD1",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 7.5
            },
        ],
        matriculadoEm: "2024/04/23",
        numeroChamada: 1222
    },
    {
        nome: "Matheus",
        idade: 20,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 79,
                nota: 8.5
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 60,
                nota: 6.5
            },
        ],
        matriculadoEm: "2024/02/25",
        numeroChamada: 1223
    },
    {
        nome: "Jorge",
        idade: 19,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 79,
                nota: 10
            },
        ],
        matriculadoEm: "2024/02/29",
        numeroChamada: 1224
    },
    {
        nome: "Richard",
        idade: 18,
        materias: [
            {
                nome: "BD2",
                presenca: 74,
                nota: 10
            },
            {
                nome: "BD1",
                presenca: 90,
                nota: 7
            },
        ],
        matriculadoEm: "2024/12/23",
        numeroChamada: 1225
    },
]

export function listarAlunos(){
    for (let i = 0; i < chamadaDeAlunos.length; i++) {
        
        console.log("Nome:"+chamadaDeAlunos[i].nome);
        console.log("Ra:"+chamadaDeAlunos[i].numeroChamada);
        console.log("-------------------------------------------------------------");
        
    }
}

export function buscarAlunoChamada(ra){
    for(let a = 0; a < chamadaDeAlunos.length; a++){
        if(ra === chamadaDeAlunos[a].numeroChamada){
            return chamadaDeAlunos[a].nome;
        }

        console.log("Aluno não encontrado");
    }
}

export function matriculaMes(){
    for(let b = 0; b < chamadaDeAlunos.length; b++){

        let mes = chamadaDeAlunos.matriculadoEm[b].split('/');
        console.log(mes);
        if(mes[1] === "02"){
          

            console.log("Aluno matricula no mês 02:"+chamadaDeAlunos[b].nome);
            console.log("Data:"+chamadaDeAlunos[b].matriculadoEm);
        }
    
    }   
}

export function alunosAprovados(){
    for(let a = 0; a < chamadaDeAlunos.length; a++){
        for(let b = 0; b < chamadaDeAlunos[a].materias.length; b++){
    if(chamadaDeAlunos[a].materias[b].nota >= 6 && chamadaDeAlunos[a].materias[b].presenca >= 75){
      console.log("Alunos Aprovado")
    }

    else{
        console.log("reprovado");
    }
  }
}
}
export function alunosReprovados(){
    for(let a = 0; a < chamadaDeAlunos.length; a++)
    {
        for(let b = 0; b < chamadaDeAlunos[a].materias.length; b++)
        {
        if(chamadaDeAlunos[a].materias[b].nota < 6 && chamadaDeAlunos[a].materias[b].presenca < 75)
        {
      console.log("Alunos Reprovado")
    }
  }
}
}

