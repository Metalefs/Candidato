import { NgModule } from '@angular/core';

import { ProjetosComponent } from './page/projetos.component';
import { ProjetosRoutes } from './projetos.routing';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ProjetosComponent
  ],
  imports: [
    SharedModule,
    ProjetosRoutes
  ],
  exports: [ProjetosComponent],
  providers: []
})
export class ProjetosModule {}
