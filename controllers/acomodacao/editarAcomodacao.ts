import { Request, Response } from "express";
import Acomodacao from "../../models/acomodacao";

const editarAcomodacao = async (req: Request, res: Response) => {

    const {
        id,
        titulo,
        numero,
        andar,
        bloco,
        descricao,
        disponibilidade,
        categoria
    } = await req.body;


    if (titulo && numero && andar && disponibilidade) {

        await Acomodacao.findOneAndUpdate({id: id }, {$set: {
            titulo,
            numero,
            andar,
            bloco,
            descricao,
            disponibilidade,
            categoria
        }}, {new: true}).then(() => {
            req.flash('sucesso_msg', 'Acomodação editada com sucesso!')
            res.redirect('/acomodacoes/gerenciamento')
        }).catch(err => {
            req.flash('erro_msg', 'Erro ao editar acomodação!')
            res.redirect('/acomodacoes/gerenciamento')
        })

    } else {
        req.flash('erro_msg', 'Erro ao capturar campo de acomodação!')
        res.redirect('/acomodacao/edicao')

    }


}

export default editarAcomodacao