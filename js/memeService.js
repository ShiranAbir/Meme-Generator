'use strict'

var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['man', 'funny'] },
{ id: 2, url: 'img/2.jpg', keywords: ['dog', 'cute'] },
{ id: 3, url: 'img/3.jpg', keywords: ['baby', 'dog'] },
{ id: 4, url: 'img/4.jpg', keywords: ['cute', 'cat'] },
{ id: 5, url: 'img/5.jpg', keywords: ['funny', 'baby'] },
{ id: 6, url: 'img/6.jpg', keywords: ['funny', 'man'] },
{ id: 7, url: 'img/7.jpg', keywords: ['funny', 'baby'] },
{ id: 8, url: 'img/8.jpg', keywords: ['funny', 'man'] },
{ id: 9, url: 'img/9.jpg', keywords: ['funny', 'baby'] }]


var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
        id:1,
        txt: 'Enter your text here',
        size: 40,
        align: 'left',
        color: 'red'
    },
    {
        id:2,
        txt: 'Enter your text here',
        size: 40,
        align: 'left',
        color: 'red'
    }

    ]
}

function drawText() {
    gMeme.lines.forEach(line => {
        gCtx.lineWidth = 2;
        gCtx.strokeStyle = line.color
        gCtx.fillStyle = 'white'
        gCtx.font = line.size.toString() + 'px Arial'
        var x
        var y
        if (line.id === 1) {
            x = gCanvasData.height / 4
            y = gCanvasData.height / 6
        } else {
            x = gCanvasData.height / 4
            y = gCanvasData.height - 50
        }
        gCtx.fillText(line.txt, x, y)
        gCtx.strokeText(line.txt, x, y)
    })

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
    } else {
        gMeme.lines[gMeme.selectedLineIdx].size += (-1)
    }
    renderMeme()
}

function switchLine() {
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
        gMeme.selectedLineIdx = 0
    } else {
        gMeme.selectedLineIdx += 1
    }
    console.log(gMeme.selectedLineIdx)
}

function showEditor(){
    var elEditor = document.querySelector('.editor')
    var elGallery = document.querySelector('.gallery')
    var elMainNav = document.querySelector('.desktop-home')
    elGallery.style.display = 'none'
    elEditor.style.display = 'grid'
    elMainNav.style.display = 'none'
}

function resetMeme(){
    gMeme
}