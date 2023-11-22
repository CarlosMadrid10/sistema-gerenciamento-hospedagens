'use strict';

const btnNovaCategoria = document.querySelector('#btnNovaCategoria')
btnNovaCategoria.onclick = () => {
    const formNovaCategoria = document.querySelector('#formNovaCategoria')
    formNovaCategoria.method = 'GET'
    formNovaCategoria.action = '/categoria/cadastro'
    formNovaCategoria.submit()
}