'use strict';

function seletorDeOpcoes(id, matricula) {

    const elementoSelecionado = document.getElementById(id);
    const valorSelecionado = elementoSelecionado.value;

    switch (valorSelecionado) {
        case 'Edicao':
            editarFuncionario(matricula, valorSelecionado)
            break;
        case 'Excluir':
            excluirFuncionario(matricula, valorSelecionado)
            break;
        case 'Visualizar':
            visualizarFuncionario(matricula, valorSelecionado)
            break;
    }
}



function editarFuncionario(matricula, valorSelecionado) {
    manipulaForm(matricula, valorSelecionado)
}

function excluirFuncionario(matricula, valorSelecionado) {
    manipulaForm(matricula, valorSelecionado)
}

function visualizarFuncionario(matricula, valorSelecionado) {
    manipulaForm(matricula, valorSelecionado)
}

function manipulaForm(matricula, valorSelecionado) {
    const formulario = document.getElementById(`form-func-${matricula}`)
    const inputHidden = `<input type='hidden' name='matricula' value='${matricula}'>`
    formulario.innerHTML = inputHidden
    formulario.method = 'POST'
    formulario.action = `/funcionario/${String(valorSelecionado).toLowerCase()}`
    formulario.submit()
}


