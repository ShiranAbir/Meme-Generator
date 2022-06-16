'use strict'

function showGallery(){
    var elGallery = document.querySelector('.gallery')
    var elEditor = document.querySelector('.editor')
    var elMainNav = document.querySelector('.desktop-home')
    var elMyMemeSec = document.querySelector('.my-meme')
    var elAbout = document.querySelector('.about')
    elGallery.style.display = 'grid'
    elGallery.style.display = 'grid'
    elEditor.style.display = 'none'
    elMainNav.style.display = 'grid'
    elMyMemeSec.style.display = 'none'
    elAbout.style.display = 'block'
}