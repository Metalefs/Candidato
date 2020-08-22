import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { FeedCardComponent } from './component/card/component/feed-card.component';
import { FeedCardItemComponent } from './component/card/component/feed-card-item/feed-card-item.component';
import { IconeWhatsappComponent } from './component/icone-whatsapp/icone-whatsapp.component';
import { CountUpComponent } from './component/count-up/count-up.component';
import { MaterialModule } from './material.module';
import { AuthModule } from './component/auth/auth.module';
import { DynamicFormModule } from './component/dynamic-form/dynamic-form.module';

import { CountUpModule } from 'ngx-countup';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CountUpModule,
    RouterModule,
    ClarityModule,
    MaterialModule
  ],
  declarations: [
    FeedCardComponent,
    FeedCardItemComponent,
    IconeWhatsappComponent,
    CountUpComponent
  ],
  exports: [
    CommonModule,
    ClarityModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AuthModule,
    DynamicFormModule,
    FeedCardComponent,
    FeedCardItemComponent, 
    IconeWhatsappComponent,
    CountUpComponent
  ]
})
export class SharedModule {
  constructor() {
   
  }
}
