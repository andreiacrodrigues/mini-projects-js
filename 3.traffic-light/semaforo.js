let semaforo = document.getElementById("imagem")
let red = document.getElementById("red")
let yellow = document.getElementById("yellow")
let green = document.getElementById("green")
let auto = document.getElementById("auto")

function stop(){
    clearInterval(intervalo);
    semaforo.setAttribute ("src", "../3.traffic-light/img/vermelho.png")
}

function danger(){
    clearInterval(intervalo)
    semaforo.setAttribute ("src", "../3.traffic-light/img/amarelo.png")
}

function go(){
    clearInterval(intervalo)
    semaforo.setAttribute ("src", "../3.traffic-light/img/verde.png")
}

let imagens = ["../3.traffic-light/img/vermelho.png", "../3.traffic-light/img/amarelo.png", "../3.traffic-light/img/verde.png"]
let index = 0
let intervalo

function automatic(){
    semaforo.setAttribute("src", imagens[index])

    index ++;
    if (index >= imagens.length){
        index = 0
    }

    if (!intervalo) {
        intervalo = setInterval(automatic, 1000)
    }
}

red.addEventListener("click", stop)
yellow.addEventListener("click", danger)
green.addEventListener("click", go)
auto.addEventListener ("click", automatic)