import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { routes } from 'src/app/data/schema/routes';
import { retry, catchError } from 'rxjs/operators';
import { Collections } from 'src/app/data/schema/Collections';
import { StateService } from 'src/app/core/service/state/state.service';
import { ServicoBase } from 'src/app/data/service/domain/ServicoBase';

@Injectable({
    providedIn: 'root'
})

export class FeedbackService extends ServicoBase{
    constructor(protected http: HttpClient, protected StateService: StateService){
		super(http,StateService); // must call super()
	}
    

    Ler(): Observable<Collections.Feedback[]> {
        return this.http.get<Collections.Feedback[]>(environment.endpoint + routes.Feedback).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }
	
    Incluir(item: Collections.Feedback): any  {
        return this.http.post<Collections.Feedback>(environment.endpoint + routes.Feedback, {}).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }
	
    Editar(item: Collections.Feedback): any {
        return this.http.put<Collections.Feedback>(environment.endpoint + routes.Feedback, {}).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }
	
    Remover(id: string): any {
        return this.http.delete<Collections.Feedback>(environment.endpoint + routes.Feedback).pipe(
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