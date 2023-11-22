import { Request, Response } from "express";
import Hospede from "../../models/hospede";


const listarHospede = (req: Request, res: Response) => {
    Hospede.find().then(hospedes => {
        res.render('hospedes', { layout: 'layouts/index', titulo: 'Hospedes' , hospedes: hospedes})
    }).catch(err => {
        req.flash('erro_msg', 'Erro ao listar hospedes!')
        res.redirect('/hospedes') 
    })
}

export default listarHospede;