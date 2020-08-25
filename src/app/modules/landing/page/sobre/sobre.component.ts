import { Component, OnInit } from '@angular/core';
import { ExperienciaTrabalhoService} from 'src/app/data/service/domain/ExperienciaTrabalhoService';
import { ExperienciaTrabalho} from 'src/app/data/schema/domain/ExperienciaTrabalho';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  ExperienciasTrabalho:ExperienciaTrabalho[] = [];
  constructor(private ExperienciaTrabalhoService:ExperienciaTrabalhoService) { 
    ExperienciaTrabalhoService.Ler().subscribe(x=>this.ExperienciasTrabalho = x);
  }

  ngOnInit(): void {
  }

}
