import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { FeedCardComponent } from './component/card/component/feed-card.component';
import { FeedCardItemComponent } from './component/card/component/feed-card-item/feed-card-item.component';
import { IconeWhatsappComponent } from './component/icone-whatsapp/icone-whatsapp.component';
import { CountUpComponent } from './component/count-up/count-up.component';
import { AuthModule } from './component/auth/auth.module';
import { DynamicFormModule } from './component/dynamic-form/dynamic-form.module';
import { ContatoComponent } from './component/contato/contato.component';
import { RedesSociaisComponent } from './component/redes-sociais/redes-sociais.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CountUpModule } from 'ngx-countup';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CountUpModule,
    RouterModule,
    MaterialModule,
    FontAwesomeModule,
    ClarityModule,
  ],
  declarations: [
    FeedCardComponent,
    FeedCardItemComponent,
    IconeWhatsappComponent,
    CountUpComponent,
    ContatoComponent,
    RedesSociaisComponent
  ],
  exports: [
    CommonModule,
    ClarityModule,
    MaterialModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AuthModule,
    DynamicFormModule,
    FeedCardComponent,
    FeedCardItemComponent, 
    IconeWhatsappComponent,
    ContatoComponent,
    RedesSociaisComponent,
    CountUpComponent,
    CountUpModule,
  ]
})
export class SharedModule {
  constructor() {
   
  }
}
