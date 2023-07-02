let lamp = document.getElementById("lamp")
let ligar = document.getElementById("liga")
let desligar = document.getElementById ("desliga")
let fundo = document.getElementById ("fundos")

function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1
}

function ligarLamp(){
    if ( !isLampBroken()) {
        lamp.setAttribute ("src", "../2.lamp/img/ligada.jpg" )
    }
}

function desligarLamp() {
    if ( !isLampBroken()) {
        lamp.setAttribute ("src", "../2.lamp/img/desligada.jpg")
    }
}

function lampBroken(){
    lamp.setAttribute("src", "../2.lamp/img/quebrada.jpg")
}

lamp.addEventListener ('mouseenter', ligarLamp)
lamp.addEventListener ('mouseleave', desligarLamp)
lamp.addEventListener ('dblclick', lampBroken)
ligar.addEventListener ('click', ligarLamp)
desligar.addEventListener('click', desligarLamp)








/*function lampOn(){
    lamp.setAttribute ("src", "../2 Lâmpada/img/ligada.jpg" )
}

function lampOff(){
    lamp.setAttribute ("src", "../2 Lâmpada/img/desligada.jpg")
}

function lampBroken(){
    lamp.setAttribute("src", "../2 Lâmpada/img/quebrada.jpg")
}

function ligarLamp(){
    lampOn();
    fundo.style.backgroundColor = "yellow";
}

function desligarLamp() {
    lampOff();
    fundo.style.backgroundColor = "black";
}


lamp.addEventListener ('mouseenter', lampOn)
lamp.addEventListener ('mouseleave', lampOff)
lamp.addEventListener ('dblclick', lampBroken)
ligar.addEventListener ('click', ligarLamp)
desligar.addEventListener('click', desligarLamp)

*/