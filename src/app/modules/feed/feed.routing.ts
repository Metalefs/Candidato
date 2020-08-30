import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './page/feed.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full'
  },
  {
    path: 'feed',
    component: FeedComponent
  },
];

export const FeedRoutes = RouterModule.forChild(routes);
