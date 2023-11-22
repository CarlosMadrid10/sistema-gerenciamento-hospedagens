'use strict';

const formCadHospede = document.querySelector('#formCadHospede')
const btnCadHospede = document.querySelector('#btnCadHospede')

btnCadHospede.onclick = () => {
  formCadHospede.method = 'POST'
  formCadHospede.action = '/hospede/registrar'
  formCadHospede.submit()
}