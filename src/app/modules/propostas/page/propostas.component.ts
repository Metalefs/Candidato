import { Component, OnInit } from '@angular/core';
import { MensagensService } from 'src/app/data/service/domain/MensagensService';
import { Mensagens } from 'src/app/data/schema/domain/Mensagens';
import { PropostaService,CandidatoService } from 'src/app/data/service/domain/';

import { MatDialog } from '@angular/material/dialog';

import { fade } from 'src/app/animations';
import { Proposta,Candidato } from 'src/app/data/schema/domain/';
import { Album } from 'src/app/data/schema/Album';
import { LightboxEvent, LIGHTBOX_EVENT } from 'ngx-lightbox';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

import { CaixaSugestaoComponent } from 'src/app/modules/propostas/page/DialogComponents/caixa-sugestao/caixa-sugestao.component';

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
  Candidato:Candidato;

  constructor(private MensagensService: MensagensService,
     private CandidatoService:CandidatoService,
     private PropostaService:PropostaService, 
     private dialog: MatDialog,
     private _snackBar: MatSnackBar,
     private Router:Router) {
    
  }

  AbrirCaixaSugestao(){

    const dialogRef = this.dialog.open(CaixaSugestaoComponent,  {
      width:"50%"
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result && result != ""){
        this.CandidatoService.EnviarSugestao(result).subscribe(x=>{
          this.openSnackBar(`Sua sugestão ${result}, foi enviada com sucesso`);
        });
      }
      else{
          this.openSnackBar(`Houve um problema com sua sugestão`);
      }
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Fechar', {
      duration: 5000
    });
  }

  ngOnInit(): void {
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
	  this.Mensagens = this.MensagensService.ObterTeste();//this.MensagensService.Ler().subscribe(x => this.Mensagens = x[0]);
   
  }

}
