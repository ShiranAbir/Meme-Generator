'use strict'

var gFilterdImgs = []
var gKeywordSearchCountMap = { funny: 1, cute: 1, cartoon: 1, cool: 1 }
const gSheepImgs = [{ id: 1, url: 'img/1.jpg', keywords: 'cute' },
{ id: 2, url: 'img/2.jpg', keywords: 'cute' },
{ id: 3, url: 'img/3.jpg', keywords: 'funny' },
{ id: 4, url: 'img/4.jpg', keywords: 'cute' },
{ id: 5, url: 'img/5.jpg', keywords: 'funny' },
{ id: 6, url: 'img/6.jpg', keywords: 'cool' },
{ id: 7, url: 'img/7.jpg', keywords: 'funny' },
{ id: 8, url: 'img/8.jpg', keywords: 'funny' },
{ id: 9, url: 'img/9.jpg', keywords: 'cute' },
{ id: 10, url: 'img/10.jpg', keywords: 'funny' },
{ id: 11, url: 'img/11.jpg', keywords: 'cartoon' },
{ id: 12, url: 'img/12.jpg', keywords: 'funny' },
{ id: 13, url: 'img/13.jpg', keywords: 'cool' },
{ id: 14, url: 'img/14.jpg', keywords: 'cool' },
{ id: 15, url: 'img/15.jpg', keywords: 'cartoon' }]

const gCowImgs = [{ id: 16, url: 'img/16.jpg', keywords: 'cute' },
{ id: 17, url: 'img/17.jpg', keywords: 'cool' },
{ id: 18, url: 'img/18.jpg', keywords: 'funny' },
{ id: 19, url: 'img/19.jpg', keywords: 'funny' },
{ id: 20, url: 'img/20.jpg', keywords: 'cartoon' },
{ id: 21, url: 'img/21.jpg', keywords: 'funny' },
{ id: 22, url: 'img/22.jpg', keywords: 'cute' },
{ id: 23, url: 'img/23.jpg', keywords: 'funny' },
{ id: 24, url: 'img/24.jpg', keywords: 'funny' }]

const gDonkeyImgs =[{ id: 25, url: 'img/25.jpg', keywords: 'cute' },
{ id: 26, url: 'img/26.jpg', keywords: 'funny' },
{ id: 27, url: 'img/27.jpg', keywords: 'funny' },
{ id: 28, url: 'img/28.jpg', keywords: 'funny' },
{ id: 29, url: 'img/29.jpg', keywords: 'cartoon' },
{ id: 30, url: 'img/30.jpg', keywords: 'cute' },
{ id: 31, url: 'img/31.jpg', keywords: 'funny' },
{ id: 32, url: 'img/32.jpg', keywords: 'cartoon' },
{ id: 33, url: 'img/33.jpg', keywords: 'funny' },]

var gImgs = gSheepImgs

function showGallery() {
    var elGallery = document.querySelector('.gallery')
    var elEditor = document.querySelector('.editor')
    var elMainNav = document.querySelector('.desktop-home')
    var elMyMemeSec = document.querySelector('.my-meme')
    var elAbout = document.querySelector('.about')
    elGallery.style.display = 'grid'
    elGallery.style.display = 'grid'
    elEditor.style.display = 'none'
    elMainNav.style.display = 'grid'
    elMyMemeSec.style.display = 'none'
    elAbout.style.display = 'block'
    clearCanvas()
}

function clearCanvas(){
    gCanvas = document.querySelector('.canvas-editor')
    gCtx = gCanvas.getContext('2d')
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

function setFilter(filter) {
    if (filter === 'all') {
        gFilterdImgs = []
    } else {
        gFilterdImgs = gImgs.filter(img => img.keywords === filter)
        keywordSize(filter)
    }
    renderGallery()
}

function keywordSize(filter) {
    if (gKeywordSearchCountMap[filter] > 2) return
    gKeywordSearchCountMap[filter] += 1
    const elFilters = [{ name: 'funny', value: document.querySelector('.filter-funny') },
    { name: 'cute', value: document.querySelector('.filter-cute') },
    { name: 'cool', value: document.querySelector('.filter-cool') },
    { name: 'cartoon', value: document.querySelector('.filter-cartoon') }]

    var elFilter = elFilters.find(elFilter => elFilter.name === filter).value
    elFilter.style.fontSize = gKeywordSearchCountMap[filter] + 'rem'
}

function setTheme(theme) {
    switch (theme) {
        case 'cow':
            gImgs = gCowImgs
            break;
        case 'sheep':
            gImgs = gSheepImgs
            break;
        case 'donkey':
            gImgs = gDonkeyImgs
            break;
        default:
            gImgs = gSheepImgs
    }
    setFilter('all')
}