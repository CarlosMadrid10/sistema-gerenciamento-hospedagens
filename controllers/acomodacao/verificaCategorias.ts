import Categoria from "../../models/categoria"
import { Request, Response } from "express"

const verificaCategorias = async (req: Request, res: Response) => {
    await Categoria.find().then(categorias => {
        if(categorias){
            res.render('cad-acomodacao', { layout: 'layouts/index', titulo: 'Acomodação - Alteração', categorias: categorias})
        }else{
            req.flash('erro_msg', 'Não existem categorias no banco. Cadastre uma categoria para continuar.')
            res.redirect('/categorias')
        }
    }).catch(err => {
        req.flash('erro_msg', 'Erro ao buscar categorias.')
        res.redirect('/acomodacoes')
    })

    
}

export default verificaCategorias;