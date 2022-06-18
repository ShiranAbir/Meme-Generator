'use strict'

function renderGallery() {
    var strHtmls = ''
    if (gFilterdImgs.length > 0) {
        gFilterdImgs.forEach(img => {
            strHtmls += `<img id="${img.id}" onclick="onImgSelect(this)" class="meme-img" src="img/${img.id}.jpg" alt="">`
        })
    } else {
        gImgs.forEach(img => {
            strHtmls += `<img id="${img.id}" onclick="onImgSelect(this)" class="meme-img" src="img/${img.id}.jpg" alt="">`
        })
    }
    var elGallery = document.querySelector('.gallery')
    elGallery.innerHTML = strHtmls
}

function onShowGallery() {
    showGallery()
}

function onSetFilter(filter) {
    setFilter(filter)
}