import { Component, OnInit } from '@angular/core';
import { EstadoNav } from "../../../../data/schema/EstadoNav";
import { OpcaoNavbarFA, OpcaoNavbar } from 'src/app/data/schema/OpcoesNavbar';
import { faHome, faIdCard, faRss } from '@fortawesome/free-solid-svg-icons';
import { ServicoPaginas } from 'src/app/data/service/ServicoPaginas';
import { CaminhoLogo } from 'src/app/_helpers/caminho_helper';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  EstadoNav:EstadoNav;
  collapsed=true;

  constructor( private ServicoPaginas: ServicoPaginas) { 
    this.Opcoes = this.ServicoPaginas.GetAllPages();
  }
  
  Opcoes:OpcaoNavbarFA[];
  ngOnInit(): void {
  }

}
