import { Routes, RouterModule } from '@angular/router';
import { PropostasComponent } from './page/propostas.component';
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
    component: PropostasComponent,
    data: { layout: Layouts.Main, animation:'isLeft' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropostasRoutingModule { }
