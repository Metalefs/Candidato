import { Component, OnInit, Input } from '@angular/core';
import { Projeto } from 'src/app/data/schema/domain';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { ProjetoService } from 'src/app/data/service/domain';

@Component({
  selector: 'app-projeto-card',
  templateUrl: './projeto-card.component.html',
  styleUrls: ['./projeto-card.component.css']
})
export class ProjetoCardComponent implements OnInit {
  @Input()
  projeto:Projeto;
  faLike = faThumbsUp;
  Gostou:boolean = false;
  constructor(private ProjetoService: ProjetoService) { }
  like(){
    if(this.Gostou)
      return;
    this.projeto.Likes++;
    this.ProjetoService.Like(this.projeto.Identificador);
    this.Gostou = true;
  }
  ngOnInit(): void {
  }

}
