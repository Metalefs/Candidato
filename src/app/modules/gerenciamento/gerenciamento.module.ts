import { NgModule } from '@angular/core';

import { EditarInfoContatoComponent } from './page/editar/editar-infocontato/editar-infocontato.component';
import { EditarSobreComponent } from './page/editar/editar-sobre/editar-sobre.component';
import { EditarComponent } from './page/editar/editar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GerenciamentoPageRoutes } from './gerenciamento.routing';

@NgModule({
  declarations: [
    EditarInfoContatoComponent,
    EditarSobreComponent,
    EditarComponent,
  ],
  imports: [
    SharedModule, 
    GerenciamentoPageRoutes
  ],
  exports: [],
  providers: []
})
export class GerenciamentoModule {}
