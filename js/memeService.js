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

var savedMemes


var gMeme = {
    selectedLineIdx: 0,
    lines: [{
        id: 1,
        txt: 'Enter your text here',
        size: 40,
        align: 'left',
        color: 'red',
        isDrag: false,
        pos: {
            x: 150,
            y: 100
        }
    },
    {
        id: 2,
        txt: 'Enter your text here',
        size: 40,
        align: 'left',
        color: 'red',
        isDrag: false,
        pos: {
            x: 150,
            y: 550
        },
        // height: 0,
        width: 0
    }

    ]
}

function drawText() {
    gMeme.lines.forEach(line => {
        gCtx.lineWidth = 2;
        gCtx.strokeStyle = line.color
        gCtx.fillStyle = 'white'
        gCtx.font = line.size.toString() + 'px Arial'
        line.width = gCtx.measureText(line.txt).width
        gCtx.fillText(line.txt, line.pos.x, line.pos.y)
        gCtx.strokeText(line.txt, line.pos.x, line.pos.y)
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

function showEditor() {
    var elEditor = document.querySelector('.editor')
    var elGallery = document.querySelector('.gallery')
    var elMainNav = document.querySelector('.desktop-home')
    var elAbout = document.querySelector('.about')
    elGallery.style.display = 'none'
    elEditor.style.display = 'grid'
    elMainNav.style.display = 'none'
    elAbout.style.display = 'none'
}

function ShareMeme() {
    var gElCanvas = document.querySelector('.canvas-editor')
    const imgDataUrl = gElCanvas.toDataURL("image/jpeg")

    function onSuccess(uploadedImgUrl) {

        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`, '_blank')
    }

    doUploadImg(imgDataUrl, onSuccess);
}

function doUploadImg(imgDataUrl, onSuccess) {
    const formData = new FormData();
    formData.append('img', imgDataUrl)
    fetch('//ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
        .then(res => res.text())
        .then((url) => {

            onSuccess(url)
        })
        .catch((err) => {
            console.error(err)
        })
}

function showMyMeme() {
    var elMyMemeSec = document.querySelector('.my-meme')
    var elEditor = document.querySelector('.editor')
    var elGallery = document.querySelector('.gallery')
    var elMainNav = document.querySelector('.desktop-home')
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

function renderMyMeme() {
    var strHtmls = ''
    var savedMemes = loadFromStorage('myMemes')
    savedMemes.forEach(meme => {
        strHtmls += `<canvas class="canvas-editor" height="200" width="200"></canvas>`
    })
    var elGallery = document.querySelector('.gallery')
    elGallery.innerHTML += strHtmls
}

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}

function onMemeSelect(idx) {
    var elMyMemeSec = document.querySelector('.my-meme')
    var memes = loadFromStorage("memes")
    gMeme = memes[idx]
    renderMeme()
    showEditor()
    elMyMemeSec.style.display = 'none'
}

function downloadImg(elLink) {
    var imgContent = gCanvas.toDataURL('image/jpeg')// image/jpeg the default format
    elLink.href = imgContent
}

