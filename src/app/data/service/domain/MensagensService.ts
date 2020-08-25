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
import { Mensagens } from 'src/app/data/schema/domain/Mensagens';

@Injectable({
    providedIn: 'root'
})

export class MensagensService extends ServicoBase {
    constructor(protected http: HttpClient, protected AuthenticationService: AuthenticationService, protected StateService: StateService) {
		super(http,StateService);
	}
    
    Ler(): Observable<Mensagens[]> {
        return this.http.get<Mensagens[]>(environment.endpoint + routes.Mensagens).pipe(
            retry(3), 
            catchError(this.handleError)
        );
    }
	
	Incluir(item: Mensagens): Observable<any> {
        return this.http.post<Mensagens>(environment.endpoint + routes.Gerenciamento + routes.Mensagens, {}).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }

    Editar(item: Mensagens): any {
        let payload = this.AuthenticationService.tokenize({Mensagens:item});
        console.log(payload);
        return this.http.put<Mensagens>(environment.endpoint + routes.Gerenciamento + routes.Mensagens,
            payload).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }
	
    Remover(id: string): Observable<any>{
        return this.http.delete<Mensagens>(environment.endpoint + routes.Gerenciamento + routes.Mensagens).pipe(
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
        this.StateService.currentState.subscribe(x=>{
			x.Funcional = false;
			x.Mensagem  = errorMessage;
		});
        return throwError(errorMessage);
    }
}