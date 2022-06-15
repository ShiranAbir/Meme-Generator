'use strict'

function renderGallery() {
    var strHtmls = ['<img id="2" onclick="onImgSelect(this)" class="meme-img" src="../img/2.jpg" alt="">', '<img id="3" onclick="onImgSelect(this)" class="meme-img" src="../img/3.jpg" alt="">']
    var elGallery = document.querySelector('.gallery')
    elGallery.innerHTML += strHtmls
}