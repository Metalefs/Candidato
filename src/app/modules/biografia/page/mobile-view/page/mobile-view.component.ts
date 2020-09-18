import { Component, Input, OnInit } from '@angular/core';
import { Candidato, Pensamento } from 'src/app/data/schema/domain';

@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.css']
})
export class MobileViewComponent implements OnInit {
  @Input() Candidato: Candidato;
  @Input() Ideais:Pensamento;
  constructor() { }

  ngOnInit(): void {
  }

}
