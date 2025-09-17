import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from '../core/layouts/default-layout/default-layout.component';
import { ERROR_ROUTE } from './errors/error.route';
import { UI_ELEMENTS_ROUTE } from './ui-elements/ui-elements.route';

export const MODULE_ROUTE: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      ...UI_ELEMENTS_ROUTE,
    ],
  },

  ...ERROR_ROUTE,
];
