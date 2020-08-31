import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProjetosComponent } from './page/projetos.component';
import { ProjetoComponent } from './page/projeto/pages/projeto.component';
import { PropostasRoutingModule } from './propostas.routing';
import { ProjetoCardComponent } from './page/projeto-card/projeto-card.component';

@NgModule({
  declarations: [
    ProjetosComponent,
    ProjetoComponent,
    ProjetoCardComponent
  ],
  imports: [
    SharedModule,
    PropostasRoutingModule
  ]
})
export class PropostasModule {}
