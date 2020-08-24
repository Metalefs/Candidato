import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
    
  title = "Partido";
  
  desktop = "is-hidden-touch";
  mobile = "is-hidden-desktop";
  
  constructor() {
  }
  ngOnInit(){

  }

}
