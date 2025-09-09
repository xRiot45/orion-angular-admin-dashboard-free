import { NgModule } from '@angular/core';
import { AlertDescriptionComponent } from './alert-description/alert-description.component';
import { AlertTitleComponent } from './alert-title/alert-title.component';
import { AlertComponent } from './alert.component';

@NgModule({
  imports: [AlertComponent, AlertTitleComponent, AlertDescriptionComponent],
  exports: [AlertComponent, AlertTitleComponent, AlertDescriptionComponent],
})
export class AlertModule {}
