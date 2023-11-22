import Funcionario from "../../models/funcionario";
import { Request, Response } from "express";

const listarFuncionarios = async (req: Request, res: Response) => {
        await Funcionario.find().then((funcionarios: any) => {
            res.render('adm/funcionarios', { layout: 'layouts/index', titulo: 'Funcionários', funcionarios: funcionarios })
        }).catch((error: any) => {
            req.flash('erro_msg', 'Erro ao encontrar funcionarios.')
            res.redirect('/')
        })
    
}


export default listarFuncionarios