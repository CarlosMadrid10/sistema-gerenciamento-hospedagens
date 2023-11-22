'use strict';

const formCadOcupacao = document.querySelector('#formCadOcupacao')
const btnCadOcupacao = document.querySelector('#btnCadOcupacao')
const radioQuery = document.getElementsByName('acomodado')
let valueRadio = '';
radioQuery.forEach(item => {
  if(item.checked){
    valueRadio = item.value
  }
})

if (valueRadio){
  alert(valueRadio)
  const params = new URLSearchParams(window.location.search);
  const idAcomodacao = params.get('id');
  formCadOcupacao.innerHTML = `<input type="hidden" name="id" value=${radioQuery}></input>`
  formCadOcupacao.innerHTML = `<input type="hidden" name="idAcomodacao" value=${idAcomodacao}></input>`


  btnCadOcupacao.onclick = () => {
    formCadOcupacao.method = 'POST'
    formCadOcupacao.action = '/acomodacao/ocupar'
    formCadOcupacao.submit()

  }
}






