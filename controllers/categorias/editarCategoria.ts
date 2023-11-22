import { Request, Response } from "express";
import Categoria from "../../models/categoria";

const editarCategoria = async (req: Request, res: Response) => {

    const {
        id,
        categoria,
        descricao
    } = await req.body;


    if (categoria) {

        await Categoria.findOneAndUpdate({id: id }, {$set: {
            categoria,
            descricao
        }}, {new: true}).then(() => {
            req.flash('sucesso_msg', 'Categoria editada com sucesso!')
            res.redirect('/categorias')
        }).catch(err => {
            req.flash('erro_msg', 'Erro ao editar categoria!')
            res.redirect('/categorias')
        })

    } else {
        req.flash('erro_msg', 'Erro ao capturar campo de categoria!')
        res.redirect('/categorias')

    }


}

export default editarCategoria