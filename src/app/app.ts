import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('orion-angular-admin-dashboard-free');
}
