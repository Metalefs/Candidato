import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/interceptor';
import { NoAuthGuard } from './core/guard/no-auth.guard';

import { ContentLayoutComponent } from 'src/app/layout/content-layout/content-layout.component';

import { LandingPageModule } from 'src/app/modules/landing/landing.module';
import { FeedModule } from 'src/app/modules/landing/page/feed/feed.module';
import { BiografiaModule } from 'src/app/modules/landing/page/biografia/biografia.module';
import { ProjetosModule } from 'src/app/modules/landing/page/projetos/projetos.module';
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
          import('src/app/modules/landing/landing.module').then(m => m.LandingPageModule)
        , data: { animation: 'isLeft', reuse: true }
      },
      {
        path: '',
        loadChildren: () =>
          import('src/app/modules/landing/page/biografia/biografia.module').then(m => m.BiografiaModule)
          , data: { animation: 'isLeft', reuse: true }
      },
      {
        path: '',
        loadChildren: () =>
          import('src/app/modules/landing/page/projetos/projetos.module').then(m => m.ProjetosModule)
          , data: { animation: 'isLeft', reuse: true }
      },
      {
        path: '',
        loadChildren: () =>
          import('src/app/modules/landing/page/feed/feed.module').then(m => m.FeedModule)
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
