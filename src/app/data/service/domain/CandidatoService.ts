import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { routes } from 'src/app/data/schema/routes';
import { retry, catchError } from 'rxjs/operators';
import { Candidato } from 'src/app/data/schema/domain/Candidato';
import { AuthenticationService } from 'src/app/core/service/authentication/authentication.service';
import { StateService } from 'src/app/core/service/state/state.service';
import { ServicoBase } from 'src/app/data/service/domain/ServicoBase';

@Injectable({
    providedIn: 'root'
})

export class CandidatoService extends ServicoBase{
    constructor(protected http: HttpClient, protected AuthenticationService: AuthenticationService, protected StateService: StateService) {
		super(http,StateService);
	}

    CandidatosTeste:Candidato[] = [new Candidato(
        1,
        "Gleisson Andrade",
        `Nascido em 03 de fevereiro de 1998, no hospital Wanda Andrade Drummond, Gleisson é filho de uma dona de casa nascida no interior do Pará e de um caldeireiro que nasceu no Riacho. Fez o ensino fundamental na Escola Nosso Mundo e formou o ensino médio na escola Estadual Bento Gonçalves.
        
        Sua vida na política começou em 2013, com 14 anos quando decidiu postar um vídeo no youtube a respeito de um projeto polêmico que estava tramitando na Câmara Municipal de Matozinhos sobre a expansão do distrito industrial para área preservada do Cafezal. Naquela época o vídeo viralizou e foi publicado no principal jornal da cidade na Informatoz onde teve grande repercussão.
        
        Depois disso, usou seu canal para postar suas opiniões sobre a atual situação conturbada do Brasil na época, no auge dos protestos que tomaram conta do país.
        
        Em 2016, após ter formado no Bento Gonçalves, resolveu cursar Engenharia da Computação, no mesmo ano foi convidado a se juntar ao Movimento Brasil Livre tornando-se coordenador do grupo que organizou as maiores manifestações do Brasil e posteriormente protocolaria o pedido de impeachment de Dilma Roussef.
        
        Na vida profissional, Gleisson começou a trabalhar com 14 anos arrumando computadores, aos 16 trabalhou como Jovem Aprendiz na Yazaki depois aos 18 trabalhou na Yazaki novamente como operador de produção. Hoje, divide seu tempo entre o ativismo político e sua profissão de Analista | Programador de Sistemas financeiros.`,
        "",
        "Liderando o MBL, Gleisson apresentou e lutou por diversos projetos em Matozinhos, entre eles a aprovação do projeto que traria a Empresa italiana Fassa Bortolo a cidade gerando milhares de reais em investimentos. Também lutou pela aprovação do projeto que traria R$ 10 milhões em investimento a cidade com a construção do novo Fórum. Em 2017 apresentou o projeto Anticorrupção inspirado em países como Alemanha e Estados Unidos para evitar superfaturamentos e atrasos em obras. Em 2019 começou a coletar assinaturas para o Projeto Matozinhos Mais Por Menos que visa diminuir em 30% o salario dos vereadores e Prefeito em Matozinhos.",
        "03/02/1998",
        "Seu e-mail",
        "Seu telefone",
        "twitter.com",
        "",
        "",
        "",
        "",
        "0023",
        "/assets/imagens/fundos/inicio/Gleisson.jpg",
        "/assets/imagens/fundos/inicio/President_Barack_Obama-perfil.jpg",
        true
    )];

    Ler(): Observable<Candidato[]> {
        return this.http.get<Candidato[]>(environment.endpoint + routes.Candidato).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }

    Filtrar(id:number):Candidato[]{
        return this.CandidatosTeste.filter(x => x.Identificador == id);
    }   

    ObterTeste(): Candidato{
        return this.CandidatosTeste[0];
    }
    
    BuscarOuCriarCandidato(): Observable<Candidato[]> {
        return this.http.get<Candidato[]>(environment.endpoint + routes.Candidato).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }
	
    Incluir(item: Candidato): Observable<any> {
        return this.http.post<Candidato>(environment.endpoint + routes.Gerenciamento + routes.Sobre, item).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }

    Editar(item: Candidato): any {
        let payload = this.AuthenticationService.tokenize({Sobre:item});
        console.log(payload);
        return this.http.put<Candidato>(environment.endpoint + routes.Gerenciamento + routes.Sobre, 
            payload).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }
	
    Remover(id: string): Observable<any>{
        return this.http.delete<Candidato>(environment.endpoint + routes.Gerenciamento + routes.Sobre).pipe(
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