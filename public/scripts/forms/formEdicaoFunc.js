const formEdicaoFunc = document.querySelector('#formEdicaoFunc')
const  btnEdicaoFunc  =document.querySelector('#btnEdicaoFunc')

btnEdicaoFunc.onclick = () => {
    formEdicaoFunc.method = 'POST'
    formEdicaoFunc.action = '/funcionario/edicao'
    formEdicaoFunc.submit()
}