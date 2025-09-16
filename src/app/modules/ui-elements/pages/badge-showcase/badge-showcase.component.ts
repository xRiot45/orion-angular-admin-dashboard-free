import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ZardBadgeComponent } from '@shared/components/ui/badge/badge.component';
import { ZardBreadcrumbModule } from '@shared/components/ui/breadcrumb/breadcrumb.module';
import { HighlightCodeDirective } from '@shared/directives/highlight-code.directive';
import { BADGES_CODE } from './badge-showcase.constants';

@Component({
  selector: 'ui-elements-badge-showcase',
  imports: [CommonModule, ZardBreadcrumbModule, ZardBadgeComponent, HighlightCodeDirective],
  templateUrl: './badge-showcase.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BadgeShowcaseComponent implements AfterViewInit {
  showCode: Record<string, boolean> = {};
  badges = BADGES_CODE;

  @ViewChildren(HighlightCodeDirective) codeBlocks!: QueryList<HighlightCodeDirective>;

  ngAfterViewInit(): void {
    this.highlightCode();
  }

  toggleCode(name: string) {
    this.showCode[name] = !this.showCode[name];
    setTimeout(() => this.highlightCode(), 0);
  }

  isCodeVisible(name: string) {
    return !!this.showCode[name];
  }

  private highlightCode() {
    this.codeBlocks.forEach((block) => block.highlight());
  }
}
