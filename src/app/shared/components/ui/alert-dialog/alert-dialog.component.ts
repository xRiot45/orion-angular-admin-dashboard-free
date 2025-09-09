import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AlertDialogService } from './alert-dialog.service';

@Component({
  selector: 'ui-alert-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-dialog.component.html',
  providers: [AlertDialogService],
})
export class AlertDialogComponent {
  public service = inject(AlertDialogService);
}
