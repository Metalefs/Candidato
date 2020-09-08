import { Base } from "./domain_base";

export class Pensamento implements Base {
    Identificador:number;
    Titulo:string;
    Descricao:string;
    Ativo:boolean;
    IdCandidato:number;

	constructor($Identificador: number, $Titulo: string, $Descricao: string, $Ativo: boolean, $IdCandidato: number) {
		this.Identificador = $Identificador;
		this.Titulo = $Titulo;
		this.Descricao = $Descricao;
		this.Ativo = $Ativo;
		this.IdCandidato = $IdCandidato;
	}
    
}