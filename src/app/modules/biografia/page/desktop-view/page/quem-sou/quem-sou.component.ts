import { Component, OnInit, NgModule, Input } from '@angular/core';

import { Collections } from '../../../../../../data/schema/Collections';
import { RedeSocial } from '../../../../../../data/schema/RedeSocial';
import { Candidato } from '../../../../../../data/schema/domain/Candidato';
import { CaminhoLogo } from '../../../../../../_helpers/caminho_helper';
import { SobreService } from '../../../../../../data/service/domain/SobreService';
import { InformacoesContatoService } from '../../../../../../data/service/domain/InformacoesContatoService';
import { MensagensService } from '../../../../../../data/service/domain/MensagensService';
import { CandidatoService } from '../../../../../../data/service/domain/CandidatoService';

import { AuthenticationService } from '../../../../../../core/service/authentication/authentication.service';
import { fade } from '../../../../../../animations';
import { Mensagens } from '../../../../../../data/schema/domain/Mensagens';

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
