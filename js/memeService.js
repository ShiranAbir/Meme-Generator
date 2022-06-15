'use strict'

var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
{ id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat'] },
{ id: 3, url: 'img/3.jpg', keywords: ['funny', 'cat'] }]


var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [{
        id:1,
        txt: 'Enter your text here:',
        size: 20,
        align: 'left',
        color: 'red'
    },
    {
        id:2,
        txt: 'Enter your text here:',
        size: 20,
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