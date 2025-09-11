import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ZardDividerComponent } from '@shared/components/ui/divider/divider.component';
import { ZardDropdownModule } from '@shared/components/ui/dropdown/dropdown.module';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, ZardDropdownModule, ZardDividerComponent],
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
