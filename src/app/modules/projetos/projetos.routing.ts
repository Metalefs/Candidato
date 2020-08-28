import { Routes, RouterModule } from '@angular/router';
import { ProjetosComponent } from './page/projetos.component';
import { ProjetoComponent } from './page/projeto/pages/projeto.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'projetos',
    pathMatch: 'full'
  },
  {
    path: 'projeto/:id',
    component: ProjetoComponent
  },
  {
    path: 'projetos',
    component: ProjetosComponent
  },
];

export const ProjetosRoutes = RouterModule.forChild(routes);
