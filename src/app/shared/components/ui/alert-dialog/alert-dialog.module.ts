import { NgModule } from '@angular/core';
import { AlertDialogActionComponent } from './alert-dialog-action/alert-dialog-action.component';
import { AlertDialogCancelComponent } from './alert-dialog-cancel/alert-dialog-cancel.component';
import { AlertDialogContentComponent } from './alert-dialog-content/alert-dialog-content.component';
import { AlertDialogDescriptionComponent } from './alert-dialog-description/alert-dialog-description.component';
import { AlertDialogFooterComponent } from './alert-dialog-footer/alert-dialog-footer.component';
import { AlertDialogHeaderComponent } from './alert-dialog-header/alert-dialog-header.component';
import { AlertDialogOverlayComponent } from './alert-dialog-overlay/alert-dialog-overlay.component';
import { AlertDialogPortalComponent } from './alert-dialog-portal/alert-dialog-portal.component';
import { AlertDialogTitleComponent } from './alert-dialog-title/alert-dialog-title.component';
import { AlertDialogTriggerComponent } from './alert-dialog-trigger/alert-dialog-trigger.component';
import { AlertDialogComponent } from './alert-dialog.component';

@NgModule({
  imports: [
    AlertDialogComponent,
    AlertDialogActionComponent,
    AlertDialogCancelComponent,
    AlertDialogContentComponent,
    AlertDialogDescriptionComponent,
    AlertDialogFooterComponent,
    AlertDialogHeaderComponent,
    AlertDialogOverlayComponent,
    AlertDialogPortalComponent,
    AlertDialogTitleComponent,
    AlertDialogTriggerComponent,
  ],
  exports: [
    AlertDialogComponent,
    AlertDialogActionComponent,
    AlertDialogCancelComponent,
    AlertDialogContentComponent,
    AlertDialogDescriptionComponent,
    AlertDialogFooterComponent,
    AlertDialogHeaderComponent,
    AlertDialogOverlayComponent,
    AlertDialogPortalComponent,
    AlertDialogTitleComponent,
    AlertDialogTriggerComponent,
  ],
})
export class AlertDialogModule {}
