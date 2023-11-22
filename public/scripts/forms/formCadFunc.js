'use strict';

const formCadFunc = document.querySelector('#formCadFunc')
const btnFormCadFunc = document.querySelector('#btnFormCadFunc')

btnFormCadFunc.onclick = () => {
  formCadFunc.method = 'POST'
  formCadFunc.action = '/funcionario/registrar'
  formCadFunc.submit()
}