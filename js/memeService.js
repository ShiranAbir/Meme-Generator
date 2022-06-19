'use strict'

var savedMemes
var gMeme = {
    selectedLineIdx: 0,
    font: 'Impact',
    lines: [{
        id: 1,
        txt: 'Enter your text here',
        size: 40,
        align: 'left',
        color: 'black',
        isDrag: false,
        pos: {
            x: 20,
            y: 60
        }
    },
    {
        id: 2,
        txt: 'Enter your text here',
        size: 40,
        align: 'left',
        color: 'black',
        isDrag: false,
        pos: {
            x: 20,
            y: 300
        },
        width: 0
    }

    ]
}


function getMeme() {
    return gMeme
}

function setLineTxt(newtxt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = newtxt
    renderMeme()
}

function setImg(id) {
    _resetMeme()
    gMeme.selectedImgId = id
    renderMeme()
}

function _resetMeme(){
    gMeme = {
        selectedLineIdx: 0,
        font: 'Impact',
        lines: [{
            id: 1,
            txt: 'Enter your text here',
            size: 40,
            align: 'left',
            color: 'black',
            isDrag: false,
            pos: {
                x: 20,
                y: 60
            }
        },
        {
            id: 2,
            txt: 'Enter your text here',
            size: 40,
            align: 'left',
            color: 'black',
            isDrag: false,
            pos: {
                x: 20,
                y: 300
            },
            width: 0
        }
    
        ]
    }
}

function setColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
    renderMeme()
}

function changeFontSize(sign) {
    if (gMeme.lines.length === 0) return
    if (sign === '+') {
        gMeme.lines[gMeme.selectedLineIdx].size += 1
    } else {
        gMeme.lines[gMeme.selectedLineIdx].size -= 1
    }
    renderMeme()
}

function showMyMeme() {
    var elMyMemeSec = document.querySelector('.my-meme')
    var elEditor = document.querySelector('.editor')
    var elGallery = document.querySelector('.gallery')
    var elMainNav = document.querySelector('.desktop-home')
    var elAbout = document.querySelector('.about')
    elAbout.style.display = 'none'
    elMyMemeSec.style.display = 'block'
    elGallery.style.display = 'none'
    elMainNav.style.display = 'none'
    elEditor.style.display = 'none'

    var memes = loadFromStorage("memes")
    if (!memes) {
        memes = []
    }

    var strHtmls = ''
    var i = 0
    memes.forEach(meme => {
        strHtmls += `<img onclick="onMemeSelect(${i})" class="saved-img" src="${meme.imgContent}" alt="">`
        i += 1
    })

    var elMymemes = document.querySelector('.saved-meme')
    elMymemes.innerHTML = strHtmls
}

function _renderMyMeme() {
    var strHtmls = ''
    var savedMemes = loadFromStorage('myMemes')
    savedMemes.forEach(meme => {
        strHtmls += `<canvas class="canvas-editor" height="200" width="200"></canvas>`
    })
    var elGallery = document.querySelector('.gallery')
    elGallery.innerHTML += strHtmls
}

function onMemeSelect(idx) {
    var elMyMemeSec = document.querySelector('.my-meme')
    var memes = loadFromStorage("memes")
    gMeme = memes[idx]
    renderMeme()
    showEditor()
    elMyMemeSec.style.display = 'none'
}

function changeFont(font) {
    gMeme.font = font
    renderMeme()
}

function deleteLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    renderMeme()
}

function addLine() {

    var newLine = {
        id: gMeme.lines.length + 1,
        txt: 'Enter your text here',
        size: 40,
        align: 'left',
        color: 'black',
        isDrag: false,
        pos: {
            x: 150,
            y: 300
        },
        width: 0
    }
    gMeme.lines.push(newLine)
    renderMeme()
}




