import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/animations';
import { faMobile, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { CandidatoService } from 'src/app/data/service/domain/'
import { Candidato }        from 'src/app/data/schema/domain/'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  animations:[fade]
})
export class FeedComponent implements OnInit {
  FaMobile = faMobile;
  FaDesktop = faDesktop;
  Candidato:Candidato;
  constructor(private CandidatoService:CandidatoService) { }

  ngOnInit(): void {
    this.Candidato = this.CandidatoService.ObterTeste();
  }

}
