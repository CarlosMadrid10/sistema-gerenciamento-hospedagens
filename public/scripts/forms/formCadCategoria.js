'use strict';

const formCadCategoria = document.querySelector('#formCadCategoria')
const btnCadCategoria = document.querySelector('#btnCadCategoria')

btnCadCategoria.onclick = () => {
  formCadCategoria.method = 'POST'
  formCadCategoria.action = '/categoria/registrar'
  formCadCategoria.submit()
}