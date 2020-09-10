import { Component, OnInit, Input } from '@angular/core';
import { Proposta } from 'src/app/data/schema/domain';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { PropostaService } from 'src/app/data/service/domain';
import { fade } from 'src/app/animations';

@Component({
  selector: 'app-proposta-card',
  templateUrl: './proposta-card.component.html',
  styleUrls: ['./proposta-card.component.css'],
  animations: [fade]
})
export class PropostaCardComponent implements OnInit {
  @Input()
  Proposta:Proposta;
  @Input()
  Delay:any;

  isOpen = false;
  faLike = faThumbsUp;
  Gostou:boolean = false;
  constructor(private PropostaService: PropostaService) {

   }
  like(){
    if(this.Gostou ||
      localStorage.getItem("proposta"+this.Proposta.identificador))
      return;
    this.PropostaService.CurtirProposta(this.Proposta.identificador).subscribe(x=>{
      this.Proposta.qtdCurtidas++;
      this.Gostou = true;
    });
  }

  ToggleProposta(){
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
  }

}
