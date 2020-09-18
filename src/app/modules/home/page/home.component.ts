import { Component, OnInit } from '@angular/core';
import { RedeSocial } from 'src/app/data/schema/RedeSocial';
import { Candidato } from 'src/app/data/schema/domain';
import { CandidatoService } from 'src/app/data/service/domain';
import { ServicoRedesSociais } from 'src/app/data/service/ServicoRedesSociais';
import { CaminhoLogo, ObterImagemLogoCampanhaCandidato } from 'src/app/_helpers/caminho_helper';
import { slide } from 'src/app/animations';
import { ResizeService, SCREEN_SIZE } from 'src/app/core/service/windowSize.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slide]
})
export class HomeComponent implements OnInit {
  redes: RedeSocial[] = [];
  isMobile: boolean;
  Candidato:Candidato;
  constructor(private CandidatoService:CandidatoService, 
    private ServicoRedesSociais:ServicoRedesSociais,
    private resizeSvc: ResizeService) {
    
  }
  ObterImagemLogoCampanhaCandidato(){
    return ObterImagemLogoCampanhaCandidato();
  }
  ngOnInit(): void {
    this.resizeSvc.IsMobile().then(x=>{
        this.isMobile = x;
    })
    this.CandidatoService.Ler().subscribe(x=>{
      this.Candidato = x;
      this.redes = this.ServicoRedesSociais.GetAllRedesSociais(this.Candidato);
    });

  }

}
