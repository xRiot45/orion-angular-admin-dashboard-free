import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ZardBreadcrumbModule } from '@shared/components/ui/breadcrumb/breadcrumb.module';

@Component({
  selector: 'app-dashboard',
  imports: [ZardBreadcrumbModule],
  templateUrl: './dashboard.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardComponent {}
