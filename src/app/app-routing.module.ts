import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/interceptor';
import { NoAuthGuard } from './core/guard/no-auth.guard';

import { ContentLayoutComponent } from 'src/app/layout/content-layout/content-layout.component';

import { HomeModule } from 'src/app/modules/home/home.module';
import { PropostasModule } from 'src/app/modules/propostas/propostas.module';
import { FeedModule } from 'src/app/modules/feed/feed.module';
import { BiografiaModule } from 'src/app/modules/biografia/biografia.module';

import { GerenciamentoModule } from 'src/app/modules/gerenciamento/gerenciamento.module';

//import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { 
    path: '', component: ContentLayoutComponent,
    data: {
      reuse: true
    },
    canActivate: [NoAuthGuard], 
    children: [
      {
        path: '',
        loadChildren: () =>
          import('src/app/modules/home/home.module').then(m => m.HomeModule)
        , data: { animation: 'isLeft', reuse: true },
      },
      {
        path: '',
        loadChildren: () =>
          import('src/app/modules/biografia/biografia.module').then(m => m.BiografiaModule)
          , data: { animation: 'isLeft', reuse: true }
      },
      {
        path: '',
        loadChildren: () =>
          import('src/app/modules/propostas/propostas.module').then(m => m.PropostasModule)
          , data: { animation: 'isLeft', reuse: true }
      },
      {
        path: '',
        loadChildren: () =>
          import('src/app/modules/feed/feed.module').then(m => m.FeedModule)
          , data: { animation: 'isLeft', reuse: true }
      },
      { 
        path: 'gerenciamento',
        canActivate: [AuthGuard],
        data: {
          reuse: true
        },
        loadChildren: () =>
        import('src/app/modules/gerenciamento/gerenciamento.module').then(m => m.GerenciamentoModule)
      },
    ]
  },
  
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
