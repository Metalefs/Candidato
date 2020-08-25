import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthenticationService } from 'src/app/core/service/authentication/authentication.service';
import { fade, slider } from 'src/app/animations';

import { ServicoPaginas } from 'src/app/data/service/ServicoPaginas';
import { OpcaoNavbar } from 'src/app/data/schema/OpcoesNavbar';

@Component({
  selector: 'content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.css'],
  animations: [
    slider
 ]
})

export class ContentLayoutComponent implements OnInit {

  constructor(
    private ServicoPaginas: ServicoPaginas,
    private authenticationService: AuthenticationService
  ) {
    this.paginas = ServicoPaginas.GetAllPages();
  }

  title = "Candidato";
  paginas: OpcaoNavbar[] = [];
  
  ngOnInit(): void {
    // VARIABLES
    const magicalUnderlines = Array.from(document.querySelectorAll('.underline--magical'));

    const gradientAPI = 'https://gist.githubusercontent.com/wking-io/3e116c0e5675c8bcad8b5a6dc6ca5344/raw/4e783ce3ad0bcd98811c6531e40256b8feeb8fc8/gradient.json';

    // HELPER FUNCTIONS

    const randNumInRange = max => Math.floor(Math.random() * (max - 1));
    const mergeArrays = (arrOne, arrTwo) => arrOne.
    map((item, i) => `${item} ${arrTwo[i]}`).
    join(', ');

    const addBackground = elms => color => {
      elms.forEach(el => {
        el.style.backgroundImage = color;
      });
    };

    const getData = async url => {
      const response = await fetch(url);
      const data = await response.json();
      return data.data;
    };

    const addBackgroundToUnderlines = addBackground(magicalUnderlines);

    const buildGradient = obj => `linear-gradient(${obj.direction}, ${mergeArrays(obj.colors, obj.positions)})`;
    const applyGradient = async (url, callback) => {
      const data = await getData(url);
      const gradient = buildGradient(data[randNumInRange(data.length)]);
      callback(gradient);
    };

    applyGradient(gradientAPI, addBackgroundToUnderlines);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
