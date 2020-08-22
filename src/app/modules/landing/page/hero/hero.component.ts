import { Component, OnInit, NgModule } from '@angular/core';

import { Collections } from 'src/app/data/schema/Collections';
import { SobreService } from 'src/app/data/service/domain/SobreService';
import { InformacoesContatoService } from 'src/app/data/service/domain/InformacoesContatoService';

import { AuthenticationService } from 'src/app/core/service/authentication/authentication.service';
import { fade } from 'src/app/animations';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations:[fade]
})

export class HeroComponent implements OnInit {
  loading = false;
  Sobre:Collections.Sobre;
  InformacaoContato:Collections.InformacoesContato;
  currentUser: Collections.User;
  redes: string[];
  constructor(private SobreService: SobreService, 
    private InfoContatoService: InformacoesContatoService,
    private authenticationService: AuthenticationService,
	) 
	{ 
	  this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
	}

  async LerSobre(){
    
    this.SobreService.Ler().subscribe(data=>{
      this.Sobre = data[0];
      localStorage.setItem("Sobre",JSON.stringify(this.Sobre))
    });
  }

  async LerInfoContato(){
   
    this.InfoContatoService.Ler().subscribe(data=>{
      this.InformacaoContato = data[0];
      localStorage.setItem("InformacaoContato",JSON.stringify(this.InformacaoContato))
	    this.loading = false;
    });
  }

  ngOnInit(): void {
    this.loading = true;
    this.LerSobre();
    this.LerInfoContato();
  }

}
