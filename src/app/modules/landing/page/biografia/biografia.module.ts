import { NgModule } from '@angular/core';

import { BiografiaComponent } from './page/biografia.component';
import { BiografiaRoutes } from './biografia.routing';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    BiografiaComponent
  ],
  imports: [
    SharedModule,
    BiografiaRoutes
  ],
  exports: [BiografiaComponent],
  providers: []
})
export class BiografiaModule {}
