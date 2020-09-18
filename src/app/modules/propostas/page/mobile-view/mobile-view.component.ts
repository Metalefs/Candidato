import { Component, Input, OnInit } from '@angular/core';
import { Candidato, Mensagens, Proposta } from '../../../../data/schema/domain';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CaixaSugestaoComponent } from '../shared/DialogComponents/caixa-sugestao/caixa-sugestao.component';

import { PropostaService,CandidatoService } from 'src/app/data/service/domain/';

@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.css']
})
export class MobileViewComponent implements OnInit {

  @Input() Candidato:Candidato;
  @Input() Propostas:Proposta[];
  @Input() Mensagens:Mensagens;
  constructor(private dialog: MatDialog, 
    private _snackBar: MatSnackBar,
    private CandidatoService:CandidatoService,
    private PropostaService:PropostaService, 
    ) { }

  
  AbrirCaixaSugestao(){
    const dialogRef = this.dialog.open(CaixaSugestaoComponent,  {
      width:"90%"
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result && result != ""){
        this.CandidatoService.EnviarSugestao(result).subscribe(x=>{
          this.openSnackBar(`Sua sugestão ${result}, foi enviada com sucesso`);
        });
      }
      else{
          return;
      }
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Fechar', {
      duration: 5000
    });
  }
  

  ngOnInit(): void {
  }

}
