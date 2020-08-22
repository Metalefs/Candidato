import { Component, OnInit } from '@angular/core';

import { InformacoesContatoService } from 'src/app/data/service/domain/InformacoesContatoService';
import { Collections } from 'src/app/data/schema/Collections';
import { PartialObserver } from 'rxjs';

@Component({
  selector: 'app-icone-whatsapp',
  templateUrl: './icone-whatsapp.component.html',
  styleUrls: ['./icone-whatsapp.component.css']
})

export class IconeWhatsappComponent implements OnInit {

  Whatsapp:string = null;
  
  constructor(private api: InformacoesContatoService) {  }

  LerInformacoesContato() {
    this.api.Ler().subscribe(data=>{
      this.Whatsapp = data[0].Whatsapp;
    });
  }

  ngOnInit() {
    this.LerInformacoesContato();
  }

}
