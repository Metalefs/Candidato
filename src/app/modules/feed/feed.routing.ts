import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './page/feed.component';
import { NgModule } from '@angular/core';
import { Layouts } from 'src/app/app.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'feed',
  //   pathMatch: 'full'
  // },
  {
    path: 'feed',
    component: FeedComponent,
    data: { layout: Layouts.Main, animation:'isRight' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule  { }

