import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ZardAccordionItemComponent } from '@shared/components/ui/accordion/accordion-item.component';
import { ZardAccordionComponent } from '@shared/components/ui/accordion/accordion.component';
import { ZardBreadcrumbModule } from '@shared/components/ui/breadcrumb/breadcrumb.module';
import hljs from 'highlight.js/lib/core';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import { ACCORDION_CODE } from './accordion-showcase.constants';

hljs.registerLanguage('html', html);
hljs.registerLanguage('typescript', ts);

@Component({
  selector: 'ui-elements-accordion-showcase',
  imports: [CommonModule, ZardAccordionComponent, ZardAccordionItemComponent, ZardBreadcrumbModule],
  templateUrl: './accordion-showcase.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AccordionShowcaseComponent implements AfterViewInit {
  showCode: Record<string, boolean> = {};

  accordions = ACCORDION_CODE;

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
