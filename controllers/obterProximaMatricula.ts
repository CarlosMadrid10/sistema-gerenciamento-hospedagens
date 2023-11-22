import Funcionario from "../models/funcionario";

async function obterProximaMatricula(){
    const ultimoDocumento = await Funcionario.findOne().sort({ matricula: -1 });
    if (ultimoDocumento) {
      return Number(ultimoDocumento.matricula) + 1;
    } else {
      return 1; 
    }
  }
  

  export default obterProximaMatricula;