import { Component, OnInit, Input } from '@angular/core';
import { Candidato } from 'src/app/data/schema/domain/Candidato';

@Component({
  selector: 'app-cartao-candidato',
  templateUrl: './cartao-candidato.component.html',
  styleUrls: ['./cartao-candidato.component.css']
})
export class CartaoCandidatoComponent implements OnInit {
  @Input()
  Candidato: Candidato;
  constructor() { }

  ngOnInit(): void {
  }

}
