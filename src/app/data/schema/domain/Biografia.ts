import { Base } from "./domain_base";

export class Biografia implements Base {
    Identificador:number;
    Descricao :string;
    IdentificadorCandidato:string;
    Ativo:boolean;

	constructor($Identificador: number, $Descricao : string, $IdentificadorCandidato: number, $Ativo: boolean) {
		this.Identificador = $Identificador;
		this.Descricao  = $Descricao;
		this.Ativo = $Ativo;
	}
    
}