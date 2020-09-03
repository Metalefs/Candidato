import { Component, OnInit, Input } from '@angular/core';
import {ExperienciaTrabalhoService,MensagensService} from 'src/app/data/service/domain/index';
import {ExperienciaTrabalho,Mensagens,Candidato} from 'src/app/data/schema/domain/index';

@Component({
  selector: 'experiencia-trabalho',
  templateUrl: './experiencia-trabalho.component.html',
  styleUrls: ['./experiencia-trabalho.component.css']
})
export class ExperienciaTrabalhoComponent implements OnInit {
  ExperienciasTrabalho:ExperienciaTrabalho[] = [];
  Mensagens:Mensagens;
  @Input() Candidato:Candidato;
  constructor(private ExperienciaTrabalhoService:ExperienciaTrabalhoService,
    private MensagensService:MensagensService) {
      this.ExperienciasTrabalho = this.ExperienciaTrabalhoService.ObterTeste();
      this.Mensagens = this.MensagensService.ObterTeste();
   }

  ngOnInit(): void {
    this.Mensagens = this.MensagensService.ObterTeste()
    //this.MensagensService.ObterTeste().subscribe(x=>this.Mensagens = x);
     //this.ExperienciaTrabalhoService.Ler().subscribe(x=>this.ExperienciasTrabalho = x);
  }

}
