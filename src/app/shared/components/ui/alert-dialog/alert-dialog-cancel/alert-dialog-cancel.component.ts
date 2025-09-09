import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AlertDialogService } from '../alert-dialog.service';

@Component({
  selector: 'ui-alert-dialog-cancel',
  standalone: true,
  imports: [CommonModule],
  template: ``,
})
export class AlertDialogCancelComponent {
  public service = inject(AlertDialogService);
}
