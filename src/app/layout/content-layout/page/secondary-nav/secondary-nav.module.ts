import { NgModule } from '@angular/core';

import { NavbariconComponent } from './component/navbaricon/navbaricon.component';
import { SecondaryNavComponent } from './component/secondary-nav.component';;
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SecondaryNavComponent,
    NavbariconComponent
  ],
  imports: [],
  exports: [CommonModule,SecondaryNavComponent,NavbariconComponent],
  providers: []
})
export class SecondaryNavModule {}
