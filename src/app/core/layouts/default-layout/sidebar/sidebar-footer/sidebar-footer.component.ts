import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-footer',
  templateUrl: './sidebar-footer.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SidebarFooterComponent {
  @Input() isCollapsed = false;
  @Output() toggleSidebar = new EventEmitter<void>();
}
