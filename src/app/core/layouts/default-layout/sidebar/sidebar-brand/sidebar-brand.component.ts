import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sidebar-brand',
  imports: [RouterLink],
  templateUrl: './sidebar-brand.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SidebarBrandComponent {
  @Input() isCollapsed = false;
  @Output() toggleSidebar = new EventEmitter<void>();
}
