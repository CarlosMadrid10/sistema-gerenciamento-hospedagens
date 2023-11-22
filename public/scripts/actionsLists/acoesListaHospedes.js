'use strict';

function seletorDeOpcoes(id, idHospede) {

    const elementoSelecionado = document.getElementById(id);
    const valorSelecionado = elementoSelecionado.value;

    switch (valorSelecionado) {
        case 'Edicao':
            editarHospede(idHospede, valorSelecionado)
            break;
        case 'Excluir':
            excluirHospede(idHospede, valorSelecionado)
            break;
        case 'Visualizar':
            visualizarHospede(idHospede, valorSelecionado)
            break;
    }
}



function editarHospede(idHospede, valorSelecionado) {
    manipulaForm(idHospede, valorSelecionado)
}

function excluirHospede(idHospede, valorSelecionado) {
    manipulaForm(idHospede, valorSelecionado)
}

function visualizarHospede(idHospede, valorSelecionado) {
    manipulaForm(idHospede, valorSelecionado)
}

function manipulaForm(idHospede, valorSelecionado) {
    const formulario = document.getElementById(`form-hospede-${idHospede}`)
    const inputHidden = `<input type='hidden' name='id' value='${idHospede}'>`
    formulario.innerHTML = inputHidden
    formulario.method = 'POST'
    formulario.action = `/hospede/${String(valorSelecionado).toLowerCase()}`
    formulario.submit()
}

