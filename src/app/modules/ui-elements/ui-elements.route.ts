import { Routes } from '@angular/router';

export const UI_ELEMENTS_ROUTE: Routes = [
  {
    path: 'ui-elements',
    children: [
      {
        path: 'accordion',
        loadComponent: () =>
          import('./pages/accordion-showcase/accordion-showcase.component').then(
            (m) => m.AccordionShowcaseComponent,
          ),
      },
    ],
  },
  {
    path: 'ui-elements',
    children: [
      {
        path: 'alert',
        loadComponent: () =>
          import('./pages/alert-showcase/alert-showcase.component').then(
            (m) => m.AlertShowcaseComponent,
          ),
      },
    ],
  },
  {
    path: 'ui-elements',
    children: [
      {
        path: 'alert-dialog',
        loadComponent: () =>
          import('./pages/alert-dialog-showcase/alert-dialog-showcase.component').then(
            (m) => m.AlertDialogShowcaseComponent,
          ),
      },
    ],
  },
  {
    path: 'ui-elements',
    children: [
      {
        path: 'avatar',
        loadComponent: () =>
          import('./pages/avatar-showcase/avatar-showcase.component').then(
            (m) => m.AvatarShowcaseComponent,
          ),
      },
    ],
  },
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
  {
    path: 'ui-elements',
    children: [
      {
        path: 'badge',
        loadComponent: () =>
          import('./pages/badge-showcase/badge-showcase.component').then(
            (m) => m.BadgeShowcaseComponent,
          ),
      },
    ],
  },
];
