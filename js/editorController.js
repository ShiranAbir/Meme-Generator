'use strict'

function onShare() {
    ShareMeme()
}

function onSave() {
    var memes = loadFromStorage("memes")
    if (!memes) { 
        memes = []
    }
    gMeme.imgContent = gCanvas.toDataURL('image/jpeg')

    memes.push(gMeme)
    saveToStorage("memes", memes)
    alert('Meme saved!')
}

function onDownload(link){
    downloadImg(link)
}

function onDrawSticker(num){
    drawSticker(num)
}

function onSetPlaceholder(value){
    setPlaceholder(value)
}

function onInputFocus(input){
    inputFocus(input)
}