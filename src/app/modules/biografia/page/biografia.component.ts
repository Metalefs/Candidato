import { Component, OnInit } from '@angular/core';
import { RedeSocial } from 'src/app/data/schema/RedeSocial';
import { ScrollSpyService } from '@uniprank/ngx-scrollspy';
import { NavStateService } from 'src/app/core/service/state/_NavStateService';
import { BehaviorSubject, Subscription, Subject } from 'rxjs';
import { WindowSize, WindowSizeService } from 'src/app/core/service/windowSize.service';
import { Candidato,Ideal } from 'src/app/data/schema/domain';
import { CandidatoService, IdealService } from 'src/app/data/service/domain';

@Component({
  selector: 'app-biograf',
  templateUrl: './biografia.component.html',
  styleUrls: ['./biografia.component.css'],
  host: {
    "(window:resize)":"onWindowResize($event)"
  }
})
export class BiografiaComponent implements OnInit {
  public ActiveSection$: BehaviorSubject<{ id?: string; elementId?: string; nativeElement?: HTMLElement }> = new BehaviorSubject({});
  private _scroll_subscription: Subscription;

  isMobile:boolean = false;
  width:number = window.innerWidth;
  height:number = window.innerHeight;
  mobileWidth:number  = 760;
  title = "Partido";
  desktop = "is-hidden-touch";
  mobile = "is-hidden-desktop";
  redes: RedeSocial[] = [];

  Candidato:Candidato;
  Ideais:Ideal[];

  constructor(private _scrollSpyService: ScrollSpyService,
    private NavStateService:NavStateService,
    private CandidatoService:CandidatoService,
    private IdealService:IdealService
    ) {
      this.Candidato = this.CandidatoService.ObterTeste();
      this.Ideais = this.IdealService.Filtrar(this.Candidato.Identificador);
  }
  
  setActiveSection(section: any): void {
    this.ActiveSection$.next(section);
    this.NavStateService.currentState.subscribe(y=>{
      
      y.forEach(x=>{
        if(x.pagina != section.id){
          x.is_active = false;
        }
        else{
          x.pagina = section.id;
          console.log(x.pagina)
          x.is_active = true;
          x.is_solid = true;
        }
      })
      this.NavStateService.update(y);

    }) 
  }

  onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    this.isMobile = this.width < this.mobileWidth;
    console.log(this.isMobile);
  }

  ngOnInit():void{
    this._scrollSpyService.setOffset('window', 50);

    this._scroll_subscription = this._scrollSpyService.observe('window').subscribe(item => {
        if (item != null) {
            const _nextSection = {
                id: item.id,
                elementId: item.scrollElementId
            };
            this.setActiveSection(_nextSection);
            console.info(`ScrollSpyService: item:`, item);
        }
    });
  }

  ngOnDestroy() {
    if (this._scroll_subscription) {
        this._scroll_subscription.unsubscribe();
    }
  }

}