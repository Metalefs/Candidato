import { Component, OnInit, Input } from '@angular/core';
import { OpcaoNavbar, OpcaoNavbarFA } from 'src/app/data/schema/OpcoesNavbar';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import { EstadoNav } from '../../../../../data/schema/EstadoNav';
import { ServicoPaginas } from 'src/app/data/service/ServicoPaginas';

@Component({
  selector: 'secondary-nav',
  templateUrl: './secondary-nav.component.html',
  styleUrls: ['./secondary-nav.component.css']
})
export class SecondaryNavComponent implements OnInit {
  
  EstadoNav :EstadoNav;
  constructor( private ServicoPaginas: ServicoPaginas) { 
    
  }
  paginas: OpcaoNavbar[] = [];

  Opcoes = [
    new OpcaoNavbarFA("Resumo", "inicio", faHome),
    new OpcaoNavbarFA("Projetos", "projetos", faIdCard),
    new OpcaoNavbarFA("Biografia", "biografia", faIdCard),
    new OpcaoNavbarFA("Feed", "feed", faRss),
  ];
  

  ngOnInit(): void {
    this.paginas = this.ServicoPaginas.GetAllPages();
  }

}
