import { Router, Request, Response } from "express";
import { register, login, logout } from '../controllers/authController';
import { eAdmin } from "../config/eAdmin";
import Funcionario from "../models/funcionario";
import editarFuncionario from "../controllers/funcionarios/editarFuncionario";
import excluirFuncionario from "../controllers/funcionarios/excluirFuncionario";
import { eMaster } from "../config/eMaster";
import visualizarFuncionario from "../controllers/funcionarios/visualizarFuncionario";
import listarFuncionarios from "../controllers/funcionarios/listarFuncionarios";
import Hospede from "../models/hospede";
import cadastrarHospede from "../controllers/hospedes/cadastrarHospede";
import excluirHospede from "../controllers/hospedes/excluirHospede";
import editarHospede from "../controllers/hospedes/editarHospede";
import visualizarHospede from "../controllers/hospedes/visualizarHospede";
import listarHospede from "../controllers/hospedes/listarHospede";
import cadastrarCategoria from "../controllers/categorias/cadastrarCategoria";
import excluirCategoria from "../controllers/categorias/excluirCategoria";
import editarCategoria from "../controllers/categorias/editarCategoria";
import Categoria from "../models/categoria";
import listarCategorias from "../controllers/categorias/listarCategorias";
import visualizarCategoria from "../controllers/categorias/visualizarCategoria";
import cadastrarAcomodacao from "../controllers/acomodacao/cadastrarAcomodacao";
import editarAcomodacao from "../controllers/acomodacao/editarAcomodacao";
import excluirAcomodacao from "../controllers/acomodacao/excluirAcomodacao";
import visualizarAcomodacao from "../controllers/acomodacao/visualizarAcomodacao";
import listarAcomodacao from "../controllers/acomodacao/listarAcomodacao";
import verificaCategorias from "../controllers/acomodacao/verificaCategorias";
import listarAcomodacaoMain from "../controllers/main/listarAcomodacaoMain";
import Acomodacao from "../models/acomodacao";
import ocuparAcomodacao from "../controllers/acomodacao/ocuparAcomodacao";

const route = Router();

//Rota Inicial
route.get('/', eAdmin, listarAcomodacaoMain)

//Rota de Login
route.get('/login', (req: Request, res: Response) => {
    res.render('login', { layout: 'layouts/index', titulo: 'Login | SGH' })
})

//Rota de Local
route.get('/local', eAdmin, (req: Request, res: Response) => {
    res.render('local', { layout: 'layouts/index', titulo: 'Local' })
})

route.get('/meu-perfil', eAdmin, async (req: Request, res: Response) => {

    const matricula = Object(req.user).matricula

    await Funcionario.findOne({ matricula: matricula }).then((funcionario) => {
        res.render('meu-perfil', { layout: 'layouts/index', funcionario: funcionario })
    }).catch(err => {
        req.flash('erro_msg', 'Erro ao visualizar perfil!');
        res.redirect('/')
    })
})


//-------------Rotas de Edição-------------------//


//Renderização de Páginas

route.get('/local/edicao', eAdmin, (req: Request, res: Response) => {
    res.render('ed-local', { layout: 'layouts/index', titulo: 'Local - Alteração' })
})

route.post('/hospede/edicao', eAdmin, async (req: Request, res: Response) => {
    

    const {id} = req.body

    await Hospede.findOne({ _id: id }).then((hospede) => {
        res.render('ed-hospede', { layout: 'layouts/index', titulo: 'Hospede - Alteração', hospede: hospede
    })
    }).catch(err => {
        req.flash('erro_msg', 'Erro ao encontrar hospede!');
        res.redirect('/hospedes')
    })
})


route.post('/acomodacao/edicao', eAdmin, async (req: Request, res: Response) => {

    const {id} = req.body

    await Acomodacao.findOne({ _id: id }).populate('categoria').then((acomodacao) => {
        res.render('ed-acomodacao', { layout: 'layouts/index', titulo: 'Acomodação - Alteração', acomodacao: acomodacao})
    }).catch(err => {
        req.flash('erro_msg', 'Erro ao encontrar acomodação!');
        res.redirect('/acomodacoes/gerenciamento')
    })
})


route.post('/categoria/edicao', eAdmin, async (req: Request, res: Response) => {
    const {id} = req.body

    await Categoria.findOne({ _id: id }).then((categoria) => {
        res.render('ed-categoria', { layout: 'layouts/index', titulo: 'Categoria - Alteração', categoria: categoria})
    }).catch(err => {
        req.flash('erro_msg', 'Erro ao encontrar categoria!');
        res.redirect('/funcionarios')
    })

    
})

route.post('/funcionario/edicao', eAdmin, async (req: Request, res: Response) => {
    const matricula = req.body.matricula

    await Funcionario.findOne({ matricula: matricula }).then((funcionario) => {
        res.render('adm/ed-funcionario', { layout: 'layouts/index', titulo: 'Funcionário - Alteração', funcionario: funcionario })
    }).catch(err => {
        req.flash('erro_msg', 'Erro ao encontrar funcionario!');
        res.redirect('/funcionarios')
    })
})

//-------------Rotas de cadastro-------------------//


//Renderização de Páginas

route.get('/local/cadastro', eAdmin, (req: Request, res: Response) => {
    res.render('cad-local', { layout: 'layouts/index', titulo: 'Local - Alteração' })
})

route.get('/hospede/cadastro', eAdmin, (req: Request, res: Response) => {
    res.render('cad-hospede', { layout: 'layouts/index', titulo: 'Hospede - Alteração' })
})


route.get('/acomodacao/cadastro', eAdmin, verificaCategorias)


route.get('/categoria/cadastro', eAdmin, (req: Request, res: Response) => {
    res.render('cad-categoria', { layout: 'layouts/index', titulo: 'Categoria - Alteração' })
})







//------------------POSTS------------------------------------------

//Autenticação
route.post('/autenticacao', login)

route.post('/logout', eAdmin, logout)

// ------------------MASTER---------------------------------------------


//CRUD Funcionarios
route.post('/funcionario/registrar', eMaster, register)

route.post('/funcionario/excluir', eMaster, excluirFuncionario)

route.post('/funcionario/editar', eMaster, editarFuncionario)

//Rota de Usuario
route.post('/funcionario/visualizar', eMaster, visualizarFuncionario)

//Rota de Cadastro de Funcionario 
route.get('/funcionario/cadastro', eMaster, (req: Request, res: Response) => {
    res.render('adm/cad-funcionario', { layout: 'layouts/index', titulo: 'Funcionário - Alteração' })
})


route.get('/funcionarios', eMaster, listarFuncionarios)


//CRUD Hospedes

route.post('/hospede/registrar', eAdmin, cadastrarHospede)

route.post('/hospede/excluir', eAdmin, excluirHospede)

route.post('/hospede/editar', eAdmin, editarHospede)

route.post('/hospede/visualizar', eAdmin, visualizarHospede)

//Rota de Hospedes
route.get('/hospedes', eAdmin, listarHospede)



//CRUD Categorias

route.post('/categoria/registrar', eAdmin, cadastrarCategoria)

route.post('/categoria/excluir', eAdmin, excluirCategoria)

route.post('/categoria/editar', eAdmin, editarCategoria)

route.post('/categoria/visualizar', eAdmin, visualizarCategoria)

//Rota de Categorias
route.get('/categorias', eAdmin, listarCategorias)


//CRUD Acomodações

route.post('/acomodacao/registrar', eAdmin, cadastrarAcomodacao)

route.post('/acomodacao/excluir', eAdmin, excluirAcomodacao)

route.post('/acomodacao/editar', eAdmin, editarAcomodacao)

route.post('/acomodacao/visualizar', eAdmin, visualizarAcomodacao)

//Rota de Acomodações
route.get('/acomodacoes', eAdmin, listarAcomodacao)

//Rota de Gerenciamento de Acomodações
route.get('/acomodacoes/gerenciamento', eAdmin, (req: Request, res: Response) => {
    Acomodacao.find().populate('categoria').then(acomodacoes => {
        res.render('ger-acomodacoes', { layout: 'layouts/index', titulo: 'Acomodações - Gerenciamento', acomodacoes: acomodacoes})
    }).catch(err => {
        req.flash('erro_msg', 'Erro ao exibir acomodações!');
        res.redirect('/acomodacoes')   
    })
})

route.get('/acomodacao/ocupacao', eAdmin, (req: Request, res: Response) =>{
    Hospede.find().then(hospedes => {
        res.render('vinc-acomodado', { layout: 'layouts/index', titulo: 'Hospede - Vinculação', hospedes: hospedes})
    }).catch(err => {
        req.flash('erro_msg', 'Erro ao exibir hospedes!');
        res.redirect('/acomodacoes') 
    })
})
route.post('/acomodacao/ocupar', eAdmin, ocuparAcomodacao)
route.post('/acomodacao/desocupar', eAdmin)

export default route;