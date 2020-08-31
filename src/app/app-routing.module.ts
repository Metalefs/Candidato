import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/interceptor';
import { NoAuthGuard } from './core/guard/no-auth.guard';

import { LayoutModule } from 'src/app/layout/layout.module';
import { GerenciamentoModule } from 'src/app/modules/gerenciamento/gerenciamento.module';
import { PropostasModule } from 'src/app/modules/propostas/propostas.module';
import { BiografiaModule } from 'src/app/modules/biografia/biografia.module';
import { HomeModule } from 'src/app/modules/home/home.module';
import { FeedModule } from 'src/app/modules/feed/feed.module';

//import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LayoutModule,
    GerenciamentoModule,
    PropostasModule,
    BiografiaModule,
    HomeModule,
    FeedModule
  ],  
  exports: [
    RouterModule,
    LayoutModule,
    GerenciamentoModule,
    PropostasModule,
    BiografiaModule,
    HomeModule,
    FeedModule,
  ],
  
})
export class AppRoutingModule { }
