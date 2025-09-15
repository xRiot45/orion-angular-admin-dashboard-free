import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ZardAlertComponent } from '@shared/components/ui/alert/alert.component';
import { ZardBreadcrumbModule } from '@shared/components/ui/breadcrumb/breadcrumb.module';
import hljs from 'highlight.js/lib/core';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('html', html);
hljs.registerLanguage('typescript', ts);

interface AlertItem {
  icon: string;
  name: string;
  title: string;
  classes: string;
  appearance: 'fill' | 'outline' | 'soft' | null | undefined;
  type: 'error' | 'default' | 'info' | 'success' | 'warning' | null | undefined;
  tsCode?: string;
  htmlCode: string;
  description: string;
}

@Component({
  selector: 'ui-elements-alert-showcase',
  imports: [CommonModule, ZardAlertComponent, ZardBreadcrumbModule],
  templateUrl: './alert-showcase.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AlertShowcaseComponent implements AfterViewInit {
  showCode: Record<string, boolean> = {};

  alerts: AlertItem[] = [
    {
      icon: 'iconoir:code',
      name: 'Basic',
      title: 'Basic Alert',
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
      icon: 'iconoir:code',
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
export class ZardDemoAlertInfoComponent {
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
  ];

  ngAfterViewInit(): void {
    this.highlightCode();
  }

  toggleCode(buttonName: string) {
    this.showCode[buttonName] = !this.showCode[buttonName];
    setTimeout(() => this.highlightCode(), 0);
  }

  isCodeVisible(buttonName: string) {
    return !!this.showCode[buttonName];
  }

  highlightCode() {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block as HTMLElement);
    });
  }
}
