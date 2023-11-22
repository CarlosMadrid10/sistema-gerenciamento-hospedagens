const btnMaisOpcoes = document.querySelector('#btnMaisOpcoes')

btnMaisOpcoes.onclick = () => {
  const modalMaisOpcoes = new bootstrap.Modal('#modalMaisOpcoes')
  modalMaisOpcoes.show()
}
