import { Component, OnInit, Input } from '@angular/core';

import { OpcaoNavbar } from 'src/app/data/schema/OpcoesNavbar';

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
    new OpcaoNavbar("Home", "/", "Home"),
    new OpcaoNavbar("Biografia", "/biografia", "Home"),
    new OpcaoNavbar("Feed", "/feed", "Home"),
  ];
  

  ngOnInit(): void {
  }

}
