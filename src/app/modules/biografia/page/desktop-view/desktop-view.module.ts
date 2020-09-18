import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuemSouComponent } from './page/quem-sou/quem-sou.component';
import { PensamentoComponent } from './page/oque-penso/oque-penso.component';
import { RealizacaoComponent } from './page/experiencia-trabalho/experiencia-trabalho.component';
import { DesktopViewComponent } from './page/desktop-view.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [
    DesktopViewComponent,
    QuemSouComponent,
    PensamentoComponent,
    RealizacaoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DesktopViewComponent,
    QuemSouComponent,
    PensamentoComponent,
    RealizacaoComponent,
  ]
})
export class DesktopViewModule { }
