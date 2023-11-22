import Categoria from "../../models/categoria";
import { Request, Response } from "express";

const visualizarCategoria = async (req: Request, res: Response) => {

    const {id} = req.body

    await Categoria.findOne({_id: id}).then((categoria) => {
        res.render('categoria', {layout: 'layouts/index', categoria: categoria})
    }).catch(err => {
        req.flash('erro_msg', 'Erro ao visualizar categoria!');
        res.redirect('/categorias')
    })
}

export default visualizarCategoria;