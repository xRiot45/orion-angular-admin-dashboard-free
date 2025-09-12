import { Routes } from '@angular/router';

export const UI_ELEMENTS_ROUTE: Routes = [
  {
    path: 'ui-elements',
    children: [
      {
        path: 'button',
        loadComponent: () =>
          import('./pages/button-showcase/button-showcase.component').then(
            (m) => m.ButtonShowcaseComponent,
          ),
      },
    ],
  },
];
