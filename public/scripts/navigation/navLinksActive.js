"use strict"

const pathnamePage = window.location.pathname
const navLink = document.querySelectorAll('.nav-link')

navLink.forEach(item => {
    if(item.pathname == pathnamePage){
        item.classList.add('active','fw-semibold')
    }
})