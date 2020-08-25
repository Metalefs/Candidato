import { Component, OnInit } from '@angular/core';
import { RedeSocial } from 'src/app/data/schema/RedeSocial';
import { CaminhoLogo } from 'src/app/_helpers/caminho_helper';
import { ScrollSpyService } from '@uniprank/ngx-scrollspy';
import { NavStateService } from 'src/app/core/service/state/_NavStateService';
import { BehaviorSubject, Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  public ActiveSection$: BehaviorSubject<{ id?: string; elementId?: string; nativeElement?: HTMLElement }> = new BehaviorSubject({});
  private _subscription: Subscription;
    
  title = "Partido";
  desktop = "is-hidden-touch";
  mobile = "is-hidden-desktop";
  redes: RedeSocial[] = [];
  constructor(private _scrollSpyService: ScrollSpyService,
    private NavStateService:NavStateService) {
      this.redes.push(
        new RedeSocial(CaminhoLogo("twitter"),"twitter","/"),
        new RedeSocial(CaminhoLogo("instagram"),"instagram","/"),
        new RedeSocial(CaminhoLogo("whatsapp"),"whatsapp","/"),
        new RedeSocial(CaminhoLogo("facebook"),"facebook","/"),
        new RedeSocial(CaminhoLogo("youtube"),"youtube","/"),
      );
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
          x.is_active = true;
          x.is_solid = true;
        }
      })
      
      this.NavStateService.update(y);

    }) 
  }

  ngOnInit():void{
    this._scrollSpyService.setOffset('window', 50);
    // subscribe to window scroll listener, it is also possible to use an ScrollSpyElement id
    // this._subscription = this._scrollSpyService.observe('window').subscribe(item => {
    //     if (item != null) {
    //         const _nextSection = {
    //             id: item.id,
    //             elementId: item.scrollElementId
    //         };
    //         this.setActiveSection(_nextSection);
    //         console.info(`ScrollSpyService: item:`, item);
    //     }
    // });
    this._scrollSpyService.observe('window').subscribe((element => {
        if (element != null) {
            const _nextSection = {
                  id: element.id,
                elementId: element.scrollElementId
            };
            this.ActiveSection$.next(_nextSection);
        }
		}));
  }

  ngOnDestroy() {
    if (this._subscription) {
        this._subscription.unsubscribe();
    }
  }

}
interface section{
  id:string;
  name:string;
}