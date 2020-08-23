import { Base } from "./domain_base";

export class Biografia implements Base {
    Idenficador:number;
    Descricao :string;
    IdentificadorCandidato:string;
    Ativo:boolean;

	constructor($Idenficador: number, $Descricao : string, $IdentificadorCandidato: number, $Ativo: boolean) {
		this.Idenficador = $Idenficador;
		this.Descricao  = $Descricao;
		this.Ativo = $Ativo;
	}
    
}