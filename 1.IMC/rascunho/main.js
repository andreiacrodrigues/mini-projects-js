
function calcular(){
let nome = document.getElementById("iname")
let ialtura = document.getElementById("iheight")
let ipeso = document.getElementById("iweight")
let result = document.getElementById ("resultado")


    console.log(nome.value)
    let altura = Number(parseFloat(ialtura.value))
    let peso = Number(ipeso.value)
    let imc = (peso/ (Math.pow(altura,2)))


    if (nome.value == "" || altura.value == 0 || peso.value == 0 ){
        result.innerText = "Preencha todos os campos!!!"
    }

    else if (imc <= 18.5) {
        result.innerText = `${nome.value} o seu IMC é ${imc.toFixed(2)} e está abaixo do peso`
    } else if (imc <=24.9){
            result.innerText = `${nome.value} o seu IMC é ${imc.toFixed(2)} e está com o peso ideal. Parabéns!`
    } else if (imc <= 29.9){
            result.innerText = `${nome.value} o seu IMC é ${imc.toFixed(2)} e está com ligeiro excesso de peso`
    } else if (imc <=34.9){
            result.innerText = `${nome.value} o seu IMC é ${imc.toFixed(2)} e está com obesidade grau I`
    } else if (imc <=39.9){
            result.innerText = `${nome.value} o seu IMC é ${imc.toFixed(2)} e está com obesidade grau II`
    } else{
            result.innerText = `${nome.value} o seu IMC é ${imc.toFixed(2)} e está com obesidade grau III`
        }
}

