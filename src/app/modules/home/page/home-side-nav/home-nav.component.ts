import { Component, OnInit } from '@angular/core';
import { EstadoNav } from "../../../../data/schema/EstadoNav";
import { OpcaoNavbarFA, OpcaoNavbar } from 'src/app/data/schema/OpcoesNavbar';
import { faHome, faIdCard, faRss } from '@fortawesome/free-solid-svg-icons';
import { RedeSocial } from 'src/app/data/schema/RedeSocial';
import { CandidatoService } from 'src/app/data/service/domain/CandidatoService';
import { ServicoRedesSociais } from 'src/app/data/service/ServicoRedesSociais';
import { ServicoPaginas } from 'src/app/data/service/ServicoPaginas';
import { Candidato } from 'src/app/data/schema/domain/';
import { CaminhoLogo } from 'src/app/_helpers/caminho_helper';

@Component({
  selector: 'home-side-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})
export class HomeSideNavComponent implements OnInit {
  EstadoNav:EstadoNav;
  collapsed=true;
  Candidato:Candidato;
  paginas: OpcaoNavbarFA[] = [];
  redesSociais: RedeSocial[] = [];

  constructor(private CandidatoService:CandidatoService,
    private ServicoPaginas:ServicoPaginas,
    private ServicoRedesSociais:ServicoRedesSociais) { 
    this.Candidato = this.CandidatoService.ObterTeste();
    this.paginas = this.ServicoPaginas.GetAllPages();
    this.redesSociais = this.ServicoRedesSociais.GetAllRedesSociais();
  }
  isSyncAnimated=false;
  
  syncLevel(idx:number){

    this.isSyncAnimated= !this.isSyncAnimated

  }

  ngOnInit(): void {
  }

}
