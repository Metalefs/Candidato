import { NgModule } from '@angular/core';

import { FeedComponent } from './page/feed.component';
import { FeedRoutes } from './feed.routing';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    SharedModule,
    FeedRoutes
  ],
  exports: [FeedComponent],
  providers: []
})
export class FeedModule {}
