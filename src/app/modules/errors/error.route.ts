import { Routes } from '@angular/router';

export const ERROR_ROUTE: Routes = [
  {
    path: 'error',
    children: [
      {
        path: '401',
        loadComponent: () =>
          import('./error-401/error-401.component').then((m) => m.Error401Component),
      },
      {
        path: '404',
        loadComponent: () =>
          import('./error-404/error-404.component').then((m) => m.Error404Component),
      },
      {
        path: '500',
        loadComponent: () =>
          import('./error-500/error-500.component').then((m) => m.Error500Component),
      },
    ],
  },
];
