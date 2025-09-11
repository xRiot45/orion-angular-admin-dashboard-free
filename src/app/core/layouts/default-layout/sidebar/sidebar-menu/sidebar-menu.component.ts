import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { NavGroup } from '@shared/types/nav.types';
import { NAV_ITEMS } from './sidebar-menu.constants';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SidebarMenuComponent {
  @Input() isCollapsed = false;
  @Input() toggle!: (menu: string) => void;
  @Input() openMenu: string | null = null;
  @Output() openMenuChange = new EventEmitter<string | null>();
  navGroups: NavGroup[] = NAV_ITEMS;

  // Call this method when you want to change openMenu
  setOpenMenu(menu: string | null) {
    this.openMenu = menu;
    this.openMenuChange.emit(menu);
  }
}
