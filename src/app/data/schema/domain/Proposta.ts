import { Base } from "./domain_base";

export class Proposta implements Base {
    Identificador:number;
    Nome :string;
    Introducao :string;
    Descricao :string;
    Data :string;
    IdentificadorCandidato:number;
    Categoria:string;
    FotoSrc:string;
    Ativo:boolean;
    Likes:number;
	constructor($Identificador: number,  $Nome :string, $Introducao :string, $Descricao : string, $IdentificadorCandidato: number, $Categoria:string, $FotoSrc:string, $Ativo: boolean, $Likes:number) {
		this.Identificador = $Identificador;
		this.Nome = $Nome;
		this.Descricao  = $Descricao;
		this.Introducao  = $Introducao;
        this.IdentificadorCandidato = $IdentificadorCandidato;
        this.Categoria = $Categoria;
		this.FotoSrc = $FotoSrc;
		this.Ativo = $Ativo;
		this.Likes = $Likes;
	}
    
}