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
import { Projeto } from 'src/app/data/schema/domain/Projeto';

@Injectable({
    providedIn: 'root'
})

export class ProjetoService extends ServicoBase {
    constructor(protected http: HttpClient, protected AuthenticationService: AuthenticationService, protected StateService: StateService) {
		super(http,StateService);
	}
    
    Ler(): Observable<Projeto[]> {
        return this.http.get<Projeto[]>(environment.endpoint + routes.Projeto).pipe(
            retry(3), 
            catchError(this.handleError)
        );
    }

    ObterTeste():Projeto[]{
        return [
            new Projeto(
                1,
                "Lagoa santa para todos",
                "",
                1,
                "BemEstarSocial",
                "assets/imagens/fundos/inicio/green_field.jpg",
                true
            ),
        ]
    }
	
	Incluir(item: Projeto): Observable<any> {
        return this.http.post<Projeto>(environment.endpoint + routes.Gerenciamento + routes.Projeto, {}).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }

    Editar(item: Projeto): any {
        let payload = this.AuthenticationService.tokenize({Projeto:item});
        console.log(payload);
        return this.http.put<Projeto>(environment.endpoint + routes.Gerenciamento + routes.Projeto,
            payload).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }
	
    Remover(id: string): Observable<any>{
        return this.http.delete<Projeto>(environment.endpoint + routes.Gerenciamento + routes.Projeto).pipe(
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