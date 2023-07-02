//adicionar efeito
function putEffect(buttonId){
  const buttonElement = document.getElementById(buttonId)
  buttonElement.classList.toggle('active')
}

//remover efeito
function removeEffect(buttonId){
  const buttonElement = document.getElementById(buttonId)
  const removeActive = () => buttonElement.classList.remove('active')
  buttonElement.addEventListener('transitionend', removeActive) 
}

//tocar som
function playAudio(x){
    const audio = document.getElementById(x)
    audio.play()
  }

  function executeAction(buttonId, soundId){
    putEffect(buttonId)
    playAudio(soundId)
    removeEffect(buttonId)
  }

//ao carregar no teclado (som + efeito)
  document.addEventListener("keyup", function(event) {
    if (event.key === "a") {
      executeAction('a', 'sound1')
    } else if (event.key === "s") {
      executeAction('s','sound2')
    } else if (event.key === "d") {
      executeAction('d','sound3')
    } else if (event.key === "f") {
      executeAction('f','sound4')
    } else if (event.key === "g") {
      executeAction('g','sound5')
    } else if (event.key === "h") {
      executeAction('h','sound6')
    } else if (event.key === "j") {
      executeAction('j','sound7') 
    } else if (event.key === "k") {
      executeAction('k','sound8')
    } else if (event.key ==="l"){
      executeAction('l','sound9')
    }
  })
  