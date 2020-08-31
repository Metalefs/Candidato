import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './page/feed.component';
import { FeedRoutingModule } from './feed.routing';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    FeedRoutingModule
  ]
})
export class FeedModule { }