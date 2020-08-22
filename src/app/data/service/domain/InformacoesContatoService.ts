import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { routes } from 'src/app/data/schema/routes';
import { retry, catchError } from 'rxjs/operators';
import { Collections } from 'src/app/data/schema/Collections';
import { RowActionService } from '@clr/angular/data/datagrid/providers/row-action-service';
import { AuthenticationService } from 'src/app/core/service/authentication/authentication.service';
import { StateService } from 'src/app/core/service/state/state.service';
import { ServicoBase } from 'src/app/data/service/domain/ServicoBase';

@Injectable({
    providedIn: 'root'
})

export class InformacoesContatoService extends ServicoBase {
    constructor(protected http: HttpClient, protected AuthenticationService: AuthenticationService, protected StateService: StateService) {
		super(http,StateService);
	}
    
    Ler(): Observable<Collections.InformacoesContato[]> {
        return this.http.get<Collections.InformacoesContato[]>(environment.endpoint + routes.InfoContato).pipe(
            retry(3), 
            catchError(this.handleError)
        );
    }
	
	Incluir(item: Collections.InformacoesContato): Observable<any> {
        return this.http.post<Collections.InformacoesContato>(environment.endpoint + routes.Gerenciamento + routes.InfoContato, {}).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }

    Editar(item: Collections.InformacoesContato): any {
        let payload = this.AuthenticationService.tokenize({InformacoesContato:item});
        console.log(payload);
        return this.http.put<Collections.InformacoesContato>(environment.endpoint + routes.Gerenciamento + routes.InfoContato,
            payload).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }
	
    Remover(id: string): Observable<any>{
        return this.http.delete<Collections.InformacoesContato>(environment.endpoint + routes.Gerenciamento + routes.InfoContato).pipe(
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