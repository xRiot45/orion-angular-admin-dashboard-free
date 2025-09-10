import { Component, signal } from '@angular/core';
import { SidebarComponent } from './core/layouts/default-layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('orion-angular-admin-dashboard-free');
}
