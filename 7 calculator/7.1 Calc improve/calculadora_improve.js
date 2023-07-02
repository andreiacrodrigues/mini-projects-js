let outcome = document.getElementById('display')

let input1 = ""
let input2 = ""
let operation = ""
let result = ""

//ADICIONAR NUMEROS INTEIROS E DECIMAIS
function addNumber(num){ 
    let input = operation === "" ? input1 : input2 

    if (!input.includes('.') || num !== '.'){
        if (input === "" && num === "."){
            input += ("0.")
        } else if (input !=="" && num ==="."){
            input += (".")  
        } else if (input ==="" && num !=="." || input !=="" && num !=="."){
            input += num
        }

        if (operation === "") {
            input1 = input
        } else {
            input2 = input
        }
        outcome.innerHTML = input
    }
}

//ADICIONAR NUMEROS NEGATIVOS <--> POSITIVOS
function conversion(){ 
    let input = operation === "" ? input1 : input2 
    let inputconv = ""
        
    if (input !== "") { //converte para numero negativo ou positivo (se já tiver negativo)
        inputconv = parseFloat(input)*(-1)
        outcome.innerHTML = inputconv
        input = inputconv.toString()

        if (operation === "") { // atualiza as variáveis globais, depois de converter numeros
            input1 = inputconv.toString()
        } else {
            input2 = inputconv.toString()
        }
    }
}

//ADICIONAR OPERAÇÃO ARITMÉTICA
function addSignal(op){

    if (input1 !=="" && input2 !=="" && operation !== "") {
        calc()
    } 
    operation = op
}

//ADICIONAR FUNÇAO DE CALCULAR "="
function calc(){
    if (operation !== "") {
        if (operation === "+"){
            result = parseFloat(input1) + parseFloat(input2)
        } else if (operation === "-"){
            result = parseFloat(input1) - parseFloat(input2)
        } else if (operation === "*"){
            result = parseFloat(input1) * parseFloat(input2)
        } else if (operation === "/"){
            result = parseFloat(input1) / parseFloat(input2)
        }
        clean()
        outcome.innerHTML = parseFloat(result)
        input1 = parseFloat(result).toString()
        input2 = ""
    }
}

//LIMPAR TODO O NUMERO
function clean(){ 
    input1 = ""
    input2 = ""
    operation = ""
    outcome.innerHTML = ""
}

//LIMPAR CADA ALGARISMO
function cleanOne(){ 
    let input = operation === "" ? input1 : input2 

    if (input!== ""){
        input = input.toString().slice(0,-1)
        outcome.innerHTML = input

        if (operation === "") {
            input1 = input
        } else {
            input2 = input
        }
    }
}

//TECLAS
document.addEventListener('keydown', function(event) {
    let key = event.key     //verifica se a tecla pressionada é um número ou operador válido E guarda na variável key

    if (!isNaN(parseInt(key))) {
        addNumber(key) // chama a função addNumber com o número pressionado

    } else if (key === '+' || key ==='-' || key ==='*' || key === '/') {
        addSignal(key) // chama a função addSignal com o operador pressionado

    } else if (key === 'Enter') {
        calc(key) // chama a função calc quando a tecla Enter for pressionada

    } else if (key === 'Backspace'){
        cleanOne(key) // apaga um algarismo  

    } else if (key ==='c' || key ==='Escape'){
        clean(key) // apaga tudo
    }
})