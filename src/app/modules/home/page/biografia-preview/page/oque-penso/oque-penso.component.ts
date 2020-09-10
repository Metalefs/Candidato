import { Component, OnInit, Input } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { PensamentoService,CandidatoService } from 'src/app/data/service/domain';
import { Candidato, Pensamento } from 'src/app/data/schema/domain';
import { ServicoRedesSociais } from 'src/app/data/service/ServicoRedesSociais'; 
import { RedeSocial } from 'src/app/data/schema/RedeSocial';

@Component({
  selector: 'oque-penso',
  templateUrl: './oque-penso.component.html',
  styleUrls: ['./oque-penso.component.css']
})
export class pensamentoComponent implements OnInit {
  FaDownload = faDownload;
  
  @Input() Ideais:Pensamento[];
  @Input() Candidato: Candidato;
  constructor(
     private ServicoRedesSociais:ServicoRedesSociais) { 
    }
    
    ngOnInit(): void {
  }

}
