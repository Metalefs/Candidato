import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { routes } from 'src/app/data/schema/routes';
import { retry, catchError } from 'rxjs/operators';
import { Ideal } from 'src/app/data/schema/domain/Ideal';
import { AuthenticationService } from 'src/app/core/service/authentication/authentication.service';
import { StateService } from 'src/app/core/service/state/state.service';
import { ServicoBase } from 'src/app/data/service/domain/ServicoBase';

@Injectable({
    providedIn: 'root'
})

export class IdealService extends ServicoBase{
    constructor(protected http: HttpClient, protected AuthenticationService: AuthenticationService, protected StateService: StateService) {
		super(http,StateService);
	}

    IdeaisTeste:Ideal[] = [
        new Ideal(
            1,
            "Liberdade econômica",
            "",
            true,
            1
        ),
        new Ideal(
            1,
            "Liberdade de Expressão",
            "",
            true,
            1
        ),
        new Ideal(
            1,
            "Anti-Corrupção",
            "",
            true,
            1
        ),
        new Ideal(
            1,
            "Atração de investimentos para a cidade",
            "",
            true,
            1
        ),
    ];

    Ler(): Observable<Ideal[]> {
        return this.http.get<Ideal[]>(environment.endpoint + routes.Ideal).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }

    Filtrar(id:number):Ideal[]{
        return this.IdeaisTeste.filter(x => x.IdCandidato == id);
    }   
    
    BuscarOuCriarCandidato(): Observable<Ideal[]> {
        return this.http.get<Ideal[]>(environment.endpoint + routes.Ideal).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }
	
    Incluir(item: Ideal): Observable<any> {
        return this.http.post<Ideal>(environment.endpoint + routes.Gerenciamento + routes.Sobre, item).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }

    Editar(item: Ideal): any {
        let payload = this.AuthenticationService.tokenize({Sobre:item});
        console.log(payload);
        return this.http.put<Ideal>(environment.endpoint + routes.Gerenciamento + routes.Sobre, 
            payload).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }
	
    Remover(id: string): Observable<any>{
        return this.http.delete<Ideal>(environment.endpoint + routes.Gerenciamento + routes.Sobre).pipe(
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