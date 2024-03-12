import { criarPilha, inserirPilha, retirarPilha, verificaExistencia} from './pilha.js'

// Cria o array de objetos para ser usados
let alunos = [
    {
        titulo: "Dom Casmurro",
        paginas: 300,
        genero: "clássico",
    },
    {
        titulo: "IT a coisa",
        paginas: 150,
        genero: "terror",
    },
    {
        titulo: "Jason",
        paginas: 70,
        genero: "terror",
    },
    {
        titulo: "Chapéuzinho Vermelho",
        paginas: 10,
        genero: "clássico",
    },
    {
        titulo: "Histórinhas de terror para crianãs",
        paginas: 50,
        genero: "clássico",
    },
]

// Cria a pilha com tamanho
let pilha = criarPilha(5)

// For para percorrer a array e poder mostrar os livros inseridos
for (let i = 0; i < alunos.length; i++) {
    inserirPilha(pilha, alunos[i])
    console.log("Livro " + alunos[i].titulo + " inserido na pilha")
    
}
console.log("-------------------------------")

// For para percorrer a array e poder mostrar os livros retirados
for (let i = 0; i < alunos.length; i++) {
retirarPilha(pilha, alunos[i])
    console.log("Livro " + alunos[i].titulo + " retirado da pilha")
}
console.log("-------------------------------")

// For para percorrer a array e poder verificar os livros
for (let i = 0; i < alunos.length; i++) {
    verificaExistencia(pilha, alunos[i].titulo)
}