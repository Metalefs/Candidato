import { Component, OnInit } from '@angular/core';
import { RedeSocial } from 'src/app/data/schema/RedeSocial';
import { CaminhoLogo } from 'src/app/_helpers/caminho_helper';

@Component({
  selector: 'app-main-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
    
  title = "Partido";
  
  desktop = "is-hidden-touch";
  mobile = "is-hidden-desktop";
  redes: RedeSocial[] = [];
  constructor() {
    this.redes.push(
      new RedeSocial(CaminhoLogo("twitter"),"twitter","/"),
      new RedeSocial(CaminhoLogo("instagram"),"instagram","/"),
      new RedeSocial(CaminhoLogo("whatsapp"),"whatsapp","/"),
      new RedeSocial(CaminhoLogo("facebook"),"facebook","/"),
      new RedeSocial(CaminhoLogo("youtube"),"youtube","/"),
    );
  }
  ngOnInit(){

  }

}
