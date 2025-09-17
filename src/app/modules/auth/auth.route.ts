import { Routes } from '@angular/router';

export const AUTH_ROUTE: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadChildren: () => import('./login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./register/register.component').then((m) => m.RegisterComponent),
      },
    ],
  },
];
