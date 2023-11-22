'use strict';

const btnNovoHospede = document.querySelector('#btnNovoHospede')
btnNovoHospede.onclick = () => {
    const formNovoHospede = document.querySelector('#formNovoHospede')
    formNovoHospede.method = 'GET'
    formNovoHospede.action = '/hospede/cadastro'
    formNovoHospede.submit()
}