interface AlertDialogCode {
  name: string;
  label: string;
  classes: string;
  description?: string;
  tsCode?: string;
  htmlCode: string;
}

export const ALERT_DIALOG_CODE: AlertDialogCode[] = [
  {
    name: 'Alert Dialog',
    label: 'Alert Dialog',
    classes: '',
    description: 'This is the alert dialog',
    tsCode: `
// TypeScript Code
import { ZardButtonComponent } from '@shared/components/ui/button/button.component';
import { Component, inject } from '@angular/core';
import { ZardAlertDialogService } from '@shared/components/ui/alert-dialog/alert-dialog.service';
 
@Component({
  selector: 'zard-demo-alert-dialog-default',
  standalone: true,
  imports: [ZardButtonComponent],
  templateUrl: 'your-template.html',
})
export class YourComponent {
  private alertDialogService = inject(ZardAlertDialogService);
 
  showDialog() {
    this.alertDialogService.confirm({
      zTitle: 'Are you absolutely sure?',
      zDescription: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
      zOkText: 'Continue',
      zCancelText: 'Cancel',
    });
  }
}
    `,
    htmlCode: `
<!-- HTML Code -->
<button z-button zType="outline" (click)="showDialog()">Show Dialog</button>
    `,
  },
];
