import { Component, signal } from '@angular/core';
import { DefaultLayoutComponent } from './core/layouts/default-layout/default-layout.component';

@Component({
  selector: 'app-root',
  imports: [DefaultLayoutComponent],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('orion-angular-admin-dashboard-free');
}
