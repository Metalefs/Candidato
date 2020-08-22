import { Component, OnInit, Input } from '@angular/core';
import { RedeSocial } from 'src/app/data/schema/RedeSocial';

@Component({
  selector: 'app-redes-sociais',
  templateUrl: './redes-sociais.component.html',
  styleUrls: ['./redes-sociais.component.css']
})
export class RedesSociaisComponent implements OnInit {
  @Input()
  redes: RedeSocial[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
