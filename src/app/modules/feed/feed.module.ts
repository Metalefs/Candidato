import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './page/feed.component';
import { FeedRoutingModule } from './feed.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    SharedModule,
    CommonModule,
    FeedRoutingModule
  ]
})
export class FeedModule { }