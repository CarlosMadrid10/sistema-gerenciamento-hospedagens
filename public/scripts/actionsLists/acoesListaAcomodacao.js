'use strict';

function seletorDeOpcoes(id, idAcomodacao) {

    const elementoSelecionado = document.getElementById(id);
    const valorSelecionado = elementoSelecionado.value;

    switch (valorSelecionado) {
        case 'Edicao':
            editarAcomodacao(idAcomodacao, valorSelecionado)
            break;
        case 'Excluir':
            excluirAcomodacao(idAcomodacao, valorSelecionado)
            break;
        case 'Visualizar':
            visualizarAcomodacao(idAcomodacao, valorSelecionado)
            break;
    }
}



function editarAcomodacao(idAcomodacao, valorSelecionado) {
    manipulaForm(idAcomodacao, valorSelecionado)
}

function excluirAcomodacao(idAcomodacao, valorSelecionado) {
    manipulaForm(idAcomodacao, valorSelecionado)
}

function visualizarAcomodacao(idAcomodacao, valorSelecionado) {
    manipulaForm(idAcomodacao, valorSelecionado)
}

function manipulaForm (idAcomodacao, valorSelecionado) {
    const formulario = document.getElementById(`form-func-${idAcomodacao}`)
    const inputHidden = `<input type='hidden' name='id' value='${idAcomodacao}'>`
    formulario.innerHTML = String(inputHidden)
    formulario.method = 'POST'
    formulario.action = `/acomodacao/${String(valorSelecionado).toLowerCase()}`
    formulario.submit()
}


