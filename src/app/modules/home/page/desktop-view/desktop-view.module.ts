import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiografiaPreviewModule } from './page/biografia-preview/biografia-preview.module';
import { PropostasPreviewComponent } from './page/propostas-preview/propostas-preview.component';
import { FeedPreviewComponent } from './page/feed-preview/feed-preview.component';
import { ApresentacaoCandidatoComponent } from './page/apresentacao-candidato/apresentacao-candidato.component';
import { DesktopViewComponent} from './desktop-view-component.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DesktopViewComponent,
    FeedPreviewComponent,
    PropostasPreviewComponent,
    ApresentacaoCandidatoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BiografiaPreviewModule
  ],
  exports: [
    DesktopViewComponent,
    FeedPreviewComponent,
    PropostasPreviewComponent,
    ApresentacaoCandidatoComponent,
    BiografiaPreviewModule
  ]
})
export class DesktopViewModule { }
