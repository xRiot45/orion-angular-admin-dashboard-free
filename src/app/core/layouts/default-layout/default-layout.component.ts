import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, FooterComponent, RouterOutlet],
  template: `
    <div class="flex h-screen w-screen">
      <!-- Sidebar -->
      <app-sidebar #sidebar></app-sidebar>

      <!-- Main content -->
      <div class="flex flex-col flex-1">
        <!-- Header -->
        <app-header (toggleSidebar)="sidebar.toggleSidebar()"></app-header>

        <!-- Page content -->
        <main class="flex-1 overflow-y-auto p-6 bg-white">
          <router-outlet></router-outlet>
          <ng-content></ng-content>
        </main>

        <!-- Footer -->
        <app-footer></app-footer>
      </div>
    </div>
  `,
})
export class DefaultLayoutComponent {
  @ViewChild('sidebar') sidebar!: SidebarComponent;
}
