import { Component, OnInit, NgModule, Input } from '@angular/core';

import { Collections } from 'src/app/data/schema/Collections';
import { Candidato } from 'src/app/data/schema/domain/Candidato';
import { InformacoesContatoService } from 'src/app/data/service/domain/InformacoesContatoService';
import { MensagensService } from 'src/app/data/service/domain/MensagensService';
import { CandidatoService } from 'src/app/data/service/domain/CandidatoService';
import { CaminhoImagemCandidato } from 'src/app/_helpers/caminho_helper';
import { AuthenticationService } from 'src/app/core/service/authentication/authentication.service';
import { fade } from 'src/app/animations';
import { Mensagens } from 'src/app/data/schema/domain/Mensagens';
import { TipoImagem } from 'src/app/data/schema/TipoImagem';

@Component({
  selector: 'apresentacao-candidato',
  templateUrl: './apresentacao-candidato.component.html',
  styleUrls: ['./apresentacao-candidato.component.css'],
  animations:[fade]
})

export class ApresentacaoCandidatoComponent implements OnInit {

  
  constructor(
    private authenticationService: AuthenticationService,
    private MensagensService:MensagensService
	) 
	{ 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.Mensagens=this.MensagensService.ObterTeste();
  }
  
  loading = false;

  Sobre:Collections.Sobre;
  InformacaoContato:Collections.InformacoesContato;
  Mensagens:Mensagens;
  currentUser: Collections.User;

  @Input()
  Candidato: Candidato;


  ObterImagemPerfilDesktop(){
    return CaminhoImagemCandidato(TipoImagem.PerfilDesktop);
  }

  ngOnInit(): void {
    this.loading = true;
  }

}