'use strict'

const images = [
    { 'id': '1', 'url': "../4 SlideShow/img/office.jpeg" },
    { 'id': '2', 'url': "../4 SlideShow/img/greys.jpeg" },
    { 'id': '3', 'url': "../4 SlideShow/img/lost.jpeg"},
    { 'id': '4', 'url': "../4 SlideShow/img/narcos.jpeg" },
    { 'id': '5', 'url': "../4 SlideShow/img/peaky.jpeg" },
    { 'id': '6', 'url': "../4 SlideShow/img/prison.jpeg" },
]

const containerItems = document.querySelector('#container-items')

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems)

let items = document.querySelectorAll('.item')

const previous = () => {
    containerItems.appendChild(items[0])
    items = document.querySelectorAll('.item')
}

const next = () => {
    const lastItem = items[items.length - 1]
    containerItems.insertBefore( lastItem, items[0] )
    items = document.querySelectorAll('.item')
}

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)