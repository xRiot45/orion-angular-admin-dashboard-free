import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { ZardAlertDialogService } from '@shared/components/ui/alert-dialog/alert-dialog.service';
import { ZardBreadcrumbModule } from '@shared/components/ui/breadcrumb/breadcrumb.module';
import { ZardButtonComponent } from '@shared/components/ui/button/button.component';
import hljs from 'highlight.js/lib/core';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import { ALERT_DIALOG_CODE } from './alert-dialog-showcase.constants';

hljs.registerLanguage('html', html);
hljs.registerLanguage('typescript', ts);

@Component({
  selector: 'ui-elements-alert-dialog-showcase',
  imports: [CommonModule, ZardBreadcrumbModule, ZardButtonComponent],
  templateUrl: './alert-dialog-showcase.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AlertDialogShowcaseComponent implements AfterViewInit {
  showCode: Record<string, boolean> = {};

  private alertDialogService = inject(ZardAlertDialogService);

  showDialog() {
    this.alertDialogService.confirm({
      zTitle: 'Are you absolutely sure?',
      zDescription:
        'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
      zOkText: 'Continue',
      zCancelText: 'Cancel',
    });
  }

  alertDialogs = ALERT_DIALOG_CODE;

  ngAfterViewInit(): void {
    this.highlightCode();
  }

  toggleCode(alertDialogName: string) {
    this.showCode[alertDialogName] = !this.showCode[alertDialogName];
    setTimeout(() => this.highlightCode(), 0);
  }

  isCodeVisible(alertDialogName: string) {
    return !!this.showCode[alertDialogName];
  }

  highlightCode() {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block as HTMLElement);
    });
  }
}
