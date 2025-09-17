import { Routes } from '@angular/router';

export const TABLES_ROUTE: Routes = [
  {
    path: 'tables',
    children: [
      {
        path: 'basic',
        loadComponent: () =>
          import('./basic-table/basic-table.component').then((m) => m.BasicTableComponent),
      },
      {
        path: 'data',
        loadComponent: () =>
          import('./data-table/data-table.component').then((m) => m.DataTableComponent),
      },
    ],
  },
];
