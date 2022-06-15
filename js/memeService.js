'use strict'

var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
{ id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat'] },
{ id: 3, url: 'img/3.jpg', keywords: ['funny', 'cat'] }]


var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I sometimes eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'
    }
    ]
}

function drawText(text) {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = gMeme.lines[gMeme.selectedLineIdx].color
    gCtx.fillStyle = 'white'
    gCtx.font = gMeme.lines[gMeme.selectedLineIdx].size.toString() + 'px Arial'
    var x = gCanvasData.height / 4
    var y = gCanvasData.height / 6
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function getMeme() {
    return gMeme
}

function setLineTxt(newtxt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = newtxt
    renderMeme()
}

function setImg(id) {
    gMeme.selectedImgId = id
    console.log(id)
    console.log(gMeme)
    renderMeme()
}

function setColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
    console.log(gMeme)
    console.log('New color is:', color)
}

function changeFontSize(sign) {
    if (sign === '➕') {
        gMeme.lines[gMeme.selectedLineIdx].size += 1
    }else{
        gMeme.lines[gMeme.selectedLineIdx].size += (-1)
    }
    renderMeme()
}
