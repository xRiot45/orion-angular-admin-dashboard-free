import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-brand',
  imports: [],
  templateUrl: './sidebar-brand.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SidebarBrandComponent {
  @Input() isCollapsed = false;
  @Output() toggleSidebar = new EventEmitter<void>();
}
