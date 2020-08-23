import { NgModule } from '@angular/core';

import { ContatoComponent } from './page/contato/contato.component';
import { HeroComponent } from './page/hero/hero.component';
import { LandingPageComponent } from './page/landing-page.component';
import { LandingPageRoutes } from './landing.routing';

import { SharedModule } from 'src/app/shared/shared.module';
import { RedesSociaisComponent } from './page/redes-sociais/redes-sociais.component';
import { CartaoCandidatoComponent } from './page/cartao-candidato/cartao-candidato.component';

@NgModule({
  declarations: [
    ContatoComponent,
    HeroComponent,
    LandingPageComponent,
    RedesSociaisComponent,
    CartaoCandidatoComponent
  ],
  imports: [
    SharedModule,
    LandingPageRoutes
  ],
  exports: [],
  providers: []
})
export class LandingPageModule {}
