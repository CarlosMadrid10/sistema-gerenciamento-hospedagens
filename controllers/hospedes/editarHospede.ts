import { Request, Response } from "express";
import Hospede from "../../models/hospede";

const editarHospede = async (req: Request, res: Response) => {

    const {
        id, nome,
        sobrenome,
        dataNasc,
        tipoDocumento,
        documento 
    } = await req.body;




    if (nome && sobrenome && dataNasc && documento && tipoDocumento) {

        await Hospede.findOneAndUpdate({id: id }, {$set: {
            nome,
            sobrenome,
            dataNasc,
            tipoDocumento,
            documento
        }}, {new: true}).then(() => {
            req.flash('sucesso_msg', 'Hospede editado com sucesso!')
            res.redirect('/hospedes')
        }).catch(err => {
            req.flash('erro_msg', 'Erro ao editar hospede!')
            res.redirect('/hospedes')
        })

    } else {
        req.flash('erro_msg', 'Erro ao capturar campos!')
        res.redirect('/hospedes')

    }


}

export default editarHospede