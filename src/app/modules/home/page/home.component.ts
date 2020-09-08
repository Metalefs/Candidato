import { Component, OnInit } from '@angular/core';
import { RedeSocial } from 'src/app/data/schema/RedeSocial';
import { Candidato } from 'src/app/data/schema/domain';
import { CandidatoService } from 'src/app/data/service/domain';
import { CaminhoLogo } from 'src/app/_helpers/caminho_helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  redes: RedeSocial[] = [];
  Candidato:Candidato;
  constructor(private CandidatoService:CandidatoService) {
  //  this.Candidato = CandidatoService.ObterTeste();
  }

  ngOnInit(): void {
    this.CandidatoService.Ler().subscribe(x=>{
      this.Candidato = x;
      console.log(x);
      this.redes = [
        new RedeSocial(CaminhoLogo("twitter"),"twitter",this.Candidato.twitter,"ion-social-twitter-outline"),
        new RedeSocial(CaminhoLogo("instagram"),"instagram",this.Candidato.instagram,"ion-social-instagram-outline"),
        new RedeSocial(CaminhoLogo("whatsapp"),"whatsapp",`https://wa.me/5531${this.Candidato.telefone}?text=`,"ion-social-whatsapp-outline"),
        new RedeSocial(CaminhoLogo("facebook"),"facebook",this.Candidato.facebook,"ion-social-facebook-outline"),
        new RedeSocial(CaminhoLogo("youtube"),"youtube",this.Candidato.youtube,"ion-social-youtube-outline"),
      ];
    });

  }

}
