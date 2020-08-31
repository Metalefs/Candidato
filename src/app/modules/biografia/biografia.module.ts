import { NgModule } from '@angular/core';
import { NgxScrollspyModule } from '@uniprank/ngx-scrollspy';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule  } from 'ngx-page-scroll';

import { InicioComponent } from './page/inicio/inicio.component';
import { BiografiaComponent } from './page/biografia.component';
import { BiografiaRoutingModule } from './biografia.routing';

import { SharedModule } from 'src/app/shared/shared.module';
import { SobreComponent } from './page/sobre/sobre.component';
import { ExperienciaTrabalhoComponent } from './page/experiencia-trabalho/experiencia-trabalho.component';

@NgModule({
  declarations: [
    InicioComponent,
    BiografiaComponent,
    SobreComponent,
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
