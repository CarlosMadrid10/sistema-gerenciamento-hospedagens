import {Document, Schema, model} from 'mongoose';


interface IFuncionario extends Document {
    nome: String;
    sobrenome: String;
    usuario: String;
    dataNasc: String;
    matricula: String;
    senha: String;
    funcao: String;
    master: String;
}


const FuncionarioSchema = new Schema<IFuncionario>({
    nome: {type: String, required: true},
    sobrenome: {type: String, required: true},
    usuario: {type: String, required: true},
    dataNasc: {type: String, required: true},
    matricula: {type: String, unique:true, required: true},
    senha: {type: String, required: true},
    funcao: {type: String, required: true},
    master: {type: String, required: true, default: "Não"},

});


const Funcionario = model<IFuncionario>('funcionario', FuncionarioSchema);


export default Funcionario;

