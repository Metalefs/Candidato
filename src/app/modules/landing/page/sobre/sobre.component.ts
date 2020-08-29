import { Component, OnInit } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { MensagensService,CandidatoService } from 'src/app/data/service/domain/index';
import { Candidato, Mensagens, } from 'src/app/data/schema/domain/index';
import { ServicoRedesSociais } from 'src/app/data/service/ServicoRedesSociais'; 
import { RedeSocial } from 'src/app/data/schema/RedeSocial';

@Component({
  selector: 'sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
  FaDownload = faDownload;
  Mensagens:Mensagens;
  redes: RedeSocial[] = [];
  Candidato:Candidato;
  
  constructor(private MensagensService: MensagensService,
     private CandidatoService:CandidatoService,
     private ServicoRedesSociais:ServicoRedesSociais) { 
       
  }

  ngOnInit(): void {
    this.redes = this.ServicoRedesSociais.GetAllRedesSociais();
    this.Candidato = this.CandidatoService.ObterTeste();
    this.Mensagens = this.MensagensService.ObterTeste();//this.MensagensService.Ler().subscribe(x=>this.Mensagens = x);
  }

}
