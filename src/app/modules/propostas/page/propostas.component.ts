import { Component, OnInit } from '@angular/core';
import { MensagensService } from 'src/app/data/service/domain/MensagensService';
import { Mensagens } from 'src/app/data/schema/domain/Mensagens';
import { PropostaService } from 'src/app/data/service/domain/PropostaService';

import { AuthenticationService } from 'src/app/core/service/authentication/authentication.service';
import { Lightbox } from 'ngx-lightbox';

import { fade } from 'src/app/animations';
import { Proposta } from 'src/app/data/schema/domain/';
import { Album } from 'src/app/data/schema/Album';
import { LightboxEvent, LIGHTBOX_EVENT } from 'ngx-lightbox';
import { Router } from '@angular/router';

@Component({
  selector: 'propostas',
  templateUrl: './propostas.component.html',
  styleUrls: ['./propostas.component.css']
})
export class PropostasComponent implements OnInit {
  private window: Window;
  Propostas:Proposta[] = [];
  categorias:Array<string> = [];
  _albums:Array<Album> = [];
  Mensagens:Mensagens;
  cards = 0;
  constructor(private MensagensService: MensagensService,
     private PropostaService:PropostaService, 
     private Lightbox:Lightbox,
     private Router:Router) {

	  //   this.PropostaService.Ler().subscribe(x => {
    //       this.Propostas = x;
    //       x.forEach(p=>{

    //           const album = {
    //             src: p.FotoSrc,
    //             caption: p.Nome,
    //             thumb: p.Descricao
    //           };
          
    //         this._albums.push(album);
    //         console.log(this._albums);
            
    //       })
    // });
    
  }

  navigateToProject(id: string): void {
    this.Router.navigateByUrl(`/proposta/${id}`);
  }

  ngOnInit(): void {
    this.Propostas = this.PropostaService.ObterTeste();
    this.Propostas.forEach(p=>{

        const album = {
          src: p.FotoSrc,
          caption: p.Nome,
          thumb: p.Descricao
        };
        this.categorias.push(p.Categoria);
        this.categorias = this.categorias.filter((v, i, a) => a.indexOf(v) === i);

        this._albums.push(album);

    }); 
	  this.Mensagens = this.MensagensService.ObterTeste();//this.MensagensService.Ler().subscribe(x => this.Mensagens = x[0]);
   
  }

}
