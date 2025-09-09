import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AlertDialogService } from '../alert-dialog.service';

@Component({
  selector: 'ui-alert-dialog-action',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-dialog-action.component.html',
})
export class AlertDialogActionComponent {
  public service = inject(AlertDialogService);
}
