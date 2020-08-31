import { NgModule } from '@angular/core';

import { EditarInfoContatoComponent } from './page/editar/editar-infocontato/editar-infocontato.component';
import { EditarSobreComponent } from './page/editar/editar-sobre/editar-sobre.component';
import { EditarComponent } from './page/editar/editar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GerenciamentoRoutingModule } from './gerenciamento.routing';

@NgModule({
  declarations: [
    EditarInfoContatoComponent,
    EditarSobreComponent,
    EditarComponent,
  ],
  imports: [
    SharedModule, 
    GerenciamentoRoutingModule
  ],
  exports: [],
  providers: []
})
export class GerenciamentoModule {}
