import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SidebarBrandComponent } from './sidebar-brand/sidebar-brand.component';
import { SidebarFooterComponent } from './sidebar-footer/sidebar-footer.component';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { SidebarSearchComponent } from './sidebar-search/sidebar-search.component';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    SidebarHeaderComponent,
    SidebarBrandComponent,
    SidebarSearchComponent,
    SidebarMenuComponent,
    SidebarFooterComponent,
  ],
  templateUrl: './sidebar.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SidebarComponent {
  openMenu: string | null = null;
  isCollapsed = false;

  toggle(menu: string) {
    this.openMenu = this.openMenu === menu ? null : menu;
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      this.openMenu = null;
    }
  }

  onProfile() {
    console.log('Profile clicked');
  }

  onSettings() {
    console.log('Settings clicked');
  }

  onLogout() {
    console.log('Logout clicked');
  }
}
