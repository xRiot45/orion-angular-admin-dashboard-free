import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { SidebarBrandComponent } from './sidebar-brand/sidebar-brand.component';
import { SidebarFooterComponent } from './sidebar-footer/sidebar-footer.component';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { SidebarSearchComponent } from './sidebar-search/sidebar-search.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
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
export class SidebarComponent implements OnInit, OnDestroy {
  openMenu: string | null = null;
  isCollapsed = false;
  isMobileOrTablet = false;
  isMobileOpen = false;

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.checkScreenSize.bind(this));
  }

  checkScreenSize() {
    this.isMobileOrTablet = window.innerWidth < 1024;
    if (this.isMobileOrTablet) {
      this.isCollapsed = false;
    }
  }

  toggle(menu: string) {
    this.openMenu = this.openMenu === menu ? null : menu;
  }

  toggleSidebar(force?: boolean) {
    if (this.isMobileOrTablet) {
      this.isMobileOpen = force !== undefined ? force : !this.isMobileOpen;
    } else {
      this.isCollapsed = !this.isCollapsed;
      if (this.isCollapsed) {
        this.openMenu = null;
      }
    }
  }

  onOverlayKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.toggleSidebar(false);
    }
  }

  onLogout() {
    console.log('Logout clicked');
  }
}
