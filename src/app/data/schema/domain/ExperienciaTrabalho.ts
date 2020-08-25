export class ExperienciaTrabalho{
    Local:string;
    Cargo:string;
    Inicio:string;
    Fim:string;
    Descricao:string;
    constructor(
        Local:string,
        Cargo:string,
        Inicio:string,
        Fim:string,
        Descricao:string
    ){
        this.Local = Local;
        this.Cargo = Cargo;
        this.Inicio = Inicio;
        this.Fim = Fim;
        this.Descricao = Descricao;
    }
}