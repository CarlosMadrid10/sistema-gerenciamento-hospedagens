'use strict';

const btnNovoHospede = document.querySelector('#btnNovaAcomodacao')
btnNovoHospede.onclick = () => {
    const formNovoHospede = document.querySelector('#formNovAcomodacao')
    formNovoHospede.method = 'GET'
    formNovoHospede.action = '/acomodacao/cadastro'
    formNovoHospede.submit()
}