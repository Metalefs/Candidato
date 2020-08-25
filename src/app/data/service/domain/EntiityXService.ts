// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { throwError, Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { routes } from 'src/app/data/schema/routes';
// import { retry, catchError } from 'rxjs/operators';
// import { Collections } from 'src/app/data/schema/Collections';
// import { StateService } from 'src/app/core/service/state/AppState';
// import { ServicoBase } from 'src/app/core/domain/ServicoBase';

// @Injectable({
//     providedIn: 'root'
// })

// export class EntityXService extends ServicoBase{
//     constructor(private http: HttpClient, private StateService: StateService){
// 		super(http,StateService); // must call super()
// 	}
    
//     private IsLoading = true;

//     Ler(): Observable<Collections.Avaliacao[]> {
//         return this.http.get<Collections.Avaliacao[]>(environment.endpoint + routes.Avaliacao).pipe(
//             retry(3), // retry a failed request up to 3 times
//             catchError(handleError) // then handle the error
//         );
//     }
	
//     Incluir(avaliacao: Collections.Avaliacao): Observable<any>   {
//         return this.http.post<Collections.Avaliacao>(environment.endpoint + routes.Avaliacao, {Avaliacao: avaliacao}).pipe(
//             retry(3),
//             catchError(handleError)
//         );
//     }
	
//     Editar(item: Collections.Avaliacao): any {
//         return this.http.put<Collections.Avaliacao>(environment.endpoint + routes.Avaliacao, {}).pipe(
//             retry(3), // retry a failed request up to 3 times
//             catchError(handleError) // then handle the error
//         );
//     }
	
//     Remover(id: string): any {
//         return this.http.delete<Collections.Avaliacao>(environment.endpoint + routes.Avaliacao).pipe(
//             retry(3),
//             catchError(handleError)
//         );
//     }
	
// }