import mongoose, {Document, Schema, model} from 'mongoose';


interface IHospede extends Document {
    nome: String;
    sobrenome: String;
    dataNasc: String;
    documento: String;
    tipoDocumento: String;
    acomodacao: String;
}


const HospedeSchema = new Schema<IHospede>({
    nome: {type: String, required: true},
    sobrenome: {type: String, required: true},
    dataNasc: {type: String, required: true},
    documento: {type: String, required: true},
    tipoDocumento: {type: String, required: true},
    acomodacao: {type: mongoose.Schema.Types.ObjectId, ref: 'acomodacao'}
});


const Hospede = model<IHospede>('hospede', HospedeSchema);


export default Hospede;

