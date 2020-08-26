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