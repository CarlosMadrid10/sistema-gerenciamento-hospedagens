const formEditFunc = document.querySelector('#formEditFunc')
const btnFormEditFunc = document.querySelector('#btnFormEditFunc')

btnFormEditFunc.onclick = () => {
  formEditFunc.method = 'POST'
  formEditFunc.action = '/funcionario/editar'
  formEditFunc.submit()
}