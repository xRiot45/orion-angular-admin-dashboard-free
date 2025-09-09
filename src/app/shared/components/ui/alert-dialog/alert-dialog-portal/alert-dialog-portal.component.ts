import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AlertDialogService } from '../alert-dialog.service';

@Component({
  selector: 'ui-alert-dialog-portal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-dialog-portal.component.html',
})
export class AlertDialogPortalComponent {
  public service = inject(AlertDialogService);
}
