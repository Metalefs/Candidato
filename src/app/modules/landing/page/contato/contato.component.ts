import { Component, OnInit } from '@angular/core';

import { InformacoesContatoService } from 'src/app/data/service/domain/InformacoesContatoService';
import { Collections } from 'src/app/data/schema/Collections';
import { PartialObserver } from 'rxjs';

@Component({
  selector: 'contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})

export class ContatoComponent implements OnInit {

  InformacoesContato:Collections.InformacoesContato = null;
  
  constructor(public api: InformacoesContatoService) {  }

  LerInformacoesContato() {
    if(localStorage.getItem("InformacaoContato"))
      this.InformacoesContato = JSON.parse(localStorage.getItem("InformacaoContato"))
    else
    this.api.Ler().subscribe(data=>{
      this.InformacoesContato = data[0];
      localStorage.setItem("InformacaoContato",JSON.stringify(this.InformacoesContato))
    });
  }

  ngOnInit() {
    this.LerInformacoesContato();
  }

}
