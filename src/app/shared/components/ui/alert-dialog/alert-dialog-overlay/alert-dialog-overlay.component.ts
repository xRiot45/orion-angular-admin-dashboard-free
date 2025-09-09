// alert-dialog-overlay.component.ts
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AlertDialogService } from '../alert-dialog.service';

@Component({
  selector: 'ui-alert-dialog-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-dialog-overlay.component.html',
})
export class AlertDialogOverlayComponent {
  public service = inject(AlertDialogService);
}
