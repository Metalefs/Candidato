import { Component, Input, OnInit } from '@angular/core';
import { Candidato, Pensamento } from 'src/app/data/schema/domain';
import { RedeSocial } from 'src/app/data/schema/RedeSocial';
@Component({
  selector: 'app-desktop-view',
  templateUrl: './desktop-view.component.html',
  styleUrls: ['./desktop-view.component.css']
})
export class DesktopViewComponent implements OnInit {
  @Input() Candidato: Candidato;
  @Input() Ideais:Pensamento;
  @Input() redes: RedeSocial[]
  constructor() { }

  ngOnInit(): void {
  }

}
