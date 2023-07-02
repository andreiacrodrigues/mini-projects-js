let buttonRegist = document.getElementById("regist")
let container = document.querySelector(".container")
let buttonClose = document.getElementById("close")
let buttonCancel = document.getElementById("cancel")
let main = document.querySelector("main")
let buttonSave = document.getElementById("clientForm")
let tbody = document.querySelector("tbody")

let name = document.getElementById("clientName")
let email = document.getElementById("clientEmail")
let number = document.getElementById("clientNumber")
let address = document.getElementById("clientAddress")

let currentRow = null //  indica que nenhuma linha está selecionada

function saveDataToLocalStorage() { // Função para SALVAR os dados da tabela no Armazenamento Local
  let tableData = [] // Array para armazenar os dados da tabela
  
  for (let i = 0; i < tbody.rows.length; i++) { // Percorre todas as linhas da tabela
    let row = tbody.rows[i]
    let rowData = {
      name: row.cells[0].textContent,
      email: row.cells[1].textContent,
      number: row.cells[2].textContent,
      address: row.cells[3].textContent
    }
      tableData.push(rowData) // Adiciona os dados da linha ao array
  }
    localStorage.setItem('tableData', JSON.stringify(tableData)) // Salva os dados no Armazenamento Local como uma string JSON
}

function loadLocalStorage() { // Função para CARREGAR os dados da tabela do Armazenamento Local
  let tableData = localStorage.getItem('tableData')
  
  if (tableData) {
    tableData = JSON.parse(tableData) // Converte a string JSON de volta para um array de objetos
  
    for (let i = 1; i < tableData.length; i++) {  // Percorre os dados e adiciona as linhas à tabela
      let rowData = tableData[i]
      let newRow = tbody.insertRow()
  
      let newCell1 = newRow.insertCell()
      newCell1.textContent = rowData.name
  
      let newCell2 = newRow.insertCell()
      newCell2.textContent = rowData.email
  
      let newCell3 = newRow.insertCell()
      newCell3.textContent = rowData.number
  
      let newCell4 = newRow.insertCell()
      newCell4.textContent = rowData.address

      let newCell5 = newRow.insertCell()
      newCell5.innerHTML = `<button id="edit">Editar</button> <button id="delete">Apagar</button>`
    
      let buttonDelete = newCell5.querySelector("#delete")
      buttonDelete.addEventListener("click", deleteInfo)
    
      let buttonEdit = newCell5.querySelector("#edit")
      buttonEdit.addEventListener("click", editInfo)
    }
  }
}
loadLocalStorage()  // Carrega os dados da tabela do Armazenamento Local ao carregar a página

buttonRegist.addEventListener("click", newClient) //ABRIR FORMULÁRIO
function newClient(){ 
  container.style.display = "block"
  main.classList.add("overlay") 
}

buttonClose.addEventListener("click", closeInfo) //FECHAR FORMULÁRIO
function closeInfo(){ 
  container.style.display = "none"
  main.classList.remove("overlay")
}

buttonCancel.addEventListener("click", cancelInfo) //CANCELAR FORMULÁRIO
function cancelInfo(){ 
  container.style.display = "none"
  main.classList.remove("overlay")
}

function clearInputs(){ //APAGAR INPUTS do FORMULÁRIO
  name.value = ""
  email.value = ""
  number.value = ""
  address.value = ""
}

buttonSave.addEventListener("submit", saveInfo) //SALVAR FORMULÁRIO
function saveInfo(event){
  event.preventDefault() // Impede o envio do formulário

  if (currentRow) {   // Atualiza os valores das células da linha atualmente sendo editada
    currentRow.cells[0].textContent = name.value
    currentRow.cells[1].textContent = email.value
    currentRow.cells[2].textContent = number.value
    currentRow.cells[3].textContent = address.value
    
    currentRow = null // Limpa a referência da linha atual
  } else {
    let newRow = tbody.insertRow() // Adiciona uma nova linha à tabela

    let newCell1 = newRow.insertCell()
    newCell1.textContent = name.value

    let newCell2 = newRow.insertCell()
    newCell2.textContent = email.value

    let newCell3 = newRow.insertCell()
    newCell3.textContent = number.value

    let newCell4 = newRow.insertCell()
    newCell4.textContent = address.value

    let newCell5 = newRow.insertCell()
    newCell5.innerHTML = `<button id="edit">Editar</button> <button id="delete">Apagar</button>`

    let buttonDelete = newCell5.querySelector("#delete")//selecionar o botão "Apagar" dentro da nova linha criada
    buttonDelete.addEventListener("click", deleteInfo)

    let buttonEdit = newCell5.querySelector("#edit") // selecionar o botão "Editar" dentro da nova linha criada
    buttonEdit.addEventListener("click", editInfo)
  }
  
  container.style.display = "none"
  main.classList.remove("overlay")

  clearInputs()
  saveDataToLocalStorage()
}

 //ELIMINAR LINHA COM INFO DE CLIENTE
function deleteInfo(event){ //event representa o clique no botao "Apagar"
  let row = event.target.closest("tr")//"event.target" representa o elemento alvo do evento, ou seja, o botão "Apagar" que foi clicado. A função "closest("tr")" é usada para encontrar o elemento ancestral mais próximo que seja uma <tr>
  let nameValue = row.cells[0].textContent // Obtém o valor do nome da célula
  let result = confirm(`Deseja realmente excluir o cliente ${nameValue}`)

  if (result){
    console.log("OK")
    row.remove()
    saveDataToLocalStorage()
  } else {
    console.log("Cancelar")
  }
}

function editInfo(event) { //EDITAR LINHA COM INFO DE CLIENTE
  newClient()
  currentRow = event.target.closest("tr") // Encontra a linha da tabela
  let cells = currentRow.cells
  let editName = document.querySelector("h2")
  editName.innerHTML = `Editar...`
  
  // Obtém os valores das células da linha
  let nameValue = cells[0].textContent
  let emailValue = cells[1].textContent
  let numberValue = cells[2].textContent
  let addressValue = cells[3].textContent
  
  // Preenche o formulário com os valores obtidos
  name.value = nameValue
  email.value = emailValue
  number.value = numberValue
  address.value = addressValue
  
  // Exibe o formulário
  container.style.display = "block"
  main.classList.add("overlay")
}


