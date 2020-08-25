import { Component, OnInit } from '@angular/core';
import { ExperienciaTrabalhoService} from 'src/app/data/service/domain/ExperienciaTrabalhoService';
import { ExperienciaTrabalho} from 'src/app/data/schema/domain/ExperienciaTrabalho';
import { MensagensService } from 'src/app/data/service/domain/MensagensService';
import { Mensagens } from 'src/app/data/schema/domain/Mensagens';
@Component({
  selector: 'sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  ExperienciasTrabalho:ExperienciaTrabalho[] = [];
  Mensagens:Mensagens;
  constructor(private MensagensService: MensagensService, private ExperienciaTrabalhoService:ExperienciaTrabalhoService) { 
    ExperienciaTrabalhoService.Ler().subscribe(x=>this.ExperienciasTrabalho = x);
  }

  ngOnInit(): void {
  }

}
