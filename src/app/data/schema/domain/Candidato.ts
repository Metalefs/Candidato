import { Base } from "./domain_base";

export class Candidato implements Base {
    identificador:number;
	nome:string;
	biografia:string;
	pensamento:string;
	realizacao:string;
	DataNascimento:string;
	Email:string;
	telefone:string;
	numeroCampanha:string;
	youtube: string;
	instagram: string;
	twitter: string;
	facebook: string
    Ativo:boolean;
	FotoCapa:string;
	FotoPerfil:string;
	constructor($identificador: number,
		$nome: string,
		$biografia:string,
		$pensamento:string,
		$realizacao:string,
		$DataNascimento: string, $Email: string,
		$telefone: string,
		$youtube: string,
		$instagram: string, 
		$twitter: string, 
		$facebook: string,
		$LinkedIn: string, 
		$numeroCampanha: string, $FotoCapa:string, 
		$FotoPerfil:string, $Ativo: boolean
	) {
		this.identificador = $identificador;
		this.nome = $nome;
		this.DataNascimento = $DataNascimento;
		this.biografia = $biografia;
		this.pensamento = $pensamento;
		this.realizacao = $realizacao;
		this.Email = $Email;
		this.telefone = $telefone;
		this.numeroCampanha = $numeroCampanha;
		this.youtube = $youtube;
		this.instagram = $instagram;
		this.twitter = $twitter;
		this.facebook = $facebook;
		this.FotoCapa = $FotoCapa;
		this.FotoPerfil = $FotoPerfil;
		this.Ativo = $Ativo;
	}
    
}