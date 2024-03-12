// Função para criar a pilha
export function criarPilha(tamanhoX = 5){
    return [... new Array(tamanhoX)]
}

// Função para inserir na pilha
export function inserirPilha(pilha, livro){
    const posicao = pilha.indexOf(undefined) // Confirma se a pilha já não está cheia
    if(posicao === -1){
        console.log("Não tem espaço")
        return
    }
    pilha[posicao] = livro // Caso não esteja, insere na pilha
    return
    
}

// Função para retirar da pilha
export function retirarPilha(pilha){
    if(pilha[0] === undefined){ // Confirma se há elementos na pilha
        console.log("Pilha vazia")
        return
    }

    const ultimoItem = pilha.indexOf(undefined) // Ve qual o index do último undefined
   
    if(ultimoItem === -1) { // Não tem espaço, retire o último item
        pilha.pop() 
        return
    }

    pilha.splice(ultimoItem - 1, 1, undefined) // Caso não haja undefined, retirar o último item
    return selectedItem
}

// Função para verificar na pilha
export function verificaExistencia(pilha, tituloDoLivro){
    for (let i = 0; i < pilha.length; i++) { // Andar na pílha e procurar
        if(pilha[i].titulo === tituloDoLivro.titulo){ //    Caso ache algum livro, mostre ele 
            console.log("Achei o livro " + pilha[i].titulo)
            return
        }
    }
    console.log("Não achei o livro " + pilha[i].titulo) // Caso não ache, avise
    
}