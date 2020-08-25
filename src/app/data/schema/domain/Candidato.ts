import { Base } from "./domain_base";

export class Candidato implements Base {
    Identificador:number;
	Nome:string;
	DataNascimento:string;
	Email:string;
	Telefone:string;
	Twitter:string;
	Facebook:string;
	Instagram:string;
	Youtube:string;
	LinkedIn:string;
    NumeroCampanha:string;
    Ativo:boolean;
	Foto:string;
	constructor($Identificador: number, $Nome: string, $DataNascimento: string, $Email: string, $Telefone: string, $Twitter: string, $Facebook: string, $Instagram: string, $Youtube: string, $LinkedIn: string, $NumeroCampanha: string, $Foto:string, $Ativo: boolean) {
		this.Identificador = $Identificador;
		this.Nome = $Nome;
		this.DataNascimento = $DataNascimento;
		this.Email = $Email;
		this.Telefone = $Telefone;
		this.Twitter = $Twitter;
		this.Facebook = $Facebook;
		this.Instagram = $Instagram;
		this.Youtube = $Youtube;
		this.LinkedIn = $LinkedIn;
		this.NumeroCampanha = $NumeroCampanha;
		this.Foto = $Foto;
		this.Ativo = $Ativo;
	}
    
}