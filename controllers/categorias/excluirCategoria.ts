import { Request, Response } from "express";
import Categoria from "../../models/categoria";


const excluirCategoria = async (req: Request, res: Response) => {

    const { id } = await req.body;

    await Categoria.deleteOne({ _id: id }).then(() => {
        req.flash('sucesso_msg', 'Categoria excluída com sucesso!')
        res.redirect('/categorias')
    }).catch(err => {
        req.flash('erro_msg', 'Erro ao excluir categoria!')
        res.redirect('/categorias')
    })

}

export default excluirCategoria;