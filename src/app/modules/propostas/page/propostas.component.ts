import { Component, OnInit } from '@angular/core';
import { MensagensService } from 'src/app/data/service/domain/MensagensService';
import { Mensagens } from 'src/app/data/schema/domain/Mensagens';
import { PropostaService,CandidatoService } from 'src/app/data/service/domain/';
import { Proposta,Candidato } from 'src/app/data/schema/domain/';

import { fade } from 'src/app/animations';
import { Album } from 'src/app/data/schema/Album';
import { LightboxEvent, LIGHTBOX_EVENT } from 'ngx-lightbox';
import { Router } from '@angular/router';

import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'propostas',
  templateUrl: './propostas.component.html',
  styleUrls: ['./propostas.component.css'],
})
export class PropostasComponent implements OnInit {
  isMobile:boolean = false;
  width:number = window.innerWidth;
  height:number = window.innerHeight;

  Propostas:Proposta[] = [];
  categorias:Array<string> = [];
  _albums:Array<Album> = [];
  Mensagens:Mensagens;
  cards = 0;
  Candidato:Candidato;

  constructor(private MensagensService: MensagensService,
     private CandidatoService:CandidatoService,
     private PropostaService:PropostaService, 
     private deviceService: DeviceDetectorService) {
    
  }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile() || this.deviceService.isTablet() ;
    this.PropostaService.Ler().subscribe(x => {
      this.Propostas = x;
      // x.forEach(p=>{

      //     const album = {
      //       src: p.FotoSrc,
      //       caption: p.Nome,
      //       thumb: p.Descricao
      //     };
      
      //   this._albums.push(album);
      //   console.log(this._albums);
        
      // })
    });
    this.CandidatoService.Ler().subscribe(x=>{
      this.Candidato = x;
    });
    this.Mensagens = this.MensagensService.ObterTeste();
  }

}
