export class AppState {
    Funcional:boolean;
    Mensagem:string;
    constructor(
        Funcional: boolean,
        Mensagem:string
    ){
        this.Funcional = Funcional;
        this.Mensagem = Mensagem;
    }
}