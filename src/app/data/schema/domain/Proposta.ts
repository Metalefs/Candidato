import { Base } from "./domain_base";

export class Proposta implements Base {
    Idenficador:number;
    Titulo:string;
    Descricao:string;
    Ativo:boolean;

	constructor($Idenficador: number, $Titulo: string, $Descricao: string, $Ativo: boolean) {
		this.Idenficador = $Idenficador;
		this.Titulo = $Titulo;
		this.Descricao = $Descricao;
		this.Ativo = $Ativo;
	}
    
}