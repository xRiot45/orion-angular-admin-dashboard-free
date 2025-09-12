import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavGroup } from '@shared/types/nav.types';
import { NAV_ITEMS } from './sidebar-menu.constants';

@Component({
  selector: 'sidebar-menu',
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar-menu.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SidebarMenuComponent {
  @Input() isCollapsed = false;
  @Input() toggle!: (menu: string) => void;
  @Input() openMenu: string | null = null;
  @Output() openMenuChange = new EventEmitter<string | null>();
  navGroups: NavGroup[] = NAV_ITEMS;

  setOpenMenu(menu: string | null) {
    this.openMenu = menu;
    this.openMenuChange.emit(menu);
  }
}
