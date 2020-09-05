import { Routes, RouterModule } from '@angular/router';
import { ProjetosComponent } from './page/projetos.component';
import { ProjetoComponent } from './page/projeto/pages/projeto.component';
import { Layouts } from 'src/app/app.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'propostas',
  //   pathMatch: 'full'
  // },
  {
    path: 'propostas',
    component: ProjetosComponent,
    data: { layout: Layouts.Main, animation:'isLeft' }
  },
  {
    path: 'projeto/:id',
    component: ProjetoComponent,
    data: { layout: Layouts.Main }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropostasRoutingModule { }
