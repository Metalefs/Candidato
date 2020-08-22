import { Component, OnInit, Input } from '@angular/core';
import { OpcaoNavbar, OpcaoNavbarFA } from 'src/app/data/schema/OpcoesNavbar';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';

export class EstadoNav {
    pagina:string;
    has_badge:boolean;
    is_solid:boolean;
}

@Component({
  selector: 'secondary-nav',
  templateUrl: './secondary-nav.component.html',
  styleUrls: ['./secondary-nav.component.css']
})
export class SecondaryNavComponent implements OnInit {

  constructor() {  }
  EstadoNav = new EstadoNav();
  

  Opcoes = [
    new OpcaoNavbarFA("Home", "/", faHome),
    new OpcaoNavbarFA("Biografia", "/biografia", faIdCard),
    new OpcaoNavbarFA("Feed", "/feed", faRss),
  ];
  

  ngOnInit(): void {
  }

}
