import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { PropostasComponent } from './page/propostas.component';
import { PropostasRoutingModule } from './propostas.routing';
import { PropostaCardComponent } from './page/proposta-card/proposta-card.component';

@NgModule({
  declarations: [
    PropostasComponent,
    PropostaCardComponent
  ],
  imports: [
    SharedModule,
    PropostasRoutingModule
  ]
})
export class PropostasModule {}
