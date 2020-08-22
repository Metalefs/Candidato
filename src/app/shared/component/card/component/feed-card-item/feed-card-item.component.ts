import { Component, OnInit, Input  } from '@angular/core';
import { Collections } from 'src/app/data/schema/Collections';
@Component({
  selector: 'feed-card-item',
  templateUrl: './feed-card-item.component.html',
  styleUrls: ['./feed-card-item.component.css']
})
export class FeedCardItemComponent implements OnInit {

  // @Input()
  // Feed: Collections.Feed;
  @Input()
  Instagram: string;
  Ativo:boolean;  
  Video:boolean;  
  Caminho:string;  
  
  LinkFeedAtivo: string;
  
  constructor(/*private FeedHelper: FeedHelper*/) { 
    this.Video = false;
    this.Caminho = "";
  }

  ngOnInit(): void {
    // this.Caminho = this.FeedHelper.ObertCaminhoRecurso(this.Feed);
    // this.Ativo = this.FeedHelper.VerificarAtivo(this.Feed);
  }

}
