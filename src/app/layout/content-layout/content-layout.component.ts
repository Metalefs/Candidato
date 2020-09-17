import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthenticationService } from 'src/app/core/service/authentication/authentication.service';
import { fade, slider, slide } from 'src/app/animations';
import AOS from 'aos';
import { CandidatoService } from 'src/app/data/service/domain/CandidatoService';
import { ServicoPaginas } from 'src/app/data/service/ServicoPaginas';
import { OpcaoNavbarFA } from 'src/app/data/schema/OpcoesNavbar';
import { Candidato } from 'src/app/data/schema/domain/Candidato';

@Component({
  selector: 'content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.css'],
  animations: [
    slider
 ]
})

export class ContentLayoutComponent implements OnInit {
  
  constructor(
    private ServicoPaginas: ServicoPaginas,
    private CandidatoService: CandidatoService,
    private authenticationService: AuthenticationService,
  ) {
    this.paginas = ServicoPaginas.GetAllPages();
    
  }
  opened =true;
 
  title = "Candidato";
  paginas: OpcaoNavbarFA[] = [];
  NavState:NavState = {open : true};
  
  @ViewChild('canvasEl') canvasEl: ElementRef;
  @ViewChild('MobilecanvasEl') MobilecanvasEl: ElementRef;
  @ViewChild('canvasContainer') container: ElementRef;
  private c: CanvasRenderingContext2D;
  ToggleNav(){
    this.NavState.open = this.NavState.open ? false : true;
  }
  CloseNav(){
    if(this.NavState.open)
    this.NavState.open = false;
  }

  ngOnInit(): void {
    AOS.init();
  }

  
  prepareRoute(outlet: RouterOutlet) {
    try{
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
    catch(ex){
      
    }
  }

}

export interface NavState{
  open:boolean
}