import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { ZardAvatarComponent } from '@shared/components/ui/avatar/avatar.component';
import { ZardDividerComponent } from '@shared/components/ui/divider/divider.component';
import { ZardDropdownModule } from '@shared/components/ui/dropdown/dropdown.module';

@Component({
  selector: 'sidebar-header',
  imports: [CommonModule, ZardDropdownModule, ZardDividerComponent, ZardAvatarComponent],
  templateUrl: './sidebar-header.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SidebarHeaderComponent {
  @Input() isCollapsed = false;

  readonly profilePicture = {
    fallback: 'JD',
    url: 'assets/images/avatars/avatar-1.png',
    alt: 'User Avatar',
  };

  onLogout() {
    console.log('Logout clicked');
  }
}
