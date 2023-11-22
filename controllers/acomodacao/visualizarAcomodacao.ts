import { Request, Response } from "express";
import Acomodacao from "../../models/acomodacao";

const visualizarAcomodacao = async (req: Request, res: Response) => {

    const {id} = req.body

    await Acomodacao.findOne({_id: id}).populate('categoria').then((acomodacao) => {
        res.render('acomodacao', {layout: 'layouts/index', acomodacao: acomodacao})
    }).catch(err => {
        req.flash('erro_msg', 'Erro ao visualizar acomodação!');
        res.redirect('/acomodacoes')
    })
}

export default visualizarAcomodacao;