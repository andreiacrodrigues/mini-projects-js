let res = document.getElementById('resultado')

let operando1 = ""
let operando2 = ""
let operacao = ""
let result = ""


//ADICIONAR NUMEROS INTEIROS E DECIMAIS
function addNumber(num) { 

    if (operacao === "") { //Operando1
        if (operando1.toString().indexOf(',') === -1 || num !==',') {
            // se operando1 não tem vírgula OU num não tem vírgula

            if ((operando1 === "" && num !== ',') || (operando1 !== "" && num !== ',')) {
                // operando1 está vazio e num não tem virgula OU operando1 está preenchido e num nao tem vírgula
                operando1 += num
                res.innerHTML = operando1

            } else if (operando1 === "" && num === ',') {
                // operando1 está vazio E num tem vírgula
                operando1 += "0,"
                res.innerHTML = operando1

            } else if (operando1 !== "" && num === ',') {
                // operando1 está preenchido E num tem vírgula
                operando1 += ","
                res.innerHTML = operando1
            }
        }
    }
  
    if (operacao !== ""){ //Operando2 
        if (operando2.indexOf(',') === -1 || num !== ',') {

            if ((operando2 === "" && num !== ',') || (operando2 !== "" && num !== ',')) {
                operando2 += num
                res.innerHTML = operando2

            } else if (operando2 === "" && num === ',') {
                operando2 += "0,"
                res.innerHTML = operando2

            } else if (operando2 !== "" && num === ',') {
                operando2 += ","
                res.innerHTML = operando2
            }
        }
    }
}

// CONVERTER NUMEROS NEGATIVOS <--> POSITIVOS
function conversion() { 
    let op1conv=0
    let op2conv = 0

    if (operacao === "" && operando1 !== "") { //operando1 converte para numero negativo
        op1conv = parseFloat(operando1)*(-1)
        res.innerHTML = op1conv
        operando1 = op1conv.toString()
    }

    if (operando1 < 0) { // acrescentar mais algarismos, depois de operando1 negativo
        op1conv = '-' + Math.abs(operando1)
        res.innerHTML = op1conv
        operando1 = op1conv.toString()

    } else if (operando1 >= 0) { // acrescentar mais algarismos, depois de operando1 positivo
        op1conv = Math.abs(operando1)
        res.innerHTML = op1conv
        operando1 = op1conv.toString()
    }

    if (operacao !== "" && operando2 !== "") { 
        op2conv = parseFloat(operando2)*(-1)
        res.innerHTML = op2conv
        operando2 = op2conv.toString()
    }

    if (operando2 < 0) { 
        op2conv = '-' + Math.abs(operando2)
        res.innerHTML = op2conv
        operando2 = op2conv.toString()

    } else if (operando2 >=0) { 
        op2conv = Math.abs(operando2)
        res.innerHTML = op2conv
        operando2 = op2conv.toString()
    }
} 

// ATRIBUIÇÃO
function operation(op){ 
    if (operando1 !=="" && operando2 !=="" && operacao !==""){
        calc()
    }
    operacao = op //operacao é variável global; e op só há dentro desta função
}

// CALCULAR OPERAÇÕES AO CARREGAR NO "="
function calc (){ 

    if (operacao === "+"){ //operações aritméticas
        result = parseFloat(operando1) +  parseFloat(operando2)
    } else if (operacao === "-") {
        result = parseFloat(operando1) - parseFloat(operando2)
    } else if (operacao === "/"){
        result = parseFloat(operando1) /  parseFloat(operando2)
    } else if (operacao === "*"){
        result = parseFloat(operando1) *  parseFloat(operando2)
    } 

    if (operando1 !=="" && operando2 ===""){ //se operando1 tiver preenchido e operando2 não
        if (operacao === "+"){
            result = parseFloat(operando1) +  parseFloat(operando1)
        } else if (operacao === "-") {
            result = parseFloat(operando1) - parseFloat(operando1)
        } else if (operacao === "/"){
            result = parseFloat(operando1) /  parseFloat(operando1)
        } else if (operacao === "*"){
            result = parseFloat(operando1) *  parseFloat(operando1)
        } 
    }
    
    clean()
    res.innerHTML = result
    operando1 = result //novos resultados passam a ser operando1
}

//LIMPAR TODO O NUMERO
function clean (){ 
    operando1 = ""
    operando2 = ""
    operacao = ""
    res.innerHTML = ""
}

//LIMPAR ALGARISMOS
function cleanOne(){ 
    if (operando1 !=="" && operacao ==""){
        operando1 = operando1.toString().slice(0,-1)
        res.innerHTML = operando1

    } else if (operando2 !=="" && operacao !==""){
        operando2 = operando2.toString().slice(0,-1)
        res.innerHTML = operando2

    } else if(result !=="" && operacao !==""){
        result= result.toString().slice(0,-1)
        res.innerHTML = result
    }
}

document.addEventListener('keydown', function(event) {
    let key = event.key
     //verifica se a tecla pressionada é um número ou operador válido
     //guarda na variável key

    if (!isNaN(parseInt(key))) {
        addNumber(key) // chama a função addNumber com o número pressionado

    } else if (/^[+\-*/]$/.test(key)) {
        operation(key) // chama a função setOperator com o operador pressionado

    } else if (key === 'Enter') {
        calc(key) // chama a função calculate quando a tecla Enter for pressionada

    } else if(key === 'Backspace'){
        cleanOne(key) //apaga um algarismo  

    } else if (key ==='c' || key ==='Escape'){
        clean(key) //apaga tudo
    }
  }
)
