import { Request, Response } from "express";
import Categoria from "../../models/categoria";
const listarCategorias = async (req: Request, res: Response) => {
    await Categoria.find().then(categorias => {
        res.render('categorias', { layout: 'layouts/index', titulo: 'Categorias', categorias: categorias })
    }).catch(err => {
        req.flash('erro_msg', 'Erro ao encontrar categorias!');
        res.redirect('/') 
    })
}

export default listarCategorias