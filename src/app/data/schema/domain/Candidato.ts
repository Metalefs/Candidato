import { Base } from "./domain_base";

export class Candidato implements Base {
    Identificador:number;
	nome:string;
	biografia:string;
	pensamento:string;
	realizacao:string;
	DataNascimento:string;
	Email:string;
	telefone:string;
    numeroCampanha:string;
    Ativo:boolean;
	FotoCapa:string;
	FotoPerfil:string;
	constructor($Identificador: number, $nome: string,
		$biografia:string,
		$pensamento:string,
		$realizacao:string,
		$DataNascimento: string, $Email: string,
		$telefone: string, $Twitter: string, 
		$Facebook: string, $Instagram: string, 
		$Youtube: string, $LinkedIn: string, 
		$numeroCampanha: string, $FotoCapa:string, 
		$FotoPerfil:string, $Ativo: boolean
	) {
		this.Identificador = $Identificador;
		this.nome = $nome;
		this.DataNascimento = $DataNascimento;
		this.biografia = $biografia;
		this.pensamento = $pensamento;
		this.realizacao = $realizacao;
		this.Email = $Email;
		this.telefone = $telefone;
		this.numeroCampanha = $numeroCampanha;
		this.FotoCapa = $FotoCapa;
		this.FotoPerfil = $FotoPerfil;
		this.Ativo = $Ativo;
	}
    
}