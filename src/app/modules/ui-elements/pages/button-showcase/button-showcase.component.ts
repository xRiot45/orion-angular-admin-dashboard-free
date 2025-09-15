import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ZardBreadcrumbModule } from '@shared/components/ui/breadcrumb/breadcrumb.module';
import { ZardButtonComponent } from '@shared/components/ui/button/button.component';
import { copyToClipboard } from '@shared/utils/clipboard';
import hljs from 'highlight.js/lib/core';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import { BUTTONS_CODE } from './button-showcase.constants';

hljs.registerLanguage('html', html);
hljs.registerLanguage('typescript', ts);

@Component({
  selector: 'ui-elements-button-showcase',
  standalone: true,
  imports: [CommonModule, FormsModule, ZardButtonComponent, ZardBreadcrumbModule],
  templateUrl: './button-showcase.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ButtonShowcaseComponent implements AfterViewInit {
  showCode: Record<string, boolean> = {};

  buttons = BUTTONS_CODE;

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

  copyCode(code: string) {
    copyToClipboard(code).then(() => {
      alert('Code copied to clipboard!');
    });
  }
}
