import { Component, OnInit, NgModule, Input } from '@angular/core';

import { Collections } from 'src/app/data/schema/Collections';
import { RedeSocial } from 'src/app/data/schema/RedeSocial';
import { Candidato } from 'src/app/data/schema/domain/Candidato';
import { CaminhoLogo } from 'src/app/_helpers/caminho_helper';
import { SobreService } from 'src/app/data/service/domain/SobreService';
import { InformacoesContatoService } from 'src/app/data/service/domain/InformacoesContatoService';
import { MensagensService } from 'src/app/data/service/domain/MensagensService';
import { CandidatoService } from 'src/app/data/service/domain/CandidatoService';

import { AuthenticationService } from 'src/app/core/service/authentication/authentication.service';
import { fade } from 'src/app/animations';
import { Mensagens } from 'src/app/data/schema/domain/Mensagens';

@Component({
  selector: 'quem-sou',
  templateUrl: './quem-sou.component.html',
  styleUrls: ['./quem-sou.component.css'],
  animations:[fade]
})

export class QuemSouComponent implements OnInit {

  
  constructor(private SobreService: SobreService, 
    private InfoContatoService: InformacoesContatoService,
    private CandidatoService: CandidatoService,
    private MensagensService: MensagensService,
    private authenticationService: AuthenticationService,
	) 
	{ 
    this.Mensagens = this.MensagensService.ObterTeste();  
     //this.MensagensService.Ler().subscribe(x => this.Mensagens = x[0]);
	  this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  
  loading = false;

  Sobre:Collections.Sobre;
  InformacaoContato:Collections.InformacoesContato;
  Mensagens:Mensagens;
  currentUser: Collections.User;

  @Input() Candidato: Candidato;

  ngOnInit(): void {
    this.loading = true;
  }

}
