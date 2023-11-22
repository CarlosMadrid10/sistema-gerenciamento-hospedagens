import { Request, Response } from "express";
import Acomodacao from "../../models/acomodacao";

const ocuparAcomodacao = async (req: Request, res: Response) => {

    const {idAcomodacao, id} = req.body;
    const disponibilidade = 'Indisponível'; // Altere conforme necessário
    const acomodado = id;
  
    await Acomodacao.findOneAndUpdate({ id: idAcomodacao }, { $set: { disponibilidade, acomodado} }, { new: true })
      .then(() => {
        req.flash('sucesso_msg', 'Acomodação reservada com sucesso!');
        res.redirect('/acomodacoes');
      })
      .catch((err) => {
        req.flash('erro_msg', 'Erro ao reservar acomodação!');
        res.redirect('/acomodacoes');
      });


}

export default ocuparAcomodacao