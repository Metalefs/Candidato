import { Component, Input, OnInit } from '@angular/core';
import { slide } from 'src/app/animations';
import { Candidato } from 'src/app/data/schema/domain';
import { RedeSocial } from 'src/app/data/schema/RedeSocial';

@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.css'],
  animations: [slide]
})
export class MobileViewComponent implements OnInit {
  @Input() redes: RedeSocial[];
  @Input() ImagemLogo : string;
  @Input() Candidato : Candidato;
  constructor() { }

  ngOnInit(): void {
  }

}
