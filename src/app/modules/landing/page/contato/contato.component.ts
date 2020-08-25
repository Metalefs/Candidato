import { Component, OnInit } from '@angular/core';

import { InformacoesContatoService } from 'src/app/data/service/domain/InformacoesContatoService';
import { Collections } from 'src/app/data/schema/Collections';
import { PartialObserver } from 'rxjs';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})

export class ContatoComponent implements OnInit {
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  InformacoesContato:Collections.InformacoesContato = null;
  
  constructor(public api: InformacoesContatoService) {  }

  LerInformacoesContato() {
    this.api.Ler().subscribe(data=>{
      this.InformacoesContato = data[0];
      localStorage.setItem("InformacaoContato",JSON.stringify(this.InformacoesContato))
    });
  }

  ngOnInit() {
    //this.LerInformacoesContato();
  }

}
