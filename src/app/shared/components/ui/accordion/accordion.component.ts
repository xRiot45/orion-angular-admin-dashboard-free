import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-accordion',
  standalone: true,
  templateUrl: './accordion.component.html',
})
export class AccordionComponent {
  @Input() type: 'single' | 'multiple' = 'single';
}
