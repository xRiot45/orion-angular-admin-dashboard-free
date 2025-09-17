import { Routes } from '@angular/router';
import { MODULE_ROUTE } from './modules/module.route';

export const routes: Routes = [...MODULE_ROUTE, { path: '**', redirectTo: 'error/404' }];
