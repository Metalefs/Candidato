import { Component, OnInit } from '@angular/core';
import { RedeSocial } from 'src/app/data/schema/RedeSocial';
import { Candidato } from 'src/app/data/schema/domain';
import { CandidatoService } from 'src/app/data/service/domain';
import { ServicoRedesSociais } from 'src/app/data/service/ServicoRedesSociais';
import { CaminhoLogo,ObterImagemLogoCampanhaCandidato } from 'src/app/_helpers/caminho_helper';
import { slide } from 'src/app/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slide]
})
export class HomeComponent implements OnInit {
  redes: RedeSocial[] = [];
  Candidato:Candidato;
  constructor(private CandidatoService:CandidatoService, 
    private ServicoRedesSociais:ServicoRedesSociais) {

  }
  ObterImagemLogoCampanhaCandidato(){
    return ObterImagemLogoCampanhaCandidato();
  }
  ngOnInit(): void {
    this.CandidatoService.Ler().subscribe(x=>{
      this.Candidato = x;
      this.redes = this.ServicoRedesSociais.GetAllRedesSociais(this.Candidato);
    });

  }

}
