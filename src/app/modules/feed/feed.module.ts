import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './page/feed.component';
import { FeedRoutes } from './feed.routing';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    FeedRoutes
  ]
})
export class FeedModule { }