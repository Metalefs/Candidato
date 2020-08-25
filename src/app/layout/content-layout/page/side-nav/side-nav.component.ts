import { Component, OnInit } from '@angular/core';
import { EstadoNav } from "../../../../data/schema/EstadoNav";
import { OpcaoNavbarFA, OpcaoNavbar } from 'src/app/data/schema/OpcoesNavbar';
import { faHome, faIdCard, faRss } from '@fortawesome/free-solid-svg-icons';
import { RedeSocial } from 'src/app/data/schema/RedeSocial';
import { CaminhoLogo } from 'src/app/_helpers/caminho_helper';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  EstadoNav:EstadoNav;
  collapsed=true;

  constructor() { 
    
  }
  
  Opcoes = [
    new OpcaoNavbar("Resumo", "inicio", "home"),
    new OpcaoNavbar("Biografia", "biografia", "bookmark"),
    new OpcaoNavbar("Projetos", "projetos", "tasks"),
    new OpcaoNavbar("Feed", "feed", "hashtag"),
  ];
  ngOnInit(): void {
  }

}
