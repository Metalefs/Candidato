import { Base } from "./domain_base";

export class Proposta implements Base {
    identificador:number;
    titulo :string;
    Introducao :string;
    descricao :string;
    Data :string;
    identificadorCandidato:number;
    Categoria:string;
    FotoSrc:string;
    Ativo:boolean;
    qtdCurtidas:number;
	constructor($identificador: number,  $titulo :string, $Introducao :string, $descricao : string, $identificadorCandidato: number, $Categoria:string, $FotoSrc:string, $Ativo: boolean, $qtdCurtidas:number) {
		this.identificador = $identificador;
		this.titulo = $titulo;
		this.descricao  = $descricao;
		this.Introducao  = $Introducao;
        this.identificadorCandidato = $identificadorCandidato;
        this.Categoria = $Categoria;
		this.FotoSrc = $FotoSrc;
		this.Ativo = $Ativo;
		this.qtdCurtidas = $qtdCurtidas;
	}
    
}