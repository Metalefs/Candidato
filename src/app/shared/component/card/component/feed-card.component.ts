import { Component, OnInit } from '@angular/core';

import { Collections } from 'src/app/data/schema/Collections';
//import { FeedHelper } from 'src/app/_helpers/feed_helper';
import { InformacoesContatoService } from 'src/app/data/service/domain/InformacoesContatoService';

@Component({
  selector: 'feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  Feeds: any;//Collections.Feed[] = null;
  Instagram:string;
  constructor(/* private FeedHelper: FeedHelper,*/
    private InfoContatoService: InformacoesContatoService) {

  }

  LerFeed() {
    // if(sessionStorage.getItem("Feed"))
    //   this.Feeds = JSON.parse(sessionStorage.getItem("Feed"))
    // else
    // this.api.Feeds().subscribe(data=>{
    //   console.log(data);
    //   this.Feeds = data;
    //   this.Feeds.sort(function(a, b){return parseInt(a.Dia)-parseInt(b.Dia)})
    //   this.Feeds.forEach(x=>{
    //     x.Dia = this.FeedHelper.ObterDiaSemana(x.Dia);
    //   })
    //   sessionStorage.setItem("Feed", JSON.stringify(this.Feeds))
    // });
  }

  LerInfoContato(){
    this.InfoContatoService.Ler().subscribe(x=> this.Instagram = x[0].Instagram);
  }

  ngOnInit() {
    //this.LerFeed();
    this.LerInfoContato();
  }

}
