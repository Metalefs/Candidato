import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { MobileViewComponent } from './mobile-view.component';
import { PropostaCardModule } from '../shared/proposta-card/proposta-card.module';

@NgModule({
  declarations: [
    MobileViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PropostaCardModule
  ],
  exports: [
    MobileViewComponent
  ]
})
export class MobileViewModule { }
