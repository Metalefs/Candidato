import { Component, OnInit, Input } from '@angular/core';
import {RealizacaoService,MensagensService} from '../../../../../../data/service/domain/index';
import {Realizacao,Mensagens,Candidato} from '../../../../../../data/schema/domain/index';

@Component({
  selector: 'experiencia-trabalho',
  templateUrl: './experiencia-trabalho.component.html',
  styleUrls: ['./experiencia-trabalho.component.css']
})
export class RealizacaoComponent implements OnInit {
  ExperienciasTrabalho:Realizacao[] = [];
  Mensagens:Mensagens;
  @Input() Candidato:Candidato;
  
  constructor(private RealizacaoService:RealizacaoService,
    private MensagensService:MensagensService) {
      this.ExperienciasTrabalho = this.RealizacaoService.ObterTeste();
      this.Mensagens = this.MensagensService.ObterTeste();
   }

  ngOnInit(): void {
    this.Mensagens = this.MensagensService.ObterTeste()
    //this.MensagensService.ObterTeste().subscribe(x=>this.Mensagens = x);
  }

}
