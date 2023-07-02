
//Calcular countdown
function count(){

    // Data final do countdown
    let dataFinal = new Date ('2023-08-01T21:50:00')

    let dataAtual = new Date().getTime()
    let tempo = dataFinal - dataAtual

    //Conversão de dias, horas, minutos e segundos
    let days = Math.floor(tempo/ (1000 * 60 * 60 * 24))
    let hours = Math.floor((tempo / 1000 / 60 / 60) % 24)
    let minutes = Math.floor ((tempo/1000/ 60) % 60)
    let seconds = Math.floor((tempo/1000) % 60)

    if (tempo <= 0) {
        clearInterval(contador)
        document.getElementById("container").innerHTML = "CountDown Terminado - aguarde o próximo!"
        document.getElementById("container").style.color='white'
        document.getElementById("container").style.fontSize ='x-large'
        document.getElementById("container").style.fontStyle = 'italic'
     

    } else {
        document.getElementById('dias').innerHTML= days
        document.getElementById('horas').innerHTML= hours
        document.getElementById('minutos').innerText = minutes
        document.getElementById('segundos').innerText = seconds
    }
}
count()
let contador = setInterval(count, 1000)

