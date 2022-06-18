'use strict'

var gFilterdImgs = []
var gKeywordSearchCountMap = { funny: 1, cute: 1, cartoon: 1, cool: 1 }


var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: 'cute' },
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
    const elFilters = [ {name:'funny',value:document.querySelector('.filter-funny')},
                        {name:'cute',value:document.querySelector('.filter-cute')},
                        {name:'cool',value:document.querySelector('.filter-cool')},
                        {name:'cartoon',value:document.querySelector('.filter-cartoon')}]

    var elFilter = elFilters.find(elFilter=>elFilter.name === filter).value
    elFilter.style.fontSize = gKeywordSearchCountMap[filter] + 'rem'
    console.log(gKeywordSearchCountMap);
}