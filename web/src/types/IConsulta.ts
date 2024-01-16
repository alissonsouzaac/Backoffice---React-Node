import IProfissional from "./IProfissional";

export default interface IConsulta extends IProfissional {
    data: string,
    horario: string,
    profissional: Array<IProfissional>,
    especialidade: string,
    paciente: string,
    modalidade: string
}