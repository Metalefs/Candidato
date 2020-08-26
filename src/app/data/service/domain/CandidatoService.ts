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

    Ler(): Observable<Candidato[]> {
        return this.http.get<Candidato[]>(environment.endpoint + routes.Candidato).pipe(
            retry(3), // retry a failed request up to 3 times
            catchError(this.handleError) // then handle the error
        );
    }

    ObterTeste(): Candidato{
        return new Candidato(
            1,
            "Rogério César de Matos Avelar",
            "24/06/1960",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "23",
            "/assets/imagens/fundos/inicio/rogerio-avelar-23-capa.jpg",
            "/assets/imagens/fundos/inicio/rogerio-avelar-23.jpg",
            true
          );
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