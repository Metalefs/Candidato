import { Base } from "./domain_base";

export class Proposta implements Base {
    Identificador:number;
    Titulo:string;
    Descricao:string;
    Ativo:boolean;

	constructor($Identificador: number, $Titulo: string, $Descricao: string, $Ativo: boolean) {
		this.Identificador = $Identificador;
		this.Titulo = $Titulo;
		this.Descricao = $Descricao;
		this.Ativo = $Ativo;
	}
    
}