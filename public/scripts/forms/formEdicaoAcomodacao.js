const formEdicaoAcomodacao = document.querySelector('#formEdicaoAcomodacao')
const  btnEdicaoAcomodacao  =document.querySelector('#btnEdicaoAcomodacao')

btnEdicaoAcomodacao.onclick = () => {
    formEdicaoAcomodacao.method = 'POST'
    formEdicaoAcomodacao.action = '/acomodacao/editar'
    formEdicaoAcomodacao.submit()
}