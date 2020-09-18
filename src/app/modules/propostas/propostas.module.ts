import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { PropostasComponent } from './page/propostas.component';
import { DesktopViewModule } from './page/desktop-view/desktop-view.module';
import { MobileViewModule } from './page/mobile-view/mobile-view.module';
import { PropostasRoutingModule } from './propostas.routing';
import { PropostaCardModule } from './page/shared/proposta-card/proposta-card.module';
import { CaixaSugestaoComponent } from './page/shared/DialogComponents/caixa-sugestao/caixa-sugestao.component';


@NgModule({
  declarations: [
    PropostasComponent,
    CaixaSugestaoComponent
  ],
  imports: [
    SharedModule,
    DesktopViewModule,
    MobileViewModule,
    PropostaCardModule,
    PropostasRoutingModule
  ],
  exports: [
    PropostasComponent,
    PropostaCardModule,
    CaixaSugestaoComponent
  ]
})
export class PropostasModule {}
