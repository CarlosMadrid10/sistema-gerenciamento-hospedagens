import { Request, Response } from "express";
import Hospede from "../../models/hospede";


const visualizarHospede = async (req: Request, res: Response) => {

    const {id} = await req.body;

    await Hospede.findOne({ _id: id }).then(hospede => {
        res.render('hospede', {layout: 'layouts/index', titulo: 'Hospede', hospede: hospede})
    }).catch(err => {
        req.flash('erro_msg', 'Erro ao encontrar hospede!')
        res.redirect('/hospedes')
    })

}

export default visualizarHospede;