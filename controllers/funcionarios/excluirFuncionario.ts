import { Request, Response } from "express";
import Funcionario from "../../models/funcionario";


const excluirFuncionario = async (req: Request, res: Response) => {
    const matricula = req.body.matricula

    await Funcionario.findOne({matricula:matricula}).then( async (funcionario) => {
        if(Object(funcionario).master == "Não"){
            await Funcionario.deleteOne({ matricula: matricula }).then(() => {
                req.flash('sucesso_msg', 'Funcionario excluído com sucesso!');
                return res.redirect('/funcionarios')
            }).catch((err) => {
                req.flash('erro_msg', 'Erro ao excluir funcionario!');
                return res.redirect('/funcionarios')
            })
        }
        else{

            await Funcionario.countDocuments({master: "Sim"}).then( async count => {
                
                if (count > 1){
                    await Funcionario.deleteOne({ matricula: matricula }).then(() => {
                        req.flash('sucesso_msg', 'Funcionario excluído com sucesso!');
                        return res.redirect('/funcionarios')
                    }).catch((err) => {
                        req.flash('erro_msg', 'Erro ao excluir funcionario!');
                        return res.redirect('/funcionarios')
                    }) 
                }else{
                    req.flash('erro_msg', 'Não se pode excluir o único usuario Master!');
                    return res.redirect('/funcionarios')
                }
            }).catch(err => {
                req.flash('erro_msg', 'Erro ao contar funcionarios!');
                return res.redirect('/funcionarios')
            })


        }

    }).catch(err => {
        req.flash('erro_msg', 'Erro ao encontrar funcionario!');
        return res.redirect('/funcionarios')
    })

}


export default excluirFuncionario;