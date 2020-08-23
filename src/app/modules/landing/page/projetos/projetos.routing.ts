import { Routes, RouterModule } from '@angular/router';
import { ProjetosComponent } from './page/projetos.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'projetos',
    pathMatch: 'full'
  },
  {
    path: 'projetos',
    component: ProjetosComponent
  },
];

export const ProjetosRoutes = RouterModule.forChild(routes);
