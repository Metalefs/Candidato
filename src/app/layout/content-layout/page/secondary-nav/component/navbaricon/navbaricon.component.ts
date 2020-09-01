import { Component, OnInit, Input } from '@angular/core';
import { EstadoNav } from "../../../../../../data/schema/EstadoNav";
import { Router, ActivatedRoute } from '@angular/router';

import { OpcaoNavbar } from 'src/app/data/schema/OpcoesNavbar';
import { NavStateService } from 'src/app/core/service/state/_NavStateService'
@Component({
  selector: 'navbaricon',
  templateUrl: './navbaricon.component.html',
  styleUrls: ['./navbaricon.component.css']
})
export class NavbariconComponent implements OnInit {
  @Input()
  Opcao: OpcaoNavbar;
  EstadoNav: EstadoNav = new EstadoNav("",false,false,false);
  EstadoNavs: EstadoNav[] = [];

  pulse = false;
  constructor(
    private NavStateService:NavStateService,
    private Router:Router,
    private ActivatedRoute:ActivatedRoute
  ) {
    
  }

  ChangeToThis(){
    this.NavStateService.currentState.subscribe(y=>{
     
      y.forEach(x=>{
        if(x.pagina != this.Opcao.Link){
          x.is_active = false
        }
        else{
          x.pagina = this.Opcao.Link;
          x.is_active = true;
          x.is_solid = true;
          this.EstadoNav = x;
        }
      })
      
      this.NavStateService.update(y);

    }) 
  }

  ngOnInit(): void {
    this.NavStateService.currentState.subscribe(item => {
        if (item != undefined) {
            item.forEach(x=>{
                if(x.pagina == this.Opcao.Link){
                  this.EstadoNav = x;
                }
            })
        }
    });
    this.NavStateService.getNavState(this.Opcao.Link).then(x=>{
      this.EstadoNav = x
    });
    if(this.Router.url == "/"+ this.Opcao.Link ){
      this.ChangeToThis();
    }
    console.log(this.Router.url, this.Opcao.Link, this.Router.url == this.Opcao.Link)
  }

}
