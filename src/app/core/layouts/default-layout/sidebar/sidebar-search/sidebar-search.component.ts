import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-search',
  imports: [],
  templateUrl: './sidebar-search.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SidebarSearchComponent {
  @Input() isCollapsed = false;
}
