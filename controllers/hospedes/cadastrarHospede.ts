import { Request, Response } from "express";
import Hospede from "../../models/hospede";

const cadastrarHospede = async (req: Request, res: Response) => {

    const {
        nome,
        sobrenome,
        dataNasc,
        tipoDocumento,
        documento
    } = await req.body;

    if (nome && sobrenome && dataNasc && documento && tipoDocumento) {
        const novoHospede = new Hospede({
            nome,
            sobrenome,
            dataNasc,
            tipoDocumento,
            documento
        })

        await novoHospede.save()

        req.flash('sucesso_msg', 'Hospede registrado com sucesso!')
        res.redirect('/hospedes')
    } else {
        req.flash('erro_msg', 'Todos os campos devem ser preenchidos.')
        res.redirect('/hospede/cadastro')
    }

}

export default cadastrarHospede;