import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicoPaginas } from 'src/app/data/service/ServicoPaginas';
import { ServicoRedesSociais } from 'src/app/data/service/ServicoRedesSociais';
import { OpcaoNavbar, OpcaoNavbarFA } from 'src/app/data/schema/OpcoesNavbar';
import { RedeSocial } from 'src/app/data/schema/RedeSocial';
import { NavState } from '../../content-layout/content-layout.component';
import { NavStateService } from 'src/app/core/service/state/_NavStateService';
import { fade } from 'src/app/animations';
import { BehaviorSubject, Subscription } from 'rxjs';
import { EstadoNav } from 'src/app/data/schema/EstadoNav';
import { Candidato }        from 'src/app/data/schema/domain';
import { CandidatoService } from 'src/app/data/service/domain';

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

    @Input()NavState:NavState;
    Subtitulo:string = "Portifólio do Nome Candidato";
    paginas: OpcaoNavbarFA[] = [];
    redesSociais: RedeSocial[] = [];
    Copyright:string = "@Conecta Candidato";
    Candidato:Candidato;

  private _subscription: Subscription;
  paginaAtiva = "";
  constructor( private ServicoPaginas: ServicoPaginas, private ServicoRedesSociais: ServicoRedesSociais,
    private NavStateService:NavStateService,
    private Router:Router,
    private CandidatoService:CandidatoService ) { 
      this.Candidato = CandidatoService.ObterTeste();
  }
  
  setActiveSection(section: any): void {
    this.ActiveNav$.next(section);
    console.log(section);
  }

  ToggleNav(delay:number){
    setTimeout(()=>{
      this.NavState.open = this.NavState.open ? false : true;

    },delay);
  }
  ChangeToThis(page:string){
    this.NavStateService.currentState.subscribe(y=>{
     
      y.forEach(x=>{
        if(x.pagina != page){
          x.is_active = false
        }
        else{
          x.pagina = page;
          x.is_active = true;
          x.is_solid = true;
        }
      })
      this.paginaAtiva = page;
      
      this.NavStateService.update(y);

    }) 
  }
  ngOnInit(): void {
    this.paginas = this.ServicoPaginas.GetAllPages();
    this.redesSociais = this.ServicoRedesSociais.GetAllRedesSociais();
    this.paginaAtiva = this.Router.url;
    // setInterval(()=>{
    //   this.NavStateService.getActiveNav().then(x=>{
    //     this.paginaAtiva = x.pagina;
    //     console.log(this.paginaAtiva);
    //   });
    // },1000)
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