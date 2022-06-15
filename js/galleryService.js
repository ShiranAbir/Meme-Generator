'use strict'

function showGallery(){
    var elGallery = document.querySelector('.gallery')
    var elEditor = document.querySelector('.editor')
    var elMainNav = document.querySelector('.desktop-home')
    elGallery.style.display = 'grid'
    elEditor.style.display = 'none'
    elMainNav.style.display = 'grid'
}