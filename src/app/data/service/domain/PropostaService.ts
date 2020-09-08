import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { routes } from 'src/app/data/schema/routes';
import { retry, catchError } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/service/authentication/authentication.service';
import { StateService } from 'src/app/core/service/state/state.service';
import { ServicoBase } from 'src/app/data/service/domain/ServicoBase';
import { Proposta } from 'src/app/data/schema/domain/Proposta';

@Injectable({
    providedIn: 'root'
})

export class PropostaService extends ServicoBase {
    constructor(protected http: HttpClient, protected AuthenticationService: AuthenticationService, protected StateService: StateService) {
		super(http,StateService);
	}
    
    ProjetosTeste : Proposta[] = [
        new Proposta(
            1,
            "Seguro Anticorrupção.",
            "25 Ideias para mudar Matozinhos",
            "Matozinhos não merece que obras sejam executadas com atrasos de meses ou anos, e ainda o poder público fique arcando com aditivos e mais aditivos, o dinheiro público deve ser respeitado, por isso estarei trazendo o Seguro anticorrupção para Matozinhos.",
            1,
            "Saúde",
            "assets/imagens/icones/ConectaCandidato_fundoTransparente.png",
            true,
            20
        ),
        new Proposta(
            2,
            "Incentivar O Uso De Espaços Públicos Pelas Empresas Privadas",
            "25 Ideias para mudar Matozinhos",
            "Meu compromisso é buscar soluções entre poder público e privado para renovar nossos espaços públicos e promover a realização de mais eventos na cidade.",
            1,
            "Bem estar",
            "assets/imagens/icones/ConectaCandidato_fundoTransparente.png",
            true,
            20
        ),
        new Proposta(
            3,
            "IPTU Verde",
            "25 Ideias para mudar Matozinhos",
            "Apresentar um projeto de lei que ofereça descontos de até 10% no Imposto Predial Territorial Urbano para os proprietários que adotarem medidas de proteção, preservação e recuperação do meio ambiente",
            1,
            "Segurança",
            "assets/imagens/icones/ConectaCandidato_fundoTransparente.png",
            true,
            20
        ),
        new Proposta(
            4,
            "Uso Do App Q-Zela",
            "25 Ideias para mudar Matozinhos",
            "Assumirei o compromisso de incentivar o uso do aplicativo Q-zela, onde o cidadão que muitas vezes não pode se dirigir presencialmente ao gabinete, poderá fazer solicitação de melhorias no seu bairro através do aplicativo.",
            1,
            "Saúde",
            "assets/imagens/icones/ConectaCandidato_fundoTransparente.png",
            true,
            20
        ),
        new Proposta(
            5,
            "Apoio Dos Moradores De Rua",
            "25 Ideias para mudar Matozinhos",
            "A falta de abrigos e o número insuficientes de equipes de abordagem e orientação só agravam o problema. Entretanto ONG’s e igrejas já fazem um trabalho voluntário muitas vezes sem o apoio púbico. Nosso compromisso é incentivar, fiscalizar a atuação do município e apoiar as diversas organizações garantindo condições mais dignas para estas pessoas.",
            1,
            "Saúde",
            "assets/imagens/icones/ConectaCandidato_fundoTransparente.png",
            true,
            20
        ),
        new Proposta(
            6,
            "Apoio Aos App De Transporte",
            "25 Ideias para mudar Matozinhos",
            "Assumirei o compromisso de lutar contra qualquer tipo de taxação e burocracia que o a cidade tentar impor sobre os aplicativos de transporte, porque no final das contas quando vem uma taxação quem paga é o consumidor.",
            1,
            "Saúde",
            "assets/imagens/icones/ConectaCandidato_fundoTransparente.png",
            true,
            20
        ),
        new Proposta(
            7,
            "Matozinhos Amiga Dos Bichos",
            "25 Ideias para mudar Matozinhos",
            "Expandir a cultura de proteção dos animais, incentivando também a adoção consciente, e lutar para a continuação e melhoria dos programas de castração de cães e gatos.",
            1,
            "Saúde",
            "assets/imagens/icones/ConectaCandidato_fundoTransparente.png",
            true,
            20
        ),
        new Proposta(
            8,
            "Mais Saúde Matozinhos",
            "25 Ideias para mudar Matozinhos",
            "Atuar para informar a população sobre os devidos locais para atendimento em saúde através de campanhas e ferramentas digitais, garantindo a eficiência na utilização do sistema público. E através de fiscalizações, garantir as condições de trabalho dos profissionais de saúde.",
            1,
            "Saúde",
            "assets/imagens/icones/ConectaCandidato_fundoTransparente.png",
            true,
            20
        ),
        new Proposta(
            9,
            "Melhorando As Nossas Casas De Saúde Mental",
            "25 Ideias para mudar Matozinhos",
            "Propor e fiscalizar melhorias estruturais nos órgãos de atendimento à Saúde Mental como o CAPS. Propor o uso de espaços coletivos e o compartilhar de saberes entre profissional e paciente, descobrindo caminhos.",
            1,
            "Saúde",
            "assets/imagens/icones/ConectaCandidato_fundoTransparente.png",
            true,
            20
        ),
        new Proposta(
            10,
            "Vamos Correr?",
            "25 Ideias para mudar Matozinhos",
            "Proporcionar aos estudantes a inserção ao esporte profissionalizante através de parcerias com empresas privadas, clubes e academias da cidade.",
            1,
            "Saúde",
            "assets/imagens/icones/ConectaCandidato_fundoTransparente.png",
            true,
            20
        ),
        new Proposta(
            11,
            "Direito A Creche",
            "25 Ideias para mudar Matozinhos",
            "Irei trabalhar para que o artigo 208 da Constituição Federal que garante o direito a creche para crianças de 0 a 5 anos venha a ser cumprido em nossa cidade, a educação é um direito de todos.",
            1,
            "Saúde",
            "assets/imagens/icones/ConectaCandidato_fundoTransparente.png",
            true,
            20
        ),
        new Proposta(
            12,
            "Educação Integral",
            "25 Ideias para mudar Matozinhos",
            "Defender a busca de parcerias com o governo estadual e federal, através de programas já instituídos e de verba parlamentar para implementação do horário integral no ensino municipal. É comprovado cientificamente que a infância é um dos momentos mais importantes na formação, ter acesso a uma escola com boa infraestrutura, com acesso a atividades extracurriculares seria de grande impacto na vida das crianças, além de que ficariam nas escolas por mais tempo possibilitando aos parentes trabalharem tranquilamente.",
            1,
            "Saúde",
            "assets/imagens/icones/ConectaCandidato_fundoTransparente.png",
            true,
            20
        ),
        new Proposta(
            13,
            "Liberdade Econômica",
            "25 Ideias para mudar Matozinhos",
            "Não dá para aceitar que o empresário em Matozinhos leve meses para conseguir abrir a sua empresa ou negócio, Matozinhos precisa de liberdade, por isso apresentarei o Proposta de liberdade econômica, menos burocracia e mais liberdade.",
            1,
            "Saúde",
            "assets/imagens/icones/ConectaCandidato_fundoTransparente.png",
            true,
            20
        ),
        new Proposta(
            14,
            "Redução De Gastos",
            "25 Ideias para mudar Matozinhos",
            "Assumirei o compromisso de reduzir gastos em meu gabinete, redução de todo e qualquer privilegio, não usarei diárias.",
            1,
            "Saúde",
            "assets/imagens/icones/ConectaCandidato_fundoTransparente.png",
            true,
            20
        ),
        new Proposta(
            15,
            "Sai Pra Lá Inutilidade",
            "25 Ideias para mudar Matozinhos",
            "Em Matozinhos existem um monte de leis inúteis que só geram burocracia, vou trabalhar para que leis inúteis sejam revogadas.",
            1,
            "Saúde",
            "assets/imagens/icones/ConectaCandidato_fundoTransparente.png",
            true,
            20
        ),
        new Proposta(
            16,
            "Orçamento Participativo",
            "25 Ideias para mudar Matozinhos",
            "Defender um modo democrático nas discussões do Orçamento Participativo, regionalizando e melhorando a divulgação e participação das pessoas de modo deliberativo.",
            1,
            "Saúde",
            "assets/imagens/icones/ConectaCandidato_fundoTransparente.png",
            true,
            20
        ),
        new Proposta(
            17,
            "Dinheiro Público Precisa Ser Respeitado",
            "25 Ideias para mudar Matozinhos",
            "Combater de forma irrestrita o uso indevido do dinheiro público abrindo, se necessário, CPIs que busquem a fundo por respostas e soluções.",
            1,
            "Saúde",
            "assets/imagens/icones/ConectaCandidato_fundoTransparente.png",
            true,
            20
        ),
        new Proposta(
            18,
            "Matozinhos Mais Segura",
            "25 Ideias para mudar Matozinhos",
            "Dar suporte a futura Guarda Municipal e Polícia Militar. Além de, fiscalizar incansavelmente os órgãos responsáveis pelos problemas da má iluminação nas ruas, praças e, principalmente, em locais com alto índice de violência. Promover a instalação de câmeras de vigilância nos bairros.",
            1,
            "Saúde",
            "assets/imagens/icones/ConectaCandidato_fundoTransparente.png",
            true,
            20
        ),
        new Proposta(
            19,
            "Quanto Custa?",
            "25 Ideias para mudar Matozinhos",
            "O ambiente regulatório do Brasil é altamente hostil para o empreendedor por conta da burocracia. Por isso vou propor um projeto de lei que obriga as novas leis virem acompanhadas de estimativa do custo aos cidadãos para serem seguidas. Mais responsabilidade no debate legislativo e mais liberdade para o cidadão.",
            1,
            "Saúde",
            "assets/imagens/icones/ConectaCandidato_fundoTransparente.png",
            true,
            20
        ),
        new Proposta(
            20,
            "Plano Diretor",
            "25 Ideias para mudar Matozinhos",
            "Em 2021 o plano diretor completara 20 anos de sua regulamentação federal, a lei diz que o plano deve ser revisado a cada 10 anos, há aí uma grande oportunidade para se discutir melhorias na urbanização da cidade, melhora na locomoção de pedestres, regras para o desenvolvimento de uma cidade mais bela e organizada.",
            1,
            "Saúde",
            "assets/imagens/icones/ConectaCandidato_fundoTransparente.png",
            true,
            20
        ),
        new Proposta(
            21,
            "Fiscalização Das Normas Ambientais Para Garantir Sua Aplicabilidade.",
            "25 Ideias para mudar Matozinhos",
            "Fiscalizar in loco se a legislação ambiental está sendo cumprida, garantir que as empresas do município respeitem as normas e leis ambientais de maneira a garantir a qualidade de vida dos moradores. Cobrar do executivo a melhora do saneamento básico no município, seja através das empresas estatais responsáveis, ou de novas licitações conforme a aprovação do novo Marco do Saneamento Básico.",
            1,
            "Saúde",
            "assets/imagens/icones/ConectaCandidato_fundoTransparente.png",
            true,
            20
        ),
        new Proposta(
            22,
            "Defender A Implementação De Critérios De Produtividade No Serviço Público Municipal.",
            "25 Ideias para mudar Matozinhos",
            "Propor métricas de eficiência no serviço público municipal, bônus de produtividade mediante avaliação dos profissionais e oportunidades para que os profissionais possam melhorar seus conhecimentos e trazer retornos a sociedade.",
            1,
            "Saúde",
            "assets/imagens/icones/ConectaCandidato_fundoTransparente.png",
            true,
            20
        ),
        new Proposta(
            23,
            "Transparência",
            "25 Ideias para mudar Matozinhos",
            "O cidadão deveria ter o direito de saber como está sendo gasto cada centavo da administração pública, além disso transparência é uma das maiores armas contra a corrupção, portanto irei defender a disponibilização de todos os dados em relação ao município de maneira simples para que todos os cidadãos e o poder público possa efetivamente verificar se o dinheiro está sendo gasto com eficiência e responsabilidade.",
            1,
            "Saúde",
            "assets/imagens/icones/ConectaCandidato_fundoTransparente.png",
            true,
            20
        ),
        new Proposta(
            24,
            "Fiscalizar E Interagir Com A Prefeitura.",
            "25 Ideias para mudar Matozinhos",
            "A principal função do vereador é fiscalizar se tudo está sendo feito conforme as leis, tanto por parte do setor público como privado. Outra função importante é servir como ponte entre o cidadão e o executivo, ouvindo os cidadãos e levando os questionamentos deles direito aos responsáveis dentro do executivo constantemente facilita a resolução de problemas e empodera a comunidade, cobrar diretamente dos responsáveis é mais eficiente que ficar fazendo discursos na tribuna 1 vez por semana.",
            1,
            "Saúde",
            "assets/imagens/icones/ConectaCandidato_fundoTransparente.png",
            true,
            20
        ),
    ];
    
    Ler(): Observable<Proposta[]> {
        return this.http.get<Proposta[]>(environment.endpoint + routes.Proposta).pipe(
            retry(3), 
            catchError(this.handleError)
        );
    }

    CurtirProposta(id: number): Observable<Proposta[]> {
        return this.http.post<Proposta[]>(environment.endpoint + routes.CurtirProposta, {id:id}).pipe(
            retry(3), 
            catchError(this.handleError)
        );
    }

    Filtrar(id:number):Proposta[]{
        return this.ProjetosTeste.filter(x => x.Identificador == id);
    }

    ObterTeste():Proposta[]{
        return this.ProjetosTeste;
    }
	
	Incluir(item: Proposta): Observable<any> {
        return this.http.post<Proposta>(environment.endpoint + routes.Gerenciamento + routes.Proposta, {}).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }

    Editar(item: Proposta): any {
        let payload = this.AuthenticationService.tokenize({Proposta:item});
        console.log(payload);
        return this.http.put<Proposta>(environment.endpoint + routes.Gerenciamento + routes.Proposta,
            payload).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }
	
    Remover(id: string): Observable<any>{
        return this.http.delete<Proposta>(environment.endpoint + routes.Gerenciamento + routes.Proposta).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }	

    handleError(error) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        // this.StateService.currentState.subscribe(x=>{
		// 	x.Funcional = false;
		// 	x.Mensagem  = errorMessage;
		// });
        return throwError(errorMessage);
    }
}