import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { ZardDividerComponent } from '@shared/components/ui/divider/divider.component';
import { ZardDropdownModule } from '@shared/components/ui/dropdown/dropdown.module';

@Component({
  selector: 'app-sidebar-header',
  imports: [CommonModule, ZardDropdownModule, ZardDividerComponent],
  templateUrl: './sidebar-header.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SidebarHeaderComponent {
  @Input() isCollapsed = false;

  onLogout() {
    console.log('Logout clicked');
  }
}
