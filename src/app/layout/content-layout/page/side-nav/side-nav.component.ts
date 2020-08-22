import { Component, OnInit } from '@angular/core';
import { EstadoNav } from '../secondary-nav/component/secondary-nav.component';
import { OpcaoNavbarFA } from 'src/app/data/schema/OpcoesNavbar';
import { faHome, faIdCard, faRss } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor() { }
  EstadoNav = new EstadoNav();
  

  Opcoes = [
    new OpcaoNavbarFA("Home", "/", faHome),
    new OpcaoNavbarFA("Biografia", "/biografia", faIdCard),
    new OpcaoNavbarFA("Feed", "/feed", faRss),
  ];
  ngOnInit(): void {
  }

}
