'use strict'

const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
var gStartPos

function addListeners() {
    _addMouseListeners()
    _addTouchListeners()
    _addResizeListener()
}

function _addMouseListeners() {
    gCanvas.addEventListener('mousemove', _onMove)
    gCanvas.addEventListener('mousedown', onDown)
    gCanvas.addEventListener('mouseup', onUp)
}

function _addTouchListeners() {
    gCanvas.addEventListener('touchmove', _onMove)
    gCanvas.addEventListener('touchstart', onDown)
    gCanvas.addEventListener('touchend', onUp)
}

function _addResizeListener() {
    window.addEventListener('resize', function(event) {
        var elEditor = document.querySelector('.editor')
        if (elEditor.style.display!=='grid') return
        resizeCanvas()
        renderMeme()
    }, true)
}

function onDown(ev) {
    const pos = _getEvPos(ev)
    if (!_isLineClicked(pos)) return
    _setElementDrag(true)
    gStartPos = pos
    document.body.style.cursor = 'grabbing'

}

function _isLineClicked(clickedPos) {
    var i = gMeme.lines.findIndex(line => {
        const textHeight = line.size
        const pos = line.pos
        const textWidth = line.width
        const padding = textHeight / 2 + 10
        if (clickedPos.x < textWidth + pos.x
            && clickedPos.x > pos.x
            && clickedPos.y < textHeight + pos.y - padding
            && clickedPos.y > pos.y - padding) {
            setPlaceholder()
            return true
        }
    })
    if (i === -1) return false
    gMeme.selectedLineIdx = i
    setPlaceholder()
    return true
}

function _onMove(ev) {
    const meme = getMeme()
    if (meme.lines[gMeme.selectedLineIdx].isDrag) {
        const pos = _getEvPos(ev)
        //Calc the delta , the diff we moved
        const dx = pos.x - gStartPos.x
        const dy = pos.y - gStartPos.y
        _moveElement(dx, dy)
        //Save the last pos , we remember where we`ve been and move accordingly
        gStartPos = pos
        //The canvas is render again after every move
        renderMeme()
    }
}

function onUp() {
    _setElementDrag(false)
    document.body.style.cursor = 'grab'
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-editor')
    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = elContainer.offsetHeight
}

function _getEvPos(ev) {

    //Gets the offset pos , the default pos
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    // Check if its a touch ev
    if (gTouchEvs.includes(ev.type)) {
        //soo we will not trigger the mouse ev
        ev.preventDefault()
        //fix for input not losing focus
        document.querySelector('.text-input').blur()
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

function _setElementDrag(isDrag) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
}

function _moveElement(dx, dy) {
    gMeme.lines[gMeme.selectedLineIdx].pos.x += dx
    gMeme.lines[gMeme.selectedLineIdx].pos.y += dy

}
