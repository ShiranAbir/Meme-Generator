'use strict'

function onImgSelected(img) {
    var img = document.getElementById(img.id);
    gCtx.drawImage(img,0,0,gCanvasData.width, gCanvasData.height);
}

// function renderMeme(img) {
//     gCtx.drawImage(img, 0, 0, gUserData.width, gUserData.height);
// }

