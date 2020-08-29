import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicoPaginas } from 'src/app/data/service/ServicoPaginas';
import { ServicoRedesSociais } from 'src/app/data/service/ServicoRedesSociais';
import { OpcaoNavbar } from 'src/app/data/schema/OpcoesNavbar';
import { RedeSocial } from 'src/app/data/schema/RedeSocial';
import { NavState } from '../content-layout/content-layout.component';
import { NavStateService } from 'src/app/core/service/state/_NavStateService';
import { fade } from 'src/app/animations';
import { BehaviorSubject, Subscription } from 'rxjs';
import { EstadoNav } from 'src/app/data/schema/EstadoNav';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations:[fade]
})
export class NavbarComponent implements OnInit {
  public ActiveNav$: BehaviorSubject<{pagina?: string,
    has_badge?: boolean,
    is_solid?: boolean,
    is_active?: boolean}> = new BehaviorSubject({});

  private _subscription: Subscription;
  paginaAtiva = "";
  constructor( private ServicoPaginas: ServicoPaginas, private ServicoRedesSociais: ServicoRedesSociais,
    private NavStateService:NavStateService ) { 
      
  }
  @Input()NavState:NavState;
  Subtitulo:string = "Portifólio do Nome Candidato";
  paginas: OpcaoNavbar[] = [];
  redesSociais: RedeSocial[] = [];
  Copyright:string = "@Conecta Candidato";
  
  setActiveSection(section: any): void {
    this.ActiveNav$.next(section);
  }

  ToggleNav(){
    this.NavState.open = this.NavState.open ? false : true;
  }

  ngOnInit(): void {
    this.paginas = this.ServicoPaginas.GetAllPages();
    this.redesSociais = this.ServicoRedesSociais.GetAllRedesSociais();
    
    setInterval(()=>{
      this.NavStateService.getActiveNav().then(x=>{
        this.paginaAtiva = x.pagina;
      });
    },1000)
    this._subscription = this.NavStateService.currentState.subscribe(item => {
      if (item != undefined) {
          item.forEach(x=>{
              if(x.is_active){
                this.setActiveSection(x.pagina);
              }
          })
      }
    });
}

ngOnDestroy() {
  if (this._subscription) {
      this._subscription.unsubscribe();
  }
}

}
