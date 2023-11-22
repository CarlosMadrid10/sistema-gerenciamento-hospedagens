import {Document, Schema, model} from 'mongoose';


interface ICategoria extends Document {
    categoria: String;
    descricao: String;

}


const CategoriaSchema = new Schema<ICategoria>({
    categoria: {type: String, required: true},
    descricao: {type: String, default: "Não possui."}

});




const Categoria = model<ICategoria>('categoria', CategoriaSchema);


export default Categoria;

