interface AvatarItem {
  name: string;
  title: string;
  classes: string;
  type: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | null | undefined;
  tsCode?: string;
  htmlCode: string;
  description?: string;
  zImage: { fallback: string };
}

export const AVATAR_CODE: AvatarItem[] = [
  {
    name: 'Default',
    title: 'Default Avatar',
    classes: '',
    type: 'default',
    tsCode: `
// TypeScript Code
import { Component } from '@angular/core';
import { ZardAvatarComponent } from '../avatar.component';
 
@Component({
    standalone: true,
    imports: [ZardAvatarComponent],
    templateUrl: 'your-template.html',
})
export class YourComponent {
  readonly zImageDefault = {
    fallback: 'ZA',
  };
}
    `,
    htmlCode: `
<!-- HTML Code -->
<z-avatar [zImage]="zImageDefault" />
    `,
    description: 'This is the default avatar style',
    zImage: { fallback: 'ZA' }, // ✅ definisi langsung di constants
  },
];
