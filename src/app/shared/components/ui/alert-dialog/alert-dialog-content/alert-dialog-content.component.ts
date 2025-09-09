import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AlertDialogOverlayComponent } from '../alert-dialog-overlay/alert-dialog-overlay.component';
import { AlertDialogPortalComponent } from '../alert-dialog-portal/alert-dialog-portal.component';

@Component({
  selector: 'ui-alert-dialog-content',
  standalone: true,
  imports: [CommonModule, AlertDialogPortalComponent, AlertDialogOverlayComponent],
  templateUrl: './alert-dialog-content.component.html',
})
export class AlertDialogContentComponent {}
