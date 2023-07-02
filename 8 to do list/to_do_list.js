let newWrite = document.getElementById("myWrite")
let newItem = document.getElementById("item")
let arrayTasks = []

// Se houver dados armazenados, recupera e atribui ao array de tarefas
if (localStorage.getItem("taskData")) {
    arrayTasks = JSON.parse(localStorage.getItem("taskData"))  // é usado para converter o valor armazenado com a chave "taskData" (que é uma string JSON) de volta num objeto JavaScript. O resultado é atribuído à variável arrayTasks
    updateTasks() // Atualiza a exibição da lista de tarefas
}

newWrite.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        let taskText = newWrite.value
        let task = {text: taskText} 
        arrayTasks.push(task)
        newWrite.value = "" // limpa o campo de escrita, após carregar enter
        updateTasks() // Atualiza a exibição da lista de tarefas
        localStorage.setItem("taskData", JSON.stringify(arrayTasks)) // Armazena o array de tarefas atualizado no Local Storage
    }
})

function updateTasks() {
    newItem.innerHTML = ""

    for (let i =0; i < arrayTasks.length; i++){
        let task = arrayTasks[i]
        
        // Criação da div da tarefa
        let newTask = document.createElement("div")
            newTask.classList.add("task")

        // Criação do botão de checkbox
        let selectButton = document.createElement("input")
            selectButton.type = "checkbox"
            selectButton.value = ""
            selectButton.checked = false
            selectButton.classList.add("task-check")

        // Criação do texto da tarefa
        let taskTextElement = document.createElement("div")
            taskTextElement.classList.add("task-text")
            taskTextElement.textContent = task.text

        selectButton.checked = task.checked // Define o estado do checked com base na propriedade da tarefa
        taskTextElement.style.textDecoration = task.checked ? "line-through" : "none" 

        // Criação do botão de delete
        let deleteButton = document.createElement("input")
            deleteButton.type = "button"
            deleteButton.value = "X"
            deleteButton.classList.add("task-button")

        // Organização de pertença entre pais-filhos
        newTask.appendChild(selectButton)
        newTask.appendChild(taskTextElement)
        newTask.appendChild(deleteButton)
        newItem.appendChild(newTask)
        
        deleteButton.addEventListener('click', function(event){
            arrayTasks.splice(i, 1)  // Remove a tarefa do array
            updateTasks()           
            localStorage.setItem("taskData", JSON.stringify(arrayTasks)) 
        })

        selectButton.addEventListener('click', function(event){
            task.checked = event.target.checked //Event.target refere-se ao elemento HTML que disparou o evento, neste caso foi o elemento checkbox que foi clicado. A propriedade checked do elemento checkbox retorna o valor booleano que indica se o checkbox está marcado (true) ou não marcado (false)

            taskTextElement.style.textDecoration = task.checked ? "line-through" : "none"
      
            localStorage.setItem("taskData", JSON.stringify(arrayTasks))
        })
    }
}