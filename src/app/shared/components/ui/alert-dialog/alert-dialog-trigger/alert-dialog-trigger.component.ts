import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AlertDialogService } from '../alert-dialog.service';

@Component({
  selector: 'ui-alert-dialog-trigger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-dialog-trigger.component.html',
})
export class AlertDialogTriggerComponent {
  public service = inject(AlertDialogService);
}
