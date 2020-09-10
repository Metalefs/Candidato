import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { PropostasComponent } from './page/propostas.component';
import { PropostasRoutingModule } from './propostas.routing';
import { PropostaCardComponent } from './page/proposta-card/proposta-card.component';
import { CaixaSugestaoComponent } from './page/DialogComponents/caixa-sugestao/caixa-sugestao.component';

@NgModule({
  declarations: [
    PropostasComponent,
    PropostaCardComponent,
    CaixaSugestaoComponent
  ],
  imports: [
    SharedModule,
    PropostasRoutingModule
  ]
})
export class PropostasModule {}
