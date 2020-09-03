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
import { ExperienciaTrabalho } from 'src/app/data/schema/domain/ExperienciaTrabalho';

@Injectable({
    providedIn: 'root'
})

export class ExperienciaTrabalhoService extends ServicoBase {
    constructor(protected http: HttpClient, protected AuthenticationService: AuthenticationService, protected StateService: StateService) {
		super(http,StateService);
	}
    
    Ler(): Observable<ExperienciaTrabalho[]> {
        return this.http.get<ExperienciaTrabalho[]>(environment.endpoint + routes.ExperienciaTrabalho).pipe(
            retry(3), 
            catchError(this.handleError)
        );
    }

    ObterTeste() : ExperienciaTrabalho[]{
       return [
           new ExperienciaTrabalho(
                1,
                "MBL",
                "Liderança",
                "01/01/2016",
                "Presente",
                "Liderando o MBL, Gleisson apresentou e lutou por diversos projetos em Matozinhos, entre eles a aprovação do projeto que traria a Empresa italiana Fassa Bortolo a cidade gerando milhares de reais em investimentos. Também lutou pela aprovação do projeto que traria R$ 10 milhões em investimento a cidade com a construção do novo Fórum"
            ),
            new ExperienciaTrabalho(
                1,
                "MBL",
                "Liderança",
                "01/01/2017",
                "Presente",
                "Apresentou o projeto Anticorrupção inspirado em países como Alemanha e Estados Unidos para evitar superfaturamentos e atrasos em obras."
            ),
            new ExperienciaTrabalho(
                1,
                "MBL",
                "Liderança",
                "01/01/2019",
                "Presente",
                "Começou a coletar assinaturas para o Projeto Matozinhos Mais Por Menos que visa diminuir em 30% o salario dos vereadores e Prefeito em Matozinhos."
            ),
        ] ;
    }
	
	Incluir(item: ExperienciaTrabalho): Observable<any> {
        return this.http.post<ExperienciaTrabalho>(environment.endpoint + routes.Gerenciamento + routes.ExperienciaTrabalho, {}).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }

    Editar(item: ExperienciaTrabalho): any {
        let payload = this.AuthenticationService.tokenize({ExperienciaTrabalho:item});
        console.log(payload);
        return this.http.put<ExperienciaTrabalho>(environment.endpoint + routes.Gerenciamento + routes.ExperienciaTrabalho,
            payload).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }
	
    Remover(id: string): Observable<any>{
        return this.http.delete<ExperienciaTrabalho>(environment.endpoint + routes.Gerenciamento + routes.ExperienciaTrabalho).pipe(
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