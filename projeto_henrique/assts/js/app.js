var listaTarefas = []
var listaConcluidas = []

function carregaInformacoes() {
    // Calcula o valor de tarefas cadastradas
    document.getElementById("numTarefas").innerHTML = listaTarefas.length



    document.getElementById("numConcluidas").innerHTML = listaConcluidas.length


    /**
     * - EXIBIR QUANTAS TAREFAS CONCLUIDAS TEM NO SITE
     * - MODIFICAR O IF, PARA VER SE TEM TAREFA CONCLUIDA
     */

    // Se não tiver nenhum item na lista tem que 
    // remover a section com o ID semTarefas
    if (listaTarefas.length === 0  &&  listaConcluidas.length ===0) {
        document.getElementById("semTarefas").style.display = "flex"
        document.getElementById("listaTarefas").style.display = "none"
    } else {
        document.getElementById("semTarefas").style.display = "none"
        document.getElementById("listaTarefas").style.display = "flex"
    }
}

function listaTodasTarefas() {

    // Caputra a section onde irá listar as tarefas
    var htmlListaTarefas = document.getElementById("listaTarefas")
    htmlListaTarefas.innerHTML = "" // Limpa a section

    // Percorre todas as tarefas cadastradas
    listaTarefas.forEach(function(item, index) {
        htmlListaTarefas.innerHTML += `
            <div>
                <button onclick="concluirTarefa(${index})" title="Concluir Tarefa"></button>
                <p>${item}</p>
                <button onclick="excluirTarefa(${index})" title="Excluir Tarefa">
                    <img src="assts/img/lixeira.png" 
                         alt="Icone Lixeira" />
                </button>
            </div>`

    })



    listaConcluidas.forEach(function(item, index) {
        htmlListaTarefas.innerHTML += `
            <div class="done">
                <button onclick="concluirTarefa(${index})" title="Concluir Tarefa"></button>
                <p>${item}</p>
                <button onclick="excluirTarefa(${index})" title="Excluir Tarefa">
                    <img src="assts/img/lixeira.png" 
                         alt="Icone Lixeira" />
                </button>
            </div>`

    })

    /**
     * - LISTAR AS TAREFAS JÁ CONCLUIDAS
     */
}

function concluirTarefa(index) {
        var item = listaTarefas.splice(index, 1) 
        listaConcluidas.push(item)
        carregaInformacoes()
        listaTodasTarefas()
    /*
        - Deletar a tarefa do array listaTarefa
        - Adicionar a tarefa no array listaConcluidas
        - Atualizar as informaçoes na tela
    */
}


function excluirTarefa(index) {
    listaTarefas.splice(index, 1)

    carregaInformacoes()
    listaTodasTarefas()
} 

// Invoca
carregaInformacoes()
listaTodasTarefas()



// Caputura o formulário de cadastro
var formCadastro = document.getElementById("formCadastroTarefa")

// Adiciona uma escuta de evento no elemento
// Do tipo submit, quando acontecer executa todo o código da 
// function que está no segundo parametro.
formCadastro.addEventListener("submit", function(calopsita){
    calopsita.preventDefault(); // Bloqueia os eventos padrões

    // Caputurar todos os INPUTs do Formulario
    var form = new FormData(this);

    // Captura o valor apenas do INPUT que possui o name tarefa
    var tarefa = form.get("tarefa")

    // Salvar a tarefa na lista
    listaTarefas.push(tarefa)

    // Invoca de novo
    carregaInformacoes()
    listaTodasTarefas()
})
