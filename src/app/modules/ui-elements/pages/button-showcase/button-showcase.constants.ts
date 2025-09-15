interface ButtonItem {
  name: string;
  label: string;
  classes: string;
  tsCode?: string;
  htmlCode: string;
  description?: string;
}

export const BUTTONS_CODE: ButtonItem[] = [
  {
    name: 'Primary',
    label: 'Primary Button',
    classes:
      'bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-hover)] cursor-pointer',
    tsCode: `
// TypeScript Code
import { ZardButtonComponent } from 'your-path-to-button-component';

@Component({
  standalone: true,
  imports: [ZardButtonComponent],
  templateUrl: 'your-template.html',
})
export class YourComponent {}
      `,
    htmlCode: `
// HTML Code
<button z-button class="bg-[var(--color-primary)] 
text-[var(--color-primary-foreground)] 
hover:bg-[var(--color-primary-hover)] cursor-pointer">
Primary Button
</button>
`,
    description: 'This is the primary button style',
  },
  {
    name: 'Secondary',
    label: 'Secondary Button',
    classes:
      'bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] hover:bg-[var(--color-secondary-hover)] cursor-pointer',
    tsCode: `
// TypeScript Code
import { ZardButtonComponent } from 'your-path-to-button-component';

@Component({
  standalone: true,
  imports: [ZardButtonComponent],
  templateUrl: 'your-template.html',
})
export class YourComponent {}
      `,
    htmlCode: `
// HTML Code
<button z-button class="bg-[var(--color-secondary)] 
text-[var(--color-secondary-foreground)] 
hover:bg-[var(--color-secondary-hover)] cursor-pointer">
Secondary Button
</button>
`,
    description: 'This is the secondary button style',
  },
  {
    name: 'Accent',
    label: 'Accent Button',
    classes:
      'bg-[var(--color-accent)] text-[var(--color-accent-foreground)] hover:bg-[var(--color-accent-hover)] cursor-pointer',
    tsCode: `
// TypeScript Code
import { ZardButtonComponent } from 'your-path-to-button-component';

@Component({
  standalone: true,
  imports: [ZardButtonComponent],
  templateUrl: 'your-template.html',
})
export class YourComponent {}
      `,
    htmlCode: `
// HTML Code
<button z-button class="bg-[var(--color-accent)] 
text-[var(--color-accent-foreground)] 
hover:bg-[var(--color-accent-hover)] cursor-pointer">
Accent Button
</button>
`,
    description: 'This is the accent button style',
  },
  {
    name: 'Muted',
    label: 'Muted Button',
    classes:
      'bg-[var(--color-muted)] text-[var(--color-muted-foreground)] hover:bg-[var(--color-muted-hover)] cursor-pointer',
    tsCode: `
// TypeScript Code
import { ZardButtonComponent } from 'your-path-to-button-component';

@Component({
  standalone: true,
  imports: [ZardButtonComponent],
  templateUrl: 'your-template.html',
})
export class YourComponent {}
      `,
    htmlCode: `
// HTML Code
<button z-button class="bg-[var(--color-muted)] 
text-[var(--color-muted-foreground)] 
hover:bg-[var(--color-muted-hover)] cursor-pointer">
Muted Button
</button>
`,
    description: 'This is the muted button style',
  },
];
