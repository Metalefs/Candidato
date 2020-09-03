import { Component, OnInit, Input } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { IdealService,CandidatoService } from 'src/app/data/service/domain';
import { Candidato, Ideal } from 'src/app/data/schema/domain';
import { ServicoRedesSociais } from 'src/app/data/service/ServicoRedesSociais'; 
import { RedeSocial } from 'src/app/data/schema/RedeSocial';

@Component({
  selector: 'oque-penso',
  templateUrl: './oque-penso.component.html',
  styleUrls: ['./oque-penso.component.css']
})
export class OquePensoComponent implements OnInit {
  FaDownload = faDownload;
  
  @Input() Ideais:Ideal[];
  
  constructor(
     private ServicoRedesSociais:ServicoRedesSociais) { 
    }
    
    ngOnInit(): void {
  }

}
