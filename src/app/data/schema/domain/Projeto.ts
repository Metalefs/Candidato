import { Base } from "./domain_base";

export class Projeto implements Base {
    Identificador:number;
    Descricao :string;
    IdentificadorCandidato:string;
    Categoria:string;
    Ativo:boolean;

	constructor($Identificador: number, $Descricao : string, $IdentificadorCandidato: number, $Categoria:string, $Ativo: boolean) {
		this.Identificador = $Identificador;
		this.Descricao  = $Descricao;
		this.Categoria = $Categoria;
		this.Ativo = $Ativo;
	}
    
}