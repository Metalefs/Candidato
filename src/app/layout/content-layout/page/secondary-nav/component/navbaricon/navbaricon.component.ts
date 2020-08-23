import { Component, OnInit, Input } from '@angular/core';
import { EstadoNav } from '../secondary-nav.component';
import { Router } from '@angular/router';
import { OpcaoNavbarFA } from 'src/app/data/schema/OpcoesNavbar';

@Component({
  selector: 'navbaricon',
  templateUrl: './navbaricon.component.html',
  styleUrls: ['./navbaricon.component.css']
})
export class NavbariconComponent implements OnInit {
  @Input()
  Opcao: OpcaoNavbarFA;

  @Input()
  EstadoNav: EstadoNav;

  pulse = false;
  constructor(
    private router: Router,
  ) {
      console.log(this.router.url);
      
  }

  ChangeToThis(){
    this.EstadoNav.pagina = this.Opcao.Link;
  }

  ngOnInit(): void {
      if(this.router.url == this.Opcao.Link){
        this.ChangeToThis();
      }
  }

}
