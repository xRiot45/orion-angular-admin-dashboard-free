interface AvatarItem {
  name: string;
  title: string;
  classes: string;
  type: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | null | undefined;
  tsCode?: string;
  htmlCode: string;
  description?: string;
  zImage: { fallback: string; url?: string; alt?: string };
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
<z-avatar zType="default" [zImage]="zImageDefault" />
    `,
    description: 'This is the default avatar style',
    zImage: { fallback: 'ZA' },
  },
  {
    name: 'With Image',
    title: 'With Image Avatar',
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
    url: '/images/avatar/imgs/avatar_image.jpg',
    alt: 'ZadUI',
  };
}
    `,
    htmlCode: `
<!-- HTML Code -->
<z-avatar zType="default" [zImage]="zImageDefault" />
    `,
    description: 'This is the with image avatar style',
    zImage: {
      fallback: 'ZA',
      url: 'https://gasevents.com/wp-content/uploads/2021/02/team-1.jpg',
      alt: 'ZadUI',
    },
  },
];
