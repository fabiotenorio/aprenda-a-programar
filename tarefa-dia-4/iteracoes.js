//iteração (loop)
let alunos = [
    {'nome': 'Tiago', 'fezProva': true, 'media': 10},
    {'nome': 'Alvaro', 'fezProva': true, 'media': 9},
    {'nome': 'Tobias', 'fezProva': false, 'media': 8},
    {'nome': 'Regina', 'fezProva': true, 'media': 9},
    {'nome': 'Julia', 'fezProva': true, 'media': 5},
    {'nome': 'Joana', 'fezProva': false, 'media': 6},
    {'nome': 'Paulo', 'fezProva': false, 'media': 4},
    {'nome': 'Carla', 'fezProva': false, 'media': 2},
    {'nome': 'Luciana', 'fezProva': true, 'media': 1},
]

function verificaNotaDeAluno (nota, nome) {
    if (nota > 5){
        console.log(nome, 'passou de ano.')
    } else        
        console.log(nome, 'reprovou')
}

for (let i = 0; i < 9; i++) {
    //o codigo que estiver será repetido até o contatod obedecer a condiçao
    verificaNotaDeAluno(alunos[i].media, alunos[i].nome)
}

console.log('forma mais legal')
for (let aluno of alunos)
    verificaNotaDeAluno(aluno.media, aluno.nome)

