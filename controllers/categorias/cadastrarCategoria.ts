import { Request, Response } from "express";
import Categoria from "../../models/categoria";

const cadastrarCategoria = async (req: Request, res: Response) => {

    const {
        categoria,
        descricao
    } = await req.body;

    if (categoria) {
        const novaCategoria = new Categoria({
            categoria,
            descricao
        })

        await novaCategoria.save()

        req.flash('sucesso_msg', 'Categoria registrada com sucesso!')
        res.redirect('/categorias')
    } else {
        req.flash('erro_msg', 'Erro ao capturar campo de categoria.')
        res.redirect('/categoria/cadastro')
    }

}

export default cadastrarCategoria;