'use strict'

const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
var gStartPos

function addListeners() {
    addMouseListeners()
    addTouchListeners()
}

function addMouseListeners() {
    gCanvas.addEventListener('mousemove', onMove)
    gCanvas.addEventListener('mousedown', onDown)
    gCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gCanvas.addEventListener('touchmove', onMove)
    gCanvas.addEventListener('touchstart', onDown)
    gCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
    const pos = getEvPos(ev)
    // if(!isDrag) return
    if (!isLineClicked(pos)) return
    setElementDrag(true)
    gStartPos = pos
    document.body.style.cursor = 'grabbing'

}

function isLineClicked(clickedPos) {
    const pos = gMeme.lines[gMeme.selectedLineIdx].pos
    console.log(clickedPos);
    console.log(gMeme.lines[gMeme.selectedLineIdx].width)
    if (clickedPos.x < gMeme.lines[gMeme.selectedLineIdx].width + pos.x
        && clickedPos.y < 50 + pos.y){
        // gMeme.lines[gMeme.selectedLineIdx].isDrag = true
        return true
    }
    
    console.log(gMeme.lines[gMeme.selectedLineIdx].pos);

    // return true
}

function onMove(ev) {
    const meme = getMeme();
    if (meme.lines[gMeme.selectedLineIdx].isDrag) {
        const pos = getEvPos(ev)
        //Calc the delta , the diff we moved
        const dx = pos.x - gStartPos.x
        const dy = pos.y - gStartPos.y
        moveElement(dx, dy)
        //Save the last pos , we remember where we`ve been and move accordingly
        gStartPos = pos
        //The canvas is render again after every move
        renderMeme()
    }
}

function onUp() {
    setElementDrag(false)
    document.body.style.cursor = 'grab'
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

function getEvPos(ev) {

    //Gets the offset pos , the default pos
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    // Check if its a touch ev
    if (gTouchEvs.includes(ev.type)) {
        //soo we will not trigger the mouse ev
        ev.preventDefault()
        //Gets the first touch point
        ev = ev.changedTouches[0]
        //Calc the right pos according to the touch screen
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}

function setElementDrag(isDrag) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
}

function moveElement(dx, dy) {
    gMeme.lines[gMeme.selectedLineIdx].pos.x += dx
    gMeme.lines[gMeme.selectedLineIdx].pos.y += dy

}
