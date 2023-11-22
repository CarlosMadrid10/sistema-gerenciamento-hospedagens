'use strict';

const btnNovoFuncionario = document.querySelector('#btnNovoFuncionario')
btnNovoFuncionario.onclick = () => {
    const formNovoFuncionario = document.querySelector('#formNovoFuncionario')
    formNovoFuncionario.method = 'GET'
    formNovoFuncionario.action = '/funcionario/cadastro'
    formNovoFuncionario.submit()
}