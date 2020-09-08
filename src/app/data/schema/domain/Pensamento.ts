import { Base } from "./domain_base";

export class Pensamento implements Base {
    identificador:number;
    Titulo:string;
    Descricao:string;
    Ativo:boolean;
    IdCandidato:number;

	constructor($identificador: number, $Titulo: string, $Descricao: string, $Ativo: boolean, $IdCandidato: number) {
		this.identificador = $identificador;
		this.Titulo = $Titulo;
		this.Descricao = $Descricao;
		this.Ativo = $Ativo;
		this.IdCandidato = $IdCandidato;
	}
    
}