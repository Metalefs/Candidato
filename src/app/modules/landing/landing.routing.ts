import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './page/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: LandingPageComponent
    , data: { animation: 'isLeft', reuse: true }
  },
];

export const LandingPageRoutes = RouterModule.forChild(routes);
