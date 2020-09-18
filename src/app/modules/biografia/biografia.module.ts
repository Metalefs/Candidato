import { NgModule } from '@angular/core';
import { BiografiaComponent } from './page/biografia.component';
import { BiografiaRoutingModule } from './biografia.routing';
import { QuemSouComponent } from './page/desktop-view/page/quem-sou/quem-sou.component';
import { PensamentoComponent } from './page/desktop-view/page/oque-penso/oque-penso.component';
import { RealizacaoComponent } from './page/desktop-view/page/experiencia-trabalho/experiencia-trabalho.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DesktopViewComponent } from './page/desktop-view/page/desktop-view.component';
import { MobileViewComponent } from './page/mobile-view/page/mobile-view.component';

@NgModule({
  declarations: [
    BiografiaComponent,
    DesktopViewComponent,
    MobileViewComponent,
    QuemSouComponent,
    PensamentoComponent,
    RealizacaoComponent
  ],
  imports: [
    SharedModule,
    BiografiaRoutingModule
  ],
  exports: [ 
    BiografiaComponent,
    QuemSouComponent,
    PensamentoComponent,
    RealizacaoComponent
  ],
  providers: []
})
export class BiografiaModule {}
