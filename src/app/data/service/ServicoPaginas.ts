import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { OpcaoNavbarFA } from 'src/app/data/schema/OpcoesNavbar';
import { faHome, faInbox, faQuoteLeft, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faRProject } from '@fortawesome/free-brands-svg-icons';


@Injectable({
    providedIn: 'root'
})

export class ServicoPaginas{
    constructor(){
		
	}

    GetAllPages(): OpcaoNavbarFA[] {
      return [
          new OpcaoNavbarFA("Resumo","inicio",faHome),
          new OpcaoNavbarFA("Quem é","sobre",faAddressCard),
          new OpcaoNavbarFA("Propostas","projetos",faQuoteLeft),
          new OpcaoNavbarFA("Entrar em Contato","contato",faInbox)
        ]
    }
	
	
}