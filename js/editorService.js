'use strict'

function drawText() {
    gMeme.lines.forEach(line => {
        gCtx.lineWidth = 2;
        gCtx.strokeStyle = line.color
        gCtx.fillStyle = 'white'
        gCtx.font = line.size.toString() + 'px ' + gMeme.font
        line.width = gCtx.measureText(line.txt).width
        gCtx.fillText(line.txt, line.pos.x, line.pos.y)
        gCtx.strokeText(line.txt, line.pos.x, line.pos.y)
    })

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
    topFunction()
}

function ShareMeme() {
    var gElCanvas = document.querySelector('.canvas-editor')
    const imgDataUrl = gElCanvas.toDataURL("image/jpeg")

    function onSuccess(uploadedImgUrl) {

        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`, '_blank')
    }

    _doUploadImg(imgDataUrl, onSuccess);
}

function _doUploadImg(imgDataUrl, onSuccess) {
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

function downloadImg(elLink) {
    var imgContent = gCanvas.toDataURL('image/jpeg')// image/jpeg the default format
    elLink.href = imgContent
}

function share() {
    const btn = document.querySelector('.share-btn');
    btn.addEventListener('click', async () => {
        const dataUrl = gCanvas.toDataURL();
        const blob = await (await fetch(dataUrl)).blob();
        const filesArray = [
            new File(
                [blob],
                'meme.jpg',
                {
                    type: "image/jpeg",
                    lastModified: new Date().getTime()
                }
            )
        ]
        if (navigator.canShare && navigator.canShare({ files: filesArray })) {
            try {
                var shareData = {
                    title: 'MDN',
                    text: 'Learn web development on MDN!',
                    files: filesArray
                }
                await navigator.share(shareData)
            } catch (err) {
                alert('Shared failed')
            }
        } else {
            alert('Shared failed')
        }
    })
}

function drawSticker(num) {
    var emoji = String.fromCodePoint(num)
    var newLine = {
        id: gMeme.lines.length + 1,
        txt: emoji,
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

function setPlaceholder(){
    const elTxtInput = document.querySelector('.text-input')
    const value = elTxtInput.value
    if (value !== 'Enter text here:'){
        elTxtInput.value = gMeme.lines[gMeme.selectedLineIdx].txt
    }else{
        elTxtInput.value = 'Enter text here:'
    }
}