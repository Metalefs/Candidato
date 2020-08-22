import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { routes } from 'src/app/data/schema/routes';
import { retry, catchError } from 'rxjs/operators';
import { Collections, MongoDocument } from 'src/app/data/schema/Collections';
import { StateService } from 'src/app/core/service/state/state.service';

@Injectable({
    providedIn: 'root'
})

export abstract class ServicoBase {
    constructor(protected http: HttpClient,
        protected StateService: StateService){}
    
    private IsLoading = true;

    abstract Ler(): Observable<any> ;
	
    abstract Incluir(item: any): Observable<any>;
	
    abstract Editar(item: any): any ;
	
    abstract Remover(id: string): any;
    
    getLoadingState(){
        return this.IsLoading;
    }

    setIsLoading(state : boolean){
        this.IsLoading = state;
        if(state == false){
            
        } else {
            
        }
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
		//return throwError(errorMessage);
	}
    
}