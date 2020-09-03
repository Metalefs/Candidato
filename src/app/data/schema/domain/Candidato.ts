import { Base } from "./domain_base";

export class Candidato implements Base {
    Identificador:number;
	Nome:string;
	QuemSou:string;
	OquePenso:string;
	OqueFiz:string;
	DataNascimento:string;
	Email:string;
	Telefone:string;
    NumeroCampanha:string;
    Ativo:boolean;
	FotoCapa:string;
	FotoPerfil:string;
	constructor($Identificador: number, $Nome: string,
		$QuemSou:string,
		$OquePenso:string,
		$OqueFiz:string,
		$DataNascimento: string, $Email: string,
		$Telefone: string, $Twitter: string, 
		$Facebook: string, $Instagram: string, 
		$Youtube: string, $LinkedIn: string, 
		$NumeroCampanha: string, $FotoCapa:string, 
		$FotoPerfil:string, $Ativo: boolean
	) {
		this.Identificador = $Identificador;
		this.Nome = $Nome;
		this.DataNascimento = $DataNascimento;
		this.QuemSou = $QuemSou;
		this.OquePenso = $OquePenso;
		this.OqueFiz = $OqueFiz;
		this.Email = $Email;
		this.Telefone = $Telefone;
		this.NumeroCampanha = $NumeroCampanha;
		this.FotoCapa = $FotoCapa;
		this.FotoPerfil = $FotoPerfil;
		this.Ativo = $Ativo;
	}
    
}