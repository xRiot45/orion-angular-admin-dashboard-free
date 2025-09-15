import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ZardAlertComponent } from '@shared/components/ui/alert/alert.component';
import { ZardBreadcrumbModule } from '@shared/components/ui/breadcrumb/breadcrumb.module';
import hljs from 'highlight.js/lib/core';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import { ALERTS_CODE } from './alert-showcase.constants';

hljs.registerLanguage('html', html);
hljs.registerLanguage('typescript', ts);

@Component({
  selector: 'ui-elements-alert-showcase',
  imports: [CommonModule, ZardAlertComponent, ZardBreadcrumbModule],
  templateUrl: './alert-showcase.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AlertShowcaseComponent implements AfterViewInit {
  showCode: Record<string, boolean> = {};

  alerts = ALERTS_CODE;

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
