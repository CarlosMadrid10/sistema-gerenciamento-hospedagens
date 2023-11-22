import mongoose, {Document, Schema, model} from 'mongoose';


interface IAcomodacao extends Document {
   titulo: String;
   numero: Number;
   andar: Number;
   bloco: String;
   descricao: String;
   disponibilidade: String;
   categoria: String;
   ocupante: String

}


const AcomodacaoSchema = new Schema<IAcomodacao>({
    titulo: {type: String, required: true},
    numero: {type: Number, required: true},
    andar: {type: Number, required: true},
    bloco: {type: String, default: "Não possui."},
    descricao: {type: String, default: "Não possui."},
    disponibilidade: {type: String, required: true},
    categoria: {type: mongoose.Schema.Types.ObjectId, ref: 'categoria'},
    ocupante: {type: mongoose.Schema.Types.ObjectId, ref: 'hospede'}
});




const Acomodacao = model<IAcomodacao>('acomodacao', AcomodacaoSchema);


export default Acomodacao;