'use strict'

function showGallery(){
    var elGallery = document.querySelector('.gallery')
    var elEditor = document.querySelector('.editor')
    var elMainNav = document.querySelector('.desktop-home')
    var elMyMemeSec = document.querySelector('.my-meme')
    elGallery.style.display = 'grid'
    elEditor.style.display = 'none'
    elMainNav.style.display = 'grid'
    elMyMemeSec.style.display = 'none'
}