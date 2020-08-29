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
    
    ProjetosTeste : Projeto[] = [
        new Projeto(
            1,
            "Health Care and Education Reconciliation Act",
            "",
            "",
            1,
            "Saúde",
            "assets/imagens/fundos/inicio/green_field.jpg",
            true,
            20
        ),
        new Projeto(
            2,
            "Patient Protection and Affordable Care Act",
            "",
            "",
            1,
            "Saúde sdsd",
            "assets/imagens/fundos/inicio/green_field.jpg",
            true,
            20
        ),
        new Projeto(
            3,
            "Don't Ask, Don't Tell Repeal Act of 2010",
            "",
            "",
            1,
            "Segurança",
            "assets/imagens/fundos/inicio/green_field.jpg",
            true,
            20
        ),
        new Projeto(
            4,
            "Obama care",
            "",
            "",
            1,
            "Saúde",
            "assets/imagens/fundos/inicio/green_field.jpg",
            true,
            20
        ),
    ];

    Ler(): Observable<Projeto[]> {
        return this.http.get<Projeto[]>(environment.endpoint + routes.Projeto).pipe(
            retry(3), 
            catchError(this.handleError)
        );
    }

    Like(id: number): Observable<Projeto[]> {
        return this.http.post<Projeto[]>(environment.endpoint + routes.Like, {id:id}).pipe(
            retry(3), 
            catchError(this.handleError)
        );
    }

    Filtrar(id:number):Projeto[]{
        return this.ProjetosTeste.filter(x => x.Identificador == id);
    }

    ObterTeste():Projeto[]{
        return this.ProjetosTeste;
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