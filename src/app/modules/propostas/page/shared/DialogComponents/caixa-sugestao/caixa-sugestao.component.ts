import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-caixa-sugestao',
  templateUrl: './caixa-sugestao.component.html',
  styleUrls: ['./caixa-sugestao.component.css']
})
export class CaixaSugestaoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CaixaSugestaoComponent>,
    ) { }


  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }   
}
