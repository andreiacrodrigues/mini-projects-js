let photo = document.getElementById("photo")
let bleft = document.getElementById("butleft")
let bright = document.getElementById("butright")

let images = [
    "../4.slideshow/img/office.jpeg",
     "../4.slideshow/img/greys.jpeg",
      "../4.slideshow/img/lost.jpeg",
       "../4.slideshow/img/narcos.jpeg",
        "../4.slideshow/img/peaky.jpeg",
         "../4.slideshow/img/prison.jpeg"]
let index = 0

function slideShowRight(){
    if (index == images.length -1){
        index = -1
    }  
    index++
    photo.setAttribute("src", images[index])
}

function slideShowLeft(){ 
    if (index == 0){
        index = images.length
    }
    index--
    photo.setAttribute("src", images[index])
}





