import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  NgZone,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { SidebarBrandComponent } from './sidebar-brand/sidebar-brand.component';
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
  ],
  templateUrl: './sidebar.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SidebarComponent implements OnInit, OnDestroy {
  openMenu: string | null = null;
  isCollapsed = false;
  isMobileOrTablet = false;
  isMobileOpen = false;

  private resizeHandler!: () => void;
  private ngZone = inject(NgZone);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    this.checkScreenSize();

    this.resizeHandler = () => {
      this.ngZone.run(() => this.checkScreenSize());
    };

    window.addEventListener('resize', this.resizeHandler);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeHandler);
  }

  checkScreenSize() {
    const mobile = window.innerWidth < 1024;

    if (mobile !== this.isMobileOrTablet) {
      this.isMobileOrTablet = mobile;

      if (this.isMobileOrTablet) {
        this.isCollapsed = false;
        this.isMobileOpen = false;
      } else {
        this.isCollapsed = false;
        this.isMobileOpen = true;
      }

      setTimeout(() => this.cdr.detectChanges(), 0);
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
