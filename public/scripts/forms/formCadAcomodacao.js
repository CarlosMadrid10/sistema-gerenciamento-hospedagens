'use strict';

const formCadAcomodacao = document.querySelector('#formCadAcomodacao')
const btnCadAcomodacao = document.querySelector('#btnCadAcomodacao')

btnCadAcomodacao.onclick = () => {
  formCadAcomodacao.method = 'POST'
  formCadAcomodacao.action = '/acomodacao/registrar'
  formCadAcomodacao.submit()
}