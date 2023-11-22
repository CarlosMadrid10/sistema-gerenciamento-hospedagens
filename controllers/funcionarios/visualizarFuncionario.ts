import Funcionario from "../../models/funcionario";
import { Request, Response } from "express";

const visualizarFuncionario = async (req: Request, res: Response) => {

    const matricula = req.body.matricula

    await Funcionario.findOne({matricula: matricula}).then((funcionario) => {
        res.render('funcionario', {layout: 'layouts/index', funcionario: funcionario})
    }).catch(err => {
        req.flash('erro_msg', 'Erro ao visualizar funcionario!');
        res.redirect('/funcionarios')
    })
}

export default visualizarFuncionario;