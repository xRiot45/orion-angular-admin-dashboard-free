interface AlertItem {
  icon: string;
  name: string;
  title: string;
  classes: string;
  appearance: 'fill' | 'outline' | 'soft' | null | undefined;
  type: 'default' | 'error' | 'info' | 'success' | 'warning' | null | undefined;
  tsCode?: string;
  htmlCode: string;
  description: string;
}

export const ALERTS_CODE: AlertItem[] = [
  {
    icon: 'iconoir:code',
    name: 'Default',
    title: 'Default Alert',
    classes: '',
    appearance: 'fill',
    type: 'default',
    tsCode: `
// TypeScript Code
import { Component } from '@angular/core';
import { ZardAlertComponent } from '@shared/components/ui/alert/alert.component';
 
@Component({
  standalone: true,
  imports: [ZardAlertComponent],
  templateUrl: 'your-template.html',,
})
export class YourComponent {
  icon = 'iconoir:code';
  title = 'Basic Alert';
  description = 'This is the basic alert style';
}
      `,
    htmlCode: `
<!-- HTML Code -->
<z-alert [zIcon]="icon" [zTitle]="title" [zDescription]="description" />
  `,
    description: 'This is the basic alert style',
  },
  {
    icon: 'material-symbols:info-outline',
    name: 'Info',
    title: 'Info Alert',
    classes: '',
    appearance: 'fill',
    type: 'info',
    tsCode: `
// TypeScript Code
import { Component } from '@angular/core';
import { ZardAlertComponent } from '@shared/components/ui/alert/alert.component';

@Component({
  standalone: true,
  imports: [ZardAlertComponent],
  templateUrl: 'your-template.html',,
})
export class YourComponent {
  title = 'Info alert!';
  description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, sint.';
}
      `,
    htmlCode: `
<!-- HTML Code -->
 <z-alert [zTitle]="title" [zDescription]="description" zType="info" zAppearance="fill" />
      `,
    description: 'This is the info alert style',
  },
  {
    icon: 'codicon:error',
    name: 'Error',
    title: 'Error Alert',
    classes: '',
    appearance: 'fill',
    type: 'error',
    tsCode: `
// TypeScript Code
import { Component } from '@angular/core';
import { ZardAlertComponent } from '@shared/components/ui/alert/alert.component';

@Component({
  standalone: true,
  imports: [ZardAlertComponent],
  templateUrl: 'your-template.html',,
})
export class YourComponent {
  title = 'Error alert!';
  description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, sint.';
}
      `,
    htmlCode: `
<!-- HTML Code -->
 <z-alert [zTitle]="title" [zDescription]="description" zType="error" zAppearance="fill" />
      `,
    description: 'This is the error alert style',
  },
  {
    icon: 'ix:success',
    name: 'Success',
    title: 'Success Alert',
    classes: '',
    appearance: 'fill',
    type: 'success',
    tsCode: `
// TypeScript Code
import { Component } from '@angular/core';
import { ZardAlertComponent } from '@shared/components/ui/alert/alert.component';

@Component({
  standalone: true,
  imports: [ZardAlertComponent],
  templateUrl: 'your-template.html',,
})
export class YourComponent {
  title = 'Success alert!';
  description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, sint.';
}
      `,
    htmlCode: `
<!-- HTML Code -->
 <z-alert [zTitle]="title" [zDescription]="description" zType="success" zAppearance="fill" />
      `,
    description: 'This is the succcess alert style',
  },
  {
    icon: 'material-symbols:warning-outline',
    name: 'Warning',
    title: 'Warning Alert',
    classes: '',
    appearance: 'fill',
    type: 'warning',
    tsCode: `
// TypeScript Code
import { Component } from '@angular/core';
import { ZardAlertComponent } from '@shared/components/ui/alert/alert.component';

@Component({
  standalone: true,
  imports: [ZardAlertComponent],
  templateUrl: 'your-template.html',,
})
export class YourComponent {
  title = 'Warning alert!';
  description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, sint.';
}
      `,
    htmlCode: `
<!-- HTML Code -->
 <z-alert [zTitle]="title" [zDescription]="description" zType="warning" zAppearance="fill" />
      `,
    description: 'This is the warning alert style',
  },
];
