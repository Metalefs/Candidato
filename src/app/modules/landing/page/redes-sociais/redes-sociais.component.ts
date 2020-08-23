import { Component, OnInit, Input } from '@angular/core';
import { RedeSocial } from 'src/app/data/schema/RedeSocial';
import { fade } from 'src/app/animations';

@Component({
  selector: 'app-redes-sociais',
  templateUrl: './redes-sociais.component.html',
  styleUrls: ['./redes-sociais.component.css'],
  animations: [fade]
})
export class RedesSociaisComponent implements OnInit {
  @Input()
  redes: RedeSocial[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
