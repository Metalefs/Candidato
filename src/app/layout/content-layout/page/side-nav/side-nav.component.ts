import { Component, OnInit } from '@angular/core';
import { EstadoNav } from '../secondary-nav/component/secondary-nav.component';
import { OpcaoNavbarFA, OpcaoNavbar } from 'src/app/data/schema/OpcoesNavbar';
import { faHome, faIdCard, faRss } from '@fortawesome/free-solid-svg-icons';
import { RedeSocial } from 'src/app/data/schema/RedeSocial';
import { CaminhoLogo } from 'src/app/_helpers/caminho_helper';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  EstadoNav = new EstadoNav();
  collapsed=true;
  redes:RedeSocial[] = [];
  
  constructor() { 
    this.redes.push(
      new RedeSocial(CaminhoLogo("twitter"),"twitter","/"),
      new RedeSocial(CaminhoLogo("instagram"),"instagram","/"),
      new RedeSocial(CaminhoLogo("whatsapp"),"whatsapp","/"),
      new RedeSocial(CaminhoLogo("facebook"),"facebook","/"),
      new RedeSocial(CaminhoLogo("youtube"),"youtube","/"),
    );
  }
  
  Opcoes = [
    new OpcaoNavbar("Resumo", "inicio", "home"),
    new OpcaoNavbar("Projetos", "projetos", "tasks"),
    new OpcaoNavbar("Biografia", "biografia", "bookmark"),
    new OpcaoNavbar("Feed", "feed", "hashtag"),
  ];
  ngOnInit(): void {
  }

}
