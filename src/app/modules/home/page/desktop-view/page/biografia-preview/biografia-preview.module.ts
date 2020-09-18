import { NgModule } from '@angular/core';
import { NgxScrollspyModule } from '@uniprank/ngx-scrollspy';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule  } from 'ngx-page-scroll';

import { QuemSouComponent } from './page/quem-sou/quem-sou.component';
import { BiografiaPreviewComponent } from './biografia-preview.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { pensamentoComponent } from './page/oque-penso/oque-penso.component';
import { RealizacaoComponent } from './page/experiencia-trabalho/experiencia-trabalho.component';

@NgModule({
  declarations: [
    pensamentoComponent,
    BiografiaPreviewComponent,
    QuemSouComponent,
    RealizacaoComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [ 
    pensamentoComponent,
    BiografiaPreviewComponent,
    QuemSouComponent,
    RealizacaoComponent
  ],
  providers: []
})
export class BiografiaPreviewModule {}
