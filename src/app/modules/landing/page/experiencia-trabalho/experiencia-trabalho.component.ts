import { Component, OnInit } from '@angular/core';
import {ExperienciaTrabalhoService,MensagensService} from 'src/app/data/service/domain/index';
import {ExperienciaTrabalho,Mensagens} from 'src/app/data/schema/domain/index';

@Component({
  selector: 'app-experiencia-trabalho',
  templateUrl: './experiencia-trabalho.component.html',
  styleUrls: ['./experiencia-trabalho.component.css']
})
export class ExperienciaTrabalhoComponent implements OnInit {
  ExperienciasTrabalho:ExperienciaTrabalho[] = [];
  Mensagens:Mensagens;
  constructor(private ExperienciaTrabalhoService:ExperienciaTrabalhoService,
    private MensagensService:MensagensService) {

   }

  ngOnInit(): void {
    //this.MensagensService.Ler().subscribe(x=>this.Mensagens = x);
     //this.ExperienciaTrabalhoService.Ler().subscribe(x=>this.ExperienciasTrabalho = x);
  }

}
