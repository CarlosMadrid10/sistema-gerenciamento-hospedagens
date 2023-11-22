import { Request, Response } from "express";
import Acomodacao from "../../models/acomodacao";


const excluirAcomodacao = async (req: Request, res: Response) => {

    const { id } = await req.body;

    await Acomodacao.deleteOne({ _id: id }).then(() => {
        req.flash('sucesso_msg', 'Acomodação excluída com sucesso!')
        res.redirect('/acomodacoes/gerenciamento')
    }).catch(err => {
        req.flash('erro_msg', 'Erro ao excluir acomodação!')
        res.redirect('/acomodacoe/gerenciamento')
    })

}

export default excluirAcomodacao;