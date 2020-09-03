import { NgModule } from '@angular/core';
import { NgxScrollspyModule } from '@uniprank/ngx-scrollspy';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule  } from 'ngx-page-scroll';

import { QuemSouComponent } from './page/quem-sou/quem-sou.component';
import { BiografiaComponent } from './page/biografia.component';
import { BiografiaRoutingModule } from './biografia.routing';

import { SharedModule } from 'src/app/shared/shared.module';
import { OquePensoComponent } from './page/oque-penso/oque-penso.component';
import { ExperienciaTrabalhoComponent } from './page/experiencia-trabalho/experiencia-trabalho.component';

@NgModule({
  declarations: [
    OquePensoComponent,
    BiografiaComponent,
    QuemSouComponent,
    ExperienciaTrabalhoComponent
  ],
  imports: [
    SharedModule,
    BiografiaRoutingModule
  ],
  exports: [ 
  ],
  providers: []
})
export class BiografiaModule {}
