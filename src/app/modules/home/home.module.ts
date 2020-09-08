import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home.routing';
import { BiografiaPreviewComponent } from './page/biografia-preview/biografia-preview.component';
import { PropostasPreviewComponent } from './page/propostas-preview/propostas-preview.component';
import { FeedPreviewComponent } from './page/feed-preview/feed-preview.component';
import { ApresentacaoCandidatoComponent } from './page/apresentacao-candidato/apresentacao-candidato.component';

@NgModule({
  declarations: [
    HomeComponent,
    BiografiaPreviewComponent,
    PropostasPreviewComponent,
    FeedPreviewComponent,
    ApresentacaoCandidatoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
