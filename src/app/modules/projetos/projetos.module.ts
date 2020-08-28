import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxScrollspyModule } from '@uniprank/ngx-scrollspy';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule  } from 'ngx-page-scroll';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProjetosComponent } from './page/projetos.component';
import { ProjetoComponent } from './page/projeto/pages/projeto.component';
import { ProjetosRoutes } from './projetos.routing';

@NgModule({
  declarations: [
    ProjetosComponent,
    ProjetoComponent
  ],
  imports: [
    SharedModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    NgxScrollspyModule.forRoot(),
    ProjetosRoutes
  ],
  exports: [ProjetosComponent],
  providers: []
})
export class ProjetosModule {}
