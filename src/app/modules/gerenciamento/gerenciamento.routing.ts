import { Routes, RouterModule } from '@angular/router';
import { EditarComponent } from './page/editar/editar.component';
import { Layouts } from 'src/app/app.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'gerenciamento',
    component: EditarComponent,
    data: { layout: Layouts.Main }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenciamentoRoutingModule {}
