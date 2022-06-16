'use strict'

function renderMeme() {
    var meme = getMeme()
    var imgToRender = gImgs.find(img => img.id === +meme.selectedImgId)
    var img = new Image()
    img.onload = function () {
        gCtx.drawImage(img, 0, 0, gCanvasData.width, gCanvasData.height)
        drawText()
    }
    img.src = '../' + imgToRender.url
}

function onImgSelect(Image) {
    setImg(Image.id)
    showEditor()
}

function onSetColor(color) {
    setColor(color)
}

function onChangeFontSize(sign){
    changeFontSize(sign)
}

function onSwitchLine(){
    switchLine()
}

function onShare() {
    ShareMeme()
}