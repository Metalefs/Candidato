import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { routes } from 'src/app/data/schema/routes';
import { retry, catchError } from 'rxjs/operators';
import { Pensamento } from 'src/app/data/schema/domain/Pensamento';
import { AuthenticationService } from 'src/app/core/service/authentication/authentication.service';
import { StateService } from 'src/app/core/service/state/state.service';
import { ServicoBase } from 'src/app/data/service/domain/ServicoBase';

@Injectable({
    providedIn: 'root'
})

export class PensamentoService extends ServicoBase{
    constructor(protected http: HttpClient, protected AuthenticationService: AuthenticationService, protected StateService: StateService) {
		super(http,StateService);
	}

    IdeaisTeste:Pensamento[] = [
        new Pensamento(
            1,
            "Liberdade econômica",
            "",
            true,
            1
        ),
        new Pensamento(
            1,
            "Liberdade de Expressão",
            "",
            true,
            1
        ),
        new Pensamento(
            1,
            "Anti-Corrupção",
            "",
            true,
            1
        ),
        new Pensamento(
            1,
            "Atração de investimentos para a cidade",
            "",
            true,
            1
        ),
    ];

    Ler(): Observable<Pensamento[]> {
        return this.http.get<Pensamento[]>(environment.endpoint + routes.Pensamento).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }

    Filtrar(id:number):Pensamento[]{
        return this.IdeaisTeste.filter(x => x.IdCandidato == id);
    }   
    
    BuscarOuCriarCandidato(): Observable<Pensamento[]> {
        return this.http.get<Pensamento[]>(environment.endpoint + routes.Pensamento).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }
	
    Incluir(item: Pensamento): Observable<any> {
        return this.http.post<Pensamento>(environment.endpoint + routes.Gerenciamento + routes.Sobre, item).pipe(
            retry(3),
            catchError(this.handleError)
        );
    }

    Editar(item: Pensamento): any {
        let payload = this.AuthenticationService.tokenize({Sobre:item});
        console.log(payload);
        return this.http.put<Pensamento>(environment.endpoint + routes.Gerenciamento + routes.Sobre, 
            payload).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }
	
    Remover(id: string): Observable<any>{
        return this.http.delete<Pensamento>(environment.endpoint + routes.Gerenciamento + routes.Sobre).pipe(
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