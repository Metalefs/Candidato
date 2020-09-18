import { Component, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { ResizeService, SCREEN_SIZE } from 'src/app/core/service/windowSize.service';

@Component({
  selector: 'app-size-detector',
  templateUrl: './size-detector.component.html',
  styleUrls: ['./size-detector.component.css'],
  host: {
    "(window:resize)":"onWindowResize($event)"
  }
})
export class SizeDetectorComponent {
  
constructor(private elementRef: ElementRef, private resizeSvc: ResizeService) { }
  isMobile: boolean = false;
  width: number = window.innerWidth;
  height: number = window.innerHeight;
  mobileWidth: number = 760;


  onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    this.isMobile = this.width < this.mobileWidth;
    this.resizeSvc.onResize(this.width);
  }


}