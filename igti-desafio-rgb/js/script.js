console.log('Desafio RGB')

window.addEventListener('load',start);

function start(){
    console.log('Página completamente carregada')
    changeDivColor ('rgb(' + redNumber.value + ',' + greenNumber.value + ',' + blueNumber.value + ')')
}

var redRange = document.querySelector('#redRange').addEventListener('change', changeRedRange)
var greenRange = document.querySelector('#greenRange').addEventListener('change', changeGreenRange)
var blueRange = document.querySelector('#blueRange').addEventListener('change', changeBlueRange)
var redNumber = document.querySelector('#redNumber')
var greenNumber = document.querySelector('#greenNumber')
var blueNumber = document.querySelector('#blueNumber')
var divColor = document.querySelector('.rgbResult')

function changeRedRange () {
    redRange = document.querySelector('#redRange')
    redRange = redRange.value
    redNumber.value = redRange
    changeDivColor ('rgb(' + redNumber.value + ',' + greenNumber.value + ',' + blueNumber.value + ')')
}

function changeGreenRange () {
    greenRange = document.querySelector('#greenRange')
    greenRange = greenRange.value
    greenNumber.value = greenRange
    changeDivColor ('rgb(' + redNumber.value + ',' + greenNumber.value + ',' + blueNumber.value + ')')
}

function changeBlueRange () {
    blueRange = document.querySelector('#blueRange')
    blueRange = blueRange.value
    blueNumber.value = blueRange
    changeDivColor ('rgb(' + redNumber.value + ',' + greenNumber.value + ',' + blueNumber.value + ')')
}

function changeDivColor (color) {
    divColor.style.backgroundColor = color
}

