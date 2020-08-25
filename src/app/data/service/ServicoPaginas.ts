import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { OpcaoNavbar } from 'src/app/data/schema/OpcoesNavbar';
@Injectable({
    providedIn: 'root'
})

export class ServicoPaginas{
    constructor(){
		
	}

    GetAllPages(): OpcaoNavbar[] {
      return [
          new OpcaoNavbar("Inicio","inicio",""),
          new OpcaoNavbar("Sobre","sobre",""),
          new OpcaoNavbar("Projetos","projetos",""),
          new OpcaoNavbar("Contato","contato","")
        ]
    }
	
	
}