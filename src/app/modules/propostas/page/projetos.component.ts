import { Component, OnInit } from '@angular/core';
import { MensagensService } from 'src/app/data/service/domain/MensagensService';
import { Mensagens } from 'src/app/data/schema/domain/Mensagens';
import { ProjetoService } from 'src/app/data/service/domain/ProjetoService';

import { AuthenticationService } from 'src/app/core/service/authentication/authentication.service';
import { Lightbox } from 'ngx-lightbox';

import { fade } from 'src/app/animations';
import { Projeto } from 'src/app/data/schema/domain/Projeto';
import { Album } from 'src/app/data/schema/Album';
import { LightboxEvent, LIGHTBOX_EVENT } from 'ngx-lightbox';
import { Router } from '@angular/router';

@Component({
  selector: 'projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {
  private window: Window;
  Projetos:Projeto[] = [];
  categorias:Array<string> = [];
  _albums:Array<Album> = [];
  Mensagens:Mensagens;
  cards = 0;
  constructor(private MensagensService: MensagensService,
     private ProjetoService:ProjetoService, 
     private Lightbox:Lightbox,
     private Router:Router) {

	  //   this.ProjetoService.Ler().subscribe(x => {
    //       this.Projetos = x;
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

  get_delay(){
    
    return this.cards++ * 500;

  }

  navigateToProject(id: string): void {
    this.Router.navigateByUrl(`/projeto/${id}`);
  }

  ngOnInit(): void {
    this.Projetos = this.ProjetoService.ObterTeste();
    this.Projetos.forEach(p=>{

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
