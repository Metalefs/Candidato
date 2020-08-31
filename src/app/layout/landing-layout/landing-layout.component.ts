import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthenticationService } from 'src/app/core/service/authentication/authentication.service';
import { fade, slider, slide } from 'src/app/animations';

import { CandidatoService } from 'src/app/data/service/domain/CandidatoService';
import { ServicoPaginas } from 'src/app/data/service/ServicoPaginas';
import { OpcaoNavbarFA } from 'src/app/data/schema/OpcoesNavbar';
import { Candidato } from 'src/app/data/schema/domain/Candidato';
import { NavState } from '../content-layout/content-layout.component';

@Component({
  selector: 'landing-layout',
  templateUrl: './landing-layout.component.html',
  styleUrls: ['./landing-layout.component.css']
})
export class LandingLayoutComponent implements OnInit {

  constructor(
    private ServicoPaginas: ServicoPaginas,
    private CandidatoService: CandidatoService,
    private authenticationService: AuthenticationService,
  ) {
    this.paginas = ServicoPaginas.GetAllPages();
    this.Candidato = CandidatoService.ObterTeste();
    this.candidato_bg=`url(${this.Candidato.FotoCapa})`;
  }
  opened =true;
  candidato_bg:string;
  Candidato:Candidato;
  title = "Candidato";
  paginas: OpcaoNavbarFA[] = [];
  NavState:NavState = {open : false};
  
  @ViewChild('canvasEl') canvasEl: ElementRef;
  @ViewChild('MobilecanvasEl') MobilecanvasEl: ElementRef;
  @ViewChild('canvasContainer') container: ElementRef;
  private c: CanvasRenderingContext2D;
  ToggleNav(){
    this.NavState.open = this.NavState.open ? false : true;
  }
  CloseNav(){
    if(this.NavState.open)
      this.NavState.open = false;
  }
  prepareRoute(outlet: RouterOutlet) {
    //return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  ngOnInit(): void {
       this.canvasDot();
  }
  canvasDot(){
    if(this.MobilecanvasEl == undefined)
      return
    (this.MobilecanvasEl.nativeElement as HTMLCanvasElement).height = (this.container.nativeElement as HTMLDivElement).offsetHeight;
    (this.MobilecanvasEl.nativeElement as HTMLCanvasElement).width  = (this.container.nativeElement as HTMLDivElement).clientWidth;
    
    let ctx = (this.MobilecanvasEl.nativeElement as HTMLCanvasElement).getContext('2d');
    let canvas = (this.MobilecanvasEl.nativeElement as HTMLCanvasElement);    
    //let x;
    let y;
        
    var stars = [], // Array that contains the stars
    FPS = 60, // Frames per second
    x = 15, // Number of stars
    mouse = {
      x: 0,
      y: 0
    };  // mouse location

    // Push stars to array

    for (var i = 0; i < x; i++) {
    stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1 + 1,
    vx: Math.floor(Math.random() * 50) - 25,
    vy: Math.floor(Math.random() * 50) - 25
    });
    }

    // Draw the scene

    function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.globalCompositeOperation = "lighter";

    for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];

    ctx.fillStyle = "rgba(255,255,255,.5)";
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.stroke();
    }

    ctx.beginPath();
    for (var i = 0, x = stars.length; i < x; i++) {
    var starI = stars[i];
    ctx.moveTo(starI.x,starI.y); 
    if(distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
    for (var j = 0, x = stars.length; j < x; j++) {
      var starII = stars[j];
      if(distance(starI, starII) < 150) {
        //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
        ctx.lineTo(starII.x,starII.y); 
      }
    }
    }
    ctx.lineWidth = 0.05;
    ctx.strokeStyle = 'white';
    ctx.stroke();
    }

    function distance( point1, point2 ){
    var xs = 0;
    var ys = 0;

    xs = point2.x - point1.x;
    xs = xs * xs;

    ys = point2.y - point1.y;
    ys = ys * ys;

    return Math.sqrt( xs + ys );
    }

    // Update star locations

    function update() {
    for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];

    s.x += s.vx / FPS;
    s.y += s.vy / FPS;

    if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
    if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
    }
    }

    canvas.addEventListener('mousemove', function(e){
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    });

    // Update and draw

    function tick() {
    draw();
    update();
    requestAnimationFrame(tick);
    }

    tick();
  }
}
