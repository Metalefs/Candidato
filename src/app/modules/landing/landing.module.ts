import { NgModule } from '@angular/core';

import { ContatoComponent } from './page/contato/contato.component';
import { HeroComponent } from './page/hero/hero.component';
import { LandingPageComponent } from './page/landing-page.component';
import { LandingPageRoutes } from './landing.routing';

import { RedesSociaisComponent } from './page/redes-sociais/redes-sociais.component';
import { CartaoCandidatoComponent } from './page/cartao-candidato/cartao-candidato.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { FeedModule } from 'src/app/modules/landing/page/feed/feed.module';
import { BiografiaModule } from 'src/app/modules/landing/page/biografia/biografia.module';
import { ProjetosModule } from 'src/app/modules/landing/page/projetos/projetos.module';


@NgModule({
  declarations: [
    ContatoComponent,
    HeroComponent,
    LandingPageComponent,
    RedesSociaisComponent,
    CartaoCandidatoComponent
  ],
  imports: [
    FeedModule,
    BiografiaModule,
    ProjetosModule,
    SharedModule,
    LandingPageRoutes
  ],
  exports: [ 
    FeedModule,
    BiografiaModule,
    ProjetosModule
  ],
  providers: []
})
export class LandingPageModule {}
