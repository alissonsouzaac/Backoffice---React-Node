import IEndereco from "./IEndereco";

export default interface IProfissional {
    nome: string,
    crm: string,
    imagem: string,
    especialidade: string,
    possuiPlanoSaude: boolean,
    senha: string,
    planoSaude: string[],
    estaAtivo: boolean,
    email: string,
    teleforene: string,
    endereco: IEndereco
}