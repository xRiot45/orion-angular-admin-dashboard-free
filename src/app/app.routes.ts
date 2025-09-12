import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './core/layouts/default-layout/default-layout.component';
import { UI_ELEMENTS_ROUTE } from './modules/ui-elements/ui-elements.route';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./modules/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      ...UI_ELEMENTS_ROUTE,
    ],
  },
  { path: '**', redirectTo: '' },
];
