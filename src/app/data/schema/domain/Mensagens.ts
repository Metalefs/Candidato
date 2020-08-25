export class Mensagens{
    FraseDestaque:string;
    DescricaoCurta:string;
    Descricao:string;
    Sobre:string;
    ChamadaParaContato:string;
    ExperienciaDeTrabalho:string;
    ApresentacaoProjetos:string;
    constructor(
        FraseDestaque:string,
        DescricaoCurta:string,
        Descricao:string,
        Sobre:string,
        ChamadaParaContato:string,
        ExperienciaDeTrabalho:string,
        ApresentacaoProjetos:string
    ){
        this.FraseDestaque = FraseDestaque;
        this.DescricaoCurta = DescricaoCurta;
        this.Descricao = Descricao;
        this.Sobre = Sobre;
        this.ChamadaParaContato = ChamadaParaContato;
        this.ExperienciaDeTrabalho = ExperienciaDeTrabalho;
        this.ApresentacaoProjetos = ApresentacaoProjetos;
    }
}