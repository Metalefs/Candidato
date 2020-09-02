import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/animations';
import { faMobile, faDesktop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  animations:[fade]
})
export class FeedComponent implements OnInit {
  FaMobile = faMobile;
  FaDesktop = faDesktop;
  constructor() { }

  ngOnInit(): void {
  }

}
