import { Routes, RouterModule } from '@angular/router';
import { BiografiaComponent } from './page/biografia.component';
import { Layouts } from 'src/app/app.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'biografia',
  //   pathMatch: 'full'
  // },
  {
    path: 'biografia',
    component: BiografiaComponent,
    data: { layout: Layouts.Main }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiografiaRoutingModule { }
 
