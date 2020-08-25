import { Base } from "./domain_base";

export class Mensagens implements Base {
    Identificador:number;
    FraseDestaque:string;
    DescricaoCurta:string;
    Descricao:string;
    Sobre:string;
    ChamadaParaContato:string;
    ExperienciaDeTrabalho:string;
    ApresentacaoProjetos:string;
    constructor(
        Identificador:number,
        FraseDestaque:string,
        DescricaoCurta:string,
        Descricao:string,
        Sobre:string,
        ChamadaParaContato:string,
        ExperienciaDeTrabalho:string,
        ApresentacaoProjetos:string
    ){
        this.Identificador = Identificador;
        this.FraseDestaque = FraseDestaque;
        this.DescricaoCurta = DescricaoCurta;
        this.Descricao = Descricao;
        this.Sobre = Sobre;
        this.ChamadaParaContato = ChamadaParaContato;
        this.ExperienciaDeTrabalho = ExperienciaDeTrabalho;
        this.ApresentacaoProjetos = ApresentacaoProjetos;
    }
}