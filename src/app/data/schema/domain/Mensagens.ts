import { Base } from "./domain_base";

export class Mensagens implements Base {
    identificador:number;
    FraseDestaque:string;
    DescricaoCurta:string;
    Descricao:string;
    Sobre:string;
    ChamadaParaContato:string;
    ExperienciaDeTrabalho:string;
    ApresentacaoProjetos:string;
    constructor(
        identificador:number,
        FraseDestaque:string,
        DescricaoCurta:string,
        Descricao:string,
        Sobre:string,
        ChamadaParaContato:string,
        ExperienciaDeTrabalho:string,
        ApresentacaoProjetos:string
    ){
        this.identificador = identificador;
        this.FraseDestaque = FraseDestaque;
        this.DescricaoCurta = DescricaoCurta;
        this.Descricao = Descricao;
        this.Sobre = Sobre;
        this.ChamadaParaContato = ChamadaParaContato;
        this.ExperienciaDeTrabalho = ExperienciaDeTrabalho;
        this.ApresentacaoProjetos = ApresentacaoProjetos;
    }
}