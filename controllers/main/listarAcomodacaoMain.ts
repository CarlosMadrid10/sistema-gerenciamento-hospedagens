import { Request, Response } from "express";
import Acomodacao from "../../models/acomodacao";




const listarAcomodacaoMain = async (req: Request, res: Response) => {

    await Acomodacao.find().populate('categoria').then(acomodacoes => {
        res.render('main', { layout: 'layouts/index', titulo: 'Sistema de Gerenciamento de Hospedagens', acomodacoes: acomodacoes})
    }).catch(err => {
        req.flash('erro_msg', 'Erro ao encontrar acomodações!');
        res.redirect('/') 
    })
}

export default listarAcomodacaoMain

