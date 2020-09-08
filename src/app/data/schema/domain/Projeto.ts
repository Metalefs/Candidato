import { Base } from "./domain_base";

export class Projeto implements Base {
    identificador:number;
    Nome :string;
    Introducao :string;
    Descricao :string;
    Data :string;
    identificadorCandidato:number;
    Categoria:string;
    FotoSrc:string;
    Ativo:boolean;
    Likes:number;
	constructor($identificador: number,  $Nome :string, $Introducao :string, $Descricao : string, $identificadorCandidato: number, $Categoria:string, $FotoSrc:string, $Ativo: boolean, $Likes:number) {
		this.identificador = $identificador;
		this.Nome = $Nome;
		this.Descricao  = $Descricao;
		this.Introducao  = $Introducao;
        this.identificadorCandidato = $identificadorCandidato;
        this.Categoria = $Categoria;
		this.FotoSrc = $FotoSrc;
		this.Ativo = $Ativo;
		this.Likes = $Likes;
	}
    
}