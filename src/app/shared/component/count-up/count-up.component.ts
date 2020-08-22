import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'count-up',
  templateUrl: './count-up.component.html',
  styleUrls: ['./count-up.component.css']
})
export class CountUpComponent implements OnInit {
  Total: number;
  constructor() { }
  async LerTotal(){
    
  }
  ngOnInit(): void {
    this.Total = 768;
    this.LerTotal();
  }

}
