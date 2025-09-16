interface BadgeItem {
  name: string;
  label: string;
  classes: string;
  description?: string;
  shape: 'default' | 'square' | null | undefined;
  tsCode?: string;
  htmlCode: string;
}

export const BADGES_CODE: BadgeItem[] = [
  {
    name: 'default',
    label: 'Default',
    classes: '',
    shape: 'default',
    description: 'This is the default badge style',
    tsCode: `
// TypeScript Code
@Component({
  standalone: true,
  imports: [ZardBadgeComponent],
  templateUrl: 'your-template.html',
})
export class YourComponent {} 
`,
    htmlCode: `<z-badge>Default</z-badge>`,
  },
  {
    name: 'square',
    label: 'Square',
    classes: '',
    shape: 'square',
    description: 'This is the square badge style',
    tsCode: `
@Component({
  standalone: true,
  imports: [ZardBadgeComponent],
  templateUrl: 'your-template.html',
})
export class YourComponent {} 
`,
    htmlCode: `<z-badge zShape="square">Square</z-badge>`,
  },
];
