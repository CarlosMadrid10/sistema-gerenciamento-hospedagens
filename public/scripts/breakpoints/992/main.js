"use strict"

const listenBreakpointCards = () => {

const width = innerWidth;
const rows = document.querySelector('.row')
const cards = document.querySelectorAll('.card')

//----------CARDS--------------------------
const addClassCards = () => {
    rows.classList.remove('row-cols-2')
    rows.classList.add('row-cols-1')

    cards.forEach(card => {
    card.classList.add('center-card')
    })
}
const removeClassCards = () => {
    rows.classList.remove('row-cols-1')
    rows.classList.add('row-cols-2')

    cards.forEach(card => {
    card.classList.remove('center-card')
    })
}


if ((width < 992 && rows.classList.contains('row-cols-2')) || (cards.length % 2 != 0) || cards.length == 0) {
    addClassCards()
}
else if (width > 992 && rows.classList.contains('row-cols-1')) {
    removeClassCards()
}

}

//-------------------------------------------------------





const rows = document.querySelector('.row')
const cards = document.querySelectorAll('.card')

if (rows && cards) {
window.addEventListener('resize', listenBreakpointCards);
document.addEventListener('DOMContentLoaded', listenBreakpointCards);
}


