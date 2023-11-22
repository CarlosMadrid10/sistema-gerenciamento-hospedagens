import {Document, Schema, model} from 'mongoose';


interface ILocal extends Document {
    nome: String;
    endereco: String;
    complemento: String;
    cidade: String;
    estado: String;
    pais: String;
    cep: String;
}


const LocalSchema = new Schema<ILocal>({
    nome: {type: String, required: true},
    endereco: {type: String, required: true},
    complemento: {type: String, default: "Não possui."},
    cidade: {type: String, required: true},
    estado: {type: String, required: true},
    pais: {type: String, required: true},
    cep: {type: String, required: true}

});


const Local = model<ILocal>('local', LocalSchema);


export default Local;

