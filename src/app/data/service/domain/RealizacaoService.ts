import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { routes } from 'src/app/data/schema/routes';
import { retry, catchError } from 'rxjs/operators';
import { RowActionService } from '@clr/angular/data/datagrid/providers/row-action-service';
import { AuthenticationService } from 'src/app/core/service/authentication/authentication.service';
import { StateService } from 'src/app/core/service/state/state.service';
import { ServicoBase } from 'src/app/data/service/domain/ServicoBase';
import { Realizacao } from 'src/app/data/schema/domain/Realizacao';

@Injectable({
    providedIn: 'root'
})

export class RealizacaoService extends ServicoBase {
    constructor(protected http: HttpClient, protected AuthenticationService: AuthenticationService, protected StateService: StateService) {
		super(http,StateService);
	}
    
    Ler(): Observable<Realizacao[]> {
        return this.http.get<Realizacao[]>(environment.endpoint + routes.Realizacao).pipe(
            retry(3), 
            catchError(this.handleError)
        );
    }

    Filtrar(id:number):Observable<Realizacao>{
        return this.http.get<Realizacao>(environment.endpoint + routes.Candidato + `/${id}`).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        )
    }   

    ObterTeste() : Realizacao[]{
       return [
           new Realizacao(
                1,
                "MBL",
                "Liderança",
                "01/01/2016",
                "Presente",
                "Liderando o MBL, Gleisson apresentou e lutou por diversos projetos em Matozinhos, entre eles a aprovação do projeto que traria a Empresa italiana Fassa Bortolo a cidade gerando milhares de reais em investimentos. Também lutou pela aprovação do projeto que traria R$ 10 milhões em investimento a cidade com a construção do novo Fórum"
            ),
            new Realizacao(
                1,
                "MBL",
                "Liderança",
                "01/01/2017",
                "Presente",
                "Apresentou o projeto Anticorrupção inspirado em países como Alemanha e Estados Unidos para evitar superfaturamentos e atrasos em obras."
            ),
            new Realizacao(
                1,
                "MBL",
                "Liderança",
                "01/01/2019",
                "Presente",
                "Começou a coletar assinaturas para o Projeto Matozinhos Mais Por Menos que visa diminuir em 30% o salario dos vereadores e Prefeito em Matozinhos."
            ),
        ] ;
    }
	
	Incluir(item: Realizacao): Observable<any> {
        return this.http.post<Realizacao>(environment.endpoint + routes.Gerenciamento + routes.Realizacao, {}).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }

    Editar(item: Realizacao): any {
        let payload = this.AuthenticationService.tokenize({Realizacao:item});
        console.log(payload);
        return this.http.put<Realizacao>(environment.endpoint + routes.Gerenciamento + routes.Realizacao,
            payload).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }
	
    Remover(id: string): Observable<any>{
        return this.http.delete<Realizacao>(environment.endpoint + routes.Gerenciamento + routes.Realizacao).pipe(
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