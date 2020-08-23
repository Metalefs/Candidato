import { Routes, RouterModule } from '@angular/router';
import { BiografiaComponent } from './page/biografia.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'biografia',
    pathMatch: 'full'
  },
  {
    path: 'biografia',
    component: BiografiaComponent
  },
];

export const BiografiaRoutes = RouterModule.forChild(routes);
