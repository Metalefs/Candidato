import { Component, Input, OnInit } from '@angular/core';
import { slide } from 'src/app/animations';
import { Candidato } from 'src/app/data/schema/domain';

@Component({
  selector: 'app-desktop-view',
  templateUrl: './desktop-view-component.component.html',
  styleUrls: ['./desktop-view-component.component.css'],
  animations: [slide]
})
export class DesktopViewComponent implements OnInit {
  @Input() Candidato : Candidato;
  constructor() { }

  ngOnInit(): void {
  }

}
