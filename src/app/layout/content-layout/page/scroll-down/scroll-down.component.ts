import { Component, OnInit } from '@angular/core';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scroll-down',
  templateUrl: './scroll-down.component.html',
  styleUrls: ['./scroll-down.component.css']
})
export class ScrollDownComponent implements OnInit {

  angleDown = faAngleDoubleDown;
  constructor() { }

  ngOnInit(): void {
  }

}
