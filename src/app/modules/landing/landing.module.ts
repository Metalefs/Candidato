import { NgModule } from '@angular/core';

import { ContatoComponent } from './page/contato/contato.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { LandingPageComponent } from './page/landing-page.component';
import { LandingPageRoutes } from './landing.routing';

import { RedesSociaisComponent } from './page/redes-sociais/redes-sociais.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { FeedModule } from 'src/app/modules/landing/page/feed/feed.module';
import { BiografiaModule } from 'src/app/modules/landing/page/biografia/biografia.module';
import { ProjetosModule } from 'src/app/modules/landing/page/projetos/projetos.module';
import { NgxScrollspyModule } from '@uniprank/ngx-scrollspy';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule  } from 'ngx-page-scroll';
import { SobreComponent } from './page/sobre/sobre.component';
import { ExperienciaTrabalhoComponent } from './page/experiencia-trabalho/experiencia-trabalho.component';

@NgModule({
  declarations: [
    ContatoComponent,
    InicioComponent,
    LandingPageComponent,
    RedesSociaisComponent,
    SobreComponent,
    ExperienciaTrabalhoComponent
  ],
  imports: [
    FeedModule,
    BiografiaModule,
    ProjetosModule,
    SharedModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    NgxScrollspyModule.forRoot(),
    LandingPageRoutes
  ],
  exports: [ 
    ContatoComponent,
    FeedModule,
    BiografiaModule,
    ProjetosModule
  ],
  providers: []
})
export class LandingPageModule {}
