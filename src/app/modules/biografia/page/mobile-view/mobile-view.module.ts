import { SharedModule } from '../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuemSouComponent } from './page/quem-sou/quem-sou.component';
import { PensamentoComponent } from './page/oque-penso/oque-penso.component';
import { RealizacaoComponent } from './page/experiencia-trabalho/experiencia-trabalho.component';
import { MobileViewComponent } from './page/mobile-view.component';

@NgModule({
  declarations: [
    MobileViewComponent,
    QuemSouComponent,
    PensamentoComponent,
    RealizacaoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MobileViewComponent,
    QuemSouComponent,
    PensamentoComponent,
    RealizacaoComponent,
  ]
})
export class MobileViewModule { }
