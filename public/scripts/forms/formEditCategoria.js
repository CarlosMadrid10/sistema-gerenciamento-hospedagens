const formEditcategoria = document.querySelector('#formEditCategoria')
const btnEditCategoria = document.querySelector('#btnEditCategoria')

btnEditCategoria.onclick = () => {
  formEditcategoria.method = 'POST'
  formEditcategoria.action = '/categoria/editar'
  formEditcategoria.submit()
}