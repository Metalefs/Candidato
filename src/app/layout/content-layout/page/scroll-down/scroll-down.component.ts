import { Component, OnInit, HostListener } from '@angular/core';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { NavStateService } from 'src/app/core/service/state/_NavStateService';

@Component({
  selector: 'app-scroll-down',
  templateUrl: './scroll-down.component.html',
  styleUrls: ['./scroll-down.component.css']
})
export class ScrollDownComponent implements OnInit {

  windowScrolled: boolean;
  angleDown = faAngleDoubleDown;
  
  constructor(private document: Document,
    private NavStateService:NavStateService) {}
  
  @HostListener("window:scroll", [])

  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop == 50) {
          this.windowScrolled = true;
      } 
      else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 60) {
          this.windowScrolled = false;
      }
      this.NavStateService.getNavState("inicio").then(x=>{
        if(x.is_active){
          this.windowScrolled = false;
        }
      })
  }
  
  ngOnInit(){}
}
