import { Base } from "./domain_base";

export class Projeto implements Base {
    Identificador:number;
    Nome :string;
    Descricao :string;
    Data :string;
    IdentificadorCandidato:string;
    Categoria:string;
    FotoSrc:string;
    Ativo:boolean;

	constructor($Identificador: number,  $Nome :string, $Descricao : string, $IdentificadorCandidato: number, $Categoria:string, $FotoSrc:string, $Ativo: boolean) {
		this.Identificador = $Identificador;
		this.Nome = $Nome;
		this.Descricao  = $Descricao;
		this.Categoria = $Categoria;
		this.FotoSrc = $FotoSrc;
		this.Ativo = $Ativo;
	}
    
}