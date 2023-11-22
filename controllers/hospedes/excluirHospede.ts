import { Request, Response } from "express";
import Hospede from "../../models/hospede";


const excluirHospede = async (req: Request, res: Response) => {

    const { id } = await req.body;

    await Hospede.deleteOne({ _id: id }).then(() => {
        req.flash('sucesso_msg', 'Hospede excluído com sucesso!')
        res.redirect('/hospedes')
    }).catch(err => {
        req.flash('erro_msg', 'Erro ao excluir hospede!')
        res.redirect('/hospedes')
    })

}

export default excluirHospede;