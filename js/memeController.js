'use strict'

function renderMeme() {
    var meme = getMeme()
    var imgToRender = gImgs.find(img => img.id === +meme.selectedImgId)
    var img = new Image()
    img.onload = function () {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawText()
    }
    img.src = './' + imgToRender.url
}

function onImgSelect(Image) {
    setImg(Image.id)
    showEditor()
}

function onSetColor(color) {
    setColor(color)
}

function onChangeFontSize(sign) {
    changeFontSize(sign)
}

// function onSwitchLine() {
//     switchLine()
// }

function onShowMyMeme() {
    showMyMeme()
}

function onChangeFont(font) {
    changeFont(font)
}

function onAddLine(){
    addLine()
}

function onDeleteLine(){
    deleteLine()
}



