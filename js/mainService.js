'use strict'

var gCanvas
var gCtx
var gCanvasData = {
    width: 600,
    height: 600
}

function init() {
    gCanvas = document.querySelector('.canvas-editor')
    gCtx = gCanvas.getContext('2d')
    share()
    renderGallery()
    showGallery()
    addListeners()
    savedMemes = loadFromStorage('myMemes')
}




