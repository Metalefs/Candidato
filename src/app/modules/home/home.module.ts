import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home.routing';
import { BiografiaPreviewModule } from './page/biografia-preview/biografia-preview.module';
import { PropostasPreviewComponent } from './page/propostas-preview/propostas-preview.component';
import { FeedPreviewComponent } from './page/feed-preview/feed-preview.component';
import { ApresentacaoCandidatoComponent } from './page/apresentacao-candidato/apresentacao-candidato.component';

@NgModule({
  declarations: [
    HomeComponent,
    FeedPreviewComponent,
    PropostasPreviewComponent,
    ApresentacaoCandidatoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BiografiaPreviewModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
