import { Base } from "./domain_base";

export class Realizacao implements Base {
    identificador:number;
    Local:string;
    Cargo:string;
    Inicio:string;
    Fim:string;
    Descricao:string;
    constructor(
        identificador:number,
        Local:string,
        Cargo:string,
        Inicio:string,
        Fim:string,
        Descricao:string
    ){
        this.identificador = identificador;
        this.Local = Local;
        this.Cargo = Cargo;
        this.Inicio = Inicio;
        this.Fim = Fim;
        this.Descricao = Descricao;
    }
}