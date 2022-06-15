'use strict'

function renderMeme() {
    var meme = getMeme()
    var imgToRender = gImgs.find(img => img.id === +meme.selectedImgId)
    var img = new Image()
    img.onload = function () {
        gCtx.drawImage(img, 0, 0, gCanvasData.width, gCanvasData.height)
        var text = meme.lines[meme.selectedLineIdx].txt
        drawText(text)
    }
    img.src = '../' + imgToRender.url
}

function onImgSelect(Image) {
    setImg(Image.id)
}

function onSetColor(color) {
    setColor(color)
    console.log('Changing color to',color)
}

function onChangeFontSize(sign){
    changeFontSize(sign)
}