import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: HomeComponent,
  },
];

export const HomeRoutes = RouterModule.forChild(routes);
