import { Directive, ElementRef, inject } from '@angular/core';
import hljs from 'highlight.js/lib/core';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('html', html);
hljs.registerLanguage('typescript', ts);

@Directive({
  selector: '[highlightCode]',
  standalone: true,
})
export class HighlightCodeDirective {
  el = inject(ElementRef);

  highlight() {
    this.el.nativeElement.querySelectorAll('code').forEach((block: HTMLElement) => {
      hljs.highlightElement(block as HTMLElement);
    });
  }
}
