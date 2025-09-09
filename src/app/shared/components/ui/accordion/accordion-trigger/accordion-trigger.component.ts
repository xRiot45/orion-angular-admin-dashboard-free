import { Component, inject, Input } from '@angular/core';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';

@Component({
  selector: 'ui-accordion-trigger',
  standalone: true,
  templateUrl: './accordion-trigger.component.html',
})
export class AccordionTriggerComponent {
  public item = inject(AccordionItemComponent);

  @Input() disabled = false;

  onToggle() {
    if (!this.disabled) {
      this.item.toggle();
    }
  }
}
