'use strict'

function renderGallery() {
    var strHtmls = ''
    gImgs.forEach(img=>{
        strHtmls += `<img id="${img.id}" onclick="onImgSelect(this)" class="meme-img" src="../img/${img.id}.jpg" alt="">`
    })
    var elGallery = document.querySelector('.gallery')
    elGallery.innerHTML = strHtmls
}

function onShowGallery(){
    showGallery()
}