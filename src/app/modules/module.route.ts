import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from '../core/layouts/default-layout/default-layout.component';
import { AUTH_ROUTE } from './auth/auth.route';
import { ERROR_ROUTE } from './errors/error.route';
import { TABLES_ROUTE } from './tables/table.route';
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
      ...TABLES_ROUTE,
    ],
  },

  ...AUTH_ROUTE,
  ...ERROR_ROUTE,
];
