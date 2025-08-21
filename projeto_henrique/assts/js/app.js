listaTarefas = []
console.log(listaTarefas.length)

//calcula o valor de tarefas cadastradas
document.getElementById('numTarefas').innerHTML = listaTarefas.length


//se não tiver nenhum item na lista tem que remover a section com o ID semTarefas


// captura o formulario de cadastro
var formCadastro = document.getElementById('formCadastro')

//adiciona umaescuta de evento no elemeento
//Do tipo submit, quando acontecer executa todo o código da
//function que esta no segundo parametro
formCadastro.addEventListener("submit", function(event){
    
    event.preventDefault() //evita o comportamento padrão do submit. bloqueia os eventos padrões

    //capturar todos os inputs do formulario
    var form = new FormData(this);

    var tarefa = form.get('tarefa')
    console.log(tarefa)

    //salvar a tarefa na lista
    listaTarefas.push(listaTarefas)
    console.log(listaTarefas)

    //exibir a quantidade de tarefas no span
    document.getElementById('numTarefas').innerHTML = listaTarefas.length

})

