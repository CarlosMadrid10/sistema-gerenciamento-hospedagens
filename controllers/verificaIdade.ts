

const verificaIdade = (dataNasc: string): number => {

    const dataAniversario = new Date(dataNasc);


    const hoje = new Date();


    const diferencaEmMilissegundos = Number(hoje) - Number(dataAniversario);


    const diferencaEmAnos = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24 * 365.25));

    return diferencaEmAnos;


}

export default verificaIdade;

