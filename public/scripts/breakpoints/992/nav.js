"use strict"

const listenBreakpointBtnOptionsNav = () => {

    const width = innerWidth;
    const btnOptionsNav = document.querySelector('#btnMaisOpcoes');
  
    const addClassBtnOptionsNav = () => {
        btnOptionsNav.classList.add('mt-3')
    }
  
    const removeClassBtnOptionsNav = () => {
        btnOptionsNav.classList.remove('mt-3')
    }
  
    if ((width < 992)) {
        addClassBtnOptionsNav()
    }
    else if (width > 992) {
        removeClassBtnOptionsNav()
    }
  
  
  }
  
  
  
  window.addEventListener('resize', listenBreakpointBtnOptionsNav);
  document.addEventListener('DOMContentLoaded', listenBreakpointBtnOptionsNav)