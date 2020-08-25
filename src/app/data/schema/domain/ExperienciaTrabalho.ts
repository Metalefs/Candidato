import { Base } from "./domain_base";

export class ExperienciaTrabalho implements Base {
    Identificador:number;
    Local:string;
    Cargo:string;
    Inicio:string;
    Fim:string;
    Descricao:string;
    constructor(
        Identificador:number,
        Local:string,
        Cargo:string,
        Inicio:string,
        Fim:string,
        Descricao:string
    ){
        this.Identificador = Identificador;
        this.Local = Local;
        this.Cargo = Cargo;
        this.Inicio = Inicio;
        this.Fim = Fim;
        this.Descricao = Descricao;
    }
}