import { Component, OnInit, Input } from '@angular/core';
import { RedeSocial } from 'src/app/data/schema/RedeSocial';
import { fade } from 'src/app/animations';
import { ServicoRedesSociais } from 'src/app/data/service/ServicoRedesSociais';
@Component({
  selector: 'app-redes-sociais',
  templateUrl: './redes-sociais.component.html',
  styleUrls: ['./redes-sociais.component.css'],
  animations: [fade]
})
export class RedesSociaisComponent implements OnInit {
  @Input()
  redes: RedeSocial[] = [];
  constructor(private ServicoRedesSociais:ServicoRedesSociais) {
  }
  open(link:string){
    window.open(link,"_blank");
  }
  ngOnInit(): void {
    console.log(this.redes);
    // this.ServicoRedesSociais.GetAllRedesSociais();
  }

}
