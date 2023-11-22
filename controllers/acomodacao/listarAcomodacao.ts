import { Request, Response } from "express";
import Acomodacao from "../../models/acomodacao";




const listarAcomodacao = async (req: Request, res: Response) => {
    await Acomodacao.find().populate('categoria').then(acomodacoes => {
        res.render('acomodacoes', { layout: 'layouts/index', titulo: 'Acomodações', acomodacoes: acomodacoes})
    }).catch(err => {
        req.flash('erro_msg', 'Erro ao encontrar acomodações!');
        res.redirect('/') 
    })
}

export default listarAcomodacao

