'use strict'

var gCanvas
var gCtx

function init() {
    gCanvas = document.querySelector('.canvas-editor')
    gCtx = gCanvas.getContext('2d')
    resizeCanvas()
    share()
    renderGallery()
    showGallery()
    addListeners()
    savedMemes = loadFromStorage('myMemes')
}




