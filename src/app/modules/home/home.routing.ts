import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home.component';
import { NgModule } from '@angular/core';
import { Layouts } from 'src/app/app.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'inicio',
  //   pathMatch: 'full'
  // },
  {
    path: 'inicio',
    component: HomeComponent,
    data: { layout: Layouts.Main }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
