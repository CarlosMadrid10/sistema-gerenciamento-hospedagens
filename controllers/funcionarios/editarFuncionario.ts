import { Request, Response } from "express";
import Funcionario from "../../models/funcionario";

const editarFuncionario = async (req: Request, res: Response) => {
    const {matricula, nome, sobrenome, usuario, dataNasc, funcao} = req.body

    if(matricula && nome && sobrenome && usuario && dataNasc && funcao){
        await Funcionario.findOneAndUpdate({matricula: matricula}, {$set: {
            nome: nome,
            sobrenome: sobrenome,
            usuario: usuario,
            dataNasc: dataNasc,
            funcao: funcao,
            matricula: matricula
        }}, {new: true}).then(() => {
            req.flash('sucesso_msg', 'Sucesso ao atualizar funcionario!');
            res.redirect('/funcionarios')
        }).catch(err => {
            req.flash('erro_msg', 'Erro ao atualizar funcionario!');
            res.redirect('/funcionarios')
        })
    }else{
        req.flash('erro_msg', 'Erro ao capturar campos!');
        res.redirect('/funcionarios')
    }


};

export default editarFuncionario;