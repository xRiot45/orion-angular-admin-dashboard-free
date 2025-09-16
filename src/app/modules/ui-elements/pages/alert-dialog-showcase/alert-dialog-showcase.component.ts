import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ZardAlertDialogService } from '@shared/components/ui/alert-dialog/alert-dialog.service';
import { ZardBreadcrumbModule } from '@shared/components/ui/breadcrumb/breadcrumb.module';
import { ZardButtonComponent } from '@shared/components/ui/button/button.component';
import { HighlightCodeDirective } from '@shared/directives/highlight-code.directive';
import { ALERT_DIALOG_CODE } from './alert-dialog-showcase.constants';

@Component({
  selector: 'ui-elements-alert-dialog-showcase',
  standalone: true,
  imports: [CommonModule, ZardBreadcrumbModule, ZardButtonComponent, HighlightCodeDirective],
  templateUrl: './alert-dialog-showcase.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AlertDialogShowcaseComponent implements AfterViewInit {
  showCode: Record<string, boolean> = {};
  alertDialogs = ALERT_DIALOG_CODE;

  private alertDialogService = inject(ZardAlertDialogService);

  @ViewChildren(HighlightCodeDirective) codeBlocks!: QueryList<HighlightCodeDirective>;

  ngAfterViewInit(): void {
    this.highlightCode();
  }

  showDialog() {
    this.alertDialogService.confirm({
      zTitle: 'Are you absolutely sure?',
      zDescription:
        'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
      zOkText: 'Continue',
      zCancelText: 'Cancel',
    });
  }

  toggleCode(alertDialogName: string) {
    this.showCode[alertDialogName] = !this.showCode[alertDialogName];
    setTimeout(() => this.highlightCode(), 0);
  }

  isCodeVisible(alertDialogName: string) {
    return !!this.showCode[alertDialogName];
  }

  private highlightCode() {
    this.codeBlocks.forEach((block) => block.highlight());
  }
}
