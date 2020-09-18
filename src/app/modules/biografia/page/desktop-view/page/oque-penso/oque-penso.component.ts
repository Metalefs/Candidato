import { Component, OnInit, Input } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { PensamentoService,CandidatoService } from '../../../../../../data/service/domain';
import { Candidato, Pensamento } from '../../../../../../data/schema/domain';
import { ServicoRedesSociais } from '../../../../../../data/service/ServicoRedesSociais'; 
import { RedeSocial } from '../../../../../../data/schema/RedeSocial';

@Component({
  selector: 'oque-penso',
  templateUrl: './oque-penso.component.html',
  styleUrls: ['./oque-penso.component.css']
})
export class PensamentoComponent implements OnInit {
  FaDownload = faDownload;
  
  @Input() Ideais:Pensamento[];
  @Input() Candidato: Candidato;
  constructor(
     private ServicoRedesSociais:ServicoRedesSociais) { 
    }
    
    ngOnInit(): void {
  }

}
