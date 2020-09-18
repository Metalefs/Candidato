import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';

import { PropostaCardComponent } from './proposta-card.component';


@NgModule({
  declarations: [
    PropostaCardComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    PropostaCardComponent
  ]
})
export class PropostaCardModule {}
