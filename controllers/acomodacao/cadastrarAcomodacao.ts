import { Request, Response } from "express";
import Acomodacao from "../../models/acomodacao";

const cadastrarAcomodacao = async (req: Request, res: Response) => {

    const {
        titulo,
        numero,
        andar,
        bloco,
        descricao,
        disponibilidade,
        categoria,
        ocupante
    } = await req.body;

    if (titulo && numero && andar && disponibilidade) {
        const movaAcomodacao = new Acomodacao({
            titulo,
            numero,
            andar,
            bloco,
            descricao,
            disponibilidade,
            categoria,
            ocupante
        })

        await movaAcomodacao.save()

        req.flash('sucesso_msg', 'Acomodação registrada com sucesso!')
        res.redirect('/acomodacoes')
    } else {
        req.flash('erro_msg', 'Erro ao capturar campo de acomodação.')
        res.redirect('/acomodacao/cadastro')
    }

}

export default cadastrarAcomodacao;