import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { DesktopViewComponent } from './desktop-view.component';
import { PropostaCardModule } from '../shared/proposta-card/proposta-card.module';

@NgModule({
  declarations: [
    DesktopViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PropostaCardModule
  ],
  exports: [
    DesktopViewComponent
  ]
})
export class DesktopViewModule { }
