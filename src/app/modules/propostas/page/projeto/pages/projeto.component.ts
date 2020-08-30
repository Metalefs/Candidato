import { Component, OnInit } from '@angular/core';
import { Projeto, Candidato } from 'src/app/data/schema/domain';
import { ProjetoService,CandidatoService } from 'src/app/data/service/domain';
import { Router, ActivatedRoute } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import { Album } from 'src/app/data/schema/Album';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent implements OnInit {
  _albums:Array<Album> = [];
  Projeto:Projeto;
  Candidato:Candidato;
  faLike = faThumbsUp;
  Gostou:boolean = false;
  constructor(
    private ProjetoService:ProjetoService,
    private CandidatoService:CandidatoService,
    private _Activatedroute:ActivatedRoute,
    private Lightbox:Lightbox
  ) {
  }


  open(index: number): void {
    this.Lightbox.open(this._albums, index);
  }
  like(){
    if(this.Gostou)
      return;
    this.Projeto.Likes++;
    this.ProjetoService.Like(this.Projeto.Identificador);
    this.Gostou = true;
  }
  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      let ProjetoId = parseInt(params.get('id')); 
      this.Projeto = this.ProjetoService.Filtrar(ProjetoId)[0];
      const album = {
        src: this.Projeto.FotoSrc,
        caption: this.Projeto.Nome,
        thumb: this.Projeto.Descricao
      };
      this._albums.push(album);
      console.log(this.Projeto);
      this.Candidato = this.CandidatoService.Filtrar(this.Projeto.IdentificadorCandidato)[0];
    });
    
  }

}
