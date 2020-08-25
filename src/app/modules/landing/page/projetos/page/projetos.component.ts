import { Component, OnInit } from '@angular/core';
import { MensagensService } from 'src/app/data/service/domain/MensagensService';
import { ProjetoService } from 'src/app/data/service/domain/ProjetoService';

import { AuthenticationService } from 'src/app/core/service/authentication/authentication.service';
import { fade } from 'src/app/animations';
import { Mensagens } from 'src/app/data/schema/domain/Mensagens';
import { Projeto } from 'src/app/data/schema/domain/Projeto';
@Component({
  selector: 'projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  constructor(private MensagensService: MensagensService, private ProjetoService:ProjetoService) { 
	  this.ProjetoService.Ler().subscribe(x => {
      this.Projetos = x;
    });
	  //this.MensagensService.Ler().subscribe(x => this.Mensagens = x[0]);
  }
  Projetos:Projeto[] = [];
  Mensagens:Mensagens;

  ngOnInit(): void {

  }

}
